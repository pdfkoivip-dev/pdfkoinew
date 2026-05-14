# PDFkoi 重定向修复留档（2026-05-14）

## 背景
Google Search Console 在“网页会自动重定向”验证中持续失败，典型失败样本：
- `/zh-tw/tools/markdown-to-pdf/`
- `/ja/tools/markdown-to-pdf/`
- `/ko/tools/pdf-to-svg/`

## 根因
Cloudflare Pages Functions 的 `functions/_lib/locale-redirects.js` 中存在 `MISSING_LOCALIZED_TOOL_CANONICALS` 硬编码映射，导致缺失本地化工具页被统一 301 到英文页。

这与当前应用层 SEO 策略重复：
- 缺失本地化内容时，页面已可回退英文内容；
- 同时 metadata 输出 `noindex` 且 canonical 指向英文页；
- 因此无需函数层再做 301。

## 本次修改
### 1) 移除函数层缺失本地化工具页 301
- 文件：`functions/_lib/locale-redirects.js`
- 变更：删除 `MISSING_LOCALIZED_TOOL_CANONICALS` 映射及其命中分支。

### 2) 更新重定向测试
- 文件：`src/__tests__/lib/locale-redirects.test.ts`
- 变更：
  - 原先断言“缺失本地化工具 URL 会 301 到英文”改为：
  - 断言“缺失本地化工具 URL 在函数层不重定向（返回 null）”。

### 3) 增补 SEO 行为测试
- 文件：`src/__tests__/properties/seo.property.test.ts`
- 新增测试：`former redirect-only samples now resolve as noindex english-canonical metadata targets`
- 覆盖点：
  - `/zh-TW/tools/markdown-to-pdf/`
  - `/ja/tools/markdown-to-pdf/`
  - `/ko/tools/pdf-to-svg/`
- 断言：
  - `hasLocalizedToolContent(locale, toolId) === false`
  - `shouldIndexLocalizedToolPage(...) === false`
  - metadata `robots.index === false`
  - canonical 指向英文工具页
  - hreflang 不包含该缺失本地化 locale

## 未改动（保持原策略）
- `/en/* -> /*` 的 canonical 归一化重定向
- `/zh-TW* -> /zh-tw*` 的大小写归一化重定向
- 默认仅英文索引页面（如隐私、cookies、长尾落地页）的 canonical 回收规则

## 验证结果
已通过：
- `npm run test -- src/__tests__/lib/locale-redirects.test.ts`
- `npm run test -- src/__tests__/properties/seo.property.test.ts`
- `npm run test -- src/__tests__/properties/sitemap.property.test.ts`
- `npm run build`

构建后确认：
- `out/functions` 已存在并包含 Functions 产物（`[[path]].js`, `tools.js`, `_lib`, `[locale]`）。

## 预期线上效果
- 上述 3 条失败样本不再由 Functions 返回 301；
- 将改为应用层处理（200 + noindex + canonical 英文）；
- GSC 的“网页会自动重定向”样本应逐步减少（通常 7~14 天观察窗口）。

## 后续建议
1. 部署后用 URL 检查工具对失败样本重新抓取。
2. 在 GSC 对本问题重新“验证修复”。
3. 若后续仍有新增 redirect 样本，优先排查是否来自外部历史链接，而非站内链接生成。