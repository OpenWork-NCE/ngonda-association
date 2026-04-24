'use client';

import {cn} from '@/lib/utils';
import {ArrowUp} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {useEffect, useState} from 'react';
import {LanguageSwitcher} from './language-switcher';

export function FloatingActions() {
  const t = useTranslations('actions');
  const [showLiftedState, setShowLiftedState] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowLiftedState(window.scrollY > 120);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6">
      <div
        className={cn(
          'pointer-events-auto flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[color-mix(in_oklab,var(--surface-strong)_88%,transparent)] p-1.5 shadow-[var(--shadow-soft),var(--shadow-card)] backdrop-blur-[18px] transition-all duration-[var(--dur-base)] ease-[var(--ease-out)]',
          showLiftedState && 'translate-y-0 shadow-[var(--shadow-soft),var(--shadow-lift)]'
        )}
      >
        <LanguageSwitcher />

        <button
          type="button"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className={cn(
            'control-chip inline-flex h-11 w-11 items-center justify-center text-[var(--text)] transition-all duration-[var(--dur-base)] ease-[var(--ease-out)] hover:text-[var(--accent)]',
            showLiftedState
              ? 'translate-y-0 opacity-100'
              : 'translate-y-0 opacity-88'
          )}
          aria-label={t('backToTop')}
          title={t('backToTop')}
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
