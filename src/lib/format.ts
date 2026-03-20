import type {AppLocale} from '@/i18n/routing';

const localeMap: Record<AppLocale, string> = {
  de: 'de-DE',
  fr: 'fr-FR'
};

export function formatDate(date: string, locale: AppLocale) {
  return new Intl.DateTimeFormat(localeMap[locale], {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date(date));
}
