import { describe, it, expect } from 'vitest';
import {
  getLandingPageContent,
  getLandingPageIndexableLocales,
  hasLocalizedLandingPage,
  landingPageSlugs,
  localizedLandingPages,
  type LandingPageSlug,
} from '@/content/seo/landing-pages';
import { defaultLocale, locales } from '@/lib/i18n/config';

const LOCALIZED_SLUG: LandingPageSlug = 'compress-pdf-to-100kb';
const EXPECTED_LOCALES = ['en', 'es', 'pt', 'de', 'ja'];

/**
 * Approximate SERP display width: CJK / full-width characters occupy two units.
 * Japanese meta descriptions use far fewer characters than Latin ones for the
 * same visual length, so raw character counts would produce false failures.
 */
function displayWidth(value: string): number {
  return Array.from(value).reduce(
    (width, char) => width + (/[\u1100-\u11ff\u2e80-\u9fff\uac00-\ud7af\uff00-\uffef]/.test(char) ? 2 : 1),
    0
  );
}

describe('long-tail landing page localization', () => {
  it('returns translated content for locales with an override', () => {
    expect(getLandingPageContent(LOCALIZED_SLUG, 'es').title).toContain('Comprimir PDF a 100KB');
    expect(getLandingPageContent(LOCALIZED_SLUG, 'pt').title).toContain('Comprimir PDF para 100KB');
    expect(getLandingPageContent(LOCALIZED_SLUG, 'de').title).toContain('PDF auf 100KB komprimieren');
    expect(getLandingPageContent(LOCALIZED_SLUG, 'ja').title).toContain('100KB');
  });

  it('falls back to English when no localized content exists', () => {
    const english = getLandingPageContent(LOCALIZED_SLUG);
    const zh = getLandingPageContent(LOCALIZED_SLUG, 'zh');
    const fr = getLandingPageContent(LOCALIZED_SLUG, 'fr');

    expect(zh).toBe(english);
    expect(fr).toBe(english);
    expect(english.title).toContain('Compress PDF to 100KB');
  });

  it('exposes the correct indexable locale set', () => {
    expect(getLandingPageIndexableLocales(LOCALIZED_SLUG).sort()).toEqual([...EXPECTED_LOCALES].sort());

    // Landing pages without translations stay English-only
    for (const slug of landingPageSlugs) {
      if (slug === LOCALIZED_SLUG) continue;
      expect(getLandingPageIndexableLocales(slug)).toEqual([defaultLocale]);
    }
  });

  it('reports localization availability accurately', () => {
    expect(hasLocalizedLandingPage('es', LOCALIZED_SLUG)).toBe(true);
    expect(hasLocalizedLandingPage('zh', LOCALIZED_SLUG)).toBe(false);
    expect(hasLocalizedLandingPage('en', LOCALIZED_SLUG)).toBe(false);
  });

  it('keeps every localized page structurally complete', () => {
    for (const locale of locales) {
      const page = localizedLandingPages[locale]?.[LOCALIZED_SLUG];
      if (!page) continue;

      expect(page.slug).toBe(LOCALIZED_SLUG);
      expect(page.title.length).toBeGreaterThan(20);
      expect(page.metaDescription.length).toBeGreaterThan(60);
      expect(displayWidth(page.metaDescription)).toBeGreaterThan(90);
      expect(displayWidth(page.metaDescription)).toBeLessThanOrEqual(200);
      expect(page.keywords.length).toBeGreaterThanOrEqual(5);
      expect(page.h1).toBeTruthy();
      expect(page.eyebrow).toBeTruthy();
      expect(page.intro).toBeTruthy();
      expect(page.heroBody).toBeTruthy();
      expect(page.sectionBody.length).toBeGreaterThanOrEqual(2);
      expect(page.evidenceItems.length).toBe(3);
      expect(page.steps.length).toBe(3);
      expect(page.whyPoints.length).toBe(3);
      expect(page.scenarios.length).toBe(3);
      expect(page.faqs.length).toBeGreaterThanOrEqual(4);
      expect(page.relatedLinks.length).toBe(3);

      // Internal links must stay locale-agnostic (component localizes them)
      expect(page.primaryCtaHref.startsWith('/')).toBe(true);
      expect(page.secondaryCtaHref.startsWith('/')).toBe(true);
      for (const link of page.relatedLinks) {
        expect(link.href.startsWith('/')).toBe(true);
      }
    }
  });

  it('does not leak English copy into translated pages', () => {
    const english = getLandingPageContent(LOCALIZED_SLUG);
    for (const locale of ['es', 'pt', 'de', 'ja'] as const) {
      const page = getLandingPageContent(LOCALIZED_SLUG, locale);
      expect(page.title).not.toBe(english.title);
      expect(page.h1).not.toBe(english.h1);
      expect(page.metaDescription).not.toBe(english.metaDescription);
      expect(page.stepsTitle).not.toBe(english.stepsTitle);
      expect(page.faqTitle).not.toBe(english.faqTitle);
    }
  });
});
