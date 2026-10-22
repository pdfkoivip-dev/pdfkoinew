# PDFkoi 关键词研究与竞品 SEO 分析报告

**日期**: 2026-10-22
**数据来源**: 本地源码审计 (D:\claude\pdfkoi) + GSC 报告 (2026-10-15) + Bing Webmaster API 实测数据 + Ahrefs 口径公开数据 (seotrends.pro / ahrefstop)
**网站**: https://pdfkoi.com

---

## 一、执行摘要

PDFkoi 是一个 **纯浏览器端（client-side WASM）的 96 工具 PDF 工具站**，支持 9 种语言，核心差异化是"文件永不上传"。当前 SEO 处于冷启动后期：GSC 月点击 220、平均排名 20.9，但已有 **43 个关键词卡在 8-20 位**（striking distance），且西班牙语市场已验证可以单页拿 329 点击/月。

**三个核心结论：**

1. **不要打头部词**。"merge pdf"（全球 170 万/月）、"pdf to word"（400 万/月）由 DR 83 的 iLovePDF（月流量 1.64 亿、平均排名 3.6）把持，新站短期无望。PDFkoi 的胜率在 **稀有工具词 + 隐私修饰长尾词 + 多语言长尾**。
2. **稀有工具是被验证的金矿**。`/es/tools/posterize-pdf/` 单页 329 点击、20.1% CTR 证明：iLovePDF/Smallpdf 没做或做得差的工具（posterize、n-up、booklet、combine-single-page、deskew、alternate-merge 等 30+ 个），Google 愿意把排名给功能型小站。源码里 96 个工具中约有 1/3 属于这类"竞品空白区"。
3. **多语言是最大的杠杆，也是当前的失血点**。iLovePDF 最大的关键词全是西语/葡语/德语（convertir pdf a word 56.9 万/月、converter pdf em word 41.3 万/月），而 PDFkoi 的 ja/fr/de 页面 CTR 不足 1%，本地化内容覆盖严重不均（en 2510 行 vs ko 1129 行 / pt 1013 行）。

---

## 二、网站现状（源码审计）

### 2.1 资产盘点

| 资产 | 数量/状态 | 源码位置 |
|------|----------|---------|
| 工具页 | 96 个（6 大类） | `src/config/tools.ts` |
| 语言 | 9 种（en/es/fr/de/pt/ja/ko/zh/zh-TW） | `src/lib/i18n/config.ts` |
| 长尾落地页 | 5 个（**仅英文**） | `src/content/seo/landing-pages.ts` |
| 分类 Hub | 6 个 × 9 语言 | `src/app/(localized)/[locale]/tools/category` |
| 本地化内容 | en 2510 行 / zh-TW 2651 / zh 2532 / es 2271 / ja 1884 / fr 1917 / de 1406 / **ko 1129 / pt 1013** | `src/config/tool-content/` |
| SEO 基础设施 | hreflang、分语言 sitemap、SoftwareApplication/HowTo/Breadcrumb 结构化数据、内链策略 | `src/lib/seo/` |

### 2.2 GSC 基线（2026-09-12 ~ 10-12）

- 点击 220 / 展示 5,627 / CTR 3.91% / 平均排名 20.9
- 西语 358 点击（11.7% CTR）✅；日语 8 点击（0.4%）、法语 6（0.6%）、德语 4（0.5%）❌
- Striking distance 词 43 个：pdf转换(8.0)、invertir pdf(10.1)、pdf 旋转(10.2)、jpg转pdf(9.9)、rotar pdf(10.1)、pdf to booklet(9.7)、word to pdf(8.8) 等
- 品牌词流量≈0（新站，外链与品牌资产薄弱）

### 2.3 源码中已发现的 SEO 短板

1. **5 个长尾落地页只输出英文**（`sitemap.ts` L303: `if (locale === defaultLocale)`），而 GSC 证明多语言需求真实存在。
2. **ko/pt/de 本地化内容只有英文的 40-50%**，但 `indexing-policy.ts` 允许这些语言"无本地化内容也可索引"（HIGH_VALUE_TOOL_LOCALES）——产生大量英文兜底页面，CTR 自然崩塌（ja/fr/de <1% 的直接原因之一）。
3. **落地页体系太小**：5 个词族 vs 竞品的内容矩阵（PDF24 全语言工具+教程、Sejda 每工具带 how-to 博客）。

