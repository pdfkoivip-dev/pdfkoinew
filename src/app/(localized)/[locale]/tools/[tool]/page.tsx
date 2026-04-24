import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import dynamic from 'next/dynamic';
import { getToolById, getAllTools } from '@/config/tools';
import { getToolContent } from '@/config/tool-content';
import { getRelatedToolDescriptionOverride } from '@/config/related-tool-copy';
import { ToolPage } from '@/components/tools/ToolPage';
import { generateToolMetadata } from '@/lib/seo/metadata';
import { normalizeLocale, getPublicLocaleParams, type Locale } from '@/lib/i18n/config';
import { getToolPublicLocale, shouldGenerateLocalizedToolPage } from '@/lib/seo/indexing-policy';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  generateSoftwareApplicationSchema,
  generateHowToSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo/structured-data';
import type { Metadata } from 'next';

// Dynamic imports for all tool components - reduces initial bundle size
const MergePDFTool = dynamic(() => import('@/components/tools/merge').then(mod => ({ default: mod.MergePDFTool })));
const SplitPDFTool = dynamic(() => import('@/components/tools/split').then(mod => ({ default: mod.SplitPDFTool })));
const DeletePagesTool = dynamic(() => import('@/components/tools/delete').then(mod => ({ default: mod.DeletePagesTool })));
const RotatePDFTool = dynamic(() => import('@/components/tools/rotate').then(mod => ({ default: mod.RotatePDFTool })));
const AddBlankPageTool = dynamic(() => import('@/components/tools/add-blank-page').then(mod => ({ default: mod.AddBlankPageTool })));
const ReversePagesTool = dynamic(() => import('@/components/tools/reverse').then(mod => ({ default: mod.ReversePagesTool })));
const NUpPDFTool = dynamic(() => import('@/components/tools/n-up').then(mod => ({ default: mod.NUpPDFTool })));
const AlternateMergeTool = dynamic(() => import('@/components/tools/alternate-merge').then(mod => ({ default: mod.AlternateMergeTool })));
const DividePagesTool = dynamic(() => import('@/components/tools/divide').then(mod => ({ default: mod.DividePagesTool })));
const CombineSinglePageTool = dynamic(() => import('@/components/tools/combine-single-page').then(mod => ({ default: mod.CombineSinglePageTool })));
const GridCombineTool = dynamic(() => import('@/components/tools/grid-combine').then(mod => ({ default: mod.GridCombineTool })));
const PosterizePDFTool = dynamic(() => import('@/components/tools/posterize').then(mod => ({ default: mod.PosterizePDFTool })));
const PDFMultiTool = dynamic(() => import('@/components/tools/pdf-multi-tool').then(mod => ({ default: mod.PDFMultiTool })));
const AddAttachmentsTool = dynamic(() => import('@/components/tools/add-attachments').then(mod => ({ default: mod.AddAttachmentsTool })));
const ExtractAttachmentsTool = dynamic(() => import('@/components/tools/extract-attachments').then(mod => ({ default: mod.ExtractAttachmentsTool })));
const ExtractImagesTool = dynamic(() => import('@/components/tools/extract-images').then(mod => ({ default: mod.ExtractImagesTool })));
const EditAttachmentsTool = dynamic(() => import('@/components/tools/edit-attachments').then(mod => ({ default: mod.EditAttachmentsTool })));
const ViewMetadataTool = dynamic(() => import('@/components/tools/view-metadata').then(mod => ({ default: mod.ViewMetadataTool })));
const EditMetadataTool = dynamic(() => import('@/components/tools/edit-metadata').then(mod => ({ default: mod.EditMetadataTool })));
const PDFsToZipTool = dynamic(() => import('@/components/tools/pdf-to-zip').then(mod => ({ default: mod.PDFsToZipTool })));
const ComparePDFsTool = dynamic(() => import('@/components/tools/compare-pdfs').then(mod => ({ default: mod.ComparePDFsTool })));
const EditPDFTool = dynamic(() => import('@/components/tools/edit-pdf').then(mod => ({ default: mod.EditPDFTool })));
const ImageToPDFTool = dynamic(() => import('@/components/tools/image-to-pdf').then(mod => ({ default: mod.ImageToPDFTool })));
const TextToPDFTool = dynamic(() => import('@/components/tools/text-to-pdf').then(mod => ({ default: mod.TextToPDFTool })));
const PSDToPDFTool = dynamic(() => import('@/components/tools/psd-to-pdf').then(mod => ({ default: mod.PSDToPDFTool })));
const JSONToPDFTool = dynamic(() => import('@/components/tools/json-to-pdf').then(mod => ({ default: mod.JSONToPDFTool })));
const FixPageSizeTool = dynamic(() => import('@/components/tools/fix-page-size').then(mod => ({ default: mod.FixPageSizeTool })));
const CompressPDFTool = dynamic(() => import('@/components/tools/compress').then(mod => ({ default: mod.CompressPDFTool })));
const SignPDFTool = dynamic(() => import('@/components/tools/sign').then(mod => ({ default: mod.SignPDFTool })));
const CropPDFTool = dynamic(() => import('@/components/tools/crop').then(mod => ({ default: mod.CropPDFTool })));
const OrganizePDFTool = dynamic(() => import('@/components/tools/organize').then(mod => ({ default: mod.OrganizePDFTool })));
const ExtractPagesTool = dynamic(() => import('@/components/tools/extract').then(mod => ({ default: mod.ExtractPagesTool })));
const BookmarkTool = dynamic(() => import('@/components/tools/bookmark').then(mod => ({ default: mod.BookmarkTool })));
const PageNumbersTool = dynamic(() => import('@/components/tools/page-numbers').then(mod => ({ default: mod.PageNumbersTool })));
const WatermarkTool = dynamic(() => import('@/components/tools/watermark').then(mod => ({ default: mod.WatermarkTool })));
const HeaderFooterTool = dynamic(() => import('@/components/tools/header-footer').then(mod => ({ default: mod.HeaderFooterTool })));
const InvertColorsTool = dynamic(() => import('@/components/tools/invert-colors').then(mod => ({ default: mod.InvertColorsTool })));
const BackgroundColorTool = dynamic(() => import('@/components/tools/background-color').then(mod => ({ default: mod.BackgroundColorTool })));
const StampsTool = dynamic(() => import('@/components/tools/stamps').then(mod => ({ default: mod.StampsTool })));
const RemoveAnnotationsTool = dynamic(() => import('@/components/tools/remove-annotations').then(mod => ({ default: mod.RemoveAnnotationsTool })));
const FormFillerTool = dynamic(() => import('@/components/tools/form-filler').then(mod => ({ default: mod.FormFillerTool })));
const FormCreatorTool = dynamic(() => import('@/components/tools/form-creator').then(mod => ({ default: mod.FormCreatorTool })));
const RemoveBlankPagesTool = dynamic(() => import('@/components/tools/remove-blank-pages').then(mod => ({ default: mod.RemoveBlankPagesTool })));
const PDFToImageTool = dynamic(() => import('@/components/tools/pdf-to-image').then(mod => ({ default: mod.PDFToImageTool })));
const PDFToGreyscaleTool = dynamic(() => import('@/components/tools/pdf-to-greyscale').then(mod => ({ default: mod.PDFToGreyscaleTool })));
const PDFToJSONTool = dynamic(() => import('@/components/tools/pdf-to-json').then(mod => ({ default: mod.PDFToJSONTool })));
const OCRPDFTool = dynamic(() => import('@/components/tools/ocr').then(mod => ({ default: mod.OCRPDFTool })));
const LinearizePDFTool = dynamic(() => import('@/components/tools/linearize').then(mod => ({ default: mod.LinearizePDFTool })));
const PageDimensionsTool = dynamic(() => import('@/components/tools/page-dimensions').then(mod => ({ default: mod.PageDimensionsTool })));
const RemoveRestrictionsTool = dynamic(() => import('@/components/tools/remove-restrictions').then(mod => ({ default: mod.RemoveRestrictionsTool })));
const EncryptPDFTool = dynamic(() => import('@/components/tools/encrypt').then(mod => ({ default: mod.EncryptPDFTool })));
const DecryptPDFTool = dynamic(() => import('@/components/tools/decrypt').then(mod => ({ default: mod.DecryptPDFTool })));
const SanitizePDFTool = dynamic(() => import('@/components/tools/sanitize').then(mod => ({ default: mod.SanitizePDFTool })));
const FlattenPDFTool = dynamic(() => import('@/components/tools/flatten').then(mod => ({ default: mod.FlattenPDFTool })));
const RemoveMetadataTool = dynamic(() => import('@/components/tools/remove-metadata').then(mod => ({ default: mod.RemoveMetadataTool })));
const ChangePermissionsTool = dynamic(() => import('@/components/tools/change-permissions').then(mod => ({ default: mod.ChangePermissionsTool })));
const RepairPDFTool = dynamic(() => import('@/components/tools/repair').then(mod => ({ default: mod.RepairPDFTool })));
const TableOfContentsTool = dynamic(() => import('@/components/tools/table-of-contents').then(mod => ({ default: mod.TableOfContentsTool })));
const TextColorTool = dynamic(() => import('@/components/tools/text-color').then(mod => ({ default: mod.TextColorTool })));
const PDFToDocxTool = dynamic(() => import('@/components/tools/pdf-to-docx').then(mod => ({ default: mod.PDFToDocxTool })));
const PDFToPptxTool = dynamic(() => import('@/components/tools/pdf-to-pptx').then(mod => ({ default: mod.PDFToPptxTool })));
const PDFToExcelTool = dynamic(() => import('@/components/tools/pdf-to-excel').then(mod => ({ default: mod.PDFToExcelTool })));
const RotateCustomTool = dynamic(() => import('@/components/tools/rotate-custom/RotateCustomTool').then(mod => ({ default: mod.RotateCustomTool })));
const WordToPDFTool = dynamic(() => import('@/components/tools/word-to-pdf').then(mod => ({ default: mod.WordToPDFTool })));
const ExcelToPDFTool = dynamic(() => import('@/components/tools/excel-to-pdf').then(mod => ({ default: mod.ExcelToPDFTool })));
const PPTXToPDFTool = dynamic(() => import('@/components/tools/pptx-to-pdf').then(mod => ({ default: mod.PPTXToPDFTool })));
const XPSToPDFTool = dynamic(() => import('@/components/tools/xps-to-pdf').then(mod => ({ default: mod.XPSToPDFTool })));
const RTFToPDFTool = dynamic(() => import('@/components/tools/rtf-to-pdf').then(mod => ({ default: mod.RTFToPDFTool })));
const EPUBToPDFTool = dynamic(() => import('@/components/tools/epub-to-pdf').then(mod => ({ default: mod.EPUBToPDFTool })));
const MOBIToPDFTool = dynamic(() => import('@/components/tools/mobi-to-pdf').then(mod => ({ default: mod.MOBIToPDFTool })));
const FB2ToPDFTool = dynamic(() => import('@/components/tools/fb2-to-pdf').then(mod => ({ default: mod.FB2ToPDFTool })));
const DJVUToPDFTool = dynamic(() => import('@/components/tools/djvu-to-pdf').then(mod => ({ default: mod.DJVUToPDFTool })));
const DeskewPDFTool = dynamic(() => import('@/components/tools/deskew').then(mod => ({ default: mod.DeskewPDFTool })));
const PDFBookletTool = dynamic(() => import('@/components/tools/pdf-booklet').then(mod => ({ default: mod.PDFBookletTool })));
const RasterizePDFTool = dynamic(() => import('@/components/tools/rasterize').then(mod => ({ default: mod.RasterizePDFTool })));
const MarkdownToPDFTool = dynamic(() => import('@/components/tools/markdown-to-pdf').then(mod => ({ default: mod.MarkdownToPDFTool })));
const EmailToPDFTool = dynamic(() => import('@/components/tools/email-to-pdf').then(mod => ({ default: mod.EmailToPDFTool })));
const CBZToPDFTool = dynamic(() => import('@/components/tools/cbz-to-pdf').then(mod => ({ default: mod.CBZToPDFTool })));
const PDFToPDFATool = dynamic(() => import('@/components/tools/pdf-to-pdfa').then(mod => ({ default: mod.PDFToPDFATool })));
const FontToOutlineTool = dynamic(() => import('@/components/tools/font-to-outline').then(mod => ({ default: mod.FontToOutlineTool })));
const ExtractTablesTool = dynamic(() => import('@/components/tools/extract-tables').then(mod => ({ default: mod.ExtractTablesTool })));
const OCGManagerTool = dynamic(() => import('@/components/tools/ocg-manager').then(mod => ({ default: mod.OCGManagerTool })));
const PDFReaderTool = dynamic(() => import('@/components/tools/pdf-reader').then(mod => ({ default: mod.PDFReaderTool })));
const PDFToSVGTool = dynamic(() => import('@/components/tools/pdf-to-svg').then(mod => ({ default: mod.PDFToSVGTool })));

