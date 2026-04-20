import { describe, expect, it } from 'vitest';
import {
  normalizeInternalHref,
  normalizeInternalHtmlLinks,
} from '@/lib/seo/normalize-internal-links';

describe('normalize internal links helpers', () => {
  it('adds trailing slashes to root-relative tool links', () => {
    expect(normalizeInternalHref('/tools/pdf-to-jpg')).toBe('/tools/pdf-to-jpg/');
    expect(normalizeInternalHref('/zh/tools/remove-metadata')).toBe('/zh/tools/remove-metadata/');
  });

  it('canonicalizes locale-prefixed variants to public slugs', () => {
    expect(normalizeInternalHref('/en/tools/merge-pdf/')).toBe('/tools/merge-pdf/');
    expect(normalizeInternalHref('/zh-TW/tools/pdf-to-docx')).toBe('/zh-tw/tools/pdf-to-docx/');
  });

  it('canonicalizes absolute internal URLs while leaving external URLs untouched', () => {
    expect(normalizeInternalHref('https://www.pdfkoi.com/en/')).toBe('https://pdfkoi.com/');
    expect(normalizeInternalHref('https://example.com/tools/pdf-to-jpg')).toBe('https://example.com/tools/pdf-to-jpg');
  });

  it('rewrites only internal href attributes inside HTML snippets', () => {
    const html = [
      '<p>',
      '<a href="/tools/pdf-to-jpg">PDF to JPG</a>',
      '<a href="https://www.pdfkoi.com/zh-TW/tools/pdf-to-docx">PDF to DOCX</a>',
      '<a href="https://example.com/docs">External</a>',
      '</p>',
    ].join('');

    expect(normalizeInternalHtmlLinks(html)).toContain('href="/tools/pdf-to-jpg/"');
    expect(normalizeInternalHtmlLinks(html)).toContain('href="https://pdfkoi.com/zh-tw/tools/pdf-to-docx/"');
    expect(normalizeInternalHtmlLinks(html)).toContain('href="https://example.com/docs"');
  });
});
