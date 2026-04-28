import { defaultLocale, locales, type Locale } from '@/lib/i18n/config';
import { hasLocalizedToolContent } from '@/config/tool-content';

export const INDEXABLE_STATIC_PAGE_PATHS = ['/', '/workflow', '/faq', '/contact', '/terms'] as const;

const CATEGORY_HUB_INDEXABLE_LOCALES = new Set<Locale>();
const INDEXABLE_STATIC_PAGE_SET = new Set<string>(INDEXABLE_STATIC_PAGE_PATHS);

export function shouldIndexToolsDirectory(): boolean {
  return false;
}

export function shouldIndexCategoryHub(locale: Locale): boolean {
  return CATEGORY_HUB_INDEXABLE_LOCALES.has(locale);
}

export function getCategoryHubIndexableLocales(): Locale[] {
  return Array.from(CATEGORY_HUB_INDEXABLE_LOCALES);
}

export function shouldIndexStaticPage(locale: Locale, path: string): boolean {
  if (path === '/about') {
    return locale === defaultLocale;
  }

  return INDEXABLE_STATIC_PAGE_SET.has(path);
}

export function shouldGenerateLocalizedToolPage(locale: Locale, toolId: string): boolean {
  return locale === defaultLocale || hasLocalizedToolContent(locale, toolId);
}

export function shouldIndexLocalizedToolPage(locale: Locale, toolId: string): boolean {
  return shouldGenerateLocalizedToolPage(locale, toolId);
}

export function getToolIndexableLocales(toolId: string): Locale[] {
  return locales.filter((locale) => shouldIndexLocalizedToolPage(locale, toolId));
}

export function getToolPublicLocale(locale: Locale, toolId: string): Locale {
  return shouldGenerateLocalizedToolPage(locale, toolId) ? locale : defaultLocale;
}
