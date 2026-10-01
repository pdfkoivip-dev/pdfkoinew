# PDFKoi Pinterest 账号设置清单

## 第一阶段：账号创建与基础设置

### 1. 账号注册（Day 1）

- [ ] 使用品牌邮箱注册 Pinterest 商业账号
  - 邮箱建议：`social@pdfkoi.com` 或 `marketing@pdfkoi.com`
  - 网址：https://business.pinterest.com/

- [ ] 选择账号类型
  - 选择 "Business" 账号（可查看分析数据）
  - 不要选个人账号

- [ ] 填写基本信息
  - **账号名称**：`PDFKoi` 或 `PDFKoi - Free PDF Tools`
  - **邮箱**：品牌邮箱
  - **密码**：强密码，存储在密码管理器
  - **年龄**：如实填写

### 2. 个人资料设置（Day 1）

- [ ] 上传头像
  - 使用 PDFKoi Logo
  - 尺寸：165 x 165 px
  - 格式：PNG（透明背景）
  - 确保 Logo 在小尺寸下清晰可辨

- [ ] 编写简介（About）
  ```
  🔒 Free, private, browser-based PDF tools
  ✅ 95+ tools: merge, compress, convert, edit
  💡 100% client-side processing - your files never leave your device

  👉 Try free: https://pdfkoi.devtoolcafe.com
  ```

- [ ] 设置网站链接
  - 主域名：`https://pdfkoi.devtoolcafe.com`
  - 验证网站所有权（添加 HTML 文件或 meta 标签）

- [ ] 设置语言和地区
  - 语言：英语（或目标市场语言）
  - 地区：目标用户主要地区

### 3. 商业账号验证（Day 1）

- [ ] 验证网站
  - 方法 1：在网站根目录上传 HTML 文件
  - 方法 2：在 `<head>` 添加 meta 标签
  - 方法 3：添加 DNS 记录（需要域名控制权）

- [ ] 安装 Pinterest Tag（可选，用于转化追踪）
  - 在网站添加 Pinterest Tag 代码
  - 追踪事件：`pagevisit`, `signup`, `lead`

- [ ] 申请 Rich Pins
  - 申请网址：https://developers.pinterest.com/tools/url-debugger/
  - 输入网站 URL 验证
  - 等待审核（通常 1-2 天）

---

## 第二阶段：内容架构搭建

### 4. Board 创建（Day 2）

创建以下主题 Board（按优先级排序）：

- [ ] **PDF Tutorials**（PDF 教程）
  - 描述：Step-by-step guides for PDF tasks - merge, compress, convert, edit
  - 封面：教程类 Pin

- [ ] **Office Productivity Tips**（办公效率技巧）
  - 描述：Boost your productivity with PDF tools and office hacks
  - 封面：效率类 Pin

- [ ] **Student Life Hacks**（学生技能）
  - 描述：Essential PDF skills for students - thesis, notes, assignments
  - 封面：学生场景 Pin

- [ ] **PDF Security & Privacy**（PDF 安全与隐私）
  - 描述：Protect your documents with encryption, passwords, and privacy-first tools
  - 封面：安全类 Pin

- [ ] **PDFKoi Tools**（产品展示）
  - 描述：Explore 95+ free PDF tools - all browser-based, all private
  - 封面：产品展示 Pin

- [ ] **Workflow Automation**（工作流自动化）
  - 描述：Automate PDF processing with visual workflow editor
  - 封面：工作流编辑器 Pin

### 5. Board SEO 优化（Day 2）

每个 Board 都需要优化关键词：

- [ ] Board 标题包含关键词
  - 示例：`PDF Tutorials - Merge, Compress, Convert`
  - 不要只写 "Tutorials"

- [ ] Board 描述包含关键词
  - 自然融入 3-5 个关键词
  - 不要堆砌

- [ ] 选择正确的 Board 类别
  - Technology / Education / Design

- [ ] Board 封面 Pin 要有吸引力
  - 选择表现最好的 Pin 作为封面

---

## 第三阶段：网站 Pinterest 优化

