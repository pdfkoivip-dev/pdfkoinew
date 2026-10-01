import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { normalizeLocale, getPublicLocaleParams } from '@/lib/i18n/config';
import { generateToolsListMetadata } from '@/lib/seo';
import ToolsPageClient from './ToolsPageClient';

export function generateStaticParams() {
  return getPublicLocaleParams();
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = normalizeLocale(locale) || 'en';
  const t = await getTranslations({ locale: validLocale, namespace: 'metadata' });
  const resolvedSearchParams = await searchParams;

  // If search query parameter exists, add noindex to prevent indexing search result pages
  // This fixes GSC "网页会自动重定向" issue for search parameter pages
  const hasSearchQuery = resolvedSearchParams.q !== undefined ||
                        resolvedSearchParams.category !== undefined;

  const baseMetadata = generateToolsListMetadata(validLocale, {
    title: t('tools.title'),
    description: t('tools.description'),
  });

  if (hasSearchQuery) {
    return {
      ...baseMetadata,
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return baseMetadata;
}

interface ToolsPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ToolsPage({ params }: ToolsPageProps) {
  const { locale } = await params;
  const validLocale = normalizeLocale(locale) || 'en';

  // Enable static rendering
  setRequestLocale(validLocale);

  // Get localized content for tools
  const { tools } = await import('@/config/tools');
  const { getToolContent } = await import('@/config/tool-content');

  const localizedToolContent = tools.reduce((acc, tool) => {
    const content = getToolContent(validLocale, tool.id);
    if (content) {
      acc[tool.id] = {
        title: content.title,
        description: content.metaDescription
      };
    }
    return acc;
  }, {} as Record<string, { title: string; description: string }>);

  return <ToolsPageClient locale={validLocale} localizedToolContent={localizedToolContent} />;
}
