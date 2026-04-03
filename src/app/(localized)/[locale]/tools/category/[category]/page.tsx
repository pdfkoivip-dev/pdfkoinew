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
        introTitle: 'Use this hub when your PDF needs changes, not a format conversion',
        introParagraphs: [
            'This category is built for documents that stay in PDF format while you add information, polish the layout, or prepare the file for signing and review.',
            'If the real goal is a specific action like signing, filling, or adding page numbers, jump into that exact tool page first. It gives the clearest relevance signal for both users and search engines.',
        ],
        anchorSectionTitle: 'Best direct links in this category',
        anchorSectionDescription:
            'These exact-match links help concentrate users and internal link signals on the editing tasks with the clearest intent.',
        anchorTargets: [
            {
                toolId: 'edit-pdf',
                anchorText: 'Edit PDF',
                note: 'Best anchor when the job is general PDF editing or markup.',
            },
            {
                toolId: 'sign-pdf',
                anchorText: 'Sign PDF',
                note: 'Best anchor for document signing and approval workflows.',
            },
            {
                toolId: 'form-filler',
                anchorText: 'Fill PDF Form',
                note: 'Best anchor when the user needs to complete an existing form.',
            },
            {
                toolId: 'add-watermark',
                anchorText: 'Add Watermark',
                note: 'Best anchor for ownership, draft, or branding overlays.',
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
        introTitle: 'Use this hub when you are starting from a non-PDF file',
        introParagraphs: [
            'This category is for source files that need to become PDFs, including Office documents, images, ebooks, and text-based formats.',
            'The best path is to choose the exact source format first. That keeps users on the most relevant conversion page instead of making the category page compete with higher-intent tool pages.',
        ],
        anchorSectionTitle: 'Best direct links in this category',
        anchorSectionDescription:
            'These exact anchors keep the strongest file-to-PDF terms pointed at the tool pages that should rank for them.',
        anchorTargets: [
            {
                toolId: 'word-to-pdf',
                anchorText: 'Word to PDF',
                note: 'Best anchor for DOCX conversion intent.',
            },
            {
                toolId: 'jpg-to-pdf',
                anchorText: 'JPG to PDF',
                note: 'Best anchor for one of the highest-intent image conversion routes.',
            },
            {
                toolId: 'excel-to-pdf',
                anchorText: 'Excel to PDF',
                note: 'Best anchor for spreadsheet export intent.',
            },
            {
                toolId: 'png-to-pdf',
                anchorText: 'PNG to PDF',
                note: 'Best anchor for image conversion pages beyond JPG.',
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
        introTitle: 'Use this hub when the PDF is only the starting point',
        introParagraphs: [
            'This category is for exporting PDF content into a format that is easier to edit, reuse, analyze, or publish elsewhere.',
            'The strongest intent usually lives on the exact destination page, such as PDF to Word or PDF to Excel, so this hub should guide users there quickly instead of trying to rank for every export term itself.',
        ],
        anchorSectionTitle: 'Best direct links in this category',
        anchorSectionDescription:
            'These exact anchors route the highest-intent PDF export queries to the tool pages that should own them.',
        anchorTargets: [
            {
                toolId: 'pdf-to-docx',
                anchorText: 'PDF to Word',
                note: 'Best anchor for editable document conversion intent.',
            },
            {
                toolId: 'pdf-to-jpg',
                anchorText: 'PDF to JPG',
                note: 'Best anchor for page-to-image export intent.',
            },
            {
                toolId: 'pdf-to-excel',
                anchorText: 'PDF to Excel',
                note: 'Best anchor for table and spreadsheet extraction intent.',
            },
            {
                toolId: 'pdf-to-png',
                anchorText: 'PDF to PNG',
                note: 'Best anchor when users need cleaner image output with transparency support.',
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
        introTitle: 'Use this hub when the file structure is the problem',
        introParagraphs: [
            'This category is for page-level operations like merging files, splitting sections, reordering pages, and cleaning up document structure.',
            'Users who know the exact action they need should land on the matching tool page first. The category page works best as a routing layer that helps them choose between those actions.',
        ],
        anchorSectionTitle: 'Best direct links in this category',
        anchorSectionDescription:
            'These exact anchors focus internal linking on the page-management terms most likely to convert.',
        anchorTargets: [
            {
                toolId: 'merge-pdf',
                anchorText: 'Merge PDF',
                note: 'Best anchor for combining multiple documents into one file.',
            },
            {
                toolId: 'split-pdf',
                anchorText: 'Split PDF',
                note: 'Best anchor for extracting or dividing pages.',
            },
            {
                toolId: 'organize-pdf',
                anchorText: 'Organize PDF',
                note: 'Best anchor for reordering, deleting, and restructuring pages.',
            },
            {
                toolId: 'extract-pages',
                anchorText: 'Extract Pages',
                note: 'Best anchor for pulling out selected sections without fully splitting the document.',
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
        introTitle: 'Use this hub when the PDF needs cleanup, repair, or quality improvements',
        introParagraphs: [
            'This category is for maintenance tasks that make PDFs lighter, cleaner, more stable, or easier to archive and distribute.',
            'Search intent is usually strongest on precise fixes like Compress PDF, so the category page should guide users into the exact maintenance workflow instead of acting like a generic landing page.',
        ],
        anchorSectionTitle: 'Best direct links in this category',
        anchorSectionDescription:
            'These exact anchors keep cleanup and repair intent concentrated on the maintenance pages that should rank.',
        anchorTargets: [
            {
                toolId: 'compress-pdf',
                anchorText: 'Compress PDF',
                note: 'Best anchor for size-reduction intent.',
            },
            {
                toolId: 'repair-pdf',
                anchorText: 'Repair PDF',
                note: 'Best anchor for damaged or unreadable files.',
            },
            {
                toolId: 'pdf-to-pdfa',
                anchorText: 'PDF to PDF/A',
                note: 'Best anchor for archive and compliance use cases.',
            },
            {
                toolId: 'remove-metadata',
                anchorText: 'Remove Metadata',
                note: 'Best anchor for cleanup workflows before sharing.',
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
        introTitle: 'Use this hub when access, permissions, or document hygiene matter most',
        introParagraphs: [
            'This category is for protecting PDFs, unlocking them when you have permission, and removing hidden or unwanted information before sharing.',
            'The most useful experience is to route users directly into the exact security action they need, because terms like protect, unlock, and sanitize each map to different workflows.',
        ],
        anchorSectionTitle: 'Best direct links in this category',
        anchorSectionDescription:
            'These exact anchors sharpen internal linking around the security actions with the clearest commercial and search intent.',
        anchorTargets: [
            {
                toolId: 'encrypt-pdf',
                anchorText: 'Protect PDF',
                note: 'Best anchor for password protection intent.',
            },
            {
                toolId: 'remove-restrictions',
                anchorText: 'Unlock PDF',
                note: 'Best anchor for access and restriction-removal intent.',
            },
            {
                toolId: 'sanitize-pdf',
                anchorText: 'Sanitize PDF',
                note: 'Best anchor for cleanup before sharing sensitive files.',
            },
            {
                toolId: 'change-permissions',
                anchorText: 'Change PDF Permissions',
                note: 'Best anchor for permission-management workflows.',
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

    return generateCategoryMetadata(validLocale, category, metadataCopy);
}

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
    const { locale, category } = await params;
    const validLocale = normalizeLocale(locale) || 'en';
    const categoryId = category as ToolCategory;

    // Validate category
    if (!TOOL_CATEGORIES.includes(categoryId)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(validLocale);

    const tHome = await getTranslations({ locale: validLocale, namespace: 'home' });
    const categoryKey = categoryTranslationKeys[categoryId];
    const categoryName = tHome(`categories.${categoryKey}`);
    const categoryDescription = tHome(`categoriesDescription.${categoryKey}`);
    const heroCopy =
        validLocale === 'en'
            ? englishCategoryHubCopy[categoryId]
            : {
                  heroTitle: categoryName,
                  heroDescription: categoryDescription,
                  helperText: '',
                  featuredSectionTitle: '',
                  featuredSectionDescription: '',
                  browseSectionTitle: categoryName,
                  browseSectionDescription: categoryDescription,
                  introTitle: '',
                  introParagraphs: [],
                  anchorSectionTitle: '',
                  anchorSectionDescription: '',
                  anchorTargets: [],
                  featuredTasks: [],
              };

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

    const featuredTasks = heroCopy.featuredTasks
        .map((task) => {
            const tool = getToolById(task.toolId);
            const content = localizedToolContent[task.toolId];

            if (!tool || !content) {
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

            if (!tool) {
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
                return tool?.category === categoryId;
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
                localizedToolContent={localizedToolContent}
            />
        </>
    );
}

