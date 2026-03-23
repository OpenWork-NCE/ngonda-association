'use client';

import {Link, usePathname} from '@/i18n/navigation';
import {cn} from '@/lib/utils';
import {ChevronDown, Menu, Sparkles, X} from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {useState} from 'react';
import { LanguageSwitcher } from './language-switcher';
import { ThemeToggle } from './theme-toggle';

const NAV_ITEMS = [
  { key: 'home', href: '/', children: [] },
  { key: 'about', href: '/about', children: [] },
  { key: 'funders', href: '/funders', children: [] },
  { key: 'news', href: '/news', children: [] },
  {
    key: 'gallery',
    href: '/gallery',
    children: [
      { key: 'photos', href: '/gallery/photos' },
      { key: 'videos', href: '/gallery/videos' }
    ]
  },
  { key: 'projects', href: '/projects', children: [] },
  { key: 'contact', href: '/contact', children: [] }
] as const;

export function SiteHeader() {
  const tNav = useTranslations('nav');
  const tBrand = useTranslations('brand');
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = NAV_ITEMS.map((item) => {
    const childActive =
      item.children?.some(
        (child) => pathname === child.href || pathname.startsWith(`${child.href}/`)
      ) ?? false;
    const active =
      item.href === '/'
        ? pathname === '/'
        : pathname === item.href || pathname.startsWith(`${item.href}/`) || childActive;

    return {
      ...item,
      label: tNav(item.key),
      children:
        item.children?.map((child) => ({
          ...child,
          label: tNav(child.key),
          active: pathname === child.href || pathname.startsWith(`${child.href}/`)
        })) ?? [],
      active
    };
  });

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[92rem]">
        <div className="relative overflow-visible rounded-[2rem] border border-[var(--border-strong)] bg-[var(--header-bg)] shadow-[var(--shadow-card)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,var(--header-sheen),transparent_44%),radial-gradient(circle_at_top_right,rgba(215,178,110,0.14),transparent_22%)]" />

          <div className="relative flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <div className="relative overflow-hidden rounded-[1.15rem] border border-[var(--border-strong)] bg-[var(--surface-strong)] px-2.5 py-2 shadow-[var(--shadow-soft)]">
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
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[var(--muted)]">
                  NGONDA e.V.
                </p>
                <div className="mt-1 flex items-center gap-2 text-sm text-[var(--text)]">
                  <span className="truncate font-semibold">{tBrand('slogan')}</span>
                  <span className="hidden rounded-full border border-[var(--border)] px-2 py-0.5 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)] lg:inline-flex">
                    Aachen
                  </span>
                </div>
              </div>
            </Link>

            <nav className="relative z-20 hidden items-center gap-1 overflow-visible rounded-full border border-[var(--border)] bg-[var(--surface-strong)] p-1.5 xl:flex">
              {links.map((link) => {
                if (link.children.length > 0) {
                  return (
                    <div key={link.key} className="group relative">
                      <Link
                        href={link.href}
                        className={cn(
                          'inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-medium transition-colors',
                          link.active
                            ? 'bg-[linear-gradient(135deg,var(--accent),var(--accent-secondary))] text-[var(--accent-contrast)] shadow-[0_20px_40px_-24px_rgba(14,29,25,0.58)]'
                            : 'text-[var(--muted)] hover:bg-white/50 hover:text-[var(--text)]'
                        )}
                      >
                        {link.label}
                        <ChevronDown className="h-4 w-4" />
                      </Link>
                      <div className="pointer-events-none invisible absolute left-0 top-[calc(100%+10px)] z-50 w-56 translate-y-1 rounded-[1.6rem] border border-[var(--border-strong)] bg-[var(--surface-strong)] p-2 opacity-0 shadow-[var(--shadow-card)] transition-all group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        {link.children.map((child) => (
                          <Link
                            key={child.key}
                            href={child.href}
                            className={cn(
                              'block rounded-[1rem] px-3 py-2.5 text-sm font-medium transition-colors',
                              child.active
                                ? 'bg-[linear-gradient(135deg,var(--accent),var(--accent-secondary))] text-[var(--accent-contrast)]'
                                : 'text-[var(--text)] hover:bg-white/40'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    className={cn(
                      'rounded-full px-4 py-2.5 text-sm font-medium transition-colors',
                      link.active
                        ? 'bg-[linear-gradient(135deg,var(--accent),var(--accent-secondary))] text-[var(--accent-contrast)] shadow-[0_20px_40px_-24px_rgba(14,29,25,0.58)]'
                        : 'text-[var(--muted)] hover:bg-white/50 hover:text-[var(--text)]'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 xl:flex">
              <div className="control-chip hidden items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted)] 2xl:inline-flex">
                <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
                Women first
              </div>
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
                  <div key={link.key} className="space-y-2">
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'surface-card block px-4 py-3 text-sm font-medium',
                        link.active
                          ? 'bg-[linear-gradient(135deg,var(--accent),var(--accent-secondary))] text-[var(--accent-contrast)]'
                          : 'text-[var(--text)]'
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.children.length > 0 ? (
                      <div className="ml-4 grid gap-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.key}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              'rounded-[1rem] border border-[var(--border)] px-3 py-2.5 text-sm transition-colors',
                              child.active
                                ? 'bg-[var(--accent-soft)] text-[var(--text)]'
                                : 'text-[var(--muted)] hover:bg-white/35 hover:text-[var(--text)]'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
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
