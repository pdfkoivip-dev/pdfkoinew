#!/bin/bash
# ==========================================
# PDFkoi.com GSC问题验证脚本
# Cloudflare Pages架构专用
# ==========================================

echo "🔍 PDFkoi.com GSC索引问题验证检查"
echo "=================================="
echo ""

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ISSUES_FOUND=0

# ==========================================
# 检查1: Sitemap URL协议和域名
# ==========================================
echo "📋 检查1: Sitemap URL是否包含http://或www."
echo "--------------------------------------------"

if grep -qE "(http://pdfkoi\.com|www\.pdfkoi\.com)" out/sitemap*.xml 2>/dev/null; then
    echo -e "${RED}❌ 发现问题:${NC} Sitemap包含http://或www.链接"
    echo "   受影响的URL:"
    grep -oE "(http://[^<]+|https://www\.[^<]+)" out/sitemap*.xml | head -5
    ISSUES_FOUND=$((ISSUES_FOUND + 1))
else
    echo -e "${GREEN}✅ 通过:${NC} Sitemap中所有URL都使用https://pdfkoi.com"
fi
echo ""

# ==========================================
# 检查2: Sitemap中的/en/前缀
# ==========================================
echo "📋 检查2: Sitemap是否包含/en/前缀"
echo "--------------------------------------------"

if grep -q "pdfkoi\.com/en/" out/sitemap*.xml 2>/dev/null; then
    echo -e "${RED}❌ 发现问题:${NC} Sitemap包含/en/前缀的URL"
    echo "   受影响的URL:"
    grep -o "https://pdfkoi\.com/en/[^<]*" out/sitemap*.xml | head -5
    ISSUES_FOUND=$((ISSUES_FOUND + 1))
else
    echo -e "${GREEN}✅ 通过:${NC} Sitemap中没有/en/前缀"
fi
echo ""

# ==========================================
# 检查3: Sitemap中的zh-TW大写
# ==========================================
echo "📋 检查3: Sitemap是否包含/zh-TW/大写路径"
echo "--------------------------------------------"

if grep -q "pdfkoi\.com/zh-TW/" out/sitemap*.xml 2>/dev/null; then
    echo -e "${RED}❌ 发现问题:${NC} Sitemap包含/zh-TW/大写路径"
    echo "   受影响的URL:"
    grep -o "https://pdfkoi\.com/zh-TW/[^<]*" out/sitemap*.xml | head -5
    ISSUES_FOUND=$((ISSUES_FOUND + 1))
else
    echo -e "${GREEN}✅ 通过:${NC} Sitemap中使用小写/zh-tw/"
fi
echo ""

# ==========================================
# 检查4: Sitemap尾斜杠一致性
# ==========================================
echo "📋 检查4: Sitemap URL尾斜杠一致性"
echo "--------------------------------------------"

missing_slash=$(grep -o "<loc>[^<]*</loc>" out/sitemap.xml 2>/dev/null | grep -v "/$" | grep -v "\.xml$" | wc -l)
if [ "$missing_slash" -gt 0 ]; then
    echo -e "${YELLOW}⚠️  警告:${NC} 发现 $missing_slash 个URL缺少尾斜杠"
    echo "   示例:"
    grep -o "<loc>[^<]*</loc>" out/sitemap.xml | grep -v "/$" | grep -v "\.xml$" | head -3
    ISSUES_FOUND=$((ISSUES_FOUND + 1))
else
    echo -e "${GREEN}✅ 通过:${NC} 所有URL都有正确的尾斜杠"
fi
echo ""

# ==========================================
# 检查5: 首页HTML内部链接
# ==========================================
echo "📋 检查5: 首页HTML内部链接检查"
echo "--------------------------------------------"

