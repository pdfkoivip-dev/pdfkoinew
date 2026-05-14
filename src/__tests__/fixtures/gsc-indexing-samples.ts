import { siteConfig } from '@/config/site';

export type GscSampleCategory =
  | 'indexable_200'
  | 'canonical_redirect'
  | 'intentional_404'
  | 'non_html_resource';

export interface GscIndexingSample {
  url: string;
  category: GscSampleCategory;
}

export const gscIndexingSamples: readonly GscIndexingSample[] = [
  // Failed samples
  { url: `${siteConfig.url}/tools/rasterize-pdf/`, category: 'indexable_200' },
  { url: `${siteConfig.url}/pt/tools/rasterize-pdf/`, category: 'intentional_404' },

  // Pending: indexable pages
  { url: `${siteConfig.url}/zh/tools/add-attachments/`, category: 'indexable_200' },
  { url: `${siteConfig.url}/zh-tw/tools/merge-pdf/`, category: 'indexable_200' },
  { url: `${siteConfig.url}/zh-tw/tools/alternate-merge/`, category: 'indexable_200' },
  { url: `${siteConfig.url}/ko/tools/extract-pages/`, category: 'indexable_200' },
  { url: `${siteConfig.url}/es/tools/organize-pdf/`, category: 'indexable_200' },
  { url: `${siteConfig.url}/ja/tools/rtf-to-pdf/`, category: 'indexable_200' },
  { url: `${siteConfig.url}/es/tools/extract-images/`, category: 'indexable_200' },
  { url: `${siteConfig.url}/es/tools/pdf-to-bmp/`, category: 'indexable_200' },
  { url: `${siteConfig.url}/ko/tools/pdf-to-greyscale/`, category: 'indexable_200' },
  { url: `${siteConfig.url}/zh-tw/`, category: 'indexable_200' },

  // Pending: canonical redirects
  { url: `${siteConfig.url}/tools/pdf-to-docx`, category: 'canonical_redirect' },
  { url: `${siteConfig.url}/en/tools/jpg-to-pdf`, category: 'canonical_redirect' },
  { url: `${siteConfig.url}/zh-TW/`, category: 'canonical_redirect' },

  // Pending: intentional 404s for non-indexable locale-tool combos
  { url: `${siteConfig.url}/ko/tools/sanitize-pdf/`, category: 'intentional_404' },
  { url: `${siteConfig.url}/es/tools/rtf-to-pdf/`, category: 'intentional_404' },
  { url: `${siteConfig.url}/ko/tools/markdown-to-pdf/`, category: 'intentional_404' },
  { url: `${siteConfig.url}/zh-tw/tools/font-to-outline/`, category: 'intentional_404' },

  // Pending: non-html resource
  { url: `${siteConfig.url}/manifest.webmanifest`, category: 'non_html_resource' },
] as const;
