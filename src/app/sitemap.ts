/**
 * Sitemap generation split by locale.
 *
 * Root `/sitemap.xml` becomes an index that points to one sitemap per language:
 * `/sitemap/en.xml`, `/sitemap/zh.xml`, `/sitemap/zh-tw.xml`, etc.
 */

import { MetadataRoute } from 'next';
import { existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { siteConfig } from '@/config/site';
import {
  defaultLocale,
  getLocaleSlug,
  getPublicPath,
  locales,
  normalizeLocale,
  type Locale,
} from '@/lib/i18n/config';
import { getAllTools } from '@/config/tools';
import { landingPageSlugs } from '@/content/seo/landing-pages';
import { TOOL_CATEGORIES } from '@/types/tool';
import {
  getCategoryHubIndexableLocales,
  getToolIndexableLocales,
  shouldGenerateLocalizedToolPage,
  shouldIndexCategoryHub,
} from '@/lib/seo/indexing-policy';

export const dynamic = 'force-static';

const PRIORITY = {
  home: 1.0,
  toolCategory: 0.85,
  toolPage: 0.8,
  static: 0.6,
  landingPage: 0.82,
} as const;

const CHANGE_FREQUENCY = {
  home: 'daily',
  toolCategory: 'weekly',
  toolPage: 'weekly',
  static: 'monthly',
  landingPage: 'weekly',
} as const;

const INDEXABLE_STATIC_PAGES = [
  { path: '', priority: PRIORITY.home, changeFrequency: CHANGE_FREQUENCY.home, lastModKey: 'home' },
  { path: '/workflow', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static, lastModKey: 'workflow' },
  { path: '/about', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static, lastModKey: 'about' },
  { path: '/faq', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static, lastModKey: 'faq' },
  { path: '/contact', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static, lastModKey: 'contact' },
  { path: '/terms', priority: PRIORITY.static, changeFrequency: CHANGE_FREQUENCY.static, lastModKey: 'terms' },
] as const;

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

type SitemapFrequency = MetadataRoute.Sitemap[number]['changeFrequency'];

interface SitemapEntryConfig {
  path: string;
  locale: Locale;
  alternateLocales: readonly Locale[];
  lastModified: Date;
  changeFrequency: SitemapFrequency;
  priority: number;
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

function buildAlternates(pathname: string, alternateLocales: readonly Locale[]) {
  const languages = Object.fromEntries(
    alternateLocales.map((locale) => [
      locale,
      `${siteConfig.url}${getPublicPath(pathname || '/', locale)}`,
    ])
  );

  return { languages };
}

function createSitemapEntry(config: SitemapEntryConfig): MetadataRoute.Sitemap[number] {
  const { path: pathname, locale, alternateLocales, lastModified, changeFrequency, priority } = config;

  return {
    url: `${siteConfig.url}${getPublicPath(pathname || '/', locale)}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: buildAlternates(pathname, alternateLocales),
  };
}

export async function generateSitemaps(): Promise<Array<{ id: string }>> {
  return locales.map((locale) => ({
    id: getLocaleSlug(locale),
  }));
}

export function generateLocaleEntries(locale: Locale): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const tools = getAllTools();
  const toolPageLastModified = getLastModifiedForGroup('toolPage');
  const toolCategoryLastModified = getLastModifiedForGroup('toolCategory');
  const landingPageLastModified = getLastModifiedForGroup('landingPages');
  const categoryHubLocales = getCategoryHubIndexableLocales();

  for (const page of INDEXABLE_STATIC_PAGES) {
    entries.push(
      createSitemapEntry({
        path: page.path,
        locale,
        alternateLocales: locales,
        lastModified: getLastModifiedForGroup(page.lastModKey),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      })
    );
  }

  for (const tool of tools) {
    const toolIndexableLocales = getToolIndexableLocales(tool.id);

    if (!shouldGenerateLocalizedToolPage(locale, tool.id)) {
      continue;
    }

    entries.push(
      createSitemapEntry({
        path: `/tools/${tool.slug}`,
        locale,
        alternateLocales: toolIndexableLocales,
        lastModified: toolPageLastModified,
        changeFrequency: CHANGE_FREQUENCY.toolPage,
        priority: PRIORITY.toolPage,
      })
    );
  }

  if (shouldIndexCategoryHub(locale)) {
    for (const category of TOOL_CATEGORIES) {
      entries.push(
        createSitemapEntry({
          path: `/tools/category/${category}`,
          locale,
          alternateLocales: categoryHubLocales,
          lastModified: toolCategoryLastModified,
          changeFrequency: CHANGE_FREQUENCY.toolCategory,
          priority: PRIORITY.toolCategory,
        })
      );
    }
  }

  if (locale === defaultLocale) {
    for (const slug of landingPageSlugs) {
      entries.push(
        createSitemapEntry({
          path: `/${slug}`,
          locale,
          alternateLocales: [defaultLocale],
          lastModified: landingPageLastModified,
          changeFrequency: CHANGE_FREQUENCY.landingPage,
          priority: PRIORITY.landingPage,
        })
      );
    }
  }

  return entries;
}

export default async function sitemap({
  id,
}: {
  id: Promise<string>;
}): Promise<MetadataRoute.Sitemap> {
  const resolvedId = await id;
  const locale = normalizeLocale(resolvedId);

  if (!locale) {
    return generateLocaleEntries(defaultLocale);
  }

  return generateLocaleEntries(locale);
}

export function getSitemapUrlCount(locale: Locale): number {
  return generateLocaleEntries(locale).length;
}
