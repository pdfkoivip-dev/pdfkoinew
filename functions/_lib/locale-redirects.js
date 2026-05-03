const DEFAULT_TOOL_CANONICAL_PATHS = new Set([
  '/tools/merge-pdf',
  '/tools/split-pdf',
  '/tools/jpg-to-pdf',
  '/tools/pdf-to-docx',
]);

const MISSING_LOCALIZED_TOOL_CANONICALS = new Map([
  ['/de/tools/flatten-pdf', '/tools/flatten-pdf/'],
  ['/pt/tools/pdf-to-zip', '/tools/pdf-to-zip/'],
  ['/ja/tools/ocg-manager', '/tools/ocg-manager/'],
  ['/de/tools/edit-attachments', '/tools/edit-attachments/'],
  ['/ko/tools/ocg-manager', '/tools/ocg-manager/'],
  ['/es/tools/pdf-to-pdfa', '/tools/pdf-to-pdfa/'],
  ['/pt/tools/djvu-to-pdf', '/tools/djvu-to-pdf/'],
  ['/ko/tools/pdf-reader', '/tools/pdf-reader/'],
  ['/pt/tools/pdf-to-pptx', '/tools/pdf-to-pptx/'],
  ['/fr/tools/djvu-to-pdf', '/tools/djvu-to-pdf/'],
]);

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
    if (DEFAULT_TOOL_CANONICAL_PATHS.has(nextPath)) {
      return `${nextPath}/${search}`;
    }
    return `${nextPath}${search}`;
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
