'use client';

import {routing, type AppLocale} from '@/i18n/routing';
import {usePathname, useRouter} from '@/i18n/navigation';
import {cn} from '@/lib/utils';
import {useLocale, useTranslations} from 'next-intl';

export function LanguageSwitcher() {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('actions');

  return (
    <div
      className="control-chip inline-flex items-center gap-1 p-1"
      aria-label={t('language')}
      title={t('language')}
    >
      {routing.locales.map((nextLocale) => {
        const active = locale === nextLocale;

        return (
          <button
            key={nextLocale}
            type="button"
            onClick={() =>
              router.replace(
                // next-intl handles localized pathnames from the current pathname.
                pathname as never,
                {locale: nextLocale}
              )
            }
            className={cn(
              'rounded-full px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] transition-colors',
              active
                ? 'bg-[linear-gradient(135deg,var(--accent),var(--accent-secondary))] text-[var(--accent-contrast)] shadow-[0_14px_32px_-20px_rgba(14,29,25,0.55)]'
                : 'text-[var(--muted)] hover:bg-white/40 hover:text-[var(--text)]'
            )}
          >
            {nextLocale}
          </button>
        );
      })}
    </div>
  );
}
