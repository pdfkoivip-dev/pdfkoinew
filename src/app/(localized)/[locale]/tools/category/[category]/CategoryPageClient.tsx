'use client';

import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ToolGrid } from '@/components/tools/ToolGrid';
import { Card } from '@/components/ui/Card';
import { getToolsByCategory } from '@/config/tools';
import { getLocalizedPath, getPublicPath, type Locale } from '@/lib/i18n/config';
import { getToolPublicLocale } from '@/lib/seo/indexing-policy';
import { type ToolCategory } from '@/types/tool';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';

interface CategoryPageClientProps {
    locale: Locale;
    category: ToolCategory;
    heroTitle: string;
    heroDescription: string;
    helperText: string;
    introTitle: string;
    introParagraphs: string[];
    anchorSectionTitle: string;
    anchorSectionDescription: string;
    anchorLinks: Array<{
        toolId: string;
        slug: string;
        anchorText: string;
        note: string;
    }>;
    featuredSectionTitle: string;
    featuredSectionDescription: string;
    browseSectionTitle: string;
    browseSectionDescription: string;
    featuredTasks: Array<{
        toolId: string;
        slug: string;
        title: string;
        description: string;
        label: string;
        reason: string;
    }>;
    localizedToolContent?: Record<string, { title: string; description: string }>;
}

