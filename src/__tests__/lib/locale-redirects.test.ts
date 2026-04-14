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

  it('redirects /zh-TW/ to the lowercase locale slug', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/zh-TW/'))).toBe('/zh-tw/');
  });

  it('redirects nested /zh-TW paths to lowercase locale slugs', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/zh-TW/tools/merge-pdf'))).toBe('/zh-tw/tools/merge-pdf');
  });

  it('returns null when no locale redirect is needed', () => {
    expect(getLocaleRedirectPath(new URL('https://pdfkoi.com/ja/tools'))).toBeNull();
  });
});
