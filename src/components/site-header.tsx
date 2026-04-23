'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import { LanguageSwitcher } from './language-switcher';
import { ThemeToggle } from './theme-toggle';

type NavItem = {
  key: string;
  href: ComponentProps<typeof Link>['href'];
};

const NAV_ITEMS: NavItem[] = [
  { key: 'home', href: '/' },
  { key: 'news', href: '/news' },
  { key: 'about', href: '/about' },
  { key: 'gallery', href: '/gallery' },
  { key: 'brochure', href: '/brochure' },
  { key: 'funders', href: '/funders' },
  { key: 'impressum', href: '/impressum' }
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

  const links = NAV_ITEMS.map((item) => ({
    ...item,
    label: tNav(item.key),
    active: isActive(pathname, item.href as string)
  }));

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[92rem]">
        <div className="relative overflow-visible rounded-[var(--radius-lg)] border border-[var(--border-strong)] bg-[var(--header-bg)] shadow-[var(--shadow-card)] backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,var(--header-sheen),transparent_55%)]" />

          <div className="relative flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <div className="relative overflow-hidden rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--surface-strong)] px-2.5 py-2 shadow-[var(--shadow-soft)]">
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
                <div className="mt-1 flex items-center gap-2 text-sm text-[var(--text)]">
                  <span className="truncate font-semibold">{tBrand('slogan')}</span>
                  <span className="hidden rounded-full border border-[var(--border)] px-2 py-0.5 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)] lg:inline-flex">
                    Aachen
                  </span>
                </div>
              </div>
            </Link>

            <nav className="relative z-20 hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] p-1.5 shadow-[var(--shadow-soft)] xl:flex">
              {links.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  aria-current={link.active ? 'page' : undefined}
                  className={cn(
                    'rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-[var(--dur-fast)]',
                    link.active
                      ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-[var(--shadow-accent)]'
                      : 'text-[var(--muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)]'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-2 xl:flex">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            <button
              type="button"
              className="control-chip inline-flex h-11 w-11 items-center justify-center text-[var(--text)] xl:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {mobileOpen ? (
            <div className="relative border-t border-[var(--border)] px-4 py-4 sm:px-5 xl:hidden">
              <div className="space-y-2">
                {links.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={link.active ? 'page' : undefined}
                    className={cn(
                      'block rounded-[var(--radius-sm)] border px-4 py-3 text-sm font-medium transition-colors',
                      link.active
                        ? 'border-transparent bg-[var(--accent)] text-[var(--accent-contrast)] shadow-[var(--shadow-sm)]'
                        : 'border-[var(--border)] text-[var(--text)] hover:bg-[var(--accent-soft)]'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
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
