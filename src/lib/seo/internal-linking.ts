import type { Locale } from '@/lib/i18n/config';

const preferredEnglishAnchorText: Record<string, string> = {
  'edit-pdf': 'Edit PDF',
  'sign-pdf': 'Sign PDF',
  'form-filler': 'Fill PDF Form',
  'add-watermark': 'Add Watermark',
  'merge-pdf': 'Merge PDF',
  'split-pdf': 'Split PDF',
  'organize-pdf': 'Organize PDF',
  'extract-pages': 'Extract Pages',
  'compress-pdf': 'Compress PDF',
  'repair-pdf': 'Repair PDF',
  'pdf-to-pdfa': 'PDF to PDF/A',
  'remove-metadata': 'Remove Metadata',
  'word-to-pdf': 'Word to PDF',
  'jpg-to-pdf': 'JPG to PDF',
  'excel-to-pdf': 'Excel to PDF',
  'png-to-pdf': 'PNG to PDF',
  'image-to-pdf': 'Image to PDF',
  'pdf-to-docx': 'PDF to Word',
  'pdf-to-jpg': 'PDF to JPG',
  'pdf-to-png': 'PDF to PNG',
  'pdf-to-excel': 'PDF to Excel',
  'encrypt-pdf': 'Protect PDF',
  'remove-restrictions': 'Unlock PDF',
  'sanitize-pdf': 'Sanitize PDF',
  'change-permissions': 'Change PDF Permissions',
};

export function getPreferredToolAnchorText(
  locale: Locale,
  toolId: string,
  fallbackTitle: string
): string {
  if (locale === 'en' && preferredEnglishAnchorText[toolId]) {
    return preferredEnglishAnchorText[toolId];
  }

  return fallbackTitle;
}
