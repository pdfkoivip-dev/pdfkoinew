# GEO Audit Report: PDFkoi

**Audit Date:** 2026-04-16  
**URL:** https://pdfkoi.com  
**Business Type:** SaaS / Web Utility (Browser-based PDF Processing Suite)  
**Pages Analyzed:** 31  

---

## Executive Summary

**Overall GEO Score: 66/100 (Fair)**

PDFkoi possesses an exceptional foundational architecture for Generative Engine Optimization (GEO): static HTML pre-rendering with Next.js, 100% browser-based client-side processing, comprehensive multi-language support (9 locales), well-crafted `llms.txt` and `llms-full.txt` files, and detailed step-by-step How-To and FAQ structures. 

However, its AI discoverability and citation probability are held back by several critical and high-priority gaps: third-party brand entity recognition across major knowledge graphs (Wikidata, Reddit, YouTube) is minimal; `llms.txt` is disconnected from HTML `<head>` and `robots.txt`; the About page lacks named expert credentials and author attribution (weakening E-E-A-T); high-intent landing pages are missing `FAQPage` structured data; and third-party ad network scripts (Adsterra) risk degrading trust scores with AI evaluators.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 78/100 | 25% | 19.50 |
| Brand Authority | 42/100 | 20% | 8.40 |
| Content E-E-A-T | 65/100 | 20% | 13.00 |
| Technical GEO | 76/100 | 15% | 11.40 |
| Schema & Structured Data | 75/100 | 10% | 7.50 |
| Platform Optimization | 58/100 | 10% | 5.80 |
| **Overall GEO Score** | | | **66/100** |

---

## Critical Issues (Fix Immediately)

1. **`llms.txt` and `llms-full.txt` are Orphanded from Crawler Discovery**  
   - **Impact:** AI engines and autonomous agents parsing web pages cannot discover the markdown index.  
   - **Location:** `src/app/document.tsx` (`<head>`), `src/app/robots.ts`, and HTTP response headers.  
   - **Recommended Fix:**  
     - Add `<link rel="alternate" type="text/markdown" title="LLM Summary" href="/llms.txt" />` to `<head>`.  
     - Add `Allow: /llms.txt` and an explicit comment/pointer in `robots.ts`.

2. **No Author Attribution or Real-Person Verification on About & Tool Pages (E-E-A-T Critical)**  
   - **Impact:** Document manipulation tools handle sensitive data (contracts, IDs, tax forms). Without identifiable contributors, verified bios, or cryptographic proof of client-side safety, AI search models (Google SGE/AIO and ChatGPT Search) heavily penalize the site's authority and hesitate to recommend it for private document handling.  
   - **Location:** `src/app/(localized)/[locale]/about/page.tsx` and `AboutPageClient.tsx`.  
   - **Recommended Fix:** Add named engineers/maintainers with LinkedIn/GitHub profile links, author schema (`Person`), and an explicit Security & Privacy Verification section.

---

## High Priority Issues

