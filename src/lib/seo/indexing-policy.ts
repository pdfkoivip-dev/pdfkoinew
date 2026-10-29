import { defaultLocale, locales, type Locale } from '@/lib/i18n/config';
import { hasLocalizedToolContent } from '@/config/tool-content';

export const INDEXABLE_STATIC_PAGE_PATHS = ['/', '/workflow', '/faq', '/contact', '/terms', '/privacy', '/cookies'] as const;

// Locales whose category hub content is fully localized (useCases/precautions
// sections + localized metadata). A locale is only indexable for the category
// hub when its content is complete — otherwise the page would mix English
// sections into a localized shell, which is exactly the mixed-language
// problem this guard prevents. English is always complete.
const CATEGORY_HUB_INDEXABLE_LOCALES = new Set<Locale>(locales);
const INDEXABLE_STATIC_PAGE_SET = new Set<string>(INDEXABLE_STATIC_PAGE_PATHS);

export function shouldIndexToolsDirectory(): boolean {
  return true;
}

export function shouldIndexCategoryHub(locale: Locale): boolean {
  // Category hub content is fully localized for every supported locale.
  // If a future locale is added without complete category hub translations,
  // remove it from CATEGORY_HUB_INDEXABLE_LOCALES to keep it out of the index
  // until the content is complete.
  return CATEGORY_HUB_INDEXABLE_LOCALES.has(locale);
}

export function getCategoryHubIndexableLocales(): Locale[] {
  return Array.from(CATEGORY_HUB_INDEXABLE_LOCALES);
}

export function shouldIndexStaticPage(locale: Locale, path: string): boolean {
  // Allow all supported locales to index static pages (about, privacy, cookies)
  // This fixes GSC "被noindex标记排除" issue and ensures consistent multilingual coverage
  if (path === '/about' || path === '/privacy' || path === '/cookies') {
    return locales.includes(locale);
  }

  return INDEXABLE_STATIC_PAGE_SET.has(path);
}

export function shouldGenerateLocalizedToolPage(locale: Locale, toolId: string): boolean {
  void locale;
  void toolId;
  // Always generate localized tool routes so missing-localization variants
  // can return 200 with English fallback content + noindex canonical behavior.
  // Indexability is controlled separately by shouldIndexLocalizedToolPage.
  return true;
}

export function shouldIndexLocalizedToolPage(locale: Locale, toolId: string): boolean {
  // Default locale (English) is always indexable
  if (locale === defaultLocale) {
    return true;
  }

  // Non-English locales require real localized content to be indexable.
  // Missing-localization variants stay 200 with English fallback content but
  // are served as noindex,follow with an English canonical (see getToolPublicLocale).
  return hasLocalizedToolContent(locale, toolId);
}

export function getToolIndexableLocales(toolId: string): Locale[] {
  return locales.filter((locale) => shouldIndexLocalizedToolPage(locale, toolId));
}

export function getToolPublicLocale(locale: Locale, toolId: string): Locale {
  // Keep the current locale as the public/canonical locale only when real
  // localized content exists; otherwise fall back to English.
  if (locale === defaultLocale) {
    return locale;
  }

  return hasLocalizedToolContent(locale, toolId) ? locale : defaultLocale;
}
