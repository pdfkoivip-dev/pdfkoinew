'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { getToolsByCategory } from '@/config/tools';
import { getPublicPath, type Locale } from '@/lib/i18n/config';
import { getToolIcon } from '@/config/icons';
import { TOOL_CATEGORIES, type ToolCategory } from '@/types/tool';

interface CategoryBrowseSectionProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

const categoryTranslationKeys: Record<ToolCategory, string> = {
  'edit-annotate': 'editAnnotate',
  'convert-to-pdf': 'convertToPdf',
  'convert-from-pdf': 'convertFromPdf',
  'organize-manage': 'organizeManage',
  'optimize-repair': 'optimizeRepair',
  'secure-pdf': 'securePdf',
};

/**
 * Get representative tools for each category (top 4 most popular/useful)
 */
function getRepresentativeTools(category: ToolCategory, count: number = 4) {
  const allTools = getToolsByCategory(category);

  // Priority order for each category (most commonly used tools first)
  const priorityMap: Record<ToolCategory, string[]> = {
    'organize-manage': ['merge-pdf', 'split-pdf', 'organize-pdf', 'delete-pages'],
    'convert-to-pdf': ['jpg-to-pdf', 'word-to-pdf', 'excel-to-pdf', 'png-to-pdf'],
    'convert-from-pdf': ['pdf-to-jpg', 'pdf-to-docx', 'pdf-to-excel', 'pdf-to-png'],
    'edit-annotate': ['edit-pdf', 'sign-pdf', 'add-watermark', 'header-footer'],
    'optimize-repair': ['compress-pdf', 'repair-pdf', 'linearize-pdf', 'remove-metadata'],
    'secure-pdf': ['encrypt-pdf', 'decrypt-pdf', 'remove-restrictions', 'change-permissions'],
  };

  const priorities = priorityMap[category] || [];

  // Sort tools by priority, then take first 'count' tools
  const sorted = allTools.sort((a, b) => {
    const aIndex = priorities.indexOf(a.id);
    const bIndex = priorities.indexOf(b.id);

    // If both in priority list, sort by priority
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    // If only a is in priority list, a comes first
    if (aIndex !== -1) return -1;
    // If only b is in priority list, b comes first
    if (bIndex !== -1) return 1;
    // Neither in priority list, maintain current order
    return 0;
  });

  return sorted.slice(0, count);
}

export function CategoryBrowseSection({ locale, localizedToolContent = {} }: CategoryBrowseSectionProps) {
  const t = useTranslations();

  return (
    <section
      className="py-16 bg-[hsl(var(--color-background))]"
      aria-labelledby="category-browse-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="category-browse-heading"
            className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-3"
          >
            {t('home.categoryBrowse.title')}
          </h2>
          <p className="text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto text-base">
            {t('home.categoryBrowse.description')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {TOOL_CATEGORIES.map((category) => {
            const tools = getRepresentativeTools(category, 4);
            const categoryKey = categoryTranslationKeys[category];

            return (
              <Card
                key={category}
                className="p-6 glass-card hover:border-[hsl(var(--color-primary)/0.3)] transition-all duration-300"
                hover={false}
              >
                {/* Category Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-[hsl(var(--color-foreground))] mb-1">
                    {t(`home.categories.${categoryKey}`)}
                  </h3>
                  <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                    {t(`home.categoriesDescription.${categoryKey}`)}
                  </p>
                </div>

                {/* Tool Links */}
                <ul className="space-y-2 mb-4">
                  {tools.map((tool) => {
                    const localized = localizedToolContent[tool.id];
                    const toolName = localized?.title || tool.id
                      .split('-')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ');

                    const IconComponent = getToolIcon(tool.icon);

                    return (
                      <li key={tool.id}>
                        <Link
                          href={getPublicPath(`/tools/${tool.slug}`, locale)}
                          className="flex items-center gap-2 text-sm text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-primary))] transition-colors group"
                        >
                          <IconComponent
                            className="w-4 h-4 flex-shrink-0 text-[hsl(var(--color-muted-foreground))] group-hover:text-[hsl(var(--color-primary))] transition-colors"
                            aria-hidden="true"
                          />
                          <span className="truncate">{toolName}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* View All Link */}
                <Link
                  href={getPublicPath(`/tools/category/${category}`, locale)}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--color-primary))] hover:gap-2 transition-all"
                >
                  {t('home.categoryBrowse.viewAll')}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
