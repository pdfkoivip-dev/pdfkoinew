import type { Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { localeConfig, locales, normalizeLocale, getPublicLocaleParams } from '@/lib/i18n/config';
import { baseMetadata, RootDocument } from '@/app/document';
import { SkipLink } from '@/components/common/SkipLink';
import { CookieConsent } from '@/components/CookieConsent';

export const metadata = baseMetadata;

export function generateStaticParams() {
  return getPublicLocaleParams();
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  if (!normalizedLocale || !locales.includes(normalizedLocale)) {
    notFound();
  }

  setRequestLocale(normalizedLocale);

  const messages = await getMessages();
  const direction = localeConfig[normalizedLocale]?.direction || 'ltr';

  return (
    <RootDocument lang={normalizedLocale} dir={direction}>
      <NextIntlClientProvider messages={messages}>
        <div className="min-h-screen bg-background text-foreground antialiased font-sans relative overflow-x-hidden">
          <div className="fixed inset-0 -z-10" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#F0F9FF]" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0052FF]/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#4D7CFF]/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#00D4FF]/8 rounded-full blur-3xl animate-blob animation-delay-4000" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,82,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,82,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>

          <SkipLink targetId="main-content">Skip to main content</SkipLink>
          {children}
          <CookieConsent />
        </div>
      </NextIntlClientProvider>
    </RootDocument>
  );
}
