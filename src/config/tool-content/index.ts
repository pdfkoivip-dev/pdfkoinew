/**
 * Tool content exports for all languages
 * Requirements: 3.1 - Multi-language support
 */

export { toolContentEn } from './en';
export { toolContentJa } from './ja';
export { toolContentKo } from './ko';
export { toolContentEs } from './es';
export { toolContentFr } from './fr';
export { toolContentDe } from './de';
export { toolContentZh } from './zh';
export { toolContentZhTw } from './zh-TW';
export { toolContentPt } from './pt';

import { toolContentEn } from './en';
import { toolContentJa } from './ja';
import { toolContentKo } from './ko';
import { toolContentEs } from './es';
import { toolContentFr } from './fr';
import { toolContentDe } from './de';
import { toolContentZh } from './zh';
import { toolContentZhTw } from './zh-TW';
import { toolContentPt } from './pt';
import { ToolContent } from '@/types/tool';
import { defaultLocale, type Locale } from '@/lib/i18n/config';

const toolContentByLocale: Record<Locale, Record<string, ToolContent>> = {
  en: toolContentEn,
  ja: toolContentJa,
  ko: toolContentKo,
  es: toolContentEs,
  fr: toolContentFr,
  de: toolContentDe,
  zh: toolContentZh,
  'zh-TW': toolContentZhTw,
  pt: toolContentPt,
};

/**
 * Get tool content for a specific locale
 * Falls back to English if translation not found
 */
export function getToolContent(locale: Locale, toolId: string): ToolContent | undefined {
  const localeContent = toolContentByLocale[locale];
  if (localeContent && localeContent[toolId]) {
    return localeContent[toolId];
  }

  // Fallback to English
  return toolContentEn[toolId];
}

export function hasLocalizedToolContent(locale: Locale, toolId: string): boolean {
  if (locale === defaultLocale) {
    return Boolean(toolContentEn[toolId]);
  }

  return Boolean(toolContentByLocale[locale]?.[toolId]);
}

export function getToolContentLocales(toolId: string): Locale[] {
  return Object.entries(toolContentByLocale)
    .filter(([, contentMap]) => Boolean(contentMap[toolId]))
    .map(([locale]) => locale as Locale);
}

