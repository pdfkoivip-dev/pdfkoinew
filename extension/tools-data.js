// Complete list of PDFkoi tools for search functionality
const ALL_TOOLS = [
    // Popular
    { id: 'merge-pdf', name: 'Merge PDF', icon: '📎', category: 'popular', keywords: ['combine', 'join', 'unite'] },
    { id: 'split-pdf', name: 'Split PDF', icon: '✂️', category: 'popular', keywords: ['divide', 'separate', 'extract pages'] },
    { id: 'compress-pdf', name: 'Compress PDF', icon: '📦', category: 'popular', keywords: ['reduce size', 'optimize', 'shrink'] },
    { id: 'edit-pdf', name: 'Edit PDF', icon: '✏️', category: 'popular', keywords: ['modify', 'change', 'update'] },

    // Convert to PDF
    { id: 'jpg-to-pdf', name: 'JPG to PDF', icon: '🖼️', category: 'convert', keywords: ['image', 'photo', 'picture'] },
    { id: 'png-to-pdf', name: 'PNG to PDF', icon: '🖼️', category: 'convert', keywords: ['image', 'photo', 'picture'] },
    { id: 'word-to-pdf', name: 'Word to PDF', icon: '📝', category: 'convert', keywords: ['doc', 'docx', 'document'] },
    { id: 'excel-to-pdf', name: 'Excel to PDF', icon: '📊', category: 'convert', keywords: ['xls', 'xlsx', 'spreadsheet'] },
    { id: 'ppt-to-pdf', name: 'PowerPoint to PDF', icon: '📽️', category: 'convert', keywords: ['ppt', 'pptx', 'presentation'] },
    { id: 'html-to-pdf', name: 'HTML to PDF', icon: '🌐', category: 'convert', keywords: ['webpage', 'web', 'url'] },
    { id: 'epub-to-pdf', name: 'EPUB to PDF', icon: '📚', category: 'convert', keywords: ['ebook', 'book'] },
    { id: 'mobi-to-pdf', name: 'MOBI to PDF', icon: '📱', category: 'convert', keywords: ['ebook', 'kindle'] },
    { id: 'txt-to-pdf', name: 'Text to PDF', icon: '📄', category: 'convert', keywords: ['text', 'txt'] },
    { id: 'rtf-to-pdf', name: 'RTF to PDF', icon: '📝', category: 'convert', keywords: ['rich text'] },

    // Convert from PDF
    { id: 'pdf-to-jpg', name: 'PDF to JPG', icon: '📷', category: 'convert', keywords: ['image', 'export', 'extract'] },
    { id: 'pdf-to-png', name: 'PDF to PNG', icon: '🖼️', category: 'convert', keywords: ['image', 'export'] },
    { id: 'pdf-to-word', name: 'PDF to Word', icon: '📄', category: 'convert', keywords: ['doc', 'docx', 'editable'] },
    { id: 'pdf-to-excel', name: 'PDF to Excel', icon: '📈', category: 'convert', keywords: ['xls', 'xlsx', 'spreadsheet', 'table'] },
    { id: 'pdf-to-ppt', name: 'PDF to PowerPoint', icon: '🎬', category: 'convert', keywords: ['ppt', 'pptx', 'presentation'] },
    { id: 'pdf-to-text', name: 'PDF to Text', icon: '📝', category: 'convert', keywords: ['txt', 'extract text'] },
    { id: 'pdf-to-html', name: 'PDF to HTML', icon: '🌐', category: 'convert', keywords: ['webpage'] },

    // Security
    { id: 'sign-pdf', name: 'Sign PDF', icon: '✍️', category: 'security', keywords: ['signature', 'esign', 'digital signature'] },
    { id: 'encrypt-pdf', name: 'Encrypt PDF', icon: '🔒', category: 'security', keywords: ['password', 'protect', 'secure', 'lock'] },
    { id: 'unlock-pdf', name: 'Unlock PDF', icon: '🔓', category: 'security', keywords: ['decrypt', 'remove password', 'unprotect'] },
    { id: 'redact-pdf', name: 'Redact PDF', icon: '🖍️', category: 'security', keywords: ['black out', 'censor', 'hide'] },
    { id: 'watermark-pdf', name: 'Watermark PDF', icon: '💧', category: 'security', keywords: ['stamp', 'mark', 'brand'] },

    // Organize
    { id: 'rotate-pdf', name: 'Rotate PDF', icon: '🔄', category: 'organize', keywords: ['turn', 'flip', 'orientation'] },
    { id: 'delete-pages', name: 'Delete Pages', icon: '🗑️', category: 'organize', keywords: ['remove pages', 'delete'] },
    { id: 'extract-pages', name: 'Extract Pages', icon: '📑', category: 'organize', keywords: ['get pages', 'separate'] },
    { id: 'reorder-pages', name: 'Reorder Pages', icon: '🔀', category: 'organize', keywords: ['rearrange', 'sort', 'organize'] },
    { id: 'page-numbers', name: 'Add Page Numbers', icon: '🔢', category: 'organize', keywords: ['number', 'pagination'] },

    // Modify
    { id: 'crop-pdf', name: 'Crop PDF', icon: '✂️', category: 'modify', keywords: ['trim', 'cut', 'resize'] },
    { id: 'resize-pdf', name: 'Resize PDF', icon: '📐', category: 'modify', keywords: ['scale', 'change size'] },
    { id: 'add-text', name: 'Add Text', icon: '📝', category: 'modify', keywords: ['insert text', 'write'] },
    { id: 'add-image', name: 'Add Image', icon: '🖼️', category: 'modify', keywords: ['insert image', 'picture'] },
    { id: 'highlight-pdf', name: 'Highlight PDF', icon: '🖍️', category: 'modify', keywords: ['mark', 'annotate'] },
    { id: 'draw-pdf', name: 'Draw on PDF', icon: '✏️', category: 'modify', keywords: ['annotate', 'sketch'] },

    // Other
    { id: 'pdf-reader', name: 'PDF Reader', icon: '👁️', category: 'other', keywords: ['view', 'open', 'read'] },
    { id: 'ocr-pdf', name: 'OCR PDF', icon: '🔍', category: 'other', keywords: ['scan', 'text recognition', 'searchable'] },
    { id: 'compare-pdf', name: 'Compare PDFs', icon: '⚖️', category: 'other', keywords: ['diff', 'difference', 'changes'] },
    { id: 'pdf-scanner', name: 'PDF Scanner', icon: '📷', category: 'other', keywords: ['scan', 'camera'] },
    { id: 'flatten-pdf', name: 'Flatten PDF', icon: '🔨', category: 'other', keywords: ['merge layers', 'finalize'] },
    { id: 'repair-pdf', name: 'Repair PDF', icon: '🔧', category: 'other', keywords: ['fix', 'recover', 'corrupted'] },
    { id: 'validate-pdf', name: 'Validate PDF', icon: '✅', category: 'other', keywords: ['check', 'verify', 'pdfa'] },
    { id: 'grayscale-pdf', name: 'Grayscale PDF', icon: '⚫', category: 'other', keywords: ['black white', 'bw', 'monochrome'] }
];
