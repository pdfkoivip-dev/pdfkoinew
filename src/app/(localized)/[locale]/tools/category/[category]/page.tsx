import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { normalizeLocale, getPublicLocaleParams } from '@/lib/i18n/config';
import { TOOL_CATEGORIES, type ToolCategory } from '@/types/tool';
import {
    generateBreadcrumbSchema,
    generateCategoryMetadata,
    generateCollectionPageSchema,
    generateItemListSchema,
} from '@/lib/seo';
import { shouldGenerateLocalizedToolPage, shouldIndexCategoryHub } from '@/lib/seo/indexing-policy';
import { getPreferredToolAnchorText } from '@/lib/seo/internal-linking';
import { getToolById } from '@/config/tools';
import { JsonLd } from '@/components/seo/JsonLd';
import CategoryPageClient from './CategoryPageClient';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return getPublicLocaleParams().flatMap(({ locale }) =>
        TOOL_CATEGORIES.map((category) => ({
            locale,
            category,
        }))
    );
}

const categoryTranslationKeys: Record<ToolCategory, string> = {
    'edit-annotate': 'editAnnotate',
    'convert-to-pdf': 'convertToPdf',
    'convert-from-pdf': 'convertFromPdf',
    'organize-manage': 'organizeManage',
    'optimize-repair': 'optimizeRepair',
    'secure-pdf': 'securePdf',
};

const englishCategoryHubCopy: Record<
    ToolCategory,
    {
        metadataTitle: string;
        metadataDescription: string;
        heroTitle: string;
        heroDescription: string;
        helperText: string;
        featuredSectionTitle: string;
        featuredSectionDescription: string;
        browseSectionTitle: string;
        browseSectionDescription: string;
        introTitle: string;
        introParagraphs: string[];
        anchorSectionTitle: string;
        anchorSectionDescription: string;
        anchorTargets: Array<{
            toolId: string;
            anchorText: string;
            note: string;
        }>;
        featuredTasks: Array<{
            toolId: string;
            label: string;
            reason: string;
        }>;
        useCasesSectionTitle: string;
        useCasesSectionItems: string[];
        precautionsSectionTitle: string;
        precautionsSectionItems: string[];
    }
