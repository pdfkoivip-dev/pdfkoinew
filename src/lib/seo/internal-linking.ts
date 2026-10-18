import type { Locale } from '@/lib/i18n/config';

const preferredEnglishAnchorText: Record<string, string> = {
  'edit-pdf': 'Edit PDF',
  'sign-pdf': 'Sign PDF',
  'form-filler': 'Fill PDF Form',
  'add-watermark': 'Add Watermark',
  'merge-pdf': 'Merge PDF Files Online',
  'split-pdf': 'Split PDF Pages Online',
  'organize-pdf': 'Organize PDF',
  'extract-pages': 'Extract Pages',
  'compress-pdf': 'Compress PDF for Email',
  'repair-pdf': 'Repair PDF',
  'pdf-to-pdfa': 'PDF to PDF/A',
  'remove-metadata': 'Remove Metadata',
  'word-to-pdf': 'Word to PDF',
  'jpg-to-pdf': 'Combine JPG Images into One PDF',
  'excel-to-pdf': 'Excel to PDF',
  'png-to-pdf': 'PNG to PDF',
  'image-to-pdf': 'Image to PDF',
  'pdf-to-docx': 'Convert PDF to Editable Word',
  'pdf-to-jpg': 'Convert PDF Pages to JPG',
  'pdf-to-png': 'PDF to PNG',
  'pdf-to-excel': 'PDF to Excel',
  'encrypt-pdf': 'Protect PDF',
  'remove-restrictions': 'Unlock PDF',
  'sanitize-pdf': 'Sanitize PDF',
  'change-permissions': 'Change PDF Permissions',
};

const preferredChineseAnchorText: Record<string, string> = {
  'edit-pdf': '编辑 PDF',
  'sign-pdf': '签署 PDF',
  'form-filler': '填写 PDF 表单',
  'add-watermark': '添加水印',
  'merge-pdf': '怎么把多个 PDF 合并成一个文件',
  'split-pdf': '怎么按页码拆分 PDF',
  'organize-pdf': '整理 PDF 页面',
  'extract-pages': '提取 PDF 页面',
  'compress-pdf': '怎么把 PDF 压缩到适合邮件发送',
  'repair-pdf': '修复 PDF',
  'pdf-to-pdfa': 'PDF 转 PDF/A',
  'remove-metadata': '删除 PDF 元数据',
  'word-to-pdf': 'Word 转 PDF',
  'jpg-to-pdf': '怎么把多张 JPG 图片合并成一个 PDF',
  'excel-to-pdf': 'Excel 转 PDF',
  'png-to-pdf': 'PNG 转 PDF',
  'image-to-pdf': '图片转 PDF',
  'pdf-to-docx': '怎么把 PDF 转成可编辑 Word',
  'pdf-to-jpg': '怎么把 PDF 页面转成 JPG 图片',
  'pdf-to-png': 'PDF 转 PNG',
  'pdf-to-excel': 'PDF 转 Excel',
  'encrypt-pdf': '给 PDF 加密码',
  'remove-restrictions': '解除 PDF 限制',
  'sanitize-pdf': '清理 PDF 敏感信息',
  'change-permissions': '修改 PDF 权限',
};

