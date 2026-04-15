import { contactDetails, getSiteContent, socialLinks } from '@/data/site-content';
import { Link } from '@/i18n/navigation';
import type { AppLocale } from '@/i18n/routing';
import {ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone, Youtube} from 'lucide-react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const SECONDARY_LINKS = [
  { href: '/', key: 'home' },
  { href: '/news', key: 'news' },
  { href: '/about', key: 'about' },
  { href: '/gallery', key: 'gallery' },
  { href: '/brochure', key: 'brochure' },
  { href: '/funders', key: 'funders' },
  { href: '/impressum', key: 'impressum' }
] as const;

const SOCIAL_ICONS = {
  facebook: Facebook,
  youtube: Youtube,
  instagram: Instagram
} as const;

export async function SiteFooter({ locale }: { locale: AppLocale }) {
  const t = await getTranslations({ locale, namespace: 'footer' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const tBrand = await getTranslations({ locale, namespace: 'brand' });
  const content = getSiteContent(locale);

  return (
    <footer className="relative mt-10 border-t border-[var(--border)] bg-[var(--footer-bg)]">
      <div className="mx-auto w-full max-w-[92rem] px-4 pb-8 pt-12 sm:px-6 lg:px-10">
        <div className="surface-card surface-card-accent mb-6 px-6 py-6 contrast-on-accent sm:px-8 sm:py-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] contrast-on-accent-muted">
                NGONDA e.V. • {content.localeLabel}
              </p>
              <div className="space-y-2">
                <h3 className="text-3xl font-semibold sm:text-4xl">
                  {locale === 'de'
                    ? 'Ein Auftritt, der Fürsorge und institutionelle Stärke zugleich vermittelt.'
                    : 'Une présence qui conjugue soin, impact et crédibilité institutionnelle.'}
                </h3>
                <p className="max-w-3xl text-sm leading-7 contrast-on-accent-muted sm:text-base">
                  {content.description}
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/12 px-5 py-3 text-sm font-semibold contrast-on-accent transition hover:bg-white/18"
            >
              {locale === 'de' ? 'Zusammenarbeit anfragen' : 'Demander une collaboration'}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div className="surface-card px-6 py-6 sm:px-7">
            <div className="flex items-center gap-4">
              <div className="rounded-[1.35rem] border border-[var(--border-strong)] bg-[var(--surface-strong)] px-3.5 py-2.5">
                <Image
                  src="/ngonda-logo.png"
                  alt="NGONDA e.V."
                  width={970}
                  height={257}
                  className="h-10 w-auto object-contain sm:h-11"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                  {tBrand('slogan')}
                </p>
                <h4 className="mt-1 text-2xl font-semibold text-[var(--text)]">NGONDA e.V.</h4>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
              {content.description}
            </p>

            <div className="mt-6 grid gap-3 text-sm">
              <div className="flex items-start gap-3 rounded-[1.4rem] border border-[var(--border)] bg-white/25 px-4 py-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--accent)]" />
                <div className="leading-6 text-[var(--text)]">
                  <p>{contactDetails.organization}</p>
                  <p>{contactDetails.street}</p>
                  <p>{contactDetails.careOf}</p>
                  <p>{contactDetails.city}</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-[var(--border)] bg-white/25 px-4 py-3 text-[var(--text)]">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[var(--accent)]" />
                    <span>{contactDetails.officePhone}</span>
                  </div>
                </div>
                <div className="rounded-[1.4rem] border border-[var(--border)] bg-white/25 px-4 py-3 text-[var(--text)]">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[var(--accent)]" />
                    <a href="mailto:info@ngonda.de" className="hover:text-[var(--accent)]">
                      info@ngonda.de
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="surface-card surface-card-contrast px-6 py-6 sm:px-7">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
              {t('quickLinks')}
            </h4>
            <ul className="mt-5 grid gap-2 text-sm">
              {SECONDARY_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-[1rem] border border-transparent px-3 py-2 text-[var(--text)] transition hover:border-[var(--border)] hover:bg-white/35 hover:text-[var(--accent)]"
                  >
                    <span>{tNav(item.key)}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card surface-card-muted px-6 py-6 sm:px-7">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
              {locale === 'de' ? 'Recht & Organisation' : 'Cadre légal & organisation'}
            </h4>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {locale === 'de'
                ? 'Institutionelle Referenzen, Bankdaten und formale Kennzahlen der Organisation.'
                : 'Références institutionnelles, coordonnées bancaires et informations formelles de l’organisation.'}
            </p>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/22 p-4 text-xs leading-6 text-[var(--muted)]">
              <p>{contactDetails.vr}</p>
              <p>{contactDetails.ust}</p>
              <p>Office: {contactDetails.officePhone}</p>
              <p>Tel: {contactDetails.mobilePhone}</p>
              <p>IBAN: {contactDetails.iban}</p>
              <p>BIC: {contactDetails.bic}</p>
            </div>
          </div>
        </div>

        <div className="premium-divider mt-6" />

        <div className="flex flex-col gap-4 px-1 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((item) => {
              const Icon = SOCIAL_ICONS[item.id];

              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="control-chip inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] hover:text-[var(--text)]"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>

          <div className="text-xs text-[var(--muted)]">
            {t('copyright', { year: new Date().getFullYear() })}
          </div>
        </div>
      </div>
    </footer>
  );
}
