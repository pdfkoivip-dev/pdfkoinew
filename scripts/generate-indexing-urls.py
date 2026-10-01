#!/usr/bin/env python3
"""
生成 Google Indexing API 提交列表
从 GSC 导出的 Excel 文件中提取需要重新索引的 URL

使用方法:
  python scripts/generate-indexing-urls.py
"""

import pandas as pd
import json
from pathlib import Path

# GSC 数据文件路径（相对于项目根目录）
GSC_DATA_DIR = Path('C:/Users/xiaoj/Desktop/GSC')

# 要处理的文件和对应的问题类型
FILES = {
    'pdfkoi.com-Coverage-Drilldown-2026-10-01 (2).xlsx': '已抓取-尚未编入索引',
    'pdfkoi.com-Coverage-Drilldown-2026-10-01 (3).xlsx': '重复网页-Canonical冲突',
}

def main():
    all_urls = []
    url_by_issue = {}

    for filename, issue_type in FILES.items():
        file_path = GSC_DATA_DIR / filename

        if not file_path.exists():
            print(f"警告: 文件不存在 - {file_path}")
            continue

        try:
            # 读取第二个工作表（详细信息）
            xl = pd.ExcelFile(file_path)
            sheet_name = xl.sheet_names[1]  # 详细信息工作表
            df = pd.read_excel(file_path, sheet_name=sheet_name)

            # 提取 URL（第一列）
            url_col = df.columns[0]
            urls = df[url_col].dropna().tolist()

            all_urls.extend(urls)
            url_by_issue[issue_type] = urls

            print(f"\n{issue_type}: {len(urls)} 个 URL")

        except Exception as e:
            print(f"错误: 处理文件 {filename} 时出错 - {e}")
            continue

    # 输出统计信息
    print(f"\n{'='*80}")
    print(f"总计: {len(all_urls)} 个 URL 需要提交到 Indexing API")
    print(f"{'='*80}")

    # 保存为 JSON 文件
    output_file = Path('scripts/indexing-api-urls.json')
    output_file.parent.mkdir(parents=True, exist_ok=True)

    output_data = {
        'generated_at': '2026-10-01',
        'total_urls': len(all_urls),
        'by_issue': url_by_issue,
        'all_urls': all_urls,
    }

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    print(f"\n[OK] URL list saved to: {output_file}")

    # 输出前 10 个 URL 作为示例
    print(f"\n示例 URL（前 10 个）:")
    for i, url in enumerate(all_urls[:10], 1):
        print(f"  {i}. {url}")

    # 按语言分类统计
    print(f"\n按语言统计:")
    lang_count = {}
    for url in all_urls:
        if '/ja/' in url:
            lang = 'ja'
        elif '/es/' in url:
            lang = 'es'
        elif '/de/' in url:
            lang = 'de'
        elif '/fr/' in url:
            lang = 'fr'
        elif '/pt/' in url:
            lang = 'pt'
        elif '/zh-tw/' in url:
            lang = 'zh-tw'
        elif '/zh/' in url:
            lang = 'zh'
        elif '/en/' in url:
            lang = 'en'
        else:
            lang = 'other'

        lang_count[lang] = lang_count.get(lang, 0) + 1

    for lang, count in sorted(lang_count.items(), key=lambda x: x[1], reverse=True):
        print(f"  {lang}: {count}")

if __name__ == '__main__':
    main()
