'use client';

import { useTranslations } from 'next-intl';
import { Shield, Lock, Eye, Server, Trash2 } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { type Locale } from '@/lib/i18n/config';

interface PrivacyPageClientProps {
  locale: Locale;
}

export default function PrivacyPageClient({ locale }: PrivacyPageClientProps) {
  const t = useTranslations('privacyPage');
  const tc = useTranslations('common');

  // Read item lists stored as {item1, item2, ...} objects (next-intl's
  // NestedMessages shape) and flatten them into an ordered string array.
  const items = (path: string): string[] =>
    Object.values(t.raw(path) as Record<string, string>);

  const privacyHighlights = [
    {
      icon: Server,
      title: t('highlights.noUpload.title'),
      description: t('highlights.noUpload.description'),
    },
    {
      icon: Lock,
      title: t('highlights.localProcessing.title'),
      description: t('highlights.localProcessing.description'),
    },
    {
      icon: Trash2,
      title: t('highlights.cleanup.title'),
      description: t('highlights.cleanup.description'),
    },
    {
      icon: Eye,
      title: t('highlights.noTracking.title'),
      description: t('highlights.noTracking.description'),
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <Shield className="h-8 w-8 text-green-600" />
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

        {/* Privacy Highlights */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privacyHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 text-center" hover>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                      <Icon className="h-6 w-6 text-green-600" />
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

        {/* Privacy Policy Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-8">
                {t('lastUpdated')}
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.intro.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.intro.body', { brand: tc('brand') })}
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.howItWorks.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.howItWorks.body', { brand: tc('brand') })}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                {items('sections.howItWorks.items').map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.infoCollected.heading')}
              </h2>
              <h3 className="text-xl font-semibold text-[hsl(var(--color-foreground))] mt-6 mb-3">
                {t('sections.infoCollected.filesHeading')}
              </h3>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.infoCollected.filesBody')}
              </p>

              <h3 className="text-xl font-semibold text-[hsl(var(--color-foreground))] mt-6 mb-3">
                {t('sections.infoCollected.usageHeading')}
              </h3>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.infoCollected.usageBody')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                {items('sections.infoCollected.usageItems').map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.infoCollected.usageFooter')}
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.localStorage.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.localStorage.body', { brand: tc('brand') })}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                {items('sections.localStorage.items').map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.localStorage.footer')}
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.cookies.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.cookies.body')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li><strong>{t('sections.cookies.essential')}:</strong> {t('sections.cookies.essentialDesc')}</li>
                <li><strong>{t('sections.cookies.preference')}:</strong> {t('sections.cookies.preferenceDesc')}</li>
                <li><strong>{t('sections.cookies.advertising')}:</strong> {t('sections.cookies.advertisingDesc')}</li>
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.advertising.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.advertising.body1')}
              </p>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.advertising.body2')}
              </p>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                <strong>{t('sections.advertising.important')}:</strong> {t('sections.advertising.importantBody')}
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.thirdParty.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.thirdParty.body', { brand: tc('brand') })}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                {items('sections.thirdParty.items').map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.security.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.security.body')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                {items('sections.security.items').map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.rights.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.rights.body', { brand: tc('brand') })}
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.children.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.children.body', { brand: tc('brand') })}
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.changes.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.changes.body')}
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                {t('sections.contact.heading')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('sections.contact.body')}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Badge */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-green-50 border border-green-200 rounded-lg">
                <Shield className="h-8 w-8 text-green-600" />
                <div className="text-left">
                  <p className="font-semibold text-green-800">
                    {tc('footer.privacyBadge')}
                  </p>
                  <p className="text-sm text-green-600">
                    {t('badgeTitle')}
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
