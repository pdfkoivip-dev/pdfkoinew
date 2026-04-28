/**
 * SEO Metadata Generation Utilities
 * Provides functions for generating meta tags, Open Graph, and Twitter Card data
 * 
 * @module lib/seo/metadata
 */

import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { locales, type Locale, localeConfig, defaultLocale, getPublicPath } from '@/lib/i18n/config';
import { hasLocalizedToolContent } from '@/config/tool-content';
import {
  getCategoryHubIndexableLocales,
  getToolIndexableLocales,
  getToolPublicLocale,
  shouldIndexCategoryHub,
  shouldIndexLocalizedToolPage,
  shouldIndexStaticPage,
} from '@/lib/seo/indexing-policy';
import type { Tool, ToolContent } from '@/types/tool';

/**
 * Base metadata configuration
 */
export interface BaseMetadataOptions {
  locale: Locale;
  path?: string;
}

/**
 * Page-specific metadata options
 */
export interface PageMetadataOptions extends BaseMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  followWhenNoIndex?: boolean;
  appendDefaultKeywords?: boolean;
}

/**
 * Tool page metadata options
 */
export interface ToolMetadataOptions extends BaseMetadataOptions {
  tool: Tool;
  content: ToolContent;
}

/**
 * Generate the canonical URL for a page
 */
export function getCanonicalUrl(locale: Locale, path: string = ''): string {
  return `${siteConfig.url}${getPublicPath(path || '/', locale)}`;
}

/**
 * Generate alternate language URLs for hreflang tags
 */
export function getAlternateUrls(path: string = ''): Record<string, string> {
  return getAlternateUrlsForLocales(path, locales);
}

export function getAlternateUrlsForLocales(
  path: string = '',
  alternateLocales: readonly Locale[] = locales
): Record<string, string> {
  const alternates: Record<string, string> = {};

  for (const locale of alternateLocales) {
    alternates[locale] = `${siteConfig.url}${getPublicPath(path || '/', locale)}`;
  }

  // Add x-default pointing to English (defaultLocale)
  alternates['x-default'] = `${siteConfig.url}${getPublicPath(path || '/', defaultLocale)}`;

  return alternates;
}

/**
 * Generate base metadata for any page
 */
