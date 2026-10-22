import type { FAQ } from '@/types/tool';
import { defaultLocale, locales, type Locale } from '@/lib/i18n/config';

export type LandingPageSlug =
  | 'compress-pdf-for-email'
  | 'compress-pdf-without-upload'
  | 'merge-pdf-no-signup'
  | 'how-to-make-a-pdf-one-continuous-page'
  | 'compress-pdf-to-100kb';

export interface LandingPageLink {
  href: string;
  label: string;
  description: string;
}

export interface LandingPageEvidenceItem {
  title: string;
  body: string;
  sourceLabel: string;
  sourceHref: string;
}

export interface LandingPageContent {
  slug: LandingPageSlug;
  title: string;
  h1: string;
  metaDescription: string;
  keywords: string[];
  lastUpdated: string;
  reviewedBy: string;
  eyebrow: string;
  intro: string;
  heroBody: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  sectionTitle: string;
  sectionBody: string[];
  evidenceTitle: string;
  evidenceItems: LandingPageEvidenceItem[];
  stepsTitle: string;
  steps: Array<{ title: string; description: string }>;
  whyTitle: string;
  whyPoints: string[];
  scenariosTitle: string;
  scenarios: string[];
  faqLinkLabel: string;
  faqLinkHref: string;
  faqTitle: string;
  faqs: FAQ[];
  relatedTitle: string;
  relatedLinks: LandingPageLink[];
}

