/**
 * Breadcrumbs Navigation Component
 * Provides hierarchical navigation and improves internal linking structure
 * Helps fix GSC indexing issues by providing clear site hierarchy
 */

import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  locale: Locale;
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ locale, items }: BreadcrumbsProps) {
  const localePrefix = locale === 'en' ? '' : `/${locale}`;

  const translations = {
    home: {
      en: 'Home',
      ja: 'ホーム',
      ko: '홈',
      es: 'Inicio',
      fr: 'Accueil',
      de: 'Startseite',
      zh: '首页',
      'zh-TW': '首頁',
      pt: 'Início',
    },
  };

  const homeLabel = translations.home[locale] || translations.home.en;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        {/* Home link */}
        <li>
          <Link
            href={`${localePrefix}/`}
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            {homeLabel}
          </Link>
        </li>

        {/* Dynamic breadcrumb items */}
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4" />
            {item.href ? (
              <Link
                href={`${localePrefix}${item.href}`}
                className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 dark:text-gray-100 font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
