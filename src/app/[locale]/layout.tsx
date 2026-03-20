import {SiteFooter} from '@/components/site-footer';
import {SiteHeader} from '@/components/site-header';
import {getSiteContent, isAppLocale} from '@/data/site-content';
import {routing, type AppLocale} from '@/i18n/routing';
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

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider locale={locale}>
      <div className="relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--text)]">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(6,12,10,0.06)_100%)]" />
          <div className="absolute left-[-8rem] top-24 h-[28rem] w-[28rem] rounded-full bg-[var(--accent-soft)] blur-[120px] animate-float-slow" />
          <div className="absolute right-[-9rem] top-12 h-[32rem] w-[32rem] rounded-full bg-[var(--accent-secondary-soft)] blur-[140px] animate-float-reverse" />
          <div className="absolute left-1/3 top-[28rem] h-[18rem] w-[18rem] rounded-full bg-[var(--accent-soft)] blur-[110px] animate-glow-pan" />
          <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(215,178,110,0.14),transparent_56%)]" />
        </div>
        <SiteHeader />
        <main className="relative z-10 pb-20">{children}</main>
        <SiteFooter locale={locale as AppLocale} />
      </div>
    </NextIntlClientProvider>
  );
}
