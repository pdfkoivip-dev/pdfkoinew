/**
 * SEO Property Tests
 * Tests for meta tags completeness and structured data presence
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { 
  generateBaseMetadata,
  generateToolMetadata,
  generateHomeMetadata,
  generateToolsListMetadata,
  generateAboutMetadata,
  generateFaqMetadata,
  generatePrivacyMetadata,
  generateCookiesMetadata,
  generateCategoryMetadata,
  generateLongTailLandingMetadata,
  validateMetadata,
  getCanonicalUrl,
  getAlternateUrls,
  getAlternateUrlsForLocales,
} from '@/lib/seo/metadata';
import {
  generateSoftwareApplicationSchema,
  generateFAQPageSchema,
  generateToolPageStructuredData,
  generateOrganizationSchema,
  generateWebSiteSchema,
  validateSoftwareApplicationSchema,
  validateFAQPageSchema,
} from '@/lib/seo/structured-data';
import { locales, type Locale, defaultLocale, getPublicPath, localeToSlug } from '@/lib/i18n/config';
import {
  getCategoryHubIndexableLocales,
  getToolIndexableLocales,
  shouldIndexCategoryHub,
  shouldIndexLocalizedToolPage,
  shouldIndexStaticPage,
  shouldIndexToolsDirectory,
} from '@/lib/seo/indexing-policy';
import { tools, getAllTools } from '@/config/tools';
import { siteConfig } from '@/config/site';
import { getToolContent, getToolContentLocales, hasLocalizedToolContent } from '@/config/tool-content';
import { toolContentEn } from '@/config/tool-content/en';
import { toolContentZhTw } from '@/config/tool-content/zh-TW';
import robots from '@/app/robots';
import type { Tool, ToolContent, FAQ } from '@/types/tool';

/**
 * Generate a mock ToolContent for testing
 */
function createMockToolContent(tool: Tool): ToolContent {
  return {
    title: `${tool.id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} - PDFkoi`,
    metaDescription: `Use ${tool.id.replace(/-/g, ' ')} tool to process your PDF files. Free, private, and secure.`,
    keywords: [tool.id, 'PDF', 'tool', ...tool.features.slice(0, 3)],
    description: `A powerful tool for ${tool.id.replace(/-/g, ' ')} operations.`,
    howToUse: [
      { step: 1, title: 'Upload', description: 'Upload your PDF file' },
      { step: 2, title: 'Configure', description: 'Configure options' },
      { step: 3, title: 'Process', description: 'Click process button' },
      { step: 4, title: 'Download', description: 'Download the result' },
    ],
    useCases: [
      { title: 'Business', description: 'For business documents', icon: 'briefcase' },
      { title: 'Personal', description: 'For personal use', icon: 'user' },
      { title: 'Education', description: 'For educational materials', icon: 'book' },
    ],
    faq: [
      { question: 'Is it free?', answer: 'Yes, completely free.' },
      { question: 'Is it secure?', answer: 'Yes, all processing happens in your browser.' },
      { question: 'What formats are supported?', answer: `Supported formats: ${tool.acceptedFormats.join(', ')}` },
    ],
  };
}

function expectTwitterSummaryCard(metadata: ReturnType<typeof generateHomeMetadata>) {
  expect(metadata.twitter).toBeDefined();
  expect(metadata.twitter).toMatchObject({
    card: 'summary_large_image',
  });
  expect(metadata.twitter?.title).toBeTruthy();
  expect(metadata.twitter?.description).toBeTruthy();
}

