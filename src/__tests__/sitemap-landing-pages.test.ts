import { describe, it, expect } from 'vitest';
import { generateLocaleEntries } from '@/app/sitemap';

const LOCALIZED_SLUG = 'compress-pdf-to-100kb';
const UNTRANSLATED_SLUG = 'merge-pdf-no-signup';

function landingEntries(locale: 'en' | 'es' | 'pt' | 'de' | 'ja' | 'zh' | 'fr' | 'ko' | 'zh-TW') {
  return generateLocaleEntries(locale).filter((entry) =>
    entry.url.includes(`/${LOCALIZED_SLUG}/`) || entry.url.endsWith(`/${LOCALIZED_SLUG}/`)
  );
}

describe('sitemap landing page coverage', () => {
  it('lists the localized landing page in every translated locale sitemap', () => {
    for (const locale of ['en', 'es', 'pt', 'de', 'ja'] as const) {
      const entries = landingEntries(locale);
      expect(entries, `missing ${LOCALIZED_SLUG} in ${locale} sitemap`).toHaveLength(1);
      expect(entries[0].priority).toBe(0.82);
    }
  });

  it('omits the landing page from sitemaps of locales without translation', () => {
    for (const locale of ['zh', 'fr', 'ko', 'zh-TW'] as const) {
      expect(landingEntries(locale)).toHaveLength(0);
    }
  });

  it('declares the full indexable alternate set on the localized entry', () => {
    const [entry] = landingEntries('es');
    const languages = Object.keys(entry.alternates?.languages ?? {}).sort();

    expect(languages).toEqual(['de', 'en', 'es', 'ja', 'pt', 'x-default']);
    expect(entry.alternates?.languages?.es).toBe('https://pdfkoi.com/es/compress-pdf-to-100kb/');
    expect(entry.alternates?.languages?.['x-default']).toBe('https://pdfkoi.com/compress-pdf-to-100kb/');
  });

  it('keeps untranslated landing pages English-only', () => {
    const englishEntries = generateLocaleEntries('en').filter((entry) =>
      entry.url.endsWith(`/${UNTRANSLATED_SLUG}/`)
    );
    expect(englishEntries).toHaveLength(1);

    for (const locale of ['es', 'ja', 'de', 'pt'] as const) {
      const localized = generateLocaleEntries(locale).filter((entry) =>
        entry.url.includes(`/${UNTRANSLATED_SLUG}/`)
      );
      expect(localized, `${UNTRANSLATED_SLUG} should not be indexed in ${locale}`).toHaveLength(0);
    }
  });

  it('still lists all five landing pages in the English sitemap', () => {
    const englishLandingUrls = generateLocaleEntries('en')
      .map((entry) => entry.url)
      .filter((url) => !url.includes('/tools/'));

    expect(englishLandingUrls).toContain('https://pdfkoi.com/compress-pdf-to-100kb/');
    expect(englishLandingUrls).toContain('https://pdfkoi.com/compress-pdf-for-email/');
    expect(englishLandingUrls).toContain('https://pdfkoi.com/compress-pdf-without-upload/');
    expect(englishLandingUrls).toContain('https://pdfkoi.com/merge-pdf-no-signup/');
    expect(englishLandingUrls).toContain('https://pdfkoi.com/how-to-make-a-pdf-one-continuous-page/');
  });
});
