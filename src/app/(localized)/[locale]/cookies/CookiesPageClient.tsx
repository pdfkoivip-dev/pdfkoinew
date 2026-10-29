'use client';

import { Cookie, HardDrive, Info, Lock, Settings, Shield } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { type Locale } from '@/lib/i18n/config';

interface CookiesPageClientProps {
  locale: Locale;
}

export default function CookiesPageClient({ locale }: CookiesPageClientProps) {
  const t = useTranslations('cookiesPage');
  const tc = useTranslations('common');

  // Read item lists stored as {item1, item2, ...} objects.
  const items = (path: string): string[] =>
    Object.values(t.raw(path) as Record<string, string>);

  const storageItems = [
    {
      name: t('table.rows.language.name'),
      purpose: t('table.rows.language.purpose'),
      storage: t('table.rows.language.storage'),
      duration: t('table.rows.language.duration'),
    },
    {
      name: t('table.rows.recent.name'),
      purpose: t('table.rows.recent.purpose'),
      storage: t('table.rows.recent.storage'),
      duration: t('table.rows.recent.duration'),
    },
    {
      name: t('table.rows.state.name'),
      purpose: t('table.rows.state.purpose'),
      storage: t('table.rows.state.storage'),
      duration: t('table.rows.state.duration'),
    },
  ];

  const highlights = [
    {
      icon: Cookie,
      title: t('highlights.minimal.title'),
      description: t('highlights.minimal.description'),
    },
    {
      icon: Shield,
      title: t('highlights.noTracking.title'),
      description: t('highlights.noTracking.description'),
    },
    {
      icon: HardDrive,
      title: t('highlights.onDevice.title'),
      description: t('highlights.onDevice.description'),
    },
    {
      icon: Lock,
      title: t('highlights.privacyFirst.title'),
      description: t('highlights.privacyFirst.description'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-[hsl(var(--color-primary)/0.08)] via-[hsl(var(--color-background))] to-[hsl(var(--color-secondary)/0.1)] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                <Cookie className="h-8 w-8 text-amber-700" />
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

        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="p-6 text-center" hover>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 mb-4">
                      <Icon className="h-6 w-6 text-amber-700" />
                    </div>
                    <h2 className="font-semibold text-[hsl(var(--color-foreground))] mb-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-8">
                {t('lastUpdated')}
              </p>

              <div className="space-y-10">
                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    {t('sections.covers.heading')}
                  </h2>
                  <div className="space-y-4 text-[hsl(var(--color-muted-foreground))]">
                    <p>{t('sections.covers.p1', { brand: tc('brand') })}</p>
                    <p>{t('sections.covers.p2')}</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    {t('sections.means.heading')}
                  </h2>
                  <div className="space-y-4 text-[hsl(var(--color-muted-foreground))]">
                    <p>{t('sections.means.p1')}</p>
                    <p>{t('sections.means.p2')}</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    {t('sections.uses.heading', { brand: tc('brand') })}
                  </h2>
                  <div className="overflow-x-auto rounded-xl border border-[hsl(var(--color-border))]">
                    <table className="w-full text-sm">
                      <thead className="bg-[hsl(var(--color-muted)/0.5)]">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-[hsl(var(--color-foreground))]">{t('table.item')}</th>
                          <th className="px-4 py-3 text-left font-semibold text-[hsl(var(--color-foreground))]">{t('table.purpose')}</th>
                          <th className="px-4 py-3 text-left font-semibold text-[hsl(var(--color-foreground))]">{t('table.technology')}</th>
                          <th className="px-4 py-3 text-left font-semibold text-[hsl(var(--color-foreground))]">{t('table.duration')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {storageItems.map((item) => (
                          <tr key={item.name} className="border-t border-[hsl(var(--color-border))]">
                            <td className="px-4 py-3 text-[hsl(var(--color-foreground))] font-medium">{item.name}</td>
                            <td className="px-4 py-3 text-[hsl(var(--color-muted-foreground))]">{item.purpose}</td>
                            <td className="px-4 py-3 text-[hsl(var(--color-muted-foreground))]">{item.storage}</td>
                            <td className="px-4 py-3 text-[hsl(var(--color-muted-foreground))]">{item.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    {t('sections.categories.heading')}
                  </h2>
                  <div className="space-y-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-2">
                        {t('sections.categories.essential.heading')}
                      </h3>
                      <p className="text-[hsl(var(--color-muted-foreground))]">
                        {t('sections.categories.essential.body')}
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-2">
                        {t('sections.categories.preference.heading')}
                      </h3>
                      <p className="text-[hsl(var(--color-muted-foreground))]">
                        {t('sections.categories.preference.body')}
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-2">
                        {t('sections.categories.local.heading')}
                      </h3>
                      <p className="text-[hsl(var(--color-muted-foreground))]">
                        {t('sections.categories.local.body')}
                      </p>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    {t('sections.notUsed.heading')}
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))]">
                    {items('sections.notUsed.items').map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    {t('sections.thirdParty.heading')}
                  </h2>
                  <div className="space-y-4 text-[hsl(var(--color-muted-foreground))]">
                    <p>{t('sections.thirdParty.p1')}</p>
                    <p>{t('sections.thirdParty.p2', { brand: tc('brand') })}</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    {t('sections.control.heading')}
                  </h2>
                  <div className="space-y-4 text-[hsl(var(--color-muted-foreground))]">
                    <p>{t('sections.control.p1')}</p>
                    <ul className="list-disc pl-6 space-y-2">
                      {items('sections.control.items').map((item) => (
                        <li key={item}>{item.replace('{brand}', tc('brand'))}</li>
                      ))}
                    </ul>
                    <p>{t('sections.control.p2')}</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    {t('sections.changes.heading')}
                  </h2>
                  <p className="text-[hsl(var(--color-muted-foreground))]">
                    {t('sections.changes.body')}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                    {t('sections.contact.heading')}
                  </h2>
                  <p className="text-[hsl(var(--color-muted-foreground))]">
                    {t('sections.contact.body')}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-6 md:p-8 border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="mt-1 inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 flex-shrink-0">
                    <Info className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[hsl(var(--color-foreground))] mb-2">
                      {t('summary.heading')}
                    </h2>
                    <p className="text-[hsl(var(--color-muted-foreground))] mb-3">
                      {t('summary.body', { brand: tc('brand') })}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))]">
                      <Settings className="h-4 w-4" />
                      {t('summary.note')}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
