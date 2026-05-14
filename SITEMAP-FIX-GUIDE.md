# Sitemap 部署问题 - 快速修复指南

## 问题症状

- Google Search Console 报告大量"已抓取 - 尚未编入索引"
- 线上 sitemap 文件 URL 数量远少于预期
- 例如: `/sitemap/de.xml` 只有 1 个 URL，但应该有 200+ 个

## 立即修复步骤

### 1. 验证问题是否存在

```bash
npm run verify-deployment:prod
```

如果看到类似输出，说明问题存在:
```
❌ de    : 1 URLs (expected at least 10)
❌ fr    : 1 URLs (expected at least 10)
```

### 2. 清除 Cloudflare 缓存

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 选择 pdfkoi.com 项目
3. 进入 "Caching" → "Configuration"
4. 点击 "Purge Everything"
5. 确认清除

### 3. 触发重新部署

**方法 A: 通过 GitHub (推荐)**
```bash
git commit --allow-empty -m "chore: trigger redeploy to fix sitemap"
git push
```

**方法 B: 通过 Cloudflare Pages 控制台**
1. 进入 Cloudflare Pages 项目
2. 找到最新的部署
3. 点击 "Retry deployment"

### 4. 等待并验证

```bash
# 等待 2-3 分钟让部署完成
sleep 180

# 验证修复结果
npm run verify-deployment:prod
```

预期输出:
```
✅ en    : 113 URLs
✅ ja    : 94 URLs
✅ ko    : 62 URLs
✅ es    : 84 URLs
✅ fr    : 83 URLs
✅ de    : 69 URLs
✅ zh    : 99 URLs
✅ zh-tw : 99 URLs
✅ pt    : 53 URLs

✅ Deployment verification PASSED
```

### 5. 重新提交 Sitemap 到 Google

1. 登录 [Google Search Console](https://search.google.com/search-console)
2. 选择 pdfkoi.com 属性
3. 进入 "索引" → "站点地图"
4. 删除所有现有 sitemap
5. 添加新 sitemap: `https://pdfkoi.com/sitemap.xml`
6. 点击"提交"

## 如果问题仍然存在

### 检查构建日志

1. 进入 Cloudflare Pages 控制台
2. 查看最新部署的构建日志
3. 搜索 "sitemap" 相关输出
4. 检查是否有错误或警告

### 本地构建验证

```bash
# 清理旧构建
rm -rf out .next

# 完整构建
npm run build

# 检查生成的 sitemap 文件
ls -lh out/sitemap/

# 查看某个 sitemap 的 URL 数量
grep -o "<url>" out/sitemap/de.xml | wc -l
```

预期输出:
```
out/sitemap/
├── de.xml      (应该包含 60+ URLs)
├── en.xml      (应该包含 100+ URLs)
├── es.xml      (应该包含 80+ URLs)
├── fr.xml      (应该包含 80+ URLs)
├── ja.xml      (应该包含 90+ URLs)
├── ko.xml      (应该包含 60+ URLs)
├── pt.xml      (应该包含 50+ URLs)
├── zh-tw.xml   (应该包含 90+ URLs)
└── zh.xml      (应该包含 90+ URLs)
```

### 检查构建脚本

确认 `package.json` 中的构建命令正确:

```json
"build": "next build && node scripts/mirror-default-locale-export.mjs && node scripts/copy-functions.mjs"
```

这个顺序很重要:
1. `next build` - 生成静态文件和 sitemap
2. `mirror-default-locale-export.mjs` - 复制 /en/ 到根目录
3. `copy-functions.mjs` - 复制 Cloudflare Functions

### 联系支持

如果以上步骤都无法解决问题，可能是 Cloudflare Pages 的 bug:

1. 收集以下信息:
   - 本地构建的 sitemap 文件大小
   - 线上 sitemap 文件大小
   - 构建日志截图
   - 验证脚本输出

2. 在 Cloudflare Community 提问:
   https://community.cloudflare.com/c/developers/pages/

## 预防措施

### 自动化验证

已添加 GitHub Actions 自动验证，每次部署后会自动检查 sitemap。

如果验证失败，会在 commit 上添加评论提醒。

### 定期检查

建议每周运行一次验证:

```bash
npm run verify-deployment:prod
```

或添加到 cron job:

```bash
# 每周一早上 9 点检查
0 9 * * 1 cd /path/to/pdfkoi && npm run verify-deployment:prod
```

### 监控 Google Search Console

定期检查 GSC 的索引覆盖率:

1. 进入 "索引" → "网页"
2. 查看"未编入索引"的原因
3. 如果看到大量"已抓取 - 尚未编入索引"，可能是 sitemap 问题

## 预期恢复时间

- **立即**: Sitemap 文件修复
- **1-3 天**: Google 开始重新抓取
- **7-14 天**: 索引覆盖率开始改善
- **30 天**: 达到稳定状态

## 相关文档

- [完整诊断报告](../SEO-DIAGNOSIS-REPORT.md)
- [验证工具说明](./README.md)
- [Sitemap 生成代码](../src/app/sitemap.ts)

## 常见问题

**Q: 为什么本地构建正常，但部署后 sitemap 被截断？**

A: 可能的原因:
1. Cloudflare 缓存了旧版本
2. 构建脚本执行顺序问题
3. 文件上传过程中被截断

**Q: 清除缓存后还是不行怎么办？**

A: 尝试:
1. 等待更长时间（5-10 分钟）
2. 使用 Cloudflare API 清除特定文件缓存
3. 检查 Cloudflare Pages 的构建设置

**Q: 验证脚本报告 HTTP 404 怎么办？**

A: 检查:
1. URL 是否正确
2. 部署是否真的完成
3. Cloudflare Pages 的自定义域名设置

**Q: 需要修改代码吗？**

A: **不需要**。代码层面的 SEO 配置完全正确，问题在部署层面。只需要清除缓存和重新部署即可。
