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
      expect(entries).toContainEqual(
        expect.objectContaining({
          url: `${siteConfig.url}${getPublicPath(`/tools/category/${category}`, defaultLocale)}`,
          changeFrequency: 'weekly',
          priority: 0.85,
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

  it('includes tools directory pages in every locale sitemap', async () => {
    for (const locale of locales) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });

      expect(entries).toContainEqual(
        expect.objectContaining({
          url: `${siteConfig.url}${getPublicPath('/tools', locale)}`,
          changeFrequency: 'weekly',
          priority: 0.78,
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

  it('keeps reported GSC indexable samples in their canonical sitemaps', async () => {
    const cases = [
      { locale: 'zh', url: `${siteConfig.url}/zh/tools/pdf-to-excel/` },
      { locale: 'en', url: `${siteConfig.url}/tools/header-footer/` },
      { locale: 'zh-TW', url: `${siteConfig.url}/zh-tw/faq/` },
      { locale: 'en', url: `${siteConfig.url}/tools/reverse-pages/` },
      { locale: 'en', url: `${siteConfig.url}/tools/pdf-to-docx/` },
      { locale: 'en', url: `${siteConfig.url}/tools/jpg-to-pdf/` },
      { locale: 'fr', url: `${siteConfig.url}/fr/tools/background-color/` },
      { locale: 'en', url: `${siteConfig.url}/tools/page-dimensions/` },
      { locale: 'en', url: `${siteConfig.url}/tools/add-attachments/` },
      { locale: 'es', url: `${siteConfig.url}/es/tools/organize-pdf/` },
      { locale: 'ja', url: `${siteConfig.url}/ja/tools/rtf-to-pdf/` },
      { locale: 'es', url: `${siteConfig.url}/es/tools/extract-images/` },
      { locale: 'es', url: `${siteConfig.url}/es/tools/pdf-to-bmp/` },
    ] as const;

    for (const { locale, url } of cases) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });

      expect(entries).toContainEqual(
        expect.objectContaining({ url })
      );
    }
  });

  it('keeps reported GSC noindex samples out of sitemaps while preserving fixed indexable samples', async () => {
    const noindexUrls = [
      `${siteConfig.url}/pt/compress-pdf-without-upload/`,
      `${siteConfig.url}/ko/compress-pdf-for-email/`,
      `${siteConfig.url}/zh-tw/merge-pdf-no-signup/`,
      `${siteConfig.url}/pt/compress-pdf-for-email/`,
      `${siteConfig.url}/ko/compress-pdf-without-upload/`,
      `${siteConfig.url}/pt/merge-pdf-no-signup/`,
      `${siteConfig.url}/de/compress-pdf-without-upload/`,
      `${siteConfig.url}/de/merge-pdf-no-signup/`,
      `${siteConfig.url}/fr/merge-pdf-no-signup/`,
      `${siteConfig.url}/fr/privacy/`,
      `${siteConfig.url}/es/compress-pdf-without-upload/`,
      `${siteConfig.url}/ja/compress-pdf-without-upload/`,
      `${siteConfig.url}/ja/compress-pdf-for-email/`,
      `${siteConfig.url}/es/compress-pdf-for-email/`,
      `${siteConfig.url}/ja/merge-pdf-no-signup/`,
      `${siteConfig.url}/es/merge-pdf-no-signup/`,
      `${siteConfig.url}/en/tools/?q=(search_term_string}`,
      `${siteConfig.url}/pt/cookies/`,
      `${siteConfig.url}/en/cookies/`,
      `${siteConfig.url}/ko/cookies/`,
    ] as const;

    const sitemapUrls = new Set<string>();

    for (const locale of locales) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });
      for (const entry of entries) {
        sitemapUrls.add(entry.url);
      }
    }

    for (const url of noindexUrls) {
      expect(sitemapUrls.has(url)).toBe(false);
    }

    expect(sitemapUrls.has(`${siteConfig.url}/pt/tools/pdf-booklet/`)).toBe(true);
  });

  it('keeps reported GSC redirect samples out of all sitemaps', async () => {
    const redirectingUrls = [
      `${siteConfig.url}/en/`,
      `${siteConfig.url}/en/compress-pdf-without-upload/`,
      `${siteConfig.url}/en/tools/organize-pdf/`,
      `${siteConfig.url}/tools/organize-pdf`,
      `${siteConfig.url}/en/merge-pdf-no-signup/`,
      `${siteConfig.url}/faq`,
      `${siteConfig.url}/en/compress-pdf-for-email/`,
      `${siteConfig.url}/en/tools/text-color/`,
      `${siteConfig.url}/zh-tw/tools/jpg-to-pdf`,
      `${siteConfig.url}/zh/tools/pdf-to-docx`,
      `${siteConfig.url}/ja/tools/?category=edit-annotate`,
      `${siteConfig.url}/en/tools/edit-metadata/`,
      `${siteConfig.url}/zh/tools/?category=convert-from-pdf`,
      `${siteConfig.url}/zh/tools/?category=optimize-repair`,
      `${siteConfig.url}/en/tools/?category=convert-to-pdf`,
      `${siteConfig.url}/en/tools/category/edit-annotate/`,
      `${siteConfig.url}/es/tools/compress-pdf`,
      `${siteConfig.url}/en/tools/heic-to-pdf/`,
      `${siteConfig.url}/en/tools/pdf-to-docx/`,
      `${siteConfig.url}/zh/tools/remove-metadata`,
      `${siteConfig.url}/en/terms/`,
      'https://www.pdfkoi.com/',
      `${siteConfig.url}/en/tools/split-pdf/`,
      `${siteConfig.url}/zh-tw/tools/pdf-to-jpg`,
      `${siteConfig.url}/zh/tools/?category=edit-annotate`,
      `${siteConfig.url}/en/tools/category/convert-from-pdf/`,
      `${siteConfig.url}/en/tools/pdf-to-jpg/`,
      `${siteConfig.url}/tools/pdf-to-jpg`,
      `${siteConfig.url}/en/tools/merge-pdf/`,
      `${siteConfig.url}/tools/merge-pdf`,
      `${siteConfig.url}/en/tools/compress-pdf/`,
      `${siteConfig.url}/tools/compress-pdf`,
      `${siteConfig.url}/en/tools/jpg-to-pdf/`,
      `${siteConfig.url}/tools/jpg-to-pdf`,
      'http://pdfkoi.com/',
      `${siteConfig.url}/zh-TW/tools/pdf-to-docx`,
      `${siteConfig.url}/zh-tw/tools/pdf-to-docx`,
      `${siteConfig.url}/ja/tools/?category=optimize-repair`,
      'http://www.pdfkoi.com/',
      `${siteConfig.url}/en/tools/merge-pdf`,
      `${siteConfig.url}/en/tools/split-pdf`,
      `${siteConfig.url}/zh-TW/`,
      `${siteConfig.url}/tools/pdf-to-docx`,
      `${siteConfig.url}/en/tools/jpg-to-pdf`,
      `${siteConfig.url}/es/tools/rtf-to-pdf/`,
    ] as const;

    const sitemapUrls = new Set<string>();

    for (const locale of locales) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });
      for (const entry of entries) {
        sitemapUrls.add(entry.url);
      }
    }

    for (const url of redirectingUrls) {
      expect(sitemapUrls.has(url)).toBe(false);
    }
  });

  it('keeps reported GSC 404 locale-tool combinations out of localized sitemaps', async () => {
    const cases = [
      { locale: 'de', toolId: 'flatten-pdf', slug: 'flatten-pdf' },
      { locale: 'pt', toolId: 'pdf-to-zip', slug: 'pdf-to-zip' },
      { locale: 'ja', toolId: 'ocg-manager', slug: 'ocg-manager' },
      { locale: 'de', toolId: 'edit-attachments', slug: 'edit-attachments' },
      { locale: 'ko', toolId: 'ocg-manager', slug: 'ocg-manager' },
      { locale: 'es', toolId: 'pdf-to-pdfa', slug: 'pdf-to-pdfa' },
      { locale: 'es', toolId: 'rtf-to-pdf', slug: 'rtf-to-pdf' },
      { locale: 'pt', toolId: 'djvu-to-pdf', slug: 'djvu-to-pdf' },
      { locale: 'ko', toolId: 'pdf-reader', slug: 'pdf-reader' },
      { locale: 'pt', toolId: 'pdf-to-pptx', slug: 'pdf-to-pptx' },
      { locale: 'fr', toolId: 'djvu-to-pdf', slug: 'djvu-to-pdf' },
      { locale: 'pt', toolId: 'jpg-to-pdf', slug: 'jpg-to-pdf' },
      { locale: 'zh', toolId: 'font-to-outline', slug: 'font-to-outline' },
      { locale: 'zh', toolId: 'cbz-to-pdf', slug: 'cbz-to-pdf' },
      { locale: 'ko', toolId: 'compare-pdfs', slug: 'compare-pdfs' },
      { locale: 'ko', toolId: 'rtf-to-pdf', slug: 'rtf-to-pdf' },
      { locale: 'ko', toolId: 'extract-images', slug: 'extract-images' },
      { locale: 'pt', toolId: 'rasterize-pdf', slug: 'rasterize-pdf' },
      { locale: 'zh-TW', toolId: 'markdown-to-pdf', slug: 'markdown-to-pdf' },
      { locale: 'ko', toolId: 'pdf-to-svg', slug: 'pdf-to-svg' },
      { locale: 'ko', toolId: 'extract-attachments', slug: 'extract-attachments' },
      { locale: 'ja', toolId: 'markdown-to-pdf', slug: 'markdown-to-pdf' },
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
          expect(entry.url.includes(`${siteConfig.url}/en/`)).toBe(false);
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

  it('emits only clean production canonical URLs in every sitemap', async () => {
    const sitemapUrls = new Set<string>();

    for (const locale of locales) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });

      for (const entry of entries) {
        sitemapUrls.add(entry.url);
        const parsed = new URL(entry.url);

        expect(parsed.origin).toBe(siteConfig.url);
        expect(parsed.search).toBe('');
        expect(parsed.hash).toBe('');
        expect(parsed.hostname).toBe('pdfkoi.com');
        expect(parsed.protocol).toBe('https:');
        expect(parsed.pathname === '/' || parsed.pathname.endsWith('/')).toBe(true);
        expect(parsed.pathname).not.toContain('/en/');
        expect(parsed.pathname).not.toContain('/zh-TW/');
      }
    }

    const expectedCanonicalUrls = [
      `${siteConfig.url}/`,
      `${siteConfig.url}/contact/`,
      `${siteConfig.url}/terms/`,
      `${siteConfig.url}/privacy/`,
      `${siteConfig.url}/cookies/`,
      `${siteConfig.url}/tools/`,
      `${siteConfig.url}/tools/category/convert-from-pdf/`,
      `${siteConfig.url}/compress-pdf-for-email/`,
      `${siteConfig.url}/compress-pdf-without-upload/`,
      `${siteConfig.url}/merge-pdf-no-signup/`,
      `${siteConfig.url}/tools/organize-pdf/`,
      `${siteConfig.url}/tools/pdf-to-jpg/`,
      `${siteConfig.url}/tools/merge-pdf/`,
      `${siteConfig.url}/tools/split-pdf/`,
      `${siteConfig.url}/tools/compress-pdf/`,
      `${siteConfig.url}/tools/jpg-to-pdf/`,
      `${siteConfig.url}/es/tools/compress-pdf/`,
      `${siteConfig.url}/zh/tools/pdf-to-docx/`,
      `${siteConfig.url}/zh-tw/tools/pdf-to-docx/`,
      `${siteConfig.url}/zh-tw/tools/jpg-to-pdf/`,
      `${siteConfig.url}/zh-tw/tools/pdf-to-jpg/`,
    ];

    for (const url of expectedCanonicalUrls) {
      expect(sitemapUrls.has(url)).toBe(true);
    }
  });

  it('classifies every latest GSC sample as a redirect/noindex URL or a clean canonical target', async () => {
    const sitemapUrls = new Set<string>();

    for (const locale of locales) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });
      for (const entry of entries) {
        sitemapUrls.add(entry.url);
      }
    }

    const redirectOnlyUrls = [
      `${siteConfig.url}/en/tools/split-pdf/`,
      'http://www.pdfkoi.com/',
      `${siteConfig.url}/en/contact/`,
      `${siteConfig.url}/en/`,
      `${siteConfig.url}/en/compress-pdf-without-upload/`,
      `${siteConfig.url}/en/tools/organize-pdf/`,
      `${siteConfig.url}/tools/organize-pdf`,
      `${siteConfig.url}/en/merge-pdf-no-signup/`,
      `${siteConfig.url}/faq`,
      `${siteConfig.url}/en/compress-pdf-for-email/`,
      `${siteConfig.url}/en/tools/text-color/`,
      `${siteConfig.url}/zh-tw/tools/jpg-to-pdf`,
      `${siteConfig.url}/zh/tools/pdf-to-docx`,
      `${siteConfig.url}/ja/tools/?category=edit-annotate`,
      `${siteConfig.url}/en/tools/edit-metadata/`,
      `${siteConfig.url}/zh/tools/?category=convert-from-pdf`,
      `${siteConfig.url}/zh/tools/?category=optimize-repair`,
      `${siteConfig.url}/en/tools/?category=convert-to-pdf`,
      `${siteConfig.url}/es/tools/compress-pdf`,
      `${siteConfig.url}/en/tools/heic-to-pdf/`,
      `${siteConfig.url}/en/tools/pdf-to-docx/`,
      `${siteConfig.url}/zh/tools/remove-metadata`,
      `${siteConfig.url}/en/terms/`,
      'https://www.pdfkoi.com/',
      `${siteConfig.url}/zh-tw/tools/pdf-to-jpg`,
      `${siteConfig.url}/zh/tools/?category=edit-annotate`,
      `${siteConfig.url}/en/tools/pdf-to-jpg/`,
      `${siteConfig.url}/tools/pdf-to-jpg`,
      `${siteConfig.url}/en/tools/merge-pdf/`,
      `${siteConfig.url}/tools/merge-pdf`,
      `${siteConfig.url}/en/tools/compress-pdf/`,
      `${siteConfig.url}/tools/compress-pdf`,
      `${siteConfig.url}/en/tools/jpg-to-pdf/`,
      `${siteConfig.url}/tools/jpg-to-pdf`,
      'http://pdfkoi.com/',
      `${siteConfig.url}/zh-TW/tools/pdf-to-docx`,
      `${siteConfig.url}/zh-tw/tools/pdf-to-docx`,
      `${siteConfig.url}/ja/tools/?category=optimize-repair`,
      `${siteConfig.url}/en/tools/merge-pdf`,
      `${siteConfig.url}/en/tools/split-pdf`,
    ];

    for (const url of redirectOnlyUrls) {
      expect(sitemapUrls.has(url)).toBe(false);
    }
  });

  it('keeps localized privacy, localized cookies, and manifest URLs out of every sitemap while indexing root legal pages', async () => {
    const sitemapUrls = new Set<string>();

    for (const locale of locales) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });

      for (const entry of entries) {
        sitemapUrls.add(entry.url);
        expect(entry.url).not.toContain('/manifest.webmanifest');

        if (locale !== defaultLocale) {
          expect(entry.url).not.toContain(`${getPublicPath('/privacy', locale)}`);
          expect(entry.url).not.toContain(`${getPublicPath('/cookies', locale)}`);
        }
      }
    }

    expect(sitemapUrls.has(`${siteConfig.url}/privacy/`)).toBe(true);
    expect(sitemapUrls.has(`${siteConfig.url}/cookies/`)).toBe(true);
  });
});
