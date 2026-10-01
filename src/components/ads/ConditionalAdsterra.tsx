'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AdsterraSmartlink } from './AdsterraSmartlink';

/**
 * 条件性加载 Adsterra Smartlink 组件
 * 仅在工具详情页启用，避免与 Monetag 冲突
 */

export function ConditionalAdsterra() {
  const pathname = usePathname();
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // 移除语言前缀
    const cleanPath = pathname.replace(/^\/(zh|en|ja|ko|es|pt|fr|de|zh-TW)/, '');

    // 仅在工具详情页加载 Adsterra Smartlink
    // 工具详情页格式: /tools/[tool-name]
    const isToolPage = cleanPath.startsWith('/tools/') &&
                       !cleanPath.startsWith('/tools/category/') &&
                       cleanPath !== '/tools' &&
                       cleanPath !== '/tools/';

    setShouldLoad(isToolPage);

    if (isToolPage) {
      console.log('[ConditionalAdsterra] Enabled on tool page:', cleanPath);
    }
  }, [pathname]);

  // 仅在工具详情页渲染 Adsterra Smartlink
  return shouldLoad ? <AdsterraSmartlink /> : null;
}
