/**
 * SEO Module Exports
 * 
 * @module lib/seo
 */

// Metadata generation
export {
  generateBaseMetadata,
  generateToolMetadata,
  generateHomeMetadata,
  generateToolsListMetadata,
  generateAboutMetadata,
  generateFaqMetadata,
  generatePrivacyMetadata,
  generateCookiesMetadata,
  generateContactMetadata,
  generateWorkflowMetadata,
  getCanonicalUrl,
  getAlternateUrls,
  generateCategoryMetadata,
  getOpenGraphLocale,
  validateMetadata,
  type BaseMetadataOptions,
  type PageMetadataOptions,
  type ToolMetadataOptions,
} from './metadata';

// Structured data generation
export {
  generateSoftwareApplicationSchema,
  generateFAQPageSchema,
  generateWebSiteSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateCollectionPageSchema,
  generateItemListSchema,
  generateToolPageStructuredData,
  generateHowToSchema,
  generateWebPageSchema,
  serializeStructuredData,
  validateSoftwareApplicationSchema,
  validateFAQPageSchema,
  type SoftwareApplicationSchema,
  type FAQPageSchema,
  type WebSiteSchema,
  type OrganizationSchema,
  type BreadcrumbListSchema,
  type ItemListSchema,
  type HowToSchema,
  type WebPageSchema,
} from './structured-data';
