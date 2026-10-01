/**
 * Related Tools Component
 * Displays a list of related tools to improve internal linking
 * Fixes GSC "已抓取-尚未编入索引" issue by adding internal links
 */

import Link from 'next/link';
import type { Tool } from '@/types/tool';
import type { Locale } from '@/lib/i18n/config';

interface RelatedToolsProps {
  currentTool: Tool;
  locale: Locale;
  relatedTools: Array<{
    tool: Tool;
    title: string;
    description: string;
  }>;
}

export function RelatedTools({ currentTool, locale, relatedTools }: RelatedToolsProps) {
  if (relatedTools.length === 0) {
    return null;
  }

  const localePrefix = locale === 'en' ? '' : `/${locale}`;

  const headingText: Record<string, string> = {
    en: 'Related Tools',
    ja: '関連ツール',
    ko: '관련 도구',
    es: 'Herramientas relacionadas',
    fr: 'Outils connexes',
    de: 'Verwandte Tools',
    zh: '相关工具',
    'zh-TW': '相關工具',
    pt: 'Ferramentas relacionadas',
  };

  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">
        {headingText[locale] || headingText.en}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedTools.map(({ tool, title, description }) => (
          <Link
            key={tool.id}
            href={`${localePrefix}/tools/${tool.slug}`}
            className="block p-4 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl mt-1">{tool.icon}</div>
              <div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/**
 * Get related tools based on category and common use cases
 * Returns tool IDs that can be used to fetch localized content
 */
export function getRelatedToolIds(
  currentTool: Tool,
  allTools: Tool[],
  limit: number = 6
): string[] {
  // Use relatedTools from tool config first
  if (currentTool.relatedTools && currentTool.relatedTools.length > 0) {
    return currentTool.relatedTools.slice(0, limit);
  }

  // Fallback: Filter by category
  const sameCategoryTools = allTools.filter(
    (tool) =>
      tool.id !== currentTool.id &&
      tool.category === currentTool.category &&
      !tool.disabled
  );

  const otherTools = allTools.filter(
    (tool) =>
      tool.id !== currentTool.id &&
      tool.category !== currentTool.category &&
      !tool.disabled
  );

  // Take tools from same category first, then others
  const relatedIds = [
    ...sameCategoryTools.slice(0, Math.min(4, limit)),
    ...otherTools.slice(0, Math.max(0, limit - sameCategoryTools.length))
  ].map(tool => tool.id);

  return relatedIds.slice(0, limit);
}