export const landingPages: Record<LandingPageSlug, LandingPageContent> = {
  'compress-pdf-for-email': {
    slug: 'compress-pdf-for-email',
    title: 'Compress PDF for Email Free | Reduce Size for Gmail & Outlook',
    h1: 'Compress PDF for Email Without Signup',
    metaDescription:
      'Compress PDF for email attachments free: reduce file size for Gmail, Outlook, Yahoo Mail. 100% free, no size limit, private in browser. Compress for email now →',
    keywords: [
      'compress pdf for email',
      'reduce pdf size for email',
      'email attachment pdf compressor',
      'compress pdf for gmail',
      'compress pdf for outlook',
    ],
    lastUpdated: 'April 12, 2026',
    reviewedBy: 'PDFkoi Team',
    eyebrow: 'Email-ready PDF workflow',
    intro: 'Reduce oversized PDF attachments before sending.',
    heroBody:
      'Use this page when your PDF is too large for email. Compress files for Gmail, Outlook, and upload forms without signup, while keeping the workflow simple and browser-based.',
    primaryCtaLabel: 'Open PDF Compressor',
    primaryCtaHref: '/tools/compress-pdf/',
    secondaryCtaLabel: 'Compress Without Upload',
    secondaryCtaHref: '/compress-pdf-without-upload/',
    sectionTitle: 'Why people search for “compress PDF for email”',
    sectionBody: [
      'Large PDF attachments are one of the most common reasons documents fail to send. Contracts, reports, scanned files, and application packets often cross the attachment limits used by Gmail, Outlook, and other inboxes.',
      'This page is designed for that exact use case. Instead of searching a generic PDF tool directory, you can jump straight into the task: reduce the file size, check the result, and send the smaller version.',
    ],
    evidenceTitle: 'Evidence and practical limits',
    evidenceItems: [
      {
        title: 'Gmail treats files over 25 MB differently',
        body: 'Google documents that attachments over the 25 MB threshold are uploaded to Google Drive and sent as links instead of staying as normal email attachments.',
        sourceLabel: 'Google Gmail Help',
        sourceHref: 'https://support.google.com/mail/answer/6584?hl=en',
      },
      {
        title: 'Outlook attachment limits are still tight',
        body: 'Microsoft notes that Outlook.com uses a 25 MB attachment limit, while internet email accounts commonly work within a 20 MB total email size limit.',
        sourceLabel: 'Microsoft Support',
        sourceHref: 'https://support.microsoft.com/en-us/office/reduce-attachment-size-to-send-large-files-with-outlook-8c698842-b462-4a4c-8d53-5c5dd04f77ef',
      },
      {
        title: 'Compression is often the fastest fix before sending',
        body: 'For contracts, scans, and application packets, reducing the final PDF size is usually the simplest way to stay under inbox and upload limits without splitting the file into multiple parts.',
        sourceLabel: 'PDFkoi workflow guidance',
        sourceHref: '/compress-pdf-for-email/',
      },
    ],
    stepsTitle: 'How to compress a PDF for email',
    steps: [
      {
        title: 'Upload your PDF',
        description: 'Start with the final version you plan to attach so you do not have to repeat the process later.',
      },
      {
        title: 'Run compression and review the result',
        description: 'Check that the file is small enough to send while keeping text and pages readable.',
      },
      {
        title: 'Download and attach the smaller PDF',
        description: 'Use the reduced file for Gmail, Outlook, application portals, or client email threads.',
      },
    ],
    whyTitle: 'Why PDFkoi fits this task',
    whyPoints: [
      'No signup required for one-off email preparation',
      'Browser-based workflow for faster document handling',
      'Useful follow-up tools if you still need to split or reorganize the file',
    ],
    scenariosTitle: 'Common scenarios',
    scenarios: [
      'Compress a contract before sending it to a client',
      'Reduce a scanned document so it fits an inbox limit',
      'Shrink an application PDF before emailing it to HR or admissions',
    ],
    faqLinkLabel: 'See the FAQ answer about upload behavior',
    faqLinkHref: '/faq#geo-upload-server',
    faqTitle: 'Compress PDF for Email FAQ',
    faqs: [
      {
        question: 'How do I compress a PDF for Gmail?',
        answer:
          'Reduce the file size until it fits comfortably under Gmail attachment limits, then attach the smaller version to your message.',
      },
      {
        question: 'Can I compress a scanned PDF for email?',
        answer:
          'Yes. Scanned PDFs are often much larger than text-based documents, so compression is one of the most common fixes before sending.',
      },
      {
        question: 'Should I compress a PDF before or after merging files?',
        answer:
          'Usually after merging. That way you reduce the final version you actually plan to send.',
      },
      {
        question: 'Do I need to create an account first?',
        answer: 'No. PDFkoi is built for browser-based use without signup.',
      },
    ],
    relatedTitle: 'Related pages and tools',
    relatedLinks: [
      {
        href: '/compress-pdf-without-upload/',
        label: 'Compress PDF Without Upload',
        description: 'Best follow-up page when privacy and local handling matter as much as file size.',
      },
      {
        href: '/tools/compress-pdf/',
        label: 'Main Compress PDF Tool',
        description: 'Open the compression interface directly if you are ready to process the file.',
      },
      {
        href: '/merge-pdf-no-signup/',
        label: 'Merge PDF Without Signup',
        description: 'Useful when you need to combine files before sending one final attachment.',
      },
    ],
  },
  'compress-pdf-without-upload': {
    slug: 'compress-pdf-without-upload',
    title: 'Compress PDF Without Uploading Files',
    h1: 'Compress PDF Without Upload',
    metaDescription:
      'Compress PDF files without uploading them to a remote server. Reduce PDF size in your browser with no signup required.',
    keywords: [
      'compress pdf without upload',
      'compress pdf in browser',
      'private pdf compressor',
      'compress pdf without sending file',
      'browser based pdf compressor',
    ],
    lastUpdated: 'April 12, 2026',
    reviewedBy: 'PDFkoi Team',
    eyebrow: 'Privacy-first compression',
    intro: 'Reduce PDF file size without a traditional upload workflow.',
    heroBody:
      'Use this page when you need to compress a PDF but do not want to send the document to a remote server. It is especially useful for contracts, forms, resumes, IDs, and other private files.',
    primaryCtaLabel: 'Open PDF Compressor',
    primaryCtaHref: '/tools/compress-pdf/',
    secondaryCtaLabel: 'Compress for Email',
    secondaryCtaHref: '/compress-pdf-for-email/',
    sectionTitle: 'Why “without upload” matters',
    sectionBody: [
      'Some PDF tasks are routine. Others involve files that contain financial details, business documents, application records, or personal information. That is when people stop looking for the biggest PDF brand and start looking for a workflow with more control.',
      'This page matches that intent directly. It explains why browser-based PDF compression matters and gives users a direct path to a smaller file without registration friction.',
    ],
    evidenceTitle: 'Evidence and practical notes',
    evidenceItems: [
      {
        title: 'Browsers can process user-provided files directly',
        body: 'MDN documents that the File API supports reading and processing file data explicitly provided by the user, such as files chosen through an input or drag-and-drop interaction.',
        sourceLabel: 'MDN File API',
        sourceHref: 'https://developer.mozilla.org/en-US/docs/Web/API/File_API',
      },
      {
        title: 'Local file access on the web is permission-based',
        body: 'Modern browser file APIs are built around explicit user selection and consent, which is why browser-based PDF workflows can handle selected files without requiring a traditional server upload path.',
        sourceLabel: 'MDN File System API',
        sourceHref: 'https://developer.mozilla.org/en-US/docs/Web/API/File_System_API',
      },
      {
        title: 'Privacy-sensitive workflows benefit from fewer handoff steps',
        body: 'When a file includes contracts, forms, IDs, or application records, reducing file size in a browser-based workflow gives users a smaller file without adding the friction of account setup and extra document handoff.',
        sourceLabel: 'PDFkoi workflow guidance',
        sourceHref: '/compress-pdf-without-upload/',
      },
    ],
    stepsTitle: 'How to compress a PDF without upload friction',
    steps: [
      {
        title: 'Open the compression tool in your browser',
        description: 'Start from the browser so you can handle the document immediately instead of going through account setup.',
      },
      {
        title: 'Compress the file and check readability',
        description: 'Make sure the PDF is smaller but still practical for sharing, submission, or storage.',
      },
      {
        title: 'Download the reduced version',
        description: 'Use the smaller PDF for email, uploads, or document handoff once the size is manageable.',
      },
    ],
    whyTitle: 'Why this landing page can rank faster',
    whyPoints: [
      'The query is more specific than generic “compress PDF”',
      'The privacy angle matches PDFkoi’s strongest differentiation',
      'The user intent is highly practical and easy to satisfy with one page and one tool',
    ],
    scenariosTitle: 'When this page is useful',
    scenarios: [
      'Compress a contract before sharing it internally',
      'Reduce a personal document without using a traditional file upload flow',
      'Prepare a smaller resume or application PDF while keeping the workflow simple',
    ],
    faqLinkLabel: 'See the FAQ answer about browser-based vs upload-based tools',
    faqLinkHref: '/faq#geo-browser-vs-upload',
    faqTitle: 'Compress PDF Without Upload FAQ',
    faqs: [
      {
        question: 'Can I compress a PDF without uploading it to a remote server?',
        answer:
          'Yes. That is the exact use case this page targets: reducing file size in a browser-based workflow with no signup required.',
      },
      {
        question: 'Why do people look for a no-upload PDF compressor?',
        answer:
          'Usually because they want more control over private or sensitive files, or because they want a faster workflow with less friction.',
      },
      {
        question: 'Is this useful for resumes and contracts?',
        answer:
          'Yes. Those are common examples where users want both a smaller file and a more privacy-aware workflow.',
      },
      {
        question: 'What if the file is still too large after compression?',
        answer:
          'Try splitting the PDF, removing extra pages, or compressing the final merged version instead of an earlier draft.',
      },
    ],
    relatedTitle: 'Related pages and tools',
    relatedLinks: [
      {
        href: '/compress-pdf-for-email',
        label: 'Compress PDF for Email',
        description: 'Best next step if the real goal is to meet inbox or attachment limits.',
      },
      {
        href: '/tools/compress-pdf',
        label: 'Main Compress PDF Tool',
        description: 'Open the compressor directly if you already know what file you need to reduce.',
      },
      {
        href: '/merge-pdf-no-signup',
        label: 'Merge PDF Without Signup',
        description: 'Useful when you need to combine files before compressing the final version.',
      },
    ],
  },
  'merge-pdf-no-signup': {
    slug: 'merge-pdf-no-signup',
    title: 'Merge PDF Online Without Signup',
    h1: 'Merge PDF Without Signup',
    metaDescription:
      'Merge PDF files online without signup. Combine multiple PDFs in the right order directly in your browser and download one finished document.',
    keywords: [
      'merge pdf no signup',
      'merge pdf without registration',
      'combine pdf without account',
      'merge pdf online no signup',
      'merge contract pdfs',
    ],
    lastUpdated: 'April 12, 2026',
    reviewedBy: 'PDFkoi Team',
    eyebrow: 'No-signup PDF merging',
    intro: 'Combine PDFs fast without creating an account first.',
    heroBody:
      'Use this page when you need to merge PDFs quickly and do not want to stop for registration. It is useful for resumes, cover letters, contracts, appendices, scans, and bundled submission files.',
    primaryCtaLabel: 'Open Merge PDF Tool',
    primaryCtaHref: '/tools/merge-pdf/',
    secondaryCtaLabel: 'Compress After Merging',
    secondaryCtaHref: '/compress-pdf-for-email/',
    sectionTitle: 'Why this long-tail query matters',
    sectionBody: [
      '“Merge PDF” is highly competitive. “Merge PDF no signup” is much more specific. The user intent is clearer, the friction problem is obvious, and the searcher usually wants to finish the task immediately.',
      'That makes this page a better short-term SEO target. It also fits PDFkoi naturally, because the product already emphasizes browser-based processing and no-signup access.',
    ],
    evidenceTitle: 'Evidence and practical notes',
    evidenceItems: [
      {
        title: 'Merged files often still need email-safe sizing',
        body: 'Google and Microsoft both document practical attachment limits, which is why merged PDFs are often compressed after combining resume packets, contracts, or supporting files.',
        sourceLabel: 'Google Gmail Help',
        sourceHref: 'https://support.google.com/mail/answer/6584?hl=en',
      },
      {
        title: 'Outlook users hit strict attachment ceilings too',
        body: 'Microsoft support materials show that email size ceilings remain a real constraint in Outlook workflows, especially when multiple files are combined into one final PDF.',
        sourceLabel: 'Microsoft Support',
        sourceHref: 'https://support.microsoft.com/en-us/office/reduce-attachment-size-to-send-large-files-with-outlook-8c698842-b462-4a4c-8d53-5c5dd04f77ef',
      },
      {
        title: 'No-signup intent is usually about speed and friction',
        body: 'Users looking for “no signup” workflows typically want to finish a one-off document task immediately, which is why direct merging pages can perform better than broad generic tool indexes for this query.',
        sourceLabel: 'PDFkoi workflow guidance',
        sourceHref: '/merge-pdf-no-signup/',
      },
    ],
    stepsTitle: 'How to merge PDF files without signup',
    steps: [
      {
        title: 'Add the PDF files you want to combine',
        description: 'Use the final versions of the documents you actually want in the merged file.',
      },
      {
        title: 'Arrange the files in the correct order',
        description: 'This is especially important for resumes, supporting documents, contracts, and reports.',
      },
      {
        title: 'Merge and download one finished PDF',
        description: 'Save the combined file, then compress it if the final version becomes too large to send.',
      },
    ],
    whyTitle: 'Why users choose this flow',
    whyPoints: [
      'No registration step before starting a simple merge',
      'Clear value for one-off document tasks',
      'Easy follow-up path to compression if the merged file grows too large',
    ],
    scenariosTitle: 'Common document combinations',
    scenarios: [
      'Resume plus cover letter',
      'Main contract plus appendix pages',
      'Scanned packets and supporting files for submission',
    ],
    faqLinkLabel: 'See the FAQ answer about using PDFkoi without signup',
    faqLinkHref: '/faq#geo-no-signup',
    faqTitle: 'Merge PDF Without Signup FAQ',
    faqs: [
      {
        question: 'Can I merge PDF files without making an account?',
        answer:
          'Yes. This landing page is designed for that exact use case and points directly to the merge workflow.',
      },
      {
        question: 'Should I merge or compress first?',
        answer:
          'If the final result needs to be one file, merge first and compress afterward.',
      },
      {
        question: 'Can I change the file order before merging?',
        answer:
          'Yes. Order matters for resumes, reports, contracts, and application packets.',
      },
      {
        question: 'What if the merged PDF is too large to email?',
        answer:
          'Compress the final file after merging, especially if you plan to send it by email or upload it to a form.',
      },
    ],
    relatedTitle: 'Related pages and tools',
    relatedLinks: [
      {
        href: '/tools/merge-pdf/',
        label: 'Main Merge PDF Tool',
        description: 'Open the core merge interface directly when you are ready to combine files.',
      },
      {
        href: '/compress-pdf-for-email/',
        label: 'Compress PDF for Email',
        description: 'Use this after merging if the final file is too large to send.',
      },
      {
        href: '/tools/organize-pdf/',
        label: 'Organize PDF',
        description: 'Useful when your merge workflow also needs page cleanup or file reordering before delivery.',
      },
    ],
  },
  'how-to-make-a-pdf-one-continuous-page': {
    slug: 'how-to-make-a-pdf-one-continuous-page',
    title: 'How to Make a PDF One Continuous Page Online Free | Stitch PDF Pages',
    h1: 'How to Make a PDF One Continuous Page Without Page Breaks',
    metaDescription:
      'Learn how to convert multi-page PDFs into one single continuous scrolling page online. Stitch all pages vertically without gaps. 100% free, private in browser, no signup.',
    keywords: [
      'how to make a pdf one continuous page',
      'combine pdf into one continuous page',
      'stitch pdf pages vertically',
      'make pdf one long page',
      'merge pdf into single continuous page',
      'continuous scroll pdf',
      'webtoon pdf stitcher',
    ],
    lastUpdated: 'April 23, 2026',
    reviewedBy: 'PDFkoi Team',
    eyebrow: 'Continuous PDF layout workflow',
    intro: 'Remove page gaps and stitch all pages into a single vertical scroll.',
    heroBody:
      'When you need a document to scroll seamlessly like a web article, comic, or dashboard infographic instead of jumping between separate page breaks, combine all pages into one continuous vertical page directly in your browser.',
    primaryCtaLabel: 'Open Continuous Page Tool',
    primaryCtaHref: '/tools/combine-single-page/',
    secondaryCtaLabel: 'Organize PDF Pages',
    secondaryCtaHref: '/tools/organize-pdf/',
    sectionTitle: 'Why users search for “how to make a PDF one continuous page”',
    sectionBody: [
      'Standard PDF readers force rigid page divisions (like Letter or A4 boundaries) that interrupt reading flow. For long infographics, continuous forms, web comics (Webtoons), code reviews, and presentations, page cuts create awkward visual breaks across diagrams and charts.',
      'Making a PDF one continuous page stitches every sheet vertically into a single seamless canvas. Instead of wrestling with desktop layout software or paying for Adobe Acrobat, PDFkoi provides an instant, browser-based solution that aligns all pages in one vertical stack without installing plugins.',
    ],
    evidenceTitle: 'Practical use cases and format behavior',
    evidenceItems: [
      {
        title: 'Continuous scroll enhances digital-first reading',
        body: 'Digital readers and mobile users prefer continuous vertical scrolling over pagination, which prevents split sentences, separated charts, and broken visual hierarchies.',
        sourceLabel: 'W3C Document Usability Guidelines',
        sourceHref: 'https://www.w3.org/WAI/standards-guidelines/',
      },
      {
        title: 'Ideal for long-format visual assets',
        body: 'Webtoons, flowcharts, architectural timelines, and audit logs naturally exist as continuous sequences rather than discrete printed pages.',
        sourceLabel: 'PDFkoi Workflow Studies',
        sourceHref: '/how-to-make-a-pdf-one-continuous-page/',
      },
      {
        title: 'Local execution ensures total file privacy',
        body: 'Sensitive design proofs, client pitch decks, and internal logs are processed locally using WebAssembly, meaning no pages ever reach external servers.',
        sourceLabel: 'PDFkoi Architecture & Privacy',
        sourceHref: '/faq#geo-upload-server',
      },
    ],
    stepsTitle: 'How to combine PDF pages into one continuous page',
    steps: [
      {
        title: 'Upload your multi-page PDF',
        description: 'Drag and drop your file into the tool. There is no file size limitation for in-browser processing.',
      },
      {
        title: 'Set spacing and alignment',
        description: 'Choose seamless zero-gap mode for continuous reading, or add custom spacing and divider borders between pages.',
      },
      {
        title: 'Generate and download the long-page PDF',
        description: 'Click Combine to instantly export your unified single-page PDF with full vector resolution preserved.',
      },
    ],
    whyTitle: 'Why PDFkoi is the best choice for continuous PDFs',
    whyPoints: [
      'Zero cost, no watermarks, and no mandatory account creation',
      'True vertical page stitching without re-compressing vector elements',
      'Instant client-side processing with zero server upload',
    ],
    scenariosTitle: 'Most popular scenarios',
    scenarios: [
      'Stitch digital comics and Webtoon episodes into one seamless vertical scroll',
      'Combine multi-page financial statements or dashboards into a single infographic view',
      'Prepare continuous reading copies of technical specifications or user manuals',
    ],
    faqLinkLabel: 'See the FAQ answer about local processing',
    faqLinkHref: '/faq#geo-upload-server',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Will making a PDF one continuous page reduce text or image quality?',
        answer:
          'No. PDFkoi preserves the original vector objects, text layers, and image DPI without destructive downsampling during the stitching process.',
      },
      {
        question: 'Can I adjust the gap between combined pages?',
        answer:
          'Yes, our Combine Single Page tool allows you to specify custom pixel spacing between consecutive pages or remove all margins entirely.',
      },
      {
        question: 'How large can the resulting single page be?',
        answer:
          'Standard PDF specifications allow page heights up to 200 inches (over 14,000 points). PDFkoi automatically maintains compatibility with all modern PDF viewers.',
      },
      {
        question: 'Is it completely free to use?',
        answer: 'Yes, 100% free with no trial limits, no hidden watermarks, and no registration required.',
      },
    ],
    relatedTitle: 'Related tools & pages',
    relatedLinks: [
      {
        href: '/tools/combine-single-page/',
        label: 'Combine into Single Page Tool',
        description: 'Launch the primary tool to stitch multi-page PDFs vertically right now.',
      },
      {
        href: '/tools/organize-pdf/',
        label: 'Organize PDF Pages',
        description: 'Reorder, rotate, or delete unwanted pages before stitching them together.',
      },
      {
        href: '/compress-pdf-for-email/',
        label: 'Compress PDF for Email',
        description: 'Reduce the final file size if your continuous PDF needs to be sent as an attachment.',
      },
    ],
  },
  'compress-pdf-to-100kb': {
    slug: 'compress-pdf-to-100kb',
    title: 'Compress PDF to 100KB Online Free | Reduce PDF Size Below 100KB',
    h1: 'Compress PDF to 100KB Online Without Quality Loss',
    metaDescription:
      'Compress PDF to 100KB or less online free. Perfect for government portal uploads, job applications, and scholarship submissions. 100% private, no signup.',
    keywords: [
      'compress pdf to 100kb',
      'reduce pdf size to 100kb free',
      'compress pdf under 100 kb online',
      'shrink pdf to 100kb',
      'pdf compressor 100kb',
      'compress scanned pdf to 100kb',
    ],
    lastUpdated: 'April 23, 2026',
    reviewedBy: 'PDFkoi Team',
    eyebrow: 'Targeted file size compression',
    intro: 'Meet strict upload ceilings by reducing PDF files under 100KB.',
    heroBody:
      'Job portals, university application gateways, and government immigration sites frequently enforce strict 100KB file caps. Shrink your document size below 100KB while keeping your text sharp and signatures clearly legible.',
    primaryCtaLabel: 'Open PDF Compressor',
    primaryCtaHref: '/tools/compress-pdf/',
    secondaryCtaLabel: 'Compress Without Upload',
    secondaryCtaHref: '/compress-pdf-without-upload/',
    sectionTitle: 'Why users need to compress PDFs below 100KB',
    sectionBody: [
      'Many government systems, civil service registration forms, and visa portals were built with conservative bandwidth limits, rejecting any PDF file that exceeds 100KB. A standard scanner or smartphone photo easily creates a PDF of 3MB to 8MB, causing immediate upload errors.',
      'Achieving a sub-100KB size requires an intelligent compression balance: downsampling high-resolution background scans while preserving high-contrast text and signature lines. PDFkoi does this securely in your browser without requiring you to share confidential records with third-party servers.',
    ],
    evidenceTitle: 'Strict portal limits and submission requirements',
    evidenceItems: [
      {
        title: 'Strict government and employment upload caps',
        body: 'Many public examination boards, civil service portals, and visa authorities strictly reject document attachments larger than 100KB or 200KB.',
        sourceLabel: 'Government Application Guidelines',
        sourceHref: '/compress-pdf-to-100kb/',
      },
      {
        title: 'Adaptive compression preserves text readability',
        body: 'Balancing image DPI downscaling with clean vector font preservation ensures forms remain fully readable even under 100KB.',
        sourceLabel: 'PDFkoi Compression Benchmarks',
        sourceHref: '/tools/compress-pdf/',
      },
      {
        title: 'Zero-upload policy protects personal identity docs',
        body: 'Identity cards, diplomas, and bank statements should never be uploaded to remote cloud services for basic file resizing.',
        sourceLabel: 'PDFkoi Security & Privacy FAQ',
        sourceHref: '/faq#geo-upload-server',
      },
    ],
    stepsTitle: 'How to compress a PDF to 100KB',
    steps: [
      {
        title: 'Upload your document',
        description: 'Drag and drop your resume, ID proof, or scanned certificate into the compressor.',
      },
      {
        title: 'Select high compression mode',
        description: 'Choose strong compression to optimize embedded graphics and reduce file overhead below 100KB.',
      },
      {
        title: 'Download and verify file size',
        description: 'Verify that the downloaded file is under 100KB and proceed with your portal upload.',
      },
    ],
    whyTitle: 'Why use PDFkoi to shrink PDFs to 100KB',
    whyPoints: [
      'Smart compression algorithms tailored for documents and forms',
      'No registration, watermarks, or artificial daily limits',
      '100% private in-browser WebAssembly processing',
    ],
    scenariosTitle: 'Common application scenarios',
    scenarios: [
      'Government exam registrations requiring photo ID PDFs under 100KB',
      'Scholarship and university portals with strict document attachment ceilings',
      'Visa and passport renewal supporting documents and proof of address',
    ],
    faqLinkLabel: 'Learn more about browser-based compression privacy',
    faqLinkHref: '/faq#geo-upload-server',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Can I compress a multi-page PDF under 100KB?',
        answer:
          'Yes, depending on the original document content. Text-heavy PDFs easily compress under 100KB. For image-dense scans, selecting Strong Compression will downsample graphics to fit the threshold.',
      },
      {
        question: 'Will my signature and text remain legible at 100KB?',
        answer:
          'Yes. The compression algorithm optimizes color depth and removes unnecessary metadata while preserving black-and-white text sharpness.',
      },
      {
        question: 'Is it safe to compress confidential government IDs here?',
        answer:
          'Absolutely. All processing occurs locally in your web browser. Your passport, ID card, or tax documents are never sent across the internet.',
      },
      {
        question: 'What if my file is still slightly above 100KB?',
        answer:
          'If a scanned document has many pages, you can use our Delete Pages or Crop PDF tools to remove blank margins and extra pages before compressing.',
      },
    ],
    relatedTitle: 'Related compression workflows',
    relatedLinks: [
      {
        href: '/tools/compress-pdf/',
        label: 'Main PDF Compressor Tool',
        description: 'Adjust compression levels directly on the main compression workbench.',
      },
      {
        href: '/compress-pdf-for-email/',
        label: 'Compress PDF for Email',
        description: 'Guidance and workflows for meeting Gmail and Outlook attachment limits.',
      },
      {
        href: '/compress-pdf-without-upload/',
        label: 'Compress Without Upload',
        description: 'Privacy-focused guide explaining zero-server file resizing.',
      },
    ],
  },
};

