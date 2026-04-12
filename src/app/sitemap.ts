/**
 * Sitemap Generation
 * Generates sitemap.xml for all pages across all locales
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import { MetadataRoute } from 'next';
import { existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { siteConfig } from '@/config/site';
import { locales, defaultLocale, type Locale, getPublicPath } from '@/lib/i18n/config';
import { getAllTools, getSeoCoreTools } from '@/config/tools';
import { TOOL_CATEGORIES } from '@/types/tool';

// Required for static export
export const dynamic = 'force-static';

/**
 * Priority values for different page types
 */
const PRIORITY = {
  home: 1.0,
  tools: 0.9,
  toolCategory: 0.85,
  toolPage: 0.8,
  static: 0.6,
} as const;

/**
 * Change frequency for different page types
 */
const CHANGE_FREQUENCY = {
  home: 'daily',
  tools: 'weekly',
  toolCategory: 'weekly',
  toolPage: 'weekly',
  static: 'monthly',
} as const;

/**
 * Static pages that exist for all locales
 */
const STATIC_PAGES = [
  { path: '', priority: PRIORITY.home, changeFrequency: CHANGE_FREQUENCY.home },
  { path: '/tools', priority: PRIORITY.tools, changeFrequency: CHANGE_FREQUENCY.tools },
  { path: '/workflow', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.tools },
  { path: '/about', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static },
  { path: '/faq', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static },
  { path: '/privacy', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static },
  { path: '/cookies', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static },
  { path: '/contact', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static },
  { path: '/terms', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static },
];

const LANDING_PAGES = [
  { path: '/compress-pdf-for-email', priority: 0.82, changeFrequency: 'weekly' as const },
  { path: '/compress-pdf-without-upload', priority: 0.82, changeFrequency: 'weekly' as const },
  { path: '/merge-pdf-no-signup', priority: 0.82, changeFrequency: 'weekly' as const },
];

type SitemapMode = 'core' | 'full';

/**
 * SEO-first sitemap controls.
 *
 * Default behavior is `core` so Search Console sees a tighter set of URLs
 * while the site is still building crawl demand. Category hubs stay in the
 * core sitemap because they are intentional landing pages with dedicated
 * metadata and internal linking value. To restore the original all-pages
 * sitemap later, set `PDFKOI_SITEMAP_MODE=full` at build time.
 *
 * Optional:
 * `PDFKOI_SITEMAP_CORE_LOCALES=en,zh`
 */
const SITEMAP_MODE: SitemapMode = process.env.PDFKOI_SITEMAP_MODE === 'full' ? 'full' : 'core';

const CORE_STATIC_PAGE_PATHS = new Set([
  '',
  '/tools',
]);

const CORE_TOOL_SLUGS = new Set(getSeoCoreTools().map((tool) => tool.slug));

const PROJECT_ROOT = process.cwd();
const LASTMOD_CACHE = new Map<string, Date>();

const PAGE_LASTMOD_SOURCES = {
  home: [
    'src/app/(default)',
    'src/app/(localized)/[locale]/HomePageClient.tsx',
    'src/config/tools.ts',
    'src/config/homepage-popular-tool-content.ts',
    'src/config/tool-content',
    'messages',
  ],
  tools: [
    'src/app/(localized)/[locale]/tools/page.tsx',
    'src/app/(localized)/[locale]/tools/ToolsPageClient.tsx',
    'src/config/tools.ts',
    'src/config/tool-content',
    'messages',
  ],
  workflow: [
    'src/app/(localized)/[locale]/workflow',
    'src/config/workflow-templates.ts',
    'messages',
  ],
  about: [
    'src/app/(localized)/[locale]/about',
    'messages',
  ],
  faq: [
    'src/app/(localized)/[locale]/faq',
    'messages',
  ],
  privacy: [
    'src/app/(localized)/[locale]/privacy',
    'messages',
  ],
  cookies: [
    'src/app/(localized)/[locale]/cookies',
    'messages',
  ],
  contact: [
    'src/app/(localized)/[locale]/contact',
    'messages',
  ],
  terms: [
    'src/app/(localized)/[locale]/terms',
    'messages',
  ],
  toolPage: [
    'src/app/(localized)/[locale]/tools/[tool]',
    'src/config/tools.ts',
    'src/config/tool-content',
    'src/lib/seo',
    'messages',
  ],
  toolCategory: [
    'src/app/(localized)/[locale]/tools/category',
    'src/config/tools.ts',
    'src/config/tool-content',
    'messages',
  ],
  landingPages: [
    'src/app/(localized)/[locale]/compress-pdf-for-email',
    'src/app/(localized)/[locale]/compress-pdf-without-upload',
    'src/app/(localized)/[locale]/merge-pdf-no-signup',
    'src/content/seo/landing-pages.ts',
    'src/components/marketing/LongTailLandingPage.tsx',
  ],
} as const;

type LastModKey = keyof typeof PAGE_LASTMOD_SOURCES;

function getCoreLocales(): Locale[] {
  const configuredLocales = process.env.PDFKOI_SITEMAP_CORE_LOCALES
    ?.split(',')
    .map((locale) => locale.trim())
    .filter(Boolean) ?? [];

  const validConfiguredLocales = configuredLocales.filter((locale): locale is Locale =>
    locales.includes(locale as Locale)
  );

  return validConfiguredLocales.length > 0 ? validConfiguredLocales : [defaultLocale, 'zh'];
}

