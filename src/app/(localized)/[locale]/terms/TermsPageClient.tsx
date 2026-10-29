'use client';

import { useTranslations } from 'next-intl';
import { FileText, Shield, Lock, AlertTriangle, Scale, Mail } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { getLocalizedPath, type Locale } from '@/lib/i18n/config';

interface TermsPageClientProps {
  locale: Locale;
}

export default function TermsPageClient({ locale }: TermsPageClientProps) {
  const t = useTranslations('termsPage');
  const tc = useTranslations('common');

  // Read item lists stored as {item1, item2, ...} objects.
  const items = (path: string): string[] =>
    Object.values(t.raw(path) as Record<string, string>);

  const termsHighlights = [
    {
      icon: Shield,
      title: t('highlights.clientSide.title'),
      description: t('highlights.clientSide.description'),
    },
    {
      icon: Lock,
      title: t('highlights.privacyFirst.title'),
      description: t('highlights.privacyFirst.description'),
    },
    {
      icon: FileText,
      title: t('highlights.free.title'),
      description: t('highlights.free.description'),
    },
    {
      icon: Scale,
      title: t('highlights.fairUse.title'),
      description: t('highlights.fairUse.description'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[hsl(var(--color-primary)/0.1)] via-[hsl(var(--color-background))] to-[hsl(var(--color-secondary)/0.1)] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
                {t('heroTitle')}
              </h1>
              <p className="text-lg text-[hsl(var(--color-muted-foreground))]">
                {t('heroSubtitle', { brand: tc('brand') })}
              </p>
            </div>
          </div>
        </section>

        {/* Terms Highlights */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {termsHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 text-center" hover>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-8">
                {t('lastUpdated')}
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.acceptance.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.acceptance.body', { brand: tc('brand') })}
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.serviceDesc.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.serviceDesc.body', { brand: tc('brand') })}
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.privacy.heading')}
              </h2>
              <h3 className="text-xl font-semibold text-[hsl(var(--color-foreground))] mt-6 mb-3">
                {t('sections.privacy.processingHeading')}
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                {items('sections.privacy.processingItems').map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-[hsl(var(--color-foreground))] mt-6 mb-3">
                {t('sections.privacy.collectedHeading')}
              </h3>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.privacy.collectedBody')}
              </p>

              <h3 className="text-xl font-semibold text-[hsl(var(--color-foreground))] mt-6 mb-3">
                {t('sections.privacy.cookiesHeading')}
              </h3>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.privacy.cookiesBody')}
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.responsibilities.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.responsibilities.body')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                {items('sections.responsibilities.items').map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.ip.heading')}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                {items('sections.ip.items').map((item) => (
                  <li key={item}>{item.replace('{brand}', tc('brand'))}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.disclaimer.heading')}
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <p className="text-[hsl(var(--color-muted-foreground))] mb-2">
                  <strong>{t('sections.disclaimer.body')}</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-[hsl(var(--color-muted-foreground))]">
                  {items('sections.disclaimer.items').map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.liability.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                <strong>{t('sections.liability.body', { brand: tc('brand') })}</strong>
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.changes.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.changes.body')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                {items('sections.changes.items').map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.beta.heading')}
              </h2>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[hsl(var(--color-muted-foreground))]">
                    {t('sections.beta.body')}
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.governingLaw.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.governingLaw.body')}
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.contact.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t.rich('sections.contact.body', {
                  contactLink: () => (
                    <a href={getLocalizedPath('/contact', locale)} className="text-[hsl(var(--color-primary))] hover:underline">
                      {t('sections.contact.contactLink')}
                    </a>
                  ),
                })}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-blue-50 border border-blue-200 rounded-lg">
                <Mail className="h-8 w-8 text-blue-600" />
                <div className="text-left">
                  <p className="font-semibold text-blue-800">
                    {t('contactBadgeTitle')}
                  </p>
                  <p className="text-sm text-blue-600">
                    {t('contactBadgeDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
