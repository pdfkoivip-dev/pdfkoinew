const LEGACY_CATEGORY_SET = new Set([
  'edit-annotate',
  'convert-to-pdf',
  'convert-from-pdf',
  'organize-manage',
  'optimize-repair',
  'secure-pdf',
]);

const PLACEHOLDER_SEARCH_QUERY = '{search_term_string}';

function normalizePathname(pathname) {
  return pathname.replace(/\/+$/, '') || '/';
}

function getCategoryRedirectPath(normalizedPath, category) {
  if (!category || !LEGACY_CATEGORY_SET.has(category)) {
    return null;
  }

  if (normalizedPath === '/tools') {
    return `/tools/category/${category}/`;
  }

  const localeMatch = normalizedPath.match(/^\/([a-zA-Z-]+)\/tools$/);
  if (!localeMatch) {
    return null;
  }

  const [, locale] = localeMatch;
  if (locale === 'en') {
    return `/tools/category/${category}/`;
  }

  return `/${locale}/tools/category/${category}/`;
}

function getPlaceholderSearchRedirectPath(normalizedPath, query) {
  if (query !== PLACEHOLDER_SEARCH_QUERY) {
    return null;
  }

  if (normalizedPath === '/tools') {
    return '/tools/';
  }

  const localeMatch = normalizedPath.match(/^\/([a-zA-Z-]+)\/tools$/);
  if (!localeMatch) {
    return null;
  }

  const [, locale] = localeMatch;
  if (locale === 'en') {
    return '/tools/';
  }

  return `/${locale}/tools/`;
}

function getHomepageRefRedirectPath(normalizedPath, ref) {
  if (normalizedPath !== '/' || ref !== 'producthunt') {
    return null;
  }

  return '/';
}

export function getQueryRedirectPath(pathname, searchParams) {
  const normalizedPath = normalizePathname(pathname);

  return (
    getCategoryRedirectPath(normalizedPath, searchParams.get('category')) ||
    getPlaceholderSearchRedirectPath(normalizedPath, searchParams.get('q')) ||
    getHomepageRefRedirectPath(normalizedPath, searchParams.get('ref'))
  );
}

export function getLegacyCategoryRedirectPath(pathname, category) {
  return getCategoryRedirectPath(normalizePathname(pathname), category);
}
