// Shared components (CookieConsent / Footer / ToolPage / NUpPDFTool) translation injection.
// Idempotent: merges into existing messages JSON without clobbering unrelated keys.

const fs = require('fs');
const path = require('path');

const MESSAGES_DIR = path.join(__dirname, '..', 'messages');

// Deep merge helper (shallow per-leaf overwrite, no arrays).
function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    const v = source[key];
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      if (!target[key] || typeof target[key] !== 'object') target[key] = {};
      deepMerge(target[key], v);
    } else {
      target[key] = v;
    }
  }
  return target;
}

// ---------------------------------------------------------------------------
// Translation data keyed by locale. Each locale object carries:
//   common.cookieConsent.*
//   common.footer.*  (resources/security block + terms/privacy/cookies labels)
//   common.navigation.terms / cookies
//   common.options.auto/portrait/landscape  (fix en leftovers)
// ---------------------------------------------------------------------------
const DATA = {
  en: {
    cookieConsent: {
      title: 'Cookie Settings',
      message:
        'We use cookies to provide essential website functionality, remember your preferences, and display relevant advertisements through Google AdSense. Your PDF files are never shared with advertisers - all processing happens locally in your browser.',
      showDetails: 'Show cookie details',
      hideDetails: 'Hide details',
      essentialTitle: 'Essential Cookies',
      alwaysActive: 'Always Active',
      essentialDesc: 'Required for the website to function properly. These cannot be disabled.',
      functionalTitle: 'Functional Cookies',
      optional: 'Optional',
      functionalDesc: 'Remember your language preference and other settings to improve your experience.',
      advertisingTitle: 'Advertising Cookies',
      advertisingDesc: 'Used by Google AdSense and partners to show relevant ads. You can opt out anytime via',
      googleAdsSettings: 'Google Ads Settings',
      acceptAll: 'Accept All Cookies',
      acceptEssentialOnly: 'Accept Essential Only',
      learnMore: 'Learn more in our',
      and: 'and',
      privacyPolicy: 'Privacy Policy',
      cookiePolicy: 'Cookie Policy',
    },
    footer: {
      resources: 'Resources',
      security: 'Security',
      securityClientSide: 'Client-side processing',
      securityClientSideDesc: 'Files never leave your device',
      securityNoUploads: 'No file uploads',
      securityNoUploadsDesc: '100% private & secure',
      securityGdpr: 'GDPR Compliant',
      securityGdprDesc: '100% Private - Files never leave your device',
      terms: 'Terms',
      privacy: 'Privacy',
      cookies: 'Cookies',
    },
    navigation: { terms: 'Terms', cookies: 'Cookies' },
    options: { auto: 'Auto', portrait: 'Portrait', landscape: 'Landscape' },
  },

  ja: {
    cookieConsent: {
      title: 'Cookie 設定',
      message:
        '当サイトでは、必要不可欠なウェブサイト機能の提供、設定の記憶、Google AdSense による関連広告の表示のために Cookie を使用しています。お客様の PDF ファイルが広告主と共有されることは一切なく、すべての処理はブラウザ内でローカルに行われます。',
      showDetails: 'Cookie の詳細を表示',
      hideDetails: '詳細を非表示',
      essentialTitle: '必須 Cookie',
      alwaysActive: '常に有効',
      essentialDesc: 'ウェブサイトが正しく機能するために必要です。無効にすることはできません。',
      functionalTitle: '機能 Cookie',
      optional: '任意',
      functionalDesc: '言語設定などの好みを記憶し、利便性を向上させます。',
      advertisingTitle: '広告 Cookie',
      advertisingDesc: 'Google AdSense とそのパートナーが関連広告を表示するために使用します。いつでも以下から無効にできます。',
      googleAdsSettings: 'Google 広告設定',
      acceptAll: 'すべての Cookie を受け入れる',
      acceptEssentialOnly: '必須のみ受け入れる',
      learnMore: '詳しくは',
      and: 'および',
      privacyPolicy: 'プライバシーポリシー',
      cookiePolicy: 'Cookie ポリシー',
    },
    footer: {
      resources: 'リソース',
      security: 'セキュリティ',
      securityClientSide: 'クライアント側での処理',
      securityClientSideDesc: 'ファイルが端末から出ることはありません',
      securityNoUploads: 'アップロード不要',
      securityNoUploadsDesc: '100% プライベート & 安全',
      securityGdpr: 'GDPR 準拠',
      securityGdprDesc: '100% プライベート - ファイルは端末から出ません',
      terms: '利用規約',
      privacy: 'プライバシー',
      cookies: 'Cookie',
    },
    navigation: { terms: '利用規約', cookies: 'Cookie' },
    options: { auto: '自動', portrait: '縦向き', landscape: '横向き' },
  },

  ko: {
    cookieConsent: {
      title: 'Cookie 설정',
      message:
        '당사는 필수 웹사이트 기능 제공, 사용자 설정 기억, Google AdSense를 통한 관련 광고 표시를 위해 Cookie를 사용합니다. 귀하의 PDF 파일은 광고주와 공유되지 않으며 모든 처리는 브라우저 내에서 로컬로 수행됩니다.',
      showDetails: 'Cookie 세부 정보 보기',
      hideDetails: '세부 정보 숨기기',
      essentialTitle: '필수 Cookie',
      alwaysActive: '항상 활성',
      essentialDesc: '웹사이트가 올바르게 작동하기 위해 필요합니다. 비활성화할 수 없습니다.',
      functionalTitle: '기능 Cookie',
      optional: '선택 사항',
      functionalDesc: '언어 설정 등 사용자 환경을 개선하기 위해 기본 설정을 기억합니다.',
      advertisingTitle: '광고 Cookie',
      advertisingDesc: 'Google AdSense 및 파트너가 관련 광고를 표시하기 위해 사용합니다. 언제든지 아래에서 해제할 수 있습니다.',
      googleAdsSettings: 'Google 광고 설정',
      acceptAll: '모든 Cookie 허용',
      acceptEssentialOnly: '필수만 허용',
      learnMore: '자세한 내용은',
      and: '및',
      privacyPolicy: '개인정보 처리방침',
      cookiePolicy: 'Cookie 정책',
    },
    footer: {
      resources: '리소스',
      security: '보안',
      securityClientSide: '클라이언트 측 처리',
      securityClientSideDesc: '파일이 기기를 떠나지 않습니다',
      securityNoUploads: '파일 업로드 없음',
      securityNoUploadsDesc: '100% 비공개 & 안전',
      securityGdpr: 'GDPR 준수',
      securityGdprDesc: '100% 비공개 - 파일이 기기를 떠나지 않습니다',
      terms: '이용약관',
      privacy: '개인정보',
      cookies: 'Cookie',
    },
    navigation: { terms: '이용약관', cookies: 'Cookie' },
    options: { auto: '자동', portrait: '세로', landscape: '가로' },
  },

  es: {
    cookieConsent: {
      title: 'Configuración de cookies',
      message:
        'Utilizamos cookies para ofrecer la funcionalidad esencial del sitio web, recordar sus preferencias y mostrar anuncios relevantes a través de Google AdSense. Sus archivos PDF nunca se comparten con los anunciantes: todo el procesamiento se realiza localmente en su navegador.',
      showDetails: 'Mostrar detalles de las cookies',
      hideDetails: 'Ocultar detalles',
      essentialTitle: 'Cookies esenciales',
      alwaysActive: 'Siempre activas',
      essentialDesc: 'Necesarias para que el sitio web funcione correctamente. No se pueden desactivar.',
      functionalTitle: 'Cookies funcionales',
      optional: 'Opcional',
      functionalDesc: 'Recuerdan su preferencia de idioma y otros ajustes para mejorar su experiencia.',
      advertisingTitle: 'Cookies de publicidad',
      advertisingDesc: 'Utilizadas por Google AdSense y sus socios para mostrar anuncios relevantes. Puede desactivarlas en cualquier momento a través de',
      googleAdsSettings: 'Configuración de anuncios de Google',
      acceptAll: 'Aceptar todas las cookies',
      acceptEssentialOnly: 'Aceptar solo las esenciales',
      learnMore: 'Más información en nuestra',
      and: 'y',
      privacyPolicy: 'Política de privacidad',
      cookiePolicy: 'Política de cookies',
    },
    footer: {
      resources: 'Recursos',
      security: 'Seguridad',
      securityClientSide: 'Procesamiento local',
      securityClientSideDesc: 'Los archivos nunca salen de tu dispositivo',
      securityNoUploads: 'Sin subida de archivos',
      securityNoUploadsDesc: '100 % privado y seguro',
      securityGdpr: 'Conforme al RGPD',
      securityGdprDesc: '100 % privado: los archivos nunca salen de tu dispositivo',
      terms: 'Términos',
      privacy: 'Privacidad',
      cookies: 'Cookies',
    },
    navigation: { terms: 'Términos', cookies: 'Cookies' },
    options: { auto: 'Automático', portrait: 'Vertical', landscape: 'Horizontal' },
  },

  fr: {
    cookieConsent: {
      title: 'Paramètres des cookies',
      message:
        "Nous utilisons des cookies pour assurer les fonctionnalités essentielles du site, mémoriser vos préférences et afficher des publicités pertinentes via Google AdSense. Vos fichiers PDF ne sont jamais partagés avec les annonceurs : tout le traitement s'effectue localement dans votre navigateur.",
      showDetails: 'Afficher le détail des cookies',
      hideDetails: 'Masquer les détails',
      essentialTitle: 'Cookies essentiels',
      alwaysActive: 'Toujours actifs',
      essentialDesc: 'Nécessaires au bon fonctionnement du site. Ils ne peuvent pas être désactivés.',
      functionalTitle: 'Cookies fonctionnels',
      optional: 'Optionnel',
      functionalDesc: 'Mémorisent votre préférence de langue et autres réglages pour améliorer votre expérience.',
      advertisingTitle: 'Cookies publicitaires',
      advertisingDesc: 'Utilisés par Google AdSense et ses partenaires pour afficher des annonces pertinentes. Vous pouvez les désactiver à tout moment via',
      googleAdsSettings: 'Paramètres des annonces Google',
      acceptAll: 'Accepter tous les cookies',
      acceptEssentialOnly: 'Accepter uniquement les essentiels',
      learnMore: 'En savoir plus dans notre',
      and: 'et',
      privacyPolicy: 'Politique de confidentialité',
      cookiePolicy: 'Politique relative aux cookies',
    },
    footer: {
      resources: 'Ressources',
      security: 'Sécurité',
      securityClientSide: 'Traitement côté client',
      securityClientSideDesc: 'Vos fichiers ne quittent jamais votre appareil',
      securityNoUploads: 'Aucun envoi de fichier',
      securityNoUploadsDesc: '100 % privé et sécurisé',
      securityGdpr: 'Conforme au RGPD',
      securityGdprDesc: '100 % privé : vos fichiers ne quittent jamais votre appareil',
      terms: 'Conditions',
      privacy: 'Confidentialité',
      cookies: 'Cookies',
    },
    navigation: { terms: 'Conditions', cookies: 'Cookies' },
    options: { auto: 'Automatique', portrait: 'Portrait', landscape: 'Paysage' },
  },

  de: {
    cookieConsent: {
      title: 'Cookie-Einstellungen',
      message:
        'Wir verwenden Cookies, um grundlegende Funktionen der Website bereitzustellen, Ihre Einstellungen zu speichern und über Google AdSense relevante Werbung anzuzeigen. Ihre PDF-Dateien werden niemals an Werbetreibende weitergegeben – die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.',
      showDetails: 'Cookie-Details anzeigen',
      hideDetails: 'Details ausblenden',
      essentialTitle: 'Notwendige Cookies',
      alwaysActive: 'Immer aktiv',
      essentialDesc: 'Erforderlich, damit die Website ordnungsgemäß funktioniert. Diese können nicht deaktiviert werden.',
      functionalTitle: 'Funktionale Cookies',
      optional: 'Optional',
      functionalDesc: 'Speichern Ihre Spracheinstellung und andere Einstellungen, um Ihr Erlebnis zu verbessern.',
      advertisingTitle: 'Werbe-Cookies',
      advertisingDesc: 'Werden von Google AdSense und Partnern verwendet, um relevante Anzeigen zu schalten. Sie können diese jederzeit über',
      googleAdsSettings: 'Google-Anzeigeneinstellungen',
      acceptAll: 'Alle Cookies akzeptieren',
      acceptEssentialOnly: 'Nur notwendige akzeptieren',
      learnMore: 'Mehr erfahren Sie in unserer',
      and: 'und',
      privacyPolicy: 'Datenschutzerklärung',
      cookiePolicy: 'Cookie-Richtlinie',
    },
    footer: {
      resources: 'Ressourcen',
      security: 'Sicherheit',
      securityClientSide: 'Verarbeitung auf dem Gerät',
      securityClientSideDesc: 'Dateien verlassen niemals Ihr Gerät',
      securityNoUploads: 'Keine Datei-Uploads',
      securityNoUploadsDesc: '100 % privat und sicher',
      securityGdpr: 'DSGVO-konform',
      securityGdprDesc: '100 % privat – Dateien verlassen niemals Ihr Gerät',
      terms: 'Nutzungsbedingungen',
      privacy: 'Datenschutz',
      cookies: 'Cookies',
    },
    navigation: { terms: 'Nutzungsbedingungen', cookies: 'Cookies' },
    options: { auto: 'Automatisch', portrait: 'Hochformat', landscape: 'Querformat' },
  },

  zh: {
    cookieConsent: {
      title: 'Cookie 设置',
      message:
        '我们使用 Cookie 来提供网站基本功能、记住您的偏好，并通过 Google AdSense 展示相关广告。您的 PDF 文件绝不会与广告商共享——所有处理均在您的浏览器本地完成。',
      showDetails: '查看 Cookie 详情',
      hideDetails: '隐藏详情',
      essentialTitle: '必要 Cookie',
      alwaysActive: '始终启用',
      essentialDesc: '网站正常运行所必需，无法禁用。',
      functionalTitle: '功能 Cookie',
      optional: '可选',
      functionalDesc: '记住您的语言偏好和其他设置，以改善您的体验。',
      advertisingTitle: '广告 Cookie',
      advertisingDesc: '由 Google AdSense 及其合作伙伴用于展示相关广告。您可随时通过',
      googleAdsSettings: 'Google 广告设置',
      acceptAll: '接受所有 Cookie',
      acceptEssentialOnly: '仅接受必要项',
      learnMore: '更多信息请参阅我们的',
      and: '和',
      privacyPolicy: '隐私政策',
      cookiePolicy: 'Cookie 政策',
    },
    footer: {
      resources: '资源',
      security: '安全',
      securityClientSide: '本地处理',
      securityClientSideDesc: '文件绝不会离开您的设备',
      securityNoUploads: '无需上传文件',
      securityNoUploadsDesc: '100% 私密且安全',
      securityGdpr: '符合 GDPR',
      securityGdprDesc: '100% 私密——文件绝不会离开您的设备',
      terms: '条款',
      privacy: '隐私',
      cookies: 'Cookie',
    },
    navigation: { terms: '条款', cookies: 'Cookie' },
    options: { auto: '自动', portrait: '纵向', landscape: '横向' },
  },

  'zh-TW': {
    cookieConsent: {
      title: 'Cookie 設定',
      message:
        '我們使用 Cookie 來提供網站基本功能、記住您的偏好，並透過 Google AdSense 展示相關廣告。您的 PDF 檔案絕不會與廣告商共用——所有處理均在您的瀏覽器本機完成。',
      showDetails: '查看 Cookie 詳情',
      hideDetails: '隱藏詳情',
      essentialTitle: '必要 Cookie',
      alwaysActive: '一律啟用',
      essentialDesc: '網站正常運作所必需，無法停用。',
      functionalTitle: '功能 Cookie',
      optional: '選用',
      functionalDesc: '記住您的語言偏好和其他設定，以改善您的使用體驗。',
      advertisingTitle: '廣告 Cookie',
      advertisingDesc: '由 Google AdSense 及其合作夥伴用於展示相關廣告。您可隨時透過',
      googleAdsSettings: 'Google 廣告設定',
      acceptAll: '接受所有 Cookie',
      acceptEssentialOnly: '僅接受必要項目',
      learnMore: '更多資訊請參閱我們的',
      and: '和',
      privacyPolicy: '隱私權政策',
      cookiePolicy: 'Cookie 政策',
    },
    footer: {
      resources: '資源',
      security: '安全',
      securityClientSide: '本機處理',
      securityClientSideDesc: '檔案絕不會離開您的裝置',
      securityNoUploads: '無需上傳檔案',
      securityNoUploadsDesc: '100% 私密且安全',
      securityGdpr: '符合 GDPR',
      securityGdprDesc: '100% 私密——檔案絕不會離開您的裝置',
      terms: '條款',
      privacy: '隱私',
      cookies: 'Cookie',
    },
    navigation: { terms: '條款', cookies: 'Cookie' },
    options: { auto: '自動', portrait: '縱向', landscape: '橫向' },
  },

  pt: {
    cookieConsent: {
      title: 'Configurações de cookies',
      message:
        'Utilizamos cookies para fornecer a funcionalidade essencial do site, lembrar suas preferências e exibir anúncios relevantes por meio do Google AdSense. Seus arquivos PDF nunca são compartilhados com anunciantes — todo o processamento ocorre localmente no seu navegador.',
      showDetails: 'Mostrar detalhes dos cookies',
      hideDetails: 'Ocultar detalhes',
      essentialTitle: 'Cookies essenciais',
      alwaysActive: 'Sempre ativos',
      essentialDesc: 'Necessários para o funcionamento adequado do site. Não podem ser desativados.',
      functionalTitle: 'Cookies funcionais',
      optional: 'Opcional',
      functionalDesc: 'Lembram sua preferência de idioma e outras configurações para melhorar sua experiência.',
      advertisingTitle: 'Cookies de publicidade',
      advertisingDesc: 'Usados pelo Google AdSense e parceiros para exibir anúncios relevantes. Você pode desativá-los a qualquer momento em',
      googleAdsSettings: 'Configurações de anúncios do Google',
      acceptAll: 'Aceitar todos os cookies',
      acceptEssentialOnly: 'Aceitar somente os essenciais',
      learnMore: 'Saiba mais em nossa',
      and: 'e',
      privacyPolicy: 'Política de privacidade',
      cookiePolicy: 'Política de cookies',
    },
    footer: {
      resources: 'Recursos',
      security: 'Segurança',
      securityClientSide: 'Processamento local',
      securityClientSideDesc: 'Os arquivos nunca saem do seu dispositivo',
      securityNoUploads: 'Sem envio de arquivos',
      securityNoUploadsDesc: '100% privado e seguro',
      securityGdpr: 'Em conformidade com o RGPD',
      securityGdprDesc: '100% privado — os arquivos nunca saem do seu dispositivo',
      terms: 'Termos',
      privacy: 'Privacidade',
      cookies: 'Cookies',
    },
    navigation: { terms: 'Termos', cookies: 'Cookies' },
    options: { auto: 'Automático', portrait: 'Retrato', landscape: 'Paisagem' },
  },
};

// ---------------------------------------------------------------------------
// Apply
// ---------------------------------------------------------------------------
function apply() {
  const locales = Object.keys(DATA);
  for (const locale of locales) {
    const file = path.join(MESSAGES_DIR, `${locale}.json`);
    if (!fs.existsSync(file)) {
      console.log(`SKIP ${locale}: file not found`);
      continue;
    }
    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    const data = DATA[locale];

    json.common = json.common || {};
    deepMerge(json.common, {
      cookieConsent: data.cookieConsent,
      navigation: data.navigation,
      options: data.options,
    });
    // footer merge: keep existing footer.* keys, add new ones
    json.common.footer = json.common.footer || {};
    deepMerge(json.common.footer, data.footer);

    fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
    console.log(`OK ${locale}`);
  }
}

apply();
