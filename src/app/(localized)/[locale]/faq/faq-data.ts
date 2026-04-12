import type { FAQ } from '@/types/tool';

export interface FAQPageItem extends FAQ {
  id: string;
  category: string;
  categoryLabel: string;
  sourceLabel?: string;
  sourceHref?: string;
  relatedPageLabel?: string;
  relatedPageHref?: string;
}

type TranslateFn = (key: string, values?: Record<string, string | number>) => string;

const categoryMapping: Record<string, string[]> = {
  general: ['whatIs', 'isFree', 'account'],
  privacy: ['uploaded', 'safe', 'storage'],
  features: ['operations', 'merge', 'images', 'edit'],
  technical: ['browsers', 'sizeLimit', 'slow', 'offline'],
  languages: ['supported', 'change'],
};

const faqSources: Record<string, {
  sourceLabel: string;
  sourceHref: string;
  relatedPageLabel?: string;
  relatedPageHref?: string;
}> = {
  'privacy.uploaded': {
    sourceLabel: 'MDN File API',
    sourceHref: 'https://developer.mozilla.org/en-US/docs/Web/API/File_API',
    relatedPageLabel: 'Compress PDF Without Upload',
    relatedPageHref: '/compress-pdf-without-upload',
  },
  'privacy.safe': {
    sourceLabel: 'MDN File System API',
    sourceHref: 'https://developer.mozilla.org/en-US/docs/Web/API/File_System_API',
  },
  'technical.sizeLimit': {
    sourceLabel: 'Google Gmail Help',
    sourceHref: 'https://support.google.com/mail/answer/6584?hl=en',
    relatedPageLabel: 'Compress PDF for Email',
    relatedPageHref: '/compress-pdf-for-email',
  },
};

export function buildFaqPageItems(t: TranslateFn): FAQPageItem[] {
  const baseItems = Object.entries(categoryMapping).flatMap(([category, keys]) =>
    keys.map((key) => ({
      id: `${category}-${key}`,
      category,
      categoryLabel: t(`categories.${category}`),
      question: t(`sections.${category}.${key}.question`),
      answer: t(`sections.${category}.${key}.answer`),
      ...faqSources[`${category}.${key}`],
    }))
  );

  const geoFocusedItems: FAQPageItem[] = [
    {
      id: 'geo-upload-server',
      category: 'privacy',
      categoryLabel: t('categories.privacy'),
      question: 'Does PDFkoi upload files to a server?',
      answer:
        'No. PDFkoi is designed around browser-based PDF processing, so the workflow is intended for users who want to handle documents without a traditional file-upload step.',
      sourceLabel: 'MDN File API',
      sourceHref: 'https://developer.mozilla.org/en-US/docs/Web/API/File_API',
    },
    {
      id: 'geo-no-signup',
      category: 'general',
      categoryLabel: t('categories.general'),
      question: 'Can I use PDFkoi without signup?',
      answer:
        'Yes. PDFkoi is built for no-signup PDF workflows, which makes it useful for one-off tasks like compressing, merging, converting, and preparing documents before sharing.',
      relatedPageLabel: 'Merge PDF Without Signup',
      relatedPageHref: '/merge-pdf-no-signup',
    },
    {
      id: 'geo-browser-vs-upload',
      category: 'privacy',
      categoryLabel: t('categories.privacy'),
      question: 'When should I use browser-based PDF tools instead of upload-based tools?',
      answer:
        'Browser-based PDF tools are often a better fit when you want a faster workflow, fewer handoff steps, or more control over private files such as contracts, forms, resumes, scans, and application documents.',
      sourceLabel: 'MDN File System API',
      sourceHref: 'https://developer.mozilla.org/en-US/docs/Web/API/File_System_API',
      relatedPageLabel: 'Compress PDF Without Upload',
      relatedPageHref: '/compress-pdf-without-upload',
    },
  ];

  return [...geoFocusedItems, ...baseItems];
}

export function getFeaturedFaqItems(items: FAQPageItem[]): FAQPageItem[] {
  const preferredQuestions = [
    'Does PDFkoi upload files to a server?',
    'Can I use PDFkoi without signup?',
    'When should I use browser-based PDF tools instead of upload-based tools?',
  ];

  const preferredMatches = preferredQuestions
    .map((question) => items.find((item) => item.question === question))
    .filter((item): item is FAQPageItem => Boolean(item));

  if (preferredMatches.length === preferredQuestions.length) {
    return preferredMatches;
  }

  const sourceBacked = items.filter((item) => item.sourceHref && item.sourceLabel);
  if (sourceBacked.length >= 3) {
    return sourceBacked.slice(0, 3);
  }

  const preferredCategories = ['general', 'privacy', 'technical'];
  const featured: FAQPageItem[] = [];

  for (const category of preferredCategories) {
    const match = items.find((item) => item.category === category);
    if (match) {
      featured.push(match);
    }
  }

  return featured;
}
