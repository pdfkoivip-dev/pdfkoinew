# Sitemap 部署验证工具

本目录包含用于验证 sitemap 正确部署的自动化工具。

## 问题背景

pdfkoi.com 曾遇到 sitemap 部署截断问题：本地构建生成完整的 sitemap（200+ URLs），但部署到 Cloudflare Pages 后被截断为仅 1 个 URL。这导致 Google Search Console 报告大量索引错误。

## 验证工具

### 1. 单元测试 (`src/__tests__/sitemap.validation.test.ts`)

**用途**: 在本地构建时验证 sitemap 生成逻辑

**运行方式**:
```bash
npm test sitemap.validation
```

**检查项**:
- 每个语言的 sitemap 至少包含 10 个 URL
- 英语 sitemap 至少包含 100 个 URL
- 所有语言都包含首页
- 非英语语言的 URL 数量不超过英语

### 2. 部署验证脚本 (`scripts/verify-deployment.mjs`)

**用途**: 验证线上部署的 sitemap 是否完整

**运行方式**:
```bash
# 验证生产环境
npm run verify-deployment:prod

# 验证自定义 URL
npm run verify-deployment -- --url https://your-domain.com

# 或直接运行
node scripts/verify-deployment.mjs --url https://pdfkoi.com
```

**检查项**:
- 主 sitemap 索引文件 (`/sitemap.xml`) 是否包含所有语言
- 每个语言的 sitemap 是否可访问
- 每个 sitemap 的 URL 数量是否达到预期阈值

**输出示例**:
```
🔍 Verifying sitemap deployment for https://pdfkoi.com

Checking main sitemap index...
✅ Main sitemap: OK

Checking locale-specific sitemaps...

✅ en    : 209 URLs
✅ ja    : 156 URLs
✅ ko    : 134 URLs
✅ es    : 178 URLs
✅ fr    : 145 URLs
❌ de    : 1 URLs (expected at least 10)
✅ zh    : 167 URLs
✅ zh-tw : 123 URLs
✅ pt    : 142 URLs

==================================================

❌ Deployment verification FAILED

Possible causes:
  1. Cloudflare cache not cleared
  2. Build script execution order issue
  3. Sitemap files not uploaded correctly

Recommended actions:
  1. Clear Cloudflare cache (Purge Everything)
  2. Trigger a new deployment
  3. Check build logs for errors
```

### 3. GitHub Actions 自动验证 (`.github/workflows/verify-deployment.yml`)

**用途**: 每次部署成功后自动验证 sitemap

**触发条件**: Cloudflare Pages 部署成功后

**行为**:
- 等待 60 秒让部署传播
- 运行 `verify-deployment.mjs`
- 如果验证失败，在 commit 上添加评论提醒

## 修复措施

### 防止缓存问题 (`public/_headers`)

已添加 sitemap 专用的缓存控制头:

```
/sitemap.xml
  Cache-Control: public, max-age=0, must-revalidate
  X-Robots-Tag: noindex

/sitemap/*.xml
  Cache-Control: public, max-age=0, must-revalidate
  X-Robots-Tag: noindex
```

这确保:
- Sitemap 文件不会被 CDN 缓存
- 搜索引擎每次都能获取最新版本
- Sitemap 本身不会被搜索引擎索引

## 使用流程

### 开发阶段

1. 修改 sitemap 生成逻辑后，运行单元测试:
   ```bash
   npm test sitemap.validation
   ```

2. 本地构建验证:
   ```bash
   npm run build
   # 检查 out/sitemap/ 目录下的文件
   ```

### 部署后验证

1. 部署完成后，手动验证:
   ```bash
   npm run verify-deployment:prod
   ```

2. 或等待 GitHub Actions 自动验证（约 1-2 分钟）

3. 如果验证失败:
   - 登录 Cloudflare Pages 控制台
   - 清除所有缓存 (Purge Everything)
   - 触发重新部署
   - 再次运行验证脚本

### 持续监控

建议每周运行一次验证脚本，确保 sitemap 保持完整:

```bash
# 添加到 cron job 或定期任务
npm run verify-deployment:prod
```

## 故障排查

### 问题: 验证脚本报告 URL 数量不足

**可能原因**:
1. Cloudflare 缓存了旧版本
2. 构建脚本执行顺序问题
3. 文件上传不完整

**解决步骤**:
1. 清除 Cloudflare 缓存
2. 检查 Cloudflare Pages 构建日志
3. 验证 `next build` 输出的 `out/sitemap/` 目录
4. 检查 `scripts/mirror-default-locale-export.mjs` 是否影响了 sitemap 文件

### 问题: GitHub Actions 验证失败

**可能原因**:
1. 部署传播延迟（60 秒可能不够）
2. Cloudflare 部署状态报告不准确

**解决步骤**:
1. 手动运行验证脚本确认
2. 如果手动验证通过，可能是时间问题，忽略 Actions 失败
3. 考虑增加 Actions 中的等待时间

## 相关文档

- [SEO 诊断报告](../SEO-DIAGNOSIS-REPORT.md) - 完整的问题分析和修复方案
- [Sitemap 生成逻辑](../src/app/sitemap.ts) - sitemap 生成的核心代码
- [索引策略](../src/lib/seo/indexing-policy.ts) - 决定哪些页面应该被索引

## 维护说明

### 更新阈值

如果网站内容增加，需要更新验证阈值:

1. **单元测试** (`src/__tests__/sitemap.validation.test.ts`):
   ```typescript
   expect(count).toBeGreaterThan(10);  // 修改这个数字
   ```

2. **验证脚本** (`scripts/verify-deployment.mjs`):
   ```javascript
   const minExpected = locale === 'en' ? 100 : 10;  // 修改这些数字
   ```

### 添加新语言

如果添加新语言支持:

1. 更新 `scripts/verify-deployment.mjs` 中的 `locales` 数组
2. 运行测试确保新语言被正确验证

## 技术细节

### 为什么需要这些工具？

Next.js 静态导出 + Cloudflare Pages 的组合可能导致文件上传不完整。这些工具提供：

1. **早期检测**: 在本地构建时就发现问题
2. **部署验证**: 确保线上版本与本地一致
3. **持续监控**: 防止问题再次发生

### 工具设计原则

1. **零依赖**: 验证脚本只使用 Node.js 内置模块
2. **快速失败**: 一旦发现问题立即报告
3. **可操作**: 提供明确的修复建议
4. **自动化**: 集成到 CI/CD 流程中
