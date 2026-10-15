/**
 * Traditional Chinese Tool Content
 * Requirements: 3.1 - Multi-language support
 */

import type { ToolContent } from '@/types/tool';
import { toolContentZh } from './zh';

export const toolContentZhTw: Record<string, ToolContent> = {
  ...toolContentZh,
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
  'jpg-to-pdf': {
    ...toolContentZh['jpg-to-pdf'],
    title: 'JPG轉PDF - 多張圖片/照片合併成PDF檔案【免費線上】',
    metaDescription: '免費線上將多張 JPG、JPEG 圖片與照片快速合併為單一 PDF 檔案。支援自由拖曳排序、調整方向與邊距。瀏覽器本機安全處理，檔案不需上傳伺服器，無浮水印、免註冊。',
    keywords: [
      'jpg轉pdf',
      '圖片合併pdf',
      'jpg合併',
      '圖片合併成pdf',
      '照片合併pdf',
      '多張照片合併pdf',
      '多張jpg合併',
      '照片整合成pdf',
      'jpg轉pdf線上',
      '圖片轉pdf',
      '照片轉pdf'
    ],
    description: `
      <p>將多張 JPG 圖片合併為一個 PDF，適合把多張照片整理成更方便上傳、提交或分享的單一檔案。</p>
      <p>不論是證件照片、截圖、掃描圖片，還是手機拍攝的紙本資料，都能先排序再匯出成一份 PDF。這比傳送多張零散圖片更方便審核、列印與保存。如果之後還想把 PDF 頁面重新匯出成圖片，也可以繼續<a href="/zh-tw/tools/pdf-to-jpg">把 PDF 頁面轉成 JPG</a>。</p>
      <p>所有轉換都在瀏覽器中完成，圖片不會上傳到伺服器，更適合處理證件、申請文件與私人資料。</p>
    `,
    useCases: [
      { title: '多張圖片合成 PDF', description: '把零散圖片整理成一份 PDF，提交與分享都更方便。', icon: 'image' },
      { title: '文件照片轉 PDF', description: '把手機拍攝的紙本資料快速整合成正式 PDF。', icon: 'camera' },
      { title: '截圖彙整成 PDF', description: '將多張截圖依順序打包成一份 PDF，方便回報與留存。', icon: 'folder' },
    ],
    faq: [
      { question: '如何把多張 JPG 合併成一個 PDF？', answer: '上傳多張 JPG 後調整順序，再按下轉換，就能輸出單一 PDF。' },
      { question: '轉換前可以調整圖片順序嗎？', answer: '可以，你可以先拖曳重新排序，再生成最終的 PDF。' },
      { question: '手機拍攝的資料照片也能直接轉成 PDF 嗎？', answer: '可以，把 JPG 照片上傳後就能直接合併成一份 PDF。如果生成後的檔案偏大，下一步通常就是<a href="/zh-tw/tools/compress-pdf">壓縮 PDF 方便寄送或上傳</a>。' },
    ],
  },
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
};
