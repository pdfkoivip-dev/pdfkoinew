import { describe, expect, it } from 'vitest';
import sitemap, { generateSitemaps, getSitemapUrlCount } from '@/app/sitemap';
import { siteConfig } from '@/config/site';
import { getLocaleSlug, getPublicPath, defaultLocale, locales } from '@/lib/i18n/config';
import {
  getToolIndexableLocales,
  shouldGenerateLocalizedToolPage,
  shouldIndexCategoryHub,
  shouldIndexStaticPage,
} from '@/lib/seo/indexing-policy';
import { TOOL_CATEGORIES } from '@/types/tool';
import { getAllTools } from '@/config/tools';
import { hasLocalizedToolContent } from '@/config/tool-content';
import { landingPageSlugs } from '@/content/seo/landing-pages';

describe('Sitemap property tests', () => {
  it('generates one sitemap id per locale', async () => {
    const sitemapIds = await generateSitemaps();

    expect(sitemapIds).toEqual(
      locales.map((locale) => ({
        id: getLocaleSlug(locale),
      }))
    );
  });

  it('english sitemap includes the homepage, all indexable tool pages, and all long-tail pages', async () => {
    const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(defaultLocale)) });

    expect(entries).toContainEqual(
      expect.objectContaining({
        url: `${siteConfig.url}${getPublicPath('/', defaultLocale)}`,
        changeFrequency: 'daily',
        priority: 1,
      })
    );

    for (const tool of getAllTools()) {
      if (!shouldGenerateLocalizedToolPage(defaultLocale, tool.id)) {
        continue;
      }

      expect(entries).toContainEqual(
        expect.objectContaining({
          url: `${siteConfig.url}${getPublicPath(`/tools/${tool.slug}`, defaultLocale)}`,
          changeFrequency: 'weekly',
          priority: 0.8,
        })
      );
    }

    for (const category of TOOL_CATEGORIES) {
      expect(entries).not.toContainEqual(
        expect.objectContaining({
          url: `${siteConfig.url}${getPublicPath(`/tools/category/${category}`, defaultLocale)}`,
        })
      );
    }

    for (const slug of landingPageSlugs) {
      expect(entries).toContainEqual(
        expect.objectContaining({
          url: `${siteConfig.url}${getPublicPath(`/${slug}`, defaultLocale)}`,
          changeFrequency: 'weekly',
          priority: 0.82,
        })
      );
    }
  });

  it('non-english sitemaps do not include english-only long-tail landing pages', async () => {
    for (const locale of locales.filter((locale) => locale !== defaultLocale)) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });

      for (const slug of landingPageSlugs) {
        expect(entries).not.toContainEqual(
          expect.objectContaining({
            url: `${siteConfig.url}${getPublicPath(`/${slug}`, locale)}`,
          })
        );
      }
    }
  });

  it('keeps tools directory pages out of every sitemap', async () => {
    for (const locale of locales) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });

      expect(entries).not.toContainEqual(
        expect.objectContaining({
          url: `${siteConfig.url}${getPublicPath('/tools', locale)}`,
        })
      );
    }
  });

  it('includes category hubs only for locales that remain indexable', async () => {
    for (const locale of locales) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });

      for (const category of TOOL_CATEGORIES) {
        const matcher = expect.objectContaining({
          url: `${siteConfig.url}${getPublicPath(`/tools/category/${category}`, locale)}`,
        });

        if (shouldIndexCategoryHub(locale)) {
          expect(entries).toContainEqual(matcher);
        } else {
          expect(entries).not.toContainEqual(matcher);
        }
      }
    }
  });

  it('keeps non-english about pages out of localized sitemaps while preserving english about', async () => {
    const englishEntries = await sitemap({ id: Promise.resolve(getLocaleSlug(defaultLocale)) });

    expect(shouldIndexStaticPage(defaultLocale, '/about')).toBe(true);
    expect(englishEntries).toContainEqual(
      expect.objectContaining({
        url: `${siteConfig.url}/about/`,
      })
    );

    for (const locale of locales.filter((candidate) => candidate !== defaultLocale)) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });

      expect(shouldIndexStaticPage(locale, '/about')).toBe(false);
      expect(entries).not.toContainEqual(
        expect.objectContaining({
          url: `${siteConfig.url}${getPublicPath('/about', locale)}`,
        })
      );
    }
  });

  it('reported sitemap URL count matches each generated locale sitemap entry count', async () => {
    for (const locale of locales) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });

      expect(getSitemapUrlCount(locale)).toBe(entries.length);
    }
  });

  it('excludes only tool locales that fail the generation policy from non-english sitemaps', async () => {
    const ptEntries = await sitemap({ id: Promise.resolve('pt') });
    const esEntries = await sitemap({ id: Promise.resolve('es') });

    expect(hasLocalizedToolContent('pt', 'email-to-pdf')).toBe(false);
    expect(hasLocalizedToolContent('pt', 'pdf-booklet')).toBe(true);
    expect(hasLocalizedToolContent('es', 'extract-images')).toBe(true);
    expect(shouldGenerateLocalizedToolPage('pt', 'email-to-pdf')).toBe(false);
    expect(shouldGenerateLocalizedToolPage('pt', 'pdf-booklet')).toBe(true);
    expect(shouldGenerateLocalizedToolPage('es', 'extract-images')).toBe(true);

    expect(ptEntries).not.toContainEqual(
      expect.objectContaining({
        url: `${siteConfig.url}/pt/tools/email-to-pdf/`,
      })
    );

    expect(ptEntries).toContainEqual(
      expect.objectContaining({
        url: `${siteConfig.url}/pt/tools/pdf-booklet/`,
      })
    );

    expect(esEntries).toContainEqual(
      expect.objectContaining({
        url: `${siteConfig.url}/es/tools/extract-images/`,
      })
    );
  });

  it('keeps reported GSC 404 locale-tool combinations out of localized sitemaps', async () => {
    const cases = [
      { locale: 'es', toolId: 'pdf-to-pdfa', slug: 'pdf-to-pdfa' },
      { locale: 'pt', toolId: 'djvu-to-pdf', slug: 'djvu-to-pdf' },
      { locale: 'ko', toolId: 'pdf-reader', slug: 'pdf-reader' },
      { locale: 'pt', toolId: 'pdf-to-pptx', slug: 'pdf-to-pptx' },
      { locale: 'pt', toolId: 'pdf-to-zip', slug: 'pdf-to-zip' },
      { locale: 'fr', toolId: 'djvu-to-pdf', slug: 'djvu-to-pdf' },
    ] as const;

    for (const { locale, toolId, slug } of cases) {
      const entries = await sitemap({ id: Promise.resolve(locale) });

      expect(hasLocalizedToolContent(locale, toolId)).toBe(false);
      expect(shouldGenerateLocalizedToolPage(locale, toolId)).toBe(false);
      expect(getToolIndexableLocales(toolId)).not.toContain(locale);
      expect(entries).not.toContainEqual(
        expect.objectContaining({
          url: `${siteConfig.url}${getPublicPath(`/tools/${slug}`, locale)}`,
        })
      );
    }
  });

  it('keeps each locale sitemap limited to its own locale paths', async () => {
    for (const locale of locales) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });
      const expectedPrefix = `${siteConfig.url}${getPublicPath('/', locale)}`;

      for (const entry of entries) {
        if (locale === defaultLocale) {
          expect(entry.url.startsWith(`${siteConfig.url}/`)).toBe(true);
          expect(entry.url.includes(`${siteConfig.url}/zh/`)).toBe(false);
          expect(entry.url.includes(`${siteConfig.url}/zh-tw/`)).toBe(false);
          expect(entry.url.includes(`${siteConfig.url}/ko/`)).toBe(false);
          expect(entry.url.includes(`${siteConfig.url}/es/`)).toBe(false);
        } else {
          expect(entry.url.startsWith(expectedPrefix)).toBe(true);
        }
      }
    }
  });

  it('keeps privacy and cookies pages out of every sitemap', async () => {
    const blockedPathFragments = ['/privacy/', '/cookies/'];

    for (const locale of locales) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });

      for (const entry of entries) {
        for (const blockedPathFragment of blockedPathFragments) {
          expect(entry.url).not.toContain(blockedPathFragment);
        }
      }
    }
  });
});
