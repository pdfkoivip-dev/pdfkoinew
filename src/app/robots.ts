/**
 * Robots.txt Generation
 * Configures crawling rules for search engines
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getLocaleSlug, locales } from '@/lib/i18n/config';

// Required for static export
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const localeSitemaps = locales.map(
    (locale) => `${siteConfig.url}/sitemap/${getLocaleSlug(locale)}.xml`
  );

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/manifest.webmanifest',
        ],
      },
    ],
    sitemap: [`${siteConfig.url}/sitemap.xml`, ...localeSitemaps],
  };
}
