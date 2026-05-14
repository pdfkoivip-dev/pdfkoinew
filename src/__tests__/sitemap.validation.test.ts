/**
 * Sitemap Validation Tests
 *
 * Ensures that sitemap generation produces sufficient URLs for each locale
 * and catches deployment issues early.
 */

import { describe, it, expect } from 'vitest';
import { getSitemapUrlCount } from '@/app/sitemap';
import { locales, defaultLocale } from '@/lib/i18n/config';

describe('Sitemap Validation', () => {
  it('should generate sufficient URLs for each locale', () => {
    const results: Record<string, number> = {};

    for (const locale of locales) {
      const count = getSitemapUrlCount(locale);
      results[locale] = count;

      // 每个语言至少应该有首页 + 工具目录 + 部分工具页面
      // 最低阈值设为 10 个 URL
      expect(count, `${locale} sitemap should have at least 10 URLs`).toBeGreaterThan(10);

      // 英语应该有最多的 URL（所有工具都有英语版本）
      if (locale === defaultLocale) {
        expect(count, 'English sitemap should have at least 100 URLs').toBeGreaterThan(100);
      }
    }

    // 输出统计信息用于调试
    console.log('Sitemap URL counts by locale:', results);
  });

  it('should include homepage for all locales', () => {
    for (const locale of locales) {
      const count = getSitemapUrlCount(locale);
      // 至少包含首页
      expect(count, `${locale} sitemap should include at least the homepage`).toBeGreaterThanOrEqual(1);
    }
  });

  it('should have consistent URL counts across similar locales', () => {
    // 获取所有语言的 URL 数量
    const counts = locales.map(locale => ({
      locale,
      count: getSitemapUrlCount(locale)
    }));

    // 英语应该有最多的 URL
    const enCount = counts.find(c => c.locale === defaultLocale)?.count || 0;

    for (const { locale, count } of counts) {
      if (locale !== defaultLocale) {
        // 其他语言的 URL 数量不应该超过英语
        expect(count, `${locale} should not have more URLs than English`).toBeLessThanOrEqual(enCount);

        // 其他语言的 URL 数量不应该少于英语的 5%（太少说明有问题）
        const minExpected = Math.floor(enCount * 0.05);
        expect(count, `${locale} should have at least 5% of English URLs`).toBeGreaterThanOrEqual(minExpected);
      }
    }
  });
});
