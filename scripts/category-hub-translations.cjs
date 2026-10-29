/**
 * Category hub useCases/precautions translation data.
 * Injects `common.categoryPage.categories.<key>` into messages/*.json
 * for all 9 locales (en as source-of-truth + 8 translations).
 * Items are stored as {item1..itemN} objects (next-intl NestedMessages
 * does not support arrays at leaves).
 */
'use strict';

const path = require('path');
const fs = require('fs');

const MESSAGES_DIR = path.resolve(__dirname, '..', 'messages');
const LOCALES = ['en', 'ja', 'ko', 'es', 'fr', 'de', 'zh', 'zh-TW', 'pt'];

// Category key -> translation key (mirrors categoryTranslationKeys in page.tsx)
const CATEGORY_KEYS = {
  'edit-annotate': 'editAnnotate',
  'convert-to-pdf': 'convertToPdf',
  'convert-from-pdf': 'convertFromPdf',
  'organize-manage': 'organizeManage',
  'optimize-repair': 'optimizeRepair',
  'secure-pdf': 'securePdf',
};

// English source (matches englishCategoryHubCopy in page.tsx)
const en = {
  editAnnotate: {
    useCasesSectionTitle: 'Common use cases',
    useCasesSectionItems: [
      'Reviewing and approving contracts with comments and signatures',
      'Filling out application forms, tax documents, or registration paperwork',
      'Adding watermarks to protect intellectual property or mark document status',
      'Annotating research papers, legal briefs, or technical specifications for collaboration',
      'Adding page numbers and headers to finalize document formatting before distribution',
    ],
    precautionsSectionTitle: 'Important notes',
    precautionsSectionItems: [
      "All editing happens in your browser - files are never uploaded to any server",
      'Save your work frequently when making multiple edits to avoid losing changes',
      'Digital signatures added here are visual only - for legally binding signatures, use certified signature tools',
      'Some PDF features like form field validation or JavaScript actions may not be preserved after editing',
      'For best results, work with PDFs that are not password-protected or have editing restrictions',
    ],
  },
  convertToPdf: {
    useCasesSectionTitle: 'Common use cases',
    useCasesSectionItems: [
      'Converting Word documents to PDF for professional distribution and consistent formatting',
      'Creating PDF portfolios from multiple images for presentations or photo albums',
      'Converting Excel reports to PDF for sharing financial data with stakeholders',
      'Turning PowerPoint presentations into PDF handouts for meetings or training',
      'Converting text files and ebooks to PDF for easier reading and archiving',
    ],
    precautionsSectionTitle: 'Important notes',
    precautionsSectionItems: [
      'All conversions happen locally in your browser - no files are uploaded to servers',
      'Complex formatting in source documents may require manual adjustment after conversion',
      'Image quality in the output PDF depends on the quality of your source files',
      'Large files or batch conversions may take longer depending on your device performance',
      'Some advanced features like macros, animations, or embedded media may not transfer to PDF',
    ],
  },
  convertFromPdf: {
    useCasesSectionTitle: 'Common use cases',
    useCasesSectionItems: [
      'Converting PDF contracts to Word for editing terms and clauses',
      'Extracting PDF pages as images for use in presentations or web content',
      'Converting PDF tables to Excel for data analysis and reporting',
      'Exporting PDF documents to PowerPoint for creating slide decks',
      'Converting scanned PDFs to text files for content reuse and editing',
    ],
    precautionsSectionTitle: 'Important notes',
    precautionsSectionItems: [
      "All conversions are processed locally in your browser - files never leave your device",
      'Conversion accuracy depends on the PDF structure - scanned PDFs may require OCR for best results',
      'Complex layouts with multiple columns or embedded graphics may need manual formatting adjustments',
      'Password-protected or restricted PDFs must be unlocked before conversion',
      'Image quality in exported files depends on the resolution of content in the original PDF',
    ],
  },
  organizeManage: {
    useCasesSectionTitle: 'Common use cases',
    useCasesSectionItems: [
      'Merging multiple contract sections or appendices into one complete document',
      'Splitting large reports into individual chapters for easier distribution',
      'Reordering presentation slides or removing duplicate pages from scanned documents',
      'Extracting specific pages from lengthy manuals or reference materials',
      'Combining invoices, receipts, or statements into organized monthly archives',
    ],
    precautionsSectionTitle: 'Important notes',
    precautionsSectionItems: [
      'All operations are performed locally in your browser - no files are uploaded',
      'When merging PDFs, ensure files are in the correct order before processing',
      'Splitting or extracting pages creates new files - original files remain unchanged',
      'Bookmarks and table of contents may need to be recreated after reorganizing pages',
      'For best results with large files, close unnecessary browser tabs to free up memory',
    ],
  },
  optimizeRepair: {
    useCasesSectionTitle: 'Common use cases',
    useCasesSectionItems: [
      'Compressing large PDFs to meet email attachment size limits or upload restrictions',
      "Repairing corrupted PDFs that won't open or display correctly",
      'Converting PDFs to PDF/A format for legal archiving and regulatory compliance',
      'Removing metadata and hidden information before sharing sensitive documents',
      'Optimizing scanned documents to reduce storage space while maintaining readability',
    ],
    precautionsSectionTitle: 'Important notes',
    precautionsSectionItems: [
      'All processing happens in your browser - files are never uploaded to external servers',
      'Compression may reduce image quality - preview the result before replacing your original',
      'Repair tools can fix many issues but cannot recover content from severely damaged files',
      'PDF/A conversion removes interactive elements like forms, JavaScript, and multimedia',
      'Always keep a backup of important documents before performing optimization or repair',
    ],
  },
  securePdf: {
    useCasesSectionTitle: 'Common use cases',
    useCasesSectionItems: [
      'Password-protecting confidential contracts, financial reports, or personal documents',
      "Unlocking PDFs you own but can't edit due to forgotten passwords or restrictions",
      'Sanitizing documents to remove author information, comments, and revision history before public release',
      'Setting permissions to prevent unauthorized copying, printing, or editing of proprietary content',
      'Removing security from old archived files to enable modern workflow integration',
    ],
    precautionsSectionTitle: 'Important notes',
    precautionsSectionItems: [
      'All security operations are performed locally - passwords and files never leave your browser',
      'Strong passwords are essential - use a mix of letters, numbers, and symbols for best protection',
      'Unlocking PDFs requires the correct password - these tools cannot crack or bypass unknown passwords',
      'Sanitization removes metadata permanently - keep original files if you need to preserve document history',
      'Password protection is not encryption - for highly sensitive data, consider additional security measures',
    ],
  },
};