export function generateBaseMetadata(options: PageMetadataOptions): Metadata {
  const {
    locale,
    path = '',
    title,
    description,
    keywords = [],
    image,
    noIndex = false,
    followWhenNoIndex = false,
    appendDefaultKeywords = true,
  } = options;

  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  const canonicalUrl = getCanonicalUrl(locale, path);
  const ogImage = image || siteConfig.ogImage;
  const ogLocale = getOpenGraphLocale(locale);

  // Ensure description is optimal length (150-160 characters)
  const optimizedDescription = description.length > 160
    ? description.substring(0, 157) + '...'
    : description;

  return {
    title: fullTitle,
    description: optimizedDescription,
    keywords: appendDefaultKeywords
      ? [...new Set([...keywords, 'PDF', 'PDF tools', 'free', 'online', siteConfig.name])]
      : [...new Set([...keywords, siteConfig.name])],
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    robots: noIndex
      ? { index: false, follow: followWhenNoIndex }
      : {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    icons: {
      icon: [{ url: '/images/logo.png', type: 'image/png', sizes: '128x128' }],
      shortcut: '/images/logo.png',
      apple: [{ url: '/images/logo.png', type: 'image/png', sizes: '128x128' }],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: getAlternateUrls(path),
    },
    openGraph: {
      type: 'website',
      locale: ogLocale,
      url: canonicalUrl,
      title: fullTitle,
      description: optimizedDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: optimizedDescription,
      images: [ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`],
      creator: siteConfig.creator,
    },
    verification: {
      // Add verification tags if needed
      // google: 'google-site-verification-code',
      // yandex: 'yandex-verification-code',
    },
    category: 'technology',
  };
}

/**
 * Generate metadata for tool pages
 */
export function generateToolMetadata(options: ToolMetadataOptions): Metadata {
  const { locale, tool, content } = options;
  const path = `/tools/${tool.slug}`;
  const shouldIndexLocalizedPage = shouldIndexLocalizedToolPage(locale, tool.id);
  const canonicalLocale = getToolPublicLocale(locale, tool.id);
  const alternateLocales = getToolIndexableLocales(tool.id);

  // Enhance keywords with common PDF-related terms
  const enhancedKeywords = [
    ...content.keywords,
    'free',
    'online',
    'no registration',
    'browser-based',
    'secure',
    'private',
  ];

  const metadata = generateBaseMetadata({
    locale,
    path,
    title: content.title,
    description: content.metaDescription,
    keywords: enhancedKeywords,
    noIndex: !shouldIndexLocalizedPage,
  });

  metadata.alternates = {
    canonical: getCanonicalUrl(canonicalLocale, path),
    languages: getAlternateUrlsForLocales(path, alternateLocales),
  };

  if (!shouldIndexLocalizedPage && metadata.openGraph) {
    metadata.openGraph = {
      ...metadata.openGraph,
      url: getCanonicalUrl(defaultLocale, path),
    };
  }

  return metadata;
}

/**
 * Generate metadata for the homepage
 */
export function generateHomeMetadata(
  locale: Locale,
  translations?: { title: string; description: string; keywords?: string[] }
): Metadata {
  const isChineseLocale = locale === 'zh' || locale === 'zh-TW';
  const defaultTitle = isChineseLocale
    ? `无需注册的在线 PDF 工具，适合处理敏感文档 | ${siteConfig.name}`
    : `Online PDF Tools for Sensitive Documents, No Signup Required | ${siteConfig.name}`;
  const defaultDescription = isChineseLocale
    ? '免费在线 PDF 工具，无需注册即可处理合并、拆分、压缩、图片转 PDF 和 PDF 转 Word 等常见任务，适合合同、证件、简历等敏感文档的整理与发送前处理。'
    : 'Use free online PDF tools with no signup required for common tasks like merging, splitting, compressing, image to PDF, and PDF to Word. A practical choice for preparing contracts, IDs, resumes, and other sensitive documents before sharing.';
  const defaultKeywords = isChineseLocale
    ? [
        '无需注册 PDF 工具',
        '敏感文档 PDF 处理',
        '合同 PDF 处理',
        '证件 PDF 整理',
        '简历 PDF 转换',
        '提交前处理 PDF',
      ]
    : [
        'pdf tools for sensitive documents',
        'pdf tools no signup',
        'pdf tools for contracts',
        'pdf tools for resumes',
        'prepare pdf before sharing',
        'online pdf tools for important documents',
      ];

  return generateBaseMetadata({
    locale,
    path: '',
    title: translations?.title || defaultTitle,
    description: translations?.description || defaultDescription,
    keywords: translations?.keywords || defaultKeywords,
    appendDefaultKeywords: false,
  });
}
/**
 * Generate metadata for the tools listing page
 */
export function generateToolsListMetadata(locale: Locale, translations?: { title: string; description: string }): Metadata {
  return generateBaseMetadata({
    locale,
    path: '/tools',
    title: translations?.title || 'Free, Private, Browser-Based PDF Tools',
    description: translations?.description || 'Browse free, private, browser-based PDF tools for merging, splitting, compressing, converting, editing, and securing PDF files online.',
    keywords: ['PDF tools', 'all PDF tools', 'PDF editor', 'PDF converter', 'PDF merger', 'PDF splitter'],
    noIndex: true,
  });
}

/**
 * Generate metadata for the about page
 */
export function generateAboutMetadata(locale: Locale, translations?: { title: string; description: string }): Metadata {
  const shouldIndexPage = shouldIndexStaticPage(locale, '/about');
  const metadata = generateBaseMetadata({
    locale,
    path: '/about',
    title: translations?.title || 'About',
    description: translations?.description || `Learn about ${siteConfig.name} and our free, private, browser-based PDF tools. All processing happens in your browser.`,
    keywords: ['about', 'PDF tools', 'privacy', 'browser-based'],
    noIndex: !shouldIndexPage,
    followWhenNoIndex: true,
  });

  if (!shouldIndexPage) {
    metadata.alternates = {
      canonical: getCanonicalUrl(defaultLocale, '/about'),
      languages: getAlternateUrlsForLocales('/about', locales.filter((candidateLocale) => shouldIndexStaticPage(candidateLocale, '/about'))),
    };

    if (metadata.openGraph) {
      metadata.openGraph = {
        ...metadata.openGraph,
        url: getCanonicalUrl(defaultLocale, '/about'),
      };
    }
  }

  return metadata;
}

/**
 * Generate metadata for the FAQ page
 */
export function generateFaqMetadata(locale: Locale, translations?: { title: string; description: string }): Metadata {
  return generateBaseMetadata({
    locale,
    path: '/faq',
    title: translations?.title || 'Frequently Asked Questions',
    description: translations?.description || `Find answers to common questions about ${siteConfig.name}. Learn how to use our PDF tools effectively.`,
    keywords: ['FAQ', 'help', 'questions', 'PDF tools help'],
  });
}

/**
 * Generate metadata for the privacy page
 */
export function generatePrivacyMetadata(locale: Locale, translations?: { title: string; description: string }): Metadata {
  return generateBaseMetadata({
    locale,
    path: '/privacy',
    title: translations?.title || 'Privacy Policy',
    description: translations?.description || `${siteConfig.name} privacy policy. Your files never leave your device - all processing happens locally in your browser.`,
    keywords: ['privacy', 'security', 'data protection', 'local processing'],
    noIndex: true,
  });
}

/**
 * Generate metadata for the cookies page
 */
export function generateCookiesMetadata(locale: Locale, translations?: { title: string; description: string }): Metadata {
  return generateBaseMetadata({
    locale,
    path: '/cookies',
    title: translations?.title || 'Cookies Policy',
    description: translations?.description || `${siteConfig.name} Cookies Policy. Learn which cookies and local storage features are used for essential site functionality and preferences.`,
    keywords: ['cookies', 'cookies policy', 'local storage', 'privacy', 'website preferences'],
    noIndex: true,
  });
}

/**
 * Generate metadata for the contact page
 */
export function generateContactMetadata(locale: Locale, translations?: { title: string; description: string }): Metadata {
  return generateBaseMetadata({
    locale,
    path: '/contact',
    title: translations?.title || 'Contact Us',
    description: translations?.description || `Get in touch with ${siteConfig.name} team. We'd love to hear from you.`,
    keywords: ['contact', 'support', 'help', 'feedback'],
  });
}

/**
 * Generate metadata for the workflow page
 */
export function generateWorkflowMetadata(locale: Locale, translations?: { title: string; description: string }): Metadata {
  return generateBaseMetadata({
    locale,
    path: '/workflow',
    title: translations?.title || 'PDF Workflow Builder',
    description: translations?.description || `Create custom PDF processing pipelines with ${siteConfig.name}. Build, save, and reuse free, browser-based workflows.`,
    keywords: ['PDF workflow', 'PDF automation', 'workflow builder', 'PDF pipeline', 'browser-based PDF tools'],
  });
}

/**
 * Generate metadata for the terms page
 */
export function generateTermsMetadata(locale: Locale, translations?: { title: string; description: string }): Metadata {
  return generateBaseMetadata({
    locale,
    path: '/terms',
    title: translations?.title || 'Terms of Service',
    description: translations?.description || `${siteConfig.name} Terms of Service. Read our terms and conditions for using our free PDF tools.`,
    keywords: ['terms', 'terms of service', 'conditions', 'legal', 'usage policy'],
  });
}

/**
 * Generate metadata for a tool category page
 */
export function generateCategoryMetadata(
  locale: Locale,
  category: string,
  translations?: { title: string; description: string },
  options?: { noIndex?: boolean }
): Metadata {
  const formattedCategory = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const shouldIndexPage = shouldIndexCategoryHub(locale);
  const path = `/tools/category/${category}`;
  const metadata = generateBaseMetadata({
    locale,
    path,
    title: translations?.title || `${formattedCategory} Tools`,
    description: translations?.description || `Browse free online ${formattedCategory} PDF tools. Secure, fast, and easy to use in your browser.`,
    keywords: ['PDF tools', formattedCategory, `${formattedCategory} PDF tools`, 'online PDF tools', 'free PDF tools'],
    noIndex: options?.noIndex ?? !shouldIndexPage,
    followWhenNoIndex: true,
  });

  if (!shouldIndexPage) {
    metadata.alternates = {
      canonical: getCanonicalUrl(defaultLocale, path),
      languages: getAlternateUrlsForLocales(path, getCategoryHubIndexableLocales()),
    };

    if (metadata.openGraph) {
      metadata.openGraph = {
        ...metadata.openGraph,
        url: getCanonicalUrl(defaultLocale, path),
      };
    }
  }

  return metadata;
}

/**
 * Generate metadata for long-tail landing pages that should only be indexed in English
 * until localized content exists.
 */
export function generateLongTailLandingMetadata(
  locale: Locale,
  options: {
    path: string;
    title: string;
    description: string;
    keywords: string[];
  }
): Metadata {
  const { path, title, description, keywords } = options;
  const englishCanonical = getCanonicalUrl(defaultLocale, path);
  const metadata = generateBaseMetadata({
    locale,
    path,
    title,
    description,
    keywords,
    appendDefaultKeywords: false,
    noIndex: locale !== defaultLocale,
  });

  if (locale === defaultLocale) {
    metadata.alternates = {
      canonical: englishCanonical,
      languages: {
        en: englishCanonical,
        'x-default': englishCanonical,
      },
    };

    return metadata;
  }

  metadata.alternates = {
    canonical: englishCanonical,
    languages: {
      en: englishCanonical,
      'x-default': englishCanonical,
    },
  };

  if (metadata.openGraph) {
    metadata.openGraph = {
      ...metadata.openGraph,
      url: englishCanonical,
    };
  }

  return metadata;
}

/**
 * Convert locale to Open Graph locale format
 */
export function getOpenGraphLocale(locale: Locale): string {
  const ogLocaleMap: Record<Locale, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    es: 'es_ES',
    fr: 'fr_FR',
    de: 'de_DE',
    zh: 'zh_CN',
    'zh-TW': 'zh_TW',
    pt: 'pt_BR',
  };
  return ogLocaleMap[locale] || 'en_US';
}

/**
 * Check if metadata contains all required fields
 */
export function validateMetadata(metadata: Metadata): {
  valid: boolean;
  missingFields: string[];
} {
  const requiredFields = ['title', 'description'];
  const requiredOgFields = ['title', 'description'];
  const requiredTwitterFields = ['card', 'title', 'description'];

  const missingFields: string[] = [];

  // Check base fields
  for (const field of requiredFields) {
    if (!metadata[field as keyof Metadata]) {
      missingFields.push(field);
    }
  }

  // Check Open Graph fields
  if (metadata.openGraph) {
    for (const field of requiredOgFields) {
      if (!metadata.openGraph[field as keyof typeof metadata.openGraph]) {
        missingFields.push(`og:${field}`);
      }
    }
  } else {
    missingFields.push('openGraph');
  }

  // Check Twitter Card fields
  if (metadata.twitter) {
    for (const field of requiredTwitterFields) {
      if (!metadata.twitter[field as keyof typeof metadata.twitter]) {
        missingFields.push(`twitter:${field}`);
      }
    }
  } else {
    missingFields.push('twitter');
  }

  return {
    valid: missingFields.length === 0,
    missingFields,
  };
}

