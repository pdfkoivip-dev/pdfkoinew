/**
 * Legal pages (privacy / terms / cookies) translation data.
 * Injects top-level namespaces into messages/*.json.
 * English is the source of truth; other locales are full translations.
 */
'use strict';

const path = require('path');
const fs = require('fs');

const MESSAGES_DIR = path.resolve(__dirname, '..', 'messages');
const LOCALES = ['en', 'ja', 'ko', 'es', 'fr', 'de', 'zh', 'zh-TW', 'pt'];

// ---------------------------------------------------------------------------
// English source (also serves as fallback + en.json content)
// ---------------------------------------------------------------------------
const en = {
  privacyPage: {
    metaTitle: 'Privacy Policy',
    heroTitle: 'Privacy Policy',
    heroSubtitle: 'Your privacy is our top priority. {brand} is designed from the ground up to protect your data.',
    highlights: {
      noUpload: { title: 'No Server Uploads', description: 'Your files are never uploaded to any server. All processing happens locally in your browser.' },
      localProcessing: { title: 'Local Processing', description: 'PDF operations are performed using JavaScript and WebAssembly directly on your device.' },
      cleanup: { title: 'Automatic Cleanup', description: 'All file data is automatically cleared when you close the browser tab or navigate away.' },
      noTracking: { title: 'No Tracking', description: "We don't track your file contents or personal information. Your documents remain private." },
    },
    lastUpdated: 'Last updated: July 2026',
    badgeTitle: 'Your documents are processed securely in your browser',
    sections: {
      intro: { heading: '1. Introduction', body: '{brand} ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our PDF tools.' },
      howItWorks: {
        heading: '2. How Our Service Works',
        body: '{brand} is a client-side application. This means:',
        items: [
          'All PDF processing happens directly in your web browser',
          'Your files are never uploaded to our servers or any third-party servers',
          'We cannot see, access, or store your documents',
          'Your files remain on your device at all times',
        ],
      },
      infoCollected: {
        heading: '3. Information We Collect',
        filesHeading: '3.1 Your Files',
        filesBody: 'We do not collect your files. When you use our PDF tools, your files are processed entirely within your browser. They are never transmitted to our servers.',
        usageHeading: '3.2 Usage Data',
        usageBody: 'We may collect anonymous usage statistics to improve our service, such as:',
        usageItems: [
          'Which tools are most popular',
          'General geographic region (country level)',
          'Browser type and version',
          'Device type (desktop, mobile, tablet)',
        ],
        usageFooter: 'This data is aggregated and anonymized. It cannot be used to identify you personally.',
      },
      localStorage: {
        heading: '4. Local Storage',
        body: "{brand} may use your browser's local storage to:",
        items: [
          'Remember your language preference',
          'Store your recent tool history',
          'Save work-in-progress for interrupted sessions',
        ],
        footer: 'This data is stored only on your device and is not transmitted to us.',
      },
      cookies: {
        heading: '5. Cookies',
        body: 'We use the following types of cookies:',
        essential: 'Essential cookies',
        essentialDesc: 'Required for the website to function properly',
        preference: 'Preference cookies',
        preferenceDesc: 'Remember your settings like language preference',
        advertising: 'Advertising cookies',
        advertisingDesc: 'Used by Google AdSense and its partners to display relevant advertisements (see Advertising section below)',
      },
      advertising: {
        heading: '6. Advertising',
        body1: 'We use Google AdSense to display advertisements on our website. Google AdSense and its advertising partners may use cookies and web beacons to serve ads based on your prior visits to this website and other websites on the Internet.',
        body2: 'These advertising cookies allow Google and its partners to show you ads based on your interests. You can opt out of personalized advertising by visiting www.aboutads.info/choices/ or Google Ads Settings.',
        important: 'Important',
        importantBody: 'Your PDF files are never shared with Google or any advertising network. All file processing happens locally in your browser. Advertising cookies only relate to ad delivery and do not have access to your documents.',
      },
      thirdParty: {
        heading: '7. Third-Party Services',
        body: 'Beyond the advertising services mentioned above, {brand} does not share your file data with any third parties. We do not use:',
        items: [
          'Third-party analytics that track individual users',
          'Social media tracking pixels',
          'External file processing services',
        ],
      },
      security: {
        heading: '8. Data Security',
        body: "Since your files never leave your device, they are protected by your own device's security measures. We recommend:",
        items: [
          'Using an up-to-date browser',
          'Keeping your operating system updated',
          'Using secure networks when handling sensitive documents',
        ],
      },
      rights: { heading: '9. Your Rights', body: "Since we don't collect personal data, there is no personal data to access, correct, or delete. You can clear your browser's local storage at any time to remove any preferences stored by {brand}." },
      children: { heading: "10. Children's Privacy", body: '{brand} is not directed at children under 13. We do not knowingly collect any information from children.' },
      changes: { heading: '11. Changes to This Policy', body: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.' },
      contact: { heading: '12. Contact Us', body: 'If you have any questions about this Privacy Policy, please contact us through our contact page.' },
    },
  },

  termsPage: {
    metaTitle: 'Terms of Service',
    heroTitle: 'Terms of Service',
    heroSubtitle: 'Please read these terms carefully before using {brand}.',
    highlights: {
      clientSide: { title: '100% Client-Side', description: 'Your files are processed locally in your browser and never uploaded to any server.' },
      privacyFirst: { title: 'Privacy First', description: 'We do not access, store, or transmit your documents. Your data stays on your device.' },
      free: { title: 'Free to Use', description: 'All PDF tools are free. No registration required, no hidden fees, no premium tiers.' },
      fairUse: { title: 'Fair Use', description: 'We ask that you use our service responsibly and not for any illegal purposes.' },
    },
    lastUpdated: 'Last updated: March 24, 2026',
    contactBadgeTitle: 'Questions?',
    contactBadgeDesc: 'Contact us if you have any questions about these Terms',
    sections: {
      acceptance: { heading: '1. Acceptance of Terms', body: 'By accessing and using {brand} ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.' },
      serviceDesc: { heading: '2. Service Description', body: '{brand} is a free, browser-based suite of PDF tools that allows users to merge, split, compress, convert, edit, and perform various operations on PDF files. The Service processes all files entirely client-side using WebAssembly technology.' },
      privacy: {
        heading: '3. Privacy & Data Handling',
        processingHeading: '3.1 Client-Side Processing',
        processingItems: [
          'All file processing occurs locally in your browser. Your documents are never uploaded to any external server.',
          'We do not have access to, store, or transmit your files.',
          'Once you close or refresh the browser tab, your data is permanently deleted from memory.',
        ],
        collectedHeading: '3.2 Information We Collect',
        collectedBody: 'We may collect minimal usage data (e.g., which tools are used) for analytics purposes. We do not collect, store, or process the content of your PDF files.',
        cookiesHeading: '3.3 Cookies',
        cookiesBody: 'We use essential cookies to maintain session functionality. No third-party tracking or advertising cookies are used.',
      },
      responsibilities: {
        heading: '4. User Responsibilities',
        body: 'You agree not to:',
        items: [
          'Use the Service for any illegal purpose',
          'Upload or process files containing malicious content',
          'Attempt to reverse engineer or exploit the Service',
          'Use automated tools to access the Service beyond normal human usage',
        ],
      },
      ip: {
        heading: '5. Intellectual Property',
        items: [
          '{brand}: The Service, including its design, code, and branding, is the property of {brand} and is licensed under AGPL-3.0.',
          'Your Files: You retain full ownership of any files you process through the Service.',
          'Third-Party Libraries: The Service uses open-source libraries (PDF.js, pdf-lib, PyMuPDF) under their respective licenses.',
        ],
      },
      disclaimer: {
        heading: '6. Disclaimer of Warranties',
        body: 'THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DO NOT GUARANTEE:',
        items: [
          'The Service will be uninterrupted or error-free',
          'The results from using the Service will be accurate or reliable',
          'The quality of any products or services obtained through the Service will meet your expectations',
        ],
      },
      liability: { heading: '7. Limitation of Liability', body: 'IN NO EVENT SHALL {brand} BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.' },
      changes: {
        heading: '8. Service Changes',
        body: 'We reserve the right to:',
        items: [
          'Modify or discontinue any part of the Service at any time',
          'Update these Terms at any time. Continued use constitutes acceptance of changes.',
        ],
      },
      beta: { heading: '9. Beta Features', body: 'Certain features (e.g., Workflow Editor) may be labeled as "Beta" or "Early Development." These features may be unstable, and we disclaim liability for issues arising from their use.' },
      governingLaw: { heading: '10. Governing Law', body: 'These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions.' },
      contact: { heading: '11. Contact', body: 'For questions about these Terms, please contact us through our {contactLink} or email: support@pdfkoi.com', contactLink: 'contact page' },
    },
  },

  cookiesPage: {
    metaTitle: 'Cookies Policy',
    heroTitle: 'Cookies Policy',
    heroSubtitle: 'This page explains how {brand} uses cookies and browser storage to support essential site features.',
    highlights: {
      minimal: { title: 'Minimal usage', description: 'We aim to use only the storage needed to make the site work and remember your preferences.' },
      noTracking: { title: 'No ad tracking', description: 'This policy does not permit advertising cookies or cross-site tracking for PDF content.' },
      onDevice: { title: 'Stored on your device', description: 'Preference data is typically stored in your own browser, not uploaded with your files.' },
      privacyFirst: { title: 'Privacy-first design', description: 'PDF processing stays in your browser, which reduces the need for server-side identifiers.' },
    },
    lastUpdated: 'Last updated: March 28, 2026',
    table: {
      item: 'Item',
      purpose: 'Purpose',
      technology: 'Technology',
      duration: 'Duration',
      rows: {
        language: { name: 'Language preference', purpose: 'Remembers the language you selected so the site opens in your preferred locale.', storage: 'Local storage', duration: 'Until you clear browser data' },
        recent: { name: 'Recent files and saved work', purpose: 'Keeps recent activity and in-progress items on your own device for convenience.', storage: 'Local storage', duration: 'Until you clear browser data' },
        state: { name: 'Essential site state', purpose: 'Supports core interface behavior such as tool state, dialogs, and user preferences.', storage: 'Session storage or local storage', duration: 'Session or until you clear browser data' },
      },
    },
    sections: {
      covers: { heading: '1. What this policy covers', p1: 'This Cookies Policy explains how {brand} uses cookies, local storage, session storage, and similar browser technologies when you visit the site or use our PDF tools.', p2: 'Because our product is designed to process files in the browser, we try to keep storage usage limited to essential functionality, preferences, and product usability.' },
      means: { heading: '2. What we mean by cookies and similar technologies', p1: 'Cookies are small text files placed in your browser. Similar technologies include local storage, session storage, and browser-managed preference data. In practice, some site features may rely on browser storage instead of classic cookies.', p2: 'For clarity, this policy uses the phrase "cookies and browser storage" to cover all of these technologies together unless a section says otherwise.' },
      uses: { heading: '3. How {brand} uses cookies and browser storage' },
      categories: {
        heading: '4. Categories of usage',
        essential: { heading: 'Essential functionality', body: 'These items help the site operate reliably, keep interface state consistent, and support features that users reasonably expect from a browser-based tool.' },
        preference: { heading: 'Preference storage', body: 'Preference storage helps remember settings such as language choice or other non-sensitive product preferences so that you do not need to reconfigure the site every visit.' },
        local: { heading: 'Local productivity features', body: 'Some tools may preserve recent actions or in-progress information on your own device to improve usability after refreshes or interrupted sessions.' },
      },
      notUsed: {
        heading: '5. What we do not use these technologies for',
        items: [
          'We do not use cookies to upload or inspect the contents of your PDF files.',
          'We do not use advertising cookies to build behavioral ad profiles from your document activity.',
          "We do not rely on cookies to move your files to third-party PDF processing services.",
          'We do not claim a right to use browser storage to read documents outside the tools you choose to run.',
        ],
      },
      thirdParty: { heading: '6. Third-party services', p1: 'If the site links out to services such as GitHub or X, those platforms may set their own cookies when you visit them. Their cookie behavior is governed by their own policies, not this page.', p2: 'This policy covers cookies and browser storage used for the {brand} site experience itself.' },
      control: {
        heading: '7. How to control or delete cookies and local storage',
        p1: 'You can control cookies and browser storage through your browser settings.',
        items: [
          'Delete existing cookies and site storage from your browser privacy settings.',
          'Block some or all cookies if your browser offers that option.',
          'Clear local storage or site data for {brand} if you want to remove remembered preferences.',
        ],
        p2: 'Please note that disabling all cookies or site storage may affect site functionality, including your saved preferences and convenience features.',
      },
      changes: { heading: '8. Changes to this Cookies Policy', body: 'We may update this policy from time to time to reflect changes in site functionality, legal requirements, or product design. When we do, we will update the date shown at the top of this page.' },
      contact: { heading: '9. Contact', body: 'If you have questions about this policy, please use the Contact page linked in the site footer.' },
    },
    summary: { heading: 'Practical summary', body: '{brand} is built to do most of its work in the browser. That means the site generally needs only limited storage for preferences and usability, rather than invasive tracking infrastructure.', note: 'Review your browser site settings any time if you want to clear saved preferences.' },
  },
};

// ---------------------------------------------------------------------------
// Full translations (8 non-English locales)
// ---------------------------------------------------------------------------
const translations = {
  ja: {
    privacyPage: {
      metaTitle: 'プライバシーポリシー',
      heroTitle: 'プライバシーポリシー',
      heroSubtitle: 'お客様のプライバシーは当社の最優先事項です。{brand}は、お客様のデータを保護することを第一に設計されています。',
      highlights: {
        noUpload: { title: 'サーバーへアップロードしません', description: 'ファイルがサーバーにアップロードされることは一切ありません。すべての処理はお使いのブラウザ内で行われます。' },
        localProcessing: { title: 'ローカル処理', description: 'PDFの操作は、お使いのデバイス上でJavaScriptとWebAssemblyを使用して直接実行されます。' },
        cleanup: { title: '自動クリーンアップ', description: 'ブラウザのタブを閉じるか、ページを離れると、すべてのファイルデータが自動的に消去されます。' },
        noTracking: { title: 'トラッキングなし', description: 'ファイルの内容や個人情報を追跡することはありません。ドキュメントはプライベートなまま保たれます。' },
      },
      lastUpdated: '最終更新日：2026年7月',
      badgeTitle: 'ドキュメントはブラウザ内で安全に処理されます',
      sections: {
        intro: { heading: '1. はじめに', body: '{brand}（以下「当社」）は、お客様のプライバシー保護に努めています。本プライバシーポリシーでは、当社のPDFツールをご利用いただく際の情報の取り扱いについて説明します。' },
        howItWorks: { heading: '2. 当サービスの仕組み', body: '{brand}はクライアントサイドのアプリケーションです。つまり：', items: ['すべてのPDF処理はお使いのブラウザ内で直接行われます', 'ファイルが当社のサーバーや第三者のサーバーにアップロードされることはありません', '当社がお客様のドキュメントを閲覧・アクセス・保存することはできません', 'ファイルは常にお客様のデバイス上に保持されます'] },
        infoCollected: { heading: '3. 収集する情報', filesHeading: '3.1 お客様のファイル', filesBody: '当社はお客様のファイルを収集しません。PDFツールをご利用の際、ファイルは完全にブラウザ内で処理され、当社のサーバーに送信されることはありません。', usageHeading: '3.2 利用データ', usageBody: 'サービス改善のため、匿名の利用統計を収集する場合があります。例：', usageItems: ['どのツールが人気か', 'おおよその地理的地域（国レベル）', 'ブラウザの種類とバージョン', 'デバイスの種類（デスクトップ、モバイル、タブレット）'], usageFooter: 'このデータは集計・匿名化されており、個人を特定することはできません。' },
        localStorage: { heading: '4. ローカルストレージ', body: '{brand}は、以下の目的でお使いのブラウザのローカルストレージを使用する場合があります：', items: ['言語設定の記憶', '最近使用したツール履歴の保存', '中断されたセッションの作業途中データの保存'], footer: 'このデータはお客様のデバイス上にのみ保存され、当社には送信されません。' },
        cookies: { heading: '5. Cookie', body: '当社は以下の種類のCookieを使用します：', essential: '必須Cookie', essentialDesc: 'ウェブサイトが正常に機能するために必要です', preference: '設定Cookie', preferenceDesc: '言語設定などの設定を記憶します', advertising: '広告Cookie', advertisingDesc: 'Google AdSenseとそのパートナーが関連する広告を表示するために使用します（下記の「広告」セクション参照）' },
        advertising: { heading: '6. 広告', body1: '当社はウェブサイトに広告を表示するためにGoogle AdSenseを使用しています。Google AdSenseとその広告パートナーは、このウェブサイトやインターネット上の他のウェブサイトへの過去の訪問に基づいて広告を配信するために、Cookieやウェブビーコンを使用する場合があります。', body2: 'これらの広告Cookieにより、Googleとそのパートナーはお客様の興味に基づいた広告を表示できます。パーソナライズ広告は、www.aboutads.info/choices/ またはGoogle広告設定からオプトアウトできます。', important: '重要', importantBody: 'お客様のPDFファイルがGoogleや広告ネットワークと共有されることは一切ありません。すべてのファイル処理はブラウザ内で行われます。広告Cookieは広告配信にのみ関係し、お客様のドキュメントにはアクセスしません。' },
        thirdParty: { heading: '7. 第三者サービス', body: '上記の広告サービスを除き、{brand}はお客様のファイルデータを第三者と共有しません。以下のものは使用しません：', items: ['個々のユーザーを追跡する第三者アナリティクス', 'ソーシャルメディアのトラッキングピクセル', '外部のファイル処理サービス'] },
        security: { heading: '8. データセキュリティ', body: 'ファイルがデバイスから出ることはないため、お客様のデバイス自身のセキュリティ対策によって保護されます。以下を推奨します：', items: ['最新のブラウザを使用する', 'OSを最新の状態に保つ', '機密文書を扱う際は安全なネットワークを使用する'] },
        rights: { heading: '9. お客様の権利', body: '当社は個人データを収集しないため、アクセス・訂正・削除すべき個人データは存在しません。ブラウザのローカルストレージをいつでも消去して、{brand}が保存した設定を削除できます。' },
        children: { heading: '10. 子どものプライバシー', body: '{brand}は13歳未満の子どもを対象としていません。当社が意図的に子どもから情報を収集することはありません。' },
        changes: { heading: '11. 本ポリシーの変更', body: '当社は本プライバシーポリシーを随時更新する場合があります。変更があった場合は、本ページに新しいプライバシーポリシーを掲載し、「最終更新日」を更新してお知らせします。' },
        contact: { heading: '12. お問い合わせ', body: '本プライバシーポリシーについてご不明な点がある場合は、お問い合わせページからご連絡ください。' },
      },
    },
    termsPage: {
      metaTitle: '利用規約',
      heroTitle: '利用規約',
      heroSubtitle: '{brand}をご利用になる前に、本規約をよくお読みください。',
      highlights: {
        clientSide: { title: '100%クライアントサイド', description: 'ファイルはブラウザ内でローカルに処理され、サーバーにアップロードされることはありません。' },
        privacyFirst: { title: 'プライバシー最優先', description: '当社はお客様のドキュメントにアクセス・保存・送信しません。データはお客様のデバイス上に残ります。' },
        free: { title: '無料で利用可能', description: 'すべてのPDFツールは無料です。登録不要、隠れた料金なし、プレミアム階層なし。' },
        fairUse: { title: '公正な利用', description: '当社は、お客様が責任を持って本サービスを利用し、違法な目的に使用しないことをお願いします。' },
      },
      lastUpdated: '最終更新日：2026年3月24日',
      contactBadgeTitle: 'ご質問がありますか？',
      contactBadgeDesc: '本規約についてご不明な点がある場合はお問い合わせください',
      sections: {
        acceptance: { heading: '1. 規約への同意', body: '{brand}（以下「本サービス」）にアクセスし利用することにより、お客様は本利用規約に拘束されることに同意したものとみなされます。本規約に同意しない場合は、本サービスを利用しないでください。' },
        serviceDesc: { heading: '2. サービスの説明', body: '{brand}は、ユーザーがPDFファイルの結合、分割、圧縮、変換、編集、およびさまざまな操作を実行できる、ブラウザベースの無料PDFツール群です。本サービスは、WebAssembly技術を使用してすべてのファイルを完全にクライアントサイドで処理します。' },
        privacy: { heading: '3. プライバシーとデータの取り扱い', processingHeading: '3.1 クライアントサイド処理', processingItems: ['すべてのファイル処理はブラウザ内でローカルに行われます。ドキュメントが外部サーバーにアップロードされることはありません。', '当社はお客様のファイルにアクセス、保存、送信しません。', 'ブラウザのタブを閉じるか更新すると、データはメモリから完全に削除されます。'], collectedHeading: '3.2 収集する情報', collectedBody: '分析目的で最小限の利用データ（例：どのツールが使用されたか）を収集する場合があります。お客様のPDFファイルの内容を収集・保存・処理することはありません。', cookiesHeading: '3.3 Cookie', cookiesBody: 'セッション機能を維持するために必須Cookieを使用します。第三者のトラッキングCookieや広告Cookieは使用しません。' },
        responsibilities: { heading: '4. ユーザーの責任', body: 'お客様は以下を行わないことに同意するものとします：', items: ['本サービスを違法な目的で使用すること', '悪意のあるコンテンツを含むファイルをアップロードまたは処理すること', '本サービスをリバースエンジニアリングまたは悪用しようとすること', '通常の人間の利用を超えて本サービスにアクセスするために自動化ツールを使用すること'] },
        ip: { heading: '5. 知的財産', items: ['{brand}：本サービスは、そのデザイン、コード、ブランディングを含め、{brand}の財産であり、AGPL-3.0の下でライセンスされています。', 'お客様のファイル：本サービスで処理したファイルの完全な所有権はお客様が保持します。', 'サードパーティライブラリ：本サービスは、それぞれのライセンスの下でオープンソースライブラリ（PDF.js、pdf-lib、PyMuPDF）を使用しています。'] },
        disclaimer: { heading: '6. 保証の否認', body: '本サービスは「現状有姿」で提供され、いかなる種類の保証もありません。以下を保証するものではありません：', items: ['本サービスが中断されず、エラーがないこと', '本サービスの利用結果が正確または信頼できること', '本サービスを通じて取得した製品やサービスの品質が期待に沿うこと'] },
        liability: { heading: '7. 責任の制限', body: 'いかなる場合も、{brand}は、本サービスの利用に関連して生じる間接的、偶発的、特別、または結果的な損害について責任を負いません。' },
        changes: { heading: '8. サービスの変更', body: '当社は以下の権利を留保します：', items: ['いつでも本サービスの一部を変更または中止すること', 'いつでも本規約を更新すること。継続的な利用は変更への同意を意味します。'] },
        beta: { heading: '9. ベータ機能', body: '一部の機能（例：ワークフローエディタ）は「ベータ」または「開発初期」と表示される場合があります。これらの機能は不安定な場合があり、その利用から生じる問題について当社は責任を負いません。' },
        governingLaw: { heading: '10. 準拠法', body: '本規約は、抵触法の規定にかかわらず、適用される法律に準拠して解釈されます。' },
        contact: { heading: '11. お問い合わせ', body: '本規約についてのご質問は、{contactLink}から、または support@pdfkoi.com までメールでお問い合わせください。', contactLink: 'お問い合わせページ' },
      },
    },
    cookiesPage: {
      metaTitle: 'Cookieポリシー',
      heroTitle: 'Cookieポリシー',
      heroSubtitle: 'このページでは、{brand}が必須のサイト機能をサポートするためにCookieとブラウザストレージをどのように使用するかを説明します。',
      highlights: {
        minimal: { title: '最小限の使用', description: 'サイトの動作と設定の記憶に必要なストレージのみを使用するよう努めています。' },
        noTracking: { title: '広告トラッキングなし', description: '本ポリシーは、PDFコンテンツに対する広告Cookieやクロスサイトトラッキングを許可しません。' },
        onDevice: { title: 'デバイス上に保存', description: '設定データは通常お客様のブラウザ内に保存され、ファイルと一緒にアップロードされることはありません。' },
        privacyFirst: { title: 'プライバシー最優先の設計', description: 'PDF処理はブラウザ内で行われるため、サーバー側の識別子の必要性が低減されます。' },
      },
      lastUpdated: '最終更新日：2026年3月28日',
      table: {
        item: '項目', purpose: '目的', technology: '技術', duration: '期間',
        rows: {
          language: { name: '言語設定', purpose: '選択した言語を記憶し、サイトが希望のロケールで開くようにします。', storage: 'ローカルストレージ', duration: 'ブラウザデータを消去するまで' },
          recent: { name: '最近のファイルと保存した作業', purpose: '利便性のため、最近のアクティビティと進行中の項目をデバイス上に保持します。', storage: 'ローカルストレージ', duration: 'ブラウザデータを消去するまで' },
          state: { name: '必須のサイト状態', purpose: 'ツールの状態、ダイアログ、ユーザー設定など、コアなインターフェース動作をサポートします。', storage: 'セッションストレージまたはローカルストレージ', duration: 'セッション中、またはブラウザデータを消去するまで' },
        },
      },
      sections: {
        covers: { heading: '1. 本ポリシーの対象', p1: '本Cookieポリシーは、サイトを訪問したりPDFツールを使用する際に、{brand}がCookie、ローカルストレージ、セッションストレージ、および類似のブラウザ技術をどのように使用するかを説明します。', p2: '当社の製品はブラウザ内でファイルを処理するように設計されているため、ストレージの使用を必須機能、設定、製品の使いやすさに限定するよう努めています。' },
        means: { heading: '2. Cookieと類似技術の意味', p1: 'Cookieはブラウザに配置される小さなテキストファイルです。類似の技術には、ローカルストレージ、セッションストレージ、ブラウザが管理する設定データが含まれます。実際には、一部のサイト機能は従来のCookieではなくブラウザストレージに依存する場合があります。', p2: '明確にするため、本ポリシーでは、別途記載がない限り、これらの技術をすべて「Cookieとブラウザストレージ」という表現で総称します。' },
        uses: { heading: '3. {brand}によるCookieとブラウザストレージの使用方法' },
        categories: {
          heading: '4. 使用のカテゴリ',
          essential: { heading: '必須機能', body: 'これらの項目は、サイトの信頼性の高い動作、インターフェース状態の一貫性の維持、ブラウザベースのツールにユーザーが当然期待する機能のサポートに役立ちます。' },
          preference: { heading: '設定ストレージ', body: '設定ストレージは、言語の選択などの設定を記憶し、毎回サイトを再設定する必要がないようにします。' },
          local: { heading: 'ローカル生産性機能', body: '一部のツールは、更新後や中断されたセッション後の使いやすさを向上させるため、最近の操作や進行中の情報をデバイス上に保持する場合があります。' },
        },
        notUsed: { heading: '5. これらの技術を使用しない目的', items: ['PDFファイルの内容をアップロードまたは検査するためにCookieを使用しません。', 'ドキュメントのアクティビティから行動広告プロファイルを構築するために広告Cookieを使用しません。', 'ファイルを第三者のPDF処理サービスに移動するためにCookieに依存しません。', 'お客様が実行を選択したツールの外でドキュメントを読み取るためにブラウザストレージを使用する権利を主張しません。'] },
        thirdParty: { heading: '6. 第三者サービス', p1: 'サイトがGitHubやXなどのサービスにリンクしている場合、それらのプラットフォームは訪問時に独自のCookieを設定する場合があります。それらのCookieの動作は、本ページではなく各社のポリシーに準拠します。', p2: '本ポリシーは、{brand}のサイト体験自体に使用されるCookieとブラウザストレージを対象としています。' },
        control: { heading: '7. Cookieとローカルストレージの制御・削除方法', p1: 'ブラウザの設定からCookieとブラウザストレージを制御できます。', items: ['ブラウザのプライバシー設定から既存のCookieとサイトストレージを削除します。', 'ブラウザにそのオプションがある場合は、一部またはすべてのCookieをブロックします。', '記憶された設定を削除したい場合は、{brand}のローカルストレージまたはサイトデータを消去します。'], p2: 'すべてのCookieまたはサイトストレージを無効にすると、保存された設定や利便性機能を含め、サイトの機能に影響する場合があることにご注意ください。' },
        changes: { heading: '8. 本Cookieポリシーの変更', body: 'サイト機能、法的要件、または製品設計の変更を反映するため、本ポリシーを随時更新する場合があります。更新時は、本ページ上部の日付を更新します。' },
        contact: { heading: '9. お問い合わせ', body: '本ポリシーについてご質問がある場合は、サイトのフッターにリンクされているお問い合わせページをご利用ください。' },
      },
      summary: { heading: '実用的なまとめ', body: '{brand}は作業の大半をブラウザ内で行うように構築されています。つまり、サイトは通常、侵襲的なトラッキング基盤ではなく、設定と使いやすさのための限られたストレージのみを必要とします。', note: '保存された設定を消去したい場合は、いつでもブラウザのサイト設定を確認してください。' },
    },
  },

  ko: {
    privacyPage: {
      metaTitle: '개인정보 처리방침',
      heroTitle: '개인정보 처리방침',
      heroSubtitle: '고객님의 개인정보 보호는 저희의 최우선 과제입니다. {brand}은 데이터를 보호하도록 처음부터 설계되었습니다.',
      highlights: {
        noUpload: { title: '서버 업로드 없음', description: '파일이 어떤 서버에도 업로드되지 않습니다. 모든 처리는 브라우저에서 로컬로 이루어집니다.' },
        localProcessing: { title: '로컬 처리', description: 'PDF 작업은 기기에서 JavaScript와 WebAssembly를 사용하여 직접 수행됩니다.' },
        cleanup: { title: '자동 정리', description: '브라우저 탭을 닫거나 다른 페이지로 이동하면 모든 파일 데이터가 자동으로 삭제됩니다.' },
        noTracking: { title: '추적 없음', description: '파일 내용이나 개인정보를 추적하지 않습니다. 문서는 비공개로 유지됩니다.' },
      },
      lastUpdated: '최종 업데이트: 2026년 7월',
      badgeTitle: '문서는 브라우저에서 안전하게 처리됩니다',
      sections: {
        intro: { heading: '1. 소개', body: '{brand}(이하 "저희")는 고객님의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 본 개인정보 처리방침은 PDF 도구를 사용할 때 정보를 어떻게 처리하는지 설명합니다.' },
        howItWorks: { heading: '2. 서비스 작동 방식', body: '{brand}은 클라이언트 측 애플리케이션입니다. 즉:', items: ['모든 PDF 처리는 웹 브라우저에서 직접 이루어집니다', '파일이 저희 서버나 타사 서버에 업로드되지 않습니다', '저희는 고객님의 문서를 보거나 접근하거나 저장할 수 없습니다', '파일은 항상 기기에 남아 있습니다'] },
        infoCollected: { heading: '3. 수집하는 정보', filesHeading: '3.1 고객님의 파일', filesBody: '저희는 고객님의 파일을 수집하지 않습니다. PDF 도구를 사용할 때 파일은 완전히 브라우저 내에서 처리되며 저희 서버로 전송되지 않습니다.', usageHeading: '3.2 사용 데이터', usageBody: '서비스 개선을 위해 익명의 사용 통계를 수집할 수 있습니다. 예:', usageItems: ['가장 인기 있는 도구', '일반적인 지리적 지역(국가 수준)', '브라우저 종류 및 버전', '기기 유형(데스크톱, 모바일, 태블릿)'], usageFooter: '이 데이터는 집계되고 익명화되므로 개인을 식별하는 데 사용할 수 없습니다.' },
        localStorage: { heading: '4. 로컬 저장소', body: '{brand}은 다음을 위해 브라우저의 로컬 저장소를 사용할 수 있습니다:', items: ['언어 기본 설정 기억', '최근 도구 기록 저장', '중단된 세션의 진행 중 작업 저장'], footer: '이 데이터는 기기에만 저장되며 저희에게 전송되지 않습니다.' },
        cookies: { heading: '5. 쿠키', body: '저희는 다음 유형의 쿠키를 사용합니다:', essential: '필수 쿠키', essentialDesc: '웹사이트가 제대로 작동하는 데 필요합니다', preference: '환경설정 쿠키', preferenceDesc: '언어 기본 설정과 같은 설정을 기억합니다', advertising: '광고 쿠키', advertisingDesc: 'Google AdSense와 파트너가 관련 광고를 표시하는 데 사용합니다(아래 광고 섹션 참조)' },
        advertising: { heading: '6. 광고', body1: '저희는 웹사이트에 광고를 표시하기 위해 Google AdSense를 사용합니다. Google AdSense와 광고 파트너는 이 웹사이트 및 인터넷의 다른 웹사이트에 대한 이전 방문을 기반으로 광고를 제공하기 위해 쿠키와 웹 비콘을 사용할 수 있습니다.', body2: '이 광고 쿠키를 통해 Google과 파트너가 관심사에 기반한 광고를 표시할 수 있습니다. www.aboutads.info/choices/ 또는 Google 광고 설정에서 개인 맞춤 광고를 거부할 수 있습니다.', important: '중요', importantBody: '고객님의 PDF 파일은 Google이나 광고 네트워크와 절대 공유되지 않습니다. 모든 파일 처리는 브라우저에서 로컬로 이루어집니다. 광고 쿠키는 광고 제공에만 관련되며 문서에 접근할 수 없습니다.' },
        thirdParty: { heading: '7. 타사 서비스', body: '위에 언급된 광고 서비스를 제외하고, {brand}은 파일 데이터를 제3자와 공유하지 않습니다. 다음은 사용하지 않습니다:', items: ['개별 사용자를 추적하는 타사 분석', '소셜 미디어 추적 픽셀', '외부 파일 처리 서비스'] },
        security: { heading: '8. 데이터 보안', body: '파일이 기기를 떠나지 않으므로 기기 자체의 보안 조치로 보호됩니다. 다음을 권장합니다:', items: ['최신 브라우저 사용', '운영 체제를 최신 상태로 유지', '민감한 문서를 처리할 때 보안 네트워크 사용'] },
        rights: { heading: '9. 고객님의 권리', body: '저희는 개인 데이터를 수집하지 않으므로 접근, 정정 또는 삭제할 개인 데이터가 없습니다. 브라우저의 로컬 저장소를 언제든지 지워 {brand}이 저장한 모든 환경설정을 제거할 수 있습니다.' },
        children: { heading: '10. 아동의 개인정보', body: '{brand}은 13세 미만의 아동을 대상으로 하지 않습니다. 저희는 고의로 아동으로부터 정보를 수집하지 않습니다.' },
        changes: { heading: '11. 본 방침의 변경', body: '저희는 본 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 변경 사항이 있으면 본 페이지에 새 개인정보 처리방침을 게시하고 "최종 업데이트" 날짜를 갱신하여 알려드립니다.' },
        contact: { heading: '12. 문의하기', body: '본 개인정보 처리방침에 대해 질문이 있으시면 문의 페이지를 통해 연락해 주세요.' },
      },
    },
    termsPage: {
      metaTitle: '서비스 이용약관',
      heroTitle: '서비스 이용약관',
      heroSubtitle: '{brand}을 사용하기 전에 본 약관을 주의 깊게 읽어 주세요.',
      highlights: {
        clientSide: { title: '100% 클라이언트 측', description: '파일은 브라우저에서 로컬로 처리되며 어떤 서버에도 업로드되지 않습니다.' },
        privacyFirst: { title: '개인정보 우선', description: '저희는 문서에 접근, 저장 또는 전송하지 않습니다. 데이터는 기기에 남아 있습니다.' },
        free: { title: '무료 사용', description: '모든 PDF 도구는 무료입니다. 등록 불필요, 숨겨진 수수료 없음, 프리미엄 등급 없음.' },
        fairUse: { title: '공정한 사용', description: '서비스를 책임감 있게 사용하고 불법적인 목적으로 사용하지 않기를 부탁드립니다.' },
      },
      lastUpdated: '최종 업데이트: 2026년 3월 24일',
      contactBadgeTitle: '질문이 있으신가요?',
      contactBadgeDesc: '본 약관에 대해 질문이 있으면 문의해 주세요',
      sections: {
        acceptance: { heading: '1. 약관 동의', body: '{brand}(이하 "서비스")에 접근하고 사용함으로써 귀하는 본 서비스 이용약관의 구속을 받는 데 동의하게 됩니다. 본 약관에 동의하지 않으면 서비스를 사용하지 마십시오.' },
        serviceDesc: { heading: '2. 서비스 설명', body: '{brand}은 사용자가 PDF 파일을 병합, 분할, 압축, 변환, 편집하고 다양한 작업을 수행할 수 있는 브라우저 기반 무료 PDF 도구 모음입니다. 서비스는 WebAssembly 기술을 사용하여 모든 파일을 완전히 클라이언트 측에서 처리합니다.' },
        privacy: { heading: '3. 개인정보 및 데이터 처리', processingHeading: '3.1 클라이언트 측 처리', processingItems: ['모든 파일 처리는 브라우저에서 로컬로 이루어집니다. 문서가 외부 서버에 업로드되지 않습니다.', '저희는 파일에 접근, 저장 또는 전송하지 않습니다.', '브라우저 탭을 닫거나 새로고침하면 데이터는 메모리에서 영구적으로 삭제됩니다.'], collectedHeading: '3.2 수집하는 정보', collectedBody: '분석 목적으로 최소한의 사용 데이터(예: 사용된 도구)를 수집할 수 있습니다. PDF 파일의 내용을 수집, 저장 또는 처리하지 않습니다.', cookiesHeading: '3.3 쿠키', cookiesBody: '세션 기능을 유지하기 위해 필수 쿠키를 사용합니다. 타사 추적 또는 광고 쿠키는 사용하지 않습니다.' },
        responsibilities: { heading: '4. 사용자 책임', body: '귀하는 다음을 하지 않기로 동의합니다:', items: ['서비스를 불법적인 목적으로 사용', '악성 콘텐츠가 포함된 파일 업로드 또는 처리', '서비스를 리버스 엔지니어링하거나 악용 시도', '정상적인 인간 사용을 초과하여 서비스에 접근하기 위해 자동화 도구 사용'] },
        ip: { heading: '5. 지적 재산권', items: ['{brand}: 서비스는 디자인, 코드, 브랜딩을 포함하여 {brand}의 재산이며 AGPL-3.0에 따라 라이선스가 부여됩니다.', '귀하의 파일: 서비스를 통해 처리한 모든 파일의 완전한 소유권은 귀하가 보유합니다.', '타사 라이브러리: 서비스는 각각의 라이선스에 따라 오픈소스 라이브러리(PDF.js, pdf-lib, PyMuPDF)를 사용합니다.'] },
        disclaimer: { heading: '6. 보증의 부인', body: '서비스는 어떠한 종류의 보증도 없이 "있는 그대로" 제공됩니다. 다음을 보증하지 않습니다:', items: ['서비스가 중단 없이 오류 없이 제공될 것', '서비스 사용 결과가 정확하거나 신뢰할 수 있을 것', '서비스를 통해 얻은 제품이나 서비스의 품질이 기대에 부합할 것'] },
        liability: { heading: '7. 책임의 제한', body: '어떠한 경우에도 {brand}은 서비스 사용과 관련하여 발생하는 간접적, 부수적, 특별 또는 결과적 손해에 대해 책임을 지지 않습니다.' },
        changes: { heading: '8. 서비스 변경', body: '저희는 다음 권리를 보유합니다:', items: ['언제든지 서비스의 일부를 수정하거나 중단', '언제든지 본 약관을 업데이트. 계속 사용하면 변경에 동의한 것으로 간주됩니다.'] },
        beta: { heading: '9. 베타 기능', body: '일부 기능(예: 워크플로 편집기)은 "베타" 또는 "초기 개발"로 표시될 수 있습니다. 이러한 기능은 불안정할 수 있으며, 사용으로 인해 발생하는 문제에 대해 저희는 책임을 지지 않습니다.' },
        governingLaw: { heading: '10. 준거법', body: '본 약관은 법률 충돌 조항에 관계없이 해당 법률에 따라 규율되고 해석됩니다.' },
        contact: { heading: '11. 문의', body: '본 약관에 대한 질문은 {contactLink} 또는 support@pdfkoi.com 이메일을 통해 문의해 주세요.', contactLink: '문의 페이지' },
      },
    },
    cookiesPage: {
      metaTitle: '쿠키 정책',
      heroTitle: '쿠키 정책',
      heroSubtitle: '이 페이지는 {brand}이 필수 사이트 기능을 지원하기 위해 쿠키와 브라우저 저장소를 어떻게 사용하는지 설명합니다.',
      highlights: {
        minimal: { title: '최소한의 사용', description: '사이트 작동과 기본 설정 기억에 필요한 저장소만 사용하는 것을 목표로 합니다.' },
        noTracking: { title: '광고 추적 없음', description: '본 정책은 PDF 콘텐츠에 대한 광고 쿠키나 교차 사이트 추적을 허용하지 않습니다.' },
        onDevice: { title: '기기에 저장', description: '환경설정 데이터는 일반적으로 파일과 함께 업로드되지 않고 브라우저에 저장됩니다.' },
        privacyFirst: { title: '개인정보 우선 설계', description: 'PDF 처리가 브라우저에서 이루어지므로 서버 측 식별자의 필요성이 줄어듭니다.' },
      },
      lastUpdated: '최종 업데이트: 2026년 3월 28일',
      table: {
        item: '항목', purpose: '목적', technology: '기술', duration: '기간',
        rows: {
          language: { name: '언어 기본 설정', purpose: '선택한 언어를 기억하여 사이트가 원하는 로케일로 열리게 합니다.', storage: '로컬 저장소', duration: '브라우저 데이터를 지울 때까지' },
          recent: { name: '최근 파일 및 저장된 작업', purpose: '편의를 위해 최근 활동과 진행 중 항목을 기기에 보관합니다.', storage: '로컬 저장소', duration: '브라우저 데이터를 지울 때까지' },
          state: { name: '필수 사이트 상태', purpose: '도구 상태, 대화 상자, 사용자 환경설정과 같은 핵심 인터페이스 동작을 지원합니다.', storage: '세션 저장소 또는 로컬 저장소', duration: '세션 중 또는 브라우저 데이터를 지울 때까지' },
        },
      },
      sections: {
        covers: { heading: '1. 본 정책이 다루는 범위', p1: '본 쿠키 정책은 사이트를 방문하거나 PDF 도구를 사용할 때 {brand}이 쿠키, 로컬 저장소, 세션 저장소 및 유사한 브라우저 기술을 어떻게 사용하는지 설명합니다.', p2: '당사 제품은 브라우저에서 파일을 처리하도록 설계되었으므로, 저장소 사용을 필수 기능, 환경설정, 제품 사용성에 한정하려고 노력합니다.' },
        means: { heading: '2. 쿠키 및 유사 기술의 의미', p1: '쿠키는 브라우저에 배치되는 작은 텍스트 파일입니다. 유사 기술에는 로컬 저장소, 세션 저장소, 브라우저가 관리하는 환경설정 데이터가 포함됩니다. 실제로 일부 사이트 기능은 기존 쿠키 대신 브라우저 저장소에 의존할 수 있습니다.', p2: '명확성을 위해 본 정책은 별도로 명시되지 않는 한 이러한 모든 기술을 통틀어 "쿠키 및 브라우저 저장소"라는 표현을 사용합니다.' },
        uses: { heading: '3. {brand}이 쿠키와 브라우저 저장소를 사용하는 방법' },
        categories: {
          heading: '4. 사용 범주',
          essential: { heading: '필수 기능', body: '이러한 항목은 사이트가 안정적으로 작동하고, 인터페이스 상태를 일관되게 유지하며, 사용자가 브라우저 기반 도구에서 합리적으로 기대하는 기능을 지원하는 데 도움이 됩니다.' },
          preference: { heading: '환경설정 저장소', body: '환경설정 저장소는 언어 선택과 같은 설정을 기억하여 매번 사이트를 다시 구성할 필요가 없게 합니다.' },
          local: { heading: '로컬 생산성 기능', body: '일부 도구는 새로고침 후나 중단된 세션 후의 사용성을 개선하기 위해 최근 작업이나 진행 중 정보를 기기에 보존할 수 있습니다.' },
        },
        notUsed: { heading: '5. 이러한 기술을 사용하지 않는 목적', items: ['PDF 파일의 내용을 업로드하거나 검사하기 위해 쿠키를 사용하지 않습니다.', '문서 활동에서 행동 광고 프로필을 구축하기 위해 광고 쿠키를 사용하지 않습니다.', '파일을 타사 PDF 처리 서비스로 옮기기 위해 쿠키에 의존하지 않습니다.', '귀하가 실행하도록 선택한 도구 외부에서 문서를 읽기 위해 브라우저 저장소를 사용할 권리를 주장하지 않습니다.'] },
        thirdParty: { heading: '6. 타사 서비스', p1: '사이트가 GitHub나 X와 같은 서비스로 연결되는 경우, 해당 플랫폼은 방문 시 자체 쿠키를 설정할 수 있습니다. 해당 쿠키 동작은 이 페이지가 아니라 각 플랫폼의 정책에 따라 규율됩니다.', p2: '본 정책은 {brand} 사이트 경험 자체에 사용되는 쿠키와 브라우저 저장소를 다룹니다.' },
        control: { heading: '7. 쿠키와 로컬 저장소를 제어하거나 삭제하는 방법', p1: '브라우저 설정을 통해 쿠키와 브라우저 저장소를 제어할 수 있습니다.', items: ['브라우저 개인정보 설정에서 기존 쿠키와 사이트 저장소를 삭제합니다.', '브라우저가 해당 옵션을 제공하면 일부 또는 모든 쿠키를 차단합니다.', '기억된 환경설정을 제거하려면 {brand}의 로컬 저장소나 사이트 데이터를 지웁니다.'], p2: '모든 쿠키나 사이트 저장소를 비활성화하면 저장된 환경설정과 편의 기능을 포함하여 사이트 기능에 영향을 줄 수 있습니다.' },
        changes: { heading: '8. 본 쿠키 정책의 변경', body: '사이트 기능, 법적 요구 사항 또는 제품 설계의 변경을 반영하기 위해 본 정책을 수시로 업데이트할 수 있습니다. 업데이트 시 본 페이지 상단의 날짜를 갱신합니다.' },
        contact: { heading: '9. 문의', body: '본 정책에 대해 질문이 있으시면 사이트 푸터에 링크된 문의 페이지를 이용해 주세요.' },
      },
      summary: { heading: '실용적인 요약', body: '{brand}은 대부분의 작업을 브라우저에서 수행하도록 구축되었습니다. 즉, 사이트는 일반적으로 침습적인 추적 인프라가 아니라 환경설정과 사용성을 위한 제한된 저장소만 필요로 합니다.', note: '저장된 환경설정을 지우려면 언제든지 브라우저의 사이트 설정을 검토하세요.' },
    },
  },

  es: {
    privacyPage: {
      metaTitle: 'Política de privacidad',
      heroTitle: 'Política de privacidad',
      heroSubtitle: 'Su privacidad es nuestra máxima prioridad. {brand} está diseñado desde cero para proteger sus datos.',
      highlights: {
        noUpload: { title: 'Sin subidas a servidores', description: 'Sus archivos nunca se suben a ningún servidor. Todo el procesamiento ocurre localmente en su navegador.' },
        localProcessing: { title: 'Procesamiento local', description: 'Las operaciones de PDF se realizan con JavaScript y WebAssembly directamente en su dispositivo.' },
        cleanup: { title: 'Limpieza automática', description: 'Todos los datos de los archivos se eliminan automáticamente al cerrar la pestaña del navegador o al salir de la página.' },
        noTracking: { title: 'Sin rastreo', description: 'No rastreamos el contenido de sus archivos ni su información personal. Sus documentos permanecen privados.' },
      },
      lastUpdated: 'Última actualización: julio de 2026',
      badgeTitle: 'Sus documentos se procesan de forma segura en su navegador',
      sections: {
        intro: { heading: '1. Introducción', body: '{brand} ("nosotros" o "nuestro") se compromete a proteger su privacidad. Esta Política de privacidad explica cómo manejamos su información cuando utiliza nuestras herramientas de PDF.' },
        howItWorks: { heading: '2. Cómo funciona nuestro servicio', body: '{brand} es una aplicación del lado del cliente. Esto significa:', items: ['Todo el procesamiento de PDF ocurre directamente en su navegador web', 'Sus archivos nunca se suben a nuestros servidores ni a servidores de terceros', 'No podemos ver, acceder ni almacenar sus documentos', 'Sus archivos permanecen en su dispositivo en todo momento'] },
        infoCollected: { heading: '3. Información que recopilamos', filesHeading: '3.1 Sus archivos', filesBody: 'No recopilamos sus archivos. Cuando utiliza nuestras herramientas de PDF, sus archivos se procesan íntegramente en su navegador. Nunca se transmiten a nuestros servidores.', usageHeading: '3.2 Datos de uso', usageBody: 'Podemos recopilar estadísticas de uso anónimas para mejorar nuestro servicio, como:', usageItems: ['Qué herramientas son las más populares', 'Región geográfica general (nivel de país)', 'Tipo y versión del navegador', 'Tipo de dispositivo (escritorio, móvil, tableta)'], usageFooter: 'Estos datos se agregan y anonimizan. No pueden usarse para identificarlo personalmente.' },
        localStorage: { heading: '4. Almacenamiento local', body: '{brand} puede usar el almacenamiento local de su navegador para:', items: ['Recordar su preferencia de idioma', 'Guardar su historial reciente de herramientas', 'Guardar trabajos en curso de sesiones interrumpidas'], footer: 'Estos datos se almacenan solo en su dispositivo y no se nos transmiten.' },
        cookies: { heading: '5. Cookies', body: 'Utilizamos los siguientes tipos de cookies:', essential: 'Cookies esenciales', essentialDesc: 'Necesarias para que el sitio web funcione correctamente', preference: 'Cookies de preferencias', preferenceDesc: 'Recuerdan sus ajustes, como la preferencia de idioma', advertising: 'Cookies publicitarias', advertisingDesc: 'Utilizadas por Google AdSense y sus socios para mostrar anuncios relevantes (consulte la sección de publicidad más abajo)' },
        advertising: { heading: '6. Publicidad', body1: 'Utilizamos Google AdSense para mostrar anuncios en nuestro sitio web. Google AdSense y sus socios publicitarios pueden usar cookies y balizas web para publicar anuncios basados en sus visitas anteriores a este sitio y a otros sitios de Internet.', body2: 'Estas cookies publicitarias permiten a Google y a sus socios mostrarle anuncios según sus intereses. Puede desactivar la publicidad personalizada visitando www.aboutads.info/choices/ o la Configuración de anuncios de Google.', important: 'Importante', importantBody: 'Sus archivos PDF nunca se comparten con Google ni con ninguna red publicitaria. Todo el procesamiento de archivos ocurre localmente en su navegador. Las cookies publicitarias solo se relacionan con la entrega de anuncios y no tienen acceso a sus documentos.' },
        thirdParty: { heading: '7. Servicios de terceros', body: 'Aparte de los servicios publicitarios mencionados anteriormente, {brand} no comparte los datos de sus archivos con terceros. No utilizamos:', items: ['Análisis de terceros que rastrean usuarios individuales', 'Píxeles de seguimiento de redes sociales', 'Servicios externos de procesamiento de archivos'] },
        security: { heading: '8. Seguridad de los datos', body: 'Como sus archivos nunca salen de su dispositivo, están protegidos por las medidas de seguridad de su propio dispositivo. Recomendamos:', items: ['Usar un navegador actualizado', 'Mantener su sistema operativo actualizado', 'Usar redes seguras al manejar documentos confidenciales'] },
        rights: { heading: '9. Sus derechos', body: 'Como no recopilamos datos personales, no hay datos personales que acceder, corregir o eliminar. Puede borrar el almacenamiento local de su navegador en cualquier momento para eliminar las preferencias guardadas por {brand}.' },
        children: { heading: '10. Privacidad de los niños', body: '{brand} no está dirigido a niños menores de 13 años. No recopilamos deliberadamente información de niños.' },
        changes: { heading: '11. Cambios en esta política', body: 'Podemos actualizar esta Política de privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de privacidad en esta página y actualizando la fecha de "Última actualización".' },
        contact: { heading: '12. Contáctenos', body: 'Si tiene preguntas sobre esta Política de privacidad, contáctenos a través de nuestra página de contacto.' },
      },
    },
    termsPage: {
      metaTitle: 'Términos del servicio',
      heroTitle: 'Términos del servicio',
      heroSubtitle: 'Lea atentamente estos términos antes de usar {brand}.',
      highlights: {
        clientSide: { title: '100 % del lado del cliente', description: 'Sus archivos se procesan localmente en su navegador y nunca se suben a ningún servidor.' },
        privacyFirst: { title: 'Privacidad ante todo', description: 'No accedemos, almacenamos ni transmitimos sus documentos. Sus datos permanecen en su dispositivo.' },
        free: { title: 'Gratis', description: 'Todas las herramientas de PDF son gratuitas. Sin registro, sin cargos ocultos, sin niveles premium.' },
        fairUse: { title: 'Uso justo', description: 'Le pedimos que use nuestro servicio de forma responsable y no con fines ilegales.' },
      },
      lastUpdated: 'Última actualización: 24 de marzo de 2026',
      contactBadgeTitle: '¿Preguntas?',
      contactBadgeDesc: 'Contáctenos si tiene preguntas sobre estos Términos',
      sections: {
        acceptance: { heading: '1. Aceptación de los términos', body: 'Al acceder y usar {brand} ("el Servicio"), acepta quedar vinculado por estos Términos del servicio. Si no está de acuerdo con estos términos, no use el Servicio.' },
        serviceDesc: { heading: '2. Descripción del servicio', body: '{brand} es un conjunto gratuito de herramientas de PDF basado en navegador que permite a los usuarios combinar, dividir, comprimir, convertir, editar y realizar diversas operaciones en archivos PDF. El Servicio procesa todos los archivos íntegramente del lado del cliente mediante tecnología WebAssembly.' },
        privacy: { heading: '3. Privacidad y manejo de datos', processingHeading: '3.1 Procesamiento del lado del cliente', processingItems: ['Todo el procesamiento de archivos ocurre localmente en su navegador. Sus documentos nunca se suben a ningún servidor externo.', 'No tenemos acceso a sus archivos, ni los almacenamos ni transmitimos.', 'Una vez que cierra o actualiza la pestaña del navegador, sus datos se eliminan permanentemente de la memoria.'], collectedHeading: '3.2 Información que recopilamos', collectedBody: 'Podemos recopilar datos de uso mínimos (p. ej., qué herramientas se usan) con fines analíticos. No recopilamos, almacenamos ni procesamos el contenido de sus archivos PDF.', cookiesHeading: '3.3 Cookies', cookiesBody: 'Usamos cookies esenciales para mantener la funcionalidad de la sesión. No se usan cookies de rastreo ni publicitarias de terceros.' },
        responsibilities: { heading: '4. Responsabilidades del usuario', body: 'Usted acepta no:', items: ['Usar el Servicio con fines ilegales', 'Subir o procesar archivos con contenido malicioso', 'Intentar aplicar ingeniería inversa o explotar el Servicio', 'Usar herramientas automatizadas para acceder al Servicio más allá del uso humano normal'] },
        ip: { heading: '5. Propiedad intelectual', items: ['{brand}: El Servicio, incluido su diseño, código y marca, es propiedad de {brand} y está licenciado bajo AGPL-3.0.', 'Sus archivos: Usted conserva la propiedad total de los archivos que procesa a través del Servicio.', 'Bibliotecas de terceros: El Servicio usa bibliotecas de código abierto (PDF.js, pdf-lib, PyMuPDF) bajo sus respectivas licencias.'] },
        disclaimer: { heading: '6. Renuncia de garantías', body: 'EL SERVICIO SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO. NO GARANTIZAMOS:', items: ['Que el Servicio será ininterrumpido o estará libre de errores', 'Que los resultados del uso del Servicio serán precisos o fiables', 'Que la calidad de los productos o servicios obtenidos a través del Servicio cumplirá sus expectativas'] },
        liability: { heading: '7. Limitación de responsabilidad', body: 'EN NINGÚN CASO {brand} SERÁ RESPONSABLE DE DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES O CONSECUENTES QUE SURJAN DE O EN RELACIÓN CON EL USO DEL SERVICIO.' },
        changes: { heading: '8. Cambios en el servicio', body: 'Nos reservamos el derecho a:', items: ['Modificar o discontinuar cualquier parte del Servicio en cualquier momento', 'Actualizar estos Términos en cualquier momento. El uso continuado constituye la aceptación de los cambios.'] },
        beta: { heading: '9. Funciones beta', body: 'Algunas funciones (p. ej., el Editor de flujos de trabajo) pueden marcarse como "Beta" o "Desarrollo inicial". Estas funciones pueden ser inestables y renunciamos a la responsabilidad por problemas derivados de su uso.' },
        governingLaw: { heading: '10. Ley aplicable', body: 'Estos Términos se regirán e interpretarán de acuerdo con las leyes aplicables, sin tener en cuenta sus disposiciones sobre conflicto de leyes.' },
        contact: { heading: '11. Contacto', body: 'Para preguntas sobre estos Términos, contáctenos a través de nuestra {contactLink} o por correo: support@pdfkoi.com', contactLink: 'página de contacto' },
      },
    },
    cookiesPage: {
      metaTitle: 'Política de cookies',
      heroTitle: 'Política de cookies',
      heroSubtitle: 'Esta página explica cómo {brand} utiliza cookies y almacenamiento del navegador para admitir funciones esenciales del sitio.',
      highlights: {
        minimal: { title: 'Uso mínimo', description: 'Buscamos usar solo el almacenamiento necesario para que el sitio funcione y recuerde sus preferencias.' },
        noTracking: { title: 'Sin rastreo publicitario', description: 'Esta política no permite cookies publicitarias ni rastreo entre sitios para contenido PDF.' },
        onDevice: { title: 'Almacenado en su dispositivo', description: 'Los datos de preferencias normalmente se almacenan en su propio navegador, no se suben con sus archivos.' },
        privacyFirst: { title: 'Diseño con privacidad primero', description: 'El procesamiento de PDF permanece en su navegador, lo que reduce la necesidad de identificadores del lado del servidor.' },
      },
      lastUpdated: 'Última actualización: 28 de marzo de 2026',
      table: {
        item: 'Elemento', purpose: 'Propósito', technology: 'Tecnología', duration: 'Duración',
        rows: {
          language: { name: 'Preferencia de idioma', purpose: 'Recuerda el idioma que seleccionó para que el sitio se abra en su configuración regional preferida.', storage: 'Almacenamiento local', duration: 'Hasta que borre los datos del navegador' },
          recent: { name: 'Archivos recientes y trabajo guardado', purpose: 'Mantiene la actividad reciente y los elementos en curso en su propio dispositivo por comodidad.', storage: 'Almacenamiento local', duration: 'Hasta que borre los datos del navegador' },
          state: { name: 'Estado esencial del sitio', purpose: 'Admite el comportamiento central de la interfaz, como el estado de las herramientas, los diálogos y las preferencias del usuario.', storage: 'Almacenamiento de sesión o local', duration: 'Durante la sesión o hasta que borre los datos del navegador' },
        },
      },
      sections: {
        covers: { heading: '1. Qué cubre esta política', p1: 'Esta Política de cookies explica cómo {brand} usa cookies, almacenamiento local, almacenamiento de sesión y tecnologías de navegador similares cuando visita el sitio o usa nuestras herramientas de PDF.', p2: 'Dado que nuestro producto está diseñado para procesar archivos en el navegador, intentamos mantener el uso de almacenamiento limitado a la funcionalidad esencial, las preferencias y la usabilidad del producto.' },
        means: { heading: '2. Qué entendemos por cookies y tecnologías similares', p1: 'Las cookies son pequeños archivos de texto colocados en su navegador. Las tecnologías similares incluyen el almacenamiento local, el almacenamiento de sesión y los datos de preferencias gestionados por el navegador. En la práctica, algunas funciones del sitio pueden depender del almacenamiento del navegador en lugar de las cookies clásicas.', p2: 'Para mayor claridad, esta política usa la expresión "cookies y almacenamiento del navegador" para abarcar todas estas tecnologías en conjunto, salvo que una sección indique lo contrario.' },
        uses: { heading: '3. Cómo usa {brand} las cookies y el almacenamiento del navegador' },
        categories: {
          heading: '4. Categorías de uso',
          essential: { heading: 'Funcionalidad esencial', body: 'Estos elementos ayudan a que el sitio funcione de forma fiable, mantienen coherente el estado de la interfaz y admiten funciones que los usuarios razonablemente esperan de una herramienta basada en navegador.' },
          preference: { heading: 'Almacenamiento de preferencias', body: 'El almacenamiento de preferencias ayuda a recordar ajustes como la elección de idioma u otras preferencias no sensibles del producto, para que no tenga que reconfigurar el sitio en cada visita.' },
          local: { heading: 'Funciones locales de productividad', body: 'Algunas herramientas pueden conservar acciones recientes o información en curso en su propio dispositivo para mejorar la usabilidad tras recargas o sesiones interrumpidas.' },
        },
        notUsed: { heading: '5. Para qué no usamos estas tecnologías', items: ['No usamos cookies para subir ni inspeccionar el contenido de sus archivos PDF.', 'No usamos cookies publicitarias para crear perfiles publicitarios conductuales a partir de la actividad de sus documentos.', 'No dependemos de cookies para mover sus archivos a servicios de procesamiento de PDF de terceros.', 'No reclamamos el derecho de usar el almacenamiento del navegador para leer documentos fuera de las herramientas que usted elige ejecutar.'] },
        thirdParty: { heading: '6. Servicios de terceros', p1: 'Si el sitio enlaza a servicios como GitHub o X, esas plataformas pueden establecer sus propias cookies cuando las visita. Su comportamiento de cookies se rige por sus propias políticas, no por esta página.', p2: 'Esta política cubre las cookies y el almacenamiento del navegador utilizados para la experiencia del propio sitio {brand}.' },
        control: { heading: '7. Cómo controlar o eliminar cookies y almacenamiento local', p1: 'Puede controlar las cookies y el almacenamiento del navegador mediante la configuración de su navegador.', items: ['Elimine las cookies y el almacenamiento del sitio existentes desde la configuración de privacidad de su navegador.', 'Bloquee algunas o todas las cookies si su navegador ofrece esa opción.', 'Borre el almacenamiento local o los datos del sitio de {brand} si desea eliminar las preferencias recordadas.'], p2: 'Tenga en cuenta que desactivar todas las cookies o el almacenamiento del sitio puede afectar la funcionalidad del sitio, incluidas sus preferencias guardadas y las funciones de conveniencia.' },
        changes: { heading: '8. Cambios en esta Política de cookies', body: 'Podemos actualizar esta política de vez en cuando para reflejar cambios en la funcionalidad del sitio, los requisitos legales o el diseño del producto. Cuando lo hagamos, actualizaremos la fecha que aparece en la parte superior de esta página.' },
        contact: { heading: '9. Contacto', body: 'Si tiene preguntas sobre esta política, use la página de Contacto enlazada en el pie del sitio.' },
      },
      summary: { heading: 'Resumen práctico', body: '{brand} está diseñado para hacer la mayor parte de su trabajo en el navegador. Eso significa que el sitio generalmente solo necesita almacenamiento limitado para preferencias y usabilidad, en lugar de infraestructura de rastreo invasiva.', note: 'Revise la configuración del sitio de su navegador en cualquier momento si desea borrar las preferencias guardadas.' },
    },
  },

  fr: {
    privacyPage: {
      metaTitle: 'Politique de confidentialité',
      heroTitle: 'Politique de confidentialité',
      heroSubtitle: 'Votre vie privée est notre priorité absolue. {brand} est conçu dès le départ pour protéger vos données.',
      highlights: {
        noUpload: { title: 'Aucun envoi vers un serveur', description: "Vos fichiers ne sont jamais envoyés vers un serveur. Tout le traitement se fait localement dans votre navigateur." },
        localProcessing: { title: 'Traitement local', description: 'Les opérations PDF sont effectuées à l\u2019aide de JavaScript et WebAssembly directement sur votre appareil.' },
        cleanup: { title: 'Nettoyage automatique', description: "Toutes les données des fichiers sont automatiquement effacées lorsque vous fermez l\u2019onglet du navigateur ou quittez la page." },
        noTracking: { title: 'Aucun suivi', description: 'Nous ne suivons ni le contenu de vos fichiers ni vos informations personnelles. Vos documents restent privés.' },
      },
      lastUpdated: 'Dernière mise à jour : juillet 2026',
      badgeTitle: 'Vos documents sont traités en toute sécurité dans votre navigateur',
      sections: {
        intro: { heading: '1. Introduction', body: '{brand} (« nous ») s\u2019engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous traitons vos informations lorsque vous utilisez nos outils PDF.' },
        howItWorks: { heading: '2. Fonctionnement de notre service', body: '{brand} est une application côté client. Cela signifie :', items: ['Tout le traitement PDF se fait directement dans votre navigateur web', 'Vos fichiers ne sont jamais envoyés vers nos serveurs ni vers des serveurs tiers', 'Nous ne pouvons pas voir, consulter ni stocker vos documents', 'Vos fichiers restent en permanence sur votre appareil'] },
        infoCollected: { heading: '3. Informations que nous collectons', filesHeading: '3.1 Vos fichiers', filesBody: 'Nous ne collectons pas vos fichiers. Lorsque vous utilisez nos outils PDF, vos fichiers sont traités entièrement dans votre navigateur. Ils ne sont jamais transmis à nos serveurs.', usageHeading: "3.2 Données d'utilisation", usageBody: 'Nous pouvons collecter des statistiques d\u2019utilisation anonymes pour améliorer notre service, telles que :', usageItems: ['Les outils les plus populaires', 'La région géographique générale (niveau pays)', 'Le type et la version du navigateur', 'Le type d\u2019appareil (ordinateur, mobile, tablette)'], usageFooter: 'Ces données sont agrégées et anonymisées. Elles ne peuvent pas être utilisées pour vous identifier personnellement.' },
        localStorage: { heading: '4. Stockage local', body: '{brand} peut utiliser le stockage local de votre navigateur pour :', items: ['Mémoriser votre préférence de langue', 'Enregistrer l\u2019historique de vos outils récents', 'Sauvegarder le travail en cours des sessions interrompues'], footer: 'Ces données sont stockées uniquement sur votre appareil et ne nous sont pas transmises.' },
        cookies: { heading: '5. Cookies', body: 'Nous utilisons les types de cookies suivants :', essential: 'Cookies essentiels', essentialDesc: 'Nécessaires au bon fonctionnement du site web', preference: 'Cookies de préférence', preferenceDesc: 'Mémorisent vos réglages, comme la préférence de langue', advertising: 'Cookies publicitaires', advertisingDesc: 'Utilisés par Google AdSense et ses partenaires pour afficher des annonces pertinentes (voir la section Publicité ci-dessous)' },
        advertising: { heading: '6. Publicité', body1: 'Nous utilisons Google AdSense pour afficher des publicités sur notre site. Google AdSense et ses partenaires publicitaires peuvent utiliser des cookies et des balises web pour diffuser des annonces en fonction de vos visites antérieures sur ce site et sur d\u2019autres sites Internet.', body2: 'Ces cookies publicitaires permettent à Google et à ses partenaires de vous montrer des annonces en fonction de vos centres d\u2019intérêt. Vous pouvez désactiver la publicité personnalisée en visitant www.aboutads.info/choices/ ou les Paramètres des annonces Google.', important: 'Important', importantBody: 'Vos fichiers PDF ne sont jamais partagés avec Google ni avec aucun réseau publicitaire. Tout le traitement des fichiers se fait localement dans votre navigateur. Les cookies publicitaires concernent uniquement la diffusion d\u2019annonces et n\u2019ont pas accès à vos documents.' },
        thirdParty: { heading: '7. Services tiers', body: 'Au-delà des services publicitaires mentionnés ci-dessus, {brand} ne partage pas les données de vos fichiers avec des tiers. Nous n\u2019utilisons pas :', items: ['Des analyses tierces qui suivent des utilisateurs individuels', 'Des pixels de suivi des réseaux sociaux', 'Des services externes de traitement de fichiers'] },
        security: { heading: '8. Sécurité des données', body: 'Comme vos fichiers ne quittent jamais votre appareil, ils sont protégés par les mesures de sécurité de votre propre appareil. Nous recommandons :', items: ['Utiliser un navigateur à jour', 'Maintenir votre système d\u2019exploitation à jour', 'Utiliser des réseaux sécurisés lors de la manipulation de documents sensibles'] },
        rights: { heading: '9. Vos droits', body: 'Comme nous ne collectons pas de données personnelles, il n\u2019y a aucune donnée personnelle à consulter, corriger ou supprimer. Vous pouvez effacer le stockage local de votre navigateur à tout moment pour supprimer les préférences enregistrées par {brand}.' },
        children: { heading: '10. Vie privée des enfants', body: '{brand} ne s\u2019adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d\u2019informations auprès des enfants.' },
        changes: { heading: '11. Modifications de cette politique', body: 'Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page et en mettant à jour la date de « Dernière mise à jour ».' },
        contact: { heading: '12. Contactez-nous', body: 'Si vous avez des questions concernant cette politique de confidentialité, contactez-nous via notre page de contact.' },
      },
    },
    termsPage: {
      metaTitle: "Conditions d'utilisation",
      heroTitle: "Conditions d'utilisation",
      heroSubtitle: 'Veuillez lire attentivement ces conditions avant d\u2019utiliser {brand}.',
      highlights: {
        clientSide: { title: '100 % côté client', description: 'Vos fichiers sont traités localement dans votre navigateur et ne sont jamais envoyés vers un serveur.' },
        privacyFirst: { title: 'Confidentialité avant tout', description: 'Nous n\u2019accédons pas à vos documents, ne les stockons pas et ne les transmettons pas. Vos données restent sur votre appareil.' },
        free: { title: 'Gratuit', description: 'Tous les outils PDF sont gratuits. Aucune inscription requise, aucun frais caché, aucune formule premium.' },
        fairUse: { title: 'Usage raisonnable', description: 'Nous vous demandons d\u2019utiliser notre service de manière responsable et non à des fins illégales.' },
      },
      lastUpdated: 'Dernière mise à jour : 24 mars 2026',
      contactBadgeTitle: 'Des questions ?',
      contactBadgeDesc: 'Contactez-nous si vous avez des questions sur ces Conditions',
      sections: {
        acceptance: { heading: '1. Acceptation des conditions', body: 'En accédant à {brand} (« le Service ») et en l\u2019utilisant, vous acceptez d\u2019être lié par les présentes conditions d\u2019utilisation. Si vous n\u2019acceptez pas ces conditions, veuillez ne pas utiliser le Service.' },
        serviceDesc: { heading: '2. Description du service', body: '{brand} est une suite gratuite d\u2019outils PDF basée sur navigateur qui permet aux utilisateurs de fusionner, diviser, compresser, convertir, modifier et effectuer diverses opérations sur des fichiers PDF. Le Service traite tous les fichiers entièrement côté client à l\u2019aide de la technologie WebAssembly.' },
        privacy: { heading: '3. Confidentialité et traitement des données', processingHeading: '3.1 Traitement côté client', processingItems: ['Tout le traitement des fichiers se fait localement dans votre navigateur. Vos documents ne sont jamais envoyés vers un serveur externe.', 'Nous n\u2019avons pas accès à vos fichiers et ne les stockons ni ne les transmettons.', 'Une fois que vous fermez ou actualisez l\u2019onglet du navigateur, vos données sont définitivement supprimées de la mémoire.'], collectedHeading: '3.2 Informations que nous collectons', collectedBody: 'Nous pouvons collecter des données d\u2019utilisation minimales (par ex., les outils utilisés) à des fins d\u2019analyse. Nous ne collectons, ne stockons ni ne traitons le contenu de vos fichiers PDF.', cookiesHeading: '3.3 Cookies', cookiesBody: 'Nous utilisons des cookies essentiels pour maintenir la fonctionnalité de session. Aucun cookie de suivi ou publicitaire tiers n\u2019est utilisé.' },
        responsibilities: { heading: '4. Responsabilités de l\u2019utilisateur', body: 'Vous acceptez de ne pas :', items: ['Utiliser le Service à des fins illégales', 'Téléverser ou traiter des fichiers contenant du contenu malveillant', 'Tenter de procéder à de la rétro-ingénierie ou d\u2019exploiter le Service', 'Utiliser des outils automatisés pour accéder au Service au-delà d\u2019un usage humain normal'] },
        ip: { heading: '5. Propriété intellectuelle', items: ['{brand} : le Service, y compris sa conception, son code et sa marque, est la propriété de {brand} et est concédé sous licence AGPL-3.0.', 'Vos fichiers : vous conservez l\u2019entière propriété de tous les fichiers que vous traitez via le Service.', 'Bibliothèques tierces : le Service utilise des bibliothèques open source (PDF.js, pdf-lib, PyMuPDF) sous leurs licences respectives.'] },
        disclaimer: { heading: '6. Exclusion de garanties', body: 'LE SERVICE EST FOURNI « EN L\u2019ÉTAT », SANS GARANTIE D\u2019AUCUNE SORTE. NOUS NE GARANTISSONS PAS :', items: ['Que le Service sera ininterrompu ou exempt d\u2019erreurs', 'Que les résultats de l\u2019utilisation du Service seront exacts ou fiables', 'Que la qualité des produits ou services obtenus via le Service répondra à vos attentes'] },
        liability: { heading: '7. Limitation de responsabilité', body: 'EN AUCUN CAS {brand} NE POURRA ÊTRE TENU RESPONSABLE DE DOMMAGES INDIRECTS, ACCESSOIRES, SPÉCIAUX OU CONSÉCUTIFS DÉCOULANT DE OU LIÉS À VOTRE UTILISATION DU SERVICE.' },
        changes: { heading: '8. Modifications du service', body: 'Nous nous réservons le droit de :', items: ['Modifier ou interrompre toute partie du Service à tout moment', 'Mettre à jour les présentes Conditions à tout moment. L\u2019utilisation continue vaut acceptation des modifications.'] },
        beta: { heading: '9. Fonctionnalités bêta', body: 'Certaines fonctionnalités (par ex., l\u2019éditeur de flux de travail) peuvent être étiquetées « Bêta » ou « Développement précoce ». Ces fonctionnalités peuvent être instables, et nous déclinons toute responsabilité pour les problèmes découlant de leur utilisation.' },
        governingLaw: { heading: '10. Droit applicable', body: 'Les présentes Conditions sont régies et interprétées conformément aux lois applicables, sans égard aux dispositions relatives aux conflits de lois.' },
        contact: { heading: '11. Contact', body: 'Pour toute question concernant les présentes Conditions, contactez-nous via notre {contactLink} ou par e-mail : support@pdfkoi.com', contactLink: 'page de contact' },
      },
    },
    cookiesPage: {
      metaTitle: 'Politique relative aux cookies',
      heroTitle: 'Politique relative aux cookies',
      heroSubtitle: 'Cette page explique comment {brand} utilise les cookies et le stockage du navigateur pour prendre en charge les fonctionnalités essentielles du site.',
      highlights: {
        minimal: { title: 'Usage minimal', description: 'Nous visons à n\u2019utiliser que le stockage nécessaire au fonctionnement du site et à la mémorisation de vos préférences.' },
        noTracking: { title: 'Aucun suivi publicitaire', description: 'Cette politique n\u2019autorise pas les cookies publicitaires ni le suivi intersites pour le contenu PDF.' },
        onDevice: { title: 'Stocké sur votre appareil', description: 'Les données de préférence sont généralement stockées dans votre propre navigateur, pas téléversées avec vos fichiers.' },
        privacyFirst: { title: 'Conception axée sur la confidentialité', description: 'Le traitement des PDF reste dans votre navigateur, ce qui réduit le besoin d\u2019identifiants côté serveur.' },
      },
      lastUpdated: 'Dernière mise à jour : 28 mars 2026',
      table: {
        item: 'Élément', purpose: 'Objectif', technology: 'Technologie', duration: 'Durée',
        rows: {
          language: { name: 'Préférence de langue', purpose: 'Mémorise la langue que vous avez sélectionnée afin que le site s\u2019ouvre dans votre locale préférée.', storage: 'Stockage local', duration: "Jusqu'à ce que vous effaciez les données du navigateur" },
          recent: { name: 'Fichiers récents et travail enregistré', purpose: 'Conserve l\u2019activité récente et les éléments en cours sur votre propre appareil pour plus de commodité.', storage: 'Stockage local', duration: "Jusqu'à ce que vous effaciez les données du navigateur" },
          state: { name: 'État essentiel du site', purpose: 'Prend en charge le comportement central de l\u2019interface, comme l\u2019état des outils, les boîtes de dialogue et les préférences de l\u2019utilisateur.', storage: 'Stockage de session ou local', duration: "Le temps de la session, ou jusqu'à ce que vous effaciez les données du navigateur" },
        },
      },
      sections: {
        covers: { heading: '1. Portée de cette politique', p1: 'Cette politique relative aux cookies explique comment {brand} utilise les cookies, le stockage local, le stockage de session et les technologies de navigateur similaires lorsque vous visitez le site ou utilisez nos outils PDF.', p2: 'Comme notre produit est conçu pour traiter les fichiers dans le navigateur, nous nous efforçons de limiter l\u2019utilisation du stockage aux fonctionnalités essentielles, aux préférences et à l\u2019ergonomie du produit.' },
        means: { heading: '2. Ce que nous entendons par cookies et technologies similaires', p1: 'Les cookies sont de petits fichiers texte placés dans votre navigateur. Les technologies similaires incluent le stockage local, le stockage de session et les données de préférence gérées par le navigateur. En pratique, certaines fonctionnalités du site peuvent s\u2019appuyer sur le stockage du navigateur plutôt que sur des cookies classiques.', p2: 'Par souci de clarté, cette politique utilise l\u2019expression « cookies et stockage du navigateur » pour couvrir l\u2019ensemble de ces technologies, sauf indication contraire d\u2019une section.' },
        uses: { heading: '3. Comment {brand} utilise les cookies et le stockage du navigateur' },
        categories: {
          heading: "4. Catégories d'utilisation",
          essential: { heading: 'Fonctionnalité essentielle', body: 'Ces éléments contribuent au fonctionnement fiable du site, maintiennent la cohérence de l\u2019état de l\u2019interface et prennent en charge les fonctionnalités que les utilisateurs attendent raisonnablement d\u2019un outil basé sur navigateur.' },
          preference: { heading: 'Stockage des préférences', body: 'Le stockage des préférences permet de mémoriser des réglages comme le choix de la langue ou d\u2019autres préférences non sensibles du produit, afin que vous n\u2019ayez pas à reconfigurer le site à chaque visite.' },
          local: { heading: 'Fonctionnalités locales de productivité', body: 'Certains outils peuvent conserver des actions récentes ou des informations en cours sur votre propre appareil pour améliorer l\u2019ergonomie après des actualisations ou des sessions interrompues.' },
        },
        notUsed: { heading: '5. Ce à quoi nous n\u2019utilisons pas ces technologies', items: ['Nous n\u2019utilisons pas de cookies pour téléverser ou inspecter le contenu de vos fichiers PDF.', 'Nous n\u2019utilisons pas de cookies publicitaires pour créer des profils publicitaires comportementaux à partir de l\u2019activité de vos documents.', 'Nous ne dépendons pas des cookies pour déplacer vos fichiers vers des services de traitement PDF tiers.', 'Nous ne revendiquons pas le droit d\u2019utiliser le stockage du navigateur pour lire des documents en dehors des outils que vous choisissez d\u2019exécuter.'] },
        thirdParty: { heading: '6. Services tiers', p1: 'Si le site renvoie vers des services tels que GitHub ou X, ces plateformes peuvent définir leurs propres cookies lorsque vous les visitez. Leur comportement en matière de cookies est régi par leurs propres politiques, et non par cette page.', p2: 'Cette politique couvre les cookies et le stockage du navigateur utilisés pour l\u2019expérience du site {brand} lui-même.' },
        control: { heading: '7. Comment contrôler ou supprimer les cookies et le stockage local', p1: 'Vous pouvez contrôler les cookies et le stockage du navigateur via les paramètres de votre navigateur.', items: ['Supprimez les cookies et le stockage de site existants depuis les paramètres de confidentialité de votre navigateur.', 'Bloquez certains ou tous les cookies si votre navigateur offre cette option.', 'Effacez le stockage local ou les données de site de {brand} si vous souhaitez supprimer les préférences mémorisées.'], p2: 'Veuillez noter que la désactivation de tous les cookies ou du stockage de site peut affecter le fonctionnement du site, y compris vos préférences enregistrées et les fonctions de commodité.' },
        changes: { heading: '8. Modifications de cette politique relative aux cookies', body: 'Nous pouvons mettre à jour cette politique de temps à autre pour refléter les changements dans les fonctionnalités du site, les exigences légales ou la conception du produit. Le cas échéant, nous mettrons à jour la date indiquée en haut de cette page.' },
        contact: { heading: '9. Contact', body: 'Si vous avez des questions sur cette politique, veuillez utiliser la page Contact liée dans le pied de page du site.' },
      },
      summary: { heading: 'Résumé pratique', body: '{brand} est conçu pour effectuer l\u2019essentiel de son travail dans le navigateur. Cela signifie que le site n\u2019a généralement besoin que d\u2019un stockage limité pour les préférences et l\u2019ergonomie, plutôt que d\u2019une infrastructure de suivi invasive.', note: 'Consultez à tout moment les paramètres de site de votre navigateur si vous souhaitez effacer les préférences enregistrées.' },
    },
  },

  de: {
    privacyPage: {
      metaTitle: 'Datenschutzerklärung',
      heroTitle: 'Datenschutzerklärung',
      heroSubtitle: 'Ihre Privatsphäre hat für uns oberste Priorität. {brand} wurde von Grund auf so entwickelt, dass Ihre Daten geschützt werden.',
      highlights: {
        noUpload: { title: 'Keine Server-Uploads', description: 'Ihre Dateien werden niemals auf einen Server hochgeladen. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.' },
        localProcessing: { title: 'Lokale Verarbeitung', description: 'PDF-Vorgänge werden mit JavaScript und WebAssembly direkt auf Ihrem Gerät ausgeführt.' },
        cleanup: { title: 'Automatische Bereinigung', description: 'Alle Dateidaten werden automatisch gelöscht, wenn Sie den Browser-Tab schließen oder die Seite verlassen.' },
        noTracking: { title: 'Kein Tracking', description: 'Wir verfolgen weder Ihre Dateiinhalte noch Ihre persönlichen Daten. Ihre Dokumente bleiben privat.' },
      },
      lastUpdated: 'Zuletzt aktualisiert: Juli 2026',
      badgeTitle: 'Ihre Dokumente werden sicher in Ihrem Browser verarbeitet',
      sections: {
        intro: { heading: '1. Einleitung', body: '{brand} („wir“ oder „uns“) verpflichtet sich, Ihre Privatsphäre zu schützen. Diese Datenschutzerklärung erläutert, wie wir mit Ihren Daten umgehen, wenn Sie unsere PDF-Tools nutzen.' },
        howItWorks: { heading: '2. So funktioniert unser Dienst', body: '{brand} ist eine clientseitige Anwendung. Das bedeutet:', items: ['Die gesamte PDF-Verarbeitung erfolgt direkt in Ihrem Webbrowser', 'Ihre Dateien werden niemals auf unsere Server oder Server von Drittanbietern hochgeladen', 'Wir können Ihre Dokumente nicht einsehen, darauf zugreifen oder sie speichern', 'Ihre Dateien bleiben jederzeit auf Ihrem Gerät'] },
        infoCollected: { heading: '3. Welche Daten wir erheben', filesHeading: '3.1 Ihre Dateien', filesBody: 'Wir erfassen Ihre Dateien nicht. Wenn Sie unsere PDF-Tools nutzen, werden Ihre Dateien vollständig in Ihrem Browser verarbeitet. Sie werden niemals an unsere Server übertragen.', usageHeading: '3.2 Nutzungsdaten', usageBody: 'Wir können anonyme Nutzungsstatistiken erheben, um unseren Dienst zu verbessern, zum Beispiel:', usageItems: ['Welche Tools am beliebtesten sind', 'Allgemeine geografische Region (Länderebene)', 'Browsertyp und -version', 'Gerätetyp (Desktop, Mobilgerät, Tablet)'], usageFooter: 'Diese Daten werden aggregiert und anonymisiert. Sie können nicht verwendet werden, um Sie persönlich zu identifizieren.' },
        localStorage: { heading: '4. Lokaler Speicher', body: '{brand} kann den lokalen Speicher Ihres Browsers für Folgendes verwenden:', items: ['Ihre Spracheinstellung merken', 'Ihren Verlauf kürzlich verwendeter Tools speichern', 'Zwischenstände unterbrochener Sitzungen speichern'], footer: 'Diese Daten werden nur auf Ihrem Gerät gespeichert und nicht an uns übertragen.' },
        cookies: { heading: '5. Cookies', body: 'Wir verwenden die folgenden Arten von Cookies:', essential: 'Notwendige Cookies', essentialDesc: 'Erforderlich, damit die Website ordnungsgemäß funktioniert', preference: 'Präferenz-Cookies', preferenceDesc: 'Merken sich Ihre Einstellungen wie die Sprachpräferenz', advertising: 'Werbe-Cookies', advertisingDesc: 'Werden von Google AdSense und seinen Partnern verwendet, um relevante Werbung anzuzeigen (siehe Abschnitt Werbung unten)' },
        advertising: { heading: '6. Werbung', body1: 'Wir verwenden Google AdSense, um Werbung auf unserer Website anzuzeigen. Google AdSense und seine Werbepartner können Cookies und Web-Beacons verwenden, um Anzeigen auf Grundlage Ihrer früheren Besuche dieser und anderer Websites im Internet auszuliefern.', body2: 'Diese Werbe-Cookies ermöglichen es Google und seinen Partnern, Ihnen Anzeigen basierend auf Ihren Interessen zu zeigen. Sie können personalisierte Werbung deaktivieren, indem Sie www.aboutads.info/choices/ oder die Google-Anzeigeneinstellungen besuchen.', important: 'Wichtig', importantBody: 'Ihre PDF-Dateien werden niemals an Google oder ein Werbenetzwerk weitergegeben. Die gesamte Dateiverarbeitung erfolgt lokal in Ihrem Browser. Werbe-Cookies betreffen nur die Auslieferung von Anzeigen und haben keinen Zugriff auf Ihre Dokumente.' },
        thirdParty: { heading: '7. Drittanbieter-Dienste', body: 'Abgesehen von den oben genannten Werbediensten gibt {brand} Ihre Dateidaten nicht an Dritte weiter. Wir verwenden nicht:', items: ['Drittanbieter-Analysen, die einzelne Nutzer verfolgen', 'Tracking-Pixel sozialer Medien', 'Externe Dateiverarbeitungsdienste'] },
        security: { heading: '8. Datensicherheit', body: 'Da Ihre Dateien Ihr Gerät niemals verlassen, sind sie durch die Sicherheitsmaßnahmen Ihres eigenen Geräts geschützt. Wir empfehlen:', items: ['Verwenden Sie einen aktuellen Browser', 'Halten Sie Ihr Betriebssystem auf dem neuesten Stand', 'Nutzen Sie sichere Netzwerke beim Umgang mit sensiblen Dokumenten'] },
        rights: { heading: '9. Ihre Rechte', body: 'Da wir keine personenbezogenen Daten erheben, gibt es keine personenbezogenen Daten, auf die Sie zugreifen, die Sie korrigieren oder löschen könnten. Sie können den lokalen Speicher Ihres Browsers jederzeit löschen, um von {brand} gespeicherte Einstellungen zu entfernen.' },
        children: { heading: '10. Datenschutz von Kindern', body: '{brand} richtet sich nicht an Kinder unter 13 Jahren. Wir erfassen wissentlich keine Daten von Kindern.' },
        changes: { heading: '11. Änderungen dieser Erklärung', body: 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir informieren Sie über Änderungen, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen und das Datum „Zuletzt aktualisiert“ anpassen.' },
        contact: { heading: '12. Kontakt', body: 'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte über unsere Kontaktseite.' },
      },
    },
    termsPage: {
      metaTitle: 'Nutzungsbedingungen',
      heroTitle: 'Nutzungsbedingungen',
      heroSubtitle: 'Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie {brand} nutzen.',
      highlights: {
        clientSide: { title: '100 % clientseitig', description: 'Ihre Dateien werden lokal in Ihrem Browser verarbeitet und niemals auf einen Server hochgeladen.' },
        privacyFirst: { title: 'Privatsphäre zuerst', description: 'Wir greifen nicht auf Ihre Dokumente zu, speichern oder übertragen sie nicht. Ihre Daten bleiben auf Ihrem Gerät.' },
        free: { title: 'Kostenlos', description: 'Alle PDF-Tools sind kostenlos. Keine Registrierung erforderlich, keine versteckten Gebühren, keine Premium-Stufen.' },
        fairUse: { title: 'Angemessene Nutzung', description: 'Wir bitten Sie, unseren Dienst verantwortungsvoll und nicht für illegale Zwecke zu nutzen.' },
      },
      lastUpdated: 'Zuletzt aktualisiert: 24. März 2026',
      contactBadgeTitle: 'Fragen?',
      contactBadgeDesc: 'Kontaktieren Sie uns, wenn Sie Fragen zu diesen Bedingungen haben',
      sections: {
        acceptance: { heading: '1. Annahme der Bedingungen', body: 'Durch den Zugriff auf und die Nutzung von {brand} („der Dienst“) erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie diesen Bedingungen nicht zustimmen, nutzen Sie den Dienst bitte nicht.' },
        serviceDesc: { heading: '2. Beschreibung des Dienstes', body: '{brand} ist eine kostenlose, browserbasierte Suite von PDF-Tools, mit der Nutzer PDF-Dateien zusammenführen, teilen, komprimieren, konvertieren, bearbeiten und verschiedene weitere Vorgänge durchführen können. Der Dienst verarbeitet alle Dateien vollständig clientseitig mithilfe der WebAssembly-Technologie.' },
        privacy: { heading: '3. Datenschutz und Datenverarbeitung', processingHeading: '3.1 Clientseitige Verarbeitung', processingItems: ['Die gesamte Dateiverarbeitung erfolgt lokal in Ihrem Browser. Ihre Dokumente werden niemals auf einen externen Server hochgeladen.', 'Wir haben keinen Zugriff auf Ihre Dateien und speichern oder übertragen sie nicht.', 'Sobald Sie den Browser-Tab schließen oder aktualisieren, werden Ihre Daten dauerhaft aus dem Speicher gelöscht.'], collectedHeading: '3.2 Welche Daten wir erheben', collectedBody: 'Wir können minimale Nutzungsdaten (z. B. welche Tools genutzt werden) zu Analysezwecken erheben. Den Inhalt Ihrer PDF-Dateien erfassen, speichern oder verarbeiten wir nicht.', cookiesHeading: '3.3 Cookies', cookiesBody: 'Wir verwenden notwendige Cookies, um die Sitzungsfunktionalität aufrechtzuerhalten. Es werden keine Tracking- oder Werbe-Cookies von Drittanbietern verwendet.' },
        responsibilities: { heading: '4. Pflichten des Nutzers', body: 'Sie verpflichten sich, Folgendes zu unterlassen:', items: ['Den Dienst für illegale Zwecke zu nutzen', 'Dateien mit schädlichem Inhalt hochzuladen oder zu verarbeiten', 'Zu versuchen, den Dienst zurückzuentwickeln oder auszunutzen', 'Automatisierte Tools zu verwenden, um über die normale menschliche Nutzung hinaus auf den Dienst zuzugreifen'] },
        ip: { heading: '5. Geistiges Eigentum', items: ['{brand}: Der Dienst, einschließlich seines Designs, Codes und Brandings, ist Eigentum von {brand} und unter AGPL-3.0 lizenziert.', 'Ihre Dateien: Sie behalten das volle Eigentum an allen Dateien, die Sie über den Dienst verarbeiten.', 'Drittanbieter-Bibliotheken: Der Dienst verwendet Open-Source-Bibliotheken (PDF.js, pdf-lib, PyMuPDF) unter ihren jeweiligen Lizenzen.'] },
        disclaimer: { heading: '6. Gewährleistungsausschluss', body: 'DER DIENST WIRD „WIE BESEHEN“ OHNE JEGLICHE GEWÄHRLEISTUNG BEREITGESTELLT. WIR GARANTIEREN NICHT:', items: ['Dass der Dienst unterbrechungs- oder fehlerfrei funktioniert', 'Dass die Ergebnisse der Nutzung des Dienstes korrekt oder zuverlässig sind', 'Dass die Qualität der über den Dienst bezogenen Produkte oder Dienstleistungen Ihren Erwartungen entspricht'] },
        liability: { heading: '7. Haftungsbeschränkung', body: '{brand} HAFTET IN KEINEM FALL FÜR INDIREKTE, NEBEN-, BESONDERE ODER FOLGESCHÄDEN, DIE SICH AUS ODER IN VERBINDUNG MIT IHRER NUTZUNG DES DIENSTES ERGEBEN.' },
        changes: { heading: '8. Änderungen des Dienstes', body: 'Wir behalten uns das Recht vor:', items: ['Jederzeit Teile des Dienstes zu ändern oder einzustellen', 'Diese Bedingungen jederzeit zu aktualisieren. Die fortgesetzte Nutzung gilt als Annahme der Änderungen.'] },
        beta: { heading: '9. Beta-Funktionen', body: 'Bestimmte Funktionen (z. B. der Workflow-Editor) können als „Beta“ oder „Frühe Entwicklung“ gekennzeichnet sein. Diese Funktionen können instabil sein, und wir übernehmen keine Haftung für Probleme, die aus ihrer Nutzung entstehen.' },
        governingLaw: { heading: '10. Anwendbares Recht', body: 'Diese Bedingungen unterliegen dem anwendbaren Recht und werden danach ausgelegt, ohne Berücksichtigung der Kollisionsnormen.' },
        contact: { heading: '11. Kontakt', body: 'Bei Fragen zu diesen Bedingungen kontaktieren Sie uns bitte über unsere {contactLink} oder per E-Mail: support@pdfkoi.com', contactLink: 'Kontaktseite' },
      },
    },
    cookiesPage: {
      metaTitle: 'Cookie-Richtlinie',
      heroTitle: 'Cookie-Richtlinie',
      heroSubtitle: 'Diese Seite erläutert, wie {brand} Cookies und Browserspeicher nutzt, um wesentliche Website-Funktionen zu unterstützen.',
      highlights: {
        minimal: { title: 'Minimale Nutzung', description: 'Wir möchten nur den Speicher verwenden, der nötig ist, damit die Website funktioniert und Ihre Einstellungen gespeichert werden.' },
        noTracking: { title: 'Kein Werbe-Tracking', description: 'Diese Richtlinie erlaubt keine Werbe-Cookies oder Cross-Site-Tracking für PDF-Inhalte.' },
        onDevice: { title: 'Auf Ihrem Gerät gespeichert', description: 'Präferenzdaten werden in der Regel in Ihrem eigenen Browser gespeichert und nicht mit Ihren Dateien hochgeladen.' },
        privacyFirst: { title: 'Datenschutzorientiertes Design', description: 'Die PDF-Verarbeitung bleibt in Ihrem Browser, was den Bedarf an serverseitigen Kennungen reduziert.' },
      },
      lastUpdated: 'Zuletzt aktualisiert: 28. März 2026',
      table: {
        item: 'Element', purpose: 'Zweck', technology: 'Technologie', duration: 'Dauer',
        rows: {
          language: { name: 'Spracheinstellung', purpose: 'Merkt sich die von Ihnen gewählte Sprache, damit die Website in Ihrer bevorzugten Sprache geöffnet wird.', storage: 'Lokaler Speicher', duration: 'Bis Sie die Browserdaten löschen' },
          recent: { name: 'Zuletzt verwendete Dateien und gespeicherte Arbeit', purpose: 'Behält kürzliche Aktivitäten und laufende Elemente aus Bequemlichkeit auf Ihrem eigenen Gerät.', storage: 'Lokaler Speicher', duration: 'Bis Sie die Browserdaten löschen' },
          state: { name: 'Wesentlicher Website-Zustand', purpose: 'Unterstützt das Kernverhalten der Oberfläche wie Tool-Zustand, Dialoge und Benutzereinstellungen.', storage: 'Sitzungs- oder lokaler Speicher', duration: 'Während der Sitzung oder bis Sie die Browserdaten löschen' },
        },
      },
      sections: {
        covers: { heading: '1. Geltungsbereich dieser Richtlinie', p1: 'Diese Cookie-Richtlinie erläutert, wie {brand} Cookies, lokalen Speicher, Sitzungsspeicher und ähnliche Browser-Technologien nutzt, wenn Sie die Website besuchen oder unsere PDF-Tools verwenden.', p2: 'Da unser Produkt darauf ausgelegt ist, Dateien im Browser zu verarbeiten, versuchen wir, die Speichernutzung auf wesentliche Funktionen, Einstellungen und Produktnutzbarkeit zu beschränken.' },
        means: { heading: '2. Was wir unter Cookies und ähnlichen Technologien verstehen', p1: 'Cookies sind kleine Textdateien, die in Ihrem Browser abgelegt werden. Ähnliche Technologien umfassen lokalen Speicher, Sitzungsspeicher und vom Browser verwaltete Präferenzdaten. In der Praxis können sich einige Website-Funktionen auf Browserspeicher statt auf klassische Cookies stützen.', p2: 'Zur Klarheit verwendet diese Richtlinie den Ausdruck „Cookies und Browserspeicher“, um all diese Technologien zusammenzufassen, sofern ein Abschnitt nichts anderes angibt.' },
        uses: { heading: '3. Wie {brand} Cookies und Browserspeicher nutzt' },
        categories: {
          heading: '4. Nutzungskategorien',
          essential: { heading: 'Wesentliche Funktionalität', body: 'Diese Elemente tragen dazu bei, dass die Website zuverlässig funktioniert, der Zustand der Oberfläche konsistent bleibt und Funktionen unterstützt werden, die Nutzer von einem browserbasierten Tool vernünftigerweise erwarten.' },
          preference: { heading: 'Präferenzspeicher', body: 'Der Präferenzspeicher hilft, Einstellungen wie die Sprachwahl oder andere nicht sensible Produkteinstellungen zu merken, damit Sie die Website nicht bei jedem Besuch neu konfigurieren müssen.' },
          local: { heading: 'Lokale Produktivitätsfunktionen', body: 'Einige Tools können kürzliche Aktionen oder laufende Informationen auf Ihrem eigenen Gerät bewahren, um die Nutzbarkeit nach Aktualisierungen oder unterbrochenen Sitzungen zu verbessern.' },
        },
        notUsed: { heading: '5. Wofür wir diese Technologien nicht verwenden', items: ['Wir verwenden keine Cookies, um den Inhalt Ihrer PDF-Dateien hochzuladen oder zu prüfen.', 'Wir verwenden keine Werbe-Cookies, um aus Ihrer Dokumentaktivität verhaltensbasierte Werbeprofile zu erstellen.', 'Wir verlassen uns nicht auf Cookies, um Ihre Dateien an Drittanbieter-Dienste zur PDF-Verarbeitung zu übertragen.', 'Wir beanspruchen nicht das Recht, Browserspeicher zu nutzen, um Dokumente außerhalb der von Ihnen gewählten Tools zu lesen.'] },
        thirdParty: { heading: '6. Drittanbieter-Dienste', p1: 'Wenn die Website auf Dienste wie GitHub oder X verlinkt, können diese Plattformen beim Besuch eigene Cookies setzen. Ihr Cookie-Verhalten unterliegt ihren eigenen Richtlinien, nicht dieser Seite.', p2: 'Diese Richtlinie umfasst Cookies und Browserspeicher, die für das {brand}-Website-Erlebnis selbst verwendet werden.' },
        control: { heading: '7. So steuern oder löschen Sie Cookies und lokalen Speicher', p1: 'Sie können Cookies und Browserspeicher über Ihre Browsereinstellungen steuern.', items: ['Löschen Sie vorhandene Cookies und Website-Speicher über die Datenschutzeinstellungen Ihres Browsers.', 'Blockieren Sie einige oder alle Cookies, wenn Ihr Browser diese Option bietet.', 'Löschen Sie den lokalen Speicher oder die Websitedaten von {brand}, wenn Sie gespeicherte Einstellungen entfernen möchten.'], p2: 'Bitte beachten Sie, dass das Deaktivieren aller Cookies oder des Website-Speichers die Funktionalität der Website beeinträchtigen kann, einschließlich Ihrer gespeicherten Einstellungen und Komfortfunktionen.' },
        changes: { heading: '8. Änderungen dieser Cookie-Richtlinie', body: 'Wir können diese Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen der Website-Funktionalität, gesetzlichen Anforderungen oder des Produktdesigns Rechnung zu tragen. In diesem Fall aktualisieren wir das Datum oben auf dieser Seite.' },
        contact: { heading: '9. Kontakt', body: 'Wenn Sie Fragen zu dieser Richtlinie haben, nutzen Sie bitte die im Footer der Website verlinkte Kontaktseite.' },
      },
      summary: { heading: 'Praktische Zusammenfassung', body: '{brand} ist so konzipiert, dass der Großteil der Arbeit im Browser erfolgt. Das bedeutet, dass die Website im Allgemeinen nur begrenzten Speicher für Einstellungen und Nutzbarkeit benötigt, statt einer invasiven Tracking-Infrastruktur.', note: 'Überprüfen Sie jederzeit die Website-Einstellungen Ihres Browsers, wenn Sie gespeicherte Einstellungen löschen möchten.' },
    },
  },

  zh: {
    privacyPage: {
      metaTitle: '隐私政策',
      heroTitle: '隐私政策',
      heroSubtitle: '您的隐私是我们的首要任务。{brand} 从设计之初就致力于保护您的数据。',
      highlights: {
        noUpload: { title: '不上传服务器', description: '您的文件绝不会上传到任何服务器，所有处理都在浏览器本地完成。' },
        localProcessing: { title: '本地处理', description: 'PDF 操作通过 JavaScript 和 WebAssembly 直接在您的设备上执行。' },
        cleanup: { title: '自动清理', description: '关闭浏览器标签页或离开页面时，所有文件数据都会自动清除。' },
        noTracking: { title: '无跟踪', description: '我们不会跟踪您的文件内容或个人信息，您的文档始终私密。' },
      },
      lastUpdated: '最后更新：2026 年 7 月',
      badgeTitle: '您的文档在浏览器中安全处理',
      sections: {
        intro: { heading: '1. 引言', body: '{brand}（“我们”）致力于保护您的隐私。本隐私政策说明了您使用我们的 PDF 工具时，我们如何处理您的信息。' },
        howItWorks: { heading: '2. 我们的服务如何运作', body: '{brand} 是一个纯客户端应用，这意味着：', items: ['所有 PDF 处理都在您的网页浏览器中直接完成', '您的文件绝不会上传到我们的服务器或任何第三方服务器', '我们无法查看、访问或存储您的文档', '您的文件始终保留在您的设备上'] },
        infoCollected: { heading: '3. 我们收集的信息', filesHeading: '3.1 您的文件', filesBody: '我们不会收集您的文件。使用我们的 PDF 工具时，文件完全在浏览器内处理，绝不会传输到我们的服务器。', usageHeading: '3.2 使用数据', usageBody: '为改进服务，我们可能收集匿名使用统计，例如：', usageItems: ['哪些工具最受欢迎', '大致地理区域（国家级）', '浏览器类型和版本', '设备类型（桌面、移动、平板）'], usageFooter: '这些数据经过聚合和匿名化处理，无法用于识别您的个人身份。' },
        localStorage: { heading: '4. 本地存储', body: '{brand} 可能使用您浏览器的本地存储来：', items: ['记住您的语言偏好', '保存您最近使用的工具历史', '保存中断会话的未完成工作'], footer: '这些数据仅存储在您的设备上，不会传输给我们。' },
        cookies: { heading: '5. Cookie', body: '我们使用以下类型的 Cookie：', essential: '必要 Cookie', essentialDesc: '网站正常运行所必需', preference: '偏好 Cookie', preferenceDesc: '记住语言偏好等设置', advertising: '广告 Cookie', advertisingDesc: '由 Google AdSense 及其合作伙伴用于展示相关广告（见下方广告章节）' },
        advertising: { heading: '6. 广告', body1: '我们使用 Google AdSense 在我们的网站上展示广告。Google AdSense 及其广告合作伙伴可能使用 Cookie 和网络信标，根据您此前访问本网站及互联网上其他网站的情况投放广告。', body2: '这些广告 Cookie 使 Google 及其合作伙伴能够根据您的兴趣向您展示广告。您可以通过访问 www.aboutads.info/choices/ 或 Google 广告设置来选择退出个性化广告。', important: '重要提示', importantBody: '您的 PDF 文件绝不会与 Google 或任何广告网络共享。所有文件处理都在浏览器本地完成。广告 Cookie 仅与广告投放相关，无法访问您的文档。' },
        thirdParty: { heading: '7. 第三方服务', body: '除上述广告服务外，{brand} 不会与任何第三方共享您的文件数据。我们不使用：', items: ['跟踪个人用户的第三方分析', '社交媒体跟踪像素', '外部文件处理服务'] },
        security: { heading: '8. 数据安全', body: '由于您的文件不会离开设备，它们受到您设备自身安全措施的保护。我们建议：', items: ['使用最新版本的浏览器', '保持操作系统更新', '处理敏感文档时使用安全网络'] },
        rights: { heading: '9. 您的权利', body: '由于我们不收集个人数据，因此没有需要访问、更正或删除的个人数据。您可以随时清除浏览器本地存储，删除 {brand} 保存的任何偏好设置。' },
        children: { heading: '10. 儿童隐私', body: '{brand} 不面向 13 岁以下的儿童，我们不会故意收集儿童的任何信息。' },
        changes: { heading: '11. 本政策的变更', body: '我们可能不时更新本隐私政策。如有变更，我们会在本页发布新的隐私政策并更新“最后更新”日期。' },
        contact: { heading: '12. 联系我们', body: '如果您对本隐私政策有任何疑问，请通过我们的联系页面与我们联系。' },
      },
    },
    termsPage: {
      metaTitle: '服务条款',
      heroTitle: '服务条款',
      heroSubtitle: '使用 {brand} 前，请仔细阅读这些条款。',
      highlights: {
        clientSide: { title: '100% 纯客户端', description: '您的文件在浏览器本地处理，绝不会上传到任何服务器。' },
        privacyFirst: { title: '隐私优先', description: '我们不访问、存储或传输您的文档，数据始终留在您的设备上。' },
        free: { title: '免费使用', description: '所有 PDF 工具均免费，无需注册，无隐藏费用，无高级付费层级。' },
        fairUse: { title: '合理使用', description: '我们希望您负责任地使用我们的服务，不将其用于任何非法目的。' },
      },
      lastUpdated: '最后更新：2026 年 3 月 24 日',
      contactBadgeTitle: '有疑问？',
      contactBadgeDesc: '如果您对这些条款有疑问，请联系我们',
      sections: {
        acceptance: { heading: '1. 接受条款', body: '访问和使用 {brand}（“本服务”）即表示您同意受这些服务条款的约束。如果您不同意这些条款，请勿使用本服务。' },
        serviceDesc: { heading: '2. 服务说明', body: '{brand} 是一套基于浏览器的免费 PDF 工具，允许用户合并、拆分、压缩、转换、编辑 PDF 文件并执行各种操作。本服务使用 WebAssembly 技术完全在客户端处理所有文件。' },
        privacy: { heading: '3. 隐私与数据处理', processingHeading: '3.1 客户端处理', processingItems: ['所有文件处理都在浏览器本地完成，您的文档绝不会上传到任何外部服务器。', '我们无法访问、存储或传输您的文件。', '一旦关闭或刷新浏览器标签页，您的数据将从内存中永久删除。'], collectedHeading: '3.2 我们收集的信息', collectedBody: '我们可能收集最少的使用数据（例如使用了哪些工具）用于分析目的。我们不收集、存储或处理您的 PDF 文件内容。', cookiesHeading: '3.3 Cookie', cookiesBody: '我们使用必要 Cookie 来维持会话功能，不使用第三方跟踪或广告 Cookie。' },
        responsibilities: { heading: '4. 用户责任', body: '您同意不进行以下行为：', items: ['将本服务用于任何非法目的', '上传或处理包含恶意内容的文件', '尝试对本服务进行逆向工程或利用漏洞', '使用自动化工具以超出正常人工使用的方式访问本服务'] },
        ip: { heading: '5. 知识产权', items: ['{brand}：本服务（包括其设计、代码和品牌）是 {brand} 的财产，依据 AGPL-3.0 许可。', '您的文件：您保留通过本服务处理的所有文件的完整所有权。', '第三方库：本服务依据各自的许可证使用开源库（PDF.js、pdf-lib、PyMuPDF）。'] },
        disclaimer: { heading: '6. 免责声明', body: '本服务“按原样”提供，不附带任何形式的保证。我们不保证：', items: ['本服务不会中断或没有错误', '使用本服务的结果准确或可靠', '通过本服务获得的产品或服务的质量符合您的期望'] },
        liability: { heading: '7. 责任限制', body: '在任何情况下，{brand} 均不对因使用本服务而产生或与之相关的任何间接、附带、特殊或后果性损害承担责任。' },
        changes: { heading: '8. 服务变更', body: '我们保留以下权利：', items: ['随时修改或终止本服务的任何部分', '随时更新这些条款。继续使用即表示接受变更。'] },
        beta: { heading: '9. Beta 功能', body: '某些功能（例如工作流编辑器）可能被标记为“Beta”或“早期开发”。这些功能可能不稳定，我们对因使用这些功能而产生的问题不承担责任。' },
        governingLaw: { heading: '10. 适用法律', body: '这些条款应受适用法律管辖并依其解释，不受法律冲突条款的影响。' },
        contact: { heading: '11. 联系方式', body: '如对这些条款有疑问，请通过我们的{contactLink}联系我们，或发送邮件至：support@pdfkoi.com', contactLink: '联系页面' },
      },
    },
    cookiesPage: {
      metaTitle: 'Cookie 政策',
      heroTitle: 'Cookie 政策',
      heroSubtitle: '本页面说明 {brand} 如何使用 Cookie 和浏览器存储来支持网站的基本功能。',
      highlights: {
        minimal: { title: '最小化使用', description: '我们力求仅使用让网站正常运行和记住您偏好所必需的存储。' },
        noTracking: { title: '无广告跟踪', description: '本政策不允许针对 PDF 内容使用广告 Cookie 或跨站跟踪。' },
        onDevice: { title: '存储在您的设备上', description: '偏好数据通常存储在您自己的浏览器中，不会随文件一起上传。' },
        privacyFirst: { title: '隐私优先的设计', description: 'PDF 处理在您的浏览器中完成，减少了对服务器端标识符的需求。' },
      },
      lastUpdated: '最后更新：2026 年 3 月 28 日',
      table: {
        item: '项目', purpose: '用途', technology: '技术', duration: '时长',
        rows: {
          language: { name: '语言偏好', purpose: '记住您选择的语言，使网站以您偏好的语言打开。', storage: '本地存储', duration: '直到您清除浏览器数据' },
          recent: { name: '最近的文件和已保存的工作', purpose: '为方便起见，将最近的活动和进行中的项目保留在您的设备上。', storage: '本地存储', duration: '直到您清除浏览器数据' },
          state: { name: '网站基本状态', purpose: '支持工具状态、对话框和用户偏好等核心界面行为。', storage: '会话存储或本地存储', duration: '会话期间或直到您清除浏览器数据' },
        },
      },
      sections: {
        covers: { heading: '1. 本政策的适用范围', p1: '本 Cookie 政策说明了当您访问网站或使用我们的 PDF 工具时，{brand} 如何使用 Cookie、本地存储、会话存储及类似的浏览器技术。', p2: '由于我们的产品设计为在浏览器中处理文件，我们努力将存储使用限制在基本功能、偏好和产品易用性上。' },
        means: { heading: '2. 我们对 Cookie 及类似技术的定义', p1: 'Cookie 是放置在浏览器中的小型文本文件。类似技术包括本地存储、会话存储和浏览器管理的偏好数据。实际上，某些网站功能可能依赖浏览器存储而非传统 Cookie。', p2: '为清晰起见，除非某章节另有说明，本政策使用“Cookie 和浏览器存储”这一表述统称所有这些技术。' },
        uses: { heading: '3. {brand} 如何使用 Cookie 和浏览器存储' },
        categories: {
          heading: '4. 使用类别',
          essential: { heading: '基本功能', body: '这些项目有助于网站可靠运行、保持界面状态一致，并支持用户对基于浏览器的工具合理预期的功能。' },
          preference: { heading: '偏好存储', body: '偏好存储帮助记住语言选择或其他非敏感的产品偏好，使您无需每次访问都重新配置网站。' },
          local: { heading: '本地效率功能', body: '某些工具可能会将最近的操作或进行中的信息保留在您的设备上，以改善刷新或会话中断后的易用性。' },
        },
        notUsed: { heading: '5. 我们不使用这些技术的目的', items: ['我们不使用 Cookie 上传或检查您的 PDF 文件内容。', '我们不使用广告 Cookie 根据您的文档活动构建行为广告画像。', '我们不依赖 Cookie 将您的文件转移到第三方 PDF 处理服务。', '我们不主张使用浏览器存储在您选择运行的工具之外读取文档的权利。'] },
        thirdParty: { heading: '6. 第三方服务', p1: '如果网站链接到 GitHub 或 X 等服务，这些平台在您访问时可能会设置自己的 Cookie。它们的 Cookie 行为受其各自政策约束，而非本页面。', p2: '本政策涵盖用于 {brand} 网站体验本身的 Cookie 和浏览器存储。' },
        control: { heading: '7. 如何控制或删除 Cookie 和本地存储', p1: '您可以通过浏览器设置控制 Cookie 和浏览器存储。', items: ['从浏览器隐私设置中删除现有的 Cookie 和网站存储。', '如果浏览器提供该选项，可阻止部分或全部 Cookie。', '如需删除已记住的偏好，可清除 {brand} 的本地存储或网站数据。'], p2: '请注意，禁用所有 Cookie 或网站存储可能会影响网站功能，包括您已保存的偏好和便捷功能。' },
        changes: { heading: '8. 本 Cookie 政策的变更', body: '我们可能不时更新本政策，以反映网站功能、法律要求或产品设计的变更。更新时，我们会更新本页顶部显示的日期。' },
        contact: { heading: '9. 联系方式', body: '如对本政策有疑问，请使用网站页脚中链接的联系页面。' },
      },
      summary: { heading: '实用总结', body: '{brand} 的设计使其大部分工作都在浏览器中完成。这意味着网站通常只需要有限的存储用于偏好和易用性，而不是侵入性的跟踪基础设施。', note: '如需清除已保存的偏好，可随时查看浏览器中的网站设置。' },
    },
  },

  'zh-TW': {
    privacyPage: {
      metaTitle: '隱私權政策',
      heroTitle: '隱私權政策',
      heroSubtitle: '您的隱私是我們的首要任務。{brand} 從設計之初就致力於保護您的資料。',
      highlights: {
        noUpload: { title: '不上傳伺服器', description: '您的檔案絕不會上傳到任何伺服器，所有處理都在瀏覽器本機完成。' },
        localProcessing: { title: '本機處理', description: 'PDF 操作透過 JavaScript 與 WebAssembly 直接在您的裝置上執行。' },
        cleanup: { title: '自動清理', description: '關閉瀏覽器分頁或離開頁面時，所有檔案資料都會自動清除。' },
        noTracking: { title: '無追蹤', description: '我們不會追蹤您的檔案內容或個人資訊，您的文件始終保密。' },
      },
      lastUpdated: '最後更新：2026 年 7 月',
      badgeTitle: '您的文件在瀏覽器中安全處理',
      sections: {
        intro: { heading: '1. 引言', body: '{brand}（「我們」）致力於保護您的隱私。本隱私權政策說明了您使用我們的 PDF 工具時，我們如何處理您的資訊。' },
        howItWorks: { heading: '2. 我們的服務如何運作', body: '{brand} 是一個純用戶端應用程式，這表示：', items: ['所有 PDF 處理都在您的網頁瀏覽器中直接完成', '您的檔案絕不會上傳到我們的伺服器或任何第三方伺服器', '我們無法檢視、存取或儲存您的文件', '您的檔案始終保留在您的裝置上'] },
        infoCollected: { heading: '3. 我們收集的資訊', filesHeading: '3.1 您的檔案', filesBody: '我們不會收集您的檔案。使用我們的 PDF 工具時，檔案完全在瀏覽器內處理，絕不會傳輸到我們的伺服器。', usageHeading: '3.2 使用資料', usageBody: '為改進服務，我們可能收集匿名使用統計，例如：', usageItems: ['哪些工具最受歡迎', '大致地理區域（國家級）', '瀏覽器類型與版本', '裝置類型（桌上型、行動、平板）'], usageFooter: '這些資料經過彙總與匿名化處理，無法用於識別您的個人身分。' },
        localStorage: { heading: '4. 本機儲存', body: '{brand} 可能使用您瀏覽器的本機儲存來：', items: ['記住您的語言偏好', '儲存您最近使用的工具記錄', '儲存中斷工作階段的未完成工作'], footer: '這些資料僅儲存在您的裝置上，不會傳輸給我們。' },
        cookies: { heading: '5. Cookie', body: '我們使用以下類型的 Cookie：', essential: '必要 Cookie', essentialDesc: '網站正常運作所必需', preference: '偏好 Cookie', preferenceDesc: '記住語言偏好等設定', advertising: '廣告 Cookie', advertisingDesc: '由 Google AdSense 及其合作夥伴用於展示相關廣告（見下方廣告章節）' },
        advertising: { heading: '6. 廣告', body1: '我們使用 Google AdSense 在我們的網站上展示廣告。Google AdSense 及其廣告合作夥伴可能使用 Cookie 和網路信標，根據您先前造訪本網站及網際網路上其他網站的情況投放廣告。', body2: '這些廣告 Cookie 使 Google 及其合作夥伴能夠根據您的興趣向您展示廣告。您可以透過造訪 www.aboutads.info/choices/ 或 Google 廣告設定來選擇退出個人化廣告。', important: '重要提示', importantBody: '您的 PDF 檔案絕不會與 Google 或任何廣告網路共用。所有檔案處理都在瀏覽器本機完成。廣告 Cookie 僅與廣告投放相關，無法存取您的文件。' },
        thirdParty: { heading: '7. 第三方服務', body: '除上述廣告服務外，{brand} 不會與任何第三方共用您的檔案資料。我們不使用：', items: ['追蹤個別使用者的第三方分析', '社群媒體追蹤像素', '外部檔案處理服務'] },
        security: { heading: '8. 資料安全', body: '由於您的檔案不會離開裝置，它們受到您裝置自身安全措施的保護。我們建議：', items: ['使用最新版本的瀏覽器', '保持作業系統更新', '處理敏感文件時使用安全網路'] },
        rights: { heading: '9. 您的權利', body: '由於我們不收集個人資料，因此沒有需要存取、更正或刪除的個人資料。您可以隨時清除瀏覽器本機儲存，刪除 {brand} 儲存的任何偏好設定。' },
        children: { heading: '10. 兒童隱私', body: '{brand} 不面向 13 歲以下的兒童，我們不會故意收集兒童的任何資訊。' },
        changes: { heading: '11. 本政策的變更', body: '我們可能不時更新本隱私權政策。如有變更，我們會在本頁發布新的隱私權政策並更新「最後更新」日期。' },
        contact: { heading: '12. 聯絡我們', body: '如果您對本隱私權政策有任何疑問，請透過我們的聯絡頁面與我們聯繫。' },
      },
    },
    termsPage: {
      metaTitle: '服務條款',
      heroTitle: '服務條款',
      heroSubtitle: '使用 {brand} 前，請仔細閱讀這些條款。',
      highlights: {
        clientSide: { title: '100% 純用戶端', description: '您的檔案在瀏覽器本機處理，絕不會上傳到任何伺服器。' },
        privacyFirst: { title: '隱私優先', description: '我們不存取、儲存或傳輸您的文件，資料始終留在您的裝置上。' },
        free: { title: '免費使用', description: '所有 PDF 工具均免費，無需註冊，無隱藏費用，無付費進階層級。' },
        fairUse: { title: '合理使用', description: '我們希望您負責任地使用我們的服務，不將其用於任何非法目的。' },
      },
      lastUpdated: '最後更新：2026 年 3 月 24 日',
      contactBadgeTitle: '有疑問？',
      contactBadgeDesc: '如果您對這些條款有疑問，請聯繫我們',
      sections: {
        acceptance: { heading: '1. 接受條款', body: '存取和使用 {brand}（「本服務」）即表示您同意受這些服務條款的約束。如果您不同意這些條款，請勿使用本服務。' },
        serviceDesc: { heading: '2. 服務說明', body: '{brand} 是一套基於瀏覽器的免費 PDF 工具，允許使用者合併、分割、壓縮、轉換、編輯 PDF 檔案並執行各種操作。本服務使用 WebAssembly 技術完全在用戶端處理所有檔案。' },
        privacy: { heading: '3. 隱私與資料處理', processingHeading: '3.1 用戶端處理', processingItems: ['所有檔案處理都在瀏覽器本機完成，您的文件絕不會上傳到任何外部伺服器。', '我們無法存取、儲存或傳輸您的檔案。', '一旦關閉或重新整理瀏覽器分頁，您的資料將從記憶體中永久刪除。'], collectedHeading: '3.2 我們收集的資訊', collectedBody: '我們可能收集最少的使用資料（例如使用了哪些工具）用於分析目的。我們不收集、儲存或處理您的 PDF 檔案內容。', cookiesHeading: '3.3 Cookie', cookiesBody: '我們使用必要 Cookie 來維持工作階段功能，不使用第三方追蹤或廣告 Cookie。' },
        responsibilities: { heading: '4. 使用者責任', body: '您同意不進行以下行為：', items: ['將本服務用於任何非法目的', '上傳或處理包含惡意內容的檔案', '嘗試對本服務進行逆向工程或利用漏洞', '使用自動化工具以超出正常人工使用的方式存取本服務'] },
        ip: { heading: '5. 智慧財產權', items: ['{brand}：本服務（包括其設計、程式碼與品牌）是 {brand} 的財產，依據 AGPL-3.0 授權。', '您的檔案：您保留透過本服務處理的所有檔案的完整所有權。', '第三方程式庫：本服務依據各自的授權使用開放原始碼程式庫（PDF.js、pdf-lib、PyMuPDF）。'] },
        disclaimer: { heading: '6. 免責聲明', body: '本服務「按原樣」提供，不附帶任何形式的保證。我們不保證：', items: ['本服務不會中斷或沒有錯誤', '使用本服務的結果準確或可靠', '透過本服務獲得的產品或服務的品質符合您的期望'] },
        liability: { heading: '7. 責任限制', body: '在任何情況下，{brand} 均不對因使用本服務而產生或與之相關的任何間接、附帶、特殊或衍生性損害承擔責任。' },
        changes: { heading: '8. 服務變更', body: '我們保留以下權利：', items: ['隨時修改或終止本服務的任何部分', '隨時更新這些條款。繼續使用即表示接受變更。'] },
        beta: { heading: '9. Beta 功能', body: '某些功能（例如工作流程編輯器）可能被標記為「Beta」或「早期開發」。這些功能可能不穩定，我們對因使用這些功能而產生的問題不承擔責任。' },
        governingLaw: { heading: '10. 適用法律', body: '這些條款應受適用法律管轄並依其解釋，不受法律衝突條款的影響。' },
        contact: { heading: '11. 聯絡方式', body: '如對這些條款有疑問，請透過我們的{contactLink}聯繫我們，或寄送郵件至：support@pdfkoi.com', contactLink: '聯絡頁面' },
      },
    },
    cookiesPage: {
      metaTitle: 'Cookie 政策',
      heroTitle: 'Cookie 政策',
      heroSubtitle: '本頁面說明 {brand} 如何使用 Cookie 和瀏覽器儲存來支援網站的基本功能。',
      highlights: {
        minimal: { title: '最小化使用', description: '我們力求僅使用讓網站正常運作和記住您偏好所必需的儲存。' },
        noTracking: { title: '無廣告追蹤', description: '本政策不允許針對 PDF 內容使用廣告 Cookie 或跨站追蹤。' },
        onDevice: { title: '儲存在您的裝置上', description: '偏好資料通常儲存在您自己的瀏覽器中，不會隨檔案一起上傳。' },
        privacyFirst: { title: '隱私優先的設計', description: 'PDF 處理在您的瀏覽器中完成，減少了對伺服器端識別碼的需求。' },
      },
      lastUpdated: '最後更新：2026 年 3 月 28 日',
      table: {
        item: '項目', purpose: '用途', technology: '技術', duration: '時長',
        rows: {
          language: { name: '語言偏好', purpose: '記住您選擇的語言，使網站以您偏好的語言開啟。', storage: '本機儲存', duration: '直到您清除瀏覽器資料' },
          recent: { name: '最近的檔案和已儲存的工作', purpose: '為方便起見，將最近的活動和進行中的項目保留在您的裝置上。', storage: '本機儲存', duration: '直到您清除瀏覽器資料' },
          state: { name: '網站基本狀態', purpose: '支援工具狀態、對話方塊和使用者偏好等核心介面行為。', storage: '工作階段儲存或本機儲存', duration: '工作階段期間或直到您清除瀏覽器資料' },
        },
      },
      sections: {
        covers: { heading: '1. 本政策的適用範圍', p1: '本 Cookie 政策說明了當您造訪網站或使用我們的 PDF 工具時，{brand} 如何使用 Cookie、本機儲存、工作階段儲存及類似的瀏覽器技術。', p2: '由於我們的產品設計為在瀏覽器中處理檔案，我們努力將儲存使用限制在基本功能、偏好和產品易用性上。' },
        means: { heading: '2. 我們對 Cookie 及類似技術的定義', p1: 'Cookie 是放置在瀏覽器中的小型文字檔案。類似技術包括本機儲存、工作階段儲存和瀏覽器管理的偏好資料。實際上，某些網站功能可能依賴瀏覽器儲存而非傳統 Cookie。', p2: '為清晰起見，除非某章節另有說明，本政策使用「Cookie 和瀏覽器儲存」這一表述統稱所有這些技術。' },
        uses: { heading: '3. {brand} 如何使用 Cookie 和瀏覽器儲存' },
        categories: {
          heading: '4. 使用類別',
          essential: { heading: '基本功能', body: '這些項目有助於網站可靠運作、保持介面狀態一致，並支援使用者對基於瀏覽器的工具合理預期的功能。' },
          preference: { heading: '偏好儲存', body: '偏好儲存幫助記住語言選擇或其他非敏感的產品偏好，使您無需每次造訪都重新設定網站。' },
          local: { heading: '本機效率功能', body: '某些工具可能會將最近的操作或進行中的資訊保留在您的裝置上，以改善重新整理或工作階段中斷後的易用性。' },
        },
        notUsed: { heading: '5. 我們不使用這些技術的目的', items: ['我們不使用 Cookie 上傳或檢查您的 PDF 檔案內容。', '我們不使用廣告 Cookie 根據您的文件活動建立行為廣告側寫。', '我們不依賴 Cookie 將您的檔案轉移到第三方 PDF 處理服務。', '我們不主張使用瀏覽器儲存在您選擇執行的工具之外讀取文件的權利。'] },
        thirdParty: { heading: '6. 第三方服務', p1: '如果網站連結到 GitHub 或 X 等服務，這些平台在您造訪時可能會設定自己的 Cookie。它們的 Cookie 行為受其各自政策約束，而非本頁面。', p2: '本政策涵蓋用於 {brand} 網站體驗本身的 Cookie 和瀏覽器儲存。' },
        control: { heading: '7. 如何控制或刪除 Cookie 和本機儲存', p1: '您可以透過瀏覽器設定控制 Cookie 和瀏覽器儲存。', items: ['從瀏覽器隱私設定中刪除現有的 Cookie 和網站儲存。', '如果瀏覽器提供該選項，可封鎖部分或全部 Cookie。', '如需刪除已記住的偏好，可清除 {brand} 的本機儲存或網站資料。'], p2: '請注意，停用所有 Cookie 或網站儲存可能會影響網站功能，包括您已儲存的偏好和便捷功能。' },
        changes: { heading: '8. 本 Cookie 政策的變更', body: '我們可能不時更新本政策，以反映網站功能、法律要求或產品設計的變更。更新時，我們會更新本頁頂部顯示的日期。' },
        contact: { heading: '9. 聯絡方式', body: '如對本政策有疑問，請使用網站頁尾中連結的聯絡頁面。' },
      },
      summary: { heading: '實用總結', body: '{brand} 的設計使其大部分工作都在瀏覽器中完成。這表示網站通常只需要有限的儲存用於偏好和易用性，而不是侵入性的追蹤基礎設施。', note: '如需清除已儲存的偏好，可隨時查看瀏覽器中的網站設定。' },
    },
  },

  pt: {
    privacyPage: {
      metaTitle: 'Política de Privacidade',
      heroTitle: 'Política de Privacidade',
      heroSubtitle: 'Sua privacidade é nossa principal prioridade. O {brand} foi projetado desde o início para proteger seus dados.',
      highlights: {
        noUpload: { title: 'Sem upload para servidores', description: 'Seus arquivos nunca são enviados a nenhum servidor. Todo o processamento ocorre localmente no seu navegador.' },
        localProcessing: { title: 'Processamento local', description: 'As operações de PDF são realizadas com JavaScript e WebAssembly diretamente no seu dispositivo.' },
        cleanup: { title: 'Limpeza automática', description: 'Todos os dados dos arquivos são apagados automaticamente quando você fecha a aba do navegador ou sai da página.' },
        noTracking: { title: 'Sem rastreamento', description: 'Não rastreamos o conteúdo dos seus arquivos nem suas informações pessoais. Seus documentos permanecem privados.' },
      },
      lastUpdated: 'Última atualização: julho de 2026',
      badgeTitle: 'Seus documentos são processados com segurança no seu navegador',
      sections: {
        intro: { heading: '1. Introdução', body: 'O {brand} ("nós") está comprometido em proteger sua privacidade. Esta Política de Privacidade explica como tratamos suas informações quando você usa nossas ferramentas de PDF.' },
        howItWorks: { heading: '2. Como nosso serviço funciona', body: 'O {brand} é uma aplicação do lado do cliente. Isso significa:', items: ['Todo o processamento de PDF ocorre diretamente no seu navegador', 'Seus arquivos nunca são enviados aos nossos servidores nem a servidores de terceiros', 'Não podemos ver, acessar ou armazenar seus documentos', 'Seus arquivos permanecem no seu dispositivo o tempo todo'] },
        infoCollected: { heading: '3. Informações que coletamos', filesHeading: '3.1 Seus arquivos', filesBody: 'Não coletamos seus arquivos. Ao usar nossas ferramentas de PDF, seus arquivos são processados inteiramente no seu navegador. Eles nunca são transmitidos aos nossos servidores.', usageHeading: '3.2 Dados de uso', usageBody: 'Podemos coletar estatísticas de uso anônimas para melhorar nosso serviço, como:', usageItems: ['Quais ferramentas são mais populares', 'Região geográfica geral (nível de país)', 'Tipo e versão do navegador', 'Tipo de dispositivo (desktop, celular, tablet)'], usageFooter: 'Esses dados são agregados e anonimizados. Eles não podem ser usados para identificá-lo pessoalmente.' },
        localStorage: { heading: '4. Armazenamento local', body: 'O {brand} pode usar o armazenamento local do seu navegador para:', items: ['Lembrar sua preferência de idioma', 'Armazenar seu histórico recente de ferramentas', 'Salvar trabalhos em andamento de sessões interrompidas'], footer: 'Esses dados são armazenados apenas no seu dispositivo e não são transmitidos para nós.' },
        cookies: { heading: '5. Cookies', body: 'Usamos os seguintes tipos de cookies:', essential: 'Cookies essenciais', essentialDesc: 'Necessários para que o site funcione corretamente', preference: 'Cookies de preferência', preferenceDesc: 'Lembram suas configurações, como a preferência de idioma', advertising: 'Cookies de publicidade', advertisingDesc: 'Usados pelo Google AdSense e seus parceiros para exibir anúncios relevantes (veja a seção Publicidade abaixo)' },
        advertising: { heading: '6. Publicidade', body1: 'Usamos o Google AdSense para exibir anúncios em nosso site. O Google AdSense e seus parceiros de publicidade podem usar cookies e web beacons para veicular anúncios com base em suas visitas anteriores a este site e a outros sites na Internet.', body2: 'Esses cookies de publicidade permitem que o Google e seus parceiros mostrem anúncios com base nos seus interesses. Você pode desativar a publicidade personalizada visitando www.aboutads.info/choices/ ou as Configurações de anúncios do Google.', important: 'Importante', importantBody: 'Seus arquivos PDF nunca são compartilhados com o Google nem com qualquer rede de publicidade. Todo o processamento de arquivos ocorre localmente no seu navegador. Os cookies de publicidade referem-se apenas à entrega de anúncios e não têm acesso aos seus documentos.' },
        thirdParty: { heading: '7. Serviços de terceiros', body: 'Além dos serviços de publicidade mencionados acima, o {brand} não compartilha os dados dos seus arquivos com terceiros. Não usamos:', items: ['Análises de terceiros que rastreiam usuários individuais', 'Pixels de rastreamento de redes sociais', 'Serviços externos de processamento de arquivos'] },
        security: { heading: '8. Segurança dos dados', body: 'Como seus arquivos nunca saem do seu dispositivo, eles são protegidos pelas medidas de segurança do seu próprio dispositivo. Recomendamos:', items: ['Usar um navegador atualizado', 'Manter seu sistema operacional atualizado', 'Usar redes seguras ao lidar com documentos confidenciais'] },
        rights: { heading: '9. Seus direitos', body: 'Como não coletamos dados pessoais, não há dados pessoais para acessar, corrigir ou excluir. Você pode limpar o armazenamento local do seu navegador a qualquer momento para remover as preferências salvas pelo {brand}.' },
        children: { heading: '10. Privacidade das crianças', body: 'O {brand} não é direcionado a crianças menores de 13 anos. Não coletamos intencionalmente informações de crianças.' },
        changes: { heading: '11. Alterações nesta política', body: 'Podemos atualizar esta Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página e atualizando a data de "Última atualização".' },
        contact: { heading: '12. Fale conosco', body: 'Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pela nossa página de contato.' },
      },
    },
    termsPage: {
      metaTitle: 'Termos de Serviço',
      heroTitle: 'Termos de Serviço',
      heroSubtitle: 'Leia atentamente estes termos antes de usar o {brand}.',
      highlights: {
        clientSide: { title: '100% do lado do cliente', description: 'Seus arquivos são processados localmente no seu navegador e nunca enviados a nenhum servidor.' },
        privacyFirst: { title: 'Privacidade em primeiro lugar', description: 'Não acessamos, armazenamos nem transmitimos seus documentos. Seus dados permanecem no seu dispositivo.' },
        free: { title: 'Grátis para usar', description: 'Todas as ferramentas de PDF são gratuitas. Sem registro, sem taxas ocultas, sem planos premium.' },
        fairUse: { title: 'Uso justo', description: 'Pedimos que você use nosso serviço de forma responsável e não para fins ilegais.' },
      },
      lastUpdated: 'Última atualização: 24 de março de 2026',
      contactBadgeTitle: 'Dúvidas?',
      contactBadgeDesc: 'Entre em contato se tiver dúvidas sobre estes Termos',
      sections: {
        acceptance: { heading: '1. Aceitação dos termos', body: 'Ao acessar e usar o {brand} ("o Serviço"), você concorda em ficar vinculado a estes Termos de Serviço. Se você não concordar com estes termos, não use o Serviço.' },
        serviceDesc: { heading: '2. Descrição do serviço', body: 'O {brand} é um conjunto gratuito de ferramentas de PDF baseado em navegador que permite aos usuários mesclar, dividir, compactar, converter, editar e realizar diversas operações em arquivos PDF. O Serviço processa todos os arquivos inteiramente do lado do cliente usando a tecnologia WebAssembly.' },
        privacy: { heading: '3. Privacidade e tratamento de dados', processingHeading: '3.1 Processamento do lado do cliente', processingItems: ['Todo o processamento de arquivos ocorre localmente no seu navegador. Seus documentos nunca são enviados a nenhum servidor externo.', 'Não temos acesso aos seus arquivos, nem os armazenamos ou transmitimos.', 'Assim que você fecha ou atualiza a aba do navegador, seus dados são excluídos permanentemente da memória.'], collectedHeading: '3.2 Informações que coletamos', collectedBody: 'Podemos coletar dados mínimos de uso (por exemplo, quais ferramentas são usadas) para fins de análise. Não coletamos, armazenamos ou processamos o conteúdo dos seus arquivos PDF.', cookiesHeading: '3.3 Cookies', cookiesBody: 'Usamos cookies essenciais para manter a funcionalidade da sessão. Nenhum cookie de rastreamento ou publicidade de terceiros é usado.' },
        responsibilities: { heading: '4. Responsabilidades do usuário', body: 'Você concorda em não:', items: ['Usar o Serviço para qualquer finalidade ilegal', 'Enviar ou processar arquivos com conteúdo malicioso', 'Tentar fazer engenharia reversa ou explorar o Serviço', 'Usar ferramentas automatizadas para acessar o Serviço além do uso humano normal'] },
        ip: { heading: '5. Propriedade intelectual', items: ['{brand}: O Serviço, incluindo seu design, código e marca, é propriedade do {brand} e está licenciado sob AGPL-3.0.', 'Seus arquivos: Você mantém a propriedade total de todos os arquivos que processar através do Serviço.', 'Bibliotecas de terceiros: O Serviço usa bibliotecas de código aberto (PDF.js, pdf-lib, PyMuPDF) sob suas respectivas licenças.'] },
        disclaimer: { heading: '6. Isenção de garantias', body: 'O SERVIÇO É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO. NÃO GARANTIMOS:', items: ['Que o Serviço será ininterrupto ou livre de erros', 'Que os resultados do uso do Serviço serão precisos ou confiáveis', 'Que a qualidade de quaisquer produtos ou serviços obtidos através do Serviço atenderá às suas expectativas'] },
        liability: { heading: '7. Limitação de responsabilidade', body: 'EM NENHUMA HIPÓTESE O {brand} SERÁ RESPONSÁVEL POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS OU CONSEQUENTES DECORRENTES DE OU RELACIONADOS AO SEU USO DO SERVIÇO.' },
        changes: { heading: '8. Alterações no serviço', body: 'Reservamo-nos o direito de:', items: ['Modificar ou descontinuar qualquer parte do Serviço a qualquer momento', 'Atualizar estes Termos a qualquer momento. O uso continuado constitui aceitação das alterações.'] },
        beta: { heading: '9. Recursos beta', body: 'Certos recursos (por exemplo, o Editor de fluxo de trabalho) podem ser rotulados como "Beta" ou "Desenvolvimento inicial". Esses recursos podem ser instáveis, e nos isentamos de responsabilidade por problemas decorrentes do seu uso.' },
        governingLaw: { heading: '10. Lei aplicável', body: 'Estes Termos serão regidos e interpretados de acordo com as leis aplicáveis, sem considerar suas disposições sobre conflito de leis.' },
        contact: { heading: '11. Contato', body: 'Para dúvidas sobre estes Termos, entre em contato conosco pela nossa {contactLink} ou por e-mail: support@pdfkoi.com', contactLink: 'página de contato' },
      },
    },
    cookiesPage: {
      metaTitle: 'Política de Cookies',
      heroTitle: 'Política de Cookies',
      heroSubtitle: 'Esta página explica como o {brand} usa cookies e armazenamento do navegador para dar suporte aos recursos essenciais do site.',
      highlights: {
        minimal: { title: 'Uso mínimo', description: 'Buscamos usar apenas o armazenamento necessário para que o site funcione e lembre suas preferências.' },
        noTracking: { title: 'Sem rastreamento de anúncios', description: 'Esta política não permite cookies de publicidade nem rastreamento entre sites para conteúdo PDF.' },
        onDevice: { title: 'Armazenado no seu dispositivo', description: 'Os dados de preferência normalmente são armazenados no seu próprio navegador, não enviados junto com seus arquivos.' },
        privacyFirst: { title: 'Design com privacidade em primeiro lugar', description: 'O processamento de PDF permanece no seu navegador, o que reduz a necessidade de identificadores no servidor.' },
      },
      lastUpdated: 'Última atualização: 28 de março de 2026',
      table: {
        item: 'Item', purpose: 'Finalidade', technology: 'Tecnologia', duration: 'Duração',
        rows: {
          language: { name: 'Preferência de idioma', purpose: 'Lembra o idioma que você selecionou para que o site abra na sua localidade preferida.', storage: 'Armazenamento local', duration: 'Até você limpar os dados do navegador' },
          recent: { name: 'Arquivos recentes e trabalho salvo', purpose: 'Mantém atividades recentes e itens em andamento no seu próprio dispositivo por conveniência.', storage: 'Armazenamento local', duration: 'Até você limpar os dados do navegador' },
          state: { name: 'Estado essencial do site', purpose: 'Dá suporte ao comportamento central da interface, como estado das ferramentas, diálogos e preferências do usuário.', storage: 'Armazenamento de sessão ou local', duration: 'Durante a sessão ou até você limpar os dados do navegador' },
        },
      },
      sections: {
        covers: { heading: '1. O que esta política abrange', p1: 'Esta Política de Cookies explica como o {brand} usa cookies, armazenamento local, armazenamento de sessão e tecnologias de navegador semelhantes quando você visita o site ou usa nossas ferramentas de PDF.', p2: 'Como nosso produto foi projetado para processar arquivos no navegador, tentamos manter o uso de armazenamento limitado à funcionalidade essencial, às preferências e à usabilidade do produto.' },
        means: { heading: '2. O que entendemos por cookies e tecnologias semelhantes', p1: 'Cookies são pequenos arquivos de texto colocados no seu navegador. Tecnologias semelhantes incluem armazenamento local, armazenamento de sessão e dados de preferência gerenciados pelo navegador. Na prática, alguns recursos do site podem depender do armazenamento do navegador em vez dos cookies clássicos.', p2: 'Para maior clareza, esta política usa a expressão "cookies e armazenamento do navegador" para cobrir todas essas tecnologias em conjunto, salvo indicação em contrário em uma seção.' },
        uses: { heading: '3. Como o {brand} usa cookies e armazenamento do navegador' },
        categories: {
          heading: '4. Categorias de uso',
          essential: { heading: 'Funcionalidade essencial', body: 'Esses itens ajudam o site a operar de forma confiável, mantêm o estado da interface consistente e dão suporte a recursos que os usuários razoavelmente esperam de uma ferramenta baseada em navegador.' },
          preference: { heading: 'Armazenamento de preferências', body: 'O armazenamento de preferências ajuda a lembrar configurações como a escolha de idioma ou outras preferências não sensíveis do produto, para que você não precise reconfigurar o site a cada visita.' },
          local: { heading: 'Recursos locais de produtividade', body: 'Algumas ferramentas podem preservar ações recentes ou informações em andamento no seu próprio dispositivo para melhorar a usabilidade após atualizações ou sessões interrompidas.' },
        },
        notUsed: { heading: '5. Para que não usamos essas tecnologias', items: ['Não usamos cookies para enviar ou inspecionar o conteúdo dos seus arquivos PDF.', 'Não usamos cookies de publicidade para criar perfis de anúncios comportamentais a partir da atividade dos seus documentos.', 'Não dependemos de cookies para mover seus arquivos para serviços de processamento de PDF de terceiros.', 'Não reivindicamos o direito de usar o armazenamento do navegador para ler documentos fora das ferramentas que você escolhe executar.'] },
        thirdParty: { heading: '6. Serviços de terceiros', p1: 'Se o site vincular a serviços como GitHub ou X, essas plataformas podem definir seus próprios cookies quando você os visita. O comportamento de cookies deles é regido por suas próprias políticas, não por esta página.', p2: 'Esta política abrange cookies e armazenamento do navegador usados para a experiência do próprio site {brand}.' },
        control: { heading: '7. Como controlar ou excluir cookies e armazenamento local', p1: 'Você pode controlar cookies e armazenamento do navegador pelas configurações do seu navegador.', items: ['Exclua cookies e armazenamento de site existentes nas configurações de privacidade do seu navegador.', 'Bloqueie alguns ou todos os cookies se o seu navegador oferecer essa opção.', 'Limpe o armazenamento local ou os dados do site do {brand} se quiser remover preferências lembradas.'], p2: 'Observe que desativar todos os cookies ou o armazenamento do site pode afetar a funcionalidade do site, incluindo suas preferências salvas e recursos de conveniência.' },
        changes: { heading: '8. Alterações nesta Política de Cookies', body: 'Podemos atualizar esta política de tempos em tempos para refletir mudanças na funcionalidade do site, requisitos legais ou design do produto. Quando o fizermos, atualizaremos a data exibida no topo desta página.' },
        contact: { heading: '9. Contato', body: 'Se você tiver dúvidas sobre esta política, use a página de Contato vinculada no rodapé do site.' },
      },
      summary: { heading: 'Resumo prático', body: 'O {brand} foi criado para fazer a maior parte do seu trabalho no navegador. Isso significa que o site geralmente precisa apenas de armazenamento limitado para preferências e usabilidade, em vez de infraestrutura de rastreamento invasiva.', note: 'Revise as configurações de site do seu navegador a qualquer momento se quiser limpar as preferências salvas.' },
    },
  },
};

// ---------------------------------------------------------------------------
// Injection logic
// ---------------------------------------------------------------------------
// next-intl's NestedMessages (used by mergeWithFallback) does not support
// arrays at leaves. Convert any string[] into an {item1, item2, ...} object
// so the runtime merge keeps them intact and `t.raw` returns a plain object.
function arraysToObjects(node) {
  if (Array.isArray(node)) {
    const out = {};
    node.forEach((v, i) => { out[`item${i + 1}`] = v; });
    return out;
  }
  if (node && typeof node === 'object') {
    const out = {};
    for (const k of Object.keys(node)) out[k] = arraysToObjects(node[k]);
    return out;
  }
  return node;
}

function inject(locale, data) {
  data = arraysToObjects(data);

  const file = path.join(MESSAGES_DIR, `${locale}.json`);
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const ns of ['privacyPage', 'termsPage', 'cookiesPage']) {
    json[ns] = data[ns];
  }
  fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`  ${locale}.json  -> injected privacyPage/termsPage/cookiesPage`);
}

// English gets the source-of-truth content too (for fallback + consistency)
inject('en', en);
for (const locale of LOCALES) {
  if (locale === 'en') continue;
  inject(locale, translations[locale]);
}
console.log('Done.');
