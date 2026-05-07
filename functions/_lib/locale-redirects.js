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
]);

function ensureTrailingSlash(pathname) {
  if (pathname === '/' || /\/[^/]+\.[a-z0-9]+$/i.test(pathname)) {
    return pathname;
  }

  return pathname.endsWith('/') ? pathname : `${pathname}/`;
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

  const missingLocalizedToolCanonical = MISSING_LOCALIZED_TOOL_CANONICALS.get(pathWithoutTrailingSlash);
  if (missingLocalizedToolCanonical) {
    return `${missingLocalizedToolCanonical}${search}`;
  }

  return null;
}

export function getLocaleRedirectPath(url) {
  return buildRedirectPath(url.pathname, url.search);
}
