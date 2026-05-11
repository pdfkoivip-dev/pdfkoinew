const CANONICAL_DEFAULT_LOCALE_PAGE_PATHS = new Set([
  '/compress-pdf-for-email',
  '/compress-pdf-without-upload',
  '/merge-pdf-no-signup',
  '/privacy',
  '/cookies',
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

const MISSING_LOCALIZED_TOOL_CANONICALS = new Map([
  ['/de/tools/flatten-pdf', '/tools/flatten-pdf/'],
  ['/pt/tools/pdf-to-zip', '/tools/pdf-to-zip/'],
  ['/ja/tools/ocg-manager', '/tools/ocg-manager/'],
  ['/de/tools/edit-attachments', '/tools/edit-attachments/'],
  ['/ko/tools/ocg-manager', '/tools/ocg-manager/'],
  ['/es/tools/pdf-to-pdfa', '/tools/pdf-to-pdfa/'],
  ['/es/tools/rtf-to-pdf', '/tools/rtf-to-pdf/'],
  ['/pt/tools/djvu-to-pdf', '/tools/djvu-to-pdf/'],
  ['/ko/tools/pdf-reader', '/tools/pdf-reader/'],
  ['/pt/tools/pdf-to-pptx', '/tools/pdf-to-pptx/'],
  ['/fr/tools/djvu-to-pdf', '/tools/djvu-to-pdf/'],
  ['/pt/tools/jpg-to-pdf', '/tools/jpg-to-pdf/'],
  ['/zh/tools/font-to-outline', '/tools/font-to-outline/'],
  ['/zh/tools/cbz-to-pdf', '/tools/cbz-to-pdf/'],
  ['/ko/tools/compare-pdfs', '/tools/compare-pdfs/'],
  ['/ko/tools/rtf-to-pdf', '/tools/rtf-to-pdf/'],
  ['/ko/tools/extract-images', '/tools/extract-images/'],
  ['/pt/tools/rasterize-pdf', '/tools/rasterize-pdf/'],
  ['/zh-tw/tools/markdown-to-pdf', '/tools/markdown-to-pdf/'],
  ['/ko/tools/pdf-to-svg', '/tools/pdf-to-svg/'],
  ['/ko/tools/extract-attachments', '/tools/extract-attachments/'],
  ['/ja/tools/markdown-to-pdf', '/tools/markdown-to-pdf/'],
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

  const missingLocalizedToolCanonical = MISSING_LOCALIZED_TOOL_CANONICALS.get(pathWithoutTrailingSlash);
  if (missingLocalizedToolCanonical) {
    return `${missingLocalizedToolCanonical}${search}`;
  }

  return null;
}

export function getLocaleRedirectPath(url) {
  return buildRedirectPath(url.pathname, url.search);
}