const preferredTraditionalChineseAnchorText: Record<string, string> = {
  'edit-pdf': '編輯 PDF',
  'sign-pdf': '簽署 PDF',
  'form-filler': '填寫 PDF 表單',
  'add-watermark': '加入浮水印',
  'merge-pdf': '線上合併 PDF 檔案',
  'split-pdf': '依頁碼線上拆分 PDF',
  'organize-pdf': '整理 PDF 頁面',
  'extract-pages': '擷取 PDF 頁面',
  'compress-pdf': '線上壓縮 PDF 以便寄送',
  'repair-pdf': '修復 PDF',
  'pdf-to-pdfa': 'PDF 轉 PDF/A',
  'remove-metadata': '刪除 PDF 中繼資料',
  'word-to-pdf': 'Word 轉 PDF',
  'jpg-to-pdf': 'JPG合併PDF - 多張圖片照片合併為一個PDF',
  'excel-to-pdf': 'Excel 轉 PDF',
  'png-to-pdf': 'PNG 轉 PDF',
  'image-to-pdf': '圖片轉 PDF',
  'pdf-to-docx': '將 PDF 轉為可編輯 Word',
  'pdf-to-jpg': '將 PDF 頁面轉成 JPG 圖片',
  'pdf-to-png': 'PDF 轉 PNG',
  'pdf-to-excel': 'PDF 轉 Excel',
  'encrypt-pdf': '保護 PDF',
  'remove-restrictions': '解除 PDF 限制',
  'sanitize-pdf': '清理 PDF 敏感資訊',
  'change-permissions': '變更 PDF 權限',
};

const preferredSpanishAnchorText: Record<string, string> = {
  'posterize-pdf': 'Convertir PDF a poster para imprimir',
  'combine-single-page': 'Combinar PDF en una sola página continua',
  'reverse-pages': 'Invertir orden de páginas PDF',
  'pdf-booklet': 'Crear folleto PDF para imprimir',
  'page-dimensions': 'Consultar dimensiones de página PDF',
  'compress-pdf': 'Comprimir PDF para enviar por correo',
  'merge-pdf': 'Unir archivos PDF online gratis',
  'split-pdf': 'Dividir y separar páginas PDF',
  'organize-pdf': 'Organizar y reordenar páginas PDF',
  'rotate-pdf': 'Rotar páginas de PDF',
  'delete-pages': 'Eliminar páginas de un PDF',
  'edit-pdf': 'Editar archivos PDF online',
  'jpg-to-pdf': 'Convertir imágenes JPG a PDF',
  'pdf-to-jpg': 'Convertir páginas PDF a JPG',
  'extract-attachments': 'Extraer archivos adjuntos de PDF',
  'decrypt-pdf': 'Desbloquear y quitar contraseña de PDF',
  'encrypt-pdf': 'Proteger PDF con contraseña',
};

const preferredJapaneseAnchorText: Record<string, string> = {
  'organize-pdf': 'PDFページの編成・整理・並び替え',
  'reverse-pages': 'PDFページ順序の一括反転',
  'combine-single-page': 'PDFを1枚の縦長ページに結合',
  'compress-pdf': 'PDFファイルを圧縮・軽量化',
  'merge-pdf': '複数PDFファイルを結合',
  'split-pdf': 'PDFページを分割・抽出',
  'jpg-to-pdf': 'JPG画像をまとめてPDF変換',
  'pdf-to-jpg': 'PDFページを高画質JPG変換',
  'delete-pages': 'PDFの不要ページを削除',
  'rotate-pdf': 'PDFページの向きを回転',
  'posterize-pdf': 'PDFポスター化・分割印刷',
  'page-dimensions': 'PDFページ寸法の確認',
  'encrypt-pdf': 'PDFにパスワード保護を設定',
  'decrypt-pdf': 'PDFのパスワード保護を解除',
};

export function getPreferredToolAnchorText(
  locale: Locale,
  toolId: string,
  fallbackTitle: string
): string {
  if (locale === 'en' && preferredEnglishAnchorText[toolId]) {
    return preferredEnglishAnchorText[toolId];
  }

  if (locale === 'zh' && preferredChineseAnchorText[toolId]) {
    return preferredChineseAnchorText[toolId];
  }

  if (locale === 'zh-TW' && preferredTraditionalChineseAnchorText[toolId]) {
    return preferredTraditionalChineseAnchorText[toolId];
  }

  if (locale === 'es' && preferredSpanishAnchorText[toolId]) {
    return preferredSpanishAnchorText[toolId];
  }

  if (locale === 'ja' && preferredJapaneseAnchorText[toolId]) {
    return preferredJapaneseAnchorText[toolId];
  }

  return fallbackTitle;
}
