import { describe, expect, it } from 'vitest';
import { getLocaleRedirectPath } from '../../../functions/_lib/locale-redirects.js';

describe('locale redirect helpers', () => {
  it('redirects /en/ to the canonical root URL', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/en/'))).toBe('/');
  });

  it('redirects /en/tools to the default-language tools URL', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/en/tools'))).toBe('/tools/');
  });

  it('preserves query strings when redirecting English-prefixed URLs', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/en/tools?foo=bar'))).toBe('/tools/?foo=bar');
  });

  it('redirects /en/tools/merge-pdf to the trailing-slash canonical URL', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/en/tools/merge-pdf'))).toBe('/tools/merge-pdf/');
  });

  it('redirects /en/tools/split-pdf to the trailing-slash canonical URL and preserves query strings', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/en/tools/split-pdf?via=gsc'))).toBe('/tools/split-pdf/?via=gsc');
  });

  it('redirects /en/tools/jpg-to-pdf to the trailing-slash canonical URL', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/en/tools/jpg-to-pdf'))).toBe('/tools/jpg-to-pdf/');
  });

  it('redirects /en/tools/pdf-to-docx to the trailing-slash canonical URL', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/en/tools/pdf-to-docx'))).toBe('/tools/pdf-to-docx/');
  });

  it('redirects /en/terms/ to the default-language canonical URL', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/en/terms/'))).toBe('/terms/');
  });

  it('redirects /zh-TW/ to the lowercase locale slug', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/zh-TW/'))).toBe('/zh-tw/');
  });

  it('redirects nested /zh-TW paths to lowercase locale slugs', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/zh-TW/tools/merge-pdf'))).toBe('/zh-tw/tools/merge-pdf');
  });

  it('preserves query strings when redirecting /zh-TW/ variants', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/zh-TW/?via=gsc'))).toBe('/zh-tw/?via=gsc');
  });

  it('keeps reported GSC default-locale redirect samples pointed at root English canonicals', () => {
    const cases = [
      ['https://pdfkoi.com/en/', '/'],
      ['https://pdfkoi.com/en/compress-pdf-without-upload/', '/compress-pdf-without-upload/'],
      ['https://pdfkoi.com/en/tools/organize-pdf/', '/tools/organize-pdf/'],
      ['https://pdfkoi.com/en/merge-pdf-no-signup/', '/merge-pdf-no-signup/'],
      ['https://pdfkoi.com/en/compress-pdf-for-email/', '/compress-pdf-for-email/'],
      ['https://pdfkoi.com/en/tools/text-color/', '/tools/text-color/'],
      ['https://pdfkoi.com/en/tools/edit-metadata/', '/tools/edit-metadata/'],
      ['https://pdfkoi.com/en/tools/heic-to-pdf/', '/tools/heic-to-pdf/'],
      ['https://pdfkoi.com/en/tools/pdf-to-docx/', '/tools/pdf-to-docx/'],
      ['https://pdfkoi.com/en/terms/', '/terms/'],
      ['https://pdfkoi.com/en/tools/split-pdf/', '/tools/split-pdf/'],
      ['https://pdfkoi.com/en/tools/pdf-to-jpg/', '/tools/pdf-to-jpg/'],
      ['https://pdfkoi.com/en/tools/merge-pdf/', '/tools/merge-pdf/'],
      ['https://pdfkoi.com/en/tools/compress-pdf/', '/tools/compress-pdf/'],
      ['https://pdfkoi.com/en/tools/jpg-to-pdf/', '/tools/jpg-to-pdf/'],
      ['https://pdfkoi.com/en/tools/merge-pdf', '/tools/merge-pdf/'],
      ['https://pdfkoi.com/en/tools/split-pdf', '/tools/split-pdf/'],
      ['https://pdfkoi.com/en/tools/text-color', '/tools/text-color/'],
      ['https://pdfkoi.com/en/tools/heic-to-pdf', '/tools/heic-to-pdf/'],
      ['https://pdfkoi.com/en/contact', '/contact/'],
      ['https://pdfkoi.com/en/terms', '/terms/'],
    ] as const;

    for (const [source, destination] of cases) {
      expect(getLocaleRedirectPath(new URL(source))).toBe(destination);
    }
  });

  it('keeps reported GSC uppercase zh-TW redirect samples pointed at lowercase locale canonicals', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/zh-TW/tools/pdf-to-docx'))).toBe('/zh-tw/tools/pdf-to-docx');
  });

  it('redirects localized default-language landing and legal pages to root English canonicals', () => {
    const cases = [
      ['https://pdfkoi.com/ko/merge-pdf-no-signup/', '/merge-pdf-no-signup/'],
      ['https://pdfkoi.com/zh-tw/compress-pdf-for-email/', '/compress-pdf-for-email/'],
      ['https://pdfkoi.com/fr/compress-pdf-for-email/', '/compress-pdf-for-email/'],
      ['https://pdfkoi.com/fr/compress-pdf-without-upload/', '/compress-pdf-without-upload/'],
      ['https://pdfkoi.com/pt/compress-pdf-without-upload/', '/compress-pdf-without-upload/'],
      ['https://pdfkoi.com/ko/compress-pdf-for-email/', '/compress-pdf-for-email/'],
      ['https://pdfkoi.com/zh-tw/merge-pdf-no-signup/', '/merge-pdf-no-signup/'],
      ['https://pdfkoi.com/pt/compress-pdf-for-email/', '/compress-pdf-for-email/'],
      ['https://pdfkoi.com/ko/compress-pdf-without-upload/', '/compress-pdf-without-upload/'],
      ['https://pdfkoi.com/pt/merge-pdf-no-signup/', '/merge-pdf-no-signup/'],
      ['https://pdfkoi.com/de/compress-pdf-without-upload/', '/compress-pdf-without-upload/'],
      ['https://pdfkoi.com/de/merge-pdf-no-signup/', '/merge-pdf-no-signup/'],
      ['https://pdfkoi.com/fr/merge-pdf-no-signup/', '/merge-pdf-no-signup/'],
      ['https://pdfkoi.com/es/compress-pdf-without-upload/', '/compress-pdf-without-upload/'],
      ['https://pdfkoi.com/ja/compress-pdf-without-upload/', '/compress-pdf-without-upload/'],
      ['https://pdfkoi.com/ja/compress-pdf-for-email/', '/compress-pdf-for-email/'],
      ['https://pdfkoi.com/es/compress-pdf-for-email/', '/compress-pdf-for-email/'],
      ['https://pdfkoi.com/ja/merge-pdf-no-signup/', '/merge-pdf-no-signup/'],
      ['https://pdfkoi.com/es/merge-pdf-no-signup?via=gsc', '/merge-pdf-no-signup/?via=gsc'],
      ['https://pdfkoi.com/ja/privacy/', '/privacy/'],
      ['https://pdfkoi.com/fr/privacy/', '/privacy/'],
      ['https://pdfkoi.com/zh/cookies/', '/cookies/'],
      ['https://pdfkoi.com/pt/cookies/', '/cookies/'],
      ['https://pdfkoi.com/ko/cookies?via=gsc', '/cookies/?via=gsc'],
    ] as const;

    for (const [source, destination] of cases) {
      expect(getLocaleRedirectPath(new URL(source))).toBe(destination);
    }
  });

  it('redirects reported missing localized tool URLs to default-language canonicals', () => {
    const cases = [
      ['https://pdfkoi.com/de/tools/flatten-pdf/', '/tools/flatten-pdf/'],
      ['https://pdfkoi.com/pt/tools/pdf-to-zip/', '/tools/pdf-to-zip/'],
      ['https://pdfkoi.com/ja/tools/ocg-manager/', '/tools/ocg-manager/'],
      ['https://pdfkoi.com/de/tools/edit-attachments/', '/tools/edit-attachments/'],
      ['https://pdfkoi.com/ko/tools/ocg-manager/', '/tools/ocg-manager/'],
      ['https://pdfkoi.com/es/tools/pdf-to-pdfa/', '/tools/pdf-to-pdfa/'],
      ['https://pdfkoi.com/es/tools/rtf-to-pdf/', '/tools/rtf-to-pdf/'],
      ['https://pdfkoi.com/pt/tools/djvu-to-pdf/', '/tools/djvu-to-pdf/'],
      ['https://pdfkoi.com/ko/tools/pdf-reader/', '/tools/pdf-reader/'],
      ['https://pdfkoi.com/pt/tools/pdf-to-pptx/', '/tools/pdf-to-pptx/'],
      ['https://pdfkoi.com/fr/tools/djvu-to-pdf/', '/tools/djvu-to-pdf/'],
      ['https://pdfkoi.com/de/tools/flatten-pdf?via=gsc', '/tools/flatten-pdf/?via=gsc'],
      ['https://pdfkoi.com/pt/tools/jpg-to-pdf/', '/tools/jpg-to-pdf/'],
      ['https://pdfkoi.com/zh/tools/font-to-outline/', '/tools/font-to-outline/'],
      ['https://pdfkoi.com/zh/tools/cbz-to-pdf/', '/tools/cbz-to-pdf/'],
      ['https://pdfkoi.com/ko/tools/compare-pdfs/', '/tools/compare-pdfs/'],
      ['https://pdfkoi.com/ko/tools/rtf-to-pdf/', '/tools/rtf-to-pdf/'],
      ['https://pdfkoi.com/ko/tools/extract-images/', '/tools/extract-images/'],
      ['https://pdfkoi.com/pt/tools/rasterize-pdf/', '/tools/rasterize-pdf/'],
      ['https://pdfkoi.com/zh-tw/tools/markdown-to-pdf/', '/tools/markdown-to-pdf/'],
      ['https://pdfkoi.com/ko/tools/pdf-to-svg/', '/tools/pdf-to-svg/'],
      ['https://pdfkoi.com/ko/tools/extract-attachments/', '/tools/extract-attachments/'],
      ['https://pdfkoi.com/ja/tools/markdown-to-pdf/', '/tools/markdown-to-pdf/'],
    ] as const;

    for (const [source, destination] of cases) {
      expect(getLocaleRedirectPath(new URL(source))).toBe(destination);
    }
  });

  it('returns null when no locale redirect is needed', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/ja/tools'))).toBeNull();
  });
});
