# 广告策略实施文档
# Ad Strategy Implementation - 策略 A：分页面部署

**实施日期**: 2026-10-01  
**策略**: 分页面部署 Monetag + Adsterra，避免冲突，最大化收益

---

## 📋 实施方案总览

### 广告分配策略

| 页面类型 | 广告平台 | 广告形式 | 原因 |
|---------|---------|---------|------|
| **首页** (`/`, `/{locale}`) | Monetag Multitag | 弹窗/推送/横幅 | 流量最大，用户停留短 |
| **分类页** (`/tools/category/*`) | Monetag Multitag | 弹窗/推送/横幅 | 浏览行为，填充率高 |
| **工具详情页** (`/tools/[tool]`) | Adsterra Smartlink | 首次点击触发 | 用户完成操作后触发 |
| **其他页面** (about, privacy 等) | 仅底部脚本 | 底部广告 | 不干扰阅读 |

---

## 🛠️ 技术实现

### 1. 新建组件

#### `src/components/ads/AdManager.tsx`
- 智能检测页面类型
- 自动加载 Monetag（仅首页/分类页）
- 会话级频率控制（避免重复加载）
- 控制台日志记录

#### `src/components/ads/ConditionalAdsterra.tsx`
- 条件性加载 Adsterra Smartlink
- 仅在工具详情页启用
- 避免与 Monetag 冲突

### 2. 修改文件

#### `src/app/document.tsx`
**变更**：
- ❌ 移除全局 Monetag 脚本加载
- ✅ 添加 `<AdManager>` 组件（智能加载）
- ✅ 添加 `<ConditionalAdsterra>` 组件（条件加载）
- ✅ 保留 Adsterra 底部脚本（全站）

---

## 🎯 预期效果

### 用户体验改善
- ✅ 工具使用页面不再被 Monetag 弹窗打断
- ✅ 首页/分类页保持高填充率
- ✅ 避免双平台同时触发冲突

### 收益优化
- 📈 首页/分类页：Monetag 自动优化广告形式
- 📈 工具详情页：Adsterra 高质量 CPM
- 📈 避免收益稀释（同一展示机会竞争）

### 技术优化
- ⚡ 按需加载，减少不必要的脚本
- 🔒 会话级频率控制
- 📊 控制台日志便于调试

---

## 📊 监控指标

### 需要每日检查的数据

1. **收益对比**
   ```
   Before (全站混用): $X/day
   After (分页面部署): $Y/day
   差异: (Y-X)/X * 100%
   ```

2. **用户行为**
   - 跳出率（目标：< 60%）
   - 页面停留时间（目标：> 2分钟）
   - 工具转化率（目标：保持或提升）

3. **广告性能**
   - Monetag 填充率
   - Adsterra CPM
   - 总体 RPM

### Google Analytics 事件追踪

```javascript
// 可选：添加到 AdManager.tsx
gtag('event', 'ad_load', {
  ad_platform: 'monetag',
  page_type: adZone,
});
```

---

## 🔍 验证步骤

### 1. 本地测试

```bash
npm run dev
```

打开浏览器控制台，访问不同页面：

#### 首页测试
```
访问: http://localhost:3000/
预期日志: [AdManager] Monetag loaded for zone: homepage
预期行为: 
  - Monetag 脚本加载
  - Adsterra Smartlink 不加载
```

#### 分类页测试
```
访问: http://localhost:3000/tools/category/convert
预期日志: [AdManager] Monetag loaded for zone: category
预期行为: 
  - Monetag 脚本加载
  - Adsterra Smartlink 不加载
```

#### 工具详情页测试
```
访问: http://localhost:3000/tools/compress-pdf
预期日志: [ConditionalAdsterra] Enabled on tool page: /tools/compress-pdf
预期行为: 
  - Monetag 不加载
  - Adsterra Smartlink 加载（首次点击触发）
```

#### 其他页面测试
```
访问: http://localhost:3000/about
预期行为: 
  - Monetag 不加载
  - Adsterra Smartlink 不加载
  - 仅底部脚本
```

### 2. 生产环境验证

部署后等待 24 小时，检查：
- [ ] Monetag 后台显示展示次数（首页/分类页）
- [ ] Adsterra 后台显示展示次数（工具详情页）
- [ ] Google Analytics 流量正常
- [ ] 无 JavaScript 错误

---

## 🚨 回滚计划

如果发现问题，立即回滚到原配置：

### 快速回滚步骤

```bash
# 1. 恢复原 document.tsx
git checkout HEAD~1 src/app/document.tsx

# 2. 删除新组件
rm src/components/ads/AdManager.tsx
rm src/components/ads/ConditionalAdsterra.tsx

# 3. 重新部署
npm run build
```

### 回滚触发条件

- [ ] 总收益下降 > 20%
- [ ] 跳出率上升 > 15%
- [ ] 任一平台发出政策警告
- [ ] 用户投诉明显增加
- [ ] JavaScript 错误导致页面崩溃

---

## 📈 优化建议

### 短期（1-2周）

1. **A/B 测试时间段**
   - Week 1: 监控基础数据
   - Week 2: 微调频率控制

2. **调整频率上限**
   ```typescript
   // 在 AdManager.tsx 中调整
   const sessionKey = 'monetag_loaded_this_session';
   // 改为基于时间的控制
   const lastShown = localStorage.getItem('monetag_last_shown');
   const shouldLoad = !lastShown || Date.now() - Number(lastShown) > 30 * 60 * 1000; // 30分钟
   ```

### 中期（1个月后）

1. **细化分类页策略**
   - 热门分类：继续用 Monetag
   - 冷门分类：切换到 Adsterra

2. **添加地理位置优化**
   ```typescript
   // 根据用户地理位置选择平台
   if (userCountry in ['US', 'UK', 'CA']) {
     // Tier 1 国家优先 Adsterra
   } else {
     // 其他国家优先 Monetag
   }
   ```

### 长期（3个月后）

1. **机器学习优化**
   - 收集用户行为数据
   - 训练模型预测最佳广告平台

2. **实时竞价**
   - 集成 Header Bidding
   - 让 Monetag 和 Adsterra 实时竞价

---

## 📞 技术支持

### Monetag 支持
- 后台: https://publishers.monetag.com/
- Zone ID: 289334
- Verification Code: 9bd7d3ca07b698529832efe50fda74b2

### Adsterra 支持
- 后台: https://publishers.adsterra.com/
- Smartlink 频率: 3小时

### 代码位置
```
src/
├── app/
│   └── document.tsx           # 主配置文件
└── components/
    └── ads/
        ├── AdManager.tsx      # Monetag 智能加载
        ├── ConditionalAdsterra.tsx  # Adsterra 条件加载
        └── AdsterraSmartlink.tsx    # Adsterra Smartlink 原组件
```

---

## ✅ 实施检查清单

- [x] 创建 `AdManager.tsx` 组件
- [x] 创建 `ConditionalAdsterra.tsx` 组件
- [x] 修改 `document.tsx` 配置
- [ ] 本地测试所有页面类型
- [ ] 部署到生产环境
- [ ] 监控 24 小时数据
- [ ] 检查广告平台后台
- [ ] 验证 Google Analytics
- [ ] 记录收益对比数据

---

**备注**: 此文档应在实施后保存在项目根目录，便于团队成员查阅和未来优化。
