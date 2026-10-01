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
  relatedTools: Tool[];
}

export function RelatedTools({ currentTool, locale, relatedTools }: RelatedToolsProps) {
  if (relatedTools.length === 0) {
    return null;
  }

  const localePrefix = locale === 'en' ? '' : `/${locale}`;

  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">
        {locale === 'zh' || locale === 'zh-TW' ? '相关工具' : 'Related Tools'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedTools.map((tool) => (
          <Link
            key={tool.id}
            href={`${localePrefix}/tools/${tool.slug}`}
            className="block p-4 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">{tool.icon}</div>
              <div>
                <h3 className="font-semibold">{tool.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {tool.description}
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
 */
export function getRelatedTools(
  currentTool: Tool,
  allTools: Tool[],
  limit: number = 6
): Tool[] {
  // Filter out current tool and prioritize same category
  const sameCategoryTools = allTools.filter(
    (tool) =>
      tool.id !== currentTool.id &&
      tool.category === currentTool.category
  );

  const otherTools = allTools.filter(
    (tool) =>
      tool.id !== currentTool.id &&
      tool.category !== currentTool.category
  );

  // Take tools from same category first, then others
  const related = [
    ...sameCategoryTools.slice(0, Math.min(4, limit)),
    ...otherTools.slice(0, Math.max(0, limit - sameCategoryTools.length))
  ];

  return related.slice(0, limit);
}