### 6. 添加 Pinterest 元数据（Day 3）

在每个工具页面添加以下代码：

#### Open Graph 标签（必须）
```html
<meta property="og:title" content="Merge PDF - Free Online Tool | PDFKoi" />
<meta property="og:description" content="Combine multiple PDFs into one document in seconds. 100% private, browser-based processing. No upload required." />
<meta property="og:image" content="https://pdfkoi.devtoolcafe.com/images/og/merge-pdf.png" />
<meta property="og:url" content="https://pdfkoi.devtoolcafe.com/merge-pdf" />
<meta property="og:type" content="website" />
```

#### Pinterest 专用标签（推荐）
```html
<meta property="og:site_name" content="PDFKoi" />
<meta name="pinterest" content="nopin" description="Sorry, this page cannot be pinned." />
```

#### Rich Pins 元数据（Article/Product）
```html
<meta property="article:published_time" content="2024-01-15T08:00:00+00:00" />
<meta property="article:author" content="PDFKoi Team" />
<meta property="article:section" content="PDF Tools" />
<meta property="article:tag" content="PDF" />
<meta property="article:tag" content="Merge PDF" />
<meta property="article:tag" content="Free Tool" />
```

### 7. 创建 Pinterest 友好图片（Day 3-5）

为每个核心工具页面创建 Pinterest 专用图片：

- [ ] 图片规格
  - 尺寸：1000 x 1500 px（2:3 比例）
  - 格式：PNG 或 JPG
  - 存储路径：`/public/images/pinterest/`

- [ ] 图片命名规范
  ```
  pinterest-[tool-name].png

  示例：
  - pinterest-merge-pdf.png
  - pinterest-compress-pdf.png
  - pinterest-image-to-pdf.png
  ```

- [ ] 优先创建的图片（Top 20 工具）
  1. merge-pdf
  2. compress-pdf
  3. image-to-pdf
  4. split-pdf
  5. pdf-to-jpg
  6. edit-pdf
  7. sign-pdf
  8. pdf-to-word
  9. word-to-pdf
  10. encrypt-pdf
  11. ocr-pdf
  12. pdf-to-png
  13. add-watermark
  14. rotate-pdf
  15. pdf-to-excel
  16. extract-pages
  17. organize-pdf
  18. pdf-to-powerpoint
  19. heic-to-pdf
  20. pdf-to-pdf-a

### 8. 添加 Pin It 按钮（Day 5）

#### 方式 1：Pinterest 官方按钮
```html
<a
  data-pin-do="buttonPin"
  data-pin-tall="true"
  data-pin-round="true"
  data-pin-save="true"
  href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fpdfkoi.devtoolcafe.com%2Fmerge-pdf&media=https%3A%2F%2Fpdfkoi.devtoolcafe.com%2Fimages%2Fpinterest%2Fmerge-pdf.png&description=Merge%20PDF%20-%20Free%20Online%20Tool%20%7C%20PDFKoi"
>
  Pin It
</a>
<script async defer src="//assets.pinterest.com/js/pinit.js"></script>
```

#### 方式 2：自定义按钮（推荐）
```html
<button
  class="pinterest-share-btn"
  onclick="window.open('https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(window.location.href) + '&media=' + encodeURIComponent('https://pdfkoi.devtoolcafe.com/images/pinterest/merge-pdf.png') + '&description=' + encodeURIComponent(document.title), 'pinterest-share', 'width=800,height=600'); return false;"
>
  <svg><!-- Pinterest Icon --></svg>
  Save to Pinterest
</button>
```

#### 放置位置建议
- 工具页面顶部（工具标题旁）
- 工具使用结果页面（成功提示旁）
- 博客文章底部（分享区域）

---

## 第四阶段：内容发布计划

### 9. 初始内容准备（Week 1）

#### 创建 15 个核心 Pin（Day 1-3）

- [ ] 教程类（5 个）
  1. 如何在 3 步内合并 PDF
  2. 压缩 PDF 文件大小：完整指南
  3. 图片转 PDF：手机照片归档技巧
  4. 如何给 PDF 添加电子签名
  5. 学生论文 PDF 处理指南

