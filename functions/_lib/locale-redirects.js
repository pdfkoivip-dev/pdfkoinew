// Canonical redirect paths that should always go to the default locale with trailing slash.
// These are the "canonical default-locale landing pages" that have no localized
// counterpart and must always resolve to the root English version.
//
// Note: "/tools" and "/tools/" are intentionally excluded from this set.
// When a user (or crawler) lands on /ja/tools or /zh-tw/tools they should be
// allowed to fall through to the page handler – the page itself decides
// whether to show a localized tools listing or the English version.
// That decision lives in the page component / metadata layer, NOT in the
// redirect layer.
const CANONICAL_DEFAULT_LOCALE_PATHS = new Set([
  '/compress-pdf-for-email',
  '/compress-pdf-for-email/',
  '/compress-pdf-without-upload',
  '/compress-pdf-without-upload/',
  '/merge-pdf-no-signup',
  '/merge-pdf-no-signup/',
  '/about',
  '/about/',
  '/faq',
  '/faq/',
  '/privacy',
  '/privacy/',
  '/cookies',
  '/cookies/',
  '/contact',
  '/contact/',
  '/terms',
  '/terms/',
  '/workflow',
  '/workflow/',
  '/tools',
  '/tools/',
]);

/**
 * Build a normalized redirect path from the incoming request.
 * Returns null if no redirect is needed.
 *
 * Single-pass redirect logic — one redirect per request, no chaining.
 * Trailing slash normalization for static files is handled by
 * Cloudflare Pages static-file routing (308) automatically.
 */
export function getLocaleRedirectPath(url) {
  const pathname = url.pathname || '/';
  const search = url.search;

  // Does the original request have a trailing slash? (needed for Rule 4)
  const hadTrailingSlash = pathname.length > 1 && pathname.endsWith('/');

  // ------------------------------------------------------------------
  // Rule 1: Strip /en or /en/ → redirect to root canonical URL
  // ------------------------------------------------------------------
  if (pathname === '/en' || pathname === '/en/') {
    return `/${search}`;
  }

  // ------------------------------------------------------------------
  // Rule 2: Strip /en/* prefix → redirect to /*
  // ------------------------------------------------------------------
  if (pathname.startsWith('/en/')) {
    let remaining = pathname.slice('/en'.length) || '/';

    // Normalize trailing slash for known page paths
    if (remaining !== '/' && !remaining.endsWith('/')) {
      // Multi-segment paths like /tools/merge-pdf always get trailing slash
      const parts = remaining.split('/').filter(Boolean);
      if (parts.length >= 2 || CANONICAL_DEFAULT_LOCALE_PATHS.has(remaining)) {
        remaining += '/';
      }
    }

    return `${remaining}${search}`;
  }

  // ------------------------------------------------------------------
  // Rule 3: zh-TW → zh-tw case normalization
  // ------------------------------------------------------------------
  if (pathname === '/zh-TW') {
    return `/zh-tw${search}`;
  }
  if (pathname === '/zh-TW/') {
    return `/zh-tw/${search}`;
  }
  if (pathname.startsWith('/zh-TW/')) {
    const nextPath = pathname.slice('/zh-TW'.length) || '/';
    return `/zh-tw${nextPath}${search}`;
  }

  // ------------------------------------------------------------------
  // Rule 4: Canonical default-locale landing pages from other locales
  // e.g. /zh-tw/compress-pdf-for-email → /compress-pdf-for-email/
  //       /ko/merge-pdf-no-signup/ → /merge-pdf-no-signup/
  // ------------------------------------------------------------------
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length >= 2) {
    const remaining = '/' + parts.slice(1).join('/');

    // Check both with and without trailing slash versions
    const normalizedPath = hadTrailingSlash ? `${remaining}/` : remaining;
    if (CANONICAL_DEFAULT_LOCALE_PATHS.has(normalizedPath)) {
      // Return the version from the canonical set to preserve trailing slash
      return (hadTrailingSlash
        ? `${normalizedPath}`
        : normalizedPath
      ) + search;
    }
  }

  return null;
}