// ---------------------------------------------------------------------------
// 8 non-English translations. Keys follow the same structure as `en`.
// ---------------------------------------------------------------------------
const translations = {
  ja: {
    editAnnotate: {
      useCasesSectionTitle: 'よくある利用シーン',
      useCasesSectionItems: [
        'コメントや署名を付けて契約書を確認・承認する',
        '申込書、税務書類、登録書類に記入する',
        '知的財産の保護や文書ステータスの明示のために透かしを追加する',
        '研究論文や法的文書、技術仕様書に注釈を付けて共同作業する',
        '配布前にページ番号やヘッダーを追加して文書の体裁を整える',
      ],
      precautionsSectionTitle: '注意事項',
      precautionsSectionItems: [
        'すべての編集はブラウザ内で行われ、ファイルがサーバーにアップロードされることはありません',
        '複数の編集を行う際は、変更を失わないようこまめに保存してください',
        'ここで追加する電子署名は表示上のものです。法的拘束力のある署名には認定署名ツールを使用してください',
        'フォームフィールドの検証やJavaScriptアクションなど、一部のPDF機能は編集後に保持されない場合があります',
        '最良の結果を得るには、パスワード保護や編集制限のないPDFで作業してください',
      ],
    },
    convertToPdf: {
      useCasesSectionTitle: 'よくある利用シーン',
      useCasesSectionItems: [
        'プロ向け配布や統一された書式のためにWord文書をPDFに変換する',
        '複数の画像からプレゼンやアルバム用のPDFポートフォリオを作成する',
        'ExcelレポートをPDFに変換して関係者と財務データを共有する',
        'PowerPointプレゼンを会議や研修用のPDF配布資料に変換する',
        'テキストファイルや電子書籍をPDFに変換して読みやすくし、アーカイブする',
      ],
      precautionsSectionTitle: '注意事項',
      precautionsSectionItems: [
        'すべての変換はブラウザ内でローカルに行われ、ファイルがサーバーにアップロードされることはありません',
        'ソース文書の複雑な書式は、変換後に手動調整が必要になる場合があります',
        '出力PDFの画質はソースファイルの品質に依存します',
        '大きなファイルや一括変換は、デバイスの性能によって時間がかかる場合があります',
        'マクロ、アニメーション、埋め込みメディアなどの一部の高度な機能はPDFに引き継がれない場合があります',
      ],
    },
    convertFromPdf: {
      useCasesSectionTitle: 'よくある利用シーン',
      useCasesSectionItems: [
        '契約書PDFをWordに変換して条項を編集する',
        'PDFページを画像として抽出し、プレゼンやWebコンテンツに使用する',
        'PDFの表をExcelに変換してデータ分析やレポート作成を行う',
        'PDF文書をPowerPointにエクスポートしてスライド資料を作成する',
        'スキャンしたPDFをテキストファイルに変換して内容を再利用・編集する',
      ],
      precautionsSectionTitle: '注意事項',
      precautionsSectionItems: [
        'すべての変換はブラウザ内でローカルに処理され、ファイルがデバイスから出ることはありません',
        '変換精度はPDFの構造に依存します。スキャンPDFは最良の結果を得るためにOCRが必要な場合があります',
        '複数列や埋め込みグラフィックを含む複雑なレイアウトは、手動の書式調整が必要な場合があります',
        'パスワード保護や制限付きのPDFは、変換前にロックを解除する必要があります',
        'エクスポートしたファイルの画質は、元のPDF内コンテンツの解像度に依存します',
      ],
    },
    organizeManage: {
      useCasesSectionTitle: 'よくある利用シーン',
      useCasesSectionItems: [
        '複数の契約セクションや付録を1つの完全な文書に統合する',
        '大きなレポートを章ごとに分割して配布しやすくする',
        'プレゼンのスライドを並べ替えたり、スキャン文書の重複ページを削除する',
        '長いマニュアルや参考資料から特定のページを抽出する',
        '請求書や領収書、明細を整理された月次アーカイブにまとめる',
      ],
      precautionsSectionTitle: '注意事項',
      precautionsSectionItems: [
        'すべての操作はブラウザ内でローカルに実行され、ファイルがアップロードされることはありません',
        'PDFを結合する際は、処理前にファイルが正しい順序であることを確認してください',
        '分割やページ抽出は新しいファイルを作成し、元のファイルは変更されません',
        'しおりや目次は、ページを整理した後に再作成が必要な場合があります',
        '大きなファイルを扱う際は、メモリを解放するために不要なブラウザタブを閉じてください',
      ],
    },
    optimizeRepair: {
      useCasesSectionTitle: 'よくある利用シーン',
      useCasesSectionItems: [
        'メール添付のサイズ制限やアップロード制限を満たすために大きなPDFを圧縮する',
        '正しく開けない、または表示できない破損したPDFを修復する',
        '法的アーカイブや規制対応のためにPDFをPDF/A形式に変換する',
        '機密文書を共有する前にメタデータや隠し情報を削除する',
        '可読性を保ちながら保存容量を減らすためにスキャン文書を最適化する',
      ],
      precautionsSectionTitle: '注意事項',
      precautionsSectionItems: [
        'すべての処理はブラウザ内で行われ、ファイルが外部サーバーにアップロードされることはありません',
        '圧縮により画質が低下する場合があります。元のファイルを置き換える前に結果を確認してください',
        '修復ツールは多くの問題を修正できますが、深刻に損傷したファイルの内容は復元できません',
        'PDF/A変換では、フォーム、JavaScript、マルチメディアなどのインタラクティブ要素が削除されます',
        '最適化や修復を行う前に、重要な文書のバックアップを必ず取ってください',
      ],
    },
    securePdf: {
      useCasesSectionTitle: 'よくある利用シーン',
      useCasesSectionItems: [
        '機密の契約書、財務レポート、個人文書をパスワードで保護する',
        'パスワードを忘れたり制限があったりして編集できない、自分が所有するPDFのロックを解除する',
        '公開前に著者情報、コメント、変更履歴を削除するために文書をサニタイズする',
        '専有コンテンツの不正なコピー、印刷、編集を防ぐために権限を設定する',
        '古いアーカイブファイルからセキュリティを解除して最新のワークフロー連携を可能にする',
      ],
      precautionsSectionTitle: '注意事項',
      precautionsSectionItems: [
        'すべてのセキュリティ操作はローカルで行われ、パスワードやファイルがブラウザから出ることはありません',
        '強力なパスワードが不可欠です。最良の保護のために文字、数字、記号を組み合わせてください',
        'PDFのロック解除には正しいパスワードが必要です。未知のパスワードを解読したり回避したりすることはできません',
        'サニタイズはメタデータを恒久的に削除します。文書履歴を残す必要がある場合は元のファイルを保管してください',
        'パスワード保護は暗号化ではありません。機密性の高いデータには追加のセキュリティ対策を検討してください',
      ],
    },
  },

  ko: {
    editAnnotate: {
      useCasesSectionTitle: '일반적인 활용 사례',
      useCasesSectionItems: [
        '주석과 서명을 추가하여 계약서를 검토하고 승인하기',
        '신청서, 세금 문서, 등록 서류 작성하기',
        '지적 재산 보호 또는 문서 상태 표시를 위해 워터마크 추가하기',
        '협업을 위해 연구 논문, 법률 문서, 기술 사양서에 주석 달기',
        '배포 전 문서 서식을 완성하기 위해 페이지 번호와 머리글 추가하기',
      ],
      precautionsSectionTitle: '중요 사항',
      precautionsSectionItems: [
        '모든 편집은 브라우저에서 이루어지며 파일이 어떤 서버에도 업로드되지 않습니다',
        '여러 번 편집할 때는 변경 사항을 잃지 않도록 자주 저장하세요',
        '여기서 추가하는 디지털 서명은 시각적 용도일 뿐입니다. 법적 구속력이 있는 서명에는 인증된 서명 도구를 사용하세요',
        '양식 필드 유효성 검사나 JavaScript 동작과 같은 일부 PDF 기능은 편집 후 유지되지 않을 수 있습니다',
        '최상의 결과를 얻으려면 암호로 보호되지 않거나 편집 제한이 없는 PDF로 작업하세요',
      ],
    },
    convertToPdf: {
      useCasesSectionTitle: '일반적인 활용 사례',
      useCasesSectionItems: [
        '전문적인 배포와 일관된 서식을 위해 Word 문서를 PDF로 변환하기',
        '프레젠테이션이나 사진 앨범용으로 여러 이미지에서 PDF 포트폴리오 만들기',
        '이해관계자와 재무 데이터를 공유하기 위해 Excel 보고서를 PDF로 변환하기',
        '회의나 교육용 PDF 유인물을 만들기 위해 PowerPoint 프레젠테이션 변환하기',
        '쉽게 읽고 보관하기 위해 텍스트 파일과 전자책을 PDF로 변환하기',
      ],
      precautionsSectionTitle: '중요 사항',
      precautionsSectionItems: [
        '모든 변환은 브라우저에서 로컬로 이루어지며 파일이 서버에 업로드되지 않습니다',
        '원본 문서의 복잡한 서식은 변환 후 수동 조정이 필요할 수 있습니다',
        '출력 PDF의 이미지 품질은 원본 파일의 품질에 따라 달라집니다',
        '대용량 파일이나 일괄 변환은 기기 성능에 따라 시간이 더 걸릴 수 있습니다',
        '매크로, 애니메이션, 임베디드 미디어와 같은 일부 고급 기능은 PDF로 전달되지 않을 수 있습니다',
      ],
    },
    convertFromPdf: {
      useCasesSectionTitle: '일반적인 활용 사례',
      useCasesSectionItems: [
        '계약서 PDF를 Word로 변환하여 조항과 조건을 편집하기',
        '프레젠테이션이나 웹 콘텐츠에 사용하기 위해 PDF 페이지를 이미지로 추출하기',
        '데이터 분석과 보고를 위해 PDF 표를 Excel로 변환하기',
        '슬라이드 데크를 만들기 위해 PDF 문서를 PowerPoint로 내보내기',
        '콘텐츠 재사용과 편집을 위해 스캔한 PDF를 텍스트 파일로 변환하기',
      ],
      precautionsSectionTitle: '중요 사항',
      precautionsSectionItems: [
        '모든 변환은 브라우저에서 로컬로 처리되며 파일이 기기를 떠나지 않습니다',
        '변환 정확도는 PDF 구조에 따라 달라집니다. 스캔한 PDF는 최상의 결과를 위해 OCR이 필요할 수 있습니다',
        '여러 열이나 임베디드 그래픽이 있는 복잡한 레이아웃은 수동 서식 조정이 필요할 수 있습니다',
        '암호로 보호되거나 제한된 PDF는 변환 전에 잠금을 해제해야 합니다',
        '내보낸 파일의 이미지 품질은 원본 PDF 콘텐츠의 해상도에 따라 달라집니다',
      ],
    },
    organizeManage: {
      useCasesSectionTitle: '일반적인 활용 사례',
      useCasesSectionItems: [
        '여러 계약 섹션이나 부록을 하나의 완전한 문서로 병합하기',
        '쉽게 배포할 수 있도록 큰 보고서를 개별 장으로 분할하기',
        '프레젠테이션 슬라이드 재정렬 또는 스캔한 문서의 중복 페이지 제거하기',
        '긴 매뉴얼이나 참고 자료에서 특정 페이지 추출하기',
        '송장, 영수증, 명세서를 정리된 월별 아카이브로 묶기',
      ],
      precautionsSectionTitle: '중요 사항',
      precautionsSectionItems: [
        '모든 작업은 브라우저에서 로컬로 수행되며 파일이 업로드되지 않습니다',
        'PDF를 병합할 때는 처리 전에 파일이 올바른 순서인지 확인하세요',
        '분할이나 페이지 추출은 새 파일을 만들며 원본 파일은 변경되지 않습니다',
        '책갈피와 목차는 페이지를 재구성한 후 다시 만들어야 할 수 있습니다',
        '대용량 파일의 경우 메모리를 확보하기 위해 불필요한 브라우저 탭을 닫으세요',
      ],
    },
    optimizeRepair: {
      useCasesSectionTitle: '일반적인 활용 사례',
      useCasesSectionItems: [
        '이메일 첨부 크기 제한이나 업로드 제한을 충족하기 위해 큰 PDF 압축하기',
        '제대로 열리지 않거나 표시되지 않는 손상된 PDF 복구하기',
        '법적 보관과 규제 준수를 위해 PDF를 PDF/A 형식으로 변환하기',
        '민감한 문서를 공유하기 전에 메타데이터와 숨겨진 정보 제거하기',
        '가독성을 유지하면서 저장 공간을 줄이기 위해 스캔한 문서 최적화하기',
      ],
      precautionsSectionTitle: '중요 사항',
      precautionsSectionItems: [
        '모든 처리는 브라우저에서 이루어지며 파일이 외부 서버에 업로드되지 않습니다',
        '압축은 이미지 품질을 낮출 수 있습니다. 원본을 교체하기 전에 결과를 미리 확인하세요',
        '복구 도구는 많은 문제를 해결할 수 있지만 심하게 손상된 파일의 내용은 복구할 수 없습니다',
        'PDF/A 변환은 양식, JavaScript, 멀티미디어와 같은 대화형 요소를 제거합니다',
        '최적화나 복구를 수행하기 전에 중요한 문서의 백업을 항상 유지하세요',
      ],
    },
    securePdf: {
      useCasesSectionTitle: '일반적인 활용 사례',
      useCasesSectionItems: [
        '기밀 계약서, 재무 보고서, 개인 문서를 암호로 보호하기',
        '암호를 잊었거나 제한이 있어 편집할 수 없는 소유 PDF 잠금 해제하기',
        '공개 전에 작성자 정보, 주석, 수정 이력을 제거하기 위해 문서를 새니타이즈하기',
        '독점 콘텐츠의 무단 복사, 인쇄, 편집을 방지하기 위해 권한 설정하기',
        '최신 워크플로 통합을 위해 오래된 아카이브 파일에서 보안 제거하기',
      ],
      precautionsSectionTitle: '중요 사항',
      precautionsSectionItems: [
        '모든 보안 작업은 로컬에서 수행되며 암호와 파일이 브라우저를 떠나지 않습니다',
        '강력한 암호가 필수적입니다. 최상의 보호를 위해 문자, 숫자, 기호를 혼합하세요',
        'PDF 잠금 해제에는 올바른 암호가 필요합니다. 알 수 없는 암호를 해독하거나 우회할 수 없습니다',
        '새니타이즈는 메타데이터를 영구적으로 제거합니다. 문서 이력을 보존하려면 원본 파일을 유지하세요',
        '암호 보호는 암호화가 아닙니다. 매우 민감한 데이터에는 추가 보안 조치를 고려하세요',
      ],
    },
  },

  es: {
    editAnnotate: {
      useCasesSectionTitle: 'Casos de uso habituales',
      useCasesSectionItems: [
        'Revisar y aprobar contratos con comentarios y firmas',
        'Rellenar formularios de solicitud, documentos fiscales o trámites de registro',
        'Añadir marcas de agua para proteger la propiedad intelectual o marcar el estado del documento',
        'Anotar artículos de investigación, escritos legales o especificaciones técnicas para colaborar',
        'Añadir números de página y encabezados para finalizar el formato antes de distribuir',
      ],
      precautionsSectionTitle: 'Notas importantes',
      precautionsSectionItems: [
        'Toda la edición ocurre en tu navegador: los archivos nunca se suben a ningún servidor',
        'Guarda tu trabajo con frecuencia al hacer varias ediciones para no perder cambios',
        'Las firmas digitales añadidas aquí son solo visuales: para firmas legalmente vinculantes usa herramientas certificadas',
        'Algunas funciones PDF, como la validación de campos o las acciones JavaScript, pueden no conservarse tras editar',
        'Para obtener mejores resultados, trabaja con PDF sin protección por contraseña ni restricciones de edición',
      ],
    },
    convertToPdf: {
      useCasesSectionTitle: 'Casos de uso habituales',
      useCasesSectionItems: [
        'Convertir documentos de Word a PDF para distribución profesional y formato uniforme',
        'Crear portafolios PDF a partir de varias imágenes para presentaciones o álbumes',
        'Convertir informes de Excel a PDF para compartir datos financieros',
        'Convertir presentaciones de PowerPoint en folletos PDF para reuniones o formación',
        'Convertir archivos de texto y libros electrónicos a PDF para leer y archivar con facilidad',
      ],
      precautionsSectionTitle: 'Notas importantes',
      precautionsSectionItems: [
        'Todas las conversiones ocurren localmente en tu navegador: no se suben archivos a servidores',
        'El formato complejo de los documentos de origen puede requerir ajustes manuales tras la conversión',
        'La calidad de imagen del PDF resultante depende de la calidad de tus archivos de origen',
        'Los archivos grandes o las conversiones por lotes pueden tardar más según el rendimiento del dispositivo',
        'Algunas funciones avanzadas como macros, animaciones o medios incrustados pueden no transferirse al PDF',
      ],
    },
    convertFromPdf: {
      useCasesSectionTitle: 'Casos de uso habituales',
      useCasesSectionItems: [
        'Convertir contratos PDF a Word para editar términos y cláusulas',
        'Extraer páginas de PDF como imágenes para presentaciones o contenido web',
        'Convertir tablas de PDF a Excel para análisis de datos e informes',
        'Exportar documentos PDF a PowerPoint para crear presentaciones',
        'Convertir PDF escaneados a archivos de texto para reutilizar y editar el contenido',
      ],
      precautionsSectionTitle: 'Notas importantes',
      precautionsSectionItems: [
        'Todas las conversiones se procesan localmente en tu navegador: los archivos nunca salen de tu dispositivo',
        'La precisión depende de la estructura del PDF: los PDF escaneados pueden requerir OCR',
        'Los diseños complejos con varias columnas o gráficos incrustados pueden necesitar ajustes manuales',
        'Los PDF protegidos con contraseña o restringidos deben desbloquearse antes de la conversión',
        'La calidad de imagen de los archivos exportados depende de la resolución del PDF original',
      ],
    },
    organizeManage: {
      useCasesSectionTitle: 'Casos de uso habituales',
      useCasesSectionItems: [
        'Combinar varias secciones o anexos de un contrato en un único documento completo',
        'Dividir informes extensos en capítulos individuales para facilitar su distribución',
        'Reordenar diapositivas o eliminar páginas duplicadas de documentos escaneados',
        'Extraer páginas concretas de manuales largos o material de referencia',
        'Combinar facturas, recibos o extractos en archivos mensuales organizados',
      ],
      precautionsSectionTitle: 'Notas importantes',
      precautionsSectionItems: [
        'Todas las operaciones se realizan localmente en tu navegador: no se suben archivos',
        'Al combinar PDF, asegúrate de que los archivos estén en el orden correcto antes de procesarlos',
        'Dividir o extraer páginas crea archivos nuevos: los originales permanecen intactos',
        'Los marcadores y la tabla de contenido pueden necesitar recrearse tras reorganizar las páginas',
        'Con archivos grandes, cierra pestañas innecesarias del navegador para liberar memoria',
      ],
    },
    optimizeRepair: {
      useCasesSectionTitle: 'Casos de uso habituales',
      useCasesSectionItems: [
        'Comprimir PDF grandes para cumplir los límites de tamaño de los adjuntos de correo',
        'Reparar PDF dañados que no se abren o no se muestran correctamente',
        'Convertir PDF al formato PDF/A para archivado legal y cumplimiento normativo',
        'Eliminar metadatos e información oculta antes de compartir documentos confidenciales',
        'Optimizar documentos escaneados para reducir espacio manteniendo la legibilidad',
      ],
      precautionsSectionTitle: 'Notas importantes',
      precautionsSectionItems: [
        'Todo el procesamiento ocurre en tu navegador: los archivos nunca se suben a servidores externos',
        'La compresión puede reducir la calidad de imagen: previsualiza antes de reemplazar el original',
        'Las herramientas de reparación solucionan muchos problemas, pero no recuperan archivos muy dañados',
        'La conversión a PDF/A elimina elementos interactivos como formularios, JavaScript y multimedia',
        'Haz siempre una copia de seguridad de los documentos importantes antes de optimizar o reparar',
      ],
    },
    securePdf: {
      useCasesSectionTitle: 'Casos de uso habituales',
      useCasesSectionItems: [
        'Proteger con contraseña contratos confidenciales, informes financieros o documentos personales',
        'Desbloquear PDF propios que no puedes editar por contraseñas olvidadas o restricciones',
        'Sanear documentos para eliminar autor, comentarios e historial antes de publicarlos',
        'Establecer permisos para evitar copias, impresiones o ediciones no autorizadas',
        'Quitar la seguridad de archivos antiguos para integrarlos en flujos de trabajo modernos',
      ],
      precautionsSectionTitle: 'Notas importantes',
      precautionsSectionItems: [
        'Todas las operaciones de seguridad son locales: las contraseñas y los archivos nunca salen del navegador',
        'Usa contraseñas fuertes con letras, números y símbolos para una mejor protección',
        'Desbloquear PDF requiere la contraseña correcta: estas herramientas no pueden descifrar contraseñas desconocidas',
        'El saneado elimina metadatos de forma permanente: conserva los originales si necesitas el historial',
        'La protección por contraseña no es cifrado: para datos muy sensibles considera medidas adicionales',
      ],
    },
  },

  fr: {
    editAnnotate: {
      useCasesSectionTitle: "Cas d'utilisation courants",
      useCasesSectionItems: [
        'Relire et approuver des contrats avec des commentaires et des signatures',
        'Remplir des formulaires de candidature, des documents fiscaux ou des démarches administratives',
        'Ajouter des filigranes pour protéger la propriété intellectuelle ou marquer l\u2019état du document',
        'Annoter des articles de recherche, des mémoires juridiques ou des spécifications techniques',
        'Ajouter des numéros de page et des en-têtes pour finaliser la mise en forme avant diffusion',
      ],
      precautionsSectionTitle: 'Remarques importantes',
      precautionsSectionItems: [
        'Toute l\u2019édition se fait dans votre navigateur : les fichiers ne sont jamais envoyés vers un serveur',
        'Enregistrez souvent votre travail lors de modifications multiples pour éviter de perdre vos changements',
        'Les signatures numériques ajoutées ici sont uniquement visuelles : pour des signatures engageantes, utilisez des outils certifiés',
        'Certaines fonctions PDF comme la validation de champs ou les actions JavaScript peuvent ne pas être conservées',
        'Pour de meilleurs résultats, travaillez avec des PDF non protégés par mot de passe et sans restrictions',
      ],
    },
    convertToPdf: {
      useCasesSectionTitle: "Cas d'utilisation courants",
      useCasesSectionItems: [
        'Convertir des documents Word en PDF pour une diffusion professionnelle et une mise en forme homogène',
        'Créer des portfolios PDF à partir de plusieurs images pour des présentations ou des albums',
        'Convertir des rapports Excel en PDF pour partager des données financières',
        'Transformer des présentations PowerPoint en supports PDF pour des réunions ou formations',
        'Convertir des fichiers texte et des livres électroniques en PDF pour une lecture et un archivage faciles',
      ],
      precautionsSectionTitle: 'Remarques importantes',
      precautionsSectionItems: [
        'Toutes les conversions se font localement dans votre navigateur : aucun fichier n\u2019est envoyé vers un serveur',
        'La mise en forme complexe des documents source peut nécessiter des ajustements manuels après conversion',
        'La qualité d\u2019image du PDF de sortie dépend de la qualité de vos fichiers source',
        'Les fichiers volumineux ou les conversions par lots peuvent prendre plus de temps selon votre appareil',
        'Certaines fonctions avancées comme les macros, animations ou médias intégrés peuvent ne pas être transférées',
      ],
    },
    convertFromPdf: {
      useCasesSectionTitle: "Cas d'utilisation courants",
      useCasesSectionItems: [
        'Convertir des contrats PDF en Word pour modifier les termes et clauses',
        'Extraire des pages PDF en images pour des présentations ou du contenu web',
        'Convertir des tableaux PDF en Excel pour l\u2019analyse et les rapports',
        'Exporter des documents PDF vers PowerPoint pour créer des diaporamas',
        'Convertir des PDF numérisés en fichiers texte pour réutiliser et modifier le contenu',
      ],
      precautionsSectionTitle: 'Remarques importantes',
      precautionsSectionItems: [
        'Toutes les conversions sont traitées localement dans votre navigateur : vos fichiers ne quittent jamais votre appareil',
        'La précision dépend de la structure du PDF : les PDF numérisés peuvent nécessiter une OCR',
        'Les mises en page complexes à plusieurs colonnes ou avec graphiques peuvent demander des ajustements manuels',
        'Les PDF protégés par mot de passe ou restreints doivent être déverrouillés avant conversion',
        'La qualité d\u2019image des fichiers exportés dépend de la résolution du contenu du PDF d\u2019origine',
      ],
    },
    organizeManage: {
      useCasesSectionTitle: "Cas d'utilisation courants",
      useCasesSectionItems: [
        'Fusionner plusieurs sections ou annexes de contrat en un seul document complet',
        'Diviser de grands rapports en chapitres individuels pour faciliter la diffusion',
        'Réordonner des diapositives ou supprimer des pages en double de documents numérisés',
        'Extraire des pages précises de manuels volumineux ou de documents de référence',
        'Regrouper des factures, reçus ou relevés dans des archives mensuelles organisées',
      ],
      precautionsSectionTitle: 'Remarques importantes',
      precautionsSectionItems: [
        'Toutes les opérations sont effectuées localement dans votre navigateur : aucun fichier n\u2019est envoyé',
        'Lors de la fusion, assurez-vous que les fichiers sont dans le bon ordre avant le traitement',
        'La division ou l\u2019extraction crée de nouveaux fichiers : les originaux restent inchangés',
        'Les signets et la table des matières peuvent devoir être recréés après réorganisation',
        'Pour les gros fichiers, fermez les onglets inutiles du navigateur pour libérer de la mémoire',
      ],
    },
    optimizeRepair: {
      useCasesSectionTitle: "Cas d'utilisation courants",
      useCasesSectionItems: [
        'Compresser de grands PDF pour respecter les limites de taille des pièces jointes',
        'Réparer des PDF endommagés qui ne s\u2019ouvrent pas ou ne s\u2019affichent pas correctement',
        'Convertir des PDF au format PDF/A pour l\u2019archivage légal et la conformité',
        'Supprimer les métadonnées et informations cachées avant de partager des documents sensibles',
        'Optimiser des documents numérisés pour réduire l\u2019espace tout en gardant la lisibilité',
      ],
      precautionsSectionTitle: 'Remarques importantes',
      precautionsSectionItems: [
        'Tout le traitement se fait dans votre navigateur : les fichiers ne sont jamais envoyés vers un serveur externe',
        'La compression peut réduire la qualité d\u2019image : prévisualisez avant de remplacer l\u2019original',
        'Les outils de réparation corrigent beaucoup de problèmes mais ne récupèrent pas les fichiers très endommagés',
        'La conversion PDF/A supprime les éléments interactifs comme les formulaires, JavaScript et le multimédia',
        'Conservez toujours une sauvegarde des documents importants avant toute optimisation ou réparation',
      ],
    },
    securePdf: {
      useCasesSectionTitle: "Cas d'utilisation courants",
      useCasesSectionItems: [
        'Protéger par mot de passe des contrats confidentiels, rapports financiers ou documents personnels',
        'Déverrouiller des PDF dont vous êtes propriétaire mais que vous ne pouvez pas modifier',
        'Assainir des documents pour supprimer auteur, commentaires et historique avant publication',
        'Définir des autorisations pour empêcher la copie, l\u2019impression ou l\u2019édition non autorisées',
        'Supprimer la sécurité d\u2019anciens fichiers archivés pour une intégration moderne',
      ],
      precautionsSectionTitle: 'Remarques importantes',
      precautionsSectionItems: [
        'Toutes les opérations de sécurité sont locales : mots de passe et fichiers ne quittent jamais votre navigateur',
        'Utilisez des mots de passe forts avec lettres, chiffres et symboles pour une meilleure protection',
        'Le déverrouillage nécessite le bon mot de passe : ces outils ne peuvent pas décrypter un mot de passe inconnu',
        'L\u2019assainissement supprime définitivement les métadonnées : gardez les originaux si besoin',
        'La protection par mot de passe n\u2019est pas un chiffrement : pour des données très sensibles, envisagez des mesures supplémentaires',
      ],
    },
  },

  de: {
    editAnnotate: {
      useCasesSectionTitle: 'Häufige Anwendungsfälle',
      useCasesSectionItems: [
        'Verträge mit Kommentaren und Unterschriften prüfen und freigeben',
        'Antragsformulare, Steuerdokumente oder Anmeldeunterlagen ausfüllen',
        'Wasserzeichen zum Schutz geistigen Eigentums oder zur Kennzeichnung des Dokumentstatus hinzufügen',
        'Forschungspapiere, juristische Schriftsätze oder technische Spezifikationen für die Zusammenarbeit kommentieren',
        'Seitenzahlen und Kopfzeilen hinzufügen, um die Formatierung vor der Verteilung abzuschließen',
      ],
      precautionsSectionTitle: 'Wichtige Hinweise',
      precautionsSectionItems: [
        'Die gesamte Bearbeitung erfolgt in Ihrem Browser – Dateien werden niemals auf einen Server hochgeladen',
        'Speichern Sie Ihre Arbeit regelmäßig, um Änderungen bei mehreren Bearbeitungen nicht zu verlieren',
        'Digitale Signaturen sind hier nur visuell – für rechtsverbindliche Signaturen nutzen Sie zertifizierte Tools',
        'Einige PDF-Funktionen wie Formularfeld-Validierung oder JavaScript-Aktionen können nach der Bearbeitung verloren gehen',
        'Arbeiten Sie am besten mit PDFs ohne Passwortschutz oder Bearbeitungseinschränkungen',
      ],
    },
    convertToPdf: {
      useCasesSectionTitle: 'Häufige Anwendungsfälle',
      useCasesSectionItems: [
        'Word-Dokumente für professionelle Verteilung und einheitliche Formatierung in PDF konvertieren',
        'PDF-Portfolios aus mehreren Bildern für Präsentationen oder Fotoalben erstellen',
        'Excel-Berichte in PDF konvertieren, um Finanzdaten zu teilen',
        'PowerPoint-Präsentationen für Besprechungen oder Schulungen in PDF-Handouts umwandeln',
        'Textdateien und E-Books zur einfacheren Lesbarkeit und Archivierung in PDF konvertieren',
      ],
      precautionsSectionTitle: 'Wichtige Hinweise',
      precautionsSectionItems: [
        'Alle Konvertierungen erfolgen lokal in Ihrem Browser – keine Dateien werden auf Server hochgeladen',
        'Komplexe Formatierungen in Quelldokumenten können nach der Konvertierung manuelle Anpassung erfordern',
        'Die Bildqualität im Ausgabe-PDF hängt von der Qualität Ihrer Quelldateien ab',
        'Große Dateien oder Stapelkonvertierungen können je nach Geräteleistung länger dauern',
        'Einige erweiterte Funktionen wie Makros, Animationen oder eingebettete Medien werden möglicherweise nicht übernommen',
      ],
    },
    convertFromPdf: {
      useCasesSectionTitle: 'Häufige Anwendungsfälle',
      useCasesSectionItems: [
        'PDF-Verträge in Word konvertieren, um Bedingungen und Klauseln zu bearbeiten',
        'PDF-Seiten als Bilder für Präsentationen oder Webinhalte extrahieren',
        'PDF-Tabellen für Datenanalyse und Berichte in Excel konvertieren',
        'PDF-Dokumente zur Erstellung von Präsentationen nach PowerPoint exportieren',
        'Gescannte PDFs zur Wiederverwendung und Bearbeitung in Textdateien konvertieren',
      ],
      precautionsSectionTitle: 'Wichtige Hinweise',
      precautionsSectionItems: [
        'Alle Konvertierungen werden lokal in Ihrem Browser verarbeitet – Dateien verlassen Ihr Gerät nie',
        'Die Genauigkeit hängt von der PDF-Struktur ab – gescannte PDFs benötigen möglicherweise OCR',
        'Komplexe Layouts mit mehreren Spalten oder Grafiken können manuelle Anpassungen erfordern',
        'Passwortgeschützte oder eingeschränkte PDFs müssen vor der Konvertierung entsperrt werden',
        'Die Bildqualität exportierter Dateien hängt von der Auflösung des ursprünglichen PDFs ab',
      ],
    },
    organizeManage: {
      useCasesSectionTitle: 'Häufige Anwendungsfälle',
      useCasesSectionItems: [
        'Mehrere Vertragsabschnitte oder Anhänge zu einem vollständigen Dokument zusammenführen',
        'Große Berichte zur einfacheren Verteilung in einzelne Kapitel aufteilen',
        'Präsentationsfolien neu anordnen oder doppelte Seiten aus gescannten Dokumenten entfernen',
        'Bestimmte Seiten aus langen Handbüchern oder Referenzmaterialien extrahieren',
        'Rechnungen, Belege oder Kontoauszüge zu geordneten Monatsarchiven zusammenfassen',
      ],
      precautionsSectionTitle: 'Wichtige Hinweise',
      precautionsSectionItems: [
        'Alle Vorgänge werden lokal in Ihrem Browser ausgeführt – keine Dateien werden hochgeladen',
        'Stellen Sie beim Zusammenführen sicher, dass die Dateien vor der Verarbeitung in der richtigen Reihenfolge sind',
        'Teilen oder Extrahieren erstellt neue Dateien – die Originale bleiben unverändert',
        'Lesezeichen und Inhaltsverzeichnis müssen nach dem Neuordnen möglicherweise neu erstellt werden',
        'Schließen Sie bei großen Dateien unnötige Browser-Tabs, um Speicher freizugeben',
      ],
    },
    optimizeRepair: {
      useCasesSectionTitle: 'Häufige Anwendungsfälle',
      useCasesSectionItems: [
        'Große PDFs komprimieren, um Größenlimits für E-Mail-Anhänge einzuhalten',
        'Beschädigte PDFs reparieren, die sich nicht öffnen oder korrekt anzeigen lassen',
        'PDFs für die rechtliche Archivierung und Compliance in PDF/A konvertieren',
        'Metadaten und versteckte Informationen vor dem Teilen sensibler Dokumente entfernen',
        'Gescannte Dokumente optimieren, um Speicherplatz zu sparen und die Lesbarkeit zu erhalten',
      ],
      precautionsSectionTitle: 'Wichtige Hinweise',
      precautionsSectionItems: [
        'Die gesamte Verarbeitung erfolgt in Ihrem Browser – Dateien werden nie auf externe Server hochgeladen',
        'Komprimierung kann die Bildqualität verringern – prüfen Sie das Ergebnis, bevor Sie das Original ersetzen',
        'Reparatur-Tools beheben viele Probleme, können aber stark beschädigte Dateien nicht wiederherstellen',
        'Die PDF/A-Konvertierung entfernt interaktive Elemente wie Formulare, JavaScript und Multimedia',
        'Erstellen Sie vor Optimierung oder Reparatur immer eine Sicherung wichtiger Dokumente',
      ],
    },
    securePdf: {
      useCasesSectionTitle: 'Häufige Anwendungsfälle',
      useCasesSectionItems: [
        'Vertrauliche Verträge, Finanzberichte oder persönliche Dokumente mit Passwort schützen',
        'Eigene PDFs entsperren, die sich wegen vergessener Passwörter oder Einschränkungen nicht bearbeiten lassen',
        'Dokumente bereinigen, um Autor, Kommentare und Verlauf vor der Veröffentlichung zu entfernen',
        'Berechtigungen festlegen, um unbefugtes Kopieren, Drucken oder Bearbeiten zu verhindern',
        'Sicherheit alter archivierter Dateien entfernen, um moderne Workflows zu ermöglichen',
      ],
      precautionsSectionTitle: 'Wichtige Hinweise',
      precautionsSectionItems: [
        'Alle Sicherheitsoperationen erfolgen lokal – Passwörter und Dateien verlassen Ihren Browser nie',
        'Starke Passwörter sind unerlässlich – kombinieren Sie Buchstaben, Zahlen und Symbole',
        'Das Entsperren erfordert das richtige Passwort – unbekannte Passwörter können nicht geknackt werden',
        'Die Bereinigung entfernt Metadaten dauerhaft – behalten Sie Originale, wenn Sie den Verlauf benötigen',
        'Passwortschutz ist keine Verschlüsselung – erwägen Sie für hochsensible Daten zusätzliche Maßnahmen',
      ],
    },
  },

  zh: {
    editAnnotate: {
      useCasesSectionTitle: '常见使用场景',
      useCasesSectionItems: [
        '用批注和签名审阅、批准合同',
        '填写申请表、税务文件或注册资料',
        '添加水印以保护知识产权或标记文档状态',
        '为协作批注研究论文、法律文书或技术规范',
        '添加页码和页眉，在分发前完成文档排版',
      ],
      precautionsSectionTitle: '重要提示',
      precautionsSectionItems: [
        '所有编辑都在浏览器中进行，文件绝不会上传到任何服务器',
        '多次编辑时请频繁保存，以免丢失更改',
        '此处添加的数字签名仅为可视化用途，具有法律约束力的签名请使用认证签名工具',
        '表单字段校验或 JavaScript 动作等部分 PDF 功能编辑后可能无法保留',
        '为获得最佳效果，请使用未加密或无编辑限制的 PDF',
      ],
    },
    convertToPdf: {
      useCasesSectionTitle: '常见使用场景',
      useCasesSectionItems: [
        '将 Word 文档转为 PDF，便于专业分发和统一格式',
        '用多张图片制作 PDF 作品集，用于演示或相册',
        '将 Excel 报表转为 PDF，与相关方共享财务数据',
        '将 PowerPoint 演示文稿转为 PDF 讲义，用于会议或培训',
        '将文本文件和电子书转为 PDF，便于阅读和归档',
      ],
      precautionsSectionTitle: '重要提示',
      precautionsSectionItems: [
        '所有转换都在浏览器本地完成，文件不会上传到服务器',
        '源文档的复杂格式转换后可能需要手动调整',
        '输出 PDF 的图片质量取决于源文件的质量',
        '大文件或批量转换可能因设备性能而耗时更长',
        '宏、动画或嵌入媒体等部分高级功能可能无法转入 PDF',
      ],
    },
    convertFromPdf: {
      useCasesSectionTitle: '常见使用场景',
      useCasesSectionItems: [
        '将 PDF 合同转为 Word，便于编辑条款',
        '将 PDF 页面提取为图片，用于演示或网页内容',
        '将 PDF 表格转为 Excel，用于数据分析和报表',
        '将 PDF 文档导出为 PowerPoint，用于制作幻灯片',
        '将扫描 PDF 转为文本文件，便于内容复用和编辑',
      ],
      precautionsSectionTitle: '重要提示',
      precautionsSectionItems: [
        '所有转换都在浏览器本地处理，文件不会离开您的设备',
        '转换精度取决于 PDF 结构，扫描 PDF 可能需要 OCR 才能获得最佳效果',
        '多栏或嵌入图形的复杂版式可能需要手动调整格式',
        '加密或受限的 PDF 需先解锁才能转换',
        '导出文件的图片质量取决于原 PDF 内容的分辨率',
      ],
    },
    organizeManage: {
      useCasesSectionTitle: '常见使用场景',
      useCasesSectionItems: [
        '将多个合同章节或附录合并为一份完整文档',
        '将大型报告拆分为独立章节，便于分发',
        '重新排列演示文稿幻灯片，或删除扫描文档中的重复页面',
        '从长篇手册或参考资料中提取特定页面',
        '将发票、收据或账单整理成井井有条的月度归档',
      ],
      precautionsSectionTitle: '重要提示',
      precautionsSectionItems: [
        '所有操作都在浏览器本地执行，文件不会上传',
        '合并 PDF 时，请确保处理前文件顺序正确',
        '拆分或提取页面会生成新文件，原文件保持不变',
        '重新整理页面后，书签和目录可能需要重建',
        '处理大文件时，请关闭不必要的浏览器标签页以释放内存',
      ],
    },
    optimizeRepair: {
      useCasesSectionTitle: '常见使用场景',
      useCasesSectionItems: [
        '压缩大 PDF 以满足邮件附件大小限制或上传限制',
        '修复无法正常打开或显示的损坏 PDF',
        '将 PDF 转为 PDF/A 格式，用于法律归档和合规',
        '在共享敏感文档前删除元数据和隐藏信息',
        '优化扫描文档，在保持可读性的同时减少存储空间',
      ],
      precautionsSectionTitle: '重要提示',
      precautionsSectionItems: [
        '所有处理都在浏览器中进行，文件不会上传到外部服务器',
        '压缩可能降低图片质量，替换原文件前请先预览结果',
        '修复工具能解决许多问题，但无法恢复严重损坏文件的内容',
        'PDF/A 转换会移除表单、JavaScript 和多媒体等交互元素',
        '执行优化或修复前，请务必备份重要文档',
      ],
    },
    securePdf: {
      useCasesSectionTitle: '常见使用场景',
      useCasesSectionItems: [
        '为机密合同、财务报告或个人文档添加密码保护',
        '解锁因忘记密码或受限而无法编辑的、属于您自己的 PDF',
        '清理文档，在公开发布前移除作者信息、批注和修订历史',
        '设置权限，防止专有内容被擅自复制、打印或编辑',
        '移除旧归档文件的安全限制，以接入现代工作流',
      ],
      precautionsSectionTitle: '重要提示',
      precautionsSectionItems: [
        '所有安全操作都在本地完成，密码和文件不会离开浏览器',
        '强密码至关重要，请组合使用字母、数字和符号以获得最佳保护',
        '解锁 PDF 需要正确的密码，这些工具无法破解或绕过未知密码',
        '清理会永久删除元数据，如需保留文档历史请保留原文件',
        '密码保护不等于加密，对高度敏感数据请考虑额外的安全措施',
      ],
    },
  },

  'zh-TW': {
    editAnnotate: {
      useCasesSectionTitle: '常見使用情境',
      useCasesSectionItems: [
        '以註解與簽名審閱、核准合約',
        '填寫申請表、稅務文件或註冊資料',
        '加入浮水印以保護智慧財產權或標記文件狀態',
        '為協作註解研究論文、法律文書或技術規格',
        '加入頁碼與頁首，在分發前完成文件排版',
      ],
      precautionsSectionTitle: '重要提示',
      precautionsSectionItems: [
        '所有編輯都在瀏覽器中進行，檔案絕不會上傳到任何伺服器',
        '多次編輯時請頻繁儲存，以免遺失變更',
        '此處加入的數位簽章僅供視覺用途，具法律約束力的簽章請使用認證簽章工具',
        '表單欄位驗證或 JavaScript 動作等部分 PDF 功能，編輯後可能無法保留',
        '為獲得最佳效果，請使用未加密或無編輯限制的 PDF',
      ],
    },
    convertToPdf: {
      useCasesSectionTitle: '常見使用情境',
      useCasesSectionItems: [
        '將 Word 文件轉為 PDF，方便專業分發與統一格式',
        '以多張圖片製作 PDF 作品集，用於簡報或相簿',
        '將 Excel 報表轉為 PDF，與相關方分享財務資料',
        '將 PowerPoint 簡報轉為 PDF 講義，用於會議或訓練',
        '將文字檔案與電子書轉為 PDF，方便閱讀與歸檔',
      ],
      precautionsSectionTitle: '重要提示',
      precautionsSectionItems: [
        '所有轉換都在瀏覽器本機完成，檔案不會上傳到伺服器',
        '來源文件的複雜格式，轉換後可能需要手動調整',
        '輸出 PDF 的圖片品質取決於來源檔案的品質',
        '大檔案或批次轉換可能因裝置效能而耗時更長',
        '巨集、動畫或嵌入媒體等部分進階功能可能無法轉入 PDF',
      ],
    },
    convertFromPdf: {
      useCasesSectionTitle: '常見使用情境',
      useCasesSectionItems: [
        '將 PDF 合約轉為 Word，方便編輯條款',
        '將 PDF 頁面擷取為圖片，用於簡報或網頁內容',
        '將 PDF 表格轉為 Excel，用於資料分析與報表',
        '將 PDF 文件匯出為 PowerPoint，用於製作投影片',
        '將掃描 PDF 轉為文字檔案，方便內容重複使用與編輯',
      ],
      precautionsSectionTitle: '重要提示',
      precautionsSectionItems: [
        '所有轉換都在瀏覽器本機處理，檔案不會離開您的裝置',
        '轉換精確度取決於 PDF 結構，掃描 PDF 可能需要 OCR 才能獲得最佳效果',
        '多欄或嵌入圖形的複雜版面可能需要手動調整格式',
        '加密或受限的 PDF 需先解鎖才能轉換',
        '匯出檔案的圖片品質取決於原 PDF 內容的解析度',
      ],
    },
    organizeManage: {
      useCasesSectionTitle: '常見使用情境',
      useCasesSectionItems: [
        '將多個合約章節或附錄合併為一份完整文件',
        '將大型報告拆分為獨立章節，方便分發',
        '重新排列簡報投影片，或刪除掃描文件中的重複頁面',
        '從長篇手冊或參考資料中擷取特定頁面',
        '將發票、收據或帳單整理成井然有序的月度歸檔',
      ],
      precautionsSectionTitle: '重要提示',
      precautionsSectionItems: [
        '所有操作都在瀏覽器本機執行，檔案不會上傳',
        '合併 PDF 時，請確保處理前檔案順序正確',
        '拆分或擷取頁面會產生新檔案，原檔案保持不變',
        '重新整理頁面後，書籤與目錄可能需要重建',
        '處理大檔案時，請關閉不必要的瀏覽器分頁以釋放記憶體',
      ],
    },
    optimizeRepair: {
      useCasesSectionTitle: '常見使用情境',
      useCasesSectionItems: [
        '壓縮大 PDF 以滿足郵件附件大小限制或上傳限制',
        '修復無法正常開啟或顯示的損壞 PDF',
        '將 PDF 轉為 PDF/A 格式，用於法律歸檔與合規',
        '在分享敏感文件前刪除中繼資料與隱藏資訊',
        '最佳化掃描文件，在保持可讀性的同時減少儲存空間',
      ],
      precautionsSectionTitle: '重要提示',
      precautionsSectionItems: [
        '所有處理都在瀏覽器中進行，檔案不會上傳到外部伺服器',
        '壓縮可能降低圖片品質，替換原檔案前請先預覽結果',
        '修復工具能解決許多問題，但無法復原嚴重損壞檔案的內容',
        'PDF/A 轉換會移除表單、JavaScript 與多媒體等互動元素',
        '執行最佳化或修復前，請務必備份重要文件',
      ],
    },
    securePdf: {
      useCasesSectionTitle: '常見使用情境',
      useCasesSectionItems: [
        '為機密合約、財務報告或個人文件加入密碼保護',
        '解鎖因忘記密碼或受限而無法編輯的、屬於您自己的 PDF',
        '清理文件，在公開發布前移除作者資訊、註解與修訂紀錄',
        '設定權限，防止專有內容被擅自複製、列印或編輯',
        '移除舊歸檔檔案的安全限制，以銜接現代工作流程',
      ],
      precautionsSectionTitle: '重要提示',
      precautionsSectionItems: [
        '所有安全操作都在本機完成，密碼與檔案不會離開瀏覽器',
        '強密碼至關重要，請組合使用字母、數字與符號以獲得最佳保護',
        '解鎖 PDF 需要正確的密碼，這些工具無法破解或繞過未知密碼',
        '清理會永久刪除中繼資料，如需保留文件紀錄請保留原檔案',
        '密碼保護不等於加密，對高度敏感資料請考慮額外的安全措施',
      ],
    },
  },

  pt: {
    editAnnotate: {
      useCasesSectionTitle: 'Casos de uso comuns',
      useCasesSectionItems: [
        'Revisar e aprovar contratos com comentários e assinaturas',
        'Preencher formulários de inscrição, documentos fiscais ou registros',
        'Adicionar marcas d\u2019água para proteger propriedade intelectual ou marcar o status',
        'Anotar artigos de pesquisa, petições legais ou especificações técnicas para colaboração',
        'Adicionar números de página e cabeçalhos para finalizar a formatação antes da distribuição',
      ],
      precautionsSectionTitle: 'Notas importantes',
      precautionsSectionItems: [
        'Toda a edição acontece no seu navegador: os arquivos nunca são enviados a nenhum servidor',
        'Salve com frequência ao fazer várias edições para não perder alterações',
        'Assinaturas digitais adicionadas aqui são apenas visuais: para assinaturas juridicamente vinculantes, use ferramentas certificadas',
        'Alguns recursos de PDF, como validação de campos ou ações JavaScript, podem não ser preservados após a edição',
        'Para melhores resultados, trabalhe com PDFs sem proteção por senha ou restrições de edição',
      ],
    },
    convertToPdf: {
      useCasesSectionTitle: 'Casos de uso comuns',
      useCasesSectionItems: [
        'Converter documentos do Word em PDF para distribuição profissional e formatação consistente',
        'Criar portfólios PDF a partir de várias imagens para apresentações ou álbuns',
        'Converter relatórios do Excel em PDF para compartilhar dados financeiros',
        'Transformar apresentações do PowerPoint em apostilas PDF para reuniões ou treinamentos',
        'Converter arquivos de texto e e-books em PDF para leitura e arquivamento fáceis',
      ],
      precautionsSectionTitle: 'Notas importantes',
      precautionsSectionItems: [
        'Todas as conversões acontecem localmente no seu navegador: nenhum arquivo é enviado a servidores',
        'Formatações complexas nos documentos de origem podem exigir ajustes manuais após a conversão',
        'A qualidade da imagem no PDF de saída depende da qualidade dos seus arquivos de origem',
        'Arquivos grandes ou conversões em lote podem demorar mais, dependendo do desempenho do dispositivo',
        'Alguns recursos avançados, como macros, animações ou mídia incorporada, podem não ser transferidos para o PDF',
      ],
    },
    convertFromPdf: {
      useCasesSectionTitle: 'Casos de uso comuns',
      useCasesSectionItems: [
        'Converter contratos PDF em Word para editar termos e cláusulas',
        'Extrair páginas PDF como imagens para apresentações ou conteúdo web',
        'Converter tabelas PDF em Excel para análise de dados e relatórios',
        'Exportar documentos PDF para PowerPoint para criar apresentações de slides',
        'Converter PDFs digitalizados em arquivos de texto para reutilizar e editar o conteúdo',
      ],
      precautionsSectionTitle: 'Notas importantes',
      precautionsSectionItems: [
        'Todas as conversões são processadas localmente no seu navegador: os arquivos nunca saem do seu dispositivo',
        'A precisão depende da estrutura do PDF: PDFs digitalizados podem exigir OCR',
        'Layouts complexos com várias colunas ou gráficos podem exigir ajustes manuais de formatação',
        'PDFs protegidos por senha ou restritos devem ser desbloqueados antes da conversão',
        'A qualidade da imagem nos arquivos exportados depende da resolução do PDF original',
      ],
    },
    organizeManage: {
      useCasesSectionTitle: 'Casos de uso comuns',
      useCasesSectionItems: [
        'Combinar várias seções ou anexos de contrato em um único documento completo',
        'Dividir relatórios grandes em capítulos individuais para facilitar a distribuição',
        'Reordenar slides de apresentação ou remover páginas duplicadas de documentos digitalizados',
        'Extrair páginas específicas de manuais longos ou materiais de referência',
        'Combinar faturas, recibos ou extratos em arquivos mensais organizados',
      ],
      precautionsSectionTitle: 'Notas importantes',
      precautionsSectionItems: [
        'Todas as operações são realizadas localmente no seu navegador: nenhum arquivo é enviado',
        'Ao mesclar PDFs, verifique se os arquivos estão na ordem correta antes do processamento',
        'Dividir ou extrair páginas cria novos arquivos: os originais permanecem inalterados',
        'Marcadores e sumário podem precisar ser recriados após reorganizar as páginas',
        'Com arquivos grandes, feche abas desnecessárias do navegador para liberar memória',
      ],
    },
    optimizeRepair: {
      useCasesSectionTitle: 'Casos de uso comuns',
      useCasesSectionItems: [
        'Compactar PDFs grandes para atender aos limites de tamanho de anexos de e-mail',
        'Reparar PDFs corrompidos que não abrem ou não são exibidos corretamente',
        'Converter PDFs para o formato PDF/A para arquivamento legal e conformidade',
        'Remover metadados e informações ocultas antes de compartilhar documentos confidenciais',
        'Otimizar documentos digitalizados para reduzir espaço mantendo a legibilidade',
      ],
      precautionsSectionTitle: 'Notas importantes',
      precautionsSectionItems: [
        'Todo o processamento acontece no seu navegador: os arquivos nunca são enviados a servidores externos',
        'A compactação pode reduzir a qualidade da imagem: visualize antes de substituir o original',
        'As ferramentas de reparo corrigem muitos problemas, mas não recuperam arquivos muito danificados',
        'A conversão para PDF/A remove elementos interativos como formulários, JavaScript e multimídia',
        'Sempre faça backup de documentos importantes antes de otimizar ou reparar',
      ],
    },
    securePdf: {
      useCasesSectionTitle: 'Casos de uso comuns',
      useCasesSectionItems: [
        'Proteger com senha contratos confidenciais, relatórios financeiros ou documentos pessoais',
        'Desbloquear PDFs que você possui, mas não consegue editar devido a senhas esquecidas ou restrições',
        'Sanear documentos para remover autor, comentários e histórico antes da publicação',
        'Definir permissões para impedir cópia, impressão ou edição não autorizadas de conteúdo proprietário',
        'Remover a segurança de arquivos antigos para permitir a integração com fluxos modernos',
      ],
      precautionsSectionTitle: 'Notas importantes',
      precautionsSectionItems: [
        'Todas as operações de segurança são locais: senhas e arquivos nunca saem do seu navegador',
        'Senhas fortes são essenciais: use uma combinação de letras, números e símbolos',
        'Desbloquear PDFs exige a senha correta: essas ferramentas não conseguem decifrar senhas desconhecidas',
        'A sanitização remove metadados permanentemente: mantenha os originais se precisar preservar o histórico',
        'A proteção por senha não é criptografia: para dados muito sensíveis, considere medidas adicionais',
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Injection logic
// ---------------------------------------------------------------------------
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
  const file = path.join(MESSAGES_DIR, `${locale}.json`);
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  json.common = json.common || {};
  json.common.categoryPage = json.common.categoryPage || {};
  json.common.categoryPage.categories = arraysToObjects(data);
  fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`  ${locale}.json -> injected common.categoryPage.categories`);
}

inject('en', en);
for (const locale of LOCALES) {
  if (locale === 'en') continue;
  inject(locale, translations[locale]);
}
console.log('Done.');
