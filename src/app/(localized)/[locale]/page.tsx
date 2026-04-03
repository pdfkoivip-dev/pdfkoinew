import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { defaultLocale, normalizeLocale, getPublicLocaleParams } from '@/lib/i18n/config';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateHomeMetadata, generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo';
import HomePageClient from './HomePageClient';

export function generateStaticParams() {
  return getPublicLocaleParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = normalizeLocale(locale) || defaultLocale;
  const t = await getTranslations({ locale: validLocale, namespace: 'metadata' });

  return generateHomeMetadata(validLocale, {
    title: t('home.title'),
    description: t('home.description'),
  });
}

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const validLocale = normalizeLocale(locale) || defaultLocale;

  // Enable static rendering
  setRequestLocale(validLocale);

  // Get localized content for tools
  const { tools } = await import('@/config/tools');
  const { getToolContent } = await import('@/config/tool-content');
  const { getHomepagePopularToolContent } = await import('@/config/homepage-popular-tool-content');
  const homepagePopularToolContent = getHomepagePopularToolContent(validLocale);

  const localizedToolContent = tools.reduce((acc, tool) => {
    const content = getToolContent(validLocale, tool.id);
    // Use metaDescription for the card description as it's short and summary-like
    // Use title from the content
    if (content) {
      acc[tool.id] = {
        title: content.title,
        description: content.metaDescription
      };
    }
    return acc;
  }, {} as Record<string, { title: string; description: string }>);

  Object.entries(homepagePopularToolContent).forEach(([toolId, content]) => {
    localizedToolContent[toolId] = content;
  });

  return (
    <>
      <JsonLd data={[generateWebSiteSchema(validLocale), generateOrganizationSchema()]} />
      <HomePageClient locale={validLocale} localizedToolContent={localizedToolContent} />
    </>
  );
}