- [ ] 清单类（3 个）
  1. 学生必备：10 个 PDF 处理技巧
  2. 职场效率：PDF 工具使用清单
  3. PDF 安全：5 个必须知道的保护方法

- [ ] 对比类（2 个）
  1. PDFKoi vs 其他工具：为什么免费更安全
  2. 在线 PDF 工具对比：如何选择

- [ ] 问题解决类（3 个）
  1. 邮件附件太大？3 秒压缩 PDF
  2. 简历格式乱码？Word 转 PDF 保持格式
  3. 扫描件无法编辑？OCR 识别文字

- [ ] 产品展示类（2 个）
  1. PDFKoi 工作流编辑器：自动化处理 PDF
  2. 95+ 免费工具：一站式 PDF 解决方案

### 10. 发布节奏（Week 2-4）

#### 每日发布计划

**Week 2（预热期）**
- 每天 3 个新 Pin
- 分时段：上午 9:00、下午 2:00、晚上 7:00
- 每个 Pin 保存到 2-3 个相关 Board

**Week 3-4（增长期）**
- 每天 5 个新 Pin
- 包括：3 个新内容 + 2 个旧内容优化
- 开始关注数据表现

#### 发布时间优化
根据目标市场调整：

**美国市场（EST）**
- 最佳时间：晚上 8:00-11:00 PM
- 次佳时间：下午 2:00-4:00 PM

**中国市场（CST）**
- 最佳时间：晚上 8:00-10:00 PM
- 次佳时间：中午 12:00-1:00 PM

**欧洲市场（CET）**
- 最佳时间：晚上 7:00-10:00 PM

### 11. 内容轮换策略

- [ ] 创建内容日历
  - Google Sheet 或 Notion
  - 记录发布日期、Pin 类型、工具、表现数据

- [ ] 内容复用
  - 同一工具创建 2-3 个版本 Pin
  - A/B 测试不同标题和图片
  - 表现好的版本重复发布

- [ ] 季节性内容更新
  - 开学季（8-9月）：学生工具
  - 求职季（3-5月）：简历工具
  - 毕业季（5-6月）：论文工具
  - 报税季（3-4月）：安全工具

---

## 第五阶段：增长与互动

### 12. 关注与互动（Week 2 开始）

#### 关注目标账号
- [ ] 关注相关领域的创作者
  - Productivity 博主
  - Student tips 账号
  - Office tools 相关账号
  - Design 和 Creativity 账号

- [ ] 每天互动
  - 转发 3-5 个相关 Pin
  - 评论 2-3 个帖子
  - 点赞 10+ 个 Pin

#### 加入 Group Board
- [ ] 申请加入相关 Group Board
  - 搜索 "PDF" "Productivity" "Study Tips"
  - 选择成员数 1000+ 的活跃 Board
  - 阅读规则，遵守发布限制

### 13. 数据追踪（Week 3 开始）

#### 追踪指标
- [ ] 每周查看 Pinterest Analytics
  - Impressions（展示次数）
  - Total Audience（总触达）
  - Engagements（互动数）
  - Outbound Clicks（外链点击）
  - Top Pins（表现最好的 Pin）

- [ ] 记录数据
  ```
  | 日期 | Pin 名称 | Impressions | Saves | Clicks | Engagement Rate |
  |------|---------|-------------|-------|--------|-----------------|
  |      |         |             |       |        |                 |
  ```

- [ ] 分析表现
  - 哪类 Pin 表现最好？
  - 哪个时间发布效果最好？
  - 哪些关键词搜索量高？

### 14. 持续优化（长期）

#### 内容优化
- [ ] 根据数据调整内容方向
  - 多做表现好的类型
  - 少做或改进表现差的类型

- [ ] 关键词优化
  - 查看 Pinterest Trends
  - 更新 Pin 描述中的关键词
  - 尝试热门搜索词

