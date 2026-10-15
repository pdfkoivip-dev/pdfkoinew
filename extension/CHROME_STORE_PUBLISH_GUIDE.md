# Chrome Web Store 发布清单

## 📋 发布前准备

### 1. 必需材料 ✅

#### 图标和截图
- [x] **图标文件** (已完成)
  - 16x16px - icon16.png ✅
  - 48x48px - icon48.png ✅
  - 128x128px - icon128.png ✅

- [ ] **应用商店图片** (需要准备)
  - 宣传图片 (Promotional images):
    - 小型宣传图块: 440x280px (必需)
    - 大型宣传图块: 920x680px (推荐)
    - 侯爵: 1400x560px (推荐)
  
- [ ] **屏幕截图** (至少 1 张，最多 5 张)
  - 尺寸: 1280x800px 或 640x400px
  - 格式: JPG 或 PNG
  - 建议截图内容:
    1. 主弹窗界面 (展示工具网格)
    2. 搜索功能演示
    3. 右键菜单展示
    4. 最近使用工具
    5. 主题切换对比

#### 文字内容
- [x] **扩展名称**: PDFkoi - Free PDF Tools ✅
- [x] **简短描述** (132 字符以内): ✅
  ```
  Quick access to 72+ free PDF tools. Merge, split, compress, convert - 100% private, no uploads.
  ```
- [ ] **详细描述** (见下方)
- [x] **类别**: 生产力工具 (Productivity) ✅
- [ ] **语言**: 英语 (可后续添加中文等)

#### 隐私相关
- [ ] **隐私政策 URL**: https://pdfkoi.com/privacy
- [x] **权限说明**: ✅
  - contextMenus: 提供右键菜单功能
  - storage: 保存主题偏好和最近使用工具
  - host_permissions: 仅用于打开 pdfkoi.com

### 2. 开发者账号要求

- [ ] **Google 开发者账号**
  - 一次性注册费: $5 USD
  - 注册地址: https://chrome.google.com/webstore/devconsole
  
### 3. 发布流程

#### Step 1: 打包扩展
```bash
# 创建 ZIP 文件
cd D:\claude\pdfkoi
zip -r pdfkoi-extension-v2.0.0.zip extension/ -x "*.git*" "*node_modules*"
```

#### Step 2: 登录开发者控制台
1. 访问: https://chrome.google.com/webstore/devconsole
2. 使用 Google 账号登录
3. 支付 $5 注册费 (如果首次发布)

#### Step 3: 创建新项目
1. 点击"新建项目"
2. 上传 pdfkoi-extension-v2.0.0.zip
3. 填写商店信息

#### Step 4: 填写商店列表信息
- 上传图标和截图
- 填写描述文本
- 选择类别和语言
- 设置隐私政策链接

#### Step 5: 设置分发选项
- 可见性: 公开 (Public)
- 国家/地区: 所有国家
- 定价: 免费

#### Step 6: 提交审核
- 审核时间: 通常 1-3 个工作日
- 首次发布可能需要更长时间

---

## 📝 详细描述模板

### 英文版 (English)

```
Transform your PDF workflow with PDFkoi - the ultimate browser extension for instant access to 72+ professional PDF tools. 100% free, private, and works entirely in your browser.

🚀 KEY FEATURES

• Smart Search - Find any tool instantly with intelligent keyword matching
• Recently Used - Quick access to your most frequently used tools  
• One-Click Access - All 72+ tools are just a click away
• Dark/Light Theme - Switch themes to match your preference
• Right-Click Integration - Access tools from any webpage's context menu
• Keyboard Shortcuts - Press '/' to search, 'Esc' to close
• Zero Tracking - Completely private, no data collection

🛠️ TOOLS INCLUDED

Popular Tools:
📎 Merge PDF - Combine multiple PDFs into one
✂️ Split PDF - Extract or divide pages
📦 Compress PDF - Reduce file size without quality loss
✏️ Edit PDF - Add text, images, and annotations

Convert Tools (20+):
🖼️ Image to PDF (JPG, PNG, GIF, BMP, TIFF, SVG)
📝 Office to PDF (Word, Excel, PowerPoint)
📄 PDF to Office (Word, Excel, PowerPoint)
📷 PDF to Images (JPG, PNG)
🌐 HTML to PDF & PDF to HTML
📚 eBook formats (EPUB, MOBI)
And more...

Security Tools:
✍️ Sign PDF - Add digital signatures
🔒 Encrypt PDF - Password protect your files
🔓 Unlock PDF - Remove password protection
🖍️ Redact PDF - Black out sensitive information
💧 Watermark PDF - Add custom watermarks

Organization Tools:
🔄 Rotate, Crop, Resize
📑 Extract, Delete, Reorder Pages
🔢 Add Page Numbers
📋 Table of Contents

And 50+ more professional tools!

🔒 PRIVACY FIRST

• No data collection or tracking
• No file uploads to external servers
• All processing happens client-side in your browser
• Open source code you can review
• GDPR compliant

⚡ HOW IT WORKS

1. Click the PDFkoi icon in your browser toolbar
2. Search or browse tools by category
3. Click any tool to open it instantly
4. All your work stays private in your browser

🎨 BEAUTIFUL DESIGN

• Modern, intuitive interface
• Smooth animations and transitions
• Responsive grid layout
• Supports both dark and light themes
• Optimized for speed and efficiency

🌍 TRUSTED BY THOUSANDS

PDFkoi is used by professionals, students, and businesses worldwide. Join our community and supercharge your PDF workflow today!

📖 OPEN SOURCE

Our code is open and transparent. Check it out on GitHub: github.com/pdfkoi/pdfkoi

💡 NEED HELP?

Visit pdfkoi.com for tutorials, FAQs, and support.

---

Made with ❤️ by the PDFkoi Team
100% Free | No Registration | No Hidden Costs
```

