import { siteConfig } from '@/config/site';
import {
  defaultLocale,
  getLocaleSlug,
  normalizeLocale,
} from '@/lib/i18n/config';

const siteHostname = new URL(siteConfig.url).hostname;
const fileExtensionPattern = /\/[^/]+\.[a-z0-9]+$/i;

function isInternalHostname(hostname: string): boolean {
  return hostname === siteHostname || hostname === `www.${siteHostname}`;
}

function shouldKeepPathnameAsIs(pathname: string): boolean {
  return pathname === '/' || fileExtensionPattern.test(pathname);
}

function normalizeInternalPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return '/';
  }

  const [firstSegment, ...restSegments] = segments;
  const locale = normalizeLocale(firstSegment);
  let normalizedPathname = pathname;

  if (locale) {
    if (locale === defaultLocale) {
      normalizedPathname = restSegments.length > 0 ? `/${restSegments.join('/')}` : '/';
    } else {
      const localeSlug = getLocaleSlug(locale);
      normalizedPathname = restSegments.length > 0
        ? `/${localeSlug}/${restSegments.join('/')}`
        : `/${localeSlug}`;
    }
  }

  if (shouldKeepPathnameAsIs(normalizedPathname)) {
    return normalizedPathname;
  }

  return normalizedPathname.endsWith('/') ? normalizedPathname : `${normalizedPathname}/`;
}

export function normalizeInternalHref(href: string): string {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }

  const isRootRelative = href.startsWith('/');

  try {
    const url = isRootRelative
      ? new URL(href, siteConfig.url)
      : new URL(href);

    if (!isRootRelative && !isInternalHostname(url.hostname)) {
      return href;
    }

    const normalizedHref = `${normalizeInternalPathname(url.pathname)}${url.search}${url.hash}`;

    return isRootRelative ? normalizedHref : `${siteConfig.url}${normalizedHref}`;
  } catch {
    return href;
  }
}

export function normalizeInternalHtmlLinks(html: string): string {
  if (!html || !html.includes('href=')) {
    return html;
  }

  return html.replace(/href=(["'])(.*?)\1/gi, (match, quote: string, href: string) => {
    const normalizedHref = normalizeInternalHref(href);

    if (normalizedHref === href) {
      return match;
    }

    return `href=${quote}${normalizedHref}${quote}`;
  });
}
