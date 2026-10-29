# 多语言与国际 SEO 行动指南

> 版本：2026-10-30 · 基于 2026-10-29 只读审计结论整理
> 站点：https://pdfkoi.com · 栈：Next.js 15 + next-intl 4 + 静态导出

## 一、核心结论

项目的国际化 URL 基础设施是**正确**的（语言路由、`zh-TW`→`/zh-tw` 映射、`hreflang`/`x-default`、canonical、`<html lang>`、sitemap 均一致），
但存在一个根本性错位：

> **「索引声明」与「真实本地化内容」严重脱节。** 大量页面以非英文 URL、独立 canonical、`index,follow` 和完整 hreflang 声明为独立语言页面，实际正文却是英文或乱码。

因此本指南的优先目标是：**让可索引语言集合严格等于「真实、可读、完整的本地化内容」**，而不是继续增加语言路由。

---

## 二、修复优先级总览

| 优先级 | 问题 | 影响面 | 修复性质 | 预计收益 |
|---|---|---|---|---|
| **P0** | 175 个英文回退工具页仍可索引 | 8 语言 × 数十工具 | 改索引策略（小改） | 消除近重复页，恢复质量信号 |
| **P0** | metadata 乱码（`?` 替换特殊字符） | es/de/fr/pt | 内容重写 | 修复搜索摘要与信任度 |
| **P1** | FAQ/contact 翻译命名空间错位 | ja/ko/fr/pt | 迁移 + 翻译 | 修复混合语言页 |
| **P1** | Legal 页正文硬编码英文 | 全语言 | 翻译或限索引 | 修复语言信号冲突 |
| **P2** | 分类 hub 混合语言 | 非英文 | 翻译 | 提升非英文落地体验 |
| **P2** | 共享组件硬编码/错误链接 | 全站 | 迁入 messages | 消除残留英文 |
| **P3** | 翻译质量 CI | 持续 | 新增测试 | 防止回退与漂移 |

---

## 三、P0-1：修复英文回退工具页的索引策略

### 问题定位
- `src/lib/seo/indexing-policy.ts:11` — `HIGH_VALUE_TOOL_LOCALES` 把 `es/de/fr/pt/ja/ko/zh/zh-TW` 全部列入；
- `:47-60` `shouldIndexLocalizedToolPage` — 这些语言**无需本地化内容**即返回 `true`；
- `:67-75` `getToolPublicLocale` — 高价值语言保留当前 locale 作 canonical（与 `:54` 注释矛盾）；
- 实测 `/pt/tools/jpg-to-pdf/`：英文 title/description，但 canonical 指向 `/pt/...`、`og:locale=pt_BR`、`robots=index,follow`、进 sitemap。

### 修复方案（推荐：保留 200 + noindex + 英文 canonical）
1. 删除 `HIGH_VALUE_TOOL_LOCALES` 绕过逻辑，将 `shouldIndexLocalizedToolPage` 改为：
   ```ts
   if (locale === defaultLocale) return true;
   return hasLocalizedToolContent(locale, toolId);
   ```
2. `getToolPublicLocale` 同步改为：无本地化内容时统一返回 `defaultLocale`。
3. 英文回退页保持 200 供用户体验，但 `noindex,follow`、canonical 指向英文、从非英文 sitemap 与 hreflang 集合剔除（`generateToolMetadata` 已具备此分支，策略修正后自动生效）。

### 验收标准
- 对任意缺失本地化内容的 `(locale, tool)` 组合，页面 `robots=noindex,follow`；
- canonical 指向英文 URL；不进入对应语言 sitemap；
- 具备本地化内容的工具页保持 `index,follow` 且 canonical 指向自身。

### 备选方案（仅在追求极致干净时）
直接 301 重定向缺失本地化内容的非英文工具 URL 到英文版。优点：彻底消除重复；缺点：用户语言体验略差，需额外 redirect 规则维护。

---

## 四、P0-2：修复 metadata 乱码

### 问题定位（源码已存为 `?`，非显示问题）
- `messages/es.json:17` `l?nea`（línea）、`:199` `b?squeda`、`:218` `S?.`（Sí.）
- `messages/pt.json:16` `gr?tis`（grátis）、`:21` `Conhe?a`（Conheça）
- `messages/fr.json:16` `priv?s`（privés）、`:21` `D?couvrez`（Découvrez）
- `messages/de.json:17` `Zusammenf?hren`、`:21` `?ber`（über）

### 修复方案
1. **不要**机械替换 `?`（`?` 对应多个源字符，如 `í/ó/ã/ç/é/ü/ñ`，无法靠上下文唯一还原）。
2. 从可靠原文（历史 commit、翻译记忆或人工校对）重写受影响键。
3. 优先修复进入 `<title>`/description 的 `metadata.*` 键，再处理 FAQ 与工具内容。
4. 全量扫描 `messages/*.json` 与 `src/config/tool-content/*`，将 `?` 检测纳入 CI。

### 验收标准
- `messages/*.json` 中不含孤立 `?` 字符（正则 `[?]` 扫描为零命中）；
- `/es/`、`/fr/`、`/de/`、`/pt/` 首页与工具页 title/description 无 `?`；
- 特殊字符与源语言拼写一致。

---

## 五、P1-1：迁移 FAQ/contact 翻译命名空间

