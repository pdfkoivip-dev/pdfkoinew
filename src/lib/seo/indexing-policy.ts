import { defaultLocale, locales, type Locale } from '@/lib/i18n/config';
import { hasLocalizedToolContent } from '@/config/tool-content';

export const INDEXABLE_STATIC_PAGE_PATHS = ['/', '/workflow', '/faq', '/contact', '/terms', '/privacy', '/cookies'] as const;

/**
 * High-value locales that are allowed to index tool pages even without localized content.
 * These locales have significant traffic potential and justify the SEO investment.
 * Static pages (about/privacy/cookies) remain English-only regardless of this list.
 */
const HIGH_VALUE_TOOL_LOCALES = new Set<Locale>(['es', 'de', 'fr', 'pt', 'ja', 'ko', 'zh', 'zh-TW']);

const CATEGORY_HUB_INDEXABLE_LOCALES = new Set<Locale>(locales);
const INDEXABLE_STATIC_PAGE_SET = new Set<string>(INDEXABLE_STATIC_PAGE_PATHS);

export function shouldIndexToolsDirectory(): boolean {
  return true;
}

export function shouldIndexCategoryHub(locale: Locale): boolean {
  return CATEGORY_HUB_INDEXABLE_LOCALES.has(locale);
}

export function getCategoryHubIndexableLocales(): Locale[] {
  return Array.from(CATEGORY_HUB_INDEXABLE_LOCALES);
}

export function shouldIndexStaticPage(locale: Locale, path: string): boolean {
  if (path === '/about' || path === '/privacy' || path === '/cookies') {
    return locale === defaultLocale;
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

  // High-value locales can index tool pages even without localized content
  // to capture international traffic while canonical still points to English
  if (HIGH_VALUE_TOOL_LOCALES.has(locale)) {
    return true;
  }

  // Other locales require localized content to be indexable
  return hasLocalizedToolContent(locale, toolId);
}

export function getToolIndexableLocales(toolId: string): Locale[] {
  return locales.filter((locale) => shouldIndexLocalizedToolPage(locale, toolId));
}

export function getToolPublicLocale(locale: Locale, toolId: string): Locale {
  // For high-value locales, keep them as the public locale even without localized content
  // This allows them to be indexed while still providing canonical guidance
  if (locale === defaultLocale || HIGH_VALUE_TOOL_LOCALES.has(locale)) {
    return locale;
  }

  // For other locales, fall back to English if no localized content exists
  return hasLocalizedToolContent(locale, toolId) ? locale : defaultLocale;
}