function getSitemapLocales(): Locale[] {
  return SITEMAP_MODE === 'full' ? Array.from(locales) : getCoreLocales();
}

function getSitemapStaticPages() {
  return SITEMAP_MODE === 'full'
    ? STATIC_PAGES
    : STATIC_PAGES.filter((page) => CORE_STATIC_PAGE_PATHS.has(page.path));
}

function getSitemapTools() {
  const tools = getAllTools();
  return SITEMAP_MODE === 'full'
    ? tools
    : tools.filter((tool) => CORE_TOOL_SLUGS.has(tool.slug));
}

function getLatestMtimeForAbsolutePath(absolutePath: string): Date | null {
  if (!existsSync(absolutePath)) {
    return null;
  }

  const stats = statSync(absolutePath);

  if (stats.isFile()) {
    return stats.mtime;
  }

  if (!stats.isDirectory()) {
    return null;
  }

  let latest = stats.mtime;

  for (const entry of readdirSync(absolutePath, { withFileTypes: true })) {
    const childLatest = getLatestMtimeForAbsolutePath(path.join(absolutePath, entry.name));
    if (childLatest && childLatest > latest) {
      latest = childLatest;
    }
  }

  return latest;
}

function getLastModifiedForGroup(group: LastModKey): Date {
  const cached = LASTMOD_CACHE.get(group);
  if (cached) {
    return cached;
  }

  let latest = new Date(0);

  for (const relativePath of PAGE_LASTMOD_SOURCES[group]) {
    const absolutePath = path.join(PROJECT_ROOT, relativePath);
    const candidate = getLatestMtimeForAbsolutePath(absolutePath);
    if (candidate && candidate > latest) {
      latest = candidate;
    }
  }

  const resolved = latest.getTime() > 0 ? latest : new Date();
  LASTMOD_CACHE.set(group, resolved);
  return resolved;
}

/**
 * Generate sitemap entries for a specific locale
 */
function generateLocaleEntries(locale: Locale): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const staticPages = getSitemapStaticPages();
  const staticPageLastModifiedByPath: Record<string, Date> = {
    '': getLastModifiedForGroup('home'),
    '/tools': getLastModifiedForGroup('tools'),
    '/workflow': getLastModifiedForGroup('workflow'),
    '/about': getLastModifiedForGroup('about'),
    '/faq': getLastModifiedForGroup('faq'),
    '/privacy': getLastModifiedForGroup('privacy'),
    '/cookies': getLastModifiedForGroup('cookies'),
    '/contact': getLastModifiedForGroup('contact'),
    '/terms': getLastModifiedForGroup('terms'),
    '/compress-pdf-for-email': getLastModifiedForGroup('landingPages'),
    '/compress-pdf-without-upload': getLastModifiedForGroup('landingPages'),
    '/merge-pdf-no-signup': getLastModifiedForGroup('landingPages'),
  };
  
  // Add static pages
  for (const page of staticPages) {
    entries.push({
      url: `${siteConfig.url}${getPublicPath(page.path || '/', locale)}`,
      lastModified: staticPageLastModifiedByPath[page.path],
      changeFrequency: page.changeFrequency as 'daily' | 'weekly' | 'monthly',
      priority: page.priority,
    });
  }
  
  // Add tool pages
  const tools = getSitemapTools();
  const toolPageLastModified = getLastModifiedForGroup('toolPage');
  for (const tool of tools) {
    entries.push({
      url: `${siteConfig.url}${getPublicPath(`/tools/${tool.slug}`, locale)}`,
      lastModified: toolPageLastModified,
      changeFrequency: CHANGE_FREQUENCY.toolPage,
      priority: PRIORITY.toolPage,
    });
  }

  // Add tool category pages in all sitemap modes because these hubs are
  // first-class landing pages, not transient filter states.
  const toolCategoryLastModified = getLastModifiedForGroup('toolCategory');
  for (const category of TOOL_CATEGORIES) {
    entries.push({
      url: `${siteConfig.url}${getPublicPath(`/tools/category/${category}`, locale)}`,
      lastModified: toolCategoryLastModified,
      changeFrequency: CHANGE_FREQUENCY.toolCategory,
      priority: PRIORITY.toolCategory,
    });
  }

  for (const page of LANDING_PAGES) {
    entries.push({
      url: `${siteConfig.url}${getPublicPath(page.path, locale)}`,
      lastModified: staticPageLastModifiedByPath[page.path],
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  }
  
  return entries;
}

/**
 * Generate the complete sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const allEntries: MetadataRoute.Sitemap = [];
  const sitemapLocales = getSitemapLocales();
  
  // Generate entries for each locale
  for (const locale of sitemapLocales) {
    const localeEntries = generateLocaleEntries(locale);
    allEntries.push(...localeEntries);
  }
  
  return allEntries;
}

/**
 * Get total number of URLs in sitemap
 * Useful for testing and validation
 */
export function getSitemapUrlCount(): number {
  const tools = getSitemapTools();
  const staticPagesCount = getSitemapStaticPages().length;
  const toolPagesCount = tools.length;
  const categoryPagesCount = TOOL_CATEGORIES.length;
  const localesCount = getSitemapLocales().length;
  
  return (staticPagesCount + toolPagesCount + categoryPagesCount) * localesCount;
}
