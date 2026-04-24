import { describe, expect, it } from 'vitest';
import {
  getLegacyCategoryRedirectPath,
  getQueryRedirectPath,
} from '../../../functions/_lib/legacy-category-redirect.js';

describe('legacy category redirect helper', () => {
  it('maps the default tools filter URL to the static category hub', () => {
    expect(getLegacyCategoryRedirectPath('/tools', 'edit-annotate')).toBe('/tools/category/edit-annotate/');
  });

  it('maps localized tools filter URLs to localized category hubs', () => {
    expect(getLegacyCategoryRedirectPath('/zh/tools', 'secure-pdf')).toBe('/zh/tools/category/secure-pdf/');
  });

  it('normalizes the English locale back to the default canonical path', () => {
    expect(getLegacyCategoryRedirectPath('/en/tools', 'convert-to-pdf')).toBe('/tools/category/convert-to-pdf/');
  });

  it('redirects placeholder search template URLs back to the clean tools page', () => {
    expect(getQueryRedirectPath('/tools', new URLSearchParams('q={search_term_string}'))).toBe('/tools/');
    expect(getQueryRedirectPath('/ja/tools', new URLSearchParams('q={search_term_string}'))).toBe('/ja/tools/');
    expect(getQueryRedirectPath('/en/tools', new URLSearchParams('q={search_term_string}'))).toBe('/tools/');
  });

  it('redirects the producthunt tracking homepage URL to the clean homepage', () => {
    expect(getQueryRedirectPath('/', new URLSearchParams('ref=producthunt'))).toBe('/');
  });

  it('ignores supported search state and unrelated paths', () => {
    expect(getQueryRedirectPath('/tools', new URLSearchParams('q=merge'))).toBeNull();
    expect(getQueryRedirectPath('/', new URLSearchParams('ref=other'))).toBeNull();
    expect(getLegacyCategoryRedirectPath('/tools', 'not-a-real-category')).toBeNull();
    expect(getLegacyCategoryRedirectPath('/tools/category/edit-annotate', 'edit-annotate')).toBeNull();
  });
});
