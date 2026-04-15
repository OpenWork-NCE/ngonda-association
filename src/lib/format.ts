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

export function formatFileSize(bytes: number, locale: AppLocale) {
  return new Intl.NumberFormat(localeMap[locale], {
    style: 'unit',
    unit: 'megabyte',
    maximumFractionDigits: 1
  }).format(bytes / (1024 * 1024));
}
