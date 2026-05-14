import { describe, expect, it } from 'vitest';
import sitemap from '@/app/sitemap';
import robots from '@/app/robots';
import { defaultLocale, getLocaleSlug, locales, normalizeLocale, type Locale } from '@/lib/i18n/config';
import { getToolById } from '@/config/tools';
import { getToolIndexableLocales, shouldIndexLocalizedToolPage } from '@/lib/seo/indexing-policy';
import { gscIndexingSamples } from '@/__tests__/fixtures/gsc-indexing-samples';

function parseToolPath(pathname: string): { locale: Locale; toolSlug: string } | null {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 2 && segments[0] === 'tools') {
    return { locale: defaultLocale, toolSlug: segments[1] };
  }

  if (segments.length === 3 && segments[1] === 'tools') {
    const locale = normalizeLocale(segments[0]);
    if (!locale) {
      return null;
    }

    return { locale, toolSlug: segments[2] };
  }

  return null;
}

describe('GSC indexing sample classification property tests', () => {
  it('keeps indexable samples in their canonical sitemaps', async () => {
    const sitemapUrls = new Set<string>();

    for (const locale of locales) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });
      for (const entry of entries) {
        sitemapUrls.add(entry.url);
      }
    }

    const indexableSamples = gscIndexingSamples.filter((sample) => sample.category === 'indexable_200');

    for (const sample of indexableSamples) {
      expect(sitemapUrls.has(sample.url)).toBe(true);
    }
  });

  it('keeps canonical redirect and non-html samples out of sitemap URLs', async () => {
    const sitemapUrls = new Set<string>();

    for (const locale of locales) {
      const entries = await sitemap({ id: Promise.resolve(getLocaleSlug(locale)) });
      for (const entry of entries) {
        sitemapUrls.add(entry.url);
      }
    }

    const excludedSamples = gscIndexingSamples.filter(
      (sample) => sample.category === 'canonical_redirect' || sample.category === 'non_html_resource'
    );

    for (const sample of excludedSamples) {
      expect(sitemapUrls.has(sample.url)).toBe(false);
    }
  });

  it('keeps intentional 404 locale-tool combinations non-indexable and absent from localized alternates', () => {
    const intentional404Samples = gscIndexingSamples.filter((sample) => sample.category === 'intentional_404');

    for (const sample of intentional404Samples) {
      const parsed = new URL(sample.url);
      const toolPath = parseToolPath(parsed.pathname);

      expect(toolPath).not.toBeNull();
      if (!toolPath) {
        continue;
      }

      const tool = getToolById(toolPath.toolSlug);
      expect(tool).toBeDefined();
      if (!tool) {
        continue;
      }

      expect(shouldIndexLocalizedToolPage(toolPath.locale, tool.id)).toBe(false);
      expect(getToolIndexableLocales(tool.id)).not.toContain(toolPath.locale);
    }
  });

  it('keeps manifest disallowed from crawlable page paths', () => {
    const rules = robots().rules;
    const firstRule = Array.isArray(rules) ? rules[0] : rules;

    expect(firstRule.disallow).toContain('/manifest.webmanifest');
  });
});
