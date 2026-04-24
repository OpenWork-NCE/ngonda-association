import {FloatingActions} from '@/components/floating-actions';
import {SiteFooter} from '@/components/site-footer';
import {SiteHeader} from '@/components/site-header';
import {getSiteContent, isAppLocale} from '@/data/site-content';
import {routing} from '@/i18n/routing';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);

  return {
    title: content.title,
    description: content.description
  };
}

export default async function LocaleLayout({
  children,
  params
}: LayoutProps<'/[locale]'>) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale) || !isAppLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider locale={locale}>
      <div className="relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--text)]">
        <div aria-hidden="true" className="site-background">
          <div className="site-background-grid" />
          <div className="site-background-depth" />
          <div className="site-background-glow" />
          <div className="site-background-noise" />
        </div>
        <SiteHeader />
        <main className="relative z-10 pb-20">{children}</main>
        <FloatingActions />
        <SiteFooter locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