export default function CategoryPageClient({
    locale,
    category,
    heroTitle,
    heroDescription,
    helperText,
    introTitle,
    introParagraphs,
    anchorSectionTitle,
    anchorSectionDescription,
    anchorLinks,
    featuredSectionTitle,
    featuredSectionDescription,
    browseSectionTitle,
    browseSectionDescription,
    featuredTasks,
    localizedToolContent,
}: CategoryPageClientProps) {
    const t = useTranslations();
    const tools = getToolsByCategory(category);

    // Map categories to translation keys (matching ToolsPage structure)
    const categoryTranslationKeys: Record<ToolCategory, string> = {
        'edit-annotate': 'editAnnotate',
        'convert-to-pdf': 'convertToPdf',
        'convert-from-pdf': 'convertFromPdf',
        'organize-manage': 'organizeManage',
        'optimize-repair': 'optimizeRepair',
        'secure-pdf': 'securePdf',
    };

    const categoryName = t(`home.categories.${categoryTranslationKeys[category]}`);

    return (
        <div className="min-h-screen flex flex-col bg-[hsl(var(--color-background))]">
            <Header locale={locale} />

            <main className="flex-1">
                <div className="container mx-auto px-4 pt-24 pb-8">
                    {/* Breadcrumb Navigation */}
                    <nav aria-label="Breadcrumb" className="mb-4 flex items-center text-sm text-[hsl(var(--color-muted-foreground))] animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
                        <Link
                            href={getLocalizedPath('/', locale)}
                            className="flex items-center hover:text-[hsl(var(--color-primary))] transition-colors"
                            title={t('common.navigation.home')}
                        >
                            <Home className="w-4 h-4" />
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2 text-[hsl(var(--color-border))]" />
                        <Link
                            href={getLocalizedPath('/tools', locale)}
                            className="hover:text-[hsl(var(--color-primary))] transition-colors"
                        >
                            {t('common.navigation.tools')}
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2 text-[hsl(var(--color-border))]" />
                        <span className="font-medium text-[hsl(var(--color-foreground))] truncate max-w-[200px] sm:max-w-md" aria-current="page">
                            {categoryName}
                        </span>
                    </nav>

                    {/* Page Header */}
                    <section className="relative mb-8">
                        <h1 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-2">
                            {heroTitle}
                        </h1>
                        <p className="text-base text-[hsl(var(--color-muted-foreground))]">
                            {heroDescription}
                        </p>
                        {helperText ? (
                            <p className="mt-3 max-w-3xl text-sm text-[hsl(var(--color-muted-foreground))]">
                                {helperText}
                            </p>
                        ) : null}
                    </section>

                    {introParagraphs.length > 0 ? (
                        <section className="mb-10" aria-labelledby="category-intro">
                            <Card className="border-[hsl(var(--color-border))/0.6] bg-white/75 backdrop-blur-sm">
                                <h2
                                    id="category-intro"
                                    className="text-xl font-semibold text-[hsl(var(--color-foreground))]"
                                >
                                    {introTitle}
                                </h2>
                                <div className="mt-4 space-y-3 text-sm leading-7 text-[hsl(var(--color-muted-foreground))]">
                                    {introParagraphs.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </Card>
                        </section>
                    ) : null}

                    {anchorLinks.length > 0 ? (
                        <section className="mb-10" aria-labelledby="category-anchor-links">
                            <div className="mb-5 max-w-3xl">
                                <h2
                                    id="category-anchor-links"
                                    className="text-2xl font-semibold text-[hsl(var(--color-foreground))]"
                                >
                                    {anchorSectionTitle}
                                </h2>
                                <p className="mt-2 text-sm text-[hsl(var(--color-muted-foreground))]">
                                    {anchorSectionDescription}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {anchorLinks.map((link) => (
                                    <Card
                                        key={link.toolId}
                                        className="border-[hsl(var(--color-border))/0.6] bg-white/80 backdrop-blur-sm"
                                    >
                                        <Link
                                            href={getPublicPath(`/tools/${link.slug}`, getToolPublicLocale(locale, link.toolId))}
                                            className="text-base font-semibold text-[hsl(var(--color-primary))] underline decoration-[hsl(var(--color-primary))/0.35] underline-offset-4 transition-colors hover:text-[#0052FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))] focus-visible:ring-offset-2 rounded-sm"
                                        >
                                            {link.anchorText}
                                        </Link>
                                        <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--color-muted-foreground))]">
                                            {link.note}
                                        </p>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {featuredTasks.length > 0 ? (
                        <section className="mb-10" aria-labelledby="category-featured-tasks">
                            <div className="mb-5 max-w-3xl">
                                <h2
                                    id="category-featured-tasks"
                                    className="text-2xl font-semibold text-[hsl(var(--color-foreground))]"
                                >
                                    {featuredSectionTitle}
                                </h2>
                                <p className="mt-2 text-sm text-[hsl(var(--color-muted-foreground))]">
                                    {featuredSectionDescription}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                                {featuredTasks.map((task) => (
                                    <Link
                                        key={task.toolId}
                                        href={getPublicPath(`/tools/${task.slug}`, getToolPublicLocale(locale, task.toolId))}
                                        className="group block rounded-[var(--radius-lg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))] focus-visible:ring-offset-2"
                                    >
                                        <Card
                                            className="h-full border-[hsl(var(--color-border))/0.6] bg-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0052FF]/30 hover:shadow-[0_18px_40px_hsl(211_100%_50%/0.12)]"
                                        >
                                            <div className="flex h-full flex-col">
                                                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0052FF]">
                                                    {task.label}
                                                </p>
                                                <h3 className="mt-3 text-lg font-semibold text-[hsl(var(--color-foreground))] group-hover:text-[#0052FF] transition-colors">
                                                    {task.title}
                                                </h3>
                                                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--color-muted-foreground))]">
                                                    {task.reason}
                                                </p>
                                                <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--color-muted-foreground))] line-clamp-3">
                                                    {task.description}
                                                </p>
                                                <div className="mt-auto pt-4">
                                                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--color-primary))]">
                                                        {t('common.categoryPage.openTool', { tool: task.title })}
                                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    <section className="mb-5 max-w-3xl" aria-labelledby="category-all-tools">
                        <h2
                            id="category-all-tools"
                            className="text-2xl font-semibold text-[hsl(var(--color-foreground))]"
                        >
                            {browseSectionTitle}
                        </h2>
                        <p className="mt-2 text-sm text-[hsl(var(--color-muted-foreground))]">
                            {browseSectionDescription}
                        </p>
                    </section>

                    {/* Tools Grid */}
                    <ToolGrid
                        tools={tools}
                        locale={locale}
                        localizedToolContent={localizedToolContent}
                    />
                </div>
            </main>

            <Footer locale={locale} />
        </div>
    );
}
