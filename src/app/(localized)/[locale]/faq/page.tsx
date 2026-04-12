import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { normalizeLocale, getPublicLocaleParams } from '@/lib/i18n/config';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateFaqMetadata, generateFAQPageSchema } from '@/lib/seo';
import FAQPageClient from './FAQPageClient';
import { buildFaqPageItems } from './faq-data';

export function generateStaticParams() {
  return getPublicLocaleParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = normalizeLocale(locale) || 'en';
  const t = await getTranslations({ locale: validLocale, namespace: 'metadata' });

  return generateFaqMetadata(validLocale, {
    title: t('faq.title'),
    description: t('faq.description'),
  });
}

interface FAQPageProps {
  params: Promise<{ locale: string }>;
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params;
  const validLocale = normalizeLocale(locale) || 'en';
  const tFaq = await getTranslations({ locale: validLocale, namespace: 'faqPage' });

  // Enable static rendering
  setRequestLocale(validLocale);

  const faqSchema = generateFAQPageSchema(buildFaqPageItems(tFaq));

  return (
    <>
      <JsonLd data={faqSchema} />
      <FAQPageClient locale={validLocale} />
    </>
  );
}