> = {
    'edit-annotate': {
        metadataTitle: 'PDF Editing and Annotation Tools',
        metadataDescription:
            'Explore tools for annotating, filling, signing, and refining PDF documents. Use this hub to choose the right editing workflow for your file.',
        heroTitle: 'PDF Editing and Annotation Tools',
        heroDescription:
            'Choose the right tool for adding notes, signatures, stamps, page numbers, and other document updates.',
        helperText:
            'Pick the exact task below to open the tool page that best matches what you need to do.',
        featuredSectionTitle: 'Start with the task that matches your document',
        featuredSectionDescription:
            'These are the strongest entry points when you already know the update you need to make.',
        browseSectionTitle: 'All editing and annotation tools',
        browseSectionDescription:
            'If your job is not listed above, browse the full set of editing and markup tools below.',
        introTitle: 'When to use these editing tools',
        introParagraphs: [
            'This category is for documents that stay in PDF format while you add information, polish the layout, or prepare the file for signing and review.',
            'If you already know the specific action you need (like signing, filling forms, or adding page numbers), go directly to that tool page for the fastest path to your goal.',
        ],
        anchorSectionTitle: 'Quick access to popular tools',
        anchorSectionDescription:
            'These are the most commonly used tools in this category. Click to go directly to the tool page.',
        anchorTargets: [
            {
                toolId: 'edit-pdf',
                anchorText: 'Edit PDF',
                note: 'Use this for general PDF editing, annotations, and markup tasks.',
            },
            {
                toolId: 'sign-pdf',
                anchorText: 'Sign PDF',
                note: 'Use this for adding signatures to documents and approval workflows.',
            },
            {
                toolId: 'form-filler',
                anchorText: 'Fill PDF Form',
                note: 'Use this when you need to complete fields in an existing form.',
            },
            {
                toolId: 'add-watermark',
                anchorText: 'Add Watermark',
                note: 'Use this to add ownership marks, draft labels, or branding to your PDFs.',
            },
        ],
        featuredTasks: [
            {
                toolId: 'edit-pdf',
                label: 'Need to annotate or mark up a PDF?',
                reason: 'Use this page when you want comments, highlights, shapes, text, or redactions in one place.',
            },
            {
                toolId: 'sign-pdf',
                label: 'Need to add a signature?',
                reason: 'Go straight here for typed, drawn, or uploaded signatures without wading through broader editing tools.',
            },
            {
                toolId: 'form-filler',
                label: 'Need to complete a PDF form?',
                reason: 'This is the clearest path when the file already has fields and you just need to fill them in.',
            },
        ],
        useCasesSectionTitle: 'Common use cases',
        useCasesSectionItems: [
            'Reviewing and approving contracts with comments and signatures',
            'Filling out application forms, tax documents, or registration paperwork',
            'Adding watermarks to protect intellectual property or mark document status',
            'Annotating research papers, legal briefs, or technical specifications for collaboration',
            'Adding page numbers and headers to finalize document formatting before distribution',
        ],
        precautionsSectionTitle: 'Important notes',
        precautionsSectionItems: [
            'All editing happens in your browser - files are never uploaded to any server',
            'Save your work frequently when making multiple edits to avoid losing changes',
            'Digital signatures added here are visual only - for legally binding signatures, use certified signature tools',
            'Some PDF features like form field validation or JavaScript actions may not be preserved after editing',
            'For best results, work with PDFs that are not password-protected or have editing restrictions',
        ],
    },
    'convert-to-pdf': {
        metadataTitle: 'Convert Files to PDF',
        metadataDescription:
            'Browse tools for turning images, Office files, ebooks, and other formats into PDF. Use this hub to pick the right conversion path.',
        heroTitle: 'Convert Files to PDF',
        heroDescription:
            'Choose a converter for documents, images, and other supported formats when you need a PDF output.',
        helperText:
            'Select the source format below to jump into the most relevant converter for your file.',
        featuredSectionTitle: 'Choose the source file you are starting from',
        featuredSectionDescription:
            'These pages are the best matches for the most common file-to-PDF conversion tasks.',
        browseSectionTitle: 'All file-to-PDF tools',
        browseSectionDescription:
            'Need a different source format? Browse the full list of converters below.',
        introTitle: 'When to use these conversion tools',
        introParagraphs: [
            'This category is for source files that need to become PDFs, including Office documents, images, ebooks, and text-based formats.',
            'For the best experience, choose the exact source format first. This takes you directly to the most relevant conversion tool for your file type.',
        ],
        anchorSectionTitle: 'Quick access to popular tools',
        anchorSectionDescription:
            'These are the most commonly used file-to-PDF converters. Click to go directly to the tool page.',
        anchorTargets: [
            {
                toolId: 'word-to-pdf',
                anchorText: 'Word to PDF',
                note: 'Use this to convert Word documents (DOCX) to PDF format.',
            },
            {
                toolId: 'jpg-to-pdf',
                anchorText: 'Combine JPG Images into One PDF',
                note: 'Use this to combine multiple JPG images into a single PDF file.',
            },
            {
                toolId: 'excel-to-pdf',
                anchorText: 'Excel to PDF',
                note: 'Use this to convert Excel spreadsheets to PDF format.',
            },
            {
                toolId: 'png-to-pdf',
                anchorText: 'PNG to PDF',
                note: 'Use this to convert PNG images to PDF format.',
            },
        ],
        featuredTasks: [
            {
                toolId: 'word-to-pdf',
                label: 'Converting a Word document?',
                reason: 'Use this page for DOCX-to-PDF jobs where layout preservation matters most.',
            },
            {
                toolId: 'jpg-to-pdf',
                label: 'Converting JPG images?',
                reason: 'This is the sharper destination when the job is a common JPG-to-PDF conversion rather than a mixed-image workflow.',
            },
            {
                toolId: 'excel-to-pdf',
                label: 'Converting a spreadsheet?',
                reason: 'Go here when your source file is an Excel sheet that needs a shareable PDF output.',
            },
        ],
        useCasesSectionTitle: 'Common use cases',
        useCasesSectionItems: [
            'Converting Word documents to PDF for professional distribution and consistent formatting',
            'Creating PDF portfolios from multiple images for presentations or photo albums',
            'Converting Excel reports to PDF for sharing financial data with stakeholders',
            'Turning PowerPoint presentations into PDF handouts for meetings or training',
            'Converting text files and ebooks to PDF for easier reading and archiving',
        ],
        precautionsSectionTitle: 'Important notes',
        precautionsSectionItems: [
            'All conversions happen locally in your browser - no files are uploaded to servers',
            'Complex formatting in source documents may require manual adjustment after conversion',
            'Image quality in the output PDF depends on the quality of your source files',
            'Large files or batch conversions may take longer depending on your device performance',
            'Some advanced features like macros, animations, or embedded media may not transfer to PDF',
        ],
    },
    'convert-from-pdf': {
        metadataTitle: 'Convert PDF to Other Formats',
        metadataDescription:
            'Browse tools for turning PDF files into editable documents, images, and data formats. Use this hub to choose the right export workflow.',
        heroTitle: 'Convert PDF to Other Formats',
        heroDescription:
            'Choose the output format that fits your next step, whether you need an editable document, an image, or extracted data.',
        helperText:
            'Open the exact export tool below so the conversion page matches the format you want.',
        featuredSectionTitle: 'Pick the output you need next',
        featuredSectionDescription:
            'These are the clearest next-step pages for the most common PDF export jobs.',
        browseSectionTitle: 'All PDF export tools',
        browseSectionDescription:
            'If you need a different output format, browse the full set of PDF conversion tools below.',
        introTitle: 'When to use these export tools',
        introParagraphs: [
            'This category is for exporting PDF content into a format that is easier to edit, reuse, analyze, or publish elsewhere.',
            'For the best experience, choose the exact output format you need. This takes you directly to the most relevant export tool for your next step.',
        ],
        anchorSectionTitle: 'Quick access to popular tools',
        anchorSectionDescription:
            'These are the most commonly used PDF export tools. Click to go directly to the tool page.',
        anchorTargets: [
            {
                toolId: 'pdf-to-docx',
                anchorText: 'Convert PDF to Editable Word',
                note: 'Use this to convert PDFs to Word format for editing and revision.',
            },
            {
                toolId: 'pdf-to-jpg',
                anchorText: 'Convert PDF Pages to JPG',
                note: 'Use this to export PDF pages as JPG images for sharing or design work.',
            },
            {
                toolId: 'pdf-to-excel',
                anchorText: 'PDF to Excel',
                note: 'Use this to extract tables and data from PDFs into Excel spreadsheets.',
            },
            {
                toolId: 'pdf-to-png',
                anchorText: 'PDF to PNG',
                note: 'Use this to export PDF pages as PNG images with transparency support.',
            },
        ],
        featuredTasks: [
            {
                toolId: 'pdf-to-docx',
                label: 'Need an editable Word document?',
                reason: 'This is the best match when you want to revise PDF content in Microsoft Word or Google Docs.',
            },
            {
                toolId: 'pdf-to-jpg',
                label: 'Need image files from a PDF?',
                reason: 'Use this page when you want fast page-by-page image exports for sharing or design work.',
            },
            {
                toolId: 'pdf-to-excel',
                label: 'Need spreadsheet-friendly output?',
                reason: 'Go here when the PDF contains tables or data you want to keep working with in Excel.',
            },
        ],
        useCasesSectionTitle: 'Common use cases',
        useCasesSectionItems: [
            'Converting PDF contracts to Word for editing terms and clauses',
            'Extracting PDF pages as images for use in presentations or web content',
            'Converting PDF tables to Excel for data analysis and reporting',
            'Exporting PDF documents to PowerPoint for creating slide decks',
            'Converting scanned PDFs to text files for content reuse and editing',
        ],
        precautionsSectionTitle: 'Important notes',
        precautionsSectionItems: [
            'All conversions are processed locally in your browser - files never leave your device',
            'Conversion accuracy depends on the PDF structure - scanned PDFs may require OCR for best results',
            'Complex layouts with multiple columns or embedded graphics may need manual formatting adjustments',
            'Password-protected or restricted PDFs must be unlocked before conversion',
            'Image quality in exported files depends on the resolution of content in the original PDF',
        ],
    },
    'organize-manage': {
        metadataTitle: 'PDF Organization Tools',
        metadataDescription:
            'Find tools for arranging pages, combining documents, splitting files, and restructuring PDFs. Use this hub to choose the right page-management task.',
        heroTitle: 'PDF Organization Tools',
        heroDescription:
            'Choose the right tool for sorting pages, restructuring documents, and managing multi-file PDF workflows.',
        helperText:
            'Use this hub to find the specific page-management tool that matches your document task.',
        featuredSectionTitle: 'Start with the page-management task you need',
        featuredSectionDescription:
            'These are the main destination pages for combining, splitting, and rearranging PDF documents.',
        browseSectionTitle: 'All PDF organization tools',
        browseSectionDescription:
            'Looking for a more specific page action? Browse the full list below.',
        introTitle: 'When to use these organization tools',
        introParagraphs: [
            'This category is for page-level operations like merging files, splitting sections, reordering pages, and cleaning up document structure.',
            'If you already know the exact action you need, go directly to that tool page. This category helps you choose between different page management tasks.',
        ],
        anchorSectionTitle: 'Quick access to popular tools',
        anchorSectionDescription:
            'These are the most commonly used page management tools. Click to go directly to the tool page.',
        anchorTargets: [
            {
                toolId: 'merge-pdf',
                anchorText: 'Merge PDF Files Online',
                note: 'Use this to combine multiple PDF documents into one file in the correct order.',
            },
            {
                toolId: 'split-pdf',
                anchorText: 'Split PDF Pages Online',
                note: 'Use this to extract specific pages or split a PDF into separate files.',
            },
            {
                toolId: 'organize-pdf',
                anchorText: 'Organize PDF',
                note: 'Use this to reorder, delete, or restructure pages within your PDF.',
            },
            {
                toolId: 'extract-pages',
                anchorText: 'Extract Pages',
                note: 'Use this to pull out selected pages without splitting the entire document.',
            },
        ],
        featuredTasks: [
            {
                toolId: 'merge-pdf',
                label: 'Need to combine multiple PDFs?',
                reason: 'Use this page when the goal is a single merged file from several documents.',
            },
            {
                toolId: 'split-pdf',
                label: 'Need to break one PDF into parts?',
                reason: 'This is the strongest destination when you need page ranges, extraction, or separate outputs.',
            },
            {
                toolId: 'organize-pdf',
                label: 'Need to reorder or clean up pages?',
                reason: 'Go here when your PDF structure is the problem and you need hands-on page control.',
            },
        ],
        useCasesSectionTitle: 'Common use cases',
        useCasesSectionItems: [
            'Merging multiple contract sections or appendices into one complete document',
            'Splitting large reports into individual chapters for easier distribution',
            'Reordering presentation slides or removing duplicate pages from scanned documents',
            'Extracting specific pages from lengthy manuals or reference materials',
            'Combining invoices, receipts, or statements into organized monthly archives',
        ],
        precautionsSectionTitle: 'Important notes',
        precautionsSectionItems: [
            'All operations are performed locally in your browser - no files are uploaded',
            'When merging PDFs, ensure files are in the correct order before processing',
            'Splitting or extracting pages creates new files - original files remain unchanged',
            'Bookmarks and table of contents may need to be recreated after reorganizing pages',
            'For best results with large files, close unnecessary browser tabs to free up memory',
        ],
    },
    'optimize-repair': {
        metadataTitle: 'PDF Optimization and Repair Tools',
        metadataDescription:
            'Explore tools for compressing, repairing, cleaning, and improving PDF files. Use this hub to choose the right maintenance workflow.',
        heroTitle: 'PDF Optimization and Repair Tools',
        heroDescription:
            'Choose a tool for reducing file size, fixing document issues, and improving PDF quality for sharing or storage.',
        helperText:
            'Start with the exact maintenance task below so you land on the right tool page for the job.',
        featuredSectionTitle: 'Choose the maintenance task that fixes your file',
        featuredSectionDescription:
            'These pages are the strongest fits for the most common PDF cleanup and repair jobs.',
        browseSectionTitle: 'All optimization and repair tools',
        browseSectionDescription:
            'If your issue is different, browse the rest of the optimization tools below.',
        introTitle: 'When to use these optimization tools',
        introParagraphs: [
            'This category is for maintenance tasks that make PDFs lighter, cleaner, more stable, or easier to archive and distribute.',
            'For the best experience, choose the specific maintenance task you need. This takes you directly to the right tool for fixing your file.',
        ],
        anchorSectionTitle: 'Quick access to popular tools',
        anchorSectionDescription:
            'These are the most commonly used optimization and repair tools. Click to go directly to the tool page.',
        anchorTargets: [
            {
                toolId: 'compress-pdf',
                anchorText: 'Compress PDF for Email',
                note: 'Use this to reduce file size for email attachments, uploads, and sharing.',
            },
            {
                toolId: 'repair-pdf',
                anchorText: 'Repair PDF',
                note: 'Use this to fix damaged or corrupted PDF files that won\'t open properly.',
            },
            {
                toolId: 'pdf-to-pdfa',
                anchorText: 'PDF to PDF/A',
                note: 'Use this to create archive-ready PDFs for long-term storage and compliance.',
            },
            {
                toolId: 'remove-metadata',
                anchorText: 'Remove Metadata',
                note: 'Use this to clean hidden information from PDFs before sharing.',
            },
        ],
        featuredTasks: [
            {
                toolId: 'compress-pdf',
                label: 'Need a smaller file size?',
                reason: 'Start here when the main problem is upload limits, email size, or storage bloat.',
            },
            {
                toolId: 'repair-pdf',
                label: 'Need to fix a broken PDF?',
                reason: 'Use this page when the document will not open cleanly or behaves like a damaged file.',
            },
            {
                toolId: 'pdf-to-pdfa',
                label: 'Need a cleaner archive-ready version?',
                reason: 'This is the best destination when long-term storage and standards compliance matter.',
            },
        ],
        useCasesSectionTitle: 'Common use cases',
        useCasesSectionItems: [
            'Compressing large PDFs to meet email attachment size limits or upload restrictions',
            'Repairing corrupted PDFs that won\'t open or display correctly',
            'Converting PDFs to PDF/A format for legal archiving and regulatory compliance',
            'Removing metadata and hidden information before sharing sensitive documents',
            'Optimizing scanned documents to reduce storage space while maintaining readability',
        ],
        precautionsSectionTitle: 'Important notes',
        precautionsSectionItems: [
            'All processing happens in your browser - files are never uploaded to external servers',
            'Compression may reduce image quality - preview the result before replacing your original',
            'Repair tools can fix many issues but cannot recover content from severely damaged files',
            'PDF/A conversion removes interactive elements like forms, JavaScript, and multimedia',
            'Always keep a backup of important documents before performing optimization or repair',
        ],
    },
    'secure-pdf': {
        metadataTitle: 'PDF Security and Protection Tools',
        metadataDescription:
            'Browse tools for protecting, unlocking, sanitizing, and permission-managing PDF files. Use this hub to choose the right security task.',
        heroTitle: 'PDF Security and Protection Tools',
        heroDescription:
            'Choose the right tool for passwords, permissions, cleanup, and other document-protection workflows.',
        helperText:
            'Pick the exact security task below to open the tool page built for that document action.',
        featuredSectionTitle: 'Pick the protection task you need',
        featuredSectionDescription:
            'These are the clearest destination pages when security, access, or document cleanup is the main goal.',
        browseSectionTitle: 'All PDF security tools',
        browseSectionDescription:
            'Need a different protection workflow? Browse the rest of the security tools below.',
        introTitle: 'When to use these security tools',
        introParagraphs: [
            'This category is for protecting PDFs, unlocking them when you have permission, and removing hidden or unwanted information before sharing.',
            'For the best experience, choose the specific security action you need. Each tool is designed for a different protection workflow.',
        ],
        anchorSectionTitle: 'Quick access to popular tools',
        anchorSectionDescription:
            'These are the most commonly used security and protection tools. Click to go directly to the tool page.',
        anchorTargets: [
            {
                toolId: 'encrypt-pdf',
                anchorText: 'Protect PDF',
                note: 'Use this to add password protection to your PDF files.',
            },
            {
                toolId: 'remove-restrictions',
                anchorText: 'Unlock PDF',
                note: 'Use this to remove restrictions and unlock password-protected PDFs.',
            },
            {
                toolId: 'sanitize-pdf',
                anchorText: 'Sanitize PDF',
                note: 'Use this to remove hidden data and metadata before sharing sensitive files.',
            },
            {
                toolId: 'change-permissions',
                anchorText: 'Change PDF Permissions',
                note: 'Use this to control who can view, edit, print, or copy your PDF content.',
            },
        ],
        featuredTasks: [
            {
                toolId: 'encrypt-pdf',
                label: 'Need to protect a PDF with a password?',
                reason: 'Go here when you want to lock down access before sharing the file.',
            },
            {
                toolId: 'remove-restrictions',
                label: 'Need to unlock a restricted PDF?',
                reason: 'This is the stronger intent match when the job is removing restrictions so the file can be edited, copied, or reused.',
            },
            {
                toolId: 'sanitize-pdf',
                label: 'Need to clean sensitive data before sharing?',
                reason: 'Use this page when metadata, hidden content, or document residue is the bigger risk.',
            },
        ],
        useCasesSectionTitle: 'Common use cases',
        useCasesSectionItems: [
            'Password-protecting confidential contracts, financial reports, or personal documents',
            'Unlocking PDFs you own but can\'t edit due to forgotten passwords or restrictions',
            'Sanitizing documents to remove author information, comments, and revision history before public release',
            'Setting permissions to prevent unauthorized copying, printing, or editing of proprietary content',
            'Removing security from old archived files to enable modern workflow integration',
        ],
        precautionsSectionTitle: 'Important notes',
        precautionsSectionItems: [
            'All security operations are performed locally - passwords and files never leave your browser',
            'Strong passwords are essential - use a mix of letters, numbers, and symbols for best protection',
            'Unlocking PDFs requires the correct password - these tools cannot crack or bypass unknown passwords',
            'Sanitization removes metadata permanently - keep original files if you need to preserve document history',
            'Password protection is not encryption - for highly sensitive data, consider additional security measures',
        ],
    },
};

