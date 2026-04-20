# PDFkoi Indexing Change Log

This file tracks Search Console and indexation-related changes so future SEO fixes can be traced back to a specific decision, date, and verification result.

## How to Use

For every indexation or canonical fix, add a new entry with:

1. Date
2. Trigger
3. Affected URLs or URL patterns
4. Root cause
5. Code/config files changed
6. Verification performed
7. Follow-up actions in Google Search Console

## Entry Template

### YYYY-MM-DD - Short title

- Trigger:
- Affected URLs:
- Root cause:
- Changes:
- Files:
- Verification:
- GSC follow-up:
- Notes:

## 2026-04-17 - Legal pages removed from index targets

- Trigger:
  Google Search Console reported duplicate/canonical conflicts for legal pages such as `/es/cookies/`, `/de/cookies/`, and `/en/privacy/`.
- Affected URLs:
  `/privacy/`, `/:locale/privacy/`, `/cookies/`, `/:locale/cookies/`
- Root cause:
  These pages were present in the sitemap and were still indexable, even though they are legal/support pages with low SEO value and a high chance of being treated as duplicate or alternate content across locales.
- Changes:
  Removed legal pages from sitemap generation and set them to `noindex, nofollow`.
- Files:
  `src/app/sitemap.ts`
  `src/lib/seo/metadata.ts`
  `src/__tests__/properties/seo.property.test.ts`
  `src/__tests__/properties/sitemap.property.test.ts`
- Verification:
  Production build completed successfully.
  Exported HTML for `out/en/privacy/index.html`, `out/es/cookies/index.html`, and `out/de/cookies/index.html` contains `meta name="robots" content="noindex, nofollow"`.
  Exported `out/sitemap.xml` no longer contains `/privacy/` or `/cookies/`.
- GSC follow-up:
  After deployment, request validation in Search Console for the affected duplicate/canonical issues.
- Notes:
  Access to these pages was intentionally preserved. Only indexing targets were reduced.

## 2026-04-17 - Tools directory and category hub indexing strategy tightened

- Trigger:
  After reviewing the affected Search Console URLs, `/tools/` and some localized category hub pages were identified as likely low-value index targets compared with tool detail pages.
- Affected URLs:
  `/tools/`, `/:locale/tools/`, `/tools/category/:category/`, `/:locale/tools/category/:category/`
- Root cause:
  The tools directory acts mainly as a browse/filter page, and many localized category hubs can overlap heavily with stronger tool detail pages. Allowing all of them to index increases the chance of duplicate or thin-content classification.
- Changes:
  Marked the tools directory as `noindex, nofollow` for all locales.
  Removed tools directory URLs from the sitemap.
  Kept category hubs indexable only for `en` and `zh`.
  Marked category hubs as `noindex, nofollow` for other locales and excluded those locales from the sitemap.
- Files:
  `src/lib/seo/indexing-policy.ts`
  `src/lib/seo/metadata.ts`
  `src/app/(localized)/[locale]/tools/page.tsx`
  `src/app/(localized)/[locale]/tools/category/[category]/page.tsx`
  `src/app/sitemap.ts`
  `src/__tests__/properties/seo.property.test.ts`
  `src/__tests__/properties/sitemap.property.test.ts`
- Verification:
  Production build completed successfully.
  Exported `out/en/tools/index.html` contains `meta name="robots" content="noindex, nofollow"`.
  Exported `out/ja/tools/category/convert-to-pdf/index.html` contains `meta name="robots" content="noindex, nofollow"`.
  Exported `out/zh/tools/category/convert-to-pdf/index.html` remains indexable.
  Exported `out/sitemap.xml` no longer contains `/tools/` URLs and only includes category hubs for `en` and `zh`.
- GSC follow-up:
  After deployment, monitor the Duplicate and Alternate page reports for `/:locale/tools/` and category-hub URLs.
- Notes:
  Tool detail pages remain the primary index targets. This change intentionally shifts crawl/index equity away from browse pages and toward tool pages.

## 2026-04-20 - Tool-page locale fallbacks removed from index targets and English canonical paths mirrored

- Trigger:
  Google Search Console validation for `Crawled - currently not indexed` still reported tool URLs such as `/zh/tools/heic-to-pdf/`, `/pt/tools/email-to-pdf/`, `/es/tools/extract-images/`, and `/en/tools/jpg-to-pdf`.
- Affected URLs:
  `/:locale/tools/:tool/` for locales where the tool content falls back to English, plus the default-locale canonical English paths under `/tools/`.
- Root cause:
  The sitemap and hreflang graph exposed locale/tool combinations that were not actually localized and therefore rendered English fallback content on non-English URLs. In parallel, canonical English URLs such as `/tools/jpg-to-pdf/` depended on host-level rewrites because the static export only emitted `/en/tools/jpg-to-pdf/`.
- Changes:
  Tool pages now become indexable only when that locale has real tool content.
  Untranslated locale fallbacks now canonicalize to English and emit `noindex, nofollow`.
  Tool-page hreflang alternates now include only locales with real content for that tool.
  The production build now mirrors `out/en/*` into canonical root-level English paths after export so `/tools/...` resolves to actual static files.
- Files:
  `src/config/tool-content/index.ts`
  `src/lib/seo/metadata.ts`
  `src/app/sitemap.ts`
  `scripts/mirror-default-locale-export.mjs`
  `package.json`
  `src/__tests__/properties/seo.property.test.ts`
  `src/__tests__/properties/sitemap.property.test.ts`
- Verification:
  Pending local build and test run.
- GSC follow-up:
  After deploy, resubmit validation for the remaining `Crawled - currently not indexed` issue set and monitor whether untranslated locale URLs drop out of the report while canonical English tool URLs resolve directly.
- Notes:
  This keeps localized URLs accessible for users while preventing fallback-English duplicates from competing for indexation.
