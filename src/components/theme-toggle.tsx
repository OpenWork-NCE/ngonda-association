'use client';

import {Moon, Sun} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {useTheme} from 'next-themes';

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const t = useTranslations('actions');
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="control-chip inline-flex h-11 w-11 items-center justify-center text-[var(--text)] transition-colors hover:text-[var(--accent)]"
      aria-label={t('theme')}
      title={t('theme')}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
