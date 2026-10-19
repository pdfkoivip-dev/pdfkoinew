/**
 * Traditional Chinese Tool Content (繁體中文)
 * Requirements: 3.1 - Multi-language support
 *
 * 繁體中文工具內容 - 包含所有PDF工具的詳細描述、使用說明、用例和常見問題
 * 針對台灣/香港用語（列印、儲存、軟體、本機、合約等）與 SEO 搜索習慣全面在地化
 */

import type { ToolContent } from '@/types/tool';
import { toolContentZh } from './zh';

export const toolContentZhTw: Record<string, ToolContent> = {
  'pdf-multi-tool': {
    title: 'PDF多功能工具',
    metaDescription: '一站式PDF編輯器：合併、拆分、整理、刪除、旋轉和擷取頁面，功能強大。',
    keywords: ['pdf多功能工具', 'pdf編輯器', '合併pdf', '拆分pdf', '整理pdf', '一站式pdf'],
    description: `
      <p>PDF多功能工具是您處理所有PDF頁面管理任務的綜合解決方案。這款強大的一站式工具將多種PDF操作整合到一個直觀的介面中，爲您節省時間和精力。</p>
      <p>無論您需要合併多個文件、將大型PDF拆分成小檔案、重新整理頁面、刪除不需要的內容、旋轉頁面還是擷取特定部分，這個工具都能輕鬆處理，無需在不同應用程式之間切換。</p>
      <p>所有處理都直接在您的瀏覽器中完成，確保您的文件保持私密和安全。不會將任何檔案上傳到伺服器。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '將PDF檔案拖曳到上傳區域，或點擊瀏覽並從設備中選擇檔案。' },
      { step: 2, title: '選擇操作', description: '從可用操作中選擇：合併、拆分、整理、刪除頁面、旋轉、新增空白頁或擷取頁面。' },
      { step: 3, title: '配置選項', description: '根據所選操作調整設定，如頁面範圍、旋轉角度或合併順序。' },
      { step: 4, title: '處理並下載', description: '點擊處理按鈕，操作完成後下載修改後的PDF。' },
    ],
    useCases: [
      { title: '文件準備', description: '通過刪除不必要的頁面、重新排序內容和合並多個檔案來準備提交文件。', icon: 'file-check' },
      { title: '報告彙編', description: '合併多個報告部分，新增封面頁，將章節整理成一個專業文件。', icon: 'book-open' },
      { title: '檔案管理', description: '將大型檔案檔案拆分成可管理的部分，擷取相關頁面，重新整理歷史文件。', icon: 'archive' },
    ],
    faq: [
      { question: '一次可以處理多少個PDF？', answer: '您可以同時上傳和處理最多10個PDF檔案，合併最大大小爲500MB。' },
      { question: '書籤會被保留嗎？', answer: '是的，合併PDF時，工具會保留現有書籤，並可選擇將它們合併成統一的書籤結構。' },
      { question: '有頁數限制嗎？', answer: '沒有嚴格的頁數限制。該工具可以處理數百頁的文件，但非常大的檔案可能需要更長的處理時間。' },
    ],
  },

  'merge-pdf': {
    ...toolContentZh['merge-pdf'],
    title: '線上合併 PDF 檔案',
    metaDescription: '線上合併多個 PDF 檔案，可依順序合成單一文件，適合報告整理、掃描文件整合與資料彙整。',
    keywords: ['線上合併pdf檔案', '合併多個pdf檔案', '依順序合併pdf', '將兩個pdf合成一個', '掃描文件合併pdf'],
    description: `
      <p>線上合併 PDF 檔案，適合將多份 PDF 依正確順序整理成一個完整文件，方便寄送、列印或保存。</p>
      <p>你可以先調整檔案順序，再一次合併成新的 PDF。這類需求常見於報告附件整理、掃描文件整合、發票彙總與資料歸檔。如果合併後的檔案仍然偏大，也可以繼續<a href="/zh-tw/tools/compress-pdf">壓縮合併後的 PDF 方便寄送或上傳</a>。</p>
      <p>所有處理都在瀏覽器中完成，檔案不會上傳到伺服器，更適合需要隱私與安全性的工作文件。</p>
    `,
    useCases: [
      { title: '合併多個 PDF 檔案', description: '將兩份或多份 PDF 合成單一文件，方便分享、列印與保存。', icon: 'file-text' },
      { title: '依順序整理 PDF', description: '先調整封面、正文與附件順序，再匯出成更完整的 PDF。', icon: 'briefcase' },
      { title: '整合掃描文件', description: '把分開掃描的頁面重新整理成同一份 PDF。', icon: 'receipt' },
    ],
    faq: [
      { question: '如何依順序合併多個 PDF 檔案？', answer: '先上傳多個 PDF，再拖曳調整順序，最後合併並下載新的檔案即可。' },
      { question: '合併 PDF 會影響清晰度嗎？', answer: '通常不會。合併主要是把多個檔案組合在一起，不會主動壓縮頁面內容。' },
      { question: '可以一次合併多個 PDF 嗎？', answer: '可以，你可以同時上傳多份 PDF，再依需求合併成單一文件。如果之後只想保留其中幾頁，也可以再<a href="/zh-tw/tools/split-pdf">把合併後的 PDF 拆分成更小的部分</a>。' },
    ],
  },

  'rotate-custom': {
    title: '自定義旋轉 PDF',
    metaDescription: '按任意角度旋轉PDF頁面。精確的自定義旋轉，用於校正掃描文件。',
    keywords: ['自定義旋轉pdf', 'pdf旋轉任意角度', '校正pdf', 'pdf歪斜校正'],
    description: `
      <p>自定義旋轉 PDF 工具讓您可以精確控制PDF頁面的方向。與僅支援90度增量的標準旋轉工具不同，此工具允許您按任何特定角度旋轉頁面。</p>
      <p>非常適合校正掃描時稍微傾斜的文件，或將圖表和圖紙調整到正確的方向。您可以校正單個頁面或對整個文件應用相同的旋轉。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件在實現完美對齊的同時保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '上傳包含需要旋轉頁面的PDF檔案。' },
      { step: 2, title: '設定旋轉角度', description: '爲每個頁面輸入精確的旋轉度數，或爲所有頁面設定批次角度。' },
      { step: 3, title: '預覽和調整', description: '使用實時預覽確保頁面完美對齊。' },
      { step: 4, title: '應用並下載', description: '點擊旋轉應用更改並下載校正後的PDF。' },
    ],
    useCases: [
      { title: '掃描文件', description: '校正掃描時進紙傾斜的頁面。', icon: 'scan' },
      { title: '技術圖紙', description: '精確調整技術圖表和平面圖的方向。', icon: 'ruler' },
      { title: '創意排版', description: '通過將頁面旋轉到特定藝術角度來建立獨特的佈局。', icon: 'pen-tool' },
    ],
    faq: [
      { question: '可以按小數旋轉嗎，例如45.5度？', answer: '目前工具支援整數度數，但我們正在努力啓用小數精度。' },
      { question: '這會影響頁面內容嗎？', answer: '內容會被視覺旋轉。頁面大小會自動調整以適應旋轉後的內容。' },
      { question: '可以只旋轉一個頁面嗎？', answer: '是的，您可以爲任何單個頁面設定自定義旋轉角度，同時保持其他頁面不變。' },
    ],
  },


  'grid-combine': {
    title: '網格組合 PDF',
    metaDescription: '將多個PDF檔案組合到單頁面上的靈活網格佈局中。每頁排列2、4、6、9個或更多PDF，支援邊框和間距。',
    keywords: ['網格組合', '合併pdf網格', 'pdf拼貼', '多pdf一頁', 'pdf n-up', '組合pdf網格'],
    description: `
      <p>網格組合工具提供了一種將多個獨立的PDF檔案合併到單頁面上的獨特方式。與簡單追加頁面的標準“合併PDF”工具或重新排列單個文件頁面的“N-Up”工具不同，網格組合獲取多個輸入檔案並將它們並排排列在可自定義的網格佈局中。</p>
      <p>您可以選擇各種網格配置，如2x1、2x2、3x3等。這非常適合比較多個文件、從不同來源建立講義或列印多個檔案的緊湊版本。</p>
      <p>通過控制頁面大小、方向、邊距、間距和邊框來自定義輸出。所有處理都在您的瀏覽器本機進行，以實現最大的隱私保護。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '上傳兩個或更多您想要組合的PDF檔案。您可以按所需順序重新排列它們。' },
      { step: 2, title: '選擇網格佈局', description: '選擇您想要的網格佈局（例如，2x2表示每頁4個檔案，3x3表示每頁9個檔案）。' },
      { step: 3, title: '自定義外觀', description: '調整設定，如頁面大小（A4、Letter）、方向、項目之間的間距和邊框。' },
      { step: 4, title: '組合並下載', description: '點擊“組合PDF”生成您的新網格佈局文件並下載結果。' },
    ],
    useCases: [
      { title: '視覺比較', description: '將設計或文件的不同版本並排放置在單個頁面上以便於比較。', icon: 'layout-grid' },
      { title: '列印講義', description: '將多個短文件或幻燈片合併到單張紙上以節省列印成本。', icon: 'printer' },
      { title: '作品集建立', description: '在清晰、有組織的網格概覽中展示多個項目檔案。', icon: 'image' },
    ],
    faq: [
      { question: '這與N-Up有什麼不同？', answer: 'N-Up從一個PDF中獲取頁面並將它們放在一張紙上。網格組合獲取多個不同的PDF檔案並將它們放在一張紙上。' },
      { question: '我可以組合多少個檔案？', answer: '您可以根據瀏覽器記憶體組合多達100個檔案，但像4x4這樣的佈局每頁最多可容納16個檔案。' },
      { question: '我可以新增邊框嗎？', answer: '是的，您可以在每個PDF檔案周圍新增邊框並自定義邊框顏色。' },
    ],
  },

  'split-pdf': {
    ...toolContentZh['split-pdf'],
    title: '依頁碼線上拆分 PDF',
    metaDescription: '依頁碼範圍拆分 PDF，亦可擷取指定頁面或將每頁另存為獨立檔案，適合資料整理與頁面分發。',
    keywords: ['依頁碼拆分pdf', '線上拆分pdf頁面', '擷取指定pdf頁面', '將pdf拆成單頁', 'pdf頁碼範圍拆分'],
    description: `
      <p>依頁碼線上拆分 PDF，適合只保留文件中的部分內容，而不是傳送整份檔案。你可以依頁碼範圍拆分、擷取指定頁面，或將每頁個別匯出。</p>
      <p>這特別適合長篇報告、合約、教材、掃描文件與多頁資料整理。當你只想分享其中幾頁，或把一份大 PDF 分成幾個小檔案時會更方便。如果之後還想把挑出的頁面重新整合，也可以<a href="/zh-tw/tools/merge-pdf">再把這些 PDF 頁面合併成一份文件</a>。</p>
      <p>所有處理都在瀏覽器中完成，文件不離開你的裝置，更適合需要隱私的工作資料。</p>
    `,
    useCases: [
      { title: '擷取指定 PDF 頁面', description: '只保留需要的頁面，不必把整份文件一起傳送。', icon: 'book' },
      { title: '將 PDF 拆成單頁', description: '把多頁 PDF 分成多個單頁檔案，更方便逐頁上傳或整理。', icon: 'copy' },
      { title: '依頁碼範圍拆分', description: '輸入頁碼範圍後快速匯出你需要的部分。', icon: 'presentation' },
    ],
    faq: [
      { question: '如何依頁碼範圍拆分 PDF？', answer: '上傳 PDF 後輸入頁碼範圍，例如 1-3、5-8，系統就會依你的選擇匯出新檔案。' },
      { question: '可以把 PDF 拆成單獨頁面嗎？', answer: '可以，選擇逐頁輸出後，每一頁都會生成獨立檔案。如果你只想把其中幾頁當成圖片分享，也可以繼續<a href="/zh-tw/tools/pdf-to-jpg">把選中的 PDF 頁面轉成 JPG</a>。' },
      { question: '擷取頁面和拆分 PDF 有什麼不同？', answer: '兩者很接近，但擷取頁面更偏向保留指定頁面，拆分則可以把整份文件切成多個部分。' },
    ],
  },

  'compress-pdf': {
    ...toolContentZh['compress-pdf'],
    title: '線上壓縮 PDF 以便寄送',
    metaDescription: '線上壓縮 PDF 檔案大小，適合電子郵件寄送、表單上傳與文件分享，同時盡量保留清晰度。',
    keywords: ['線上壓縮pdf', '壓縮pdf寄送郵件', '減小pdf檔案大小', 'pdf太大無法上傳', '掃描pdf壓縮'],
    description: `
      <p>線上壓縮 PDF，適合檔案太大、無法寄送或上傳失敗的情況。你可以快速減少 PDF 體積，讓文件更方便透過電子郵件、表單系統或日常分享使用。</p>
      <p>這個工具特別適合掃描文件、申請資料、報告與表單。相比單純追求最小檔案，它更注重在可讀性與檔案大小之間取得平衡。如果手上有多份文件要一起處理，也可以先<a href="/zh-tw/tools/merge-pdf">合併 PDF 再統一壓縮</a>。</p>
      <p>所有處理都在瀏覽器中完成，檔案不會上傳到伺服器，更適合工作資料與私人文件。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳 PDF 檔案', description: '拖放 PDF 檔案，或點選瀏覽並選擇要壓縮的文件。' },
      { step: 2, title: '選擇壓縮等級', description: '依寄送、上傳或清晰度需求，選擇合適的壓縮強度。' },
      { step: 3, title: '壓縮並下載', description: '點選壓縮後產生較小的 PDF，再下載結果。' },
    ],
    useCases: [
      { title: '壓縮 PDF 方便寄信', description: '把過大的 PDF 壓縮成更適合作為電子郵件附件的大小。', icon: 'mail' },
      { title: '減小 PDF 便於上傳', description: '在提交報名、申請或系統表單前先縮小檔案體積。', icon: 'upload' },
      { title: '壓縮掃描文件', description: '掃描文件通常較大，壓縮後更方便分享與儲存。', icon: 'hard-drive' },
    ],
    faq: [
      { question: '如何把 PDF 壓縮到方便寄送？', answer: '上傳檔案後選擇壓縮等級，再下載較小的 PDF，通常中等壓縮最適合寄送。如果後續還要修改文字內容，也可以再<a href="/zh-tw/tools/pdf-to-docx">把 PDF 轉成可編輯 Word</a>。' },
      { question: '壓縮 PDF 後會變模糊嗎？', answer: '通常文字仍能保持清晰，但圖片較多的文件可能會因壓縮等級而有些差異。' },
      { question: '上傳系統提示 PDF 太大怎麼辦？', answer: '先壓縮 PDF 再重新上傳，通常比較容易通過大小限制。' },
    ],
  },

  'edit-pdf': {
    title: '編輯PDF',
    metaDescription: '線上編輯PDF檔案。新增文本、圖像、註解、高亮和形狀到您的文件。',
    keywords: ['編輯pdf', 'pdf編輯器', '註解pdf', '新增文本到pdf', 'pdf標記'],
    description: `
      <p>編輯PDF提供一套全面的工具來修改和註解您的PDF文件。新增文本、圖像、形狀、高亮、評論等，無需昂貴的桌面軟體。</p>
      <p>直觀的編輯器介面使您可以輕鬆標記文件以供審閱、新增協作註解、編輯敏感資訊或用額外內容增強文件。</p>
      <p>所有編輯都在您的瀏覽器本機進行，確保敏感文件的完全隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇要編輯的文件。' },
      { step: 2, title: '選擇編輯工具', description: '從工具欄中選擇：文本、高亮、形狀、圖像、評論或編輯工具。' },
      { step: 3, title: '進行編輯', description: '點擊文件新增註解，拖動定位元素，使用屬性面板進行自定義。' },
      { step: 4, title: '儲存並下載', description: '點擊儲存應用更改並下載編輯後的PDF。' },
    ],
    useCases: [
      { title: '文件審閱', description: '爲協作審閱過程新增評論、高亮和標記到文件。', icon: 'message-square' },
      { title: '表單填寫', description: '填寫文本欄位、新增簽名並完成PDF表單，無需列印。', icon: 'edit-3' },
      { title: '內容編輯', description: '在共享前永久刪除文件中的敏感資訊。', icon: 'eye-off' },
    ],
    faq: [
      { question: '可以編輯PDF中的原始文本嗎？', answer: '此工具專注於新增註解和新內容。要編輯現有文本，您可能需要使用原始源文件。' },
      { question: '我的編輯是永久的嗎？', answer: '註解可以扁平化使其永久，或根據您的偏好保持爲可編輯圖層。' },
      { question: '可以撤銷更改嗎？', answer: '是的，編輯器支援撤銷/重做功能。您也可以在儲存前隨時重置爲原始文件。' },
    ],
  },

  'jpg-to-pdf': {
    ...toolContentZh['jpg-to-pdf'],
    title: 'JPG合併PDF - 多張圖片/照片合併成一個PDF檔案【免上傳·完全免費】',
    metaDescription: '手機照片、證件掃描或多張JPG/PNG圖片一鍵快速合併為單一PDF檔案。支援自由拖曳排序、旋轉方向與自訂A4邊距。100%瀏覽器本機安全轉換，個人隱私資料不傳伺服器，無浮水印、免註冊即刻下載。',
    keywords: [
      'jpg合併',
      '圖片合併成pdf',
      '圖片合併pdf',
      '照片合併pdf',
      '照片合併成pdf',
      'jpg轉pdf',
      '多張照片合併pdf',
      '多張jpg合併',
      '照片整合成pdf',
      'jpg合併pdf線上',
      '手機照片合併pdf',
      '圖片轉pdf',
    ],
    description: `
      <p>JPG合併PDF工具能將多張 JPG、JPEG 或 PNG 圖片快速整合成單一高畫質 PDF 文件，非常適合將手機拍攝的多張照片、證件影本或掃描檔彙整成方便審核、列印或線上提交的正式文件。</p>
      <p>支援在瀏覽器中直覺拖曳重新排序、旋轉圖片方向，並可自由選擇 A4 版面、保持原始比例或自訂頁面邊距。相較於傳送數十張零散圖片，整合成單一 PDF 不僅便於歸檔存檔，更能確保文件接收方依正確順序檢閱。若後續需要重新解出圖片，亦可隨時使用<a href="/zh-tw/tools/pdf-to-jpg">PDF轉JPG工具</a>。</p>
      <p>所有圖片合併與格式轉換均在您的瀏覽器本機中安全完成，圖片檔案絕不上傳至任何外部伺服器，保護個人隱私與機密資料安全無虞。</p>
    `,
    useCases: [
      { title: '多張照片與圖片合成 PDF', description: '將旅遊照片、活動花絮或商品截圖整理成一份完整的 PDF 簡報或手冊。', icon: 'image' },
      { title: '證件與合約掃描件整合成檔', description: '將手機拍攝的身分證正反面、合約多頁照片按順序組裝成符合審查標準的單一 PDF。', icon: 'camera' },
      { title: '多張截圖依序彙整', description: '線上教學、系統操作流程截圖依步驟排版，一次性導出為 PDF 說明文件。', icon: 'folder' },
    ],
    faq: [
      { question: '如何把多張 JPG 圖片合併成一個 PDF 檔案？', answer: '點擊上傳或直接將多張 JPG/PNG 圖片拖曳至網頁中，拖曳預覽圖調整理想順序與邊距，點擊「合併轉為PDF」即可秒速下載合成檔案。' },
      { question: '合併後的 PDF 檔案太大，該如何處理？', answer: '如果照片解析度過高導致 PDF 體積過大，您可以在合併完成後，直接使用我們的<a href="/zh-tw/tools/compress-pdf">免費線上 PDF 壓縮工具</a>將檔案縮小至適合 Email 或平台限制的大小。' },
      { question: '轉換前可以調整每張圖片的順序與方向嗎？', answer: '可以，PDFkoi 提供直覺的拖曳排序與旋轉按鈕，在導出 PDF 前即可輕鬆修正歪斜或順序錯誤的圖片。' },
      { question: '上傳的手機照片或證件資料安全嗎？', answer: '絕對安全。PDFkoi 採用先進的瀏覽器端技術（WebAssembly），所有圖片均在您的電腦或手機本地記憶體中處理，完全不經過任何網路伺服器，真正實現零隱私洩漏風險。' },
    ],
  },

  'sign-pdf': {
    title: '簽署PDF',
    metaDescription: '爲PDF文件新增電子簽名。繪製、輸入或上傳您的簽名。',
    keywords: ['簽署pdf', '電子簽名', '電子簽章', 'pdf簽名', '數字簽名'],
    description: `
      <p>簽署PDF允許您快速安全地爲PDF文件新增電子簽名。通過繪製、輸入或上傳圖像建立您的簽名，然後將其放置在文件的任何位置。</p>
      <p>您可以在單個文件中新增多個簽名，精確調整大小和位置，並儲存簽名以供將來使用。該工具非常適合合約、協議、表單和任何需要簽名的文件。</p>
      <p>所有簽名操作都在您的瀏覽器本機進行，確保您的文件和簽名保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇需要簽名的文件。' },
      { step: 2, title: '建立簽名', description: '用鼠標或觸摸繪製簽名，輸入姓名生成簽名，或上傳簽名圖像。' },
      { step: 3, title: '放置和調整', description: '點擊文件放置簽名，然後拖動定位和調整大小。' },
      { step: 4, title: '儲存並下載', description: '點擊儲存應用簽名並下載已簽名的PDF。' },
    ],
    useCases: [
      { title: '合約簽署', description: '電子簽署合約和協議，無需列印和掃描。', icon: 'file-signature' },
      { title: '表單填寫', description: '爲申請表、同意書和官方文件新增簽名。', icon: 'clipboard' },
      { title: '審批流程', description: '作爲審閱和審批流程的一部分簽署文件。', icon: 'check-circle' },
    ],
    faq: [
      { question: '電子簽名具有法律效力嗎？', answer: '電子簽名在大多數國家都被法律認可。但是，某些文件可能需要特定類型的數字簽名。請查閱當地法規。' },
      { question: '可以儲存簽名以供將來使用嗎？', answer: '是的，您可以將簽名儲存到瀏覽器的本機存儲中，以便在簽署未來文件時快速訪問。' },
      { question: '可以在一個文件中新增多個簽名嗎？', answer: '是的，您可以新增任意數量的簽名，在任何頁面上獨立定位每個簽名。' },
    ],
  },


  'crop-pdf': {
    title: '怎麼裁剪 PDF 頁面邊距和多餘空白',
    metaDescription: '怎麼裁剪 PDF 頁面邊距和多餘空白？適合掃描檔修邊、去掉白邊、只保留正文區域或突出重點內容。',
    keywords: ['怎麼裁剪pdf邊距', 'pdf去白邊', 'pdf裁剪頁面區域', '掃描檔怎麼修邊', 'pdf只保留中間內容'],
    description: `
      <p>如果你的 PDF 頁面四周空白太多，或者只想保留正文、圖表、票據主體這部分內容，可以直接用這個工具裁剪頁面區域。它適合掃描檔修邊、去掉白邊、只保留重點區域，也適合把頁面整理得更適合列印或提交。</p>
      <p>很多真實需求並不是泛泛的“裁剪 PDF”，而是“怎麼去掉 PDF 白邊”“怎麼只保留中間內容”。所以這個頁面會更聚焦邊距處理和區域保留這類明確任務。如果裁剪後還想進一步統一紙張規格，也可以繼續<a href="/zh-tw/tools/fix-page-size">修復 PDF 頁面大小</a>。</p>
      <p>所有處理都在瀏覽器中完成，檔案不會上傳到伺服器，更適合合約、表單、掃描資料和含隱私的工作檔案。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳 PDF 檔案，或點擊選擇需要裁剪的文件。' },
      { step: 2, title: '框選保留區域', description: '拖動裁剪框，只保留正文、圖片、表格或你真正需要的部分。' },
      { step: 3, title: '選擇應用範圍', description: '可只裁一頁，也可以批次應用到全部頁面或指定頁碼。' },
      { step: 4, title: '裁剪並下載', description: '點擊處理後下載新的 PDF。' },
    ],
    useCases: [
      { title: '怎麼給掃描檔去白邊', description: '掃描後四周空白過多時，先裁掉邊距再發送或列印。', icon: 'maximize-2' },
      { title: '只保留正文或圖表區域', description: '把頁面中不需要的頁邊、標記或雜項內容裁掉。', icon: 'target' },
      { title: '整理提交版 PDF', description: '讓頁面更緊湊，閱讀和列印時更清晰。', icon: 'square' },
    ],
    faq: [
      { question: '怎麼把 PDF 四周白邊裁掉？', answer: '上傳檔案後拖動裁剪框，只保留正文區域，再應用到當前頁或全部頁面即可。' },
      { question: '可以批次裁剪所有頁面嗎？', answer: '可以。如果整份檔案邊距都差不多，可以把同一裁剪區域應用到全部頁面。' },
      { question: '裁剪會不會把內容壓縮變形？', answer: '通常不會。裁剪是去掉你不需要的區域，不是把頁面內容強行縮放。' },
    ],
  },


  'extract-pages': {
    title: '擷取頁面',
    metaDescription: '從PDF檔案中擷取特定頁面。選擇並儲存單個頁面爲新文件。',
    keywords: ['擷取pdf頁面', '儲存pdf頁面', '複製pdf頁面', 'pdf頁面擷取器'],
    description: `
      <p>擷取頁面允許您從PDF文件中選擇並儲存特定頁面爲新檔案。這非常適合擷取相關部分、建立摘錄或分離合並的文件。</p>
      <p>您可以擷取單個頁面、頁面範圍或多個不連續的頁面。可視頁面預覽使您能夠輕鬆識別和選擇所需的頁面。</p>
      <p>所有擷取操作都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇要從中擷取頁面的文件。' },
      { step: 2, title: '選擇頁面', description: '點擊頁面縮圖選擇它們，或在輸入欄位中輸入頁碼和範圍。' },
      { step: 3, title: '擷取並下載', description: '點擊擷取建立包含所選頁面的新PDF並下載。' },
    ],
    useCases: [
      { title: '建立摘錄', description: '從報告或書籍中擷取相關頁面以建立重點參考文件。', icon: 'file-minus' },
      { title: '分享特定內容', description: '擷取特定頁面進行分享，無需發送整個文件。', icon: 'share-2' },
      { title: '存檔重要頁面', description: '擷取並儲存文件中的關鍵頁面以供長期存檔。', icon: 'archive' },
    ],
    faq: [
      { question: '可以擷取不連續的頁面嗎？', answer: '是的，您可以選擇任意頁面組合，無論是連續的還是分散在整個文件中的。' },
      { question: '書籤會保留嗎？', answer: '指向擷取頁面的書籤會保留在新文件中。' },
      { question: '可以從多個PDF中擷取頁面嗎？', answer: '此工具一次處理一個PDF。要合併來自多個PDF的頁面，請使用合併PDF工具。' },
    ],
  },


  'organize-pdf': {
    title: 'PDF頁面整理與編排 - 拖曳重新排序、旋轉與刪除頁面【免費】',
    metaDescription: '直覺拖曳重新排列 PDF 頁面順序，支援旋轉方向、複製頁面與刪除空白頁。文件不離開您的電腦，安全高效率。',
    keywords: [
      'pdf整理',
      'pdf頁面排序',
      'pdf編排',
      'pdf頁面整理',
      'pdf頁面重新排列',
      '整理pdf',
      '重新排序pdf頁面',
      '重新排列pdf',
      'pdf頁面整理器',
    ],
    description: `
      <p>整理PDF提供直觀的拖曳介面來重新排列PDF文件中的頁面。輕鬆重新排序頁面、複製重要部分或刪除不需要的頁面。</p>
      <p>可視頁面縮圖使您能夠輕鬆識別內容並按需排列頁面。非常適合重組文件、建立自定義頁面順序或清理掃描檔案。</p>
      <p>所有整理操作都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇要整理的文件。' },
      { step: 2, title: '重新排列頁面', description: '拖動頁面縮圖重新排序。根據需要點擊每個頁面上的複製或刪除按鈕。' },
      { step: 3, title: '儲存並下載', description: '點擊儲存應用更改並下載重新整理的PDF。' },
    ],
    useCases: [
      { title: '修復頁面順序', description: '糾正掃描或合併錯誤的頁面順序。', icon: 'arrow-up-down' },
      { title: '建立自定義順序', description: '爲簡報或報告按特定順序排列頁面。', icon: 'list' },
      { title: '刪除不需要的頁面', description: '從文件中刪除空白頁、重複頁或不相關的內容。', icon: 'trash-2' },
    ],
    faq: [
      { question: '可以複製頁面嗎？', answer: '是的，您可以複製任何頁面並將副本放置在文件中的任何位置。' },
      { question: '有撤銷功能嗎？', answer: '是的，您可以撤銷和重做更改。您也可以隨時重置爲原始順序。' },
      { question: '可以同時整理多個PDF嗎？', answer: '此工具一次處理一個PDF。要合併和整理多個PDF，請先使用合併PDF工具合併它們。' },
    ],
  },


  'delete-pages': {
    title: '刪除頁面',
    metaDescription: '從PDF檔案中刪除不需要的頁面。輕鬆選擇和刪除特定頁面。',
    keywords: ['刪除pdf頁面', '移除pdf頁面', 'pdf頁面刪除器', '從pdf刪除頁面'],
    description: `
      <p>刪除頁面允許您快速輕鬆地從PDF文件中刪除不需要的頁面。無論您需要刪除空白頁、過時內容還是敏感資訊，這個工具都能簡化操作。</p>
      <p>可視頁面縮圖說明您準確識別要刪除的頁面。您可以刪除單個頁面或一次刪除多個頁面。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇要從中刪除頁面的文件。' },
      { step: 2, title: '選擇要刪除的頁面', description: '點擊頁面縮圖標記要刪除的頁面，或在輸入欄位中輸入頁碼。' },
      { step: 3, title: '刪除並下載', description: '點擊刪除移除所選頁面並下載更新後的PDF。' },
    ],
    useCases: [
      { title: '刪除空白頁', description: '通過刪除意外包含的空白頁來清理文件。', icon: 'file-x' },
      { title: '刪除敏感內容', description: '在共享文件前刪除包含機密資訊的頁面。', icon: 'shield' },
      { title: '精簡文件', description: '刪除過時或不相關的頁面以建立更集中的文件。', icon: 'filter' },
    ],
    faq: [
      { question: '可以恢復已刪除的頁面嗎？', answer: '刪除在輸出檔案中是永久的。如果以後可能需要這些頁面，請保留原始文件的備份。' },
      { question: '可以一次刪除多個頁面嗎？', answer: '是的，您可以同時選擇和刪除多個頁面。' },
      { question: '刪除頁面會影響書籤嗎？', answer: '指向已刪除頁面的書籤將被移除。指向剩餘頁面的書籤會保留。' },
    ],
  },

  // ==================== 編輯與註解 ====================,

  'bookmark': {
    title: '編輯書籤',
    metaDescription: '新增、編輯和管理PDF書籤。爲您的文件建立導航結構。',
    keywords: ['pdf書籤', '編輯書籤', '新增書籤', 'pdf導航', '目錄'],
    description: `
      <p>編輯書籤允許您在PDF文件中建立、修改和整理書籤。書籤提供快速導航到特定部分的功能，使長文件更易於使用。</p>
      <p>您可以新增新書籤、編輯現有書籤、重新整理書籤層次結構或從外部來源導入書籤。這個工具對於建立專業、可導航的文件至關重要。</p>
      <p>所有編輯都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇要編輯的文件。' },
      { step: 2, title: '管理書籤', description: '新增新書籤、編輯現有書籤或拖動重新整理層次結構。' },
      { step: 3, title: '儲存並下載', description: '點擊儲存應用更改並下載帶有更新書籤的PDF。' },
    ],
    useCases: [
      { title: '建立導航', description: '爲長文件新增書籤，說明讀者快速導航到特定部分。', icon: 'navigation' },
      { title: '整理章節', description: '建立反映文件章節組織的層次書籤結構。', icon: 'book-open' },
      { title: '提高可訪問性', description: '新增書籤使文件更易於訪問和使用者友好。', icon: 'accessibility' },
    ],
    faq: [
      { question: '可以建立巢狀書籤嗎？', answer: '是的，您可以建立具有父書籤和子書籤的層次結構。' },
      { question: '可以從檔案導入書籤嗎？', answer: '是的，您可以從JSON或文本檔案導入書籤結構。' },
      { question: '書籤在所有PDF閱讀器中都能工作嗎？', answer: '是的，書籤是所有主要PDF閱讀器都支援的標準PDF功能。' },
    ],
  },


  'table-of-contents': {
    title: '目錄',
    metaDescription: '爲您的PDF生成目錄。從書籤建立可點擊的導航。',
    keywords: ['pdf目錄', '目錄生成器', 'pdf索引', '文件導航'],
    description: `
      <p>目錄爲您的PDF文件生成可導航的目錄頁面。目錄可以從現有書籤或自定義條目建立，爲讀者提供概覽和快速導航。</p>
      <p>使用不同的樣式、字體和佈局自定義外觀。生成的目錄包含可點擊的連結，直接跳轉到引用的頁面。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇文件。' },
      { step: 2, title: '配置目錄', description: '選擇從書籤生成或建立自定義條目。選擇樣式和位置選項。' },
      { step: 3, title: '生成並下載', description: '點擊生成建立目錄並下載更新後的PDF。' },
    ],
    useCases: [
      { title: '學術論文', description: '爲論文、學位論文和研究報告新增專業目錄。', icon: 'graduation-cap' },
      { title: '商業報告', description: '爲利益相關者建立具有清晰章節列表的可導航報告。', icon: 'bar-chart' },
      { title: '使用者手冊', description: '爲技術文件和使用者指南生成全面的目錄。', icon: 'book' },
    ],
    faq: [
      { question: '可以自定義目錄外觀嗎？', answer: '是的，您可以爲目錄選擇不同的樣式、字體和佈局。' },
      { question: '目錄插入在哪裡？', answer: '預設情況下，目錄插入在文件開頭，但您可以選擇不同的位置。' },
      { question: '目錄條目可以點擊嗎？', answer: '是的，每個條目都是可點擊的連結，導航到相應的頁面。' },
    ],
  },


  'page-numbers': {
    title: '頁碼',
    metaDescription: '爲PDF文件新增頁碼。自定義位置、格式和起始編號。',
    keywords: ['新增頁碼', 'pdf頁碼', '編號pdf頁面', 'pdf分頁'],
    description: `
      <p>頁碼爲您的PDF文件新增可自定義的頁碼編號。從各種格式、位置和樣式中選擇以匹配您文件的設計。</p>
      <p>您可以設定起始編號、跳過某些頁面並使用不同的編號格式（1, 2, 3 或 i, ii, iii）。非常適合建立具有正確分頁的專業文件。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇文件。' },
      { step: 2, title: '配置編號', description: '選擇位置、格式、起始編號以及要編號的頁面。' },
      { step: 3, title: '應用並下載', description: '點擊應用新增頁碼並下載更新後的PDF。' },
    ],
    useCases: [
      { title: '專業文件', description: '爲報告、提案和商業文件新增頁碼。', icon: 'file-text' },
      { title: '學術論文', description: '根據學術格式要求編號頁面。', icon: 'graduation-cap' },
      { title: '法律文件', description: '爲合約和法律檔案新增正確的分頁。', icon: 'scale' },
    ],
    faq: [
      { question: '可以跳過第一頁嗎？', answer: '是的，您可以指定要編號的頁面和要跳過的頁面，如標題頁或封面頁。' },
      { question: '有哪些編號格式可用？', answer: '您可以使用阿拉伯數字（1, 2, 3）、羅馬數字（i, ii, iii 或 I, II, III）或字母（a, b, c）。' },
      { question: '可以新增"第X頁，共Y頁"格式嗎？', answer: '是的，您可以在編號格式中包含總頁數。' },
    ],
  },


  'add-watermark': {
    title: '新增浮水印',
    metaDescription: '爲PDF檔案新增文本或圖像浮水印。保護和品牌化您的文件。',
    keywords: ['新增浮水印', 'pdf浮水印', '蓋章pdf', '品牌pdf', '保護pdf'],
    description: `
      <p>新增浮水印允許您在PDF文件上放置文本或圖像浮水印。浮水印可以指示文件狀態（草稿、機密）、新增品牌或阻止未經授權的複製。</p>
      <p>自定義浮水印的位置、大小、不透明度、旋轉和顏色。應用到所有頁面或選擇特定頁面。該工具支援文本浮水印和圖像浮水印。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇文件。' },
      { step: 2, title: '建立浮水印', description: '輸入文本或上傳圖像作爲浮水印。調整位置、大小、不透明度和旋轉。' },
      { step: 3, title: '應用並下載', description: '點擊應用新增浮水印並下載更新後的PDF。' },
    ],
    useCases: [
      { title: '文件保護', description: '新增"機密"或"草稿"浮水印以指示文件狀態。', icon: 'shield' },
      { title: '品牌文件', description: '爲官方文件新增公司標誌或名稱。', icon: 'award' },
      { title: '版權聲明', description: '新增版權資訊以保護知識產權。', icon: 'copyright' },
    ],
    faq: [
      { question: '可以使用圖像作爲浮水印嗎？', answer: '是的，您可以上傳PNG、JPG或SVG圖像作爲浮水印。' },
      { question: '可以使浮水印半透明嗎？', answer: '是的，您可以調整不透明度，從完全透明到完全不透明。' },
      { question: '可以對不同頁面應用不同的浮水印嗎？', answer: '該工具對選定的頁面應用相同的浮水印。對於不同的浮水印，需要多次處理文件。' },
    ],
  },


  'header-footer': {
    title: '頁眉頁腳',
    metaDescription: '爲PDF文件新增頁眉和頁腳。包含頁碼、日期和自定義文本。',
    keywords: ['pdf頁眉', 'pdf頁腳', '新增頁眉頁腳', 'pdf信頭'],
    description: `
      <p>頁眉頁腳爲您的PDF文件新增可自定義的頁眉和頁腳。在頁眉或頁腳區域包含頁碼、日期、文件標題或任何自定義文本。</p>
      <p>將內容定位在頁眉/頁腳的左側、中間或右側。如果需要，可以爲奇數頁和偶數頁使用不同的內容。非常適合建立具有一致格式的專業文件。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇文件。' },
      { step: 2, title: '配置頁眉/頁腳', description: '爲頁眉和頁腳區域輸入文本。新增頁碼、日期或自定義文本。' },
      { step: 3, title: '應用並下載', description: '點擊應用新增頁眉/頁腳並下載更新後的PDF。' },
    ],
    useCases: [
      { title: '商業文件', description: '爲專業文件新增公司名稱和頁碼。', icon: 'briefcase' },
      { title: '法律文件', description: '在法律檔案中包含案件編號、日期和頁面引用。', icon: 'scale' },
      { title: '學術論文', description: '新增帶有論文標題和作者姓名的頁眉。', icon: 'graduation-cap' },
    ],
    faq: [
      { question: '可以在奇數頁和偶數頁上有不同的頁眉嗎？', answer: '是的，您可以爲奇數頁和偶數頁配置不同的內容。' },
      { question: '可以包含當前日期嗎？', answer: '是的，您可以插入顯示當前日期的動態日期欄位。' },
      { question: '可以在某些頁面上跳過頁眉/頁腳嗎？', answer: '是的，您可以指定哪些頁面應該有頁眉/頁腳，哪些應該跳過。' },
    ],
  },


  'invert-colors': {
    title: '反轉顏色',
    metaDescription: '反轉PDF顏色以進行暗模式閱讀。將文件轉換爲負片顏色。',
    keywords: ['反轉pdf顏色', 'pdf暗模式', '負片pdf', '反轉顏色'],
    description: `
      <p>反轉顏色可以反轉PDF文件中的顏色，建立負片圖像效果。這對於建立文件的暗模式版本特別有用，便於在低光條件下閱讀。</p>
      <p>該工具可以反轉所有顏色或選擇性地保留某些元素（如圖像）。非常適合在夜間閱讀文件時減少眼睛疲勞。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇文件。' },
      { step: 2, title: '配置選項', description: '選擇是反轉所有內容還是保留圖像。' },
      { step: 3, title: '反轉並下載', description: '點擊反轉處理文件並下載結果。' },
    ],
    useCases: [
      { title: '夜間閱讀', description: '建立文件的暗模式版本，便於夜間舒適閱讀。', icon: 'moon' },
      { title: '減少眼睛疲勞', description: '反轉明亮的文件以減少長時間閱讀時的眼睛疲勞。', icon: 'eye' },
      { title: '節省列印', description: '反轉文件以減少列印草稿時的墨水使用。', icon: 'printer' },
    ],
    faq: [
      { question: '圖像也會被反轉嗎？', answer: '預設情況下會。您可以選擇在反轉文本和背景的同時保留原始圖像。' },
      { question: '可以只反轉特定頁面嗎？', answer: '是的，您可以選擇要反轉的頁面。' },
      { question: '反轉是可逆的嗎？', answer: '您可以再次反轉文件以大致恢復原始顏色。' },
    ],
  },


  'background-color': {
    title: '背景顏色',
    metaDescription: '更改PDF背景顏色。爲文件頁面新增彩色背景。',
    keywords: ['pdf背景顏色', '更改pdf背景', '彩色pdf', 'pdf頁面顏色'],
    description: `
      <p>背景顏色允許您更改或新增PDF頁面的背景顏色。這可以提高可讀性、增加視覺趣味或滿足您的品牌要求。</p>
      <p>爲背景選擇任何顏色並應用到所有頁面或選定的頁面。該工具在新增背景圖層的同時保留所有現有內容。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇文件。' },
      { step: 2, title: '選擇顏色', description: '使用顏色選擇器選擇背景顏色或輸入十六進制代碼。' },
      { step: 3, title: '應用並下載', description: '點擊應用新增背景並下載更新後的PDF。' },
    ],
    useCases: [
      { title: '提高可讀性', description: '新增淺奶油色或棕褐色背景以減少眼睛疲勞。', icon: 'eye' },
      { title: '品牌文件', description: '使用品牌顏色作爲營銷材料的背景。', icon: 'palette' },
      { title: '突出部分', description: '使用不同的背景顏色來區分文件部分。', icon: 'layers' },
    ],
    faq: [
      { question: '背景會覆蓋現有內容嗎？', answer: '不會，背景新增在現有內容後面，保留所有文本和圖像。' },
      { question: '可以爲不同頁面使用不同的顏色嗎？', answer: '您需要多次處理文件才能在不同頁面上使用不同的顏色。' },
      { question: '可以刪除現有背景嗎？', answer: '此工具新增背景。要刪除背景，您可能需要使用編輯PDF工具。' },
    ],
  },


  'text-color': {
    title: '更改文本顏色',
    metaDescription: '更改PDF文件中的文本顏色。修改所有文本內容的顏色。',
    keywords: ['更改pdf文本顏色', 'pdf文本顏色', '修改文本顏色', '重新著色pdf文本'],
    description: `
      <p>更改文本顏色允許您修改PDF文件中文本的顏色。這對於改善對比度、匹配品牌或建立文件的視覺變體非常有用。</p>
      <p>選擇新顏色並應用到文件中的所有文本。該工具處理文本元素的同時保留圖像和其他內容。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇文件。' },
      { step: 2, title: '選擇顏色', description: '使用顏色選擇器選擇新的文本顏色或輸入十六進制代碼。' },
      { step: 3, title: '應用並下載', description: '點擊應用更改文本顏色並下載更新後的PDF。' },
    ],
    useCases: [
      { title: '改善對比度', description: '更改文本顏色以提高與背景的可讀性。', icon: 'contrast' },
      { title: '品牌一致性', description: '更新文本顏色以匹配品牌指南。', icon: 'palette' },
      { title: '無障礙性', description: '調整文本顏色以滿足無障礙對比度要求。', icon: 'accessibility' },
    ],
    faq: [
      { question: '所有文本都會被更改嗎？', answer: '是的，該工具更改文件中所有文本元素的顏色。' },
      { question: '可以只更改特定文本嗎？', answer: '此工具更改所有文本。對於選擇性更改，請使用編輯PDF工具。' },
      { question: '格式化的文本（粗體、斜體）會保留嗎？', answer: '是的，文本格式會保留；只有顏色會更改。' },
    ],
  },


  'add-stamps': {
    title: '新增印章',
    metaDescription: '爲PDF文件新增印章。使用預設或自定義印章進行審批、審閱等。',
    keywords: ['pdf印章', '新增印章', '審批印章', 'pdf橡皮章'],
    description: `
      <p>新增印章允許您在PDF文件上放置印章圖像。使用預設印章如"已批準"、"已拒絕"、"草稿"，或上傳自定義印章圖像。</p>
      <p>將印章定位在頁面的任何位置，調整大小，並應用到單個或多個頁面。非常適合文件工作流程、審批和狀態指示。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇文件。' },
      { step: 2, title: '選擇印章', description: '選擇預設印章或上傳自定義印章圖像。' },
      { step: 3, title: '定位並應用', description: '點擊放置印章，調整位置和大小，然後下載。' },
    ],
    useCases: [
      { title: '文件審批', description: '在審閱工作流程中爲文件新增"已批準"或"已拒絕"印章。', icon: 'check-circle' },
      { title: '狀態指示', description: '將文件標記爲"草稿"、"最終版"或"機密"。', icon: 'tag' },
      { title: '質量控制', description: '新增質檢印章以指示檢查或審閱完成。', icon: 'clipboard-check' },
    ],
    faq: [
      { question: '有哪些預設印章可用？', answer: '預設包括已批準、已拒絕、草稿、最終版、機密、副本等。' },
      { question: '可以上傳自定義印章嗎？', answer: '是的，您可以上傳PNG或JPG圖像作爲自定義印章。' },
      { question: '可以在一個文件中新增多個印章嗎？', answer: '是的，您可以新增多個印章並獨立定位每個印章。' },
    ],
  },


  'remove-annotations': {
    title: '刪除註解',
    metaDescription: '從PDF檔案中刪除註解。刪除評論、高亮和標記。',
    keywords: ['刪除pdf註解', '刪除評論', '刪除高亮', '清理pdf'],
    description: `
      <p>刪除註解可以從PDF文件中去除評論、高亮、便籤和其他註解。這將建立一個沒有標記的乾淨文件版本。</p>
      <p>您可以刪除所有註解或選擇性地刪除特定類型。非常適合建立已審閱文件的最終版本或刪除敏感評論。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇文件。' },
      { step: 2, title: '選擇註解類型', description: '選擇要刪除的註解類型：評論、高亮、連結等。' },
      { step: 3, title: '刪除並下載', description: '點擊刪除去除註解並下載乾淨的PDF。' },
    ],
    useCases: [
      { title: '完成文件', description: '在發佈最終文件前刪除審閱評論和標記。', icon: 'file-check' },
      { title: '隱私保護', description: '在共享前刪除可能包含敏感資訊的評論。', icon: 'shield' },
      { title: '乾淨分發', description: '建立已註解文件的乾淨副本以供分發。', icon: 'copy' },
    ],
    faq: [
      { question: '可以刪除哪些類型的註解？', answer: '評論、高亮、下劃線、刪除線、便籤、印章和連結都可以刪除。' },
      { question: '可以保留一些註解嗎？', answer: '是的，您可以選擇要刪除的註解類型和要保留的類型。' },
      { question: '這是可逆的嗎？', answer: '不，註解刪除是永久的。如果需要，請保留原始檔案的備份。' },
    ],
  },


  'form-filler': {
    title: '表單填寫',
    metaDescription: '線上填寫PDF表單。無需列印即可完成互動式PDF表單。',
    keywords: ['填寫pdf表單', 'pdf表單填寫器', '完成pdf表單', '互動式pdf'],
    description: `
      <p>表單填寫允許您直接在瀏覽器中完成互動式PDF表單。填寫文本欄位、勾選複選框、選擇選項並新增簽名，無需列印文件。</p>
      <p>該工具支援標準PDF表單和XFA表單。您填寫的數據可以儲存，表單可以扁平化以防止進一步編輯。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的表單數據保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF表單', description: '拖曳您的PDF表單或點擊選擇檔案。' },
      { step: 2, title: '填寫表單', description: '點擊表單欄位輸入文本、勾選複選框或選擇選項。' },
      { step: 3, title: '儲存並下載', description: '點擊儲存保留您的輸入並下載已填寫的表單。' },
    ],
    useCases: [
      { title: '申請表', description: '完成工作申請、許可申請和註冊表單。', icon: 'clipboard' },
      { title: '稅務表單', description: '電子填寫稅務檔案和財務表單。', icon: 'file-text' },
      { title: '合約', description: '在簽署前用您的資訊完成合同表單。', icon: 'file-signature' },
    ],
    faq: [
      { question: '可以儲存進度嗎？', answer: '是的，您可以儲存部分填寫的表單並稍後繼續。' },
      { question: '什麼是表單扁平化？', answer: '扁平化將表單欄位轉換爲靜態內容，防止進一步編輯。' },
      { question: '支援XFA表單嗎？', answer: '是的，該工具支援標準AcroForms和XFA表單。' },
    ],
  },


  'form-creator': {
    title: '表單建立',
    metaDescription: '建立可填寫的PDF表單。新增文本欄位、複選框和下拉菜單到文件。',
    keywords: ['建立pdf表單', 'pdf表單建立器', '可填寫pdf', '新增表單欄位'],
    description: `
      <p>表單建立將靜態PDF文件轉換爲互動式可填寫表單。新增文本欄位、複選框、單選按鈕、下拉菜單等以建立專業表單。</p>
      <p>將表單元素拖曳到文件上，配置欄位屬性，建立可以電子填寫的表單。非常適合建立申請表、調查問卷和數據收集表單。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇要轉換爲表單的文件。' },
      { step: 2, title: '新增表單欄位', description: '從工具欄選擇欄位類型並點擊將其放置在文件上。' },
      { step: 3, title: '配置並儲存', description: '設定欄位屬性，然後儲存並下載可填寫的PDF表單。' },
    ],
    useCases: [
      { title: '申請表', description: '建立可填寫的工作申請、會員表單和註冊表。', icon: 'user-plus' },
      { title: '調查問卷', description: '構建用於數據收集的互動式調查和問卷。', icon: 'clipboard-list' },
      { title: '訂單表', description: '建立帶有數量欄位和複選框的產品訂單表。', icon: 'shopping-cart' },
    ],
    faq: [
      { question: '可以新增哪些欄位類型？', answer: '文本欄位、複選框、單選按鈕、下拉菜單、日期選擇器和簽名欄位。' },
      { question: '可以將欄位設爲必填嗎？', answer: '是的，您可以將欄位標記爲必填並新增驗證規則。' },
      { question: '可以新增計算嗎？', answer: '可以爲數字欄位新增基本計算，如求和和平均值。' },
    ],
  },


  'remove-blank-pages': {
    title: '刪除空白頁',
    metaDescription: '自動檢測並從PDF文件中刪除空白頁。',
    keywords: ['刪除空白頁', '刪除空頁', '清理pdf', 'pdf空白頁刪除器'],
    description: `
      <p>刪除空白頁自動檢測並從PDF文件中刪除空頁。這對於清理掃描文件、刪除分隔頁或消除意外包含的空白頁非常有用。</p>
      <p>該工具使用智慧檢測來識別真正的空白頁，同時保留內容最少的頁面。您可以調整靈敏度閾值來控制什麼算作"空白"。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇文件。' },
      { step: 2, title: '調整閾值', description: '如果需要，設定空白檢測閾值（預設值適用於大多數文件）。' },
      { step: 3, title: '刪除並下載', description: '點擊刪除刪除空白頁並下載清理後的PDF。' },
    ],
    useCases: [
      { title: '清理掃描文件', description: '從批次掃描的文件中刪除空白頁。', icon: 'scan' },
      { title: '刪除分隔符', description: '從合併文件中刪除空白分隔頁。', icon: 'minus' },
      { title: '減小檔案大小', description: '刪除不必要的空白頁以減小文件大小。', icon: 'minimize-2' },
    ],
    faq: [
      { question: '空白檢測如何工作？', answer: '該工具分析頁面內容，將內容最少或沒有可見內容的頁面視爲空白。' },
      { question: '可以預覽哪些頁面將被刪除嗎？', answer: '是的，檢測到的空白頁在刪除前會高亮顯示以供審閱。' },
      { question: '如果頁面只有頁眉/頁腳怎麼辦？', answer: '您可以調整閾值來確定內容最少的頁面是否應被視爲空白。' },
    ],
  },

  // ==================== 轉換爲PDF ====================,

  'image-to-pdf': {
    title: '圖像轉PDF',
    metaDescription: '將任何圖像轉換爲PDF。支援JPG、PNG、WebP、BMP、TIFF、SVG和HEIC格式。',
    keywords: ['圖像轉pdf', '轉換圖像', '照片轉pdf', '圖片轉pdf'],
    description: `
      <p>圖像轉PDF將任何格式的圖像轉換爲PDF文件。支援JPG、PNG、WebP、BMP、TIFF、SVG和HEIC格式，使其成爲通用的圖像轉換器。</p>
      <p>將多個圖像合併成一個PDF，按任意順序排列，並自定義頁面大小和方向。非常適合建立照片相冊、文件存檔或作品集。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的圖像保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳圖像', description: '拖曳任何支援格式的圖像或點擊選擇檔案。' },
      { step: 2, title: '排列和配置', description: '重新排序圖像並選擇頁面大小和方向選項。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換建立PDF並下載結果。' },
    ],
    useCases: [
      { title: '照片集', description: '將來自各種來源的照片合併成一個PDF相冊。', icon: 'images' },
      { title: '混合格式文件', description: '將不同格式的圖像轉換爲統一的PDF。', icon: 'file-stack' },
      { title: '存檔建立', description: '從圖像集建立PDF存檔以供長期存儲。', icon: 'archive' },
    ],
    faq: [
      { question: '支援哪些圖像格式？', answer: '支援JPG、JPEG、PNG、WebP、BMP、TIFF、TIF、SVG、HEIC和HEIF格式。' },
      { question: '可以混合不同的圖像格式嗎？', answer: '是的，您可以將不同格式的圖像合併成一個PDF。' },
      { question: '圖像質量會保留嗎？', answer: '是的，除非您選擇壓縮，否則圖像以原始質量嵌入。' },
    ],
  },


  'png-to-pdf': {
    title: 'PNG轉PDF',
    metaDescription: '將PNG圖像轉換爲PDF。保留透明度併合並多個PNG檔案。',
    keywords: ['png轉pdf', '轉換png', 'png轉換器', '透明圖像轉pdf'],
    description: `
      <p>PNG轉PDF將您的PNG圖像轉換爲PDF文件，同時保留透明度。非常適合圖形、標誌、截圖和具有透明背景的圖像。</p>
      <p>將多個PNG檔案合併成一個PDF，按任意順序排列，並自定義頁面設定。轉換過程保持原始圖像的高質量。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的圖像保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PNG檔案', description: '拖曳您的PNG圖像或點擊選擇檔案。' },
      { step: 2, title: '排列和配置', description: '重新排序圖像並選擇頁面大小選項。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換建立PDF並下載。' },
    ],
    useCases: [
      { title: '圖形作品集', description: '將PNG圖形和設計編譯成專業作品集。', icon: 'palette' },
      { title: '截圖文件', description: '將截圖轉換爲PDF文件。', icon: 'monitor' },
      { title: '標誌集', description: '建立標誌和品牌資產的PDF目錄。', icon: 'award' },
    ],
    faq: [
      { question: '透明度會保留嗎？', answer: 'PNG透明度在PDF輸出中會保留。' },
      { question: 'PNG動畫怎麼辦？', answer: '動畫PNG使用第一幀轉換爲靜態圖像。' },
      { question: '可以設定背景顏色嗎？', answer: '是的，您可以爲透明區域選擇背景顏色。' },
    ],
  },


  'webp-to-pdf': {
    title: 'WebP轉PDF',
    metaDescription: '將WebP圖像轉換爲PDF。現代圖像格式轉換，保持質量。',
    keywords: ['webp轉pdf', '轉換webp', 'webp轉換器', '網絡圖像轉pdf'],
    description: `
      <p>WebP轉PDF將現代WebP圖像轉換爲PDF文件。WebP是一種流行的網絡圖像格式，這個工具使轉換這些圖像變得簡單，便於列印或存檔。</p>
      <p>將多個WebP檔案合併成一個PDF，並可自定義頁面設定。轉換過程在建立緊湊PDF檔案的同時保留圖像質量。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的圖像保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳WebP檔案', description: '拖曳您的WebP圖像或點擊選擇檔案。' },
      { step: 2, title: '配置選項', description: '排列圖像並選擇頁面大小和方向。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換建立PDF。' },
    ],
    useCases: [
      { title: '網絡內容存檔', description: '將網絡圖像轉換爲PDF以供離線存檔。', icon: 'globe' },
      { title: '列印準備', description: '將WebP圖像轉換爲PDF以供列印。', icon: 'printer' },
      { title: '格式標準化', description: '將現代WebP轉換爲通用相容的PDF。', icon: 'file-check' },
    ],
    faq: [
      { question: '什麼是WebP格式？', answer: 'WebP是Google開發的現代圖像格式，爲網絡圖像提供卓越的壓縮。' },
      { question: '質量會保留嗎？', answer: '是的，轉換過程保留原始圖像質量。' },
      { question: '可以轉換動畫WebP嗎？', answer: '動畫WebP檔案轉換爲靜態圖像。' },
    ],
  },


  'svg-to-pdf': {
    title: 'SVG轉PDF',
    metaDescription: '將SVG向量圖形轉換爲PDF。保留可縮放性和質量。',
    keywords: ['svg轉pdf', '轉換svg', '向量轉pdf', '可縮放圖形轉pdf'],
    description: `
      <p>SVG轉PDF將可縮放向量圖形轉換爲PDF文件，同時保留其向量質量。SVG檔案在任何尺寸下都保持清晰，這種質量在PDF輸出中得以保持。</p>
      <p>非常適合轉換標誌、圖標、插圖和技術圖紙。生成的PDF保持原始向量圖形的可縮放性。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的檔案保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳SVG檔案', description: '拖曳您的SVG檔案或點擊選擇。' },
      { step: 2, title: '配置設定', description: '選擇頁面大小和排列選項。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換建立向量PDF。' },
    ],
    useCases: [
      { title: '標誌轉換', description: '將SVG標誌轉換爲PDF以供印刷材料使用。', icon: 'award' },
      { title: '技術圖紙', description: '將CAD導出和技術插圖轉換爲PDF。', icon: 'ruler' },
      { title: '圖標集', description: '建立圖標集和圖形的PDF目錄。', icon: 'grid' },
    ],
    faq: [
      { question: '向量質量會保留嗎？', answer: '是的，SVG向量質量在PDF輸出中完全保留。' },
      { question: '可以轉換複雜的SVG嗎？', answer: '是的，支援帶有漸變、濾鏡和效果的複雜SVG。' },
      { question: '嵌入字體怎麼辦？', answer: 'SVG檔案中的嵌入字體在PDF中會保留。' },
    ],
  },


  'bmp-to-pdf': {
    title: 'BMP轉PDF',
    metaDescription: '將BMP位圖圖像轉換爲PDF。傳統格式支援，保持質量。',
    keywords: ['bmp轉pdf', '轉換bmp', '位圖轉pdf', 'bmp轉換器'],
    description: `
      <p>BMP轉PDF將位圖圖像轉換爲PDF文件。BMP是Windows環境中常用的傳統圖像格式，這個工具使將這些檔案轉換爲現代PDF格式變得簡單。</p>
      <p>將多個BMP檔案合併成一個PDF，並可自定義設定。轉換過程在保持圖像質量的同時壓縮通常較大的BMP檔案。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的圖像保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳BMP檔案', description: '拖曳您的BMP圖像或點擊選擇檔案。' },
      { step: 2, title: '配置選項', description: '排列圖像並選擇頁面設定。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換建立PDF。' },
    ],
    useCases: [
      { title: '傳統檔案轉換', description: '將舊的BMP檔案轉換爲現代PDF格式。', icon: 'history' },
      { title: 'Windows截圖', description: '將Windows位圖截圖轉換爲PDF。', icon: 'monitor' },
      { title: '存檔現代化', description: '將傳統圖像存檔更新爲PDF格式。', icon: 'archive' },
    ],
    faq: [
      { question: '檔案大小會減小嗎？', answer: '是的，BMP檔案在轉換爲PDF時通常會顯著壓縮。' },
      { question: '質量會保留嗎？', answer: '是的，轉換過程中圖像質量得以保持。' },
      { question: '支援哪些BMP顏色深度？', answer: '支援所有標準BMP顏色深度，包括24位和32位。' },
    ],
  },


  'heic-to-pdf': {
    title: 'HEIC轉PDF',
    metaDescription: '將iPhone HEIC照片轉換爲PDF。Apple圖像格式轉換變得簡單。',
    keywords: ['heic轉pdf', '轉換heic', 'iphone照片轉pdf', 'apple圖像轉pdf'],
    description: `
      <p>HEIC轉PDF將Apple的高效圖像格式照片轉換爲PDF文件。HEIC是iPhone和iPad上的預設照片格式，這個工具使分享這些照片變得簡單。</p>
      <p>將多張HEIC照片合併成一個PDF，非常適合從iPhone照片建立照片相冊或文件存檔。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的照片保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳HEIC檔案', description: '拖曳您的HEIC照片或點擊選擇檔案。' },
      { step: 2, title: '排列照片', description: '重新排序照片並選擇頁面設定。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換建立PDF。' },
    ],
    useCases: [
      { title: 'iPhone照片相冊', description: '從iPhone照片建立PDF相冊以供分享。', icon: 'smartphone' },
      { title: '文件掃描', description: '將iPhone文件掃描轉換爲PDF格式。', icon: 'scan' },
      { title: '跨平臺分享', description: '將HEIC轉換爲PDF以實現通用相容性。', icon: 'share-2' },
    ],
    faq: [
      { question: '什麼是HEIC格式？', answer: 'HEIC（高效圖像容器）是Apple的圖像格式，比JPEG提供更好的壓縮。' },
      { question: '支援實況照片嗎？', answer: '實況照片使用關鍵幀轉換爲靜態圖像。' },
      { question: 'EXIF數據會保留嗎？', answer: '照片中繼資料可以在轉換過程中選擇性保留或刪除。' },
    ],
  },


  'tiff-to-pdf': {
    title: 'TIFF轉PDF',
    metaDescription: '將TIFF圖像轉換爲PDF。支援多頁TIFF檔案和高質量轉換。',
    keywords: ['tiff轉pdf', '轉換tiff', 'tif轉pdf', '多頁tiff'],
    description: `
      <p>TIFF轉PDF將TIFF圖像（包括多頁TIFF檔案）轉換爲PDF文件。TIFF常用於高質量掃描和專業圖形。</p>
      <p>多頁TIFF檔案自動轉換爲多頁PDF。轉換過程保留原始圖像的高質量。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的檔案保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳TIFF檔案', description: '拖曳您的TIFF檔案或點擊選擇。' },
      { step: 2, title: '配置選項', description: '選擇頁面設定和壓縮選項。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換建立PDF。' },
    ],
    useCases: [
      { title: '掃描文件', description: '將高質量掃描從TIFF轉換爲PDF。', icon: 'scan' },
      { title: '專業圖形', description: '轉換專業TIFF圖形以供分發。', icon: 'image' },
      { title: '存檔轉換', description: '將TIFF存檔轉換爲更易訪問的PDF格式。', icon: 'archive' },
    ],
    faq: [
      { question: '支援多頁TIFF嗎？', answer: '是的，多頁TIFF檔案自動轉換爲多頁PDF。' },
      { question: '質量會保留嗎？', answer: '是的，TIFF質量在PDF輸出中完全保留。' },
      { question: '使用什麼壓縮？', answer: '您可以選擇無損和有損壓縮選項。' },
    ],
  },


  'txt-to-pdf': {
    title: '文本轉PDF',
    metaDescription: '將純文本檔案轉換爲PDF。自定義字體、邊距和頁面佈局。',
    keywords: ['txt轉pdf', '文本轉pdf', '轉換文本檔案', '純文本轉pdf'],
    description: `
      <p>文本轉PDF將純文本檔案轉換爲格式化的PDF文件。自定義字體、大小、邊距和頁面佈局，從簡單文本建立專業外觀的文件。</p>
      <p>非常適合轉換代碼檔案、日誌、筆記或任何純文本內容爲可共享的PDF格式。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的檔案保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳文本檔案', description: '拖曳您的.txt檔案或點擊選擇。' },
      { step: 2, title: '自定義格式', description: '選擇字體、大小、邊距和頁面設定。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換建立格式化的PDF。' },
    ],
    useCases: [
      { title: '代碼文件', description: '將源代碼檔案轉換爲PDF以供文件使用。', icon: 'code' },
      { title: '日誌存檔', description: '將日誌檔案轉換爲PDF以供存檔。', icon: 'file-text' },
      { title: '筆記轉換', description: '將純文本筆記轉換爲格式化的PDF文件。', icon: 'sticky-note' },
    ],
    faq: [
      { question: '有哪些字體可用？', answer: '有多種字體可用，包括用於代碼的等寬字體。' },
      { question: '自動換行嗎？', answer: '是的，長行會自動換行以適應頁面。' },
      { question: '可以保留格式嗎？', answer: '原始文本中的空白和縮進會保留。' },
    ],
  },


  'json-to-pdf': {
    title: 'JSON轉PDF',
    metaDescription: '將JSON檔案轉換爲格式化的PDF。語法高亮和結構化輸出。',
    keywords: ['json轉pdf', '轉換json', 'json檢視器', 'json格式化器'],
    description: `
      <p>JSON轉PDF將JSON數據檔案轉換爲格式化、可讀的PDF文件。輸出包括語法高亮和正確的縮進，便於閱讀。</p>
      <p>非常適合記錄API響應、配置檔案或任何需要以可讀格式共享或存檔的JSON數據。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的數據保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳JSON檔案', description: '拖曳您的.json檔案或點擊選擇。' },
      { step: 2, title: '配置顯示', description: '選擇格式化選項和語法高亮。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換建立格式化的PDF。' },
    ],
    useCases: [
      { title: 'API文件', description: '將API響應轉換爲PDF以供文件使用。', icon: 'code' },
      { title: '配置存檔', description: '以可讀的PDF格式存檔配置檔案。', icon: 'settings' },
      { title: '數據報告', description: '從JSON數據導出建立PDF報告。', icon: 'bar-chart' },
    ],
    faq: [
      { question: '包含語法高亮嗎？', answer: '是的，JSON語法用顏色高亮顯示鍵、值和類型。' },
      { question: '巢狀數據如何處理？', answer: '巢狀對象和數組會正確縮進以提高可讀性。' },
      { question: '大型JSON檔案怎麼辦？', answer: '大檔案會自動分頁到多個頁面。' },
    ],
  },


  'word-to-pdf': {
    title: 'Word轉PDF',
    metaDescription: '將Word文件（DOCX）轉換爲PDF。保留格式和佈局。',
    keywords: ['word轉pdf', 'docx轉pdf', '轉換word', 'word轉換器', '微軟word轉pdf'],
    description: `
      <p>Word轉PDF將Microsoft Word文件轉換爲PDF格式，同時保留原始格式、佈局和內容結構。</p>
      <p>上傳您的DOCX檔案，獲得適合分享、列印或存檔的高質量PDF輸出。轉換過程保持文本格式、段落樣式和基本文件結構。</p>
      <p>所有轉換都在您的瀏覽器本機進行，確保您的文件保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳Word文件', description: '拖曳您的.docx檔案或點擊從設備中選擇。' },
      { step: 2, title: '等待處理', description: '工具將加載文件並準備進行轉換。' },
      { step: 3, title: '下載PDF', description: '點擊下載儲存轉換後的PDF文件。' },
    ],
    useCases: [
      { title: '文件分享', description: '將Word文件轉換爲PDF以便通用分享和檢視。', icon: 'share-2' },
      { title: '列印準備', description: '從Word文件建立可列印的PDF。', icon: 'printer' },
      { title: '文件存檔', description: '以穩定的PDF格式存檔Word文件以供長期儲存。', icon: 'archive' },
    ],
    faq: [
      { question: '支援.doc格式嗎？', answer: '目前僅支援.docx格式。請先使用Microsoft Word或LibreOffice將.doc檔案轉換爲.docx。' },
      { question: '圖像會保留嗎？', answer: '文本內容和基本格式會保留。包含許多圖像的複雜佈局可能會簡化渲染。' },
      { question: '轉換安全嗎？', answer: '是的，所有處理都在您的瀏覽器中進行。您的文件永遠不會離開您的設備。' },
    ],
  },


  'excel-to-pdf': {
    title: 'Excel轉PDF',
    metaDescription: '將Excel電子表格（XLSX）轉換爲PDF。保留表格和數據。',
    keywords: ['excel轉pdf', 'xlsx轉pdf', '轉換excel', '電子表格轉pdf', '微軟excel轉pdf'],
    description: `
      <p>Excel轉PDF將Microsoft Excel電子表格轉換爲PDF格式，同時保留表格結構和數據組織。</p>
      <p>上傳您的XLSX檔案，獲得具有正確格式化表格的清晰PDF輸出。工作簿中的每個工作表都會成爲PDF中的單獨部分。</p>
      <p>所有轉換都在您的瀏覽器本機進行，確保您的數據保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳Excel檔案', description: '拖曳您的.xlsx檔案或點擊從設備中選擇。' },
      { step: 2, title: '等待處理', description: '工具將加載電子表格並轉換所有工作表。' },
      { step: 3, title: '下載PDF', description: '點擊下載儲存轉換後的PDF文件。' },
    ],
    useCases: [
      { title: '報告分享', description: '將Excel報告轉換爲PDF以供利益相關者分發。', icon: 'file-text' },
      { title: '數據存檔', description: '以穩定的PDF格式存檔電子表格數據。', icon: 'archive' },
      { title: '列印準備', description: '從Excel工作表建立可列印的PDF。', icon: 'printer' },
    ],
    faq: [
      { question: '支援多個工作表嗎？', answer: '是的，工作簿中的所有工作表都會被轉換並包含在PDF中。' },
      { question: '支援.xls格式嗎？', answer: '目前僅支援.xlsx格式。請先將.xls檔案另存爲.xlsx。' },
      { question: '公式會保留嗎？', answer: 'PDF顯示計算值。公式在PDF格式中不可執行。' },
    ],
  },


  'pptx-to-pdf': {
    title: 'PowerPoint轉PDF',
    metaDescription: '將PowerPoint簡報（PPTX）轉換爲PDF。保留幻燈片內容便於分享。',
    keywords: ['powerpoint轉pdf', 'pptx轉pdf', '轉換pptx', '簡報轉pdf', '幻燈片轉pdf'],
    description: `
      <p>PowerPoint轉PDF將Microsoft PowerPoint簡報轉換爲PDF格式，保留幻燈片內容和文本以便輕鬆分享和檢視。</p>
      <p>每張幻燈片成爲PDF中的一頁，保持演示流程。非常適合與沒有安裝PowerPoint的人分享簡報。</p>
      <p>所有轉換都在您的瀏覽器本機進行，確保您的簡報保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PowerPoint檔案', description: '拖曳您的.pptx檔案或點擊從設備中選擇。' },
      { step: 2, title: '等待處理', description: '工具將擷取幻燈片內容並建立PDF。' },
      { step: 3, title: '下載PDF', description: '點擊下載儲存轉換後的PDF文件。' },
    ],
    useCases: [
      { title: '簡報分享', description: '與任何人分享簡報，無需PowerPoint。', icon: 'share-2' },
      { title: '講義建立', description: '從演示幻燈片建立PDF講義。', icon: 'file-text' },
      { title: '存檔簡報', description: '以穩定的PDF格式存檔簡報。', icon: 'archive' },
    ],
    faq: [
      { question: '動畫會保留嗎？', answer: 'PDF是靜態格式，因此動畫和過渡不會保留。每張幻燈片變成靜態頁面。' },
      { question: '支援.ppt格式嗎？', answer: '目前僅支援.pptx格式。請先將.ppt檔案轉換爲.pptx。' },
      { question: '演講者備註會包含嗎？', answer: '目前演講者備註不會包含在PDF輸出中。' },
    ],
  },


  'xps-to-pdf': {
    title: 'XPS轉PDF',
    metaDescription: '將XPS文件轉換爲PDF格式。高保真轉換，保留佈局和圖形。',
    keywords: ['xps轉pdf', '轉換xps', 'xps轉換器', '微軟xps轉pdf', 'oxps轉pdf'],
    description: `
      <p>XPS轉PDF將Microsoft XPS（XML紙規範）文件轉換爲PDF格式，同時保留原始佈局、文本和向量圖形。</p>
      <p>XPS是一種類似於PDF的固定文件格式。此工具使用原生XPS解析提供高保真轉換，確保文件的準確再現。</p>
      <p>所有轉換都在您的瀏覽器本機進行，確保您的文件保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳XPS檔案', description: '拖曳您的.xps檔案或點擊從設備中選擇。' },
      { step: 2, title: '等待處理', description: '工具將解析並轉換XPS文件。' },
      { step: 3, title: '下載PDF', description: '點擊下載儲存轉換後的PDF文件。' },
    ],
    useCases: [
      { title: '格式轉換', description: '將XPS文件轉換爲更廣泛支援的PDF格式。', icon: 'file' },
      { title: '文件分享', description: '與沒有XPS檢視器的使用者分享XPS文件。', icon: 'share-2' },
      { title: '存檔遷移', description: '將XPS存檔遷移到PDF格式以獲得更好的相容性。', icon: 'archive' },
    ],
    faq: [
      { question: '什麼是XPS格式？', answer: 'XPS（XML紙規範）是Microsoft的固定文件格式，類似於PDF。它常用於Windows列印。' },
      { question: '轉換是無損的嗎？', answer: '是的，轉換以高保真度保留文本、圖形和佈局。' },
      { question: '支援多頁XPS檔案嗎？', answer: '是的，XPS文件中的所有頁面都會轉換到PDF中。' },
    ],
  },


  'rtf-to-pdf': {
    title: 'RTF轉PDF',
    metaDescription: '將RTF（富文本格式）檔案轉換爲PDF。保留文件中的文本格式。',
    keywords: ['rtf轉pdf', '轉換rtf', '富文本轉pdf', 'rtf轉換器'],
    description: `
      <p>RTF轉PDF將富文本格式檔案轉換爲PDF文件。RTF是一種廣泛支援的文本格式，包含基本格式如字體、顏色和樣式。</p>
      <p>上傳您的RTF檔案，獲得乾淨的PDF輸出，同時保留文本內容和基本格式。非常適合將舊文件轉換爲現代PDF格式。</p>
      <p>所有轉換都在您的瀏覽器本機進行，確保您的文件保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳RTF檔案', description: '拖曳您的.rtf檔案或點擊從設備中選擇。' },
      { step: 2, title: '等待處理', description: '工具將解析並轉換RTF內容。' },
      { step: 3, title: '下載PDF', description: '點擊下載儲存轉換後的PDF文件。' },
    ],
    useCases: [
      { title: '舊版轉換', description: '將舊的RTF文件轉換爲現代PDF格式。', icon: 'history' },
      { title: '文件分享', description: '以通用可檢視的PDF格式分享RTF文件。', icon: 'share-2' },
      { title: '存檔文件', description: '以穩定的PDF格式存檔RTF檔案以供長期儲存。', icon: 'archive' },
    ],
    faq: [
      { question: '保留哪些格式？', answer: '包括字體、段落和樣式在內的基本文本格式會被轉換。複雜的RTF功能可能會被簡化。' },
      { question: '可以轉換多個RTF檔案嗎？', answer: '目前一次只能轉換一個檔案。使用合併PDF來合併多個轉換後的檔案。' },
      { question: '支援嵌入圖像嗎？', answer: '文本內容是主要焦點。嵌入對象可能無法渲染。' },
    ],
  },


  'epub-to-pdf': {
    title: 'EPUB轉PDF',
    metaDescription: '將EPUB電子書轉換爲PDF。保留格式、圖片和章節結構。',
    keywords: ['epub轉pdf', '轉換epub', '電子書轉pdf', 'epub轉換器'],
    description: `
      <p>EPUB轉PDF將電子書檔案轉換爲高質量的PDF文件。EPUB是最流行的電子書格式，被大多數電子閱讀器和數字圖書館使用。</p>
      <p>此工具可保留電子書的文本格式、圖片和章節結構。非常適合列印、存檔或以通用格式分享電子書。</p>
      <p>所有轉換都在您的瀏覽器本機進行，使用先進的渲染技術，確保您的書籍保持私密，轉換速度快。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳EPUB檔案', description: '拖曳您的.epub檔案或點擊從設備中選擇。' },
      { step: 2, title: '等待轉換', description: '工具將渲染並轉換電子書的所有頁面。' },
      { step: 3, title: '下載PDF', description: '點擊下載儲存轉換後的PDF文件。' },
    ],
    useCases: [
      { title: '列印電子書', description: '將電子書轉換爲PDF以便物理列印。', icon: 'printer' },
      { title: '存檔書籍', description: '以長期穩定的PDF格式存儲電子書。', icon: 'archive' },
      { title: '分享文件', description: '與任何人分享電子書，即使沒有電子閱讀器。', icon: 'share-2' },
    ],
    faq: [
      { question: '格式會保留嗎？', answer: '是的！此工具使用原生EPUB渲染，以高保真度保留文本格式、圖片和佈局。' },
      { question: '支援受DRM保護的EPUB嗎？', answer: '不支援，受DRM保護的電子書無法轉換。僅支援無DRM的EPUB檔案。' },
      { question: '頁面大小是如何確定的？', answer: 'EPUB內容被渲染爲標準A4頁面大小，以獲得最佳可讀性。' },
    ],
  },


  'mobi-to-pdf': {
    title: 'MOBI轉PDF',
    metaDescription: '將MOBI電子書轉換爲PDF。支援Kindle格式的高質量渲染。',
    keywords: ['mobi轉pdf', '轉換mobi', 'kindle轉pdf', 'azw轉pdf', 'mobi轉換器'],
    description: `
      <p>MOBI轉PDF將亞馬遜Kindle電子書檔案轉換爲高質量的PDF文件。MOBI格式（包括AZW和AZW3）是亞馬遜專有的電子書格式，用於Kindle設備。</p>
      <p>此工具可保留Kindle書籍的文本格式、圖片和結構。非常適合列印、存檔或在不支援MOBI格式的設備上閱讀。</p>
      <p>所有轉換都在您的瀏覽器本機進行，使用先進的渲染技術，確保您的書籍保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳MOBI檔案', description: '拖曳您的.mobi、.azw或.azw3檔案，或點擊從設備中選擇。' },
      { step: 2, title: '等待轉換', description: '工具將渲染並轉換電子書的所有頁面。' },
      { step: 3, title: '下載PDF', description: '點擊下載儲存轉換後的PDF文件。' },
    ],
    useCases: [
      { title: '列印Kindle書籍', description: '將Kindle電子書轉換爲PDF以便物理列印。', icon: 'printer' },
      { title: '存檔書籍', description: '以通用PDF格式存儲Kindle書籍。', icon: 'archive' },
      { title: '跨設備閱讀', description: '在只支援PDF的設備上閱讀Kindle書籍。', icon: 'tablet-smartphone' },
    ],
    faq: [
      { question: '支援哪些MOBI格式？', answer: '此工具支援.mobi、.azw和.azw3檔案（非DRM版本）。' },
      { question: '支援受DRM保護的Kindle書籍嗎？', answer: '不支援，受DRM保護的電子書無法轉換。僅支援無DRM的檔案。' },
      { question: '格式會保留嗎？', answer: '是的！該工具使用原生MOBI渲染來保留文本、圖片和佈局。' },
    ],
  },


  'djvu-to-pdf': {
    title: 'DJVU轉PDF',
    metaDescription: '將DJVU文件檔案轉換爲PDF。掃描文件和書籍的高質量渲染。',
    keywords: ['djvu轉pdf', '轉換djvu', 'djvu轉換器', 'djvu pdf', 'djv轉pdf'],
    description: `
      <p>DJVU轉PDF將DjVu文件檔案轉換爲高質量的PDF文件。DjVu是一種計算機檔案格式，主要用於存儲掃描文件，特別是包含文本、線條圖和照片組合的文件。</p>
      <p>此工具以您選擇的DPI（每英寸點數）渲染DJVU檔案的每一頁，並將它們合併為PDF文件。非常適合轉換掃描書籍、技術手冊和檔案文件。</p>
      <p>所有轉換都在您的瀏覽器本機進行，確保您的文件保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳DJVU檔案', description: '拖曳您的.djvu或.djv檔案，或點擊從設備中選擇。' },
      { step: 2, title: '配置選項', description: '選擇輸出DPI（72、150或300）和PDF的圖像質量。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換爲PDF並下載轉換後的文件。' },
    ],
    useCases: [
      { title: '存檔文件', description: '將DJVU檔案轉換爲通用PDF格式。', icon: 'archive' },
      { title: '分享掃描書籍', description: '以PDF格式分享掃描書籍以獲得更廣泛的相容性。', icon: 'share-2' },
      { title: '列印文件', description: '將DJVU轉換爲高質量PDF以進行列印。', icon: 'printer' },
    ],
    faq: [
      { question: '什麼是DJVU格式？', answer: 'DjVu是一種檔案格式，設計用於存儲掃描文件，特別是包含文本、圖形和圖像的文件。它爲掃描內容提供比PDF更好的壓縮。' },
      { question: '我應該選擇多少DPI？', answer: '72 DPI適合網頁瀏覽，150 DPI適合標準文件，300 DPI適合高質量列印。' },
      { question: '文字是否可搜尋？', answer: '文字將渲染爲圖像。如果您需要可搜尋的文字，請在轉換後使用我們的OCR PDF工具。' },
    ],
  },


  'fb2-to-pdf': {
    title: 'FB2轉PDF',
    metaDescription: '將FictionBook (FB2)電子書轉換爲PDF。支援多個檔案的高質量渲染。',
    keywords: ['fb2轉pdf', '轉換fb2', 'fictionbook轉pdf', 'fb2轉換器', 'fb2.zip轉pdf'],
    description: `
      <p>FB2轉PDF將FictionBook (FB2)電子書檔案轉換爲高質量的PDF文件。FB2是一種流行的基於XML的電子書格式，在俄羅斯和東歐廣泛使用。</p>
      <p>此工具支援.fb2和.fb2.zip檔案，並可一次處理多個檔案。它保留電子書的文本格式、圖片和章節結構。</p>
      <p>所有轉換都在您的瀏覽器本機進行，使用先進的渲染技術，確保您的書籍保持私密，轉換速度快。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳FB2檔案', description: '拖曳一個或多個.fb2或.fb2.zip檔案，或點擊從設備中選擇。' },
      { step: 2, title: '選擇質量', description: '選擇輸出質量：低（72 DPI）、中（150 DPI）或高（300 DPI）。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換爲PDF並下載轉換後的文件。' },
    ],
    useCases: [
      { title: '列印電子書', description: '將FB2電子書轉換爲PDF以便物理列印。', icon: 'printer' },
      { title: '批次轉換', description: '一次將多個FB2檔案轉換爲PDF。', icon: 'layers' },
      { title: '通用格式', description: '以適用於任何設備的PDF格式分享電子書。', icon: 'share-2' },
    ],
    faq: [
      { question: '可以一次轉換多個FB2檔案嗎？', answer: '可以！此工具支援同時批次轉換最多20個FB2檔案。' },
      { question: '支援.fb2.zip檔案嗎？', answer: '支援，該工具會自動從.fb2.zip壓縮包中擷取並轉換FB2檔案。' },
      { question: '格式會保留嗎？', answer: '是的！該工具使用原生FB2渲染，以高保真度保留文本格式、圖片和章節結構。' },
    ],
  },

  // ==================== 從PDF轉換 ====================,

  'pdf-to-jpg': {
    ...toolContentZh['pdf-to-jpg'],
    title: '將 PDF 頁面轉成 JPG 圖片',
    metaDescription: '將 PDF 頁面匯出為 JPG 圖片，可轉換單頁或全部頁面，適合分享、預覽與圖片保存。',
    keywords: ['pdf轉jpg圖片', 'pdf頁面轉成圖片', '將pdf一頁存成jpg', 'pdf每頁轉jpg', '高品質pdf轉jpg'],
    description: `
      <p>將 PDF 頁面轉成 JPG 圖片，適合把 PDF 內容變成更容易分享與使用的圖片檔案。你可以只匯出一頁，也可以把整份 PDF 全部轉成 JPG。</p>
      <p>這個工具適合課件、海報、宣傳頁、報告頁面與快速預覽。當 PDF 不如圖片方便傳送時，轉成 JPG 會更靈活。如果匯出的圖片之後還要重新打包整理，也可以<a href="/zh-tw/tools/jpg-to-pdf">把 JPG 圖片重新合併成一份 PDF</a>。</p>
      <p>所有轉換都在瀏覽器中完成，PDF 不會上傳到伺服器，更適合需要隱私的文件。</p>
    `,
    useCases: [
      { title: '將 PDF 頁面存成圖片', description: '只匯出需要的頁面作為圖片，方便傳送或預覽。', icon: 'globe' },
      { title: '課件頁面轉 JPG', description: '把 PDF 課件或投影片轉成圖片，更方便展示與分享。', icon: 'share-2' },
      { title: '匯出頁面方便分享', description: '將 PDF 頁面轉成 JPG 後，更容易用於聊天、社群或網站。', icon: 'presentation' },
    ],
    faq: [
      { question: '如何把 PDF 的其中一頁轉成 JPG？', answer: '上傳 PDF 後選擇單頁或頁碼範圍，再匯出成 JPG 即可。' },
      { question: 'PDF 每一頁都會產生獨立圖片嗎？', answer: '會，多頁 PDF 通常會按頁生成多張獨立 JPG 圖片。如果之後還想重新整理成一份文件，也可以<a href="/zh-tw/tools/jpg-to-pdf">把這些 JPG 頁面重新合成 PDF</a>。' },
      { question: '如何轉出更清晰的 JPG？', answer: '如果工具提供解析度或品質選項，建議使用較高的品質或 DPI。' },
    ],
  },

  'pdf-to-png': {
    title: 'PDF轉PNG',
    metaDescription: '將PDF頁面轉換爲PNG圖像。無損質量，支援透明度。',
    keywords: ['pdf轉png', '轉換pdf爲png', 'pdf圖像擷取', '無損pdf轉換'],
    description: `
      <p>PDF轉PNG將PDF文件頁面轉換爲具有無損壓縮的高質量PNG圖像。PNG格式完美保留圖像質量並支援透明度。</p>
      <p>非常適合擷取圖形、圖表或任何質量保持至關重要的內容。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '配置選項', description: '選擇頁面並設定解析度（DPI）選項。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換擷取PNG圖像。' },
    ],
    useCases: [
      { title: '圖形擷取', description: '以完美質量擷取圖表和圖形。', icon: 'image' },
      { title: '設計資產', description: '將PDF設計轉換爲PNG以供編輯軟體使用。', icon: 'palette' },
      { title: '文件', description: '爲技術文件建立高質量圖像。', icon: 'file-text' },
    ],
    faq: [
      { question: '爲什麼選擇PNG而不是JPG？', answer: 'PNG提供無損壓縮和透明度支援，非常適合圖形和文本。' },
      { question: '支援透明背景嗎？', answer: '是的，具有透明度的PDF頁面在PNG輸出中會保留。' },
      { question: '應該使用什麼DPI？', answer: '螢幕檢視使用150 DPI，列印使用300 DPI。' },
    ],
  },


  'pdf-to-webp': {
    title: 'PDF轉WebP',
    metaDescription: '將PDF頁面轉換爲WebP圖像。現代格式，出色的壓縮。',
    keywords: ['pdf轉webp', '轉換pdf爲webp', '現代圖像格式', '網絡優化圖像'],
    description: `
      <p>PDF轉WebP將PDF文件頁面轉換爲WebP圖像，這是Google的現代圖像格式，提供出色的壓縮和高質量。</p>
      <p>WebP圖像比JPG或PNG更小，同時保持相當的質量，非常適合網絡使用。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '設定質量選項', description: '選擇頁面並設定質量/壓縮設定。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換建立WebP圖像。' },
    ],
    useCases: [
      { title: '網絡優化', description: '從PDF內容建立網絡優化的圖像。', icon: 'globe' },
      { title: '帶寬節省', description: '減小圖像檔案大小以加快加載速度。', icon: 'zap' },
      { title: '現代網站', description: '爲現代網絡項目使用現代圖像格式。', icon: 'layout' },
    ],
    faq: [
      { question: '什麼是WebP格式？', answer: 'WebP是Google的現代圖像格式，提供卓越的壓縮。' },
      { question: 'WebP被廣泛支援嗎？', answer: '是的，所有現代瀏覽器都支援WebP格式。' },
      { question: 'WebP檔案小多少？', answer: 'WebP檔案通常比同等JPG檔案小25-35%。' },
    ],
  },


  'pdf-to-bmp': {
    title: 'PDF轉BMP',
    metaDescription: '將PDF頁面轉換爲BMP位圖圖像。未壓縮格式，最大相容性。',
    keywords: ['pdf轉bmp', '轉換pdf爲位圖', '未壓縮圖像', '傳統格式'],
    description: `
      <p>PDF轉BMP將PDF文件頁面轉換爲BMP位圖圖像。BMP是一種未壓縮格式，確保與傳統系統和應用程式的最大相容性。</p>
      <p>雖然BMP檔案比壓縮格式大，但它們提供完美的質量和通用相容性。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '選擇頁面', description: '選擇要轉換的頁面並設定DPI。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換建立BMP圖像。' },
    ],
    useCases: [
      { title: '傳統系統', description: '建立與舊軟體相容的圖像。', icon: 'history' },
      { title: 'Windows應用程式', description: '爲Windows特定應用程式生成BMP檔案。', icon: 'monitor' },
      { title: '未壓縮存檔', description: '從PDF建立未壓縮的圖像存檔。', icon: 'archive' },
    ],
    faq: [
      { question: '爲什麼使用BMP格式？', answer: 'BMP提供未壓縮的質量和與傳統系統的最大相容性。' },
      { question: 'BMP檔案更大嗎？', answer: '是的，BMP檔案未壓縮，比JPG或PNG大得多。' },
      { question: '支援哪些顏色深度？', answer: '支援24位和32位顏色深度。' },
    ],
  },


  'pdf-to-tiff': {
    title: 'PDF轉TIFF',
    metaDescription: '將PDF轉換爲TIFF圖像。專業質量，支援多頁。',
    keywords: ['pdf轉tiff', '轉換pdf爲tiff', '專業圖像', '多頁tiff'],
    description: `
      <p>PDF轉TIFF將PDF文件轉換爲高質量的TIFF圖像。由於其無損壓縮，TIFF是專業列印和存檔的首選格式。</p>
      <p>建立單頁TIFF或將所有頁面合併成多頁TIFF檔案。非常適合專業和存檔目的。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '配置輸出', description: '選擇單頁或多頁TIFF並設定DPI。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換建立TIFF圖像。' },
    ],
    useCases: [
      { title: '專業列印', description: '從PDF文件建立可列印的TIFF檔案。', icon: 'printer' },
      { title: '文件存檔', description: '以高質量TIFF格式存檔文件。', icon: 'archive' },
      { title: '出版', description: '將PDF轉換爲TIFF以供出版工作流程使用。', icon: 'book' },
    ],
    faq: [
      { question: '可以建立多頁TIFF嗎？', answer: '是的，您可以將所有PDF頁面合併成一個多頁TIFF。' },
      { question: '有哪些壓縮選項？', answer: 'LZW、ZIP和無壓縮選項可用。' },
      { question: '列印應該使用什麼DPI？', answer: '專業列印使用300 DPI或更高。' },
    ],
  },


  'pdf-to-svg': {
    title: 'PDF轉SVG',
    metaDescription: '將PDF頁面轉換爲SVG向量圖形。任意尺寸完美縮放，支援單獨導出每頁。',
    keywords: ['pdf轉svg', '轉換pdf爲svg', '向量圖形', '可縮放pdf', 'svg轉換器'],
    description: `
      <p>PDF轉SVG將您的PDF文件的每一頁轉換爲可縮放向量圖形（SVG）。SVG是一種向量格式，在任何縮放級別或列印尺寸下都能保持完美質量。</p>
      <p>與光柵格式（JPG、PNG）不同，SVG圖形在縮放時永遠不會變得模糊。這使其非常適合標誌、圖表、技術圖紙以及任何需要以不同尺寸顯示的內容。</p>
      <p>預覽每個轉換後的頁面，可以單獨下載或作爲ZIP檔案下載。所有處理都在您的瀏覽器本機進行，確保您的文件完全隱私。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊瀏覽選擇。' },
      { step: 2, title: '配置選項', description: '設定解析度質量，可選擇指定頁面範圍。' },
      { step: 3, title: '預覽和轉換', description: '點擊轉換進行處理。點擊縮圖預覽每個頁面。' },
      { step: 4, title: '下載', description: '下載單個SVG檔案或將所有頁面打包爲ZIP壓縮包。' },
    ],
    useCases: [
      { title: '標誌和圖形', description: '從PDF中擷取標誌和向量圖形，用於設計軟體。', icon: 'pen-tool' },
      { title: '技術圖紙', description: '將技術圖紙和圖表轉換爲可縮放的SVG格式。', icon: 'ruler' },
      { title: '網頁開發', description: '從PDF內容建立網頁友好的SVG檔案，用於響應式網站。', icon: 'globe' },
      { title: '任意尺寸列印', description: '生成可以任意尺寸完美列印的向量圖形。', icon: 'printer' },
    ],
    faq: [
      { question: '什麼是SVG格式？', answer: 'SVG（可縮放向量圖形）是一種可以縮放到任意尺寸而不損失質量的向量圖像格式。它廣泛用於標誌、圖標和網頁圖形。' },
      { question: 'SVG是真正的向量嗎？', answer: 'SVG包含PDF頁面的高解析度渲染。對於具有向量內容的PDF，您可以在任何縮放級別獲得清晰的輸出。' },
      { question: '可以在下載前預覽嗎？', answer: '可以！點擊任何縮圖檢視SVG的完整尺寸預覽。您可以下載單個頁面或全部下載。' },
      { question: '應該選擇什麼解析度？', answer: '更高的解析度（216或288 DPI）會產生更大、更詳細的SVG。使用較低設定可以加快處理速度並獲得更小的檔案。' },
    ],
  },


  'pdf-to-greyscale': {
    title: 'PDF轉灰度',
    metaDescription: '將彩色PDF轉換爲灰度。減小檔案大小並準備黑白列印。',
    keywords: ['pdf轉灰度', '灰度pdf', '黑白pdf', '刪除顏色'],
    description: `
      <p>PDF轉灰度將彩色PDF文件轉換爲灰度（黑白）。這可以減小檔案大小併為黑白列印準備文件。</p>
      <p>轉換過程在刪除顏色資訊的同時保留文本清晰度和圖像細節。非常適合草稿列印或建立印表機友好版本。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的彩色PDF檔案或點擊選擇。' },
      { step: 2, title: '預覽轉換', description: '預覽灰度版本的外觀。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換建立灰度PDF。' },
    ],
    useCases: [
      { title: '節省列印', description: '轉換爲灰度以節省彩色列印成本。', icon: 'printer' },
      { title: '草稿文件', description: '建立黑白草稿以供審閱。', icon: 'file-text' },
      { title: '減小檔案大小', description: '通過刪除顏色資訊減小PDF大小。', icon: 'minimize-2' },
    ],
    faq: [
      { question: '文本會保持可讀嗎？', answer: '是的，灰度轉換過程中文本清晰度得以保留。' },
      { question: '檔案會小多少？', answer: '檔案大小減少因情況而異，但對於顏色密集的文件可以減少20-50%。' },
      { question: '可以只轉換特定頁面嗎？', answer: '是的，您可以選擇要轉換爲灰度的頁面。' },
    ],
  },


  'pdf-to-json': {
    title: 'PDF轉JSON',
    metaDescription: '將PDF內容擷取爲JSON格式。從PDF文件獲取結構化數據。',
    keywords: ['pdf轉json', '擷取pdf數據', 'pdf解析器', '結構化pdf數據'],
    description: `
      <p>PDF轉JSON將PDF文件中的內容擷取爲結構化的JSON格式。擷取文本、中繼資料、頁面資訊和文件結構以供程式化使用。</p>
      <p>非常適合數據擷取、文件分析或將PDF內容整合到應用程式和工作流程中。</p>
      <p>所有擷取都在您的瀏覽器中進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '選擇要擷取的數據', description: '選擇要擷取的內容：文本、中繼資料、結構。' },
      { step: 3, title: '擷取並下載', description: '點擊擷取生成JSON並下載。' },
    ],
    useCases: [
      { title: '數據擷取', description: '從PDF文件中擷取結構化數據。', icon: 'database' },
      { title: '文件分析', description: '以編程方式分析PDF結構和內容。', icon: 'search' },
      { title: '整合', description: '通過JSON將PDF內容導入應用程式。', icon: 'plug' },
    ],
    faq: [
      { question: '擷取哪些數據？', answer: '文本內容、中繼資料、頁面尺寸、字體和文件結構。' },
      { question: 'JSON格式有文件嗎？', answer: '是的，JSON模式是一致且有良好文件的。' },
      { question: '可以從掃描的PDF中擷取嗎？', answer: '掃描的PDF需要先進行OCR。在擷取前使用我們的OCR PDF工具。' },
    ],
  },


  'pdf-to-pptx': {
    title: 'PDF轉PowerPoint',
    metaDescription: '將PDF轉換爲PowerPoint (PPTX)簡報。每一頁轉爲高質量幻燈片。',
    keywords: ['pdf轉ppt', 'pdf轉pptx', 'pdf轉powerpoint', 'pdf簡報'],
    description: `
      <p>PDF轉PowerPoint將您的PDF文件轉換爲可編輯的PowerPoint簡報(PPTX)。每個PDF頁面都會轉換爲保持完美視覺佈局的高質量幻燈片。</p>
      <p>此工具非常適合將報告、講義或任何PDF內容轉換爲演示格式。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的文件隱私安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '選擇質量', description: '選擇幻燈片的圖像質量(DPI)。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換建立PowerPoint簡報。' },
    ],
    useCases: [
      { title: '建立演示', description: '將PDF文件轉換爲會議幻燈片。', icon: 'presentation' },
      { title: '培訓材料', description: '將教材轉換爲互動式簡報。', icon: 'book-open' },
      { title: '內容複用', description: '將現有內容轉換爲可編輯幻燈片。', icon: 'refresh-cw' },
    ],
    faq: [
      { question: '幻燈片可編輯嗎？', answer: '每張幻燈片包含PDF頁面的圖像。您可以在頂部新增內容。' },
      { question: '應該選什麼DPI？', answer: '螢幕展示選150 DPI，列印選300 DPI。' },
      { question: '支援多頁嗎？', answer: '是的，每一頁都會成爲一張單獨的幻燈片。' },
    ],
  },


  'pdf-to-excel': {
    title: 'PDF轉Excel',
    metaDescription: '將PDF轉換爲Excel表格。將表格擷取爲XLSX格式。',
    keywords: ['pdf轉excel', 'pdf轉xlsx', '擷取表格', 'pdf數據擷取'],
    description: `
      <p>PDF轉Excel將您的PDF文件轉換爲可編輯的Excel電子表格(XLSX)。工具自動檢測並擷取表格。</p>
      <p>非常適合分析財務報告或數據表。每頁的表格擷取到單獨的Sheet中。</p>
      <p>所有轉換都在您的瀏覽器中進行，確保您的數據隱私安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '處理', description: '工具將自動識別表格。' },
      { step: 3, title: '下載Excel', description: '下載包含擷取表格的檔案。' },
    ],
    useCases: [
      { title: '財務分析', description: '轉換銀行賬單或發票。', icon: 'trending-up' },
      { title: '數據擷取', description: '從報告中擷取數據表。', icon: 'database' },
      { title: '清單轉換', description: '將PDF庫存清單轉換爲表格。', icon: 'clipboard' },
    ],
    faq: [
      { question: '如何處理表格？', answer: '每頁的表格擷取到對應的Excel工作表中。' },
      { question: '如果沒有表格？', answer: '將建立一個提示資訊工作表。' },
      { question: '保留格式嗎？', answer: '數據保留，視覺格式可能簡化。' },
    ],
  },


  'psd-to-pdf': {
    title: 'PSD轉PDF',
    metaDescription: '將Adobe Photoshop (PSD)檔案轉換爲PDF。保留圖層和高質量。',
    keywords: ['psd轉pdf', '轉換psd', 'photoshop轉pdf', 'adobe psd轉pdf'],
    description: `
      <p>直接在瀏覽器中將Adobe Photoshop (PSD)檔案轉換爲PDF格式。此工具處理複雜的PSD檔案，並在轉換過程中保持高質量的視覺效果。</p>
      <p>非常適合設計師和藝術家與沒有安裝Photoshop的客戶或同事分享他們的作品。轉換生成乾淨、可視化的PDF文件。</p>
      <p>所有處理都在本機完成，確保您的設計和作品保留在設備上，保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PSD檔案', description: '將PSD檔案拖曳到上傳區域。支援大檔案。' },
      { step: 2, title: '處理', description: '工具將讀取PSD數據並將其轉換爲PDF格式。' },
      { step: 3, title: '下載', description: '立即下載轉換後的PDF檔案。' },
    ],
    useCases: [
      { title: '客戶預覽', description: '以通用的PDF格式向客戶發送設計稿。', icon: 'image' },
      { title: '作品集建立', description: '將Photoshop作品編譯成PDF作品集以供求職申請。', icon: 'briefcase' },
      { title: '列印準備', description: '將PSD設計轉換爲PDF，以便列印服務更好地處理。', icon: 'printer' },
    ],
    faq: [
      { question: '需要安裝Photoshop嗎？', answer: '不需要，此工具完全在瀏覽器中運行，無需Adobe Photoshop。' },
      { question: '圖層會保留嗎？', answer: '生成的PDF是用於檢視的PSD扁平化版本。' },
      { question: '有檔案大小限制嗎？', answer: '我們支援大檔案，但非常大的高解析度PSD可能需要更長的處理時間。' },
    ],
  },

  // ==================== 整理與管理 ====================,

  'ocr-pdf': {
    title: 'OCR PDF',
    metaDescription: '使用OCR使掃描的PDF可搜尋。從圖像和掃描文件中擷取文本。',
    keywords: ['ocr pdf', '可搜尋pdf', '文本識別', '掃描轉文本'],
    description: `
      <p>OCR PDF使用光學字符識別從PDF中的掃描文件和圖像中擷取文本。將基於圖像的PDF轉換爲可搜尋、可選擇文本的文件。</p>
      <p>支援多種語言，確保無論文件語言如何都能準確識別文本。在新增可搜尋文本層的同時保留原始佈局。</p>
      <p>所有OCR處理都在您的瀏覽器中進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳掃描的PDF', description: '拖曳您的掃描PDF或點擊選擇。' },
      { step: 2, title: '選擇語言', description: '選擇文件語言以獲得準確識別。' },
      { step: 3, title: '處理並下載', description: '點擊處理運行OCR並下載可搜尋的PDF。' },
    ],
    useCases: [
      { title: '數字化存檔', description: '使掃描的文件存檔可搜尋。', icon: 'archive' },
      { title: '文件搜尋', description: '在掃描文件中啓用文本搜尋。', icon: 'search' },
      { title: '文本擷取', description: '從掃描文件中擷取文本以供編輯。', icon: 'type' },
    ],
    faq: [
      { question: '支援哪些語言？', answer: '支援100多種語言，包括英語、中文、日語、韓語等。' },
      { question: '原始佈局會保留嗎？', answer: '是的，原始視覺佈局會保留，並新增可搜尋的文本層。' },
      { question: 'OCR有多準確？', answer: '準確性取決於掃描質量，但對於清晰的文件通常超過95%。' },
    ],
  },


  'alternate-merge': {
    title: '交替合併',
    metaDescription: '通過交替頁面合併PDF。將正面和背面掃描合併成一個文件。',
    keywords: ['交替合併', '交錯pdf', '合併掃描', '正反面合併'],
    description: `
      <p>交替合併通過交替交錯兩個PDF的頁面來合併它們。這非常適合將分別掃描的正面和背面頁面合併成一個文件。</p>
      <p>上傳兩個PDF，工具將通過交替從每個PDF中取一頁來合併它們。您還可以反轉其中一個文件的順序以適應從後到前的掃描。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳兩個PDF', description: '上傳正面頁面PDF和背面頁面PDF。' },
      { step: 2, title: '配置順序', description: '選擇是否爲從後到前的掃描反轉第二個文件。' },
      { step: 3, title: '合併並下載', description: '點擊合併交錯頁面並下載。' },
    ],
    useCases: [
      { title: '雙面掃描', description: '合併分別掃描的正面和背面頁面。', icon: 'copy' },
      { title: '文件組裝', description: '交錯來自兩個相關文件的頁面。', icon: 'layers' },
      { title: '書籍掃描', description: '將奇數頁和偶數頁掃描合併成完整的書籍。', icon: 'book' },
    ],
    faq: [
      { question: '如果文件頁數不同怎麼辦？', answer: '較長文件的額外頁面會附加在末尾。' },
      { question: '可以反轉頁面順序嗎？', answer: '是的，您可以在合併前反轉任一文件。' },
      { question: '這與普通合併有什麼不同？', answer: '是的，普通合併是追加文件；交替合併是交錯頁面。' },
    ],
  },


  'add-attachments': {
    title: '新增附件',
    metaDescription: '在PDF文件中嵌入檔案。將任何檔案類型附加到您的PDF。',
    keywords: ['pdf附件', '嵌入檔案', '附加到pdf', 'pdf組合'],
    description: `
      <p>新增附件將任何類型的檔案嵌入到您的PDF文件中。附加電子表格、圖像、原始檔或任何其他文件以建立全面的PDF包。</p>
      <p>附件嵌入在PDF中，收件人可以使用任何PDF閱讀器擷取。非常適合將相關檔案一起分發。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的檔案保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '新增附件', description: '選擇要附加到PDF的檔案。' },
      { step: 3, title: '儲存並下載', description: '點擊儲存嵌入附件並下載。' },
    ],
    useCases: [
      { title: '項目包', description: '將項目檔案與文件PDF捆綁在一起。', icon: 'package' },
      { title: '報告分發', description: '將源數據檔案附加到報告PDF。', icon: 'paperclip' },
      { title: '合約包', description: '在合約中包含支援文件。', icon: 'file-text' },
    ],
    faq: [
      { question: '可以附加哪些檔案類型？', answer: '任何檔案類型都可以附加到PDF。' },
      { question: '有大小限制嗎？', answer: '包括附件在內的PDF總大小不應超過500MB。' },
      { question: '收件人可以擷取附件嗎？', answer: '是的，任何PDF閱讀器都可以擷取嵌入的附件。' },
    ],
  },


  'extract-attachments': {
    title: '擷取附件',
    metaDescription: '從PDF中擷取嵌入的檔案。從PDF文件下載所有附件。',
    keywords: ['擷取附件', 'pdf附件', '下載嵌入檔案', 'pdf擷取'],
    description: `
      <p>擷取附件從PDF文件中檢索所有嵌入的檔案。單獨下載附件或作爲包含所有檔案的ZIP壓縮包下載。</p>
      <p>非常適合訪問嵌入在PDF包中的原始檔、數據或補充材料。</p>
      <p>所有擷取都在您的瀏覽器中進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '檢視附件', description: '檢視PDF中所有嵌入檔案的列表。' },
      { step: 3, title: '擷取並下載', description: '下載單個檔案或全部作爲ZIP。' },
    ],
    useCases: [
      { title: '訪問原始檔', description: '從PDF報告中擷取原始數據檔案。', icon: 'download' },
      { title: '恢復附件', description: '從PDF包中檢索嵌入的檔案。', icon: 'folder-open' },
      { title: '批次擷取', description: '一次從多個PDF中擷取附件。', icon: 'layers' },
    ],
    faq: [
      { question: '如果沒有附件怎麼辦？', answer: '如果沒有找到嵌入檔案，工具會提示。' },
      { question: '支援所有附件類型嗎？', answer: '是的，所有嵌入的檔案類型都可以擷取。' },
      { question: '可以從多個PDF中擷取嗎？', answer: '是的，您可以處理多個PDF並下載所有附件。' },
    ],
  },


  'edit-attachments': {
    title: '編輯附件',
    metaDescription: '管理PDF附件。檢視、重新命名和刪除嵌入的檔案。',
    keywords: ['編輯附件', '管理pdf檔案', '刪除附件', '重新命名附件'],
    description: `
      <p>編輯附件讓您管理PDF文件中的嵌入檔案。檢視所有附件、重新命名它們或從PDF中刪除不需要的檔案。</p>
      <p>非常適合在分發前清理PDF包或更新附件資訊。</p>
      <p>所有編輯都在您的瀏覽器中進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '管理附件', description: '檢視、重新命名或刪除嵌入的檔案。' },
      { step: 3, title: '儲存並下載', description: '點擊儲存應用更改並下載。' },
    ],
    useCases: [
      { title: '清理PDF', description: '從PDF包中刪除不必要的附件。', icon: 'trash-2' },
      { title: '重新命名檔案', description: '更新附件名稱以提高畫質晰度。', icon: 'edit' },
      { title: '審閱內容', description: '在分發前審核嵌入的檔案。', icon: 'eye' },
    ],
    faq: [
      { question: '可以在這裡新增新附件嗎？', answer: '使用新增附件工具嵌入新檔案。' },
      { question: '刪除是永久的嗎？', answer: '是的，刪除的附件無法從輸出檔案中恢復。' },
      { question: '可以預覽附件嗎？', answer: '您可以看到檔名和大小；使用擷取附件檢視內容。' },
    ],
  },


  'divide-pages': {
    title: '分割頁面',
    metaDescription: '將PDF頁面分割成多個部分。水平或垂直分割頁面。',
    keywords: ['分割pdf頁面', '拆分頁面', '剪下pdf頁面', '頁面部分'],
    description: `
      <p>分割頁面將單個PDF頁面分割成多個部分。水平、垂直或網格分割頁面，從一頁建立多頁。</p>
      <p>非常適合分割每頁包含多個項目的掃描文件，或將大幅面頁面分割成標準尺寸。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '設定分割', description: '選擇水平、垂直或網格分割並設定部分數量。' },
      { step: 3, title: '分割並下載', description: '點擊分割拆分頁面並下載。' },
    ],
    useCases: [
      { title: '分割掃描', description: '分割包含多個文件的掃描頁面。', icon: 'scissors' },
      { title: '調整頁面大小', description: '將大頁面分割成標準紙張尺寸。', icon: 'maximize-2' },
      { title: '建立卡片', description: '將頁面分割成卡片大小的部分以供列印。', icon: 'grid' },
    ],
    faq: [
      { question: '可以分割成不等的部分嗎？', answer: '目前分割是等分的。使用裁剪PDF進行自定義部分。' },
      { question: '分割線處的內容會怎樣？', answer: '內容在分割線處被分割；確保重要內容不在邊界處。' },
      { question: '可以只分割特定頁面嗎？', answer: '是的，您可以選擇要分割的頁面。' },
    ],
  },


  'add-blank-page': {
    title: '新增空白頁',
    metaDescription: '在PDF文件中插入空白頁。在任何位置新增空頁。',
    keywords: ['新增空白頁', '插入頁面', '空頁', 'pdf頁面插入'],
    description: `
      <p>新增空白頁在PDF文件的任何位置插入空頁。在現有頁面之前、之後或之間新增頁面，可自定義頁面大小。</p>
      <p>非常適合新增筆記空間、建立章節分隔符或爲列印準備文件。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '選擇位置', description: '選擇在哪裡插入空白頁以及插入多少頁。' },
      { step: 3, title: '新增並下載', description: '點擊新增插入頁面並下載。' },
    ],
    useCases: [
      { title: '筆記空間', description: '新增空白頁以供手寫筆記。', icon: 'edit-3' },
      { title: '章節分隔符', description: '在文件章節之間插入空白頁。', icon: 'minus' },
      { title: '列印準備', description: '新增頁面以對齊雙面列印。', icon: 'printer' },
    ],
    faq: [
      { question: '可以選擇頁面大小嗎？', answer: '是的，空白頁可以匹配現有頁面或使用自定義尺寸。' },
      { question: '可以新增多個空白頁嗎？', answer: '是的，您可以一次新增任意數量的空白頁。' },
      { question: '可以新增彩色頁面嗎？', answer: '新增空白頁後使用背景顏色工具新增顏色。' },
    ],
  },


  'reverse-pages': {
    title: 'PDF頁面倒序排列 - 一鍵反轉PDF頁面順序【免費線上】',
    metaDescription: '掃描儀順序掃反了？一鍵將 PDF 頁面從最後一頁反轉為第一頁。無需手動拖曳排序，本機安全處理，不傷文檔畫質。',
    keywords: [
      'pdf倒序',
      'pdf反轉順序',
      'pdf頁面倒序',
      '掃描pdf順序反了',
      'pdf從後往前排',
      '反轉pdf',
      '翻轉頁面順序',
      '倒置頁面',
      '反轉文件',
    ],
    description: `
      <p>反轉頁面翻轉PDF文件中頁面的順序，將最後一頁放在最前，第一頁放在最後。對於以相反順序掃描的文件或特定列印需求非常有用。</p>
      <p>該工具處理整個文件或選定的頁面範圍，保持所有內容和格式。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '選擇頁面', description: '選擇反轉所有頁面或特定範圍。' },
      { step: 3, title: '反轉並下載', description: '點擊反轉翻轉頁面順序並下載。' },
    ],
    useCases: [
      { title: '修復掃描順序', description: '糾正以相反順序掃描的文件。', icon: 'refresh-cw' },
      { title: '列印準備', description: '爲特定列印要求反轉頁面。', icon: 'printer' },
      { title: '文件重新排序', description: '快速翻轉文件順序以供審閱。', icon: 'arrow-up-down' },
    ],
    faq: [
      { question: '書籤會更新嗎？', answer: '是的，書籤會更新以指向正確的反轉頁面。' },
      { question: '可以只反轉部分頁面嗎？', answer: '是的，您可以選擇要反轉的頁面範圍。' },
      { question: '這和旋轉一樣嗎？', answer: '不，反轉改變頁面順序；旋轉改變頁面方向。' },
    ],
  },


  'rotate-pdf': {
    title: '旋轉PDF',
    metaDescription: '旋轉PDF頁面。將頁面旋轉90、180或270度。',
    keywords: ['旋轉pdf', '轉動pdf頁面', 'pdf旋轉', '修復方向'],
    description: `
      <p>旋轉PDF將文件中的頁面旋轉90、180或270度。修復方向不正確的掃描、旋轉橫向頁面或調整頁面方向以供檢視。</p>
      <p>統一旋轉所有頁面或選擇特定頁面單獨旋轉。該工具保留所有內容和格式。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '選擇旋轉', description: '選擇旋轉角度和要旋轉的頁面。' },
      { step: 3, title: '旋轉並下載', description: '點擊旋轉應用更改並下載。' },
    ],
    useCases: [
      { title: '修復掃描', description: '糾正掃描文件的方向。', icon: 'rotate-cw' },
      { title: '橫向頁面', description: '旋轉橫向頁面以正確檢視。', icon: 'monitor' },
      { title: '混合方向', description: '標準化混合文件中的頁面方向。', icon: 'layout' },
    ],
    faq: [
      { question: '可以對不同頁面進行不同的旋轉嗎？', answer: '是的，您可以對不同頁面應用不同的旋轉。' },
      { question: '旋轉會影響列印質量嗎？', answer: '不會，旋轉保留所有內容質量。' },
      { question: '可以按自定義角度旋轉嗎？', answer: '旋轉限於90度增量（90、180、270）。' },
    ],
  },


  'n-up-pdf': {
    title: 'N合一PDF',
    metaDescription: '每張紙列印多個PDF頁面。建立2合1、4合1或自定義佈局。',
    keywords: ['n合一pdf', '每張多頁', '2合1列印', '頁面拼版'],
    description: `
      <p>N合一PDF將多個頁面排列到單張紙上，建立2合1、4合1、6合1、9合1或自定義佈局。非常適合列印時節省紙張或建立講義。</p>
      <p>從預設佈局中選擇或建立自定義排列。該工具自動縮放和定位頁面以獲得最佳效果。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '選擇佈局', description: '選擇2合1、4合1、6合1、9合1或自定義網格。' },
      { step: 3, title: '建立並下載', description: '點擊建立生成N合一PDF並下載。' },
    ],
    useCases: [
      { title: '節省紙張', description: '每張紙列印多頁以減少紙張使用。', icon: 'leaf' },
      { title: '建立講義', description: '從演示幻燈片製作緊湊的講義。', icon: 'file-text' },
      { title: '審閱文件', description: '以縮小尺寸列印文件以供審閱。', icon: 'eye' },
    ],
    faq: [
      { question: '有哪些佈局可用？', answer: '2合1、4合1、6合1、9合1和自定義網格佈局可用。' },
      { question: '可以在頁面之間新增邊框嗎？', answer: '是的，您可以在頁面之間新增邊框和間距。' },
      { question: '頁面順序會保留嗎？', answer: '是的，頁面按閱讀順序排列（從左到右，從上到下）。' },
    ],
  },


  'combine-single-page': {
    title: 'PDF合併為單一長頁 - 垂直連續長圖拼接工具【免費線上】',
    metaDescription: '將多頁 PDF 垂直拼接為單一連續長頁。適合條漫、Webtoon、網頁長圖截圖與數據大屏展示。無需上傳伺服器，完全免費。',
    keywords: [
      'pdf合併為單頁',
      'pdf垂直拼接',
      'pdf轉長圖',
      'pdf連續頁面',
      'pdf合併成一張長圖',
      '合併頁面',
      '單頁pdf',
      '拼接頁面',
      '連續滾動',
    ],
    description: `
      <p>合併為單頁將所有PDF頁面拼接成一個連續頁面。建立非常適合網絡檢視或連續閱讀的可滾動文件。</p>
      <p>頁面垂直連接，間距可自定義。結果是包含所有內容的單個長頁面。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '設定間距', description: '選擇拼接頁面之間的間隙。' },
      { step: 3, title: '合併並下載', description: '點擊合併建立單頁PDF。' },
    ],
    useCases: [
      { title: '網絡文件', description: '建立可滾動的PDF以供網頁嵌入。', icon: 'globe' },
      { title: '連續閱讀', description: '將分頁文件轉換爲連續滾動。', icon: 'scroll' },
      { title: '長篇內容', description: '合併頁面以實現無縫的長篇閱讀。', icon: 'file-text' },
    ],
    faq: [
      { question: '有頁數限制嗎？', answer: '非常長的文件可能受瀏覽器記憶體限制。' },
      { question: '可以在頁面之間新增分隔符嗎？', answer: '是的，您可以在原始頁面之間新增間距或線條。' },
      { question: '這適合列印嗎？', answer: '結果最適合螢幕檢視；列印佈局請使用N合一。' },
    ],
  },


  'view-metadata': {
    title: '檢視中繼資料',
    metaDescription: '檢視PDF文件屬性。檢視作者、標題、日期和其他中繼資料。',
    keywords: ['pdf中繼資料', '文件屬性', 'pdf資訊', '檢視pdf詳情'],
    description: `
      <p>檢視中繼資料顯示PDF檔案中的所有文件屬性和中繼資料。檢視作者、標題、主題、關鍵詞、建立日期、修改日期等。</p>
      <p>對於審核文件、檢查檔案資訊或驗證文件真實性非常有用。</p>
      <p>所有檢視都在您的瀏覽器中進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '檢視屬性', description: '檢視以有組織格式顯示的所有中繼資料。' },
      { step: 3, title: '如需導出', description: '可選擇將中繼資料導出爲JSON。' },
    ],
    useCases: [
      { title: '文件審核', description: '審閱文件屬性以確保合規性。', icon: 'clipboard-check' },
      { title: '驗證真實性', description: '檢查建立日期和作者資訊。', icon: 'shield' },
      { title: '檔案資訊', description: '獲取PDF檔案的詳細資訊。', icon: 'info' },
    ],
    faq: [
      { question: '顯示哪些中繼資料？', answer: '標題、作者、主題、關鍵詞、建立者、生產者、日期和PDF版本。' },
      { question: '可以在這裡編輯中繼資料嗎？', answer: '使用編輯中繼資料工具修改文件屬性。' },
      { question: '包含XMP中繼資料嗎？', answer: '是的，標準和XMP中繼資料都會顯示。' },
    ],
  },


  'edit-metadata': {
    title: '怎麼修改 PDF 文件屬性和中繼資料',
    metaDescription: '怎麼修改 PDF 的標題、作者、主題和關鍵詞？適合整理文件屬性、修正文件資訊，或在分享前清理資料資訊。',
    keywords: ['怎麼修改pdf屬性', '編輯pdf中繼資料', '修改pdf作者和標題', 'pdf文件資訊怎麼改', 'pdf關鍵詞設定'],
    description: `
      <p>如果你想修改 PDF 的標題、作者、主題、關鍵詞或其他文件屬性，可以直接用這個工具處理。它適合修正文件資訊、補充作者歸屬、整理歸檔資料，也適合在發送前檢查有沒有不該保留的屬性欄位。</p>
      <p>很多人真正想找的是“怎麼改 PDF 作者和標題”“怎麼改 PDF 文件資訊”，而不只是一個籠統的“中繼資料編輯器”。所以這個頁面會更強調文件屬性調整和發送前整理這類明確場景。如果你反而想把這些資訊全部刪掉，也可以繼續<a href="/zh-tw/tools/remove-metadata">刪除 PDF 中繼資料</a>。</p>
      <p>所有編輯都在瀏覽器中進行，檔案不會上傳到伺服器，更適合處理帶隱私的工作文件和個人資料。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳 PDF 檔案，或點擊選擇需要修改屬性的文件。' },
      { step: 2, title: '修改文件屬性', description: '編輯標題、作者、主題、關鍵詞等欄位，並檢查是否需要保留這些資訊。' },
      { step: 3, title: '儲存並下載', description: '應用更改後下載新的 PDF 檔案。' },
    ],
    useCases: [
      { title: '修改 PDF 標題和作者', description: '讓文件屬性和實際內容保持一致，方便歸檔和識別。', icon: 'user' },
      { title: '整理提交或分發檔案', description: '在發送給客戶、同事或系統前，先檢查並修正文件資訊。', icon: 'file-check' },
      { title: '補充關鍵詞便於檢索', description: '給資料加上更清晰的主題和關鍵詞，後續更容易搜尋。', icon: 'search' },
    ],
    faq: [
      { question: '可以修改哪些 PDF 屬性？', answer: '通常可以修改標題、作者、主題、關鍵詞等常見中繼資料欄位。' },
      { question: '如果我想全部清空怎麼辦？', answer: '如果你不想保留任何文件屬性，可以直接使用<a href="/zh-tw/tools/remove-metadata">刪除中繼資料</a>工具。' },
      { question: '修改這些屬性會影響正文內容嗎？', answer: '不會。編輯中繼資料只會調整文件屬性，不會改動 PDF 頁面裏的正文和圖片內容。' },
    ],
  },


  'pdf-to-zip': {
    title: 'PDF轉ZIP',
    metaDescription: '將多個PDF打包成ZIP壓縮包。壓縮和捆綁PDF檔案。',
    keywords: ['pdf轉zip', '壓縮pdf', '捆綁pdf', '存檔pdf'],
    description: `
      <p>PDF轉ZIP將多個PDF檔案打包成一個ZIP壓縮包。壓縮和捆綁您的PDF以便於共享、存儲或備份。</p>
      <p>該工具建立包含所有PDF檔案的壓縮存檔，減少總大小並簡化檔案管理。</p>
      <p>所有處理都在您的瀏覽器中進行，確保您的檔案保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF', description: '拖曳多個PDF檔案或點擊選擇。' },
      { step: 2, title: '配置存檔', description: '可選設定存檔名稱和壓縮級別。' },
      { step: 3, title: '建立並下載', description: '點擊建立生成ZIP壓縮包。' },
    ],
    useCases: [
      { title: '檔案共享', description: '捆綁多個PDF以便於共享。', icon: 'share-2' },
      { title: '建立備份', description: '建立PDF集合的壓縮備份。', icon: 'archive' },
      { title: '電子郵件附件', description: '將PDF合併成一個附件以供電子郵件使用。', icon: 'mail' },
    ],
    faq: [
      { question: '應用多少壓縮？', answer: 'ZIP壓縮通常將總大小減少10-30%。' },
      { question: '有檔案限制嗎？', answer: '您可以在單個存檔中包含最多100個PDF。' },
      { question: '可以設定密碼嗎？', answer: '目前不支援建立受密碼保護的ZIP。' },
    ],
  },


  'compare-pdfs': {
    title: '比較PDF',
    metaDescription: '比較兩個PDF文件。高亮顯示版本之間的差異。',
    keywords: ['比較pdf', 'pdf差異', '文件比較', '版本比較'],
    description: `
      <p>比較PDF分析兩個PDF文件並高亮顯示它們之間的差異。非常適合審閱文件修訂、檢查合約更改或驗證編輯。</p>
      <p>以並排或疊加模式檢視文件，差異會高亮顯示。該工具識別文本更改、新增和刪除。</p>
      <p>所有比較都在您的瀏覽器中進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳兩個PDF', description: '上傳原始和修改後的PDF文件。' },
      { step: 2, title: '比較文件', description: '以並排或疊加模式檢視高亮顯示的差異。' },
      { step: 3, title: '導出結果', description: '下載比較報告或帶註解的PDF。' },
    ],
    useCases: [
      { title: '合約審閱', description: '比較合約版本以識別更改。', icon: 'file-text' },
      { title: '文件修訂', description: '審閱文件版本之間的編輯。', icon: 'git-compare' },
      { title: '質量保證', description: '驗證只進行了預期的更改。', icon: 'check-circle' },
    ],
    faq: [
      { question: '檢測哪些類型的差異？', answer: '文本新增、刪除、修改和格式更改。' },
      { question: '可以比較掃描的文件嗎？', answer: '掃描的文件應先進行OCR處理以進行文本比較。' },
      { question: '有視覺比較嗎？', answer: '是的，疊加模式顯示頁面之間的視覺差異。' },
    ],
  },


  'posterize-pdf': {
    title: 'PDF轉海報拼貼列印 - 將大尺寸PDF分割為多張A4紙合併列印【免費線上】',
    metaDescription: '將大尺寸 PDF 或大圖分割為多張標準 A4、Letter 頁面拼貼列印。內建裁切標記與重疊邊距。100%瀏覽器本機安全處理，免註冊即刻列印。',
    keywords: [
      'pdf轉海報',
      'pdf海報列印',
      '海報拼貼列印',
      'pdf分割成a4列印',
      '大圖分割列印',
      'pdf拼貼海報',
      '海報化pdf',
      '瓷磚pdf',
      '大幅面列印',
      'pdf海報',
    ],
    description: `
      <p>海報化PDF將大型PDF頁面分割成可以在標準紙張上列印並組裝成海報的較小瓷磚。非常適合列印大型圖表、地圖或藝術品。</p>
      <p>配置網格大小和重疊以便於組裝。該工具自動計算目標輸出尺寸的瓷磚尺寸。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的大幅面PDF或點擊選擇。' },
      { step: 2, title: '配置瓷磚', description: '設定網格大小、重疊和輸出紙張尺寸。' },
      { step: 3, title: '建立並下載', description: '點擊建立生成可列印的瓷磚。' },
    ],
    useCases: [
      { title: '海報列印', description: '在標準紙張上列印大型海報。', icon: 'maximize-2' },
      { title: '地圖列印', description: '分段列印大型地圖以供組裝。', icon: 'map' },
      { title: '藝術品複製', description: '從PDF藝術品建立大型列印品。', icon: 'image' },
    ],
    faq: [
      { question: '應該使用多少重疊？', answer: '建議10-20mm的重疊以便於組裝時對齊。' },
      { question: '可以新增裁切標記嗎？', answer: '是的，可以新增裁切標記以說明切割和對齊。' },
      { question: '支援哪些紙張尺寸？', answer: '支援A4、Letter、A3和自定義尺寸。' },
    ],
  },

  // ==================== 優化與修復 ====================,

  'fix-page-size': {
    title: '修復頁面大小',
    metaDescription: '標準化PDF頁面大小。將所有頁面轉換爲統一尺寸。',
    keywords: ['修復頁面大小', '標準化pdf', '統一頁面', '調整pdf頁面大小'],
    description: `
      <p>修復頁面大小將PDF中的所有頁面標準化爲統一尺寸。將混合尺寸文件轉換爲一致的頁面大小，以便專業展示或列印。</p>
      <p>從標準尺寸（A4、Letter等）中選擇或設定自定義尺寸。內容會縮放或定位以適應新的頁面大小。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '選擇目標大小', description: '選擇標準尺寸或輸入自定義尺寸。' },
      { step: 3, title: '應用並下載', description: '點擊應用標準化頁面並下載。' },
    ],
    useCases: [
      { title: '列印準備', description: '標準化頁面以實現一致的列印。', icon: 'printer' },
      { title: '文件清理', description: '修復頁面大小不一致的文件。', icon: 'file-check' },
      { title: '專業文件', description: '建立統一的文件以供分發。', icon: 'briefcase' },
    ],
    faq: [
      { question: '內容如何處理？', answer: '內容會縮放以適應或置中在新頁面大小上。' },
      { question: '可以保持縱橫比嗎？', answer: '是的，內容可以按比例縮放以適應。' },
      { question: '有哪些標準尺寸可用？', answer: 'A4、A3、Letter、Legal和其他常見尺寸。' },
    ],
  },


  'linearize-pdf': {
    title: '線性化PDF',
    metaDescription: '優化PDF以實現快速網絡檢視。啓用漸進式加載。',
    keywords: ['線性化pdf', '快速網絡檢視', '優化pdf', '漸進式pdf'],
    description: `
      <p>線性化PDF優化您的文件以實現快速網絡檢視。線性化的PDF可以在整個檔案下載完成之前開始顯示，改善使用者體驗。</p>
      <p>也稱爲"快速網絡檢視"，此優化重新組織PDF結構以實現網絡瀏覽器中的漸進式加載。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '線性化', description: '點擊線性化優化以供網絡檢視。' },
      { step: 3, title: '下載', description: '下載優化後的PDF。' },
    ],
    useCases: [
      { title: '網絡發佈', description: '優化PDF以供網站下載。', icon: 'globe' },
      { title: '電子郵件附件', description: '建立爲收件人更快打開的PDF。', icon: 'mail' },
      { title: '線上文件', description: '改善線上文件的檢視體驗。', icon: 'cloud' },
    ],
    faq: [
      { question: '什麼是線性化？', answer: '線性化重新組織PDF數據以實現漸進式加載。' },
      { question: '會減小檔案大小嗎？', answer: '線性化可能由於新增的結構而略微增加檔案大小。' },
      { question: '與所有檢視器相容嗎？', answer: '是的，線性化的PDF在所有PDF閱讀器中都能工作。' },
    ],
  },

  'page-dimensions': {
    ...toolContentZh['page-dimensions'],
    title: 'PDF頁面尺寸查詢工具 | 一鍵查看A4/Letter/自訂尺寸',
    metaDescription: '快速查詢PDF每頁的尺寸大小。支援A4、Letter、Legal等標準尺寸識別，顯示寬高尺寸（mm/英吋/點）。免費線上工具，立即查詢 →',
    keywords: ['pdf尺寸', 'pdf頁面大小', 'pdf尺寸查詢', 'pdf page size', 'pdf dimensions', 'pdf 尺寸檢查', 'a4 pdf 尺寸', 'pdf 頁面尺寸'],
    description: `
      <p>查看 PDF 頁面尺寸與紙張大小，適合在列印、提交或重新整理文件前，先確認每一頁是不是同樣規格。你可以快速看到頁面寬高、方向，以及是否混用了 A4、Letter 或其他非標準尺寸。</p>
      <p>這類需求常見於掃描文件、報告附件、表單彙整與印刷稿檢查。當文件裡有幾頁尺寸特別不一樣時，先找出問題頁面，後續再調整會快很多。如果你接下來要把不一致的頁面統一，也可以再用<a href="/zh-tw/tools/fix-page-size">修正 PDF 頁面大小</a>處理。</p>
      <p>所有分析都在瀏覽器中完成，檔案不會上傳到伺服器，更適合處理需要隱私的工作文件。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳 PDF 檔案', description: '拖放 PDF 檔案，或點選選擇要查看尺寸的文件。' },
      { step: 2, title: '查看頁面尺寸', description: '檢查每一頁顯示的寬高、方向與紙張大小。' },
      { step: 3, title: '匯出報告', description: '如有需要，可將尺寸結果匯出為 JSON 以便後續整理。' },
    ],
    useCases: [
      { title: '列印前檢查尺寸', description: '先確認每頁大小是否一致，避免列印時縮放錯誤或版面跑掉。', icon: 'printer' },
      { title: '找出異常頁面', description: '快速定位尺寸不同或方向混亂的頁面，方便後續整理。', icon: 'search' },
      { title: '提交前確認規格', description: '在上傳申請資料、報告或印刷檔前，先檢查是否符合指定尺寸。', icon: 'check-circle' },
    ],
    faq: [
      { question: '可以看到每一頁的尺寸嗎？', answer: '可以，工具會列出每一頁的寬高與方向，方便你找出尺寸不一致的頁面。' },
      { question: '有哪些單位可看？', answer: '通常可查看英吋、毫米、點等常見單位，方便對照列印或設計規格。' },
      { question: '看到尺寸不一致後怎麼處理？', answer: '如果你想把整份文件統一成同一種紙張大小，可以接著使用<a href="/zh-tw/tools/fix-page-size">修正頁面大小</a>工具。' },
    ],
  },


  'remove-restrictions': {
    title: '刪除限制',
    metaDescription: '刪除PDF限制。解鎖列印、複製和編輯權限。',
    keywords: ['刪除pdf限制', '解鎖pdf', 'pdf權限', '取消pdf限制'],
    description: `
      <p>刪除限制解鎖具有權限限制的PDF，這些限制阻止列印、複製或編輯。此工具在保留文件內容的同時刪除所有者密碼限制。</p>
      <p>注意：此工具無法刪除阻止打開文件的使用者密碼。對於受密碼保護的檔案，請使用解密PDF。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳受限PDF', description: '拖曳您的受限PDF或點擊選擇。' },
      { step: 2, title: '刪除限制', description: '點擊刪除解鎖文件。' },
      { step: 3, title: '下載', description: '下載不受限制的PDF。' },
    ],
    useCases: [
      { title: '啓用列印', description: '解鎖阻止列印的PDF。', icon: 'printer' },
      { title: '啓用複製', description: '允許文本選擇和複製。', icon: 'copy' },
      { title: '啓用編輯', description: '刪除文件編輯限制。', icon: 'edit' },
    ],
    faq: [
      { question: '這合法嗎？', answer: '從您擁有或有權使用的文件中刪除限制通常是合法的。' },
      { question: '可以刪除打開密碼嗎？', answer: '不能，對於受密碼保護的文件請使用解密PDF。' },
      { question: '內容會受影響嗎？', answer: '不會，只刪除限制；內容保持不變。' },
    ],
  },


  'repair-pdf': {
    title: '修復PDF',
    metaDescription: '修復損壞的PDF檔案。恢復和修復受損文件。',
    keywords: ['修復pdf', '修復pdf', '恢復pdf', '損壞的pdf'],
    description: `
      <p>修復PDF嘗試修復損壞或受損的PDF檔案。該工具分析文件結構並重建它以儘可能多地恢復內容。</p>
      <p>對於恢復無法打開、顯示錯誤或由於損壞而缺少內容的檔案非常有用。</p>
      <p>所有修復都在您的瀏覽器中進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳損壞的PDF', description: '拖曳您損壞的PDF或點擊選擇。' },
      { step: 2, title: '修復文件', description: '點擊修復嘗試恢復。' },
      { step: 3, title: '下載', description: '如果成功，下載修復後的PDF。' },
    ],
    useCases: [
      { title: '恢復檔案', description: '恢復無法正常打開的PDF。', icon: 'refresh-cw' },
      { title: '修復錯誤', description: '修復顯示錯誤訊息的檔案。', icon: 'wrench' },
      { title: '恢復內容', description: '從部分損壞的檔案中恢復內容。', icon: 'file-check' },
    ],
    faq: [
      { question: '所有PDF都可以修復嗎？', answer: '成功取決於損壞的類型和程度。' },
      { question: '所有內容都會恢復嗎？', answer: '該工具儘可能多地恢復；嚴重損壞的檔案可能有損失。' },
      { question: '應該保留原件嗎？', answer: '是的，始終保留原始檔案作爲備份。' },
    ],
  },

  // ==================== 安全PDF ====================
  'encrypt-pdf': {
    title: '加密PDF',
    metaDescription: '爲PDF檔案新增密碼保護。新增加密並設定權限。',
    keywords: ['加密pdf', '密碼保護pdf', '安全pdf', 'pdf加密'],
    description: `
      <p>加密PDF爲您的PDF文件新增密碼保護和加密。設定使用者密碼以防止打開，設定所有者密碼以控制列印和複製等權限。</p>
      <p>根據不同的安全需求選擇不同的加密級別（128位或256位AES）。</p>
      <p>所有加密都在您的瀏覽器中進行，確保您的密碼和文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '設定密碼', description: '輸入使用者密碼和/或所有者密碼。配置權限。' },
      { step: 3, title: '加密並下載', description: '點擊加密保護您的PDF並下載。' },
    ],
    useCases: [
      { title: '機密文件', description: '保護敏感的商業文件。', icon: 'lock' },
      { title: '個人檔案', description: '保護個人文件如稅務申報表。', icon: 'shield' },
      { title: '受控分發', description: '限制收件人對文件的操作。', icon: 'key' },
    ],
    faq: [
      { question: '使用者密碼和所有者密碼有什麼區別？', answer: '使用者密碼防止打開；所有者密碼控制權限。' },
      { question: '使用什麼加密？', answer: '提供128位或256位AES加密選項。' },
      { question: '可以只設置權限而不設定使用者密碼嗎？', answer: '是的，您可以只設置所有者密碼來控制權限。' },
    ],
  },


  'sanitize-pdf': {
    title: '清理PDF',
    metaDescription: '從PDF中刪除隱藏數據。清除中繼資料、腳本和敏感資訊。',
    keywords: ['清理pdf', '清潔pdf', '刪除隱藏數據', 'pdf隱私'],
    description: `
      <p>清理PDF從您的文件中刪除隱藏數據和潛在敏感資訊。去除中繼資料、嵌入腳本、附件、評論和其他隱藏內容。</p>
      <p>對於準備公開分發的文件或當隱私是關注點時至關重要。</p>
      <p>所有清理都在您的瀏覽器中進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '選擇要刪除的內容', description: '選擇要去除的隱藏數據類型。' },
      { step: 3, title: '清理並下載', description: '點擊清理清潔PDF並下載。' },
    ],
    useCases: [
      { title: '公開發布', description: '準備文件以供公開分發。', icon: 'globe' },
      { title: '隱私保護', description: '在共享前刪除個人資訊。', icon: 'shield' },
      { title: '安全合規', description: '滿足文件處理的安全要求。', icon: 'check-circle' },
    ],
    faq: [
      { question: '刪除哪些隱藏數據？', answer: '中繼資料、腳本、附件、評論、表單數據和隱藏圖層。' },
      { question: '可見內容會受影響嗎？', answer: '不會，只刪除隱藏數據；可見內容保持不變。' },
      { question: '這是可逆的嗎？', answer: '不，刪除的數據無法恢復。保留原件的備份。' },
    ],
  },


  'decrypt-pdf': {
    title: '解密PDF',
    metaDescription: '從PDF檔案中刪除密碼。解鎖受密碼保護的文件。',
    keywords: ['解密pdf', '刪除pdf密碼', '解鎖pdf', 'pdf密碼刪除器'],
    description: `
      <p>解密PDF從PDF文件中刪除密碼保護。輸入當前密碼以解鎖檔案並建立不受保護的副本。</p>
      <p>此工具要求您知道當前密碼。它無法破解或繞過未知密碼。</p>
      <p>所有解密都在您的瀏覽器中進行，確保您的密碼和文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳受保護的PDF', description: '拖曳您受密碼保護的PDF。' },
      { step: 2, title: '輸入密碼', description: '輸入當前文件密碼。' },
      { step: 3, title: '解密並下載', description: '點擊解密刪除保護並下載。' },
    ],
    useCases: [
      { title: '刪除舊密碼', description: '當不再需要密碼時解鎖文件。', icon: 'unlock' },
      { title: '簡化訪問', description: '建立不受保護的副本以便於共享。', icon: 'share-2' },
      { title: '存檔文件', description: '在長期存檔前刪除密碼。', icon: 'archive' },
    ],
    faq: [
      { question: '可以破解未知密碼嗎？', answer: '不能，您必須知道當前密碼才能解密。' },
      { question: '原始檔案會被修改嗎？', answer: '不會，會建立一個新的不受保護的副本。' },
      { question: '如果忘記密碼怎麼辦？', answer: '很遺憾，我們無法恢復忘記的密碼。' },
    ],
  },


  'flatten-pdf': {
    title: '扁平化PDF',
    metaDescription: '扁平化PDF表單和註解。使內容不可編輯。',
    keywords: ['扁平化pdf', '扁平化表單', '扁平化註解', '不可編輯pdf'],
    description: `
      <p>扁平化PDF將表單欄位和註解等互動元素轉換爲靜態內容。扁平化的PDF看起來相同，但不能再編輯。</p>
      <p>非常適合完成已填寫的表單、保留註解或建立不可編輯的文件版本。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您帶有表單或註解的PDF。' },
      { step: 2, title: '選擇要扁平化的內容', description: '選擇扁平化表單、註解或兩者。' },
      { step: 3, title: '扁平化並下載', description: '點擊扁平化建立靜態PDF。' },
    ],
    useCases: [
      { title: '完成表單', description: '鎖定已填寫的表單數據以防止更改。', icon: 'lock' },
      { title: '保留註解', description: '使註解在文件中永久化。', icon: 'check-circle' },
      { title: '存檔文件', description: '建立不可編輯的版本以供存檔。', icon: 'archive' },
    ],
    faq: [
      { question: '扁平化是可逆的嗎？', answer: '不，扁平化是永久的。保留原件的備份。' },
      { question: '外觀會改變嗎？', answer: '不會，文件看起來相同，但不再是互動式的。' },
      { question: '會減小檔案大小嗎？', answer: '有時會，因爲互動元素被轉換爲更簡單的內容。' },
    ],
  },


  'remove-metadata-full': {
    title: '中繼資料的完全刪除',
    metaDescription: '從 PDF 檔案中剝離所有中繼資料和屬性。清理以增加匿名性。',
    keywords: ['pdf 中繼資料 刪除', 'pdf 屬性 清除', 'pdf 匿名化', 'pdf 隱私'],
    description: `
      <p>刪除 PDF 檔案中隱藏的所有資訊，如作者、建立軟體和建立日期/時間。這在從公開發布的材料中清除內部資訊時非常重要。</p>
    `,
    howToUse: [
      { step: 1, title: '選擇 PDF', description: '上傳您想要清理的 PDF 檔案。' },
      { step: 2, title: '執行刪除', description: '點擊“刪除中繼資料”按鈕。' },
      { step: 3, title: '儲存', description: '下載屬性爲空的 PDF。' },
    ],
    useCases: [
      { title: '公共文件分發', description: '在互聯網上發佈之前刪除作者的個人姓名。', icon: 'shield' },
      { title: '企業對企業交易', description: '清除不必要的中繼資料（如建立歷史記錄）以保持機密性。', icon: 'briefcase' },
      { title: '匿名材料建立', description: '確保無法通過屬性識別身份。', icon: 'user-x' },
    ],
    faq: [
      { question: '檔案內容會改變嗎？', answer: '不會，任何可見內容（如文本或圖像）都不會改變。' },
      { question: '哪些項目會消失？', answer: '標題、作者、主題、關鍵詞、建立日期、修改日期、PDF 建立程式名稱等將被刪除。' },
      { question: '可以恢復嗎？', answer: '刪除後的檔案中的中繼資料無法恢復。' },
    ],
  },


  'remove-metadata': {
    title: '刪除中繼資料',
    metaDescription: '從PDF檔案中去除中繼資料。刪除作者、日期和文件屬性。',
    keywords: ['刪除pdf中繼資料', '去除中繼資料', 'pdf隱私', '匿名pdf'],
    description: `
      <p>刪除中繼資料從您的PDF檔案中去除所有文件屬性和中繼資料。刪除作者姓名、建立日期、軟體資訊和其他識別數據。</p>
      <p>在共享文件或當元數據可能洩露敏感資訊時，對於隱私至關重要。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '刪除中繼資料', description: '點擊刪除去除所有中繼資料。' },
      { step: 3, title: '下載', description: '下載無中繼資料的PDF。' },
    ],
    useCases: [
      { title: '隱私保護', description: '在共享前刪除個人資訊。', icon: 'shield' },
      { title: '匿名文件', description: '建立沒有作者歸屬的文件。', icon: 'user-x' },
      { title: '乾淨分發', description: '分發沒有內部中繼資料的文件。', icon: 'send' },
    ],
    faq: [
      { question: '刪除哪些中繼資料？', answer: '作者、標題、主題、關鍵詞、日期、建立者和生產者資訊。' },
      { question: 'XMP中繼資料會刪除嗎？', answer: '是的，標準和XMP中繼資料都會去除。' },
      { question: '內容會受影響嗎？', answer: '不會，只刪除中繼資料；文件內容保持不變。' },
    ],
  },


  'change-permissions': {
    title: '更改權限',
    metaDescription: '修改PDF權限。控制列印、複製和編輯訪問。',
    keywords: ['pdf權限', '更改pdf訪問', '限制pdf', 'pdf安全'],
    description: `
      <p>更改權限修改PDF文件的訪問控制。啓用或停用列印、複製、編輯和註解權限。</p>
      <p>設定所有者密碼以強制執行這些限制。收件人可以檢視文件，但在可執行的操作上受到限制。</p>
      <p>所有處理都在您的瀏覽器本機進行，確保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳您的PDF檔案或點擊選擇。' },
      { step: 2, title: '設定權限', description: '啓用或停用列印、複製、編輯和註解。' },
      { step: 3, title: '應用並下載', description: '設定所有者密碼並下載受限PDF。' },
    ],
    useCases: [
      { title: '防止複製', description: '停用文本複製以保護內容。', icon: 'copy' },
      { title: '控制列印', description: '限制或允許文件列印。', icon: 'printer' },
      { title: '限制編輯', description: '防止對文件的修改。', icon: 'edit-3' },
    ],
    faq: [
      { question: '需要密碼嗎？', answer: '需要所有者密碼來強制執行權限。' },
      { question: '權限可以刪除嗎？', answer: '是的，使用所有者密碼或刪除限制工具。' },
      { question: '所有PDF閱讀器都相容嗎？', answer: '大多數PDF閱讀器尊重權限，但有些可能不強制執行。' },
    ],
  },

  'pdf-to-docx': {
    ...toolContentZh['pdf-to-docx'],
    title: '將 PDF 轉為可編輯 Word',
    metaDescription: '將 PDF 轉為可編輯 Word 文件，適合履歷修改、合約修訂、報告整理與內容再編輯。',
    keywords: ['pdf轉可編輯word', 'pdf轉word可修改', '將pdf轉為docx', '掃描pdf轉word', 'pdf內容轉到word'],
    description: `
      <p>將 PDF 轉為可編輯 Word，適合需要修改內容但又不想從頭重新製作的情況。轉換後可下載 DOCX 檔案，方便在 Word 或相容編輯器中繼續調整。</p>
      <p>這個工具適合履歷更新、合約修訂、報告整理與表單再編輯。相比手動複製貼上，先轉成可編輯 Word 往往更省時間。如果原始 PDF 仍需要寄送或上傳，也可以先<a href="/zh-tw/tools/compress-pdf">壓縮 PDF 再處理後續流程</a>。</p>
      <p>所有轉換都在瀏覽器中完成，檔案不會上傳到伺服器，更適合處理工作文件與個人資料。</p>
    `,
    useCases: [
      { title: 'PDF 合約轉 Word', description: '把合約轉成可編輯文件後，更方便修訂條款與留存版本。', icon: 'file-text' },
      { title: '履歷 PDF 轉 Word', description: '只剩 PDF 的履歷也能先轉成 Word 再繼續修改。', icon: 'user' },
      { title: 'PDF 內容匯出編輯', description: '將報告、表格或資料轉到 Word 中，減少重打內容。', icon: 'copy' },
    ],
    faq: [
      { question: '如何把 PDF 轉成可編輯 Word？', answer: '上傳 PDF 後開始轉換，下載生成的 DOCX 檔案，再用 Word 或相容編輯器開啟即可。' },
      { question: '掃描版 PDF 也能轉成可編輯 Word 嗎？', answer: '掃描文件通常需要 OCR 才能更好辨識文字；若原始 PDF 主要是圖片，可編輯性會受影響。' },
      { question: '轉成 Word 後格式會保留嗎？', answer: '一般文件通常能較好保留結構，但複雜表格、分頁與掃描文件仍可能需要微調。如果你只是想匯出頁面預覽或圖片素材，也可以改用<a href="/zh-tw/tools/pdf-to-jpg">把 PDF 頁面轉成 JPG</a>。' },
    ],
  },

  'pdf-to-txt': {
    title: 'PDF轉文本',
    metaDescription: '從PDF中擷取純文本。移除所有格式和圖像，獲取最簡潔的文字內容。',
    keywords: ['pdf轉txt', 'pdf擷取文本', '獲取pdf文字', 'pdf純文本'],
    description: `
      <p>PDF轉文本工具旨在爲您提供最純粹的文字擷取體驗。它會剝離文件中的背景、圖像、連結和複雜的排版，僅保留最核心的文字內容。</p>
      <p>適合需要將PDF內容導入文本編輯器、進行代碼分析或準備機器翻譯語料的使用者。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳PDF檔案到此處。' },
      { step: 2, title: '擷取文字', description: '系統將快速掃描所有頁面的字元流。' },
      { step: 3, title: '下載文本檔案', description: '獲取.txt格式的純文本檔案。' },
    ],
    useCases: [
      { title: '電子書轉文本', description: '將PDF格式的小說轉換爲純文本，方便在舊款電子書閱讀器上使用。', icon: 'book' },
      { title: '語料庫建設', description: '批次從PDF文件中擷取文字內容，用於AI訓練或大數據分析。', icon: 'code' },
      { title: '翻譯準備', description: '擷取純文本內容，方便導入CAT工具或網頁翻譯器。', icon: 'languages' },
    ],
    faq: [
      { question: '掃描檔能轉成文本嗎？', answer: '普通轉換工具無法處理掃描檔，請點擊導航欄中的"OCR PDF"進行識別。' },
      { question: '排版會亂嗎？', answer: 'TXT不支援樣式，但我們會盡力通過空格和換行保留原始文本的邏輯順序。' },
      { question: '支援特殊字元嗎？', answer: '支援。擷取出的文本預設採用UTF-8編碼，相容中文、韓文、日文等全球語言。' },
    ],
  },


  'pdf-to-pdfa': {
    title: 'PDF轉PDF/A',
    metaDescription: '將普通PDF轉換爲適合長期存檔的PDF/A格式。符合ISO標準。',
    keywords: ['pdf轉pdfa', 'pdf長期存檔', '符合性轉換', 'iso標準pdf'],
    description: `
      <p>PDF/A是PDF的ISO標準化版本，專門用於電子文件的長期儲存和存檔。它確保了文件在未來幾十年內即使軟體環境發生變化，其顯示效果依然保持一致。</p>
      <p>該工具會嵌入所有字體並移除不符合存檔規範的動態元素（如JavaScript），使文件變得更加穩健和透明。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF', description: '選擇需要永久存檔的重要檔案。' },
      { step: 2, title: '轉換標準', description: '系統將自動調整文件屬性以符合PDF/A-1b、2b或3b規範。' },
      { step: 3, title: '下載存檔檔案', description: '獲取適用於政府、法律或學術要求的存檔PDF。' },
    ],
    useCases: [
      { title: '法律文書存檔', description: '將合約和裁決書轉換爲PDF/A，確保長期司法效力。', icon: 'scale' },
      { title: '政府公文遞交', description: '滿足政府部門對遞交檔案必須爲PDF/A格式的要求。', icon: 'landmark' },
      { title: '論文提交', description: '高校圖書館通常要求畢業論文採用PDF/A格式以進行永久館藏。', icon: 'graduation-cap' },
    ],
    faq: [
      { question: 'PDF/A有什麼好處？', answer: '它具有自包含性，這意味著顯示文件所需的所有資訊（如字體）都已儲存在檔案內，不依賴外部鏈接。' },
      { question: '普通PDF檢視器能打開嗎？', answer: '完全可以。PDF/A與所有現有的PDF閱讀器完美相容。' },
      { question: '轉換後文件會變大嗎？', answer: '通常會，因爲必須嵌入所有字體檔案以確保長期顯示的準確性。' },
    ],
  },


  'pdf-to-html': {
    title: 'PDF轉HTML',
    metaDescription: '將PDF頁面轉換爲網頁格式（HTML）。支援自適應佈局和跨平臺瀏覽。',
    keywords: ['pdf轉html', 'pdf轉網頁', 'pdf線上發佈', 'pdf發佈爲網頁'],
    description: `
      <p>PDF轉HTML工具可以將您的靜態PDF文件轉化爲可直接在瀏覽器中瀏覽的網頁。轉換後的內容支援文字檢索，並能自適應不同的螢幕尺寸。</p>
      <p>非常適合將PDF手冊、宣傳冊或研究論文發佈到網站上，提供比下載PDF檔案更好的使用者體驗。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF', description: '選擇要網頁化的PDF檔案。' },
      { step: 2, title: '生成HTML', description: '系統將頁面結構、樣式和圖片重新編碼爲HTML/CSS。' },
      { step: 3, title: '下載或檢視', description: '下載包含HTML檔案和資源的壓縮包。' },
    ],
    useCases: [
      { title: '線上展示手冊', description: '將產品手冊轉換爲網頁，方便客戶直接通過手機瀏覽器查閱。', icon: 'monitor' },
      { title: 'SEO增強', description: '將PDF內容轉爲HTML頁面，更容易被搜索引擎索引，提高網站流量。', icon: 'search' },
      { title: '內容分發', description: '製作可以在不安裝PDF閱讀器的情況下就能檢視的輕量化內容。', icon: 'share-2' },
    ],
    faq: [
      { question: '轉換後的網頁支援響應式嗎？', answer: '是的，我們生成的代碼能適應手機、平板和桌面設備。' },
      { question: '圖片能保留嗎？', answer: '可以，PDF中的所有插圖和照片都會被優化並儲存爲網頁適用的圖像格式。' },
      { question: 'HTML檔案裏會有亂碼嗎？', answer: '不會。系統會正確對映編碼，確保轉換後的文字內容準確無誤。' },
    ],
  },


  'extract-images': {
    title: '從PDF擷取圖片',
    metaDescription: '從PDF檔案中擷取所有嵌入的圖片。支援單獨下載或打包成ZIP下載。自動過濾小尺寸圖片。',
    keywords: ['擷取pdf圖片', 'pdf圖片擷取', '從pdf獲取圖片', '下載pdf圖片', 'pdf轉圖片'],
    description: `
      <p>從PDF擷取圖片工具可以從您的PDF文件中檢索所有嵌入的圖片。您可以單獨下載高質量圖片，也可以將所有圖片打包成ZIP壓縮包一次性下載。</p>
      <p>該工具會根據可自定義的尺寸閾值自動過濾掉小圖片（如圖標和裝飾圖案）。支援批次處理多個PDF檔案，高效便捷。</p>
      <p>所有擷取過程都在您的瀏覽器中進行，確保您的文件保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳PDF檔案', description: '拖曳一個或多個PDF檔案，或點擊從設備中選擇檔案。' },
      { step: 2, title: '設定過濾選項', description: '調整最小寬度、高度和檔案大小，過濾掉不需要的小圖片。' },
      { step: 3, title: '擷取圖片', description: '點擊擷取按鈕，搜尋PDF中所有嵌入的圖片。' },
      { step: 4, title: '下載', description: '單獨下載每張圖片，或將所有圖片打包成ZIP壓縮包下載。' },
    ],
    useCases: [
      { title: '圖片恢復', description: '從PDF文件中擷取照片和圖片，用於重複使用或存檔。', icon: 'image' },
      { title: '素材收集', description: '收集PDF報告、簡報或宣傳冊中的所有圖形和圖片。', icon: 'folder' },
      { title: '內容再利用', description: '從PDF中擷取圖片，用於其他文件、網站或簡報。', icon: 'refresh-cw' },
    ],
    faq: [
      { question: '擷取的圖片是什麼格式？', answer: '圖片會盡可能保持原始格式（JPEG、PNG等）擷取，原始畫素數據會轉換爲PNG格式。' },
      { question: '爲什麼有些圖片沒有擷取出來？', answer: '小於設定尺寸閾值的圖片會被過濾掉。調整過濾設定可以擷取更小的圖片。' },
      { question: '可以從掃描的PDF中擷取圖片嗎？', answer: '掃描的PDF通常每頁包含一張大圖片。如需逐頁轉換，請使用"PDF轉圖片"工具。' },
    ],
  },


  'ocg-manager': {
    title: 'PDF圖層管理器',
    metaDescription: '管理PDF圖層。檢視、切換、新增、刪除和重新命名圖層。',
    keywords: ['pdf圖層', 'ocg管理器'],
    description: '<p>管理PDF文件中的可選內容組（OCG）。</p>',
    howToUse: [
      { step: 1, title: '上傳PDF', description: '上傳包含圖層的PDF檔案。' },
      { step: 2, title: '檢視圖層', description: '工具自動列出所有圖層。' },
      { step: 3, title: '管理圖層', description: '切換、新增或刪除圖層。' },
    ],
    useCases: [
      { title: '技術圖紙', description: '管理CAD導出中的圖層。', icon: 'ruler' },
      { title: '地圖編輯', description: '切換地圖圖層。', icon: 'map' },
      { title: '印刷準備', description: '準備分層PDF進行列印。', icon: 'printer' },
    ],
    faq: [
      { question: '什麼是PDF圖層？', answer: 'OCG是PDF中可以顯示或隱藏的圖層。' },
      { question: '爲什麼沒有圖層？', answer: '並非所有PDF都包含圖層。' },
      { question: '會影響原始內容嗎？', answer: '圖層可見性更改僅影響顯示。' },
    ],
  },


  'pdf-reader': {
    title: 'PDF閱讀器',
    metaDescription: '免費線上PDF閱讀器。在瀏覽器中檢視PDF。',
    keywords: ['pdf閱讀器', 'pdf檢視器'],
    description: '<p>在瀏覽器中檢視PDF文件。</p>',
    howToUse: [
      { step: 1, title: '打開PDF', description: '上傳PDF檔案。' },
      { step: 2, title: '導航頁面', description: '使用頁面控制導航。' },
      { step: 3, title: '調整視圖', description: '放大、縮小或旋轉。' },
    ],
    useCases: [
      { title: '文件審閱', description: '快速審閱PDF文件。', icon: 'book-open' },
      { title: '移動閱讀', description: '在任何設備上閱讀PDF。', icon: 'smartphone' },
      { title: '快速預覽', description: '預覽PDF。', icon: 'eye' },
    ],
    faq: [
      { question: '文件安全嗎？', answer: '是的，完全在瀏覽器中處理。' },
      { question: '可以編輯嗎？', answer: '此工具僅用於檢視。' },
      { question: '支援移動設備嗎？', answer: '是的。' },
    ],
  },

  'pdf-booklet': {
    title: 'PDF小冊子製作與列印排版 - 騎馬釘折頁列印排版【免費】',
    metaDescription: '快速將 PDF 重新排版為適合雙面列印折疊的騎馬釘小冊子（Booklet）。自動計算折頁順序，支援標準 A4/A3 列印。',
    keywords: ['pdf小冊子', 'pdf摺頁列印', '騎馬釘排版', 'pdf小冊子製作', '印書排版', 'pdf折頁'],
    description: `
      <p>PDF小冊子製作工具能將您的 PDF 頁面自動重新拼版排列為適合直接列印與對折成冊的小冊子版面（Booklet）。非常適合印製手冊、活動宣傳摺頁、小誌（Zine）、產品型錄及會議議程手冊。</p>
      <p>支援多種拼版網格（1x2、2x2、2x4、4x4）、紙張大小（A4、A3、Letter）與頁面方向設定。系統自動處理騎馬釘對裝裝訂（Saddle-stitch）所需的複雜頁碼落版順序，印出後直接對摺裝訂即可。</p>
      <p>所有處理均在您的瀏覽器本機端即時運算，機密文件與資料絕不上傳伺服器，安全且完全免費。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳 PDF 文件', description: '將想要製作為小冊子的 PDF 檔案拖曳至網頁中。' },
      { step: 2, title: '選擇小冊子排版與紙張', description: '選擇拼版模式（如 1x2 騎馬釘）與目標紙張規格（A4 或 A3）。' },
      { step: 3, title: '生成小冊子並下載列印', description: '點擊生成按鈕，即可下載已依折頁順序拼版完成的 PDF，雙面列印後對折即可成書。' },
    ],
    useCases: [
      { title: '活動與宣傳手冊印製', description: '製作展覽摺頁、活動流程表與宣傳文宣。', icon: 'book' },
      { title: '自費出版與小誌製作', description: '將個人創作、小說或詩集排版為易於自行裝訂的小冊子。', icon: 'printer' },
      { title: '會議與培訓講義', description: '將多頁簡報或文件排版為方便翻閱閱讀的裝訂手冊。', icon: 'file-text' },
    ],
    faq: [
      { question: '什麼是騎馬釘小冊子拼版？', answer: '騎馬釘拼版是一種將文件的頁碼依折疊順序重新排列的印刷工藝（例如第 1 頁與最後 1 頁印在同一張紙的同一面），印出雙面對折後，頁碼即可完美連續。' },
      { question: '列印時需要注意什麼設定？', answer: '請在印表機設定中選擇「雙面列印（短邊翻頁）」，並以「實際大小（100%）」無邊距列印，即可得到正確的裝訂效果。' },
      { question: '總頁數不是 4 的倍數怎麼辦？', answer: '工具會自動在小冊子末尾補上必要的空白頁，確保裝訂時封底與內頁結構完整。' },
    ],
  },

  'deskew-pdf': {
    title: 'PDF自動傾斜校正 - 修正掃描檔歪斜角度【免費】',
    metaDescription: '自動偵測並校正掃描 PDF 文件的傾斜歪斜角度。高精準度旋轉對齊，100%瀏覽器本機安全處理，免註冊。',
    keywords: ['pdf傾斜校正', 'pdf歪斜校正', '掃描pdf轉正', '自動旋轉pdf', 'pdf角度修正'],
    description: `
      <p>PDF傾斜校正工具能自動分析並修正掃描文件中傾斜歪斜的頁面。這特別適合因自動進紙器（ADF）進紙偏差而掃歪的文件、合約與發票。</p>
      <p>工具運用先進圖像分析技術精確計算每頁的微小旋轉角度並將其轉正對齊。所有處理均在瀏覽器端本機完成，保障文件機密安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳掃描 PDF', description: '將需要校正的歪斜 PDF 拖曳至上傳區域。' },
      { step: 2, title: '調整敏感度與解析度', description: '依據掃描檔清晰度微調偵測閥值。' },
      { step: 3, title: '校正並下載', description: '點擊校正按鈕，下載已自動轉正的 PDF 文件。' },
    ],
    useCases: [
      { title: '自動進紙掃描校正', description: '修正複印機或掃描儀因進紙歪斜生成的偏角頁面。', icon: 'scan' },
      { title: '手機翻拍文件轉正', description: '修正手機拍照存檔時輕微傾斜的證件與文件。', icon: 'smartphone' },
      { title: '檔案數位化整理', description: '大量歷史檔案數位化前的統一水平校正。', icon: 'archive' },
    ],
    faq: [
      { question: '角度偵測有多精準？', answer: '系統可辨識並修正低至 0.1 度的細微傾斜。' },
      { question: '會影響文字畫質嗎？', answer: '處理過程盡最大可能保持原有文字解析度與邊緣清晰度。' },
    ],
  },

  'rasterize-pdf': {
    title: 'PDF光柵化 - PDF頁面轉換為高畫質點陣圖【免費】',
    metaDescription: '將 PDF 頁面光柵化轉換為高畫質點陣圖（PNG/JPEG/WebP）。自訂 DPI 解析度，瀏覽器本機安全處理。',
    keywords: ['pdf光柵化', 'pdf轉點陣圖', 'pdf高畫質轉圖片', 'pdf轉png點陣圖'],
    description: `
      <p>PDF光柵化工具將向量 PDF 文件轉換為高解析度的點陣圖片格式（PNG、JPEG 或 WebP）。支援自訂 DPI（72、150、300 DPI）與品質控制。</p>
      <p>適合製作社群分享縮圖、展示圖層或將複雜向量文件平坦化為相容性更高的點陣圖片。本機端離線安全運算，無隱私外洩風險。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳 PDF 文件', description: '選擇需要光柵化轉換的 PDF 檔案。' },
      { step: 2, title: '設定格式與解析度', description: '選擇輸出圖片格式（PNG/JPEG/WebP）及 DPI。' },
      { step: 3, title: '轉換並下載', description: '點擊轉換，個別下載或打包為 ZIP 壓縮檔。' },
    ],
    useCases: [
      { title: '社群與網頁展示', description: '將 PDF 投影片轉為社群平台易於瀏覽的高畫質圖片。', icon: 'share-2' },
      { title: '印刷前預檢縮圖', description: '以高 DPI 導出點陣圖，檢查排版效果。', icon: 'image' },
    ],
    faq: [
      { question: '一般用途推薦使用多少 DPI？', answer: '螢幕瀏覽建議 72~150 DPI；高品質印刷輸出建議 300 DPI。' },
    ],
  },

  'markdown-to-pdf': {
    title: 'Markdown轉PDF - MD檔案轉精美排版PDF【免費】',
    metaDescription: '將 Markdown (.md) 檔案快速轉換為排版精美的 PDF 文件。支援 GitHub 風格 Markdown (GFM) 與程式碼語法反白。',
    keywords: ['markdown轉pdf', 'md轉pdf', 'gfm轉pdf', 'markdown轉檔'],
    description: `
      <p>Markdown轉PDF工具能將您的 .md 筆記或技術文件直接導出為排版專業的 PDF。完美支援 CommonMark 與 GitHub Flavored Markdown (GFM)，包含表格、任務清單與程式碼區塊高亮。</p>
      <p>支援多種主題樣式與頁面邊距設定。所有運算在瀏覽器本機端執行，筆記內容絕對私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳 Markdown 檔案', description: '拖曳 .md 或 .markdown 檔案，或直接貼上文字內容。' },
      { step: 2, title: '選擇外觀主題', description: '切換淺色、深色或 GitHub 風格排版主題。' },
      { step: 3, title: '導出並下載 PDF', description: '一鍵編譯生成格式完整的 PDF 文件。' },
    ],
    useCases: [
      { title: '技術文件與 README', description: '將專案說明文件輸出為可直接分享與列印的正式手冊。', icon: 'file-text' },
      { title: '學習筆記與文章', description: '將平時整理的 Markdown 筆記轉為版面整齊的 PDF 存檔。', icon: 'edit-3' },
    ],
    faq: [
      { question: '支援程式碼高亮嗎？', answer: '支援，主流程式語言程式碼均具備語法著色與等寬字型顯示。' },
    ],
  },

  'email-to-pdf': {
    title: 'Email轉PDF - 將電子郵件(.eml)轉換為PDF文件【免費】',
    metaDescription: '將電子郵件 (.eml) 檔案轉換為標準 PDF。完整保留郵件標題、正文、內嵌圖片與附件清單。',
    keywords: ['email轉pdf', 'eml轉pdf', '電子郵件轉檔', '郵件存為pdf'],
    description: `
      <p>Email轉PDF工具可將您的電子郵件存檔（.eml 格式）轉換為格式標準的 PDF 文件。工具會完整保留發件人、收件人、主旨、日期等標頭資訊及正文格式。</p>
      <p>非常適合法律存證、商業往來歸檔或重要郵件備份。所有處理都在本地瀏覽器中完成，郵件機密完全不外洩。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳 EML 郵件檔案', description: '選擇或拖曳 .eml 郵件檔案至網頁。' },
      { step: 2, title: '設定匯出選項', description: '選擇紙張規格及是否包含抄送/密送資訊。' },
      { step: 3, title: '轉換並下載', description: '生成並下載永久保存的 PDF 郵件存檔。' },
    ],
    useCases: [
      { title: '法律憑證與商務存檔', description: '將重要往來信件轉為具法律參照價值的不可竄改 PDF。', icon: 'scale' },
      { title: '業務通訊備份', description: '整理客戶合約洽談與授權確認郵件。', icon: 'briefcase' },
    ],
    faq: [
      { question: '郵件中的附件會一起嵌入嗎？', answer: 'PDF 中會清楚列出所有附件名稱與清單，確保記錄完整。' },
    ],
  },

  'cbz-to-pdf': {
    title: 'CBZ轉PDF - 漫畫壓縮包轉換為PDF【免費】',
    metaDescription: '將漫畫壓縮檔案 (CBZ/ZIP) 轉換為單一 PDF 文件。保持原始畫質與正確閱讀順序，免註冊。',
    keywords: ['cbz轉pdf', '漫畫轉pdf', 'cbz轉檔', '電子書漫畫pdf'],
    description: `
      <p>CBZ轉PDF工具將漫畫壓縮檔案（Comic Book Archive）轉換為通用的 PDF 文件。工具會自動解壓並按章節順序將所有漫畫頁面整合為單一 PDF。</p>
      <p>便於在僅支援 PDF 的電子書閱讀器、平板或電腦上順暢翻閱。瀏覽器本機安全處理，不佔用伺服器頻寬。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳 CBZ 檔案', description: '選擇您的 .cbz 或 .zip 漫畫檔案。' },
      { step: 2, title: '設定頁面尺寸', description: '選擇保留原始圖片尺寸或適配標準閱讀器大小。' },
      { step: 3, title: '轉換並下載', description: '一鍵導出為高畫質 PDF 漫畫電子書。' },
    ],
    useCases: [
      { title: '電子閱讀器相容', description: '讓只支援 PDF 的 Kindle 或 Kobo 也能輕鬆閱讀 CBZ 漫畫。', icon: 'book' },
      { title: '漫畫數位歸檔', description: '將零散的漫畫壓縮包整理為標準 PDF 書庫。', icon: 'archive' },
    ],
    faq: [
      { question: '會損壞漫畫圖片畫質嗎？', answer: '不會，圖片會以原始解析度無損嵌入至 PDF 頁面中。' },
    ],
  },

  'font-to-outline': {
    title: 'PDF字型轉曲線 - 文字轉外框外型防止缺字【免費】',
    metaDescription: '將 PDF 中的文字字型全部轉為向量曲線（外框）。確保在任何未安裝字型的設備或送印時文字不跑版。',
    keywords: ['pdf字型轉外框', 'pdf轉曲線', '文字轉外框', '印刷字型相容'],
    description: `
      <p>PDF字型轉曲線工具將文件中的所有文字轉換為向量路徑外框（Vector Outlines）。即使印刷廠或收件人電腦中沒有安裝對應字型，文件的字形外觀也絕對不會跑版或替換。</p>
      <p>這是發印送印前最關鍵的防護步驟，避免字型授權糾紛與輸出缺失。本機端安全轉檔，免註冊。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳 PDF 文件', description: '選擇包含特定字型的 PDF 檔案。' },
      { step: 2, title: '確認外框化參數', description: '檢查需要轉曲線的頁面範圍與解析度。' },
      { step: 3, title: '轉曲線並下載', description: '點擊處理，下載所有文字已向量化的印刷級 PDF。' },
    ],
    useCases: [
      { title: '商業印刷與輸出送件', description: '確保送到印表機或印刷廠時文字 100% 不變形跑版。', icon: 'printer' },
      { title: '跨平台文件發佈', description: '發送給使用特殊系統的客戶，避免對方缺字。', icon: 'share-2' },
    ],
    faq: [
      { question: '轉曲線後還能搜尋或複製文字嗎？', answer: '不能。轉為曲線後文字已變成向量圖形，不再具備可編輯文字屬性。請務必保留原始備份。' },
    ],
  },

  'extract-tables': {
    title: 'PDF表格擷取 - 智慧辨識並導出表格數據【免費】',
    metaDescription: '自動辨識並擷取 PDF 中的表格資料。支援匯出為 CSV、Excel、Markdown 或 JSON 格式。',
    keywords: ['pdf表格擷取', 'pdf轉表格', 'pdf表格提取', 'pdf轉csv', 'pdf提取資料'],
    description: `
      <p>PDF表格擷取工具能自動掃描並辨識 PDF 文件中的表格結構，並將其中的資料導出為結構化的 CSV、Markdown 或 JSON 格式。</p>
      <p>適合從財務報表、發票收據、統計資料或學術論文中快速提取數值數據，無需人工手動複製貼上。所有辨識在您的瀏覽器本機進行，機密數據不外洩。</p>
    `,
    howToUse: [
      { step: 1, title: '上傳含表格的 PDF', description: '將包含表格數據的 PDF 文件上傳。' },
      { step: 2, title: '設定辨識範圍', description: '指定頁碼或調整表格框線偵測門檻。' },
      { step: 3, title: '選擇格式並導出', description: '選擇 CSV、Markdown 或 JSON 格式下載提取結果。' },
    ],
    useCases: [
      { title: '財務與業務報表分析', description: '將 PDF 財務報表中的數據提取至 Excel 中進一步分析。', icon: 'bar-chart' },
      { title: '論文與研究資料整理', description: '提取報告中的對比表格至 Markdown 筆記中。', icon: 'file-text' },
    ],
    faq: [
      { question: '支援複雜的合併儲存格嗎？', answer: '常規網格表格辨識效果最佳；極複雜的巢狀表格建議微調辨識參數後導出。' },
    ],
  },
};
