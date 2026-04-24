import {contactDetails, getSiteContent, socialLinks} from '@/data/site-content';
import {Link} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';
import {ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone, Youtube} from 'lucide-react';
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';

const SECONDARY_LINKS = [
  {href: '/', key: 'home'},
  {href: '/news', key: 'news'},
  {href: '/about', key: 'about'},
  {href: '/gallery', key: 'gallery'},
  {href: '/brochure', key: 'brochure'},
  {href: '/funders', key: 'funders'},
  {href: '/impressum', key: 'impressum'}
] as const;

const SOCIAL_ICONS = {
  facebook: Facebook,
  youtube: Youtube,
  instagram: Instagram
} as const;

export async function SiteFooter({locale}: {locale: AppLocale}) {
  const t = await getTranslations({locale, namespace: 'footer'});
  const tNav = await getTranslations({locale, namespace: 'nav'});
  const tBrand = await getTranslations({locale, namespace: 'brand'});
  const content = getSiteContent(locale);

  return (
    <footer className="relative mt-8">
      <div className="w-full pt-10">
        <div className="relative w-full overflow-hidden border-t border-[var(--border-strong)] bg-[var(--footer-bg)]">
          {/* Background layers — Mastra-style: dark base + subtle accent glows */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_0%,var(--glow-primary),transparent_50%),radial-gradient(ellipse_50%_40%_at_100%_100%,var(--glow-secondary),transparent_50%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />

          {/* ── CTA band ── */}
          <div className="relative border-b border-[var(--border-strong)]">
            <div className="mx-auto grid w-full max-w-[92rem] gap-6 px-4 py-7 sm:px-6 sm:py-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
              <div className="space-y-3">
                <p className="section-label">
                  NGONDA e.V. • {content.localeLabel}
                </p>
                <h3 className="max-w-3xl text-3xl font-semibold leading-tight text-[var(--text)] sm:text-4xl">
                  {locale === 'de'
                    ? 'Fürsorge und institutionelle Stärke — vereint.'
                    : 'Soin, impact et crédibilité institutionnelle — réunis.'}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">
                  {content.description}
                </p>
              </div>

              <Link href="/contact" className="btn-ghost shrink-0">
                {locale === 'de' ? 'Zusammenarbeit anfragen' : 'Demander une collaboration'}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* ── Main columns ── */}
          <div className="relative mx-auto grid w-full max-w-[92rem] gap-0 lg:grid-cols-[1.2fr_0.85fr_0.85fr]">
            {/* Col 1 — Brand + contact */}
            <div className="px-4 py-7 sm:px-6 lg:px-10">
              <div className="flex items-center gap-3.5">
                <div className="shrink-0 rounded-[var(--radius-sm)] border border-[var(--accent-secondary-medium)] bg-[var(--accent-secondary-soft)] px-3 py-2 shadow-[var(--shadow-soft)]">
                  <Image
                    src="/ngonda-logo.png"
                    alt="NGONDA e.V."
                    width={970}
                    height={257}
                    className="h-9 w-auto object-contain sm:h-10"
                  />
                </div>
                <div>
                  <p className="label-xs">{tBrand('slogan')}</p>
                  <h4 className="mt-1 text-xl font-semibold text-[var(--text)]">NGONDA e.V.</h4>
                </div>
              </div>

              <p className="mt-5 max-w-xs text-sm leading-7 text-[var(--muted)]">
                {content.description}
              </p>

              <div className="mt-6 space-y-2 text-sm">
                <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--accent-secondary-medium)] bg-[var(--accent-secondary-soft)] px-4 py-3 text-[var(--text)]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-secondary)]" />
                  <div className="leading-6">
                    <p>{contactDetails.organization}</p>
                    <p className="text-[var(--muted)]">{contactDetails.street}</p>
                    <p className="text-[var(--muted)]">{contactDetails.careOf}</p>
                    <p className="text-[var(--muted)]">{contactDetails.city}</p>
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--accent-secondary-medium)] bg-[var(--accent-secondary-soft)] px-4 py-3 text-[var(--text)]">
                    <Phone className="h-4 w-4 shrink-0 text-[var(--accent-secondary)]" />
                    <span className="text-sm">{contactDetails.officePhone}</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--accent-secondary-medium)] bg-[var(--accent-secondary-soft)] px-4 py-3 text-[var(--text)]">
                    <Mail className="h-4 w-4 shrink-0 text-[var(--accent-secondary)]" />
                    <a
                      href="mailto:info@ngonda.de"
                      className="text-sm transition-colors hover:text-[var(--accent)]"
                    >
                      info@ngonda.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 2 — Quick links */}
            <div className="border-t border-[var(--border-strong)] px-4 py-7 sm:px-6 lg:border-l lg:border-t-0 lg:px-7">
              <h4 className="label-sm">{t('quickLinks')}</h4>
              <ul className="mt-5 space-y-0.5 text-sm">
                {SECONDARY_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between rounded-[var(--radius-sm)] border border-transparent px-3 py-2.5 text-[var(--text)] transition-all duration-[var(--dur-fast)] hover:border-[var(--accent-secondary-medium)] hover:bg-[var(--accent-secondary-soft)] hover:text-[var(--accent-secondary)]"
                    >
                      <span>{tNav(item.key)}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-[var(--dur-fast)] group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Legal */}
            <div className="border-t border-[var(--border-strong)] px-4 py-7 sm:px-6 lg:border-l lg:border-t-0 lg:px-7">
              <h4 className="label-sm">
                {locale === 'de' ? 'Recht & Organisation' : 'Cadre légal & organisation'}
              </h4>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {locale === 'de'
                  ? 'Institutionelle Referenzen, Bankdaten und formale Kennzahlen.'
                  : 'Références institutionnelles, coordonnées et informations formelles.'}
              </p>
              <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--accent-secondary-medium)] bg-[var(--accent-secondary-soft)] p-4 text-xs leading-6 text-[var(--muted)]">
                <p>{contactDetails.vr}</p>
                <p>{contactDetails.ust}</p>
                <p className="mt-2">Office: {contactDetails.officePhone}</p>
                <p>Tel: {contactDetails.mobilePhone}</p>
                <p className="mt-2">IBAN: {contactDetails.iban}</p>
                <p>BIC: {contactDetails.bic}</p>
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="relative border-t border-[var(--border-strong)]">
            <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((item) => {
                  const Icon = SOCIAL_ICONS[item.id];

                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-secondary-medium)] bg-[var(--accent-secondary-soft)] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent-secondary-strong)] transition-colors duration-[var(--dur-fast)] hover:bg-[var(--accent-secondary-medium)] hover:text-[var(--text)]"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {item.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  );
                })}
              </div>

              <p className="text-xs text-[var(--muted)]">
                {t('copyright', {year: new Date().getFullYear()})}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
