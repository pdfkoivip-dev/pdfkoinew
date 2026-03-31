import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { fontVariables } from '@/lib/fonts';
import '@/app/globals.css';

export const baseMetadata: Metadata = {
  icons: {
    icon: [{ url: '/images/logo.png', type: 'image/png', sizes: '128x128' }],
    shortcut: '/images/logo.png',
    apple: [{ url: '/images/logo.png', type: 'image/png', sizes: '128x128' }],
  },
};

interface RootDocumentProps {
  children: ReactNode;
  lang: string;
  dir?: 'ltr' | 'rtl';
}

export function RootDocument({
  children,
  lang,
  dir = 'ltr',
}: RootDocumentProps) {
  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <style dangerouslySetInnerHTML={{ __html: 'html{scrollbar-gutter:stable}' }} />
      </head>
      <body className={`${fontVariables} min-h-screen bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