1. **Missing `robots.txt` AI Crawler Identification & Guidance**  
   - **Location:** `src/app/robots.ts`  
   - **Details:** `robots.txt` currently only defines `User-Agent: *`. While it allows crawling generally, it does not explicitly acknowledge AI search bots (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`).  
   - **Recommended Fix:** Explicitly whitelist leading AI user-agents and reference `llms.txt` directly.

2. **Missing `FAQPage` Structured Data on High-Intent Landing Pages**  
   - **Location:**  
     - `src/app/(localized)/[locale]/compress-pdf-for-email/page.tsx`  
     - `src/app/(localized)/[locale]/compress-pdf-without-upload/page.tsx`  
     - `src/app/(localized)/[locale]/merge-pdf-no-signup/page.tsx`  
   - **Details:** Each page renders a rich FAQ accordion section via `content.faqs`, but only outputs `CollectionPage`, `BreadcrumbList`, and `ItemList` schemas. `generateFAQPageSchema(content.faqs)` is missing from the `schemas` array, depriving AI engines of direct Q&A entity extraction.

3. **Intrusive Third-Party Ad Networks Risking AI Trust Signals**  
   - **Location:** `src/app/document.tsx` (`profitableratecpmnetwork.com` / Adsterra / Monetag).  
   - **Details:** AI engines (Perplexity, Google AIO, Copilot) evaluate user experience and domain reputation. Low-reputation ad networks known for pop-unders or aggressive redirects severely damage trust classification in search systems.

4. **Zero Entity Presence on Platforms Where AI Knowledge Graphs are Formed**  
   - **Details:** No presence on Reddit, ProductHunt, Crunchbase, YouTube, or Wikipedia/Wikidata. AI models learn entity relationships from these sources; without them, PDFkoi is rarely cited as a primary recommendation.

---

## Medium Priority Issues

1. **Homepage Missing `CollectionPage` and `AggregateOffer` Schema Integration**  
   - **Location:** `src/app/(localized)/[locale]/page.tsx`  
   - **Details:** `enhanced-schemas.ts` defines `CollectionPageSchema` and `AggregateOfferSchema` (`price: 0`, 95+ tools), but the homepage only outputs `WebSite` and `Organization`.

2. **About Page Completely Lacks JSON-LD Structured Data**  
   - **Location:** `src/app/(localized)/[locale]/about/page.tsx`  
   - **Details:** The about page renders without any `<JsonLd>` component. It should emit `AboutPage` and `Organization` schema with `sameAs`, `knowsAbout`, and `founder` details.

3. **Tool Pages Lack an Immediate Above-the-Fold "At a Glance / Key Facts" Quotable Block**  
   - **Location:** `src/components/tools/ToolPage.tsx`  
   - **Details:** Tool descriptions are rendered below the interactive upload widget. AI parsers prioritising top-of-page text see UI controls and form inputs rather than immediate factual definitions and capability summaries.

4. **Missing Side-by-Side Competitive Comparison Tables on Web Pages**  
   - **Details:** While `llms.txt` has a comparison section against Smallpdf and iLovePDF, the actual HTML pages lack Markdown/HTML comparison tables (e.g., "PDFkoi vs Upload-Based Tools: Privacy, Speed, Limits, Pricing"). Princeton/Georgia Tech GEO studies show comparison tables increase AI citation likelihood by up to 40%.

---

## Low Priority Issues

1. **Missing Changelog / Freshness Signals**  
   - **Details:** No public `/changelog` or `/blog` route indicating regular maintenance and technological evolution.
2. **Organization Schema Lacks Granular Properties**  
   - **Details:** Missing `foundingDate`, `knowsAbout` (e.g., `["PDF", "WebAssembly", "Cryptography", "Document Privacy"]`), and `parentOrganization`.
3. **No Direct Markdown Tool Endpoints (`.md`)**  
   - **Details:** Only `llms.txt` is provided; individual tool documentation is not available in clean markdown format for agent retrieval.

---

## Category Deep Dives

### 1. AI Citability (Score: 78/100)

**Strengths:**
- **Excellent `llms.txt` and `llms-full.txt`:** Explicitly defines the brand entity ("PDFkoi is an online PDF tool website, not a fish, beverage..."), provides exact factual bullets (95+ tools, 100% free, 0 uploads), and structures a direct Task-to-Page routing guide.
- **Structured Content Model:** Every tool in `src/config/tool-content/` features 3+ clear How-To steps, 3+ practical use cases, and 3+ focused FAQ items with concise answers.
- **Evidence-Backed FAQ:** The dedicated `/faq` page references authoritative technical sources (MDN File API, MDN File System API, Google Gmail attachment limit docs).

**Weaknesses & Gaps:**
- **Passage Extraction Hierarchy:** On tool pages, the `<h1 />` and subtitle are at the top, followed immediately by the file dropzone. The `<DescriptionSection />` is buried below the tool UI. AI crawlers scoring DOM text density downweight information located beneath interactive canvas components.
- **Suggested Improvement:** Add a compact 3-item "Key Facts" or "Summary" callout card directly below the H1 subtitle on all tool pages:
  > *Processing: 100% Client-side (WebAssembly)* | *File Upload: None (Private & Safe)* | *Cost: 100% Free, No Signup*

---

### 2. Brand Authority (Score: 42/100)

**Strengths:**
- Unique, memorable domain and brand name.
- Active GitHub repository (`github.com/pdfkoi/pdfkoi`) and X handle (`@pdfkoi`).

**Weaknesses & Gaps:**
- **Entity Disambiguation Deficit:** Large language models have strong associations between "koi" and ornamental carp or unrelated beverage brands. While `llms.txt` addresses this, external corroborating entities are absent.
- **Third-Party Citations:** Zero presence in Reddit discussions (e.g., r/software, r/privacy, r/webdev), which Perplexity and Google AIO crawl continuously for unbiased recommendations.
- **Missing Industry Profiles:** No ProductHunt launch, Crunchbase listing, or AlternativeTo listing.

---

### 3. Content E-E-A-T (Score: 65/100)

**Strengths:**
- Privacy claims are backed by transparent architectural explanations (WebAssembly, Web Workers, client-side memory execution).
- FAQ items cite official documentation (MDN, Google Support).
- Landing pages include `reviewedBy: 'PDFkoi Team'` and `lastUpdated` timestamps.

**Weaknesses & Gaps:**
- **Anonymous Authority:** The about page and content files cite "PDFkoi Team" generically. AI search systems demand named expertise for technical utilities handling sensitive documents.
- **Lack of Independent Security Audit / Whitepaper:** No technical whitepaper or client-side privacy verification guide demonstrating how browser sandbox isolation works.

---

### 4. Technical GEO Infrastructure (Score: 76/100)

**Strengths:**
- **Full Static Pre-rendering:** Using Next.js static export (`force-static`), eliminating hydration delays and allowing AI crawlers to parse complete HTML with zero JavaScript execution.
- **Multi-region & CDN delivery:** Cloudflare CDN deployment with fast response times.
- **Clean Sitemaps:** Sitemaps properly separated by locale (`/sitemap/en.xml`, `/sitemap/zh.xml`, etc.).

**Weaknesses & Gaps:**
- **Discovery Bottleneck for `llms.txt`:** No `<link rel="alternate" type="text/markdown" href="/llms.txt">` in HTML headers.
- **Robots.txt AI Crawlers:** No dedicated blocks for `GPTBot`, `ClaudeBot`, `PerplexityBot`.
- **Ad Script Overhead:** Third-party redirect/pop-under scripts can trigger low-quality thresholds in web search classifiers.

---

### 5. Schema & Structured Data (Score: 75/100)

**Strengths:**
- Comprehensive schema generators for `SoftwareApplication`, `HowTo`, `FAQPage`, `WebSite`, `Organization`, and `BreadcrumbList`.
- Clean JSON-LD serialization avoiding script injection and encoding bugs.
- Fabricated aggregateRating was removed to maintain schema integrity.

**Weaknesses & Gaps:**
- Landing pages (`/compress-pdf-for-email`, etc.) fail to emit `FAQPage` schema despite having FAQ content on page.
- `/about` page has 0 schema markup.
- Homepage does not output `CollectionPage` or `AggregateOffer` schema despite existing code in `enhanced-schemas.ts`.

---

### 6. Platform Optimization (Score: 58/100)

| Platform | Readiness | Primary Optimization Need |
|---|---|---|
| **Google AI Overviews** | 68/100 | Add comparison tables & strengthen E-E-A-T author credentials |
| **Perplexity AI** | 65/100 | Link `llms.txt` in `<head>` and seed Reddit/forum discussions |
| **ChatGPT Search** | 62/100 | Whitelist `GPTBot`/`ChatGPT-User` in `robots.txt` and expand entity footprint |
| **Claude / Anthropic** | 60/100 | Whitelist `ClaudeBot` and provide clean Markdown tool definitions |
| **Bing Copilot / Gemini** | 50/100 | Register with Bing Webmaster / IndexNow and improve brand co-citations |

---

## Quick Wins (Implement This Week)

1. **Connect `llms.txt` into `<head>`:** Add `<link rel="alternate" type="text/markdown" title="LLM Context" href="/llms.txt" />` into `src/app/document.tsx`.
2. **Update `robots.ts` for AI Crawlers:** Add explicit rules for `GPTBot`, `ClaudeBot`, `PerplexityBot`, and `Google-Extended`, and include a pointer to `https://pdfkoi.com/llms.txt`.
3. **Inject `FAQPage` Schema into Landing Pages:** In `compress-pdf-for-email`, `compress-pdf-without-upload`, and `merge-pdf-no-signup`, pass `generateFAQPageSchema(content.faqs)` into `schemas`.
4. **Add Structured Schema to About Page:** Import and inject `generateOrganizationSchema()` and `generateWebPageSchema()` in `src/app/(localized)/[locale]/about/page.tsx`.
5. **Publish AlternativeTo & ProductHunt Listings:** Claim the PDFkoi entity profile on AlternativeTo.net, ProductHunt, and GitHub Topics to establish external AI knowledge-graph nodes.

---

## 30-Day Action Plan

### Week 1: Technical & Schema GEO Foundations
- [ ] Connect `llms.txt` and `llms-full.txt` via `<link>` tags in `document.tsx`.
- [ ] Update `src/app/robots.ts` with explicit AI crawler access policies and `llms.txt` link.
- [ ] Add `FAQPage` schema to all 3 long-tail landing pages.
- [ ] Add `Organization` and `AboutPage` schema to `src/app/(localized)/[locale]/about/page.tsx`.
- [ ] Enable `CollectionPage` and `AggregateOffer` schema on the homepage.

### Week 2: AI Citability & Content Structuring
- [ ] Add an above-the-fold "Key Facts / At a Glance" quick-answer summary card on all top tool pages (`compress-pdf`, `merge-pdf`, `split-pdf`, `pdf-to-docx`).
- [ ] Add a side-by-side comparison table to the Homepage and About page ("PDFkoi vs Traditional Online PDF Tools").
- [ ] Audit ad networks: replace aggressive redirect ad networks with clean contextual ads to preserve domain trust rating.

### Week 3: E-E-A-T and Transparency Enhancements
- [ ] Update the About page with real team/founder bios, GitHub/LinkedIn links, and technical background.
- [ ] Publish a "Client-Side Privacy & Security Architecture" technical whitepaper/guide detailing how documents stay in WebAssembly memory.
- [ ] Add a public `/changelog` page documenting recent tools, optimizations, and updates.

### Week 4: External Entity & Brand Authority Building
- [ ] Create official listings on AlternativeTo (tagging "Privacy", "Client-Side", "Free PDF Tools").
- [ ] Launch on ProductHunt to create an authoritative third-party discussion graph.
- [ ] Seed educational discussions on Reddit (r/software, r/privacy) answering user questions about private PDF compression and merging.
- [ ] Create 2-3 short YouTube demonstration videos showing zero-upload offline PDF processing (for Google AIO video citation indexing).

---

## Appendix: Pages Analyzed

| URL | Title / Role | GEO Status & Key Issues |
|---|---|---|
| `https://pdfkoi.com/` | Homepage | Missing CollectionPage & AggregateOffer schema |
| `https://pdfkoi.com/tools` | All Tools Hub | Good taxonomy; lacks competitive comparison module |
| `https://pdfkoi.com/about` | About Us | Missing schema; missing author/founder credentials |
| `https://pdfkoi.com/faq` | FAQ Hub | High citability; includes authoritative source citations |
| `https://pdfkoi.com/contact` | Contact Page | Clear support contact channels |
| `https://pdfkoi.com/privacy` | Privacy Policy | Strong privacy trust signals |
| `https://pdfkoi.com/terms` | Terms of Service | Standard terms |
| `https://pdfkoi.com/workflow` | Workflow Tool | Unique feature differentiator; good potential for AI citation |
| `https://pdfkoi.com/compress-pdf-for-email` | Landing Page | Has FAQ content but **missing FAQPage schema** |
| `https://pdfkoi.com/compress-pdf-without-upload` | Landing Page | Has FAQ content but **missing FAQPage schema** |
| `https://pdfkoi.com/merge-pdf-no-signup` | Landing Page | Has FAQ content but **missing FAQPage schema** |
| `https://pdfkoi.com/tools/category/edit-annotate` | Category Hub | Standard category hub |
| `https://pdfkoi.com/tools/category/convert-to-pdf` | Category Hub | Standard category hub |
| `https://pdfkoi.com/tools/category/convert-from-pdf` | Category Hub | Standard category hub |
| `https://pdfkoi.com/tools/category/organize-manage` | Category Hub | Standard category hub |
| `https://pdfkoi.com/tools/category/optimize-repair` | Category Hub | Standard category hub |
| `https://pdfkoi.com/tools/category/secure-pdf` | Category Hub | Standard category hub |
| `https://pdfkoi.com/tools/compress-pdf` | Core Tool Page | High-quality HowTo + FAQ; prose buried below canvas |
| `https://pdfkoi.com/tools/merge-pdf` | Core Tool Page | High-quality HowTo + FAQ; prose buried below canvas |
| `https://pdfkoi.com/tools/split-pdf` | Core Tool Page | High-quality HowTo + FAQ; prose buried below canvas |
| `https://pdfkoi.com/tools/pdf-to-docx` | Core Tool Page | High-quality HowTo + FAQ; prose buried below canvas |
| `https://pdfkoi.com/tools/jpg-to-pdf` | Core Tool Page | High-quality HowTo + FAQ; prose buried below canvas |
| `https://pdfkoi.com/tools/pdf-to-jpg` | Core Tool Page | High-quality HowTo + FAQ; prose buried below canvas |
| `https://pdfkoi.com/tools/ocr` | Core Tool Page | Technical tool; lacks WebAssembly Tesseract citation |
| `https://pdfkoi.com/tools/sign` | Core Tool Page | Privacy-sensitive tool; needs extra security trust badge |
| `https://pdfkoi.com/tools/rotate-custom` | Differentiated Tool | Highly unique capability; strong AI quotability |
| `https://pdfkoi.com/tools/grid-combine` | Differentiated Tool | Highly unique capability; strong AI quotability |
| `https://pdfkoi.com/tools/pdf-multi-tool` | Flagship Tool | Rich feature list; needs above-the-fold summary |
| `https://pdfkoi.com/llms.txt` | LLM Context Guide | Comprehensive, but orphaned from HTML `<head>` |
| `https://pdfkoi.com/llms-full.txt` | Extended Index | Comprehensive, but orphaned from HTML `<head>` |
| `https://pdfkoi.com/robots.txt` | Crawler Directives | Missing explicit AI bot rules and llms.txt link |
