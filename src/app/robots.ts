import type { MetadataRoute } from 'next';

// Required for static export
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/manifest.webmanifest',
          // Block search parameter pages to prevent duplicate content
          // Fixes GSC "网页会自动重定向" issue
          '/*/tools/?q=*',
          '/tools/?q=*',
          '/*/tools/?category=*',
        ],
      },
    ],
    sitemap: [
      'https://pdfkoi.com/sitemap.xml',
      'https://pdfkoi.com/sitemap/en.xml',
      'https://pdfkoi.com/sitemap/ja.xml',
      'https://pdfkoi.com/sitemap/ko.xml',
      'https://pdfkoi.com/sitemap/es.xml',
      'https://pdfkoi.com/sitemap/fr.xml',
      'https://pdfkoi.com/sitemap/de.xml',
      'https://pdfkoi.com/sitemap/zh.xml',
      'https://pdfkoi.com/sitemap/zh-tw.xml',
      'https://pdfkoi.com/sitemap/pt.xml',
    ],
  };
}