### 中文版 (简体中文)

```
PDFkoi - 您的专业 PDF 工具箱，提供 72+ 种免费 PDF 处理工具。100% 免费、隐私保护、浏览器内完成所有操作。

🚀 核心功能

• 智能搜索 - 通过关键词快速找到任何工具
• 最近使用 - 快速访问常用工具
• 一键直达 - 所有 72+ 工具触手可及
• 明暗主题 - 自由切换主题外观
• 右键菜单 - 从任何网页快速访问工具
• 键盘快捷键 - 按 '/' 搜索，'Esc' 关闭
• 零追踪 - 完全隐私，不收集任何数据

🛠️ 包含工具

常用工具：
📎 合并 PDF - 将多个 PDF 合并为一个
✂️ 拆分 PDF - 提取或分割页面
📦 压缩 PDF - 在不损失质量的情况下减小文件大小
✏️ 编辑 PDF - 添加文字、图片和批注

转换工具 (20+)：
🖼️ 图片转 PDF (JPG, PNG, GIF, BMP, TIFF, SVG)
📝 Office 转 PDF (Word, Excel, PowerPoint)
📄 PDF 转 Office (Word, Excel, PowerPoint)
📷 PDF 转图片 (JPG, PNG)
🌐 HTML 转 PDF 及 PDF 转 HTML
📚 电子书格式 (EPUB, MOBI)
以及更多...

安全工具：
✍️ 签名 PDF - 添加数字签名
🔒 加密 PDF - 密码保护文件
🔓 解锁 PDF - 移除密码保护
🖍️ 编辑 PDF - 涂黑敏感信息
💧 水印 PDF - 添加自定义水印

组织工具：
🔄 旋转、裁剪、调整大小
📑 提取、删除、重新排序页面
🔢 添加页码
📋 目录

还有 50+ 种专业工具！

🔒 隐私优先

• 不收集或追踪任何数据
• 不上传文件到外部服务器
• 所有处理都在浏览器客户端完成
• 开源代码，可供审查
• 符合 GDPR 标准

⚡ 使用方法

1. 点击浏览器工具栏中的 PDFkoi 图标
2. 搜索或按类别浏览工具
3. 点击任何工具即可立即打开
4. 所有工作都在浏览器中保持私密

🎨 精美设计

• 现代直观的界面
• 流畅的动画和过渡效果
• 响应式网格布局
• 支持明暗主题
• 速度和效率优化

🌍 受到全球用户信赖

PDFkoi 被全球专业人士、学生和企业使用。立即加入我们的社区，提升您的 PDF 工作流程！

📖 开源项目

我们的代码开放透明。在 GitHub 上查看：github.com/pdfkoi/pdfkoi

💡 需要帮助？

访问 pdfkoi.com 获取教程、常见问题和支持。

---

由 PDFkoi 团队用 ❤️ 制作
100% 免费 | 无需注册 | 无隐藏费用
```

---

## 🎨 宣传图片建议

### 小型宣传图块 (440x280px)
内容建议:
- 背景: PDFkoi 品牌渐变色
- 主元素: 锦鲤 logo
- 文字: "72+ Free PDF Tools"
- 副标题: "100% Private • No Uploads"

### 大型宣传图块 (920x680px)
内容建议:
- 展示弹窗界面截图
- 突出显示主要功能
- 包含品牌 slogan

### 截图建议

1. **主界面截图** (展示所有工具分类)
2. **搜索功能** (输入关键词展示搜索结果)
3. **右键菜单** (在网页上右键展示 PDFkoi 菜单)
4. **主题切换** (明暗主题对比)
5. **最近使用** (展示个性化功能)

---

## ⏱️ 发布时间线

- Day 0: 准备材料 (图片、文本)
- Day 1: 上传并提交审核
- Day 2-4: 等待 Google 审核
- Day 5+: 发布上线！

---

## 📊 发布后优化

### 监控指标
- 安装量
- 用户评分
- 用户评论
- 活跃用户数

### 持续改进
- 根据用户反馈迭代
- 定期更新功能
- 回应用户评论
- 监控性能指标

---

## 🔗 有用链接

- Chrome Web Store 开发者控制台: https://chrome.google.com/webstore/devconsole
- 扩展发布指南: https://developer.chrome.com/docs/webstore/publish
- 最佳实践: https://developer.chrome.com/docs/webstore/best_practices
- 图片要求: https://developer.chrome.com/docs/webstore/images

---

准备好后，运行打包命令并开始发布流程！
