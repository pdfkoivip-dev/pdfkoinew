/**
 * i18n Configuration for next-intl
 * Defines supported locales and routing configuration
 */

export const locales = ['en', 'ja', 'ko', 'es', 'fr', 'de', 'zh', 'zh-TW', 'pt'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeToSlug: Record<Locale, string> = {
  en: 'en',
  ja: 'ja',
  ko: 'ko',
  es: 'es',
  fr: 'fr',
  de: 'de',
  zh: 'zh',
  'zh-TW': 'zh-tw',
  pt: 'pt',
};

const slugToLocale = Object.entries(localeToSlug).reduce<Record<string, Locale>>((acc, [locale, slug]) => {
  acc[slug.toLowerCase()] = locale as Locale;
  return acc;
}, {});

export const localeConfig: Record<Locale, {
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  dateFormat: string;
}> = {
  en: { name: 'English', nativeName: 'English', direction: 'ltr', dateFormat: 'MM/DD/YYYY' },
  ja: { name: 'Japanese', nativeName: '日本語', direction: 'ltr', dateFormat: 'YYYY/MM/DD' },
  ko: { name: 'Korean', nativeName: '한국어', direction: 'ltr', dateFormat: 'YYYY.MM.DD' },
  es: { name: 'Spanish', nativeName: 'Español', direction: 'ltr', dateFormat: 'DD/MM/YYYY' },
  fr: { name: 'French', nativeName: 'Français', direction: 'ltr', dateFormat: 'DD/MM/YYYY' },
  de: { name: 'German', nativeName: 'Deutsch', direction: 'ltr', dateFormat: 'DD.MM.YYYY' },
  zh: { name: 'Chinese (Simplified)', nativeName: '简体中文', direction: 'ltr', dateFormat: 'YYYY-MM-DD' },
  'zh-TW': { name: 'Chinese (Traditional)', nativeName: '繁體中文', direction: 'ltr', dateFormat: 'YYYY/MM/DD' },
  pt: { name: 'Portuguese', nativeName: 'Português', direction: 'ltr', dateFormat: 'DD/MM/YYYY' },
};

/**
 * Check if a locale is RTL
 */
export function isRTL(locale: Locale): boolean {
  return localeConfig[locale].direction === 'rtl';
}

/**
 * Check if a string is a valid locale
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/**
 * Normalize a locale slug or locale code to the internal locale shape.
 */
export function normalizeLocale(locale: string): Locale | null {
  if (isValidLocale(locale)) {
    return locale;
  }

  return slugToLocale[locale.toLowerCase()] || null;
}

/**
 * Get the public URL slug for a locale.
 */
export function getLocaleSlug(locale: Locale): string {
  return localeToSlug[locale];
}

/**
 * Get public locale params for static route generation.
 */
export function getPublicLocaleParams(): Array<{ locale: string }> {
  return locales.map((locale) => ({ locale: getLocaleSlug(locale) }));
}

/**
 * Get locale from path
 */
export function getLocaleFromPath(path: string): Locale | null {
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];
  if (firstSegment) {
    return normalizeLocale(firstSegment);
  }
  return null;
}

/**
 * Generate localized path
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  const [pathWithoutHash, hash = ''] = path.split('#', 2);
  const [rawPath = '/', query = ''] = pathWithoutHash.split('?', 2);
  const localePattern = Object.keys(slugToLocale)
    .concat(locales as unknown as string[])
    .sort((a, b) => b.length - a.length)
    .join('|');

  // Remove any existing locale prefix (must be followed by / or end of string)
  const cleanPath = rawPath.replace(new RegExp(`^\\/(${localePattern})(\\/|$)`, 'i'), '/');
  const normalizedBasePath = cleanPath === '/' ? '/' : cleanPath.replace(/^\/+/, '/');
  const basePathWithSlash = normalizedBasePath.endsWith('/') ? normalizedBasePath : `${normalizedBasePath}/`;
  const localizedBasePath = locale === defaultLocale
    ? (basePathWithSlash === '/' ? '/' : `/${getLocaleSlug(locale)}${basePathWithSlash}`)
    : `/${getLocaleSlug(locale)}${basePathWithSlash === '/' ? '/' : basePathWithSlash}`;
  const querySuffix = query ? `?${query}` : '';
  const hashSuffix = hash ? `#${hash}` : '';

  return `${localizedBasePath}${querySuffix}${hashSuffix}`;
}

/**
 * Generate the canonical public path used by sitemap/metadata.
 * Keep the English homepage at `/`, while all other localized pages stay prefixed.
 */
export function getPublicPath(path: string, locale: Locale): string {
  return getLocalizedPath(path, locale);
}