const chineseCategoryHubCopy: Partial<
    Record<
        ToolCategory,
        {
            helperText: string;
            featuredSectionTitle: string;
            featuredSectionDescription: string;
            browseSectionTitle: string;
            browseSectionDescription: string;
            introTitle: string;
            introParagraphs: string[];
            anchorSectionTitle: string;
            anchorSectionDescription: string;
            anchorNote: (tool: string) => string;
            featuredLabel: (tool: string) => string;
            featuredReason: (tool: string) => string;
        }
    >
> = {
    'convert-to-pdf': {
        helperText: '先选你手上的源文件类型，再进入最贴近需求的转换页。',
        featuredSectionTitle: '先从最常见的转 PDF 需求开始',
        featuredSectionDescription: '这些入口更适合直接承接图片、文档和表格转 PDF 的明确需求。',
        browseSectionTitle: '全部转 PDF 工具',
        browseSectionDescription: '如果你的源文件类型不在上面，可以继续浏览这一分类下的全部工具。',
        introTitle: '当你的原文件还不是 PDF 时，从这里进入会更清晰',
        introParagraphs: [
            '这一分类适合 Word、图片、表格、电子书等非 PDF 文件转成 PDF 的场景。',
            '对用户和搜索引擎来说，最强的意图通常在具体格式页上，所以这里更适合做分发入口，而不是和单个工具页抢同一个词。',
        ],
        anchorSectionTitle: '这一分类里最值得先点的入口',
        anchorSectionDescription: '这些入口更适合把中文站内权重导向意图最清晰的转 PDF 页面。',
        anchorNote: (tool) => `如果用户已经明确知道要把某种文件转成 PDF，优先进入「${tool}」会更贴需求。`,
        featuredLabel: (tool) => `要直接进入「${tool}」吗？`,
        featuredReason: (tool) => `如果你已经知道输出必须是 PDF，「${tool}」通常比停留在分类页更高效。`,
    },
    'convert-from-pdf': {
        helperText: '先选你希望导出的目标格式，再进入最贴近下一步动作的工具页。',
        featuredSectionTitle: '先从最常见的 PDF 导出需求开始',
        featuredSectionDescription: '这些入口最适合承接“导出成 Word、图片或表格”的高意图场景。',
        browseSectionTitle: '全部 PDF 导出工具',
        browseSectionDescription: '如果你要导出的不是上面这些格式，可以继续浏览完整列表。',
        introTitle: '当 PDF 只是起点时，这里更适合作为分发入口',
        introParagraphs: [
            '这一分类适合把 PDF 导出成 Word、图片、Excel、文本或其他可继续处理的格式。',
            '更强的搜索意图通常落在具体目标格式页上，所以这里的任务是尽快把用户送到最对应的导出工具。',
        ],
        anchorSectionTitle: '这一分类里最值得先点的入口',
        anchorSectionDescription: '这些入口更适合把中文站内权重集中到目标格式明确、转化意图更强的导出页面。',
        anchorNote: (tool) => `如果用户已经知道想导出成什么格式，直接进入「${tool}」通常比停留在分类页更合适。`,
        featuredLabel: (tool) => `要直接进入「${tool}」吗？`,
        featuredReason: (tool) => `如果你的下一步已经明确，「${tool}」会比泛泛浏览分类页更快到结果。`,
    },
    'organize-manage': {
        helperText: '如果你已经知道要合并、拆分还是整理页面，直接进入对应工具页会更省时间。',
        featuredSectionTitle: '先从最常见的 PDF 页面管理需求开始',
        featuredSectionDescription: '这些入口最适合承接合并、拆分和整理页面这类高意图任务。',
        browseSectionTitle: '全部 PDF 页面管理工具',
        browseSectionDescription: '如果你的需求更细，比如提取页面或批量调整结构，可以继续往下选。',
        introTitle: '当问题在于 PDF 结构和页面顺序时，从这里进入最合适',
        introParagraphs: [
            '这一分类适合多文件合并、按页拆分、页面重排、提取页面和结构整理等任务。',
            '用户一旦明确动作，最好的体验通常是直接进入具体工具页，所以这个分类页更适合作为分流入口。',
        ],
        anchorSectionTitle: '这一分类里最值得先点的入口',
        anchorSectionDescription: '这些入口更适合把中文内部链接权重导向意图最强的页面管理工具页。',
        anchorNote: (tool) => `如果需求已经明确到动作层，优先进入「${tool}」更容易满足预期。`,
        featuredLabel: (tool) => `要直接进入「${tool}」吗？`,
        featuredReason: (tool) => `当你已经知道具体动作时，「${tool}」会比继续浏览分类更直接。`,
    },
    'optimize-repair': {
        helperText: '如果你是因为文件太大、打不开或需要清理文档属性，先点对应修复页最合适。',
        featuredSectionTitle: '先从最常见的 PDF 优化与修复需求开始',
        featuredSectionDescription: '这些入口更适合承接压缩、修复、存档和清理这类明确任务。',
        browseSectionTitle: '全部 PDF 优化与修复工具',
        browseSectionDescription: '如果你的问题不在上面这些常见场景里，可以继续浏览完整工具列表。',
        introTitle: '当 PDF 需要变小、修好或清理时，这里是合适入口',
        introParagraphs: [
            '这一分类适合文件过大、损坏、需要长期存档或共享前清理元数据等维护型任务。',
            '这些需求的搜索意图通常集中在具体修复动作页上，所以分类页更适合做中文入口分发，而不是承接所有大词。',
        ],
        anchorSectionTitle: '这一分类里最值得先点的入口',
        anchorSectionDescription: '这些入口更适合把中文站内信号集中到压缩、修复和清理意图最明确的页面。',
        anchorNote: (tool) => `如果你的问题已经很明确，直接进入「${tool}」通常会比先看分类页更快。`,
        featuredLabel: (tool) => `要直接进入「${tool}」吗？`,
        featuredReason: (tool) => `当问题已经清楚到“压缩”“修复”或“清理”层面时，「${tool}」更容易直接解决。`,
    },
};

