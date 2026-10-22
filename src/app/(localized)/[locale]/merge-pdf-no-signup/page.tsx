import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { LongTailLandingPage } from '@/components/marketing/LongTailLandingPage';
import { getLandingPageContent } from '@/content/seo/landing-pages';
import {
  generateBreadcrumbSchema,
  generateCollectionPageSchema,
  generateFAQPageSchema,
  generateItemListSchema,
  generateLongTailLandingMetadata,
} from '@/lib/seo';
import { defaultLocale, getPublicLocaleParams, normalizeLocale } from '@/lib/i18n/config';

const content = getLandingPageContent('merge-pdf-no-signup');
const pagePath = '/merge-pdf-no-signup';

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

  return generateLongTailLandingMetadata(validLocale, {
    title: content.title,
    description: content.metaDescription,
    path: pagePath,
    keywords: content.keywords,
  });
}

export default async function MergePdfNoSignupPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = normalizeLocale(locale) || defaultLocale;

  const schemas = [
    generateCollectionPageSchema({
      locale: validLocale,
      path: pagePath,
      title: content.title,
      description: content.metaDescription,
      about: 'Merging PDF files without account creation or signup',
      mainEntityName: content.h1,
    }),
    generateBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Merge PDF Without Signup', path: pagePath },
    ], validLocale),
    generateItemListSchema({
      locale: validLocale,
      title: content.relatedTitle,
      items: content.relatedLinks.map((link) => ({
        name: link.label,
        description: link.description,
        path: link.href,
      })),
    }),
    ...(content.faqs && content.faqs.length > 0 ? [generateFAQPageSchema(content.faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <LongTailLandingPage locale={validLocale} content={content} />
    </>
  );
}
