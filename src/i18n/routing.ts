import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale, localeToSlug } from '@/lib/i18n/config';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Localized App Router pages are generated under locale prefixes.
  // Production mirrors English pages to root canonical URLs after export.
  // `zh-TW` uses a lowercase public slug (`/zh-tw`), so tell next-intl
  // explicitly to avoid self-redirects in development.
  localePrefix: {
    mode: 'always',
    prefixes: {
      'zh-TW': `/${localeToSlug['zh-TW']}`,
    },
  },

  // Keep `/` stable as the canonical English homepage for SEO
  localeDetection: false,
});
