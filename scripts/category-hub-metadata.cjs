/**
 * Category hub metadata (title/description) translations.
 * Injects `common.categoryPage.categories.<key>.metadataTitle/Description`
 * into messages/*.json for all 9 locales.
 */
'use strict';

const path = require('path');
const fs = require('fs');

const MESSAGES_DIR = path.resolve(__dirname, '..', 'messages');
const LOCALES = ['en', 'ja', 'ko', 'es', 'fr', 'de', 'zh', 'zh-TW', 'pt'];

const KEYS = [
  'editAnnotate',
  'convertToPdf',
  'convertFromPdf',
  'organizeManage',
  'optimizeRepair',
  'securePdf',
];

const data = {
  en: {
    editAnnotate: { metadataTitle: 'PDF Editing and Annotation Tools', metadataDescription: 'Explore tools for annotating, filling, signing, and refining PDF documents. Use this hub to choose the right editing workflow for your file.' },
    convertToPdf: { metadataTitle: 'Convert Files to PDF', metadataDescription: 'Browse tools for turning images, Office files, ebooks, and other formats into PDF. Use this hub to pick the right conversion path.' },
    convertFromPdf: { metadataTitle: 'Convert PDF to Other Formats', metadataDescription: 'Browse tools for turning PDF files into editable documents, images, and data formats. Use this hub to choose the right export workflow.' },
    organizeManage: { metadataTitle: 'PDF Organization Tools', metadataDescription: 'Find tools for arranging pages, combining documents, splitting files, and restructuring PDFs. Use this hub to choose the right page-management task.' },
    optimizeRepair: { metadataTitle: 'PDF Optimization and Repair Tools', metadataDescription: 'Explore tools for compressing, repairing, cleaning, and improving PDF files. Use this hub to choose the right maintenance workflow.' },
    securePdf: { metadataTitle: 'PDF Security and Protection Tools', metadataDescription: 'Browse tools for protecting, unlocking, sanitizing, and permission-managing PDF files. Use this hub to choose the right security task.' },
  },
  ja: {
    editAnnotate: { metadataTitle: 'PDF編集・注釈ツール', metadataDescription: 'PDF文書の注釈、入力、署名、仕上げを行うツールを紹介します。このハブから最適な編集ワークフローを選びましょう。' },
    convertToPdf: { metadataTitle: 'ファイルをPDFに変換', metadataDescription: '画像、Officeファイル、電子書籍などの形式をPDFに変換するツールを紹介します。最適な変換経路を選びましょう。' },
    convertFromPdf: { metadataTitle: 'PDFを他の形式に変換', metadataDescription: 'PDFを編集可能な文書、画像、データ形式に変換するツールを紹介します。最適な書き出しワークフローを選びましょう。' },
    organizeManage: { metadataTitle: 'PDF整理ツール', metadataDescription: 'ページの並べ替え、文書の結合、ファイル分割、PDFの再構成を行うツールを紹介します。最適なページ管理タスクを選びましょう。' },
    optimizeRepair: { metadataTitle: 'PDF最適化・修復ツール', metadataDescription: 'PDFの圧縮、修復、クリーニング、品質向上を行うツールを紹介します。最適なメンテナンスワークフローを選びましょう。' },
    securePdf: { metadataTitle: 'PDFセキュリティ・保護ツール', metadataDescription: 'PDFの保護、ロック解除、サニタイズ、権限管理を行うツールを紹介します。最適なセキュリティタスクを選びましょう。' },
  },
  ko: {
    editAnnotate: { metadataTitle: 'PDF 편집 및 주석 도구', metadataDescription: 'PDF 문서에 주석을 달고, 작성하고, 서명하고, 다듬는 도구를 살펴보세요. 이 허브에서 파일에 맞는 편집 워크플로를 선택하세요.' },
    convertToPdf: { metadataTitle: '파일을 PDF로 변환', metadataDescription: '이미지, Office 파일, 전자책 등 다양한 형식을 PDF로 변환하는 도구를 살펴보세요. 이 허브에서 올바른 변환 경로를 선택하세요.' },
    convertFromPdf: { metadataTitle: 'PDF를 다른 형식으로 변환', metadataDescription: 'PDF 파일을 편집 가능한 문서, 이미지, 데이터 형식으로 변환하는 도구를 살펴보세요. 올바른 내보내기 워크플로를 선택하세요.' },
    organizeManage: { metadataTitle: 'PDF 구성 도구', metadataDescription: '페이지 정렬, 문서 병합, 파일 분할, PDF 재구성을 위한 도구를 찾아보세요. 올바른 페이지 관리 작업을 선택하세요.' },
    optimizeRepair: { metadataTitle: 'PDF 최적화 및 복구 도구', metadataDescription: 'PDF 파일 압축, 복구, 정리, 개선 도구를 살펴보세요. 올바른 유지보수 워크플로를 선택하세요.' },
    securePdf: { metadataTitle: 'PDF 보안 및 보호 도구', metadataDescription: 'PDF 파일 보호, 잠금 해제, 새니타이즈, 권한 관리를 위한 도구를 살펴보세요. 올바른 보안 작업을 선택하세요.' },
  },
  es: {
    editAnnotate: { metadataTitle: 'Herramientas de edición y anotación de PDF', metadataDescription: 'Explora herramientas para anotar, rellenar, firmar y perfeccionar documentos PDF. Usa este centro para elegir el flujo de edición adecuado.' },
    convertToPdf: { metadataTitle: 'Convertir archivos a PDF', metadataDescription: 'Explora herramientas para convertir imágenes, archivos de Office, ebooks y otros formatos a PDF. Usa este centro para elegir la ruta de conversión correcta.' },
    convertFromPdf: { metadataTitle: 'Convertir PDF a otros formatos', metadataDescription: 'Explora herramientas para convertir PDF en documentos editables, imágenes y formatos de datos. Elige el flujo de exportación adecuado.' },
    organizeManage: { metadataTitle: 'Herramientas de organización de PDF', metadataDescription: 'Encuentra herramientas para ordenar páginas, combinar documentos, dividir archivos y reestructurar PDF. Elige la tarea de gestión correcta.' },
    optimizeRepair: { metadataTitle: 'Herramientas de optimización y reparación de PDF', metadataDescription: 'Explora herramientas para comprimir, reparar, limpiar y mejorar PDF. Elige el flujo de mantenimiento adecuado.' },
    securePdf: { metadataTitle: 'Herramientas de seguridad y protección de PDF', metadataDescription: 'Explora herramientas para proteger, desbloquear, sanear y gestionar permisos de PDF. Elige la tarea de seguridad correcta.' },
  },
  fr: {
    editAnnotate: { metadataTitle: 'Outils d\u2019édition et d\u2019annotation de PDF', metadataDescription: 'Découvrez des outils pour annoter, remplir, signer et peaufiner des documents PDF. Utilisez ce hub pour choisir le bon flux d\u2019édition.' },
    convertToPdf: { metadataTitle: 'Convertir des fichiers en PDF', metadataDescription: 'Découvrez des outils pour convertir des images, fichiers Office, ebooks et autres formats en PDF. Choisissez le bon chemin de conversion.' },
    convertFromPdf: { metadataTitle: 'Convertir un PDF vers d\u2019autres formats', metadataDescription: 'Découvrez des outils pour transformer des PDF en documents modifiables, images et formats de données. Choisissez le bon flux d\u2019export.' },
    organizeManage: { metadataTitle: 'Outils d\u2019organisation de PDF', metadataDescription: 'Trouvez des outils pour organiser des pages, combiner des documents, diviser des fichiers et restructurer des PDF. Choisissez la bonne tâche.' },
    optimizeRepair: { metadataTitle: 'Outils d\u2019optimisation et de réparation de PDF', metadataDescription: 'Découvrez des outils pour compresser, réparer, nettoyer et améliorer des PDF. Choisissez le bon flux de maintenance.' },
    securePdf: { metadataTitle: 'Outils de sécurité et de protection de PDF', metadataDescription: 'Découvrez des outils pour protéger, déverrouiller, assainir et gérer les permissions des PDF. Choisissez la bonne tâche de sécurité.' },
  },
  de: {
    editAnnotate: { metadataTitle: 'PDF-Bearbeitungs- und Anmerkungswerkzeuge', metadataDescription: 'Entdecken Sie Werkzeuge zum Kommentieren, Ausfüllen, Signieren und Verfeinern von PDF-Dokumenten. Wählen Sie den passenden Bearbeitungsworkflow.' },
    convertToPdf: { metadataTitle: 'Dateien in PDF konvertieren', metadataDescription: 'Entdecken Sie Werkzeuge zum Konvertieren von Bildern, Office-Dateien, E-Books und anderen Formaten in PDF. Wählen Sie den richtigen Konvertierungsweg.' },
    convertFromPdf: { metadataTitle: 'PDF in andere Formate konvertieren', metadataDescription: 'Entdecken Sie Werkzeuge zum Umwandeln von PDF in bearbeitbare Dokumente, Bilder und Datenformate. Wählen Sie den richtigen Export-Workflow.' },
    organizeManage: { metadataTitle: 'PDF-Organisationswerkzeuge', metadataDescription: 'Finden Sie Werkzeuge zum Anordnen von Seiten, Kombinieren von Dokumenten, Teilen von Dateien und Umstrukturieren von PDFs.' },
    optimizeRepair: { metadataTitle: 'PDF-Optimierungs- und Reparaturwerkzeuge', metadataDescription: 'Entdecken Sie Werkzeuge zum Komprimieren, Reparieren, Bereinigen und Verbessern von PDFs. Wählen Sie den richtigen Wartungs-Workflow.' },
    securePdf: { metadataTitle: 'PDF-Sicherheits- und Schutzwertzeuge', metadataDescription: 'Entdecken Sie Werkzeuge zum Schützen, Entsperren, Bereinigen und Verwalten von PDF-Berechtigungen. Wählen Sie die richtige Sicherheitsaufgabe.' },
  },
  zh: {
    editAnnotate: { metadataTitle: 'PDF 编辑与批注工具', metadataDescription: '浏览用于批注、填写、签名和精修 PDF 文档的工具，选择最适合您文件的编辑流程。' },
    convertToPdf: { metadataTitle: '将文件转为 PDF', metadataDescription: '浏览将图片、Office 文件、电子书等格式转为 PDF 的工具，选择最合适的转换路径。' },
    convertFromPdf: { metadataTitle: '将 PDF 转为其他格式', metadataDescription: '浏览将 PDF 转为可编辑文档、图片和数据格式的工具，选择最合适的导出流程。' },
    organizeManage: { metadataTitle: 'PDF 整理工具', metadataDescription: '查找用于页面排序、文档合并、文件拆分和 PDF 重构的工具，选择最合适的页面管理任务。' },
    optimizeRepair: { metadataTitle: 'PDF 优化与修复工具', metadataDescription: '浏览用于压缩、修复、清理和改善 PDF 文件的工具，选择最合适的维护流程。' },
    securePdf: { metadataTitle: 'PDF 安全与保护工具', metadataDescription: '浏览用于保护、解锁、清理和权限管理 PDF 文件的工具，选择最合适的安全任务。' },
  },
  'zh-TW': {
    editAnnotate: { metadataTitle: 'PDF 編輯與註解工具', metadataDescription: '瀏覽用於註解、填寫、簽名與精修 PDF 文件的工具，選擇最適合您檔案的編輯流程。' },
    convertToPdf: { metadataTitle: '將檔案轉為 PDF', metadataDescription: '瀏覽將圖片、Office 檔案、電子書等格式轉為 PDF 的工具，選擇最合適的轉換路徑。' },
    convertFromPdf: { metadataTitle: '將 PDF 轉為其他格式', metadataDescription: '瀏覽將 PDF 轉為可編輯文件、圖片與資料格式的工具，選擇最合適的匯出流程。' },
    organizeManage: { metadataTitle: 'PDF 整理工具', metadataDescription: '尋找用於頁面排序、文件合併、檔案拆分與 PDF 重構的工具，選擇最合適的頁面管理任務。' },
    optimizeRepair: { metadataTitle: 'PDF 最佳化與修復工具', metadataDescription: '瀏覽用於壓縮、修復、清理與改善 PDF 檔案的工具，選擇最合適的維護流程。' },
    securePdf: { metadataTitle: 'PDF 安全與保護工具', metadataDescription: '瀏覽用於保護、解鎖、清理與權限管理 PDF 檔案的工具，選擇最合適的安全任務。' },
  },
  pt: {
    editAnnotate: { metadataTitle: 'Ferramentas de edição e anotação de PDF', metadataDescription: 'Explore ferramentas para anotar, preencher, assinar e refinar documentos PDF. Use este hub para escolher o fluxo de edição certo.' },
    convertToPdf: { metadataTitle: 'Converter arquivos em PDF', metadataDescription: 'Explore ferramentas para converter imagens, arquivos do Office, e-books e outros formatos em PDF. Escolha o caminho de conversão certo.' },
    convertFromPdf: { metadataTitle: 'Converter PDF para outros formatos', metadataDescription: 'Explore ferramentas para transformar PDFs em documentos editáveis, imagens e formatos de dados. Escolha o fluxo de exportação certo.' },
    organizeManage: { metadataTitle: 'Ferramentas de organização de PDF', metadataDescription: 'Encontre ferramentas para organizar páginas, combinar documentos, dividir arquivos e reestruturar PDFs. Escolha a tarefa certa.' },
    optimizeRepair: { metadataTitle: 'Ferramentas de otimização e reparo de PDF', metadataDescription: 'Explore ferramentas para compactar, reparar, limpar e melhorar PDFs. Escolha o fluxo de manutenção certo.' },
    securePdf: { metadataTitle: 'Ferramentas de segurança e proteção de PDF', metadataDescription: 'Explore ferramentas para proteger, desbloquear, higienizar e gerenciar permissões de PDF. Escolha a tarefa de segurança certa.' },
  },
};

function inject(locale) {
  const file = path.join(MESSAGES_DIR, `${locale}.json`);
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const key of KEYS) {
    json.common.categoryPage.categories[key] = {
      ...json.common.categoryPage.categories[key],
      ...data[locale][key],
    };
  }
  fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`  ${locale}.json -> injected metadataTitle/Description`);
}

for (const locale of LOCALES) inject(locale);
console.log('Done.');