---

## 三、关键词研究

### 3.1 市场量级参考（注意口径）

**Bing Webmaster API 实测月展示（美国，2026-08）**——Google 通常为 Bing 的 5-8 倍：

| 关键词 | Bing 月展示 | Google 估算 |
|--------|-----------|------------|
| merge pdf | 13,328 | 7-10 万/月（全球 170 万，Ahrefs） |
| jpg to pdf | 13,260 | 全球 480 万（Ahrefs，11zon 案例口径） |
| combine pdf | 12,328 | — |
| free pdf editor | 9,777 | — |
| compress pdf | 7,644 | 全球 160 万（Ahrefs） |

**结论：头部词量级巨大但 KD 高（pdf zusammenfügen KD 19 都已是 iLovePDF 的流量支柱），新站应完全避开，靠以下四层词族作战。**

### 3.2 第一层：稀有工具词（最高优先级，已被 GSC 验证）

这批工具 iLovePDF（约 25 工具）和 Smallpdf（约 20 工具）**没有对应页面**，SERP 上多为论坛问答或低质量站：

| 词族 | 对应工具 slug | 竞争判断 | GSC 已有信号 |
|------|--------------|---------|-------------|
| posterize pdf / pdf poster | `posterize-pdf` | 低 | ✅ es 版 329 点击/月 |
| pdf to booklet / booklet printing pdf | `pdf-booklet` | 低 | ✅ 41 展示，排 9.7 |
| combine pdf into one page / pdf one continuous page | `combine-single-page` | 低 | ✅ 805 展示，CTR 6% |
| n-up pdf / 2 pages per sheet pdf | `n-up-pdf` | 低 | — |
| alternate merge pdf / interleave pdf | `alternate-merge` | 极低 | — |
| deskew pdf / straighten scanned pdf | `deskew-pdf` | 低 | — |
| pdf to pdf/a / convert pdf to pdfa | `pdf-to-pdfa` | 中（Adobe 占位） | — |
| djvu to pdf / fb2 to pdf / psd to pdf / cbz to pdf | `djvu-to-pdf` 等 4 个 | 极低 | — |
| flatten pdf form / flatten annotations | `flatten-pdf` | 低-中 | — |
| linearize pdf / fast web view pdf | `linearize-pdf` | 低（专业人群） | — |
| sanitize pdf / remove pdf metadata | `sanitize-pdf` `remove-metadata` | 低-中 | — |

**打法**：这批词 KD 普遍 < 15，直接优化现有工具页 title/H1/FAQ 即可承接，是 3 个月内最现实的流量增量。

### 3.3 第二层：隐私/免注册修饰长尾（PDFkoi 的差异化主场）

竞品是服务器端处理，无法真诚地讲"不上传"故事（Sejda 只有桌面版能做到）。这层词意图明确、商业价值高（企业/律师/医疗场景）：

| 词族 | 现有承接页 | 缺口 |
|------|-----------|------|
| compress pdf without uploading / offline pdf compressor | `/compress-pdf-without-upload/`（仅英文） | 需扩到 es/ja/de/fr/pt |
| merge pdf no signup / no registration | `/merge-pdf-no-signup/`（仅英文） | 同上 |
| compress pdf to 100kb / 200kb / 500kb / 1mb | `/compress-pdf-to-100kb/`（仅英文） | **竞品 thepdfcompress.com 整站只做这个词族就活下来了；轻闪PDF/Wondershare 均已入场，但多语言版本仍弱** |
| secure pdf tools / private pdf editor / pdf tool no server | 无专页 | 建议做 hub 页 |
| sign pdf without upload / esign offline | `sign-pdf` 工具页 | title 未带隐私修饰词 |

### 3.4 第三层：多语言词族（量最大的杠杆）

iLovePDF 数据证明多语言是 PDF 工具赛道第一大流量来源。各语言高潜词（按市场量级 × PDFkoi 当前覆盖差）：