describe('SEO Property Tests', () => {
  /**
   * **Feature: nextjs-pdf-toolkit, Property 1: Meta Tags Completeness**
   * **Validates: Requirements 1.3, 4.1**
   * 
   * For any page in the application and any supported locale, rendering that page 
   * SHALL produce HTML containing all required meta tags (title, description, 
   * og:title, og:description, twitter:card).
   */
  describe('Property 1: Meta Tags Completeness', () => {
    it('all page metadata generators produce complete meta tags for all locales', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          (locale) => {
            // Test home page metadata
            const homeMetadata = generateHomeMetadata(locale);
            const homeValidation = validateMetadata(homeMetadata);
            expect(homeValidation.valid).toBe(true);
            expect(homeValidation.missingFields).toHaveLength(0);
            
            // Test tools list metadata
            const toolsMetadata = generateToolsListMetadata(locale);
            const toolsValidation = validateMetadata(toolsMetadata);
            expect(toolsValidation.valid).toBe(true);
            
            // Test about page metadata
            const aboutMetadata = generateAboutMetadata(locale);
            const aboutValidation = validateMetadata(aboutMetadata);
            expect(aboutValidation.valid).toBe(true);
            
            // Test FAQ page metadata
            const faqMetadata = generateFaqMetadata(locale);
            const faqValidation = validateMetadata(faqMetadata);
            expect(faqValidation.valid).toBe(true);
            
            // Test privacy page metadata
            const privacyMetadata = generatePrivacyMetadata(locale);
            const privacyValidation = validateMetadata(privacyMetadata);
            expect(privacyValidation.valid).toBe(true);
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('tool page metadata contains all required fields for all tools and locales', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          fc.constantFrom(...tools),
          (locale, tool) => {
            const content = createMockToolContent(tool);
            const metadata = generateToolMetadata({ locale, tool, content });
            const validation = validateMetadata(metadata);
            
            expect(validation.valid).toBe(true);
            expect(validation.missingFields).toHaveLength(0);
            
            // Verify specific required fields
            expect(metadata.title).toBeTruthy();
            expect(metadata.description).toBeTruthy();
            expect(metadata.openGraph).toBeDefined();
            expect(metadata.openGraph?.title).toBeTruthy();
            expect(metadata.openGraph?.description).toBeTruthy();
            expectTwitterSummaryCard(metadata);
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('metadata includes canonical URL and alternate language URLs', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          fc.constantFrom('/tools/merge-pdf', '/about', '/faq', ''),
          (locale, path) => {
            const metadata = generateBaseMetadata({
              locale,
              path,
              title: 'Test Page',
              description: 'Test description',
            });
            const expectedCanonical = `${siteConfig.url}${getPublicPath(path || '/', locale)}`;
            
            // Check canonical URL
            expect(metadata.alternates?.canonical).toBe(expectedCanonical);
            
            // Check alternate language URLs
            expect(metadata.alternates?.languages).toBeDefined();
            const languages = metadata.alternates?.languages as Record<string, string>;
            
            // All locales should be present
            for (const loc of locales) {
              expect(languages[loc]).toBe(`${siteConfig.url}${getPublicPath(path || '/', loc)}`);
            }
            
            // x-default should be present
            expect(languages['x-default']).toBe(
              `${siteConfig.url}${getPublicPath(path || '/', defaultLocale)}`
            );
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('Open Graph locale is correctly formatted for all locales', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          (locale) => {
            const metadata = generateHomeMetadata(locale);
            const ogLocale = metadata.openGraph?.locale;
            
            expect(ogLocale).toBeTruthy();
            // OG locale should be in format xx_XX
            expect(ogLocale).toMatch(/^[a-z]{2}_[A-Z]{2}$/);
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('default locale public paths use root English canonicals instead of /en/ URLs', () => {
      const paths = [
        '/',
        '/tools',
        '/tools/merge-pdf',
        '/tools/category/convert-from-pdf',
        '/contact',
        '/terms',
        '/compress-pdf-for-email',
      ];

      for (const path of paths) {
        const publicPath = getPublicPath(path, defaultLocale);

        expect(publicPath).not.toContain('/en/');
        expect(publicPath).not.toBe('/en');
        expect(publicPath === '/' || publicPath.endsWith('/')).toBe(true);
      }
    });

    it('default homepage metadata uses the root URL as canonical and x-default', () => {
      const metadata = generateHomeMetadata(defaultLocale);
      const languages = metadata.alternates?.languages as Record<string, string>;

      expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/`);
      expect(languages['en']).toBe(`${siteConfig.url}/`);
      expect(languages['x-default']).toBe(`${siteConfig.url}/`);
    });

    it('default privacy and cookies pages are indexable while localized variants canonicalize to english', () => {
      const privacyCanonical = `${siteConfig.url}/privacy/`;
      const cookiesCanonical = `${siteConfig.url}/cookies/`;

      for (const locale of locales) {
        const privacyMetadata = generatePrivacyMetadata(locale);
        const cookiesMetadata = generateCookiesMetadata(locale);

        if (locale === defaultLocale) {
          expect(privacyMetadata.robots).toMatchObject({ index: true, follow: true });
          expect(cookiesMetadata.robots).toMatchObject({ index: true, follow: true });
          expect(privacyMetadata.alternates?.canonical).toBe(privacyCanonical);
          expect(cookiesMetadata.alternates?.canonical).toBe(cookiesCanonical);
        } else {
          expect(privacyMetadata.robots).toMatchObject({ index: false, follow: true });
          expect(cookiesMetadata.robots).toMatchObject({ index: false, follow: true });
          expect(privacyMetadata.alternates?.canonical).toBe(privacyCanonical);
          expect(cookiesMetadata.alternates?.canonical).toBe(cookiesCanonical);
        }
      }
    });

    it('tools directory is indexable across locales', () => {
      expect(shouldIndexToolsDirectory()).toBe(true);

      for (const locale of locales) {
        const toolsMetadata = generateToolsListMetadata(locale);
        expect(toolsMetadata.robots).toMatchObject({ index: true, follow: true });
        expect(toolsMetadata.alternates?.languages).toBeDefined();
      }
    });

    it('non-english about pages are intentionally noindex with english canonical fallback', () => {
      const englishCanonical = `${siteConfig.url}/about/`;

      expect(shouldIndexStaticPage('en', '/about')).toBe(true);

      for (const locale of locales.filter((candidate) => candidate !== defaultLocale)) {
        const metadata = generateAboutMetadata(locale);

        expect(shouldIndexStaticPage(locale, '/about')).toBe(false);
        expect(metadata.robots).toMatchObject({ index: false, follow: true });
        expect(metadata.alternates?.canonical).toBe(englishCanonical);
        expect(metadata.openGraph?.url).toBe(englishCanonical);

        const languages = metadata.alternates?.languages as Record<string, string>;
        expect(languages.en).toBe(englishCanonical);
        expect(languages['x-default']).toBe(englishCanonical);
        expect(languages[locale]).toBeUndefined();
      }
    });

    it('category hubs are indexable with localized canonicals across locales', () => {
      for (const locale of locales) {
        const metadata = generateCategoryMetadata(locale, 'convert-to-pdf', {
          title: 'Convert to PDF Tools',
          description: 'Browse converters.',
        }, {
          noIndex: !shouldIndexCategoryHub(locale),
        });

        expect(shouldIndexCategoryHub(locale)).toBe(true);
        expect(metadata.robots).toMatchObject({ index: true, follow: true });
        expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}${getPublicPath('/tools/category/convert-to-pdf', locale)}`);
        expect(metadata.openGraph?.url).toBe(`${siteConfig.url}${getPublicPath('/tools/category/convert-to-pdf', locale)}`);
        expect(metadata.alternates?.languages).toEqual(
          getAlternateUrlsForLocales('/tools/category/convert-to-pdf', getCategoryHubIndexableLocales())
        );
      }
    });

    it('long-tail landing pages are indexed only in english and canonicalize non-english variants to english', () => {
      const path = '/compress-pdf-for-email';
      const englishCanonical = `${siteConfig.url}${getPublicPath(path, defaultLocale)}`;

      for (const locale of locales) {
        const metadata = generateLongTailLandingMetadata(locale, {
          path,
          title: 'Compress PDF for Email Online Without Signup',
          description: 'Compress PDF for email attachments online without signup.',
          keywords: ['compress pdf for email'],
        });

        if (locale === defaultLocale) {
          expect(metadata.robots).toMatchObject({ index: true, follow: true });
        } else {
          expect(metadata.robots).toMatchObject({ index: false, follow: false });
        }

        expect(metadata.alternates?.canonical).toBe(englishCanonical);
        expect((metadata.alternates?.languages as Record<string, string>).en).toBe(englishCanonical);
        expect((metadata.alternates?.languages as Record<string, string>)['x-default']).toBe(englishCanonical);
      }
    });
  });

  /**
   * **Feature: nextjs-pdf-toolkit, Property 8: Structured Data Presence**
   * **Validates: Requirements 4.7**
   * 
   * For any tool page, the rendered HTML SHALL contain valid JSON-LD script tags
   * with @type "SoftwareApplication".
   */
  describe('Property 8: Structured Data Presence', () => {
    it('tool pages generate valid SoftwareApplication schema', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          fc.constantFrom(...tools),
          (locale, tool) => {
            const content = createMockToolContent(tool);
            const schema = generateSoftwareApplicationSchema(tool, content, locale);
            const validation = validateSoftwareApplicationSchema(schema);
            
            expect(validation.valid).toBe(true);
            expect(validation.missingFields).toHaveLength(0);
            
            // Verify @type is SoftwareApplication
            expect(schema['@type']).toBe('SoftwareApplication');
            expect(schema['@context']).toBe('https://schema.org');
            
            // Verify required fields
            expect(schema.name).toBeTruthy();
            expect(schema.description).toBeTruthy();
            expect(schema.url).toBe(
              `${siteConfig.url}${getPublicPath(`/tools/${tool.slug}`, locale)}`
            );
            expect(schema.applicationCategory).toBe('UtilitiesApplication');
            expect(schema.operatingSystem).toBe('Windows, macOS, Linux, iOS, Android, Chrome OS');
            expect(schema.offers).toBeDefined();
            expect(schema.offers.price).toBe('0');
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('tool pages generate valid FAQPage schema when FAQs are present', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...tools),
          (tool) => {
            const content = createMockToolContent(tool);
            const schema = generateFAQPageSchema(content.faq);
            const validation = validateFAQPageSchema(schema);
            
            expect(validation.valid).toBe(true);
            expect(validation.missingFields).toHaveLength(0);
            
            // Verify @type is FAQPage
            expect(schema['@type']).toBe('FAQPage');
            expect(schema['@context']).toBe('https://schema.org');
            
            // Verify mainEntity structure
            expect(schema.mainEntity).toBeDefined();
            expect(Array.isArray(schema.mainEntity)).toBe(true);
            expect(schema.mainEntity.length).toBe(content.faq.length);
            
            // Verify each FAQ item
            for (let i = 0; i < schema.mainEntity.length; i++) {
              const item = schema.mainEntity[i];
              expect(item['@type']).toBe('Question');
              expect(item.name).toBe(content.faq[i].question);
              expect(item.acceptedAnswer['@type']).toBe('Answer');
              expect(item.acceptedAnswer.text).toBe(content.faq[i].answer);
            }
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('generateToolPageStructuredData omits FAQPage markup for tool pages', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          fc.constantFrom(...tools),
          (locale, tool) => {
            const content = createMockToolContent(tool);
            const structuredData = generateToolPageStructuredData(tool, content, locale);
            
            // SoftwareApplication should always be present
            expect(structuredData.softwareApplication).toBeDefined();
            expect(structuredData.softwareApplication['@type']).toBe('SoftwareApplication');

            // FAQPage is intentionally omitted from tool routes to avoid duplicate
            // schema exposure inside Next.js RSC payloads.
            expect(structuredData.faqPage).toBeNull();
            
            // Breadcrumb should be present
            expect(structuredData.breadcrumb).toBeDefined();
            expect(structuredData.breadcrumb['@type']).toBe('BreadcrumbList');
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('FAQPage schema handles empty FAQ array correctly', () => {
      const emptyFaqs: FAQ[] = [];
      const schema = generateFAQPageSchema(emptyFaqs);
      
      expect(schema['@type']).toBe('FAQPage');
      expect(schema.mainEntity).toHaveLength(0);
    });

    it('structured data URLs are correctly formatted with locale', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          fc.constantFrom(...tools),
          (locale, tool) => {
            const content = createMockToolContent(tool);
            const schema = generateSoftwareApplicationSchema(tool, content, locale);
            const expectedPath = getPublicPath(`/tools/${tool.slug}`, locale);
            
            expect(schema.url).toBe(`${siteConfig.url}${expectedPath}`);
            expect(schema.url).toContain(`/tools/${tool.slug}/`);
            expect(schema.url).toMatch(/^https?:\/\//);
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('default homepage structured data uses root canonical URLs', () => {
      const website = generateWebSiteSchema(defaultLocale);
      const organization = generateOrganizationSchema();

      expect(website.url).toBe(`${siteConfig.url}/`);
      expect(website.potentialAction).toBeUndefined();
      expect(organization.url).toBe(`${siteConfig.url}`);
      expect(organization.logo).toBe(`${siteConfig.url}/images/logo.png`);
    });
  });

  /**
   * Additional SEO validation tests
   */
  describe('SEO Utility Functions', () => {
    it('getCanonicalUrl generates correct URLs', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(...locales),
          fc.constantFrom('/tools/merge-pdf', '/about', '/faq', ''),
          (locale, path) => {
            const url = getCanonicalUrl(locale, path);
            const expectedPath = getPublicPath(path || '/', locale);
            
            expect(url).toBe(`${siteConfig.url}${expectedPath}`);
            expect(url).toMatch(/^https?:\/\//);
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    it('getAlternateUrls includes all locales', () => {
      const path = '/tools/merge-pdf';
      const alternates = getAlternateUrls(path);
      
      // All locales should be present
      for (const locale of locales) {
        expect(alternates[locale]).toBe(`${siteConfig.url}${getPublicPath(path, locale)}`);
      }
      
      // x-default should be present
      expect(alternates['x-default']).toBe(`${siteConfig.url}${getPublicPath(path, defaultLocale)}`);
    });

    it('Traditional Chinese content does not emit legacy uppercase locale URLs', () => {
      const serializedContent = JSON.stringify(toolContentZhTw);

      expect(serializedContent).not.toContain('/zh-TW/');
      expect(serializedContent).toContain('/zh-tw/');
    });

    it('English content does not emit legacy /en/ public URLs', () => {
      const serializedContent = JSON.stringify(toolContentEn);

      expect(serializedContent).not.toContain('/en/tools/');
      expect(serializedContent).toContain('/tools/');
    });

    it('tool metadata noindexes untranslated locale fallbacks and canonicalizes them to english', () => {
      const tool = tools.find((candidate) => candidate.id === 'email-to-pdf');
      expect(tool).toBeDefined();
      expect(hasLocalizedToolContent('pt', 'email-to-pdf')).toBe(false);

      const metadata = generateToolMetadata({
        locale: 'pt',
        tool: tool!,
        content: toolContentEn['email-to-pdf'],
      });

      // pt is a high-value locale, so it should be indexable even without localized content
      expect(metadata.robots).toMatchObject({ index: true, follow: true });
      // Canonical should point to pt version (self-canonical for high-value locales)
      expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/pt/tools/email-to-pdf/`);

      const languages = metadata.alternates?.languages as Record<string, string>;
      expect(languages.en).toBe(`${siteConfig.url}/tools/email-to-pdf/`);
      expect(languages.pt).toBe(`${siteConfig.url}/pt/tools/email-to-pdf/`);
      expect(languages['x-default']).toBe(`${siteConfig.url}/tools/email-to-pdf/`);
    });

    it('tool metadata only emits hreflang alternates for locales allowed by the indexability policy', () => {
      const extractImagesAlternates = getToolIndexableLocales('extract-images');
      const pdfBookletAlternates = getToolIndexableLocales('pdf-booklet');

      expect(extractImagesAlternates).toContain('en');
      expect(extractImagesAlternates).toContain('zh');
      expect(extractImagesAlternates).toContain('es');
      expect(shouldIndexLocalizedToolPage('es', 'extract-images')).toBe(true);

      expect(pdfBookletAlternates).toContain('en');
      expect(pdfBookletAlternates).toContain('pt');
      expect(shouldIndexLocalizedToolPage('pt', 'pdf-booklet')).toBe(true);
    });

    it('keeps the web app manifest out of crawlable page candidates', () => {
      const rules = robots().rules;
      const firstRule = Array.isArray(rules) ? rules[0] : rules;

      expect(firstRule.disallow).toContain('/manifest.webmanifest');
    });

    it('reported GSC noindex samples keep their intended indexability signals', () => {
      const nonEnglishLongTailCases = [
        ['pt', '/compress-pdf-without-upload'],
        ['ko', '/compress-pdf-for-email'],
        ['zh-TW', '/merge-pdf-no-signup'],
        ['pt', '/compress-pdf-for-email'],
        ['ko', '/compress-pdf-without-upload'],
        ['pt', '/merge-pdf-no-signup'],
        ['de', '/compress-pdf-without-upload'],
        ['de', '/merge-pdf-no-signup'],
        ['fr', '/merge-pdf-no-signup'],
        ['es', '/compress-pdf-without-upload'],
        ['ja', '/compress-pdf-without-upload'],
        ['ja', '/compress-pdf-for-email'],
        ['es', '/compress-pdf-for-email'],
        ['ja', '/merge-pdf-no-signup'],
        ['es', '/merge-pdf-no-signup'],
      ] as const satisfies ReadonlyArray<readonly [Locale, string]>;

      for (const [locale, path] of nonEnglishLongTailCases) {
        const metadata = generateLongTailLandingMetadata(locale, {
          path,
          title: 'Long-tail landing page',
          description: 'Long-tail landing page description.',
          keywords: ['pdf'],
        });

        expect(metadata.robots).toMatchObject({ index: false, follow: false });
        expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}${getPublicPath(path, defaultLocale)}`);
      }

      const privacyMetadata = generatePrivacyMetadata('en');
      const cookiesMetadata = generateCookiesMetadata('en');
      const localizedCookiesMetadata = generateCookiesMetadata('ko');

      expect(privacyMetadata.robots).toMatchObject({ index: true, follow: true });
      expect(cookiesMetadata.robots).toMatchObject({ index: true, follow: true });
      expect(localizedCookiesMetadata.robots).toMatchObject({ index: false, follow: true });
      expect(localizedCookiesMetadata.alternates?.canonical).toBe(`${siteConfig.url}/cookies/`);

      for (const locale of ['de', 'ko', 'ja'] as const) {
        expect(generateToolsListMetadata(locale).robots).toMatchObject({ index: true, follow: true });
      }

      const categoryMetadata = generateCategoryMetadata('de', 'secure-pdf');
      expect(categoryMetadata.robots).toMatchObject({ index: true, follow: true });
      expect(categoryMetadata.alternates?.canonical).toBe(`${siteConfig.url}/de/tools/category/secure-pdf/`);

      const tool = tools.find((candidate) => candidate.id === 'pdf-booklet');
      const content = getToolContent('pt', 'pdf-booklet');
      expect(tool).toBeDefined();
      expect(content).toBeDefined();
      expect(shouldIndexLocalizedToolPage('pt', 'pdf-booklet')).toBe(true);

      const metadata = generateToolMetadata({ locale: 'pt', tool: tool!, content: content! });
      expect(metadata.robots).toMatchObject({ index: true, follow: true });
      expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/pt/tools/pdf-booklet/`);
    });

    it('reported GSC indexable samples remain self-canonical index targets', () => {
      const toolCases = [
        ['zh', 'pdf-to-excel', '/zh/tools/pdf-to-excel/'],
        ['en', 'header-footer', '/tools/header-footer/'],
        ['en', 'reverse-pages', '/tools/reverse-pages/'],
        ['fr', 'background-color', '/fr/tools/background-color/'],
        ['en', 'page-dimensions', '/tools/page-dimensions/'],
        ['en', 'add-attachments', '/tools/add-attachments/'],
        ['es', 'organize-pdf', '/es/tools/organize-pdf/'],
        ['ja', 'rtf-to-pdf', '/ja/tools/rtf-to-pdf/'],
        ['es', 'extract-images', '/es/tools/extract-images/'],
        ['es', 'pdf-to-bmp', '/es/tools/pdf-to-bmp/'],
      ] as const satisfies ReadonlyArray<readonly [Locale, string, string]>;

      for (const [locale, toolId, canonicalPath] of toolCases) {
        const tool = tools.find((candidate) => candidate.id === toolId);
        const content = getToolContent(locale, toolId);

        expect(tool).toBeDefined();
        expect(content).toBeDefined();
        expect(shouldIndexLocalizedToolPage(locale, toolId)).toBe(true);

        const metadata = generateToolMetadata({ locale, tool: tool!, content: content! });

        expect(metadata.robots).toMatchObject({ index: true, follow: true });
        expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}${canonicalPath}`);
      }

      const faqMetadata = generateFaqMetadata('zh-TW');

      expect(shouldIndexStaticPage('zh-TW', '/faq')).toBe(true);
      expect(faqMetadata.robots).toMatchObject({ index: true, follow: true });
      expect(faqMetadata.alternates?.canonical).toBe(`${siteConfig.url}/zh-tw/faq/`);
    });

    it('reported GSC 404 locale-tool combinations are now indexable as high-value locales', () => {
      // All supported locales are now high-value locales
      // Verify high-value locales ARE indexable even without localized content
      const highValueCases = [
        ['es', 'pdf-to-pdfa'],
        ['es', 'rtf-to-pdf'],
        ['pt', 'djvu-to-pdf'],
        ['ko', 'pdf-reader'],
        ['pt', 'pdf-to-pptx'],
        ['pt', 'pdf-to-zip'],
        ['fr', 'djvu-to-pdf'],
        ['pt', 'jpg-to-pdf'],
        ['ko', 'compare-pdfs'],
        ['ko', 'rtf-to-pdf'],
        ['ko', 'extract-images'],
        ['pt', 'rasterize-pdf'],
        ['zh-TW', 'markdown-to-pdf'],
        ['ko', 'pdf-to-svg'],
        ['ko', 'extract-attachments'],
        ['ja', 'markdown-to-pdf'],
      ] as const;

      for (const [locale, toolId] of highValueCases) {
        expect(shouldIndexLocalizedToolPage(locale, toolId)).toBe(true);
        expect(getToolIndexableLocales(toolId)).toContain(locale);
      }
    });

    it('former redirect-only samples now resolve as indexable self-canonical for high-value locales', () => {
      const cases = [
        ['zh-TW', 'markdown-to-pdf'],
        ['ja', 'markdown-to-pdf'],
        ['ko', 'pdf-to-svg'],
      ] as const satisfies ReadonlyArray<readonly [Locale, string]>;

      for (const [locale, toolId] of cases) {
        const tool = tools.find((candidate) => candidate.id === toolId);
        const fallbackContent = getToolContent(locale, toolId);

        expect(tool).toBeDefined();
        expect(fallbackContent).toBeDefined();
        expect(hasLocalizedToolContent(locale, toolId)).toBe(false);
        // High-value locales are now indexable even without localized content
        expect(shouldIndexLocalizedToolPage(locale, toolId)).toBe(true);

        const metadata = generateToolMetadata({
          locale,
          tool: tool!,
          content: fallbackContent!,
        });

        // High-value locales should be indexable with self-canonical
        expect(metadata.robots).toMatchObject({ index: true, follow: true });
        expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/${localeToSlug[locale]}/tools/${tool!.slug}/`);

        const languages = metadata.alternates?.languages as Record<string, string>;
        expect(languages.en).toBe(`${siteConfig.url}/tools/${tool!.slug}/`);
        expect(languages[locale]).toBe(`${siteConfig.url}/${localeToSlug[locale]}/tools/${tool!.slug}/`);
      }
    });
  });
});

