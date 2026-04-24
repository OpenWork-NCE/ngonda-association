'use client';

import {Link, usePathname} from '@/i18n/navigation';
import {cn} from '@/lib/utils';
import {Menu, X} from 'lucide-react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import type {ComponentProps} from 'react';
import {useState} from 'react';
import {LanguageSwitcher} from './language-switcher';
import {ThemeToggle} from './theme-toggle';

type NavItem = {
  key: string;
  href: ComponentProps<typeof Link>['href'];
};

const NAV_ITEMS: NavItem[] = [
  {key: 'home', href: '/'},
  {key: 'news', href: '/news'},
  {key: 'about', href: '/about'},
  {key: 'gallery', href: '/gallery'},
  {key: 'brochure', href: '/brochure'},
  {key: 'funders', href: '/funders'},
  {key: 'impressum', href: '/impressum'}
] as const;

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const tNav = useTranslations('nav');
  const tBrand = useTranslations('brand');
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === '/';

  const links = NAV_ITEMS.map((item) => ({
    ...item,
    label: tNav(item.key),
    active: isActive(pathname, item.href as string)
  }));

  return (
    <header
      className={cn(
        'z-50 px-4 sm:px-6 lg:px-10',
        isHome ? 'absolute inset-x-0 top-0 pt-3.5 sm:pt-4' : 'sticky top-0 pt-3.5'
      )}
    >
      <div className="mx-auto w-full max-w-[92rem]">
        <div
          className={cn(
            'relative overflow-visible rounded-[var(--radius-xl)] border border-[var(--border-strong)] bg-[var(--header-bg)] backdrop-blur-[16px]',
            isHome
              ? 'shadow-[0_22px_48px_-28px_rgba(0,0,0,0.58)] supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--header-bg)_82%,transparent)]'
              : 'shadow-[var(--shadow-card)]'
          )}
        >
          {/* Top sheen */}
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,var(--header-sheen),transparent_52%)]" />
          {/* Inner ring — Mastra-style barely-visible inset glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-[var(--ring-inner)]" />

          {isHome ? (
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-secondary-medium)] to-transparent opacity-80" />
          ) : null}

          <div className="relative flex items-center justify-between gap-3 px-3 py-2.5 sm:px-4 sm:py-3">
            {/* Brand */}
            <Link href="/" className="flex min-w-0 items-center gap-3 rounded-[var(--radius-lg)] px-1 py-0.5">
              <div className="relative shrink-0 overflow-hidden rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--surface-strong)] px-2.5 py-1.5 shadow-[var(--shadow-soft),var(--shadow-xs)]">
                <Image
                  src="/ngonda-logo.png"
                  alt="NGONDA e.V."
                  width={970}
                  height={257}
                  className="h-8 w-auto object-contain sm:h-9"
                  priority
                />
              </div>
              <div className="hidden min-w-0 sm:block">
                <p className="label-xs">NGONDA e.V.</p>
                <div className="mt-0.5 flex items-center gap-2">
                  <span className="truncate text-sm font-semibold text-[var(--text)]">{tBrand('slogan')}</span>
                  <span className="hidden rounded-full border border-[var(--border)] px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)] lg:inline-flex">
                    Aachen
                  </span>
                </div>
              </div>
            </Link>

            <div className="hidden items-center gap-2 xl:flex">
              <nav
                aria-label="Main navigation"
                className="relative z-20 flex items-center gap-0.5 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] p-1 shadow-[var(--shadow-soft),var(--shadow-xs)]"
              >
                {links.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    aria-current={link.active ? 'page' : undefined}
                    className={cn(
                      'relative rounded-full px-3.5 py-2 text-[0.8rem] font-medium transition-all duration-[var(--dur-fast)]',
                      link.active
                        ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-[var(--shadow-accent)]'
                        : 'text-[var(--muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)]'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-2 py-1 shadow-[var(--shadow-soft),var(--shadow-xs)]">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="control-chip inline-flex h-10 w-10 items-center justify-center text-[var(--text)] xl:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen ? (
            <div className="relative border-t border-[var(--border)] px-3.5 pb-4 pt-3 sm:px-4 xl:hidden">
              <div className="grid gap-1.5">
                {links.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={link.active ? 'page' : undefined}
                    className={cn(
                      'flex items-center rounded-[var(--radius-md)] border px-4 py-3 text-sm font-medium transition-colors duration-[var(--dur-fast)]',
                      link.active
                        ? 'border-transparent bg-[var(--accent)] text-[var(--accent-contrast)] shadow-[var(--shadow-accent)]'
                        : 'border-[var(--border)] text-[var(--text)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)]'
                    )}
                  >
                    {link.active ? (
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                    ) : null}
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-tint/8 px-2 py-2">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
