/**
 * SEO Metadata Optimization - Batch 2
 * Pages 11-20: High impressions + low/zero CTR
 *
 * Based on GSC data analysis (2026-09-12 to 2026-10-09)
 * Expected impact: +71-89 clicks/month
 */

// ============================================
// 🔥 PRIORITY 1: Zero CTR Pages (严重问题)
// ============================================

// #11. ja - JPG to PDF (0 clicks, 162 impressions)
export const jpgToPdfJa = {
  title: 'JPG→PDF変換【無料・高画質】複数画像を一括変換',
  metaDescription: 'JPGを高画質PDFに変換！複数ファイル一括処理、ドラッグ&ドロップで簡単。完全無料、登録不要、3秒で完了。今すぐ変換 →',
  keywords: ['jpg pdf 変換', 'jpg to pdf', 'jpg pdf 化', '画像 pdf', 'jpg から pdf', '写真 pdf 変換', 'jpg を pdf に', 'jpg pdf 一括'],
};

// #15. ja - Repair PDF (0 clicks, 112 impressions)
export const repairPdfJa = {
  title: 'PDF修復ツール【破損・開けないPDF対応】無料で簡単修復',
  metaDescription: '破損したPDFを修復。開けないPDF、エラーが出るPDFを無料で復元。ブラウザ内処理で安全、登録不要。今すぐ修復 →',
  keywords: ['pdf 修復', 'pdf 壊れた', 'pdf 開けない', 'pdf エラー', 'pdf 復元', 'pdf repair', 'pdf 修理', 'pdf 直す'],
};

// #16. de - Edit PDF (0 clicks, 101 impressions)
export const editPdfDe = {
  title: 'PDF Bearbeiten Online Kostenlos | Text & Bilder Hinzufügen',
  metaDescription: 'PDF kostenlos bearbeiten: Text hinzufügen, Bilder einfügen, Unterschrift erstellen. 100% gratis, keine Registrierung. Jetzt PDF bearbeiten →',
  keywords: ['pdf bearbeiten', 'pdf bearbeiten kostenlos', 'pdf editor', 'pdf text hinzufügen', 'pdf ändern', 'pdf editieren', 'pdf online bearbeiten', 'pdf text ändern'],
};

// #18. pt - Edit PDF (0 clicks, 96 impressions)
export const editPdfPt = {
  title: 'Editar PDF Online Grátis | Adicionar Texto e Imagens',
  metaDescription: 'Edite PDF gratuitamente: adicione texto, insira imagens, crie assinatura. 100% grátis, sem registro. Edite PDF agora →',
  keywords: ['editar pdf', 'editar pdf gratis', 'editor pdf', 'adicionar texto pdf', 'modificar pdf', 'edição pdf', 'editar pdf online', 'alterar pdf'],
};

// #19. de - Sign PDF (0 clicks, 95 impressions)
export const signPdfDe = {
  title: 'PDF Unterschreiben Online Kostenlos | Digitale Signatur',
  metaDescription: 'PDF kostenlos unterschreiben: Unterschrift erstellen, Signatur hinzufügen. Rechtsgültig, 100% gratis, keine Registrierung. Jetzt signieren →',
  keywords: ['pdf unterschreiben', 'pdf signieren', 'pdf signatur', 'pdf unterschrift hinzufügen', 'pdf digital signieren', 'pdf signieren kostenlos', 'pdf elektronisch unterschreiben', 'pdf signatur erstellen'],
};

// #20. en - Organize PDF (0 clicks, 88 impressions)
export const organizePdfEn = {
  title: 'Organize PDF Pages | Reorder, Delete, Rotate Pages Free',
  metaDescription: 'Organize PDF pages easily: reorder, delete, rotate, duplicate pages with drag & drop. 100% free, no watermark, works in browser. Organize now →',
  keywords: ['organize pdf', 'reorder pdf pages', 'rearrange pdf', 'pdf organizer', 'sort pdf pages', 'reorganize pdf', 'pdf page order', 'arrange pdf pages'],
};

// ============================================
// 🟡 PRIORITY 2: Low CTR Pages
// ============================================

// #12. es - PDF Booklet (5 clicks, 147 impressions, CTR 3.40%)
export const pdfBookletEs = {
  title: 'Crear Folleto PDF | Convertir PDF a Formato Libro para Imprimir',
  metaDescription: 'Crea folletos PDF para impresión: reorganiza páginas automáticamente en formato libro. Gratis, sin marcas de agua, listo para imprimir. Crear ahora →',
  keywords: ['folleto pdf', 'crear folleto pdf', 'pdf libro', 'pdf para imprimir folleto', 'pdf booklet', 'imprimir folleto', 'pdf formato libro', 'folleto doble cara'],
};

// #13. en - Add Blank Page (1 click, 136 impressions, CTR 0.74%)
export const addBlankPageEn = {
  title: 'Add Blank Page to PDF | Insert Empty Pages Anywhere Free',
  metaDescription: 'Add blank pages to PDF: insert empty pages anywhere you need. Perfect for printing, separators, notes. 100% free, works in browser. Add pages now →',
  keywords: ['add blank page to pdf', 'insert empty page pdf', 'add page to pdf', 'pdf add blank page', 'insert blank page', 'add empty page pdf', 'pdf blank page', 'insert page pdf'],
};

// #14. en - Compress PDF for Email (2 clicks, 122 impressions, CTR 1.64%)
export const compressPdfForEmailEn = {
  title: 'Compress PDF for Email Free | Reduce Size for Gmail & Outlook',
  metaDescription: 'Compress PDF for email attachments: reduce file size for Gmail, Outlook, Yahoo Mail. Free, no size limit, works instantly. Compress for email now →',
  keywords: ['compress pdf for email', 'reduce pdf size email', 'pdf too large for email', 'compress pdf gmail', 'make pdf smaller for email', 'pdf email size', 'compress pdf outlook', 'email pdf attachment'],
};

// ============================================
// Implementation Summary
// ============================================
console.log(`
📋 Batch 2 Implementation Plan:

Languages to update:
1. ja.ts: jpg-to-pdf, repair-pdf
2. de.ts: edit-pdf, sign-pdf
3. pt.ts: edit-pdf
4. es.ts: pdf-booklet
5. en.ts: add-blank-page, organize-pdf

Special pages (long-tail landing):
- compress-pdf-for-email (separate file)

Expected Results:
- Total additional clicks/month: +71-89
- Focus on zero-CTR pages (high impact)
- German market entry opportunity (2 pages)
`);
