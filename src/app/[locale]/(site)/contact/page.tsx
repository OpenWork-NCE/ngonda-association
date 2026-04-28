import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {contactDetails, isAppLocale, socialLinks} from '@/data/site-content';
import {ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone, Youtube} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

const SOCIAL_ICONS = {
  facebook: Facebook,
  youtube: Youtube,
  instagram: Instagram
} as const;

export default async function ContactPage({params}: PageProps<'/[locale]/contact'>) {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const tPages = await getTranslations({locale, namespace: 'pages'});

  return (
    <PageContainer>
      <div className="space-y-10">
        <Reveal>
          <PageHero
            eyebrow="NGONDA e.V."
            title={tPages('contactTitle')}
            description={
              locale === 'de'
                ? 'Kontaktpunkt für Beratung, Kooperationen, institutionelle Anfragen und Projektpartnerschaften.'
                : 'Point de contact pour accompagnement, coopération, relations institutionnelles et partenariats projets.'
            }
            metrics={[
              {value: 'Aachen', label: locale === 'de' ? 'Standort' : 'implantation'},
              {value: 'DE / FR', label: locale === 'de' ? 'Sprachliche Begleitung' : 'accompagnement bilingue'}
            ]}
            artwork={
              <div className="grid gap-3">
                {/* Mastra-style availability indicator */}
                <div className="flex justify-end">
                  <span className="status-indicator status-indicator-green">
                    {locale === 'de' ? 'Erreichbar' : 'Disponible'}
                  </span>
                </div>
                <SurfaceCard tone="contrast" className="p-5" interactive={false}>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--accent-soft)]">
                      <MapPin className="h-4 w-4 text-[var(--accent)]" />
                    </div>
                    <div className="text-sm leading-6 text-[var(--text)]">
                      <p className="font-semibold">{contactDetails.street}</p>
                      <p className="text-[var(--muted)]">{contactDetails.careOf}</p>
                      <p className="text-[var(--muted)]">{contactDetails.city}</p>
                    </div>
                  </div>
                </SurfaceCard>
                <SurfaceCard tone="muted" className="p-5" interactive={false}>
                  <div className="flex items-center gap-3 text-sm text-[var(--text)]">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--accent-soft)]">
                      <Phone className="h-4 w-4 text-[var(--accent)]" />
                    </div>
                    <span>{contactDetails.phone}</span>
                  </div>
                </SurfaceCard>
                <SurfaceCard className="p-5" interactive={false}>
                  <div className="flex items-center gap-3 text-sm text-[var(--text)]">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--accent-soft)]">
                      <Mail className="h-4 w-4 text-[var(--accent)]" />
                    </div>
                    <a href={contactDetails.emailHref} className="hover:text-[var(--accent)]">
                      {contactDetails.email}
                    </a>
                  </div>
                </SurfaceCard>
              </div>
            }
          />
        </Reveal>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <SurfaceCard className="p-6 sm:p-8" interactive={false}>
              <SectionTitle
                title={locale === 'de' ? 'Direkter Kontakt' : 'Contact direct'}
                description={
                  locale === 'de'
                    ? 'Wir antworten auf Kooperationsanfragen, Teilnahmeanfragen und institutionelle Kontakte.'
                    : 'Nous répondons aux demandes de coopération, de participation et de contact institutionnel.'
                }
              />
              <div className="mt-6 space-y-3 text-sm">
                {/* Address */}
                <div className="flex items-start gap-4 rounded-[var(--radius-md)] border border-[var(--border)] bg-tint/14 p-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-strong)]">
                    <MapPin className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                  <div className="text-[var(--muted)]">
                    <p className="font-semibold text-[var(--text)]">{contactDetails.organization}</p>
                    <p>{contactDetails.street}</p>
                    <p>{contactDetails.careOf}</p>
                    <p>{contactDetails.city}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 rounded-[var(--radius-md)] border border-[var(--border)] bg-tint/14 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-strong)]">
                    <Phone className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                  <span className="text-[var(--muted)]">{contactDetails.phone}</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 rounded-[var(--radius-md)] border border-[var(--border)] bg-tint/14 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-strong)]">
                    <Mail className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                  <a href={contactDetails.emailHref} className="text-[var(--accent)] hover:underline">
                    {contactDetails.email}
                  </a>
                </div>
              </div>
            </SurfaceCard>
          </Reveal>

          <Reveal delay={0.06}>
            <SurfaceCard tone="contrast" className="p-6 sm:p-8" interactive={false}>
              <div className="flex items-start justify-between gap-3">
                <SectionTitle
                  title={locale === 'de' ? 'Soziale Netzwerke' : 'Réseaux sociaux'}
                  description={
                    locale === 'de'
                      ? 'Bleiben Sie über Community-Aktivitäten, Hinweise und Veröffentlichungen auf dem Laufenden.'
                      : 'Suivez les activités communautaires, les annonces et les publications.'
                  }
                />
                <span className="status-indicator status-indicator-green shrink-0">
                  {locale === 'de' ? 'Aktiv' : 'Actifs'}
                </span>
              </div>
              <div className="mt-6 space-y-3">
                {socialLinks.map((item) => {
                  const Icon = SOCIAL_ICONS[item.id];

                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--border)] bg-tint/14 px-4 py-3.5 text-sm font-medium text-[var(--text)] transition-all duration-[var(--dur-base)] hover:border-[var(--border-strong)] hover:bg-tint/25 hover:text-[var(--accent)]"
                    >
                      <span className="inline-flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-strong)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        {item.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-50" />
                    </a>
                  );
                })}
              </div>
            </SurfaceCard>
          </Reveal>
        </section>
      </div>
    </PageContainer>
  );
}