### 问题定位
- 组件读取顶层：`src/app/(localized)/[locale]/faq/FAQPageClient.tsx:21` `useTranslations('faqPage')`；`contact/ContactPageClient.tsx:20` `useTranslations('contactPage')`；
- 翻译却位于 `messages/{ja,ko,fr,pt}.json` 的 `common.faqPage`（ja 第 170 行）与 `common.contactPage`（ja 第 321 行），且**值本身仍是英文**；
- 回退逻辑 `src/lib/i18n/fallback.ts` 先复制英文再覆盖，导致顶层键缺失时静默显示英文。

### 修复方案
1. 将 `common.faqPage`、`common.contactPage` 移到顶层命名空间（与组件读取一致）。
2. 补齐 ja/ko/fr/pt 四语言的真实翻译（当前值为英文，迁移后仍须翻译）。
3. 清理同类的 `common.aboutPage` 漂移，避免再次错位。

### 验收标准
- 组件引用命名空间在四语言中均存在且值非英文；
- `/ja/faq/`、`/ko/faq/` 等页面正文与 FAQ JSON-LD 均为目标语言，无英文残留。

---

## 六、P1-2：Legal 页面正文本地化或限索引

### 问题定位
- `privacy/PrivacyPageClient.tsx:17-38,52-57,91-114`、`terms/TermsPageClient.tsx`、`cookies/CookiesPageClient.tsx` 正文硬编码英文；
- `src/lib/seo/indexing-policy.ts:28-35` 仍对所有语言开放索引。

### 修复方案（二选一）
- **方案 A（推荐，长期）**：完整翻译三个页面的标题、亮点、正文、表格、更新日期与按钮。
- **方案 B（短期止血）**：翻译完成前，仅英文版可索引；其他语言 `noindex,follow` + 英文 canonical，并从 sitemap/hreflang 剔除。

### 验收标准
- 方案 A：非英文 legal 页正文无英文，且保留本地化 metadata；
- 方案 B：非英文 legal 页 `noindex`，canonical 指向英文。

---

## 七、P2-1：分类 hub 混合语言修复

### 问题定位
- `src/app/(localized)/[locale]/tools/category/[category]/page.tsx:721-730` title/description 硬编码 `${categoryName} Tools` 与 `Browse free online...`；
- `:803-806` 使用场景与注意事项直接取 `englishHubCopy`；
- `indexing-policy.ts:20-25` 全语言分类 hub 可索引。

### 修复方案
1. 将 `"Tools"`、`Browse free online...`、使用场景、注意事项全部纳入 messages。
2. 工具卡片区分「真实本地化内容」与「英文回退」，回退项不渲染英文摘要。
3. 某语言分类正文未完成时，暂从可索引集合剔除。

---

## 八、P2-2：共享组件硬编码与错误链接

### 问题定位
- `src/components/tools/ToolPage.tsx:259-268` — FAQ/contact 链接写死 `'en' as Locale`；
- `src/components/CookieConsent.tsx:85-201` — 弹窗全英文，`href="/privacy"`、`href="/cookies"` 跳英文根；
- `src/components/layout/Footer.tsx:119-200` — `Resources`/`Security` 等硬编码，语言链接固定 `/`；
- `src/components/tools/n-up/NUpPDFTool.tsx:483` — 方向标签写死 `横向/纵向/自动`。

### 修复方案
1. 全部迁入 messages，用当前 `locale` 生成链接（`getPublicPath(path, locale)`）。
2. Footer 语言链接改用当前无 locale 路径，而非固定 `/`。

---

## 九、P3：建立翻译质量 CI

在现有 vitest 基础上新增（可复用已有 `src/__tests__/properties/i18n.property.test.ts`）：

1. **缺失键**：目标语言相对英文缺键即报错；
2. **额外键**：目标语言多余键（防命名空间漂移，能发现 FAQ/contact 问题）；
3. **英文重复值**：目标语言与英文值完全相同则告警；
4. **乱码扫描**：`?` 替换字符、异常 Unicode 检测；
5. **ICU 占位符比对**：同一消息键各语言的 `{var}` 集合须一致（覆盖 N-Up 缺 `{pages}` 问题）。

建议将「可索引页面所用命名空间的翻译覆盖率」设为门禁，而非仅校验消息树完整。

---

## 十、执行顺序与验证闭环

1. 按 P0 → P3 顺序推进，每阶段独立提交、独立验证。
2. 每次改动后运行 `npm run build`，用 `out/` 产物抽查受影响页面（title/description/canonical/robots/正文语言）。
3. 上线后用 `npm run verify-deployment:prod` 与 GSC「网页索引→未编入索引原因」复查，确认 noindex/重复页数量下降、已翻译页开始正常收录。
4. 保留本文档作为修复台账，逐项勾销。

---

## 附：问题 → 文件 → 建议修复 速查表

| 问题 | 关键文件 | 建议动作 |
|---|---|---|
| 英文回退工具页可索引 | `src/lib/seo/indexing-policy.ts` | 删除 HIGH_VALUE 绕过，改用 `hasLocalizedToolContent` |
| metadata 乱码 | `messages/{es,pt,fr,de}.json` | 从原文重写，禁机械替换 `?` |
| FAQ/contact 命名空间错位 | `messages/{ja,ko,fr,pt}.json` + 各 `*PageClient.tsx` | 迁到顶层并翻译 |
| Legal 正文英文 | `privacy|terms|cookies/*PageClient.tsx` | 翻译或限索引 |
| 分类 hub 混合语言 | `tools/category/[category]/page.tsx` | 文案入 messages |
| 共享组件硬编码 | `ToolPage.tsx` / `CookieConsent.tsx` / `Footer.tsx` / `NUpPDFTool.tsx` | 迁入 messages + 用 locale 链接 |
| 翻译质量不可控 | `src/__tests__/` | 新增 5 类 CI 检查 |
