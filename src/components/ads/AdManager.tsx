'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * 智能广告管理组件 - 根据页面类型选择合适的广告平台
 *
 * 策略 A：分页面部署
 * - 首页/分类页：Monetag Multitag（高流量，自动优化）
 * - 工具详情页：Adsterra Smartlink（用户完成操作后触发）
 * - 其他页面：仅底部广告
 */

export type AdZone = 'homepage' | 'category' | 'toolPage' | 'other';

interface AdManagerProps {
  /** Monetag 配置 */
  monetag?: {
    verificationCode: string;
    zoneId: string;
  };
}

function getAdZone(pathname: string): AdZone {
  // 移除语言前缀
  const cleanPath = pathname.replace(/^\/(zh|en|ja|ko|es|pt|fr|de|zh-TW)/, '');

  // 首页
  if (cleanPath === '' || cleanPath === '/') {
    return 'homepage';
  }

  // 工具分类页或工具列表页
  if (cleanPath === '/tools' || cleanPath.startsWith('/tools/category/')) {
    return 'category';
  }

  // 工具详情页
  if (cleanPath.startsWith('/tools/') && !cleanPath.startsWith('/tools/category/')) {
    return 'toolPage';
  }

  return 'other';
}

export function AdManager({ monetag }: AdManagerProps) {
  const pathname = usePathname();
  const [adZone, setAdZone] = useState<AdZone>('other');

  useEffect(() => {
    setAdZone(getAdZone(pathname));
  }, [pathname]);

  useEffect(() => {
    // 仅在首页和分类页加载 Monetag
    if ((adZone === 'homepage' || adZone === 'category') && monetag) {
      // 检查是否已加载
      const existingScript = document.querySelector(`script[data-zone="${monetag.zoneId}"]`);
      if (existingScript) {
        return;
      }

      // 添加频率控制 - 每个会话只触发一次 Monetag
      const sessionKey = 'monetag_loaded_this_session';
      if (sessionStorage.getItem(sessionKey)) {
        console.log('[AdManager] Monetag already loaded this session, skipping');
        return;
      }

      // 加载 Monetag 脚本
      const script = document.createElement('script');
      script.src = 'https://quge5.com/88/tag.min.js';
      script.setAttribute('data-zone', monetag.zoneId);
      script.async = true;
      script.setAttribute('data-cfasync', 'false');

      script.onload = () => {
        sessionStorage.setItem(sessionKey, '1');
        console.log('[AdManager] Monetag loaded for zone:', adZone);
      };

      document.head.appendChild(script);

      return () => {
        // 清理脚本（可选）
        // script.remove();
      };
    }
  }, [adZone, monetag]);

  // 组件不渲染任何内容
  return null;
}
