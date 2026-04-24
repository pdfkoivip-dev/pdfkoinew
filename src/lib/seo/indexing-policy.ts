import { defaultLocale, locales, type Locale } from '@/lib/i18n/config';
import { hasLocalizedToolContent } from '@/config/tool-content';

const CATEGORY_HUB_INDEXABLE_LOCALES = new Set<Locale>(locales);

export function shouldIndexToolsDirectory(): boolean {
  return false;
}

export function shouldIndexCategoryHub(locale: Locale): boolean {
  return CATEGORY_HUB_INDEXABLE_LOCALES.has(locale);
}

export function getCategoryHubIndexableLocales(): Locale[] {
  return Array.from(CATEGORY_HUB_INDEXABLE_LOCALES);
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
