#!/bin/bash
# GSC 索引问题修复验证脚本
# 使用方法: bash scripts/verify-seo-fixes.sh

echo "======================================================================"
echo "PDFkoi.com SEO 修复验证"
echo "日期: $(date +%Y-%m-%d)"
echo "======================================================================"
echo ""

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 基础 URL
BASE_URL="https://pdfkoi.com"

# 测试计数器
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

# 测试函数
test_url() {
    local url=$1
    local test_name=$2
    local expected_pattern=$3

    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    echo -n "测试 $TOTAL_TESTS: $test_name ... "

    response=$(curl -s "$url")

    if echo "$response" | grep -q "$expected_pattern"; then
        echo -e "${GREEN}✓ 通过${NC}"
        PASSED_TESTS=$((PASSED_TESTS + 1))
        return 0
    else
        echo -e "${RED}✗ 失败${NC}"
        echo "  期望: $expected_pattern"
        FAILED_TESTS=$((FAILED_TESTS + 1))
        return 1
    fi
}

echo "1. 检查静态页面索引策略"
echo "----------------------------------------------------------------------"

# 测试多语言静态页面应该可索引
test_url "$BASE_URL/es/privacy/" \
    "西班牙语隐私页应该可索引" \
    'name="robots" content="index'

test_url "$BASE_URL/de/about/" \
    "德语关于页应该可索引" \
    'name="robots" content="index'

test_url "$BASE_URL/fr/privacy/" \
    "法语隐私页应该可索引" \
    'name="robots" content="index'

echo ""
echo "2. 检查搜索参数页面 noindex"
echo "----------------------------------------------------------------------"

# 测试搜索参数页面应该有 noindex
test_url "$BASE_URL/tools/?q=test" \
    "搜索结果页应该有noindex" \
    'name="robots" content="noindex'

test_url "$BASE_URL/en/tools/?q=pdf" \
    "英文搜索页应该有noindex" \
    'name="robots" content="noindex'

echo ""
echo "3. 检查 Canonical 标签"
echo "----------------------------------------------------------------------"

# 测试工具页面 canonical 自引用
test_url "$BASE_URL/de/tools/compare-pdfs/" \
    "德语工具页canonical应该自引用" \
    'rel="canonical" href="https://pdfkoi.com/de/tools/compare-pdfs/'

test_url "$BASE_URL/ja/tools/form-filler/" \
    "日语工具页canonical应该自引用" \
    'rel="canonical" href="https://pdfkoi.com/ja/tools/form-filler/'

echo ""
echo "4. 检查 Hreflang 标签"
echo "----------------------------------------------------------------------"

test_url "$BASE_URL/es/tools/xps-to-pdf/" \
    "西班牙语页应该有hreflang标签" \
    'hreflang="es"'

test_url "$BASE_URL/fr/tools/pdf-to-pptx/" \
    "法语页应该有hreflang标签" \
    'hreflang="fr"'

echo ""
echo "5. 检查 robots.txt"
echo "----------------------------------------------------------------------"

test_url "$BASE_URL/robots.txt" \
    "robots.txt应该存在" \
    "User-agent"

test_url "$BASE_URL/robots.txt" \
    "robots.txt应该屏蔽搜索参数" \
    'Disallow: /*/tools/?q='

echo ""
echo "6. 检查重定向问题"
echo "----------------------------------------------------------------------"

# 测试尾部斜杠重定向
status_code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/en/tools/sign-pdf")
TOTAL_TESTS=$((TOTAL_TESTS + 1))
echo -n "测试 $TOTAL_TESTS: 无斜杠URL应该返回200或301 ... "
if [ "$status_code" == "200" ] || [ "$status_code" == "301" ]; then
    echo -e "${GREEN}✓ 通过${NC} (状态码: $status_code)"
    PASSED_TESTS=$((PASSED_TESTS + 1))
else
    echo -e "${RED}✗ 失败${NC} (状态码: $status_code)"
    FAILED_TESTS=$((FAILED_TESTS + 1))
fi

echo ""
echo "======================================================================"
echo "测试总结"
echo "======================================================================"
echo "总计测试: $TOTAL_TESTS"
echo -e "通过: ${GREEN}$PASSED_TESTS${NC}"
echo -e "失败: ${RED}$FAILED_TESTS${NC}"

if [ $FAILED_TESTS -eq 0 ]; then
    echo -e "\n${GREEN}✓ 所有测试通过！${NC}"
    exit 0
else
    echo -e "\n${YELLOW}⚠ 有 $FAILED_TESTS 个测试失败，请检查${NC}"
    exit 1
fi