const traditionalChineseCategoryHubCopy: typeof chineseCategoryHubCopy = {
    'convert-to-pdf': {
        helperText: '先選擇你手上的來源檔案類型，再進入最貼近需求的轉換頁。',
        featuredSectionTitle: '先從最常見的轉 PDF 需求開始',
        featuredSectionDescription: '這些入口更適合承接圖片、文件與表格轉 PDF 的明確需求。',
        browseSectionTitle: '全部轉 PDF 工具',
        browseSectionDescription: '如果你的來源檔案類型不在上方，可以繼續瀏覽這一分類下的完整工具。',
        introTitle: '當你的原始檔案還不是 PDF 時，從這裡進入會更清楚',
        introParagraphs: [
            '這一分類適合 Word、圖片、表格、電子書等非 PDF 檔案轉成 PDF 的情境。',
            '對使用者與搜尋引擎來說，最強的意圖通常落在具體格式頁上，所以這裡更適合作為分流入口。',
        ],
        anchorSectionTitle: '這一分類裡最值得先點的入口',
        anchorSectionDescription: '這些入口更適合把中文站內權重導向意圖最清楚的轉 PDF 頁面。',
        anchorNote: (tool) => `如果使用者已明確知道要把某種檔案轉成 PDF，優先進入「${tool}」會更貼近需求。`,
        featuredLabel: (tool) => `要直接進入「${tool}」嗎？`,
        featuredReason: (tool) => `如果你已知道輸出必須是 PDF，「${tool}」通常比停留在分類頁更有效率。`,
    },
    'convert-from-pdf': {
        helperText: '先選擇你想匯出的目標格式，再進入最貼近下一步動作的工具頁。',
        featuredSectionTitle: '先從最常見的 PDF 匯出需求開始',
        featuredSectionDescription: '這些入口最適合承接「匯出成 Word、圖片或表格」的高意圖情境。',
        browseSectionTitle: '全部 PDF 匯出工具',
        browseSectionDescription: '如果你要匯出的不是上面這些格式，可以繼續瀏覽完整列表。',
        introTitle: '當 PDF 只是起點時，這裡更適合作為分流入口',
        introParagraphs: [
            '這一分類適合把 PDF 匯出成 Word、圖片、Excel、文字或其他可繼續處理的格式。',
            '更強的搜尋意圖通常落在具體目標格式頁上，所以這裡的任務是盡快把使用者送到最對應的工具頁。',
        ],
        anchorSectionTitle: '這一分類裡最值得先點的入口',
        anchorSectionDescription: '這些入口更適合把中文站內權重集中到目標格式明確、轉換意圖更強的頁面。',
        anchorNote: (tool) => `如果使用者已知道想匯出成什麼格式，直接進入「${tool}」通常比停留在分類頁更合適。`,
        featuredLabel: (tool) => `要直接進入「${tool}」嗎？`,
        featuredReason: (tool) => `如果你的下一步已經明確，「${tool}」會比泛泛瀏覽分類頁更快得到結果。`,
    },
    'organize-manage': {
        helperText: '如果你已知道要合併、拆分或整理頁面，直接進入對應工具頁會更省時間。',
        featuredSectionTitle: '先從最常見的 PDF 頁面管理需求開始',
        featuredSectionDescription: '這些入口最適合承接合併、拆分與整理頁面這類高意圖任務。',
        browseSectionTitle: '全部 PDF 頁面管理工具',
        browseSectionDescription: '如果你的需求更細，例如擷取頁面或批次調整結構，可以繼續往下選。',
        introTitle: '當問題在於 PDF 結構與頁面順序時，從這裡進入最合適',
        introParagraphs: [
            '這一分類適合多檔合併、依頁拆分、頁面重排、擷取頁面與結構整理等任務。',
            '使用者一旦明確動作，最好的體驗通常是直接進入具體工具頁，因此這個分類頁更適合作為分流入口。',
        ],
        anchorSectionTitle: '這一分類裡最值得先點的入口',
        anchorSectionDescription: '這些入口更適合把中文內部連結權重導向意圖最強的頁面管理工具頁。',
        anchorNote: (tool) => `如果需求已明確到動作層，優先進入「${tool}」更容易符合預期。`,
        featuredLabel: (tool) => `要直接進入「${tool}」嗎？`,
        featuredReason: (tool) => `當你已知道具體動作時，「${tool}」會比繼續瀏覽分類更直接。`,
    },
    'optimize-repair': {
        helperText: '如果你是因為檔案太大、打不開或需要清理文件屬性，先點對應修復頁最合適。',
        featuredSectionTitle: '先從最常見的 PDF 優化與修復需求開始',
        featuredSectionDescription: '這些入口更適合承接壓縮、修復、存檔與清理這類明確任務。',
        browseSectionTitle: '全部 PDF 優化與修復工具',
        browseSectionDescription: '如果你的問題不在上方這些常見情境裡，可以繼續瀏覽完整工具列表。',
        introTitle: '當 PDF 需要變小、修好或清理時，這裡是合適入口',
        introParagraphs: [
            '這一分類適合檔案過大、損壞、需要長期存檔或分享前清理中繼資料等維護型任務。',
            '這些需求的搜尋意圖通常集中在具體修復動作頁上，所以分類頁更適合作為中文入口分流。',
        ],
        anchorSectionTitle: '這一分類裡最值得先點的入口',
        anchorSectionDescription: '這些入口更適合把中文站內訊號集中到壓縮、修復與清理意圖最明確的頁面。',
        anchorNote: (tool) => `如果你的問題已很明確，直接進入「${tool}」通常會比先看分類頁更快。`,
        featuredLabel: (tool) => `要直接進入「${tool}」嗎？`,
        featuredReason: (tool) => `當問題已清楚到「壓縮」「修復」或「清理」層面時，「${tool}」更容易直接解決。`,
    },
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
    const { locale, category } = await params;
    const validLocale = normalizeLocale(locale) || 'en';
    const categoryId = category as ToolCategory;

    if (!TOOL_CATEGORIES.includes(categoryId)) {
        notFound();
    }

    const tHome = await getTranslations({ locale: validLocale, namespace: 'home' });
    const categoryKey = categoryTranslationKeys[categoryId];
    const categoryName = tHome(`categories.${categoryKey}`);
    const categoryDescription = tHome(`categoriesDescription.${categoryKey}`);
    const metadataCopy =
        validLocale === 'en'
            ? {
                  title: englishCategoryHubCopy[categoryId].metadataTitle,
                  description: englishCategoryHubCopy[categoryId].metadataDescription,
              }
            : {
                  title: `${categoryName} Tools`,
                  description: `Browse free online ${categoryName} PDF tools. ${categoryDescription}.`,
              };

    return generateCategoryMetadata(validLocale, category, metadataCopy, {
        noIndex: !shouldIndexCategoryHub(validLocale),
    });
}

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
    const { locale, category } = await params;
    const validLocale = normalizeLocale(locale) || 'en';
    const categoryId = category as ToolCategory;
    const englishHubCopy = englishCategoryHubCopy[categoryId];

    // Validate category
    if (!TOOL_CATEGORIES.includes(categoryId)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(validLocale);

    const tHome = await getTranslations({ locale: validLocale, namespace: 'home' });
    const tCategoryPage = await getTranslations({ locale: validLocale, namespace: 'common.categoryPage' });
    const categoryKey = categoryTranslationKeys[categoryId];
    const categoryName = tHome(`categories.${categoryKey}`);
    const categoryDescription = tHome(`categoriesDescription.${categoryKey}`);

    // Get localized content for tools
    const { tools } = await import('@/config/tools');
    const { getToolContent } = await import('@/config/tool-content');

    const localizedToolContent = tools.reduce((acc, tool) => {
        const content = getToolContent(validLocale, tool.id);
        if (content) {
            acc[tool.id] = {
                title: content.title,
                description: content.metaDescription
            };
        }
        return acc;
    }, {} as Record<string, { title: string; description: string }>);

    const getToolLabel = (toolId: string, fallbackTitle: string) =>
        getPreferredToolAnchorText(validLocale, toolId, localizedToolContent[toolId]?.title ?? fallbackTitle);

    const localizedCategoryCopy =
        validLocale === 'zh'
            ? chineseCategoryHubCopy[categoryId]
            : validLocale === 'zh-TW'
            ? traditionalChineseCategoryHubCopy[categoryId]
            : null;

    const heroCopy =
        validLocale === 'en'
            ? englishHubCopy
            : {
                  heroTitle: categoryName,
                  heroDescription: categoryDescription,
                  helperText: localizedCategoryCopy?.helperText ?? tCategoryPage('helperText'),
                  featuredSectionTitle: localizedCategoryCopy?.featuredSectionTitle ?? tCategoryPage('featuredSectionTitle'),
                  featuredSectionDescription:
                      localizedCategoryCopy?.featuredSectionDescription ?? tCategoryPage('featuredSectionDescription'),
                  browseSectionTitle: localizedCategoryCopy?.browseSectionTitle ?? categoryName,
                  browseSectionDescription: localizedCategoryCopy?.browseSectionDescription ?? categoryDescription,
                  introTitle: localizedCategoryCopy?.introTitle ?? tCategoryPage('introTitle'),
                  introParagraphs:
                      localizedCategoryCopy?.introParagraphs ?? [
                          tCategoryPage('introParagraph1', { category: categoryName }),
                          tCategoryPage('introParagraph2'),
                      ],
                  anchorSectionTitle: localizedCategoryCopy?.anchorSectionTitle ?? tCategoryPage('anchorSectionTitle'),
                  anchorSectionDescription:
                      localizedCategoryCopy?.anchorSectionDescription ?? tCategoryPage('anchorSectionDescription'),
                  useCasesSectionTitle: englishHubCopy.useCasesSectionTitle,
                  useCasesSectionItems: englishHubCopy.useCasesSectionItems,
                  precautionsSectionTitle: englishHubCopy.precautionsSectionTitle,
                  precautionsSectionItems: englishHubCopy.precautionsSectionItems,
                  anchorTargets: englishHubCopy.anchorTargets.map((target) => {
                      const toolLabel = getToolLabel(target.toolId, target.anchorText);

                      return {
                          ...target,
                          anchorText: toolLabel,
                          note: localizedCategoryCopy?.anchorNote
                              ? localizedCategoryCopy.anchorNote(toolLabel)
                              : tCategoryPage('anchorNote', { tool: toolLabel }),
                      };
                  }),
                  featuredTasks: englishHubCopy.featuredTasks.map((task) => {
                      const anchorFallback =
                          englishHubCopy.anchorTargets.find((target) => target.toolId === task.toolId)?.anchorText ??
                          task.toolId;
                      const toolLabel = getToolLabel(task.toolId, anchorFallback);

                      return {
                          ...task,
                          label: localizedCategoryCopy?.featuredLabel
                              ? localizedCategoryCopy.featuredLabel(toolLabel)
                              : tCategoryPage('featuredLabel', { tool: toolLabel }),
                          reason: localizedCategoryCopy?.featuredReason
                              ? localizedCategoryCopy.featuredReason(toolLabel)
                              : tCategoryPage('featuredReason', { tool: toolLabel }),
                      };
                  }),
              };

    const featuredTasks = heroCopy.featuredTasks
        .map((task) => {
            const tool = getToolById(task.toolId);
            const content = localizedToolContent[task.toolId];

            if (!tool || !content || !shouldGenerateLocalizedToolPage(validLocale, task.toolId)) {
                return null;
            }

            return {
                toolId: task.toolId,
                slug: tool.slug,
                title: content.title,
                description: content.description,
                label: task.label,
                reason: task.reason,
            };
        })
        .filter(
            (
                task
            ): task is {
                toolId: string;
                slug: string;
                title: string;
                description: string;
                label: string;
                reason: string;
            } => task !== null
        );

    const anchorLinks = heroCopy.anchorTargets
        .map((target) => {
            const tool = getToolById(target.toolId);

            if (!tool || !shouldGenerateLocalizedToolPage(validLocale, target.toolId)) {
                return null;
            }

            return {
                toolId: target.toolId,
                slug: tool.slug,
                anchorText: target.anchorText,
                note: target.note,
            };
        })
        .filter(
            (
                link
            ): link is {
                toolId: string;
                slug: string;
                anchorText: string;
                note: string;
            } => link !== null
        );

    const categoryPath = `/tools/category/${category}`;
    const categoryCollectionSchema = generateCollectionPageSchema({
        locale: validLocale,
        title: heroCopy.heroTitle,
        description: heroCopy.heroDescription,
        path: categoryPath,
        about: heroCopy.heroTitle,
        mainEntityName: heroCopy.browseSectionTitle,
    });
    const categoryItemListSchema = generateItemListSchema({
        locale: validLocale,
        title: heroCopy.featuredSectionTitle || heroCopy.browseSectionTitle,
        description: heroCopy.featuredSectionDescription || heroCopy.browseSectionDescription,
        items: (featuredTasks.length > 0 ? featuredTasks : Object.entries(localizedToolContent)
            .filter(([toolId]) => {
                const tool = getToolById(toolId);
                return tool?.category === categoryId && shouldGenerateLocalizedToolPage(validLocale, toolId);
            })
            .slice(0, 6)
            .map(([toolId, content]) => {
                const tool = getToolById(toolId)!;
                return {
                    toolId,
                    slug: tool.slug,
                    title: content.title,
                    description: content.description,
                };
            })).map((task) => ({
            name: task.title,
            path: `/tools/${task.slug}`,
            description: task.description,
        })),
    });
    const categoryBreadcrumbSchema = generateBreadcrumbSchema(
        [
            { name: 'Home', path: '' },
            { name: 'Tools', path: '/tools' },
            { name: categoryName, path: categoryPath },
        ],
        validLocale
    );

    return (
        <>
            <JsonLd data={categoryCollectionSchema} />
            <JsonLd data={categoryItemListSchema} />
            <JsonLd data={categoryBreadcrumbSchema} />
            <CategoryPageClient
                locale={validLocale}
                category={categoryId}
                heroTitle={heroCopy.heroTitle}
                heroDescription={heroCopy.heroDescription}
                helperText={heroCopy.helperText}
                introTitle={heroCopy.introTitle}
                introParagraphs={heroCopy.introParagraphs}
                anchorSectionTitle={heroCopy.anchorSectionTitle}
                anchorSectionDescription={heroCopy.anchorSectionDescription}
                anchorLinks={anchorLinks}
                featuredSectionTitle={heroCopy.featuredSectionTitle}
                featuredSectionDescription={heroCopy.featuredSectionDescription}
                browseSectionTitle={heroCopy.browseSectionTitle}
                browseSectionDescription={heroCopy.browseSectionDescription}
                featuredTasks={featuredTasks}
                useCasesSectionTitle={heroCopy.useCasesSectionTitle}
                useCasesSectionItems={heroCopy.useCasesSectionItems}
                precautionsSectionTitle={heroCopy.precautionsSectionTitle}
                precautionsSectionItems={heroCopy.precautionsSectionItems}
                localizedToolContent={localizedToolContent}
            />
        </>
    );
}

