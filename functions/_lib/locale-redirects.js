const DEFAULT_TOOL_CANONICAL_PATHS = new Set([
  '/tools/merge-pdf',
  '/tools/split-pdf',
  '/tools/jpg-to-pdf',
  '/tools/pdf-to-docx',
]);

function buildRedirectPath(pathname, search) {
  const normalizedPath = pathname || '/';

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

  return null;
}

export function getLocaleRedirectPath(url) {
  return buildRedirectPath(url.pathname, url.search);
}