interface ToolPageParams {
  params: Promise<{ locale: string; tool: string }>;
}

/**
 * Generate static params for all tool pages
 */
export async function generateStaticParams() {
  const tools = getAllTools();
  return getPublicLocaleParams().flatMap(({ locale }) => {
    const normalizedLocale = normalizeLocale(locale) || 'en';

    return tools
      .filter((tool) => shouldGenerateLocalizedToolPage(normalizedLocale, tool.id))
      .map((tool) => ({
        locale,
        tool: tool.slug,
      }));
  });
}

/**
 * Generate metadata for tool pages
 */
export async function generateMetadata({ params }: ToolPageParams): Promise<Metadata> {
  const { locale: localeParam, tool: toolSlug } = await params;
  const locale = normalizeLocale(localeParam) || 'en';
  const tool = getToolById(toolSlug);
  const t = await getTranslations({ locale, namespace: 'errors' });

  if (!tool) {
    return {
      title: t('toolNotFound'),
    };
  }

  const content = getToolContent(locale, tool.id);

  if (!content) {
    return {
      title: tool.id,
    };
  }

  return generateToolMetadata({
    tool,
    content,
    locale,
    path: `/tools/${toolSlug}`,
  });
}

/**
 * Tool Page Component
 * Renders the appropriate tool interface based on the tool slug
 */
