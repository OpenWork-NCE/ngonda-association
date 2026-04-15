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

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="control-chip inline-flex h-11 w-11 items-center justify-center text-[var(--text)] transition-colors hover:text-[var(--accent)]"
      aria-label={t('theme')}
      title={t('theme')}
      disabled={!mounted}
    >
      {mounted ? (
        isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
      ) : (
        <span className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
