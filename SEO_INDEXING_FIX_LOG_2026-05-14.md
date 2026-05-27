# PDFkoi 索引问题全局修复留档（2026-05-14）

## 一、问题背景
GSC 报告“已抓取 - 尚未编入索引”样本 19 条，其中包含：
- 可索引 200 页面
- 404 页面
- 规范化重定向页面
- 非 HTML 资源（manifest）

若按单 URL 修补，容易造成“越改越多”。本次改为全局策略治理。

## 二、线上实测分类结论
### 失败样本
1. `/tools/rasterize-pdf/` -> 200 + index + canonical 自身（可索引）
2. `/pt/tools/rasterize-pdf/` -> 404 + noindex（非重定向）

### 待定样本（按类型）
- **indexable_200**：如 `/zh/tools/add-attachments/`、`/es/tools/organize-pdf/`、`/ja/tools/rtf-to-pdf/`
- **intentional_404**：如 `/ko/tools/sanitize-pdf/`、`/es/tools/rtf-to-pdf/`、`/ko/tools/markdown-to-pdf/`、`/zh-tw/tools/font-to-outline/`
- **canonical_redirect**：如 `/tools/pdf-to-docx`、`/en/tools/jpg-to-pdf`
- **non_html_resource**：`/manifest.webmanifest`

## 三、本次代码改动（全局）

### 1) 让缺失本地化工具页可静态生成（避免线上404）
- 文件：`src/lib/seo/indexing-policy.ts`
- 变更：
  - `shouldGenerateLocalizedToolPage` 调整为始终 `true`（用于静态生成覆盖）
  - `shouldIndexLocalizedToolPage` 保持“仅默认语言或有本地化内容时可索引”
  - `getToolPublicLocale` 改为基于 `shouldIndexLocalizedToolPage` 判断 canonical 公开语言

> 结果：路由可访问性与索引性解耦，避免“页面不存在(404)”导致长期抓取噪音。

### 2) sitemap 继续仅收录可索引工具页
- 文件：`src/app/sitemap.ts`
- 变更：工具页入 sitemap 的条件改为：
  - `shouldGenerateLocalizedToolPage(...) && shouldIndexLocalizedToolPage(...)`

> 结果：即便页面生成了，非索引页面也不会进入 sitemap。

### 3) 调整既有测试以匹配“可生成但不收录”新策略
- 文件：`src/__tests__/properties/sitemap.property.test.ts`
- 变更：
  - 引入 `shouldIndexLocalizedToolPage`
  - 将“生成策略为false”改为“生成策略true但索引策略false”的断言
  - 保持对 sitemap 不收录非索引工具页的断言

### 4) 新增 GSC 样本分类测试护栏
- 新增：`src/__tests__/fixtures/gsc-indexing-samples.ts`
  - 维护 19 条样本及分类：`indexable_200` / `canonical_redirect` / `intentional_404` / `non_html_resource`
- 新增：`src/__tests__/properties/gsc-indexing-classification.property.test.ts`
  - 验证分类与当前站点策略一致，防止未来回归

## 四、验证结果

### 测试
- `npm run test -- src/__tests__/properties/seo.property.test.ts` ✅
- `npm run test -- src/__tests__/properties/sitemap.property.test.ts` ✅
- `npm run test -- src/__tests__/properties/gsc-indexing-classification.property.test.ts` ✅

### 构建
- `npm run build` ✅
- `out/functions` 存在且完整 ✅

## 五、预期效果
1. `pt/tools/rasterize-pdf/` 这类缺失本地化工具页将不再依赖 404 路径作为“存在性”表达。
2. sitemap 仍保持干净，仅保留可索引 URL。
3. GSC 样本将按类型稳定收敛，不再因局部修补引发扩散。

## 六、后续复验建议
1. 部署后优先在 GSC 对失败2条重新“请求编入索引”。
2. 7~14 天观察，不看总数，按类型看趋势：
   - indexable_200 是否进入已编入索引
   - canonical_redirect 是否逐步从问题样本中减少
   - non_html_resource 不再与网页索引混淆

## 七、404 报告（30条）二次全量复验结果（2026-05-14 夜间）
### 1) 线上首跳状态结论
- 本轮对 GSC 新报“未找到（404）”30条逐条首跳复验：
  - **29 条为 200（可访问）**
  - **1 条为 301 规范化重定向**：`/zh-TW/` -> `/zh-tw/`
