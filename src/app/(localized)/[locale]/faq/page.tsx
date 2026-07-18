import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { normalizeLocale, getPublicLocaleParams } from '@/lib/i18n/config';
import { generateFaqMetadata, generateFAQPageSchema, generateWebSiteSchema, generateOrganizationSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqPageItems } from './faq-data';
import FAQPageClient from './FAQPageClient';

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

  // Enable static rendering
  setRequestLocale(validLocale);

  // Build machine-readable FAQ schema so AI engines and search features can
  // cite PDFkoi's privacy/no-signup/browser-based answers directly.
  const t = await getTranslations({ locale: validLocale, namespace: 'faqPage' });
  const translate = (key: string, values?: Record<string, string | number>) => t(key, values);
  const faqItems = buildFaqPageItems(translate);
  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <JsonLd data={[generateWebSiteSchema(validLocale), generateOrganizationSchema(), faqSchema]} />
      <FAQPageClient locale={validLocale} />
    </>
  );
}
