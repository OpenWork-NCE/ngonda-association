'use client';

import {Moon, Sun} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {useTheme} from 'next-themes';
import {useSyncExternalStore} from 'react';

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const t = useTranslations('actions');
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="control-chip inline-flex h-10 w-10 items-center justify-center text-[var(--text)] hover:text-[var(--accent)]"
      aria-label={t('theme')}
      title={t('theme')}
      disabled={!mounted}
    >
      <span className="relative block h-4 w-4">
        <Sun
          className={`absolute inset-0 h-4 w-4 transition-all duration-[var(--dur-base)] ${
            mounted && isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-50 opacity-0'
          }`}
        />
        <Moon
          className={`absolute inset-0 h-4 w-4 transition-all duration-[var(--dur-base)] ${
            mounted && !isDark
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-90 scale-50 opacity-0'
          }`}
        />
      </span>
    </button>
  );
}
