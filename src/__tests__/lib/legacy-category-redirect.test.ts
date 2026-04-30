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

  it('maps query-based organize-manage URLs to the canonical localized category hub', () => {
    expect(getLegacyCategoryRedirectPath('/zh/tools', 'organize-manage')).toBe('/zh/tools/category/organize-manage/');
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

  it('maps reported GSC query category redirects to static category hubs', () => {
    const cases = [
      ['/ja/tools/', 'category=edit-annotate', '/ja/tools/category/edit-annotate/'],
      ['/zh/tools/', 'category=convert-from-pdf', '/zh/tools/category/convert-from-pdf/'],
      ['/zh/tools/', 'category=optimize-repair', '/zh/tools/category/optimize-repair/'],
      ['/en/tools/', 'category=convert-to-pdf', '/tools/category/convert-to-pdf/'],
      ['/zh/tools/', 'category=edit-annotate', '/zh/tools/category/edit-annotate/'],
      ['/ja/tools/', 'category=optimize-repair', '/ja/tools/category/optimize-repair/'],
    ] as const;

    for (const [pathname, query, destination] of cases) {
      expect(getQueryRedirectPath(pathname, new URLSearchParams(query))).toBe(destination);
    }
  });

  it('ignores supported search state and unrelated paths', () => {
    expect(getQueryRedirectPath('/tools', new URLSearchParams('q=merge'))).toBeNull();
    expect(getQueryRedirectPath('/', new URLSearchParams('ref=other'))).toBeNull();
    expect(getLegacyCategoryRedirectPath('/tools', 'not-a-real-category')).toBeNull();
    expect(getLegacyCategoryRedirectPath('/tools/category/edit-annotate', 'edit-annotate')).toBeNull();
  });
});
