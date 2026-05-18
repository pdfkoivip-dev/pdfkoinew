const CANONICAL_DEFAULT_LOCALE_PAGE_PATHS = new Set([
  '/compress-pdf-for-email',
  '/compress-pdf-without-upload',
  '/merge-pdf-no-signup',
]);

const NON_DEFAULT_LOCALE_SLUGS = new Set([
  'ja',
  'ko',
  'es',
  'fr',
  'de',
  'zh',
  'zh-tw',
  'pt',
]);

function ensureTrailingSlash(pathname) {
  if (pathname === '/' || /\/[^/]+\.[a-z0-9]+$/i.test(pathname)) {
    return pathname;
  }

  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

function getDefaultLocalePageRedirectPath(pathWithoutTrailingSlash) {
  const match = pathWithoutTrailingSlash.match(/^\/([^/]+)(\/.*)$/);
  if (!match) {
    return null;
  }

  const [, localeSlug, pagePath] = match;
  if (!NON_DEFAULT_LOCALE_SLUGS.has(localeSlug.toLowerCase())) {
    return null;
  }

  return CANONICAL_DEFAULT_LOCALE_PAGE_PATHS.has(pagePath) ? ensureTrailingSlash(pagePath) : null;
}

function buildRedirectPath(pathname, search) {
  const normalizedPath = pathname || '/';
  const pathWithoutTrailingSlash = normalizedPath.length > 1 && normalizedPath.endsWith('/')
    ? normalizedPath.slice(0, -1)
    : normalizedPath;

  if (normalizedPath === '/en' || normalizedPath === '/en/') {
    return `/${search}`;
  }

  if (normalizedPath.startsWith('/en/')) {
    const nextPath = normalizedPath.slice('/en'.length) || '/';
    return `${ensureTrailingSlash(nextPath)}${search}`;
  }

  if (normalizedPath === '/zh-TW') {
    return `/zh-tw${search}`;
  }

  if (normalizedPath === '/zh-TW/') {
    return `/zh-tw/${search}`;
  }

  if (normalizedPath.startsWith('/zh-TW/')) {
    const nextPath = normalizedPath.slice('/zh-TW'.length) || '/';
    return `/zh-tw${nextPath}${search}`;
  }

  const defaultLocalePageRedirect = getDefaultLocalePageRedirectPath(pathWithoutTrailingSlash);
  if (defaultLocalePageRedirect) {
    return `${defaultLocalePageRedirect}${search}`;
  }

  return null;
}

export function getLocaleRedirectPath(url) {
  return buildRedirectPath(url.pathname, url.search);
}
