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
import { locales, type Locale, defaultLocale, getPublicPath } from '@/lib/i18n/config';
import {
  getToolIndexableLocales,
  shouldIndexCategoryHub,
  shouldIndexLocalizedToolPage,
  shouldIndexToolsDirectory,
} from '@/lib/seo/indexing-policy';
import { tools, getAllTools } from '@/config/tools';
import { siteConfig } from '@/config/site';
import { getToolContentLocales, hasLocalizedToolContent } from '@/config/tool-content';
import { toolContentEn } from '@/config/tool-content/en';
import { toolContentZhTw } from '@/config/tool-content/zh-TW';
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

    it('default homepage metadata uses the root URL as canonical and x-default', () => {
      const metadata = generateHomeMetadata(defaultLocale);
      const languages = metadata.alternates?.languages as Record<string, string>;

      expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/`);
      expect(languages['en']).toBe(`${siteConfig.url}/`);
      expect(languages['x-default']).toBe(`${siteConfig.url}/`);
    });

    it('privacy and cookies pages are intentionally noindex across locales', () => {
      for (const locale of locales) {
        const privacyMetadata = generatePrivacyMetadata(locale);
        const cookiesMetadata = generateCookiesMetadata(locale);

        expect(privacyMetadata.robots).toMatchObject({ index: false, follow: false });
        expect(cookiesMetadata.robots).toMatchObject({ index: false, follow: false });
      }
    });

    it('tools directory is intentionally noindex across locales', () => {
      expect(shouldIndexToolsDirectory()).toBe(false);

      for (const locale of locales) {
        const toolsMetadata = generateToolsListMetadata(locale);
        expect(toolsMetadata.robots).toMatchObject({ index: false, follow: false });
      }
    });

    it('category hubs remain indexable across locales', () => {
      for (const locale of locales) {
        const metadata = generateCategoryMetadata(locale, 'convert-to-pdf', {
          title: 'Convert to PDF Tools',
          description: 'Browse converters.',
        }, {
          noIndex: !shouldIndexCategoryHub(locale),
        });

        expect(shouldIndexCategoryHub(locale)).toBe(true);
        expect(metadata.robots).toMatchObject({ index: true, follow: true });
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

      expect(metadata.robots).toMatchObject({ index: false, follow: false });
      expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/tools/email-to-pdf/`);

      const languages = metadata.alternates?.languages as Record<string, string>;
      expect(languages.en).toBe(`${siteConfig.url}/tools/email-to-pdf/`);
      expect(languages.pt).toBeUndefined();
      expect(languages['x-default']).toBe(`${siteConfig.url}/tools/email-to-pdf/`);
    });

    it('tool metadata only emits hreflang alternates for locales allowed by the indexability policy', () => {
      const alternates = getToolIndexableLocales('extract-images');

      expect(alternates).toContain('en');
      expect(alternates).toContain('zh');
      expect(alternates).toContain('es');
      expect(shouldIndexLocalizedToolPage('es', 'extract-images')).toBe(true);
    });
  });
});