- 该批次不再表现为“同构的实时404故障”，而是**历史样本 + 规范化样本 + 抓取滞后**混合。

### 2) 代码护栏补充
- 文件：`src/__tests__/fixtures/gsc-indexing-samples.ts`
- 新增样本：`/zh-TW/` -> `canonical_redirect`
- 目的：把大小写 locale 规范化重定向纳入回归样本，避免后续误判成 404 回归。

### 3) 处理策略
- 不对现有路由做激进改动（避免全局副作用）。
- 继续保持：
  - 页面可访问性与索引资格解耦；
  - sitemap 仅收录可索引 canonical URL；
  - 规范化路径通过重定向收敛。

### 4) GSC 操作建议（本轮）
1. 对 30 条中的典型 URL 先做 URL 检查，确认 Google 看到的是最新首跳状态。
2. 对已是 200 的 URL 走”请求编入索引”；对 `/zh-TW/` 走”验证修复”（其本质是 canonical 规范化）。
3. 观察 7~14 天，仅按分类看收敛，不按总量做即时结论。

---

## 八、noindex 问题修复（2026-05-28）

### 1) 问题背景
GSC 新报告”被'noindex'标记排除了”97 条（85 pending + 12 failed），包括：
- `/es/about/`
- `/pt/tools/xps-to-pdf/`
- `/ko/tools/extract-images/`
- 等高价值语言的工具页和静态页

根本原因：当前策略仅对”有本地化内容”的工具页可索引，导致大量高价值语言页面被 noindex。

### 2) 解决方案：方案C - 选择性扩大
**策略**：将所有支持的语言（es, de, fr, pt, ja, ko, zh, zh-TW）定义为高价值语言，允许工具页即使没有本地化内容也可索引。静态页（about/privacy/cookies）保持仅英文可索引。

### 3) 代码改动

#### a) 定义高价值语言列表
文件：`src/lib/seo/indexing-policy.ts`
```typescript
const HIGH_VALUE_TOOL_LOCALES = new Set<Locale>(['es', 'de', 'fr', 'pt', 'ja', 'ko', 'zh', 'zh-TW']);
```

#### b) 修改索引策略
```typescript
export function shouldIndexLocalizedToolPage(locale: Locale, toolId: string): boolean {
  if (locale === defaultLocale) {
    return true;
  }
  // 高价值语言即使没有本地化内容也可索引
  if (HIGH_VALUE_TOOL_LOCALES.has(locale)) {
    return true;
  }
  return hasLocalizedToolContent(locale, toolId);
}

export function getToolPublicLocale(locale: Locale, toolId: string): Locale {
  // 高价值语言保持自身作为公开语言（自引用 canonical）
  if (locale === defaultLocale || HIGH_VALUE_TOOL_LOCALES.has(locale)) {
    return locale;
  }
  return hasLocalizedToolContent(locale, toolId) ? locale : defaultLocale;
}
```

#### c) 更新测试期望
- `src/__tests__/properties/seo.property.test.ts`：
  - 更新”tool metadata noindexes untranslated locale fallbacks”测试，期望 pt 可索引
  - 拆分”reported GSC 404 locale-tool combinations”测试为高价值和非高价值两部分
  - 重命名”former redirect-only samples”测试，期望高价值语言自引用 canonical

- `src/__tests__/properties/sitemap.property.test.ts`：
  - 更新”excludes only tool locales”测试，期望 pt/email-to-pdf 包含在 sitemap
  - 从”keeps reported GSC redirect samples”中移除 es/tools/rtf-to-pdf（现在可索引）
  - 重命名”keeps reported GSC 404”测试为”includes high-value locale-tool combinations”

### 4) 验证结果
- ✅ SEO 属性测试：28 个测试全部通过
- ✅ Sitemap 属性测试：16 个测试全部通过
- ✅ 生产构建：成功生成 1032 个静态页面（包括 855 个工具页）

### 5) 预期效果
1. 12 条失败 URL 将变为可索引（robots: index, follow）
2. 85 条待定 URL 中的高价值语言页面将被 Google 索引
3. Sitemap 将包含所有高价值语言的工具页
4. 静态页（about/privacy/cookies）继续保持仅英文可索引

### 6) 后续操作
1. 部署后在 GSC 对 12 条失败 URL 执行”请求编入索引”
2. 7~14 天后观察索引收录情况
3. 监控 GSC 报告中 noindex 排除数量的下降趋势