| 语言 | 头部词及量级（Ahrefs/地区口径） | PDFkoi 现状 |
|------|------------------------------|------------|
| 西班牙语 | convertir pdf a word 56.9 万/月（MX，iLovePDF 拿 20 万访问）、combinar pdf、comprimir pdf | ✅ 最强（358 点击），加大投入 |
| 葡萄牙语 | converter pdf em word 41.3 万/月（BR） | ⚠️ 内容量最低（1013 行），但 BR 市场巨大 |
| 德语 | pdf zusammenfügen 35.4 万/月、pdf komprimieren | ❌ CTR 0.5%，内容 1406 行 |
| 日语 | pdf 結合 / pdf 圧縮 / pdf 一つにまとめる | ❌ 1836 展示仅 8 点击，title 疑似机翻 |
| 中文 | pdf合并 / pdf压缩 / jpg转pdf | ✅ zh+zh-TW 双版本，44.7 万展示潜力，CTR 4.7% 尚可 |
| 韩语 | pdf 합치기 / pdf 압축 | ⚠️ ko 内容最薄（1129 行） |

### 3.5 第四层：工作流/场景词（护城河词）

Workflow Editor 是源码中独有的差异化功能（23+ 模板：Merge & Compress、Secure PDF、Invoice Processing 等），可承接竞品完全没有的场景词：

- "compress and merge pdf" / "merge then compress"（对应 Merge & Compress 模板）
- "how to prepare documents for printing"（Document Preparation 模板）
- "batch watermark pdf"（Batch Watermark 模板）
- "convert and compress for web"（Optimize for Web 模板）

当前 `/workflow` 页面 priority 仅 0.6、内容单薄，没有针对这些词做落地内容。

---

## 四、竞品 SEO 分析

### 4.1 竞品格局矩阵

| 竞品 | DR/规模 | 定位与处理方式 | SEO 打法 | PDFkoi 的相对优势 |
|------|--------|--------------|---------|-----------------|
| **iLovePDF** | DR 83，月流量 1.64 亿，3902 词，平均排名 3.6 | 服务器端处理，25+ 工具，免费+付费 | 多语言矩阵（es/pt/de 是最大流量来源）+ 品牌词（"ilovepdf" 51 万/月）| 96 vs 25 工具；真 client-side；无次数限制 |
| **Smallpdf** | 约 10 亿用户量级 | 服务器端，免费额度受限 | 品牌+内容营销，已上 AI 功能 | 免费无限次 vs 其付费墙 |
| **Sejda** | 中型 | **桌面版 on-premise + 云端混合**，隐私是其桌面端卖点 | 每工具配 how-to 博客，长尾覆盖深 | 无需安装即可 client-side（Sejda 要装桌面版）；96 vs ~30 工具 |
| **PDF24** | 德国老站，全语言覆盖 | 服务器端，免费无限制 | 工具页+教程+全语言，长尾极全 | 隐私故事更强；工具更现代 |
| **Stirling PDF** | 开源自托管（GitHub 5 万+ star） | Docker 自部署，面向开发者 | 开源社区+技术博客，不主打搜索流量 | 零部署门槛（Stirling 要会 Docker） |
| **11zon / pi7 / 类似印度系工具站** | 11zon DR 63，月访问 220 万 | 浏览器端，纯工具矩阵 | 精吃头部工具词（"jpg to pdf" 单词 40 万访问）+ 海量长尾指南页 | 产品质量与隐私承诺；但需警惕其内容量产打法 |
| **thepdfcompress.com** | 小站 | 服务器端 | **整站只做 "compress pdf to Xkb" 词族** | 说明细分词族足以养活一个站 |

### 4.2 各竞品可借鉴的打法

- **iLovePDF**：多语言 URL 结构（/es、/pt、/de）与 PDFkoi 现有架构一致；其西语词流量 > 英语，验证了 es 优先策略。
- **Sejda**：每个工具页下方配 300-500 字 how-to + FAQ，把一个工具页吃成多个长尾词——PDFkoi 的 `tool-content` 已有此结构，但 ko/pt/de 覆盖不足。
- **PDF24**：教程内容（如"如何压缩到指定大小"）承接信息型长尾，反哺工具页权重。
- **11zon**：autocomplete + 问题式搜索挖词（"how to merge pdf files in iphone"），批量生成指南页——适合 PDFkoi 用 96 工具 × 常见问题矩阵低成本复制。

### 4.3 PDFkoi 可进攻的缝隙（综合判断）

