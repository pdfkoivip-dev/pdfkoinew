import type { MetadataRoute } from 'next';

// Required for static export
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'cohere-ai',
          'meta-externalagent',
        ],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: [
          '/api/',
          '/cdn-cgi/',
          '/manifest.webmanifest',
        ],
      },
      {
        userAgent: '*',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: [
          '/api/',
          '/cdn-cgi/',
          '/manifest.webmanifest',
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