export default async function ToolPageRoute({ params }: ToolPageParams) {
  const { locale: localeParam, tool: toolSlug } = await params;
  const locale = normalizeLocale(localeParam) || 'en';

  // Enable static rendering for this locale - MUST be called before getTranslations
  setRequestLocale(locale);

  const t = await getTranslations();

  // Get tool data
  const tool = getToolById(toolSlug);

  if (!tool) {
    notFound();
  }

  // Get tool content for the locale (falls back to English)
  const content = getToolContent(locale, tool.id);

  if (!content) {
    notFound();
  }

  // Generate structured data
  const toolStructuredData = generateSoftwareApplicationSchema(tool, content, locale);
  const howToStructuredData = generateHowToSchema(tool, content, locale);
  const webPageStructuredData = generateWebPageSchema(tool, content, locale);
  const breadcrumbStructuredData = generateBreadcrumbSchema(
    [
      { name: 'Home', path: '' },
      { name: 'Tools', path: '/tools' },
      { name: content.title, path: `/tools/${tool.slug}` },
    ],
    locale
  );

  // Prepare localized content for related tools
  const localizedRelatedTools = tool.relatedTools.reduce(
    (acc, relatedId) => {
      const relatedLocale = getToolPublicLocale(locale, relatedId);
      const relatedContent = getToolContent(relatedLocale, relatedId);
      if (relatedContent) {
        acc[relatedId] = {
          title: relatedContent.title,
          description:
            getRelatedToolDescriptionOverride(locale, tool.id, relatedId) ||
            relatedContent.metaDescription,
        };
      }
      return acc;
    },
    {} as Record<string, { title: string; description: string }>
  );

  // Render the appropriate tool interface
  const renderToolInterface = () => {
    switch (tool.id) {
      case 'merge-pdf':
        return <MergePDFTool />;
      case 'split-pdf':
        return <SplitPDFTool />;
      case 'delete-pages':
        return <DeletePagesTool />;
      case 'rotate-pdf':
        return <RotatePDFTool />;
      case 'rotate-custom':
        return <RotateCustomTool />;
      case 'add-blank-page':
        return <AddBlankPageTool />;
      case 'reverse-pages':
        return <ReversePagesTool />;
      case 'n-up-pdf':
        return <NUpPDFTool />;
      case 'grid-combine':
        return <GridCombineTool />;
      case 'alternate-merge':
        return <AlternateMergeTool />;
      case 'divide-pages':
        return <DividePagesTool />;
      case 'combine-single-page':
        return <CombineSinglePageTool />;
      case 'posterize-pdf':
        return <PosterizePDFTool />;
      case 'pdf-multi-tool':
        return <PDFMultiTool />;
      case 'add-attachments':
        return <AddAttachmentsTool />;
      case 'extract-attachments':
        return <ExtractAttachmentsTool />;
      case 'extract-images':
        return <ExtractImagesTool />;
      case 'edit-attachments':
        return <EditAttachmentsTool />;
      case 'view-metadata':
        return <ViewMetadataTool />;
      case 'edit-metadata':
        return <EditMetadataTool />;
      case 'pdf-to-zip':
        return <PDFsToZipTool />;
      case 'compare-pdfs':
        return <ComparePDFsTool />;
      case 'edit-pdf':
        return <EditPDFTool />;
      // Convert to PDF tools
      case 'image-to-pdf':
        return <ImageToPDFTool />;
      case 'jpg-to-pdf':
        return <ImageToPDFTool imageType="jpg" />;
      case 'png-to-pdf':
        return <ImageToPDFTool imageType="png" />;
      case 'webp-to-pdf':
        return <ImageToPDFTool imageType="webp" />;
      case 'bmp-to-pdf':
        return <ImageToPDFTool imageType="bmp" />;
      case 'tiff-to-pdf':
        return <ImageToPDFTool imageType="tiff" />;
      case 'svg-to-pdf':
        return <ImageToPDFTool imageType="svg" />;
      case 'heic-to-pdf':
        return <ImageToPDFTool imageType="heic" />;
      case 'psd-to-pdf':
        return <PSDToPDFTool />;
      case 'txt-to-pdf':
        return <TextToPDFTool />;
      case 'json-to-pdf':
        return <JSONToPDFTool />;
      // Optimize & Repair tools
      case 'compress-pdf':
        return <CompressPDFTool />;
      case 'sign-pdf':
        return <SignPDFTool />;
      case 'crop-pdf':
        return <CropPDFTool />;
      case 'fix-page-size':
        return <FixPageSizeTool />;
      case 'organize-pdf':
        return <OrganizePDFTool />;
      case 'extract-pages':
        return <ExtractPagesTool />;
      case 'bookmark':
        return <BookmarkTool />;
      case 'page-numbers':
        return <PageNumbersTool />;
      case 'add-watermark':
        return <WatermarkTool />;
      case 'header-footer':
        return <HeaderFooterTool />;
      case 'invert-colors':
        return <InvertColorsTool />;
      case 'background-color':
        return <BackgroundColorTool />;
      case 'text-color':
        return <TextColorTool />;
      case 'table-of-contents':
        return <TableOfContentsTool />;
      case 'add-stamps':
        return <StampsTool />;
      case 'remove-annotations':
        return <RemoveAnnotationsTool />;
      case 'form-filler':
        return <FormFillerTool />;
      case 'form-creator':
        return <FormCreatorTool />;
      case 'remove-blank-pages':
        return <RemoveBlankPagesTool />;
      case 'pdf-to-jpg':
        return <PDFToImageTool outputFormat="jpg" />;
      case 'pdf-to-png':
        return <PDFToImageTool outputFormat="png" />;
      case 'pdf-to-webp':
        return <PDFToImageTool outputFormat="webp" />;
      case 'pdf-to-bmp':
        return <PDFToImageTool outputFormat="bmp" />;
      case 'pdf-to-tiff':
        return <PDFToImageTool outputFormat="tiff" />;
      case 'pdf-to-svg':
        return <PDFToSVGTool />;
      case 'pdf-to-greyscale':
        return <PDFToGreyscaleTool />;
      case 'pdf-to-json':
        return <PDFToJSONTool />;
      case 'pdf-to-docx':
        return <PDFToDocxTool />;
      case 'pdf-to-pptx':
        return <PDFToPptxTool />;
      case 'pdf-to-excel':
        return <PDFToExcelTool />;
      case 'ocr-pdf':
        return <OCRPDFTool />;
      case 'linearize-pdf':
        return <LinearizePDFTool />;
      case 'page-dimensions':
        return <PageDimensionsTool />;
      case 'remove-restrictions':
        return <RemoveRestrictionsTool />;
      case 'repair-pdf':
        return <RepairPDFTool />;
      case 'encrypt-pdf':
        return <EncryptPDFTool />;
      case 'decrypt-pdf':
        return <DecryptPDFTool />;
      case 'sanitize-pdf':
        return <SanitizePDFTool />;
      case 'flatten-pdf':
        return <FlattenPDFTool />;
      case 'remove-metadata':
        return <RemoveMetadataTool />;
      case 'change-permissions':
        return <ChangePermissionsTool />;
      // Office to PDF conversion tools
      case 'word-to-pdf':
        return <WordToPDFTool />;
      case 'excel-to-pdf':
        return <ExcelToPDFTool />;
      case 'pptx-to-pdf':
        return <PPTXToPDFTool />;
      case 'xps-to-pdf':
        return <XPSToPDFTool />;
      case 'rtf-to-pdf':
        return <RTFToPDFTool />;
      case 'epub-to-pdf':
        return <EPUBToPDFTool />;
      case 'mobi-to-pdf':
        return <MOBIToPDFTool />;
      case 'fb2-to-pdf':
        return <FB2ToPDFTool />;
      case 'djvu-to-pdf':
        return <DJVUToPDFTool />;
      // New tools
      case 'deskew-pdf':
        return <DeskewPDFTool />;
      case 'pdf-booklet':
        return <PDFBookletTool />;
      case 'rasterize-pdf':
        return <RasterizePDFTool />;
      case 'markdown-to-pdf':
        return <MarkdownToPDFTool />;
      case 'email-to-pdf':
        return <EmailToPDFTool />;
      case 'cbz-to-pdf':
        return <CBZToPDFTool />;
      case 'pdf-to-pdfa':
        return <PDFToPDFATool />;
      case 'font-to-outline':
        return <FontToOutlineTool />;
      case 'extract-tables':
        return <ExtractTablesTool />;
      case 'ocg-manager':
        return <OCGManagerTool />;
      case 'pdf-reader':
        return <PDFReaderTool />;
      // Add more tool cases here as they are implemented
      default:
        return (
          <div className="p-8 text-center text-[hsl(var(--color-muted-foreground))]">
            <p>{t('tools.comingSoon')}</p>
          </div>
        );
    }
  };

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={toolStructuredData} />
      <JsonLd data={webPageStructuredData} />
      <JsonLd data={breadcrumbStructuredData} />
      {howToStructuredData && <JsonLd data={howToStructuredData} />}

      {/* Tool Page */}
      <ToolPage
        tool={tool}
        content={content}
        locale={locale}
        localizedRelatedTools={localizedRelatedTools}
      >
        {renderToolInterface()}
      </ToolPage>
    </>
  );
}
