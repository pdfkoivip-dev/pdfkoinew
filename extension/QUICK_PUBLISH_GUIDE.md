# 🚀 Chrome Web Store 发布快速指南

## ✅ 发布前检查清单

### 文件准备完成

- [x] **扩展包**: `pdfkoi-extension-v2.0.0.zip` (52.7 KB) ✅
- [x] **图标**: icon16.png, icon48.png, icon128.png ✅
- [x] **宣传图片**: ✅
  - promo-small-tile-440x280.png
  - promo-large-tile-920x680.png
  - promo-marquee-1400x560.png
- [ ] **截图**: 需要 1-5 张 (1280x800px 或 640x400px)

### 需要准备的截图

建议截图内容:
1. **主弹窗界面** - 展示所有工具分类
2. **搜索功能演示** - 输入关键词显示搜索结果
3. **右键菜单** - 在网页上右键展示 PDFkoi 工具
4. **最近使用功能** - 展示个性化追踪
5. **主题切换** - 明暗主题对比图

### 文字内容

- [x] **名称**: PDFkoi - Free PDF Tools ✅
- [x] **简短描述**: Quick access to 72+ free PDF tools. Merge, split, compress, convert - 100% private, no uploads. ✅
- [x] **详细描述**: 见 CHROME_STORE_PUBLISH_GUIDE.md ✅
- [x] **分类**: Productivity (生产力) ✅

### 账号准备

- [ ] **Google 开发者账号**
  - 注册费: $5 USD (一次性)
  - 注册地址: https://chrome.google.com/webstore/devconsole

### 隐私政策

- [ ] **隐私政策页面**: 需要在 pdfkoi.com 上创建
  - URL: https://pdfkoi.com/privacy
  - 必须说明:
    - 收集哪些数据 (我们的情况: 零数据收集)
    - 如何使用数据
    - 第三方服务 (无)
    - 用户权利

---

## 📋 发布步骤

### Step 1: 登录开发者控制台

1. 访问: https://chrome.google.com/webstore/devconsole
2. 使用 Google 账号登录
3. 如果首次发布,支付 $5 注册费

### Step 2: 创建新项目

1. 点击 **"新建项目"** (New Item)
2. 点击 **"选择文件"** (Choose file)
3. 上传 `pdfkoi-extension-v2.0.0.zip`
4. 点击 **"上传"** (Upload)

### Step 3: 填写商店列表 (Store Listing)

#### 产品详情 (Product Details)

```
名称: PDFkoi - Free PDF Tools

简短描述 (132 字符):
Quick access to 72+ free PDF tools. Merge, split, compress, convert - 100% private, no uploads.

详细描述:
[复制 CHROME_STORE_PUBLISH_GUIDE.md 中的英文描述]

类别: Productivity

语言: English (可后续添加其他语言)
```

#### 图标和图片 (Icon & Images)

1. **图标**: 
   - 已包含在 ZIP 中,自动识别 ✅

2. **截图** (至少 1 张,最多 5 张):
   - 上传准备好的 1280x800 或 640x400 截图
   - 建议上传 3-5 张展示不同功能

3. **小型宣传图块** (必需):
   - 上传 `promo-small-tile-440x280.png`

4. **大型宣传图块** (推荐):
   - 上传 `promo-large-tile-920x680.png`

5. **侯爵宣传图** (推荐):
   - 上传 `promo-marquee-1400x560.png`

#### 隐私实践 (Privacy Practices)

```
单一用途: 提供 PDF 工具快速访问

权限理由:
- contextMenus: 在右键菜单中添加 PDF 工具快速访问
- storage: 保存用户主题偏好和最近使用的工具
- host_permissions (pdfkoi.com): 打开 PDFkoi 网站上的工具页面

隐私政策: https://pdfkoi.com/privacy

数据使用:
- 不收集任何用户数据
- 不追踪用户行为
- 所有偏好设置仅本地存储
```

### Step 4: 设置分发 (Distribution)

```
可见性: Public (公开)
国家/地区: 在所有国家/地区分发
定价: 免费
```

### Step 5: 提交审核

1. 检查所有信息
2. 点击 **"提交审核"** (Submit for Review)
3. 等待 Google 审核 (通常 1-3 个工作日)

---

## 📸 快速截图指南

### 方法 1: 使用 Chrome DevTools

1. 打开扩展弹窗
2. 按 F12 打开开发者工具
3. 切换到设备模式
4. 设置尺寸为 640x400
5. 截图保存

### 方法 2: 使用截图工具

1. 打开扩展弹窗
2. 使用 Windows 截图工具 (Win + Shift + S)
3. 在图片编辑器中调整为 1280x800 或 640x400

### 建议截图内容

**截图 1: 主界面**
- 打开弹窗,展示所有工具分类
- 确保 logo 和所有工具可见

**截图 2: 搜索功能**
- 在搜索框输入 "compress" 或 "merge"
- 展示搜索结果下拉列表

**截图 3: 右键菜单**
- 在任意网页右键
- 展开 "PDFkoi Tools" 菜单树

**截图 4: 最近使用**
- 使用几个工具后
- 展示"最近使用"部分

**截图 5: 主题切换**
- 并排展示明暗主题
- 或制作一张对比图

---

## ⏱️ 预期时间线

```
Day 0:  准备所有材料 (截图、隐私政策)
Day 1:  提交到 Chrome Web Store
Day 2-4: Google 审核中
Day 5+: 发布上线! 🎉
```

---

## 📊 审核常见问题

### 可能被拒绝的原因

1. **权限过多**: 我们的权限都有明确用途 ✅
2. **隐私政策缺失**: 需要创建隐私政策页面 ⚠️
3. **截图不清晰**: 确保截图清晰,展示实际功能 
4. **描述误导**: 我们的描述准确真实 ✅
5. **功能不完整**: 扩展功能完整可用 ✅

### 如果被拒绝

1. 查看拒绝原因邮件
2. 根据要求修改
3. 重新提交
4. 通常第二次会更快通过

---

## 🎯 发布后任务

### 立即任务

- [ ] 在 pdfkoi.com 添加"安装扩展"按钮
- [ ] 在 GitHub README 添加 Chrome Web Store 徽章
- [ ] 在社交媒体宣布发布
- [ ] 回应早期用户评论

### 持续任务

- [ ] 监控用户评分和评论
- [ ] 收集用户反馈
- [ ] 定期更新扩展
- [ ] 跟踪安装量和活跃用户

---

## 🔗 有用链接

- **开发者控制台**: https://chrome.google.com/webstore/devconsole
- **发布文档**: https://developer.chrome.com/docs/webstore/publish
- **政策指南**: https://developer.chrome.com/docs/webstore/program-policies
- **最佳实践**: https://developer.chrome.com/docs/webstore/best_practices

---

## 💡 成功提示

1. ✅ **准确的描述**: 不要夸大功能
2. ✅ **清晰的截图**: 展示真实使用场景
3. ✅ **隐私透明**: 明确说明不收集数据
4. ✅ **快速响应**: 及时回应用户评论
5. ✅ **持续更新**: 定期修复 bug 和添加功能

---

准备好后,访问 Chrome Web Store 开发者控制台开始发布!

**需要帮助?**
- 查看 CHROME_STORE_PUBLISH_GUIDE.md 获取更多详情
- 参考 Chrome 官方文档
- 联系 PDFkoi 团队