#### 技术优化
- [ ] 定期更新 OG 图片
- [ ] 检查 Rich Pins 状态
- [ ] 验证 Pin It 按钮正常工作
- [ ] 监控网站流量来源

---

## 第六阶段：广告投放（可选）

### 15. Pinterest Ads 设置（月度预算 $50-100）

#### 创建广告账户
- [ ] 在 Pinterest Ads Manager 创建账户
- [ ] 添加支付方式
- [ ] 设置预算

#### 广告类型选择
- [ ] **Promoted Pins**（推广 Pin）
  - 适合：品牌曝光、流量获取
  - 预算：$20-30/月

- [ ] **Video Pins**（视频 Pin）
  - 适合：教程演示、工具展示
  - 预算：$30-50/月

- [ ] **Shopping Ads**（购物广告）
  - 适合：产品推广（PDFKoi 暂无付费产品）
  - 预算：暂不推荐

#### 广告目标设定
- [ ] Brand Awareness（品牌认知）
- [ ] Traffic（网站流量）
- [ ] Conversions（转化）

#### 目标受众
- [ ] 兴趣定向
  - Technology
  - Education
  - Business
  - Productivity

- [ ] 关键词定向
  - PDF editor
  - Merge PDF
  - Compress PDF
  - Free PDF tools

- [ ] 地区定向
  - 美国、加拿大、英国、澳大利亚
  - 或根据网站流量数据选择

---

## 检查清单总结

### Day 1：账号创建
- [ ] 注册商业账号
- [ ] 完善个人资料
- [ ] 验证网站

### Day 2：架构搭建
- [ ] 创建 6 个主题 Board
- [ ] 优化 Board SEO

### Day 3-5：网站优化
- [ ] 添加 Pinterest 元数据
- [ ] 创建 Pinterest 图片
- [ ] 添加 Pin It 按钮

### Week 1：内容准备
- [ ] 创建 15 个核心 Pin
- [ ] 建立内容日历

### Week 2-4：发布与互动
- [ ] 每日发布 3-5 个 Pin
- [ ] 关注相关账号
- [ ] 开始互动

### Week 3+：数据分析
- [ ] 追踪 Pinterest Analytics
- [ ] 优化内容方向
- [ ] 持续发布和互动

---

## 工具推荐

### 设计工具
- **Canva**：免费模板，快速设计 Pin
- **Figma**：专业设计，可复用模板

### 分析工具
- **Pinterest Analytics**：内置分析
- **Google Analytics**：追踪网站流量来源
- **Tailwind**：第三方 Pinterest 分析和排程工具

### 排程工具
- **Tailwind**：自动排程，最佳时间发布
- **Buffer**：多平台排程
- **Pinterest 内置排程**：免费，功能有限

### 素材来源
- **Unsplash / Pexels**：免费高质量图片
- **Flaticon / Font Awesome**：图标素材
- **Google Fonts**：免费字体

---

## 常见问题解决

### Q1: Pin 展示量低怎么办？
- 检查关键词是否准确
- 尝试不同发布时间
- 优化 Pin 图片（更吸引眼球）
- 增加互动（转发、评论）

### Q2: 网站点击率低怎么办？
- 在 Pin 上添加清晰的 CTA
- 确保 Pin 图片和目标页面相关
- 优化描述文案
- 使用 Rich Pins

### Q3: 如何快速增加粉丝？
- 持续发布高质量内容
- 加入 Group Board
- 与相关账号互动
- 在其他平台推广 Pinterest 账号

### Q4: Pinterest 对 SEO 有帮助吗？
- Pinterest 链接是 nofollow，不传递权重
- 但可以带来真实流量
- Pinterest 本身是搜索引擎，可以被发现
- Pin 可以在 Google 图片搜索中排名

---

## 联系与支持

- Pinterest 帮助中心：https://help.pinterest.com/
- Pinterest 商业资源：https://business.pinterest.com/resources
- Pinterest 开发者文档：https://developers.pinterest.com/

---

**创建日期**：2026-09-27
**更新日期**：待定
**负责人**：Marketing Team
