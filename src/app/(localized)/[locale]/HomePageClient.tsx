'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Zap, Wrench, Lock, Sparkles, Edit, FileImage, FolderOpen, Settings, ShieldCheck, Star } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ToolGrid } from '@/components/tools/ToolGrid';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getAllTools, getToolsByCategory, getPopularTools } from '@/config/tools';
import { getLocalizedPath, type Locale } from '@/lib/i18n/config';
import { type ToolCategory } from '@/types/tool';

interface HomePageClientProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

// ... (previous imports)

// ... (props interface)

// ... (previous imports)

// ... (props interface)

export default function HomePageClient({ locale, localizedToolContent }: HomePageClientProps) {
  const t = useTranslations();
  const allTools = getAllTools();
  const popularTools = getPopularTools();
  // Feature highlights (same as before)
  const features = [
    {
      icon: ShieldCheck,
      titleKey: 'home.features.privacy.title',
      descriptionKey: 'home.features.privacy.description',
      color: 'text-green-500',
    },
    {
      icon: Zap,
      titleKey: 'home.features.free.title',
      descriptionKey: 'home.features.free.description',
      color: 'text-yellow-500',
    },
    {
      icon: Wrench,
      titleKey: 'home.features.powerful.title',
      descriptionKey: 'home.features.powerful.description',
      color: 'text-blue-500',
    },
  ];

  // Category icons mapping
  const categoryIcons: Record<ToolCategory, typeof Edit> = {
    'edit-annotate': Edit,
    'convert-to-pdf': FileImage,
    'convert-from-pdf': FileImage,
    'organize-manage': FolderOpen,
    'optimize-repair': Settings,
    'secure-pdf': ShieldCheck,
  };

  const categoryTranslationKeys: Record<ToolCategory, string> = {
    'edit-annotate': 'editAnnotate',
    'convert-to-pdf': 'convertToPdf',
    'convert-from-pdf': 'convertFromPdf',
    'organize-manage': 'organizeManage',
    'optimize-repair': 'optimizeRepair',
    'secure-pdf': 'securePdf',
  };

  // Category sections to display
  const categoryOrder: ToolCategory[] = [
    'edit-annotate',
    'convert-to-pdf',
    'convert-from-pdf',
    'organize-manage',
    'optimize-repair',
    'secure-pdf',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--color-background))]">
      <Header locale={locale} />

      <main id="main-content" className="flex-1 relative" tabIndex={-1}>
        {/* Hero Section */}
        <section
          className="relative overflow-hidden pt-14 pb-8 lg:pt-16 lg:pb-10 bg-aurora"
          aria-labelledby="hero-title"
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Brand Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mt-2 mb-1 rounded-full bg-[hsl(var(--color-background))] border border-[hsl(var(--color-primary)/0.2)] shadow-sm transition-all hover:bg-[hsl(var(--color-background))]">
                <Sparkles className="h-4 w-4 text-[hsl(var(--color-primary))]" aria-hidden="true" />
                <span className="text-sm font-medium text-[hsl(var(--color-primary))]">
                  {t('common.brand')}
                </span>
              </div>

              {/* Hero Title */}
              <h1
                id="hero-title"
                className="hero-title text-[2.65rem] sm:text-[2.9rem] md:text-[3.2rem] lg:text-[3.85rem] font-bold tracking-tight leading-[1.02] mb-3 mx-auto max-w-[15ch] sm:max-w-[17ch] md:max-w-[18ch]"
              >
                <span className="text-[hsl(var(--color-foreground))]">{t('home.hero.title')}</span>
              </h1>

              <p className="text-base sm:text-lg font-semibold text-[hsl(var(--color-primary))] mb-3 max-w-2xl mx-auto leading-relaxed">
                {t('home.hero.subtitle')}
              </p>

              {/* Hero Subtitle */}
              <p className="text-base md:text-lg text-[hsl(var(--color-muted-foreground))] mb-4 max-w-3xl mx-auto leading-relaxed">
                {t('home.hero.description')}
              </p>

              <p className="text-sm md:text-[0.95rem] text-[hsl(var(--color-muted-foreground))] mb-5 max-w-2xl mx-auto leading-relaxed">
                {t('home.hero.useCases')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link href={getLocalizedPath('/tools', locale)}>
                  <Button variant="primary" size="lg" className="btn-gradient h-10 px-6 text-base border border-white/20">
                    {t('home.hero.cta')}
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))] bg-[hsl(var(--color-background))] px-4 py-2 rounded-full border border-[hsl(var(--color-border))] interactive-lift">
                  <Lock className="h-4 w-4 text-green-500" aria-hidden="true" />
                  <span>{t('common.footer.privacyBadge')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Tools Section */}
        <section className="py-16 bg-[hsl(var(--color-muted)/0.5)]" aria-labelledby="popular-tools-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-[hsl(var(--color-primary)/0.1)] border border-[hsl(var(--color-primary)/0.2)]">
                <Star className="h-4 w-4 text-[hsl(var(--color-primary))]" aria-hidden="true" />
                <span className="text-sm font-medium text-[hsl(var(--color-primary))]">
                  {t('home.popularTools.badge')}
                </span>
              </div>
              <h2 id="popular-tools-heading" className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-3">
                {t('home.popularTools.title')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto text-base">
                {t('home.popularTools.description')}
              </p>
            </div>
            <ToolGrid
              tools={popularTools}
              locale={locale}
              className="max-w-5xl mx-auto lg:grid-cols-3 xl:grid-cols-3"
              localizedToolContent={localizedToolContent}
            />
          </div>
        </section>

        <section className="py-14" aria-labelledby="browser-safety">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-8 md:p-10 glass-card border-[hsl(var(--color-border)/0.65)]">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--color-primary))] mb-3">
                  {t('home.contentModules.browserSafety.eyebrow')}
                </p>
                <h2 id="browser-safety" className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                  {t('home.contentModules.browserSafety.heading')}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-[hsl(var(--color-muted-foreground))]">
                  {t('home.contentModules.browserSafety.body')}
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 relative z-20" aria-label="Features">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-6 text-center glass-card border-0 hover:-translate-y-1 transition-transform duration-300" hover={false}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[hsl(var(--color-primary)/0.1)] mb-4 text-[hsl(var(--color-primary))]">
                      <Icon className={`h-6 w-6 ${feature.color}`} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-[hsl(var(--color-foreground))] mb-2">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                      {t(feature.descriptionKey)}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 bg-[hsl(var(--color-muted)/0.28)]" aria-labelledby="everyday-tasks">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--color-primary))] mb-3">
                  {t('home.contentModules.everydayTasks.eyebrow')}
                </p>
                <h2 id="everyday-tasks" className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                  {t('home.contentModules.everydayTasks.heading')}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-[hsl(var(--color-muted-foreground))]">
                  {t('home.contentModules.everydayTasks.body')}
                </p>
              </div>
              <Card className="p-6 h-full bg-[hsl(var(--color-background)/0.9)] border-[hsl(var(--color-border)/0.7)]">
                <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-4">
                  {t('home.contentModules.everydayTasks.cardTitle')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[hsl(var(--color-muted-foreground))]">
                  <div className="rounded-2xl bg-[hsl(var(--color-primary)/0.08)] px-4 py-3">{t('home.contentModules.everydayTasks.items.merge')}</div>
                  <div className="rounded-2xl bg-[hsl(var(--color-primary)/0.08)] px-4 py-3">{t('home.contentModules.everydayTasks.items.split')}</div>
                  <div className="rounded-2xl bg-[hsl(var(--color-primary)/0.08)] px-4 py-3">{t('home.contentModules.everydayTasks.items.compress')}</div>
                  <div className="rounded-2xl bg-[hsl(var(--color-primary)/0.08)] px-4 py-3">{t('home.contentModules.everydayTasks.items.convert')}</div>
                  <div className="rounded-2xl bg-[hsl(var(--color-primary)/0.08)] px-4 py-3">{t('home.contentModules.everydayTasks.items.images')}</div>
                  <div className="rounded-2xl bg-[hsl(var(--color-primary)/0.08)] px-4 py-3">{t('home.contentModules.everydayTasks.items.organize')}</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Tool Categories Section */}
        <section className="py-16 bg-[hsl(var(--color-muted)/0.3)]" aria-labelledby="categories-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 id="categories-heading" className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-3">
                {t('home.categoriesSection.title')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto text-base">
                {t('home.categoriesSection.description', { count: allTools.length })}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categoryOrder.map((category) => {
                const categoryTools = getToolsByCategory(category);
                const Icon = categoryIcons[category];
                const categoryName = t(`home.categories.${categoryTranslationKeys[category]}`);
                const categoryDescription = t(`home.categoriesDescription.${categoryTranslationKeys[category]}`);

                return (
                  <Link
                    key={category}
                    href={getLocalizedPath(`/tools/category/${category}`, locale)}
                    className="group"
                  >
                    <Card className="p-5 h-full glass-card hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-[hsl(var(--color-border)/0.6)]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-5 w-5 text-[hsl(var(--color-primary))]" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-base text-[hsl(var(--color-foreground))] mb-1 group-hover:text-[hsl(var(--color-primary))] transition-colors">
                            {categoryName}
                          </h3>
                          <p className="text-xs text-[hsl(var(--color-muted-foreground))] line-clamp-2 mb-2">
                            {categoryDescription}
                          </p>
                          <div className="flex items-center text-xs font-medium text-[hsl(var(--color-primary))]">
                            <span className="bg-[hsl(var(--color-primary)/0.1)] px-2 py-0.5 rounded-md">
                              {t('home.categoriesSection.toolsCount', { count: categoryTools.length })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14" aria-labelledby="local-processing">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-3">
              <Card className="lg:col-span-2 p-8 md:p-10 glass-card border-[hsl(var(--color-border)/0.65)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--color-primary))] mb-3">
                  {t('home.contentModules.localProcessing.eyebrow')}
                </p>
                <h2 id="local-processing" className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                  {t('home.contentModules.localProcessing.heading')}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-[hsl(var(--color-muted-foreground))]">
                  {t('home.contentModules.localProcessing.body')}
                </p>
              </Card>
              <Card className="p-6 bg-[hsl(var(--color-background)/0.92)] border-[hsl(var(--color-border)/0.7)]">
                <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-4">
                  {t('home.contentModules.localProcessing.cardTitle')}
                </h3>
                <ul className="space-y-3 text-sm text-[hsl(var(--color-muted-foreground))]">
                  <li>{t('home.contentModules.localProcessing.items.contracts')}</li>
                  <li>{t('home.contentModules.localProcessing.items.resumes')}</li>
                  <li>{t('home.contentModules.localProcessing.items.invoices')}</li>
                  <li>{t('home.contentModules.localProcessing.items.scanned')}</li>
                  <li>{t('home.contentModules.localProcessing.items.id')}</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16" aria-label="Statistics">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[hsl(var(--color-border))]">
              <div className="p-4">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">
                  {allTools.length}+
                </div>
                <div className="text-xs font-medium text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                  {t('home.stats.pdfTools')}
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">
                  100%
                </div>
                <div className="text-xs font-medium text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                  {t('home.stats.freeToUse')}
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">
                  9
                </div>
                <div className="text-xs font-medium text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                  {t('home.stats.languages')}
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">
                  0
                </div>
                <div className="text-xs font-medium text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                  {t('home.stats.filesUploaded')}
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