1. **功能空白词**（3.2 节）：竞品工具数少，30+ 个 PDFkoi 独有/稀有工具词无强敌。
2. **隐私修饰词**（3.3 节）：所有服务器端竞品讲不了"不上传"故事。
3. **多语言长尾**（3.4 节）：ja/fr/de/ko 的工具词 SERP 竞争度远低于英语，本地化质量是唯一门槛。
4. **场景/工作流词**（3.5 节）：Workflow Editor 全赛道独一份。

---

## 五、优先级行动计划

### P0（本月，预期 +200~300 点击/月）

1. **修复 ja/fr/de 高展示页的 Title/Description**（沿用 2026-10-15 报告的清单：`/ja/tools/organize-pdf/`、`/fr/tools/pdf-to-excel/`、`/zh-tw/tools/jpg-to-pdf/` 等 9 页）——这是 CTR <1% 的止血点。
2. **43 个 striking distance 词逐个过 SERP**：`pdf to booklet`、`word to pdf`、`rotar pdf`、`jpg转pdf` 等已在 8-20 位，只需 title 重写 + 内链加固 + FAQ 补充，不必新做页面。
3. **落地页多语言化**：修改 `sitemap.ts` L303 与 `landing-pages.ts`，把 5 个落地页（尤其 compress-pdf-to-100kb）扩出 es/pt/de/ja 版本——`/compress-pdf-to-100kb/` 词族已被竞品整站验证。

### P1（1-2 个月，建立稀有工具词壁垒）

4. **30+ 稀有工具页内容强化**：为 `posterize-pdf`（已被 es 验证）、`pdf-booklet`、`n-up-pdf`、`deskew-pdf`、`alternate-merge`、`djvu-to-pdf`、`pdf-to-pdfa`、`flatten-pdf` 等页补齐 HowTo 结构化数据、使用场景文案、FAQ（复用 `src/config/tool-content/en.ts` 模式），并优先出 es/pt 版本。
5. **ko/pt/de 本地化内容补齐**（当前只有英文的 40-50%）：优先补 GSC 已有展示的工具页，而非全量。
6. **隐私词族 hub 页**：新建 `/private-pdf-tools/`（或类似）聚合页，内链到 no-upload 相关工具与落地页。

### P2（2-3 个月，布局护城河）

7. **Workflow 场景落地页**：为 23 个模板中的高潜场景（merge & compress、batch watermark、optimize for web）各建一页，`/workflow` 提升内链权重。
8. **问题式长尾内容矩阵**：参考 11zon 打法，用 autocomplete + PAA 挖词（"how to merge pdf on iphone"、"are online pdf tools safe"），批量产出指南页，每页内嵌对应工具。
9. **外链基础建设**：品牌词流量≈0 是最大短板——GitHub 开源曝光（项目已 AGPL 开源，可在 awesome 列表、Reddit r/selfhosted、Product Hunt 获取技术社区外链，与 Stirling PDF 同渠道）。

### 关键指标预期

| 阶段 | 点击/月 | 依据 |
|------|--------|------|
| 现状 | 220 | GSC 2026-10 |
| P0 完成 | 450-550 | 9 个高展示页 CTR 修复 +130%（10-15 报告估算 +285）+ 落地页多语言 |
| P1 完成 | 900-1,300 | 30 个稀有工具词均 KD<15，每词 10-30 点击/月 |
| P2 完成 | 2,000+ | 工作流场景词 + 内容矩阵 + 品牌词启动 |

---

## 六、附录：数据口径说明

- Bing 数据：Toolfyra 公布的 Bing Webmaster API 实测月展示（2026-08，美国），为真实 API 数据而非估算。
- iLovePDF 数据：seotrends.pro（Ahrefs 口径），DR 83、流量 1.64 亿、关键词 3,902。
- 11zon 数据：ahrefstop.com（Ahrefs 口径），"jpg to pdf" 全球量 480 万/月。
- PDFkoi 数据：本地 GSC 报告 `PDFKOI-SEO-TRAFFIC-GROWTH-REPORT-2026-10-15.md`（2026-09-12~10-12）。
- 搜索量均为第三方估算，决策前建议用 Google Keyword Planner 复核 es/pt/de/ja 核心词。