if [ -f "out/index.html" ]; then
    # 检查http://链接
    if grep -qo 'href="http://pdfkoi\.com' out/index.html 2>/dev/null; then
        echo -e "${RED}❌ 发现问题:${NC} 首页包含http://内部链接"
        ISSUES_FOUND=$((ISSUES_FOUND + 1))
    fi

    # 检查www.链接
    if grep -qo 'href=".*www\.pdfkoi\.com' out/index.html 2>/dev/null; then
        echo -e "${RED}❌ 发现问题:${NC} 首页包含www.内部链接"
        ISSUES_FOUND=$((ISSUES_FOUND + 1))
    fi

    # 检查/en/链接
    if grep -qo 'href="/en/' out/index.html 2>/dev/null; then
        echo -e "${RED}❌ 发现问题:${NC} 首页包含/en/前缀链接"
        ISSUES_FOUND=$((ISSUES_FOUND + 1))
    fi

    if [ "$ISSUES_FOUND" -eq 0 ]; then
        echo -e "${GREEN}✅ 通过:${NC} 首页内部链接正确"
    fi
else
    echo -e "${YELLOW}⚠️  跳过:${NC} 未找到out/index.html"
fi
echo ""

# ==========================================
# 检查6: Canonical标签
# ==========================================
echo "📋 检查6: Canonical标签验证"
echo "--------------------------------------------"

if [ -f "out/index.html" ]; then
    canonical=$(grep -o 'rel="canonical" href="[^"]*"' out/index.html | head -1)
    if echo "$canonical" | grep -q "https://pdfkoi.com/"; then
        echo -e "${GREEN}✅ 通过:${NC} 英文首页canonical: $canonical"
    else
        echo -e "${RED}❌ 发现问题:${NC} 英文首页canonical不正确: $canonical"
        ISSUES_FOUND=$((ISSUES_FOUND + 1))
    fi
else
    echo -e "${YELLOW}⚠️  跳过:${NC} 未找到out/index.html"
fi

if [ -f "out/zh-tw/index.html" ]; then
    canonical_zh=$(grep -o 'rel="canonical" href="[^"]*"' out/zh-tw/index.html | head -1)
    if echo "$canonical_zh" | grep -q "https://pdfkoi.com/zh-tw/"; then
        echo -e "${GREEN}✅ 通过:${NC} 繁中首页canonical: $canonical_zh"
    else
        echo -e "${RED}❌ 发现问题:${NC} 繁中首页canonical不正确: $canonical_zh"
        ISSUES_FOUND=$((ISSUES_FOUND + 1))
    fi
fi
echo ""

# ==========================================
# 检查7: Hreflang标签
# ==========================================
echo "📋 检查7: Hreflang标签验证"
echo "--------------------------------------------"

if [ -f "out/index.html" ]; then
    # 检查是否有/en/的hreflang
    if grep 'hreflang' out/index.html | grep -q 'href=".*pdfkoi\.com/en/'; then
        echo -e "${RED}❌ 发现问题:${NC} Hreflang包含/en/前缀"
        ISSUES_FOUND=$((ISSUES_FOUND + 1))
    elif grep -q 'hreflang="en"' out/index.html; then
        echo -e "${GREEN}✅ 通过:${NC} Hreflang标签存在且正确"
    else
        echo -e "${YELLOW}⚠️  警告:${NC} 未找到hreflang标签"
    fi
else
    echo -e "${YELLOW}⚠️  跳过:${NC} 未找到out/index.html"
fi
echo ""

# ==========================================
# 检查8: 构建输出目录结构
# ==========================================
echo "📋 检查8: 构建输出目录结构"
echo "--------------------------------------------"

if [ -d "out/zh-TW" ]; then
    echo -e "${RED}❌ 发现问题:${NC} 存在out/zh-TW/目录(应该是zh-tw小写)"
    ISSUES_FOUND=$((ISSUES_FOUND + 1))
else
    echo -e "${GREEN}✅ 通过:${NC} 没有zh-TW大写目录"
fi

if [ -d "out/zh-tw" ]; then
    echo -e "${GREEN}✅ 通过:${NC} zh-tw小写目录存在"
