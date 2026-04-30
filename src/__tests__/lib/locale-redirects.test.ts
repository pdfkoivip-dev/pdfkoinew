import { describe, expect, it } from 'vitest';
import { getLocaleRedirectPath } from '../../../functions/_lib/locale-redirects.js';

describe('locale redirect helpers', () => {
  it('redirects /en/ to the canonical root URL', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/en/'))).toBe('/');
  });

  it('redirects /en/tools to the default-language tools URL', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/en/tools'))).toBe('/tools');
  });

  it('preserves query strings when redirecting English-prefixed URLs', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/en/tools?foo=bar'))).toBe('/tools?foo=bar');
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
    ] as const;

    for (const [source, destination] of cases) {
      expect(getLocaleRedirectPath(new URL(source))).toBe(destination);
    }
  });

  it('keeps reported GSC uppercase zh-TW redirect samples pointed at lowercase locale canonicals', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/zh-TW/tools/pdf-to-docx'))).toBe('/zh-tw/tools/pdf-to-docx');
  });

  it('returns null when no locale redirect is needed', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/ja/tools'))).toBeNull();
  });
});