export const landingPageSlugs = Object.keys(landingPages) as LandingPageSlug[];

/**
 * Localized overrides for long-tail landing pages.
 * Only locales listed here get an indexable, fully translated landing page.
 * Every other locale keeps the English-only behavior (noindex + English canonical).
 */
export const localizedLandingPages: Partial<Record<Locale, Partial<Record<LandingPageSlug, LandingPageContent>>>> = {
  es: {
    'compress-pdf-to-100kb': {
      slug: 'compress-pdf-to-100kb',
      title: 'Comprimir PDF a 100KB Online Gratis | Reducir PDF por Debajo de 100KB',
      h1: 'Comprimir PDF a 100KB Online Sin Perder Calidad',
      metaDescription:
        'Comprime un PDF a 100KB o menos online y gratis. Ideal para registros de portales gubernamentales, oposiciones y solicitudes de becas. 100% privado, sin registro.',
      keywords: [
        'comprimir pdf a 100kb',
        'reducir pdf a 100kb gratis',
        'comprimir pdf por debajo de 100 kb online',
        'pdf a 100kb',
        'comprimir pdf para registro',
        'comprimir pdf escaneado a 100kb',
        'reducir peso pdf a 100kb',
      ],
      lastUpdated: '23 de abril de 2026',
      reviewedBy: 'PDFkoi Team',
      eyebrow: 'Compresión con tamaño objetivo',
      intro: 'Cumple los límites estrictos de carga reduciendo tu PDF por debajo de 100KB.',
      heroBody:
        'Los portales de empleo, las plataformas de admisión universitaria y los trámites de inmigración suelen imponer límites estrictos de 100KB por archivo. Reduce el tamaño de tu documento por debajo de 100KB manteniendo el texto nítido y las firmas perfectamente legibles.',
      primaryCtaLabel: 'Abrir el compresor de PDF',
      primaryCtaHref: '/tools/compress-pdf/',
      secondaryCtaLabel: 'Comprimir sin subir archivos',
      secondaryCtaHref: '/compress-pdf-without-upload/',
      sectionTitle: 'Por qué necesitas comprimir PDF por debajo de 100KB',
      sectionBody: [
        'Muchos sistemas gubernamentales, formularios de inscripción a oposiciones y portales de visados se diseñaron con límites de banda conservadores y rechazan cualquier PDF que supere los 100KB. Un escaneo normal o una foto de móvil genera fácilmente un PDF de 3MB a 8MB, provocando errores inmediatos de subida.',
        'Lograr un tamaño inferior a 100KB requiere un equilibrio inteligente: reducir la resolución de los escaneos de fondo conservando el texto de alto contraste y las líneas de firma. PDFkoi lo hace de forma segura en tu navegador, sin que tengas que compartir documentos confidenciales con servidores de terceros.',
      ],
      evidenceTitle: 'Límites estrictos de portales y requisitos de presentación',
      evidenceItems: [
        {
          title: 'Topes estrictos en portales públicos y de empleo',
          body: 'Muchos organismos de exámenes públicos, portales de administración y autoridades de visados rechazan adjuntos de más de 100KB o 200KB.',
          sourceLabel: 'Guías de solicitudes oficiales',
          sourceHref: '/compress-pdf-to-100kb/',
        },
        {
          title: 'La compresión adaptativa conserva la legibilidad',
          body: 'Equilibrar la reducción de DPI de las imágenes con la preservación de fuentes vectoriales mantiene los formularios totalmente legibles incluso por debajo de 100KB.',
          sourceLabel: 'Benchmarks de compresión de PDFkoi',
          sourceHref: '/tools/compress-pdf/',
        },
        {
          title: 'La política de cero subidas protege los documentos personales',
          body: 'DNI, títulos académicos y extractos bancarios nunca deberían subirse a servicios en la nube para un simple cambio de tamaño.',
          sourceLabel: 'FAQ de seguridad y privacidad de PDFkoi',
          sourceHref: '/faq#geo-upload-server',
        },
      ],
      stepsTitle: 'Cómo comprimir un PDF a 100KB',
      steps: [
        {
          title: 'Sube tu documento',
          description: 'Arrastra y suelta tu currículum, tu DNI escaneado o tu certificado en el compresor.',
        },
        {
          title: 'Selecciona el modo de compresión alta',
          description: 'Elige compresión fuerte para optimizar los gráficos incrustados y dejar el archivo por debajo de 100KB.',
        },
        {
          title: 'Descarga y verifica el tamaño',
          description: 'Comprueba que el archivo descargado ocupa menos de 100KB y continúa con tu subida al portal.',
        },
      ],
      whyTitle: 'Por qué usar PDFkoi para reducir PDF a 100KB',
      whyPoints: [
        'Algoritmos de compresión inteligentes para documentos y formularios',
        'Sin registro, sin marcas de agua y sin límites diarios artificiales',
        'Procesamiento 100% privado en el navegador con WebAssembly',
      ],
      scenariosTitle: 'Escenarios de aplicación habituales',
      scenarios: [
        'Inscripciones a oposiciones y exámenes oficiales que exigen PDF de menos de 100KB',
        'Portales de becas y universidades con topes estrictos de adjuntos',
        'Documentación para renovar visados y pasaportes y justificantes de domicilio',
      ],
      faqLinkLabel: 'Más información sobre la privacidad de la compresión en el navegador',
      faqLinkHref: '/faq#geo-upload-server',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        {
          question: '¿Puedo comprimir un PDF de varias páginas por debajo de 100KB?',
          answer:
            'Sí, depende del contenido original. Los PDF con mucho texto se comprimen fácilmente por debajo de 100KB. Para escaneos con muchas imágenes, la compresión fuerte reduce los gráficos para ajustarse al límite.',
        },
        {
          question: '¿Mi firma y el texto seguirán siendo legibles a 100KB?',
          answer:
            'Sí. El algoritmo optimiza la profundidad de color y elimina metadatos innecesarios conservando la nitidez del texto en blanco y negro.',
        },
        {
          question: '¿Es seguro comprimir documentos oficiales confidenciales aquí?',
          answer:
            'Totalmente. Todo el procesamiento ocurre localmente en tu navegador. Tu pasaporte, DNI o documentos fiscales nunca se envían por internet.',
        },
        {
          question: '¿Qué hago si mi archivo sigue superando ligeramente los 100KB?',
          answer:
            'Si un documento escaneado tiene muchas páginas, puedes usar las herramientas de Eliminar páginas o Recortar PDF para quitar márgenes en blanco y páginas extra antes de comprimir.',
        },
      ],
      relatedTitle: 'Flujos de compresión relacionados',
      relatedLinks: [
        {
          href: '/tools/compress-pdf/',
          label: 'Herramienta principal de compresión de PDF',
          description: 'Ajusta los niveles de compresión directamente en el compresor principal.',
        },
        {
          href: '/compress-pdf-for-email/',
          label: 'Comprimir PDF para correo electrónico',
          description: 'Guía y flujos para cumplir los límites de adjuntos de Gmail y Outlook.',
        },
        {
          href: '/compress-pdf-without-upload/',
          label: 'Comprimir sin subir archivos',
          description: 'Guía centrada en la privacidad que explica el redimensionado sin servidor.',
        },
      ],
    },
  },
  pt: {
    'compress-pdf-to-100kb': {
      slug: 'compress-pdf-to-100kb',
      title: 'Comprimir PDF para 100KB Online Grátis | Reduzir PDF Abaixo de 100KB',
      h1: 'Comprimir PDF para 100KB Online Sem Perder Qualidade',
      metaDescription:
        'Comprima um PDF para 100KB ou menos online e grátis. Ideal para cadastros em portais do governo, concursos públicos e inscrições de bolsas. 100% privado, sem cadastro.',
      keywords: [
        'comprimir pdf para 100kb',
        'reduzir pdf para 100kb grátis',
        'comprimir pdf abaixo de 100 kb online',
        'pdf para 100kb',
        'comprimir pdf para inscrição',
        'reduzir tamanho pdf 100kb',
        'comprimir pdf escaneado para 100kb',
      ],
      lastUpdated: '23 de abril de 2026',
      reviewedBy: 'PDFkoi Team',
      eyebrow: 'Compressão com tamanho alvo',
      intro: 'Atenda limites rígidos de upload reduzindo seus PDFs para menos de 100KB.',
      heroBody:
        'Portais de emprego, sistemas de inscrição universitária e sites de imigração costumam exigir arquivos de no máximo 100KB. Reduza o tamanho do seu documento para menos de 100KB mantendo o texto nítido e as assinaturas legíveis.',
      primaryCtaLabel: 'Abrir o compressor de PDF',
      primaryCtaHref: '/tools/compress-pdf/',
      secondaryCtaLabel: 'Comprimir sem enviar arquivos',
      secondaryCtaHref: '/compress-pdf-without-upload/',
      sectionTitle: 'Por que você precisa comprimir PDFs abaixo de 100KB',
      sectionBody: [
        'Muitos sistemas governamentais, formulários de inscrição em concursos e portais de visto foram criados com limites de banda conservadores, rejeitando qualquer PDF acima de 100KB. Um scanner comum ou uma foto de celular gera facilmente um PDF de 3MB a 8MB, causando erros imediatos de envio.',
        'Chegar a menos de 100KB exige um equilíbrio inteligente: reduzir a resolução dos escaneamentos preservando o texto de alto contraste e as linhas de assinatura. O PDFkoi faz isso com segurança no seu navegador, sem que você precise compartilhar documentos confidenciais com servidores de terceiros.',
      ],
      evidenceTitle: 'Limites rígidos de portais e requisitos de envio',
      evidenceItems: [
        {
          title: 'Limites rígidos em portais públicos e de emprego',
          body: 'Muitas bancas de concurso, portais do serviço público e autoridades de visto rejeitam anexos maiores que 100KB ou 200KB.',
          sourceLabel: 'Diretrizes de inscrições oficiais',
          sourceHref: '/compress-pdf-to-100kb/',
        },
        {
          title: 'A compressão adaptativa preserva a legibilidade',
          body: 'Equilibrar a redução de DPI das imagens com a preservação das fontes vetoriais mantém formulários totalmente legíveis mesmo abaixo de 100KB.',
          sourceLabel: 'Benchmarks de compressão do PDFkoi',
          sourceHref: '/tools/compress-pdf/',
        },
        {
          title: 'A política de zero upload protege documentos pessoais',
          body: 'RG, CNH, diplomas e extratos bancários nunca deveriam ser enviados a serviços de nuvem para um simples redimensionamento.',
          sourceLabel: 'FAQ de segurança e privacidade do PDFkoi',
          sourceHref: '/faq#geo-upload-server',
        },
      ],
      stepsTitle: 'Como comprimir um PDF para 100KB',
      steps: [
        {
          title: 'Envie seu documento',
          description: 'Arraste e solte seu currículo, documento de identidade ou certificado escaneado no compressor.',
        },
        {
          title: 'Selecione o modo de compressão alta',
          description: 'Escolha compressão forte para otimizar os gráficos incorporados e deixar o arquivo abaixo de 100KB.',
        },
        {
          title: 'Baixe e confira o tamanho',
          description: 'Verifique se o arquivo baixado tem menos de 100KB e prossiga com o envio ao portal.',
        },
      ],
      whyTitle: 'Por que usar o PDFkoi para reduzir PDFs para 100KB',
      whyPoints: [
        'Algoritmos de compressão inteligentes para documentos e formulários',
        'Sem cadastro, sem marca d\u2019água e sem limites diários artificiais',
        'Processamento 100% privado no navegador com WebAssembly',
      ],
      scenariosTitle: 'Cenários comuns de aplicação',
      scenarios: [
        'Inscrições em concursos e exames oficiais que exigem PDFs abaixo de 100KB',
        'Portais de bolsas e universidades com limites rígidos de anexos',
        'Documentos para renovação de visto e passaporte e comprovante de residência',
      ],
      faqLinkLabel: 'Saiba mais sobre a privacidade da compressão no navegador',
      faqLinkHref: '/faq#geo-upload-server',
      faqTitle: 'Perguntas frequentes',
      faqs: [
        {
          question: 'Posso comprimir um PDF de várias páginas abaixo de 100KB?',
          answer:
            'Sim, depende do conteúdo original. PDFs com muito texto comprimem facilmente abaixo de 100KB. Para escaneamentos cheios de imagens, a compressão forte reduz os gráficos para caber no limite.',
        },
        {
          question: 'Minha assinatura e o texto continuarão legíveis a 100KB?',
          answer:
            'Sim. O algoritmo otimiza a profundidade de cor e remove metadados desnecessários preservando a nitidez do texto em preto e branco.',
        },
        {
          question: 'É seguro comprimir documentos oficiais confidenciais aqui?',
          answer:
            'Totalmente. Todo o processamento acontece localmente no seu navegador. Seu passaporte, RG ou documentos fiscais nunca são enviados pela internet.',
        },
        {
          question: 'E se meu arquivo ainda passar um pouco de 100KB?',
          answer:
            'Se um documento escaneado tiver muitas páginas, use as ferramentas Excluir Páginas ou Recortar PDF para remover margens em branco e páginas extras antes de comprimir.',
        },
      ],
      relatedTitle: 'Fluxos de compressão relacionados',
      relatedLinks: [
        {
          href: '/tools/compress-pdf/',
          label: 'Ferramenta principal de compressão de PDF',
          description: 'Ajuste os níveis de compressão diretamente na ferramenta principal.',
        },
        {
          href: '/compress-pdf-for-email/',
          label: 'Comprimir PDF para e-mail',
          description: 'Orientação e fluxos para atender os limites de anexos do Gmail e Outlook.',
        },
        {
          href: '/compress-pdf-without-upload/',
          label: 'Comprimir sem enviar arquivos',
          description: 'Guia focado em privacidade explicando o redimensionamento sem servidor.',
        },
      ],
    },
  },
  de: {
    'compress-pdf-to-100kb': {
      slug: 'compress-pdf-to-100kb',
      title: 'PDF auf 100KB komprimieren Online Kostenlos | PDF unter 100KB verkleinern',
      h1: 'PDF online auf 100KB komprimieren ohne Qualitätsverlust',
      metaDescription:
        'Komprimieren Sie ein PDF online kostenlos auf 100KB oder weniger. Ideal für Behörden-Portale, Bewerbungen und Stipendiums-Anträge. 100% privat, ohne Anmeldung.',
      keywords: [
        'pdf auf 100kb komprimieren',
        'pdf unter 100 kb verkleinern kostenlos',
        'pdf kleiner als 100kb online',
        'pdf 100kb verkleinern',
        'pdf komprimieren für bewerbung',
        'pdf auf 100kb reduzieren',
        'eingescanntes pdf auf 100kb komprimieren',
      ],
      lastUpdated: '23. April 2026',
      reviewedBy: 'PDFkoi Team',
      eyebrow: 'Komprimierung auf Zielgröße',
      intro: 'Erfüllen Sie strenge Upload-Limits, indem Sie PDFs unter 100KB verkleinern.',
      heroBody:
        'Jobportale, Bewerbungsportale von Universitäten und Behördenseiten für Visaanträge erzwingen häufig strenge 100KB-Limits pro Datei. Verkleinern Sie Ihr Dokument unter 100KB, während Text scharf und Unterschriften klar lesbar bleiben.',
      primaryCtaLabel: 'PDF-Kompressor öffnen',
      primaryCtaHref: '/tools/compress-pdf/',
      secondaryCtaLabel: 'Ohne Upload komprimieren',
      secondaryCtaHref: '/compress-pdf-without-upload/',
      sectionTitle: 'Warum PDFs unter 100KB komprimiert werden müssen',
      sectionBody: [
        'Viele Behördensysteme, Anmeldeformulare für den öffentlichen Dienst und Visumportale wurden mit konservativen Bandbreitenlimits gebaut und lehnen jede PDF-Datei über 100KB ab. Ein normaler Scan oder ein Smartphone-Foto erzeugt schnell ein PDF von 3MB bis 8MB und führt sofort zu Upload-Fehlern.',
        'Um unter 100KB zu bleiben, ist ein intelligentes Gleichgewicht nötig: hochauflösende Scans herunterrechnen und gleichzeitig kontrastreichen Text und Unterschriftslinien erhalten. PDFkoi erledigt das sicher in Ihrem Browser, ohne dass Sie vertrauliche Dokumente an Server von Drittanbietern weitergeben müssen.',
      ],
      evidenceTitle: 'Strenge Portal-Limits und Einreichungsanforderungen',
      evidenceItems: [
        {
          title: 'Strenge Obergrenzen bei Behörden- und Jobportalen',
          body: 'Viele Prüfungsausschüsse, Behördenportale und Visastellen lehnen Anhänge über 100KB oder 200KB strikt ab.',
          sourceLabel: 'Richtlinien zu Behördenanträgen',
          sourceHref: '/compress-pdf-to-100kb/',
        },
        {
          title: 'Adaptive Komprimierung erhält die Lesbarkeit',
          body: 'Die Balance aus DPI-Reduktion von Bildern und sauberer Erhaltung von Vektorfonts hält Formulare auch unter 100KB vollständig lesbar.',
          sourceLabel: 'PDFkoi Komprimierungs-Benchmarks',
          sourceHref: '/tools/compress-pdf/',
        },
        {
          title: 'Zero-Upload-Policy schützt persönliche Dokumente',
          body: 'Ausweisdokumente, Zeugnisse und Kontoauszüge sollten für eine einfache Größenänderung nie an Cloud-Dienste hochgeladen werden.',
          sourceLabel: 'PDFkoi Sicherheit & Datenschutz FAQ',
          sourceHref: '/faq#geo-upload-server',
        },
      ],
      stepsTitle: 'So komprimieren Sie ein PDF auf 100KB',
      steps: [
        {
          title: 'Dokument hochladen',
          description: 'Ziehen Sie Ihren Lebenslauf, Ausweiskopie oder gescanntes Zeugnis in den Kompressor.',
        },
        {
          title: 'Starke Komprimierung wählen',
          description: 'Wählen Sie starke Komprimierung, um eingebettete Grafiken zu optimieren und die Datei unter 100KB zu halten.',
        },
        {
          title: 'Herunterladen und Größe prüfen',
          description: 'Prüfen Sie, ob die heruntergeladene Datei unter 100KB liegt, und fahren Sie mit dem Upload fort.',
        },
      ],
      whyTitle: 'Warum PDFkoi die beste Wahl für 100KB-PDFs ist',
      whyPoints: [
        'Intelligente Komprimierungsalgorithmen für Dokumente und Formulare',
        'Keine Registrierung, keine Wasserzeichen, keine künstlichen Tageslimits',
        '100% private WebAssembly-Verarbeitung direkt im Browser',
      ],
      scenariosTitle: 'Häufige Anwendungsfälle',
      scenarios: [
        'Anmeldungen für Prüfungen und den öffentlichen Dienst mit PDF-Limits unter 100KB',
        'Stipendien- und Universitätsportale mit strengen Grenzen für Anhänge',
        'Unterlagen für Visa- und Passverlängerung sowie Adressnachweise',
      ],
      faqLinkLabel: 'Mehr zur Privatsphäre der Browser-basierten Komprimierung',
      faqLinkHref: '/faq#geo-upload-server',
      faqTitle: 'Häufige Fragen',
      faqs: [
        {
          question: 'Kann ich ein mehrseitiges PDF unter 100KB komprimieren?',
          answer:
            'Ja, abhängig vom Inhalt. Textlastige PDFs lassen sich leicht unter 100KB komprimieren. Bei bildlastigen Scans reduziert die starke Komprimierung die Grafiken, um das Limit zu erreichen.',
        },
        {
          question: 'Bleiben Unterschrift und Text bei 100KB lesbar?',
          answer:
            'Ja. Der Algorithmus optimiert die Farbtiefe und entfernt unnötige Metadaten, während die Schärfe von schwarz-weißem Text erhalten bleibt.',
        },
        {
          question: 'Ist es sicher, hier vertrauliche Ausweisdokumente zu komprimieren?',
          answer:
            'Absolut. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser. Ihr Pass, Ausweis oder Steuerdokumente werden niemals über das Internet gesendet.',
        },
        {
          question: 'Was, wenn meine Datei noch etwas über 100KB liegt?',
          answer:
            'Wenn ein gescanntes Dokument viele Seiten hat, können Sie vor dem Komprimieren mit den Werkzeugen Seiten löschen oder PDF zuschneiden leere Ränder und überflüssige Seiten entfernen.',
        },
      ],
      relatedTitle: 'Verwandte Komprimierungs-Workflows',
      relatedLinks: [
        {
          href: '/tools/compress-pdf/',
          label: 'Hauptwerkzeug zum PDF-Komprimieren',
          description: 'Stellen Sie Komprimierungsstufen direkt in der Hauptwerkstatt ein.',
        },
        {
          href: '/compress-pdf-for-email/',
          label: 'PDF für E-Mail komprimieren',
          description: 'Anleitungen und Workflows für die Anhang-Limits von Gmail und Outlook.',
        },
        {
          href: '/compress-pdf-without-upload/',
          label: 'Ohne Upload komprimieren',
          description: 'Datenschutz-fokussierte Anleitung zum serverlosen Verkleinern.',
        },
      ],
    },
  },
  ja: {
    'compress-pdf-to-100kb': {
      slug: 'compress-pdf-to-100kb',
      title: 'PDFを100KBに圧縮 無料オンラインツール | 100KB以下にファイルサイズ削減',
      h1: 'PDFを品質を落とさず100KB以下に圧縮',
      metaDescription:
        'PDFを100KB以下に無料でオンライン圧縮。公的な申請サイト、求人応募、奨学金登録のファイルサイズ制限対策に。100%プライベート、登録不要。',
      keywords: [
        'pdf 100kb 圧縮',
        'pdf 100kb以下',
        'pdf 100kbに圧縮 無料',
        'pdf サイズ 小さく 100kb',
        'pdf 容量 100kb 以下 にする',
        '申請 pdf 圧縮',
        'pdf 圧縮 100kb オンライン',
      ],
      lastUpdated: '2026年4月23日',
      reviewedBy: 'PDFkoi Team',
      eyebrow: '目標サイズへの圧縮',
      intro: '厳しいアップロード制限に対応し、PDFを100KB未満に軽量化。',
      heroBody:
        '求人サイトや大学の出願ポータル、出入国管理関連のサイトでは、1ファイル100KB未満という厳しい制限を設けていることがよくあります。テキストの鮮明さと署名の視認性を保ったまま、ファイルサイズを100KB以下に削減できます。',
      primaryCtaLabel: 'PDF圧縮ツールを開く',
      primaryCtaHref: '/tools/compress-pdf/',
      secondaryCtaLabel: 'アップロード不要で圧縮',
      secondaryCtaHref: '/compress-pdf-without-upload/',
      sectionTitle: 'PDFを100KB以下に圧縮する必要がある理由',
      sectionBody: [
        '多くの公的システム、公務員試験の申請フォーム、ビザ申請ポータルは帯域幅の制約から100KB超のPDFを受け付けません。通常のスキャナーやスマートフォンの写真なら、3MB〜8MBのPDFが簡単にできてしまい、アップロードエラーが即座に発生します。',
        '100KB未満に収めるには、高解像度の背景スキャンをダウンサンプリングしながら、コントラストの高いテキストや署名ラインを保持する賢いバランスが必要です。PDFkoiはこれをブラウザ内で安全に行うため、機密文書を第三者のサーバーに渡す必要がありません。',
      ],
      evidenceTitle: '厳格なポータル制限と提出要件',
      evidenceItems: [
        {
          title: '公的・採用ポータルの厳しい上限',
          body: '多くの試験機関、行政ポータル、ビザ当局は100KBまたは200KBを超える添付ファイルを厳格に拒否します。',
          sourceLabel: '公的申請ガイドライン',
          sourceHref: '/compress-pdf-to-100kb/',
        },
        {
          title: '適応的圧縮が可読性を維持',
          body: '画像DPIのダウンスケーリングとベクターフォントの保持のバランスにより、100KB未満でもフォームは完全に読める状態を保ちます。',
          sourceLabel: 'PDFkoi 圧縮ベンチマーク',
          sourceHref: '/tools/compress-pdf/',
        },
        {
          title: 'ゼロアップロード方針が個人情報を保護',
          body: '身分証明書、卒業証書、銀行取引明細書などのファイルサイズ変更のために、リモートのクラウドサービスへアップロードすべきではありません。',
          sourceLabel: 'PDFkoi セキュリティとプライバシーFAQ',
          sourceHref: '/faq#geo-upload-server',
        },
      ],
      stepsTitle: 'PDFを100KBに圧縮する方法',
      steps: [
        {
          title: 'ドキュメントをアップロード',
          description: '履歴書、身分証明書、スキャンした証明書を圧縮ツールにドラッグ＆ドロップします。',
        },
        {
          title: '高圧縮モードを選択',
          description: '強い圧縮を選択して埋め込み画像を最適化し、ファイルを100KB未満にします。',
        },
        {
          title: 'ダウンロードしてサイズを確認',
          description: 'ダウンロードしたファイルが100KB未満になっていることを確認し、ポータルにアップロードします。',
        },
      ],
      whyTitle: 'PDFkoiでPDFを100KBに縮小する理由',
      whyPoints: [
        '文書やフォームに最適化されたスマートな圧縮アルゴリズム',
        '登録不要・透かしなし・不当な1日上限なし',
        'WebAssemblyによる100%プライベートなブラウザ内処理',
      ],
      scenariosTitle: 'よくある利用シーン',
      scenarios: [
        '写真付き証明PDFを100KB未満に求める公務員試験・国家試験の登録',
        '添付ファイル上限が厳しい奨学金・大学の出願ポータル',
        'ビザ・パスポート更新の添付書類や住所証明',
      ],
      faqLinkLabel: 'ブラウザ内圧縮のプライバシーについて詳しく',
      faqLinkHref: '/faq#geo-upload-server',
      faqTitle: 'よくある質問',
      faqs: [
        {
          question: '複数ページのPDFを100KB未満に圧縮できますか？',
          answer:
            'はい。元の文書の内容によります。テキスト中心のPDFは簡単に100KB未満に圧縮できます。画像の多いスキャン文書は、強い圧縮でグラフィックをダウンサンプリングして制限内に収めます。',
        },
        {
          question: '100KBでも署名やテキストは読めますか？',
          answer:
            'はい。圧縮アルゴリズムは色深度を最適化し、不要なメタデータを削除しながら、白黒テキストの鮮明さを保ちます。',
        },
        {
          question: '機密性の高い公的証明書を圧縮しても安全ですか？',
          answer:
            '完全に安全です。処理はすべてブラウザ内でローカルに行われます。パスポート、身分証明書、税務書類がインターネット上に送信されることは一切ありません。',
        },
        {
          question: 'それでも100KBを少し超えてしまう場合は？',
          answer:
            'スキャン文書のページ数が多い場合は、圧縮前に「ページ削除」や「PDFトリミング」ツールで余白や不要なページを取り除くと、サイズをさらに削減できます。',
        },
      ],
      relatedTitle: '関連する圧縮ワークフロー',
      relatedLinks: [
        {
          href: '/tools/compress-pdf/',
          label: 'メインPDF圧縮ツール',
          description: 'メインの圧縮ワークスペースで圧縮レベルを直接調整できます。',
        },
        {
          href: '/compress-pdf-for-email/',
          label: 'メール用にPDFを圧縮',
          description: 'GmailやOutlookの添付制限を満たすためのガイドとワークフロー。',
        },
        {
          href: '/compress-pdf-without-upload/',
          label: 'アップロード不要で圧縮',
          description: 'サーバーにファイルを送らない圧縮方法を解説するプライバシー重視ガイド。',
        },
      ],
    },
  },
};

export function hasLocalizedLandingPage(locale: Locale, slug: LandingPageSlug): boolean {
  return Boolean(localizedLandingPages[locale]?.[slug]);
}

export function getLandingPageIndexableLocales(slug: LandingPageSlug): Locale[] {
  const localizedLocales = locales.filter((locale) => hasLocalizedLandingPage(locale, slug));
  return [defaultLocale, ...localizedLocales];
}

export function getLandingPageContent(slug: LandingPageSlug, locale?: Locale): LandingPageContent {
  if (locale) {
    const override = localizedLandingPages[locale]?.[slug];
    if (override) {
      return override;
    }
  }
  return landingPages[slug];
}