else
    echo -e "${YELLOW}⚠️  警告:${NC} 未找到zh-tw目录"
fi

if [ -d "out/en" ]; then
    echo -e "${RED}❌ 发现问题:${NC} 存在out/en/目录(英文页应该在根目录)"
    ISSUES_FOUND=$((ISSUES_FOUND + 1))
else
    echo -e "${GREEN}✅ 通过:${NC} 没有/en/目录"
fi
echo ""

# ==========================================
# 检查9: Sitemap包含的语言版本
# ==========================================
echo "📋 检查9: 多语言Sitemap完整性"
echo "--------------------------------------------"

declare -a languages=("ja" "de" "fr" "es" "pt" "zh" "zh-tw")
for lang in "${languages[@]}"; do
    count=$(grep -c "pdfkoi\.com/$lang/" out/sitemap*.xml 2>/dev/null || echo "0")
    if [ "$count" -gt 0 ]; then
        echo -e "${GREEN}✅ $lang:${NC} $count 个URL"
    else
        echo -e "${YELLOW}⚠️  $lang:${NC} 0 个URL (可能正常,取决于是否有该语言内容)"
    fi
done
echo ""

# ==========================================
# 检查10: _redirects文件
# ==========================================
echo "📋 检查10: _redirects配置"
echo "--------------------------------------------"

if [ -f "public/_redirects" ]; then
    echo -e "${GREEN}✅ 存在:${NC} public/_redirects"

    # 检查关键重定向规则
    if grep -q "www.pdfkoi.com" public/_redirects; then
        echo -e "${GREEN}✅ WWW重定向规则:${NC} 已配置"
    else
        echo -e "${YELLOW}⚠️  警告:${NC} 未找到WWW重定向规则"
    fi

    if grep -q "/zh-TW" public/_redirects; then
        echo -e "${GREEN}✅ zh-TW规范化:${NC} 已配置"
    else
        echo -e "${YELLOW}⚠️  警告:${NC} 未找到zh-TW重定向规则"
    fi

    if grep -q "/en" public/_redirects; then
        echo -e "${GREEN}✅ /en/规范化:${NC} 已配置"
    else
        echo -e "${YELLOW}⚠️  警告:${NC} 未找到/en/重定向规则"
    fi
else
    echo -e "${RED}❌ 错误:${NC} 未找到public/_redirects文件"
    ISSUES_FOUND=$((ISSUES_FOUND + 1))
fi
echo ""

# ==========================================
# 最终总结
# ==========================================
echo "=================================="
echo "🎯 验证结果总结"
echo "=================================="

if [ $ISSUES_FOUND -eq 0 ]; then
    echo -e "${GREEN}🎉 太好了!没有发现严重问题!${NC}"
    echo ""
    echo "您的配置看起来很健康。96个重定向问题很可能是:"
    echo "1. Google缓存滞后 - 旧URL已被重定向"
    echo "2. 外部链接指向旧URL - 这是正常的"
    echo ""
    echo "📌 建议操作:"
    echo "1. 在Google Search Console点击'验证修复'"
    echo "2. 重新提交sitemap.xml"
    echo "3. 等待2-7天让Google重新抓取"
    echo ""
else
    echo -e "${RED}⚠️  发现 $ISSUES_FOUND 个需要修复的问题${NC}"
    echo ""
    echo "📌 建议操作:"
    echo "1. 根据上述检查结果修复问题"
    echo "2. 重新构建: npm run build"
    echo "3. 重新部署到Cloudflare Pages"
    echo "4. 在GSC请求验证"
    echo ""
fi

echo "📊 快速统计:"
echo "--------------------------------------------"
echo "Sitemap总URL数: $(grep -c "<loc>" out/sitemap*.xml 2>/dev/null || echo "未找到")"
echo "已索引页面: 782"
echo "未索引页面: 368"
echo "当前索引率: 68%"
echo "目标索引率: 85%+"
echo ""

echo "✅ 验证完成! $(date)"
