import type { Locale } from '@/lib/i18n/config';

export interface HomepagePopularToolCopy {
  title: string;
  description: string;
}

const homepagePopularToolContentEn: Record<string, HomepagePopularToolCopy> = {
  'merge-pdf': {
    title: 'Merge PDF',
    description: 'Combine multiple PDFs into one file in seconds.',
  },
  'split-pdf': {
    title: 'Split PDF',
    description: 'Split one PDF into separate files or extract pages fast.',
  },
  'compress-pdf': {
    title: 'Compress PDF',
    description: 'Reduce PDF size for email, uploads, and faster sharing.',
  },
  'pdf-to-docx': {
    title: 'PDF to Word',
    description: 'Turn PDFs into editable Word files while keeping layout.',
  },
  'jpg-to-pdf': {
    title: 'JPG to PDF',
    description: 'Convert JPG images into one clean, shareable PDF.',
  },
  'pdf-to-jpg': {
    title: 'PDF to JPG',
    description: 'Export PDF pages as high-quality JPG images.',
  },
};

const homepagePopularToolContentZh: Record<string, HomepagePopularToolCopy> = {
  'merge-pdf': {
    title: '合并PDF',
    description: '将多个PDF合并成一个文件，顺序可随时调整。',
  },
  'split-pdf': {
    title: '拆分PDF',
    description: '按页面范围拆分PDF，或快速提取指定页面。',
  },
  'compress-pdf': {
    title: '压缩PDF',
    description: '减小PDF体积，方便邮件发送、上传和分享。',
  },
  'pdf-to-docx': {
    title: 'PDF转Word',
    description: '将PDF转成可编辑的Word文档，同时尽量保留排版。',
  },
  'jpg-to-pdf': {
    title: 'JPG转PDF',
    description: '把多张JPG图片合并成一个整洁的PDF文件。',
  },
  'pdf-to-jpg': {
    title: 'PDF转JPG',
    description: '把PDF页面导出为清晰的JPG图片，便于分享。',
  },
};

export function getHomepagePopularToolContent(locale: Locale): Record<string, HomepagePopularToolCopy> {
  const effectiveLocale = locale === 'zh-TW' ? 'zh' : locale;

  if (effectiveLocale === 'zh') {
    return homepagePopularToolContentZh;
  }

  if (effectiveLocale === 'en') {
    return homepagePopularToolContentEn;
  }

  return {};
}
