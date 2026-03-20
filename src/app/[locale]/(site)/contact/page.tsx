import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {contactDetails, isAppLocale, socialLinks} from '@/data/site-content';
import {Mail, MapPin, Phone} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

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
                ? 'Kontaktpunkt fuer Beratung, Kooperationen, institutionelle Anfragen und Projektpartnerschaften.'
                : 'Point de contact pour accompagnement, cooperation, relations institutionnelles et partenariats projets.'
            }
            metrics={[
              {
                value: 'Aachen',
                label: locale === 'de' ? 'Standort' : 'implantation'
              },
              {
                value: 'DE / FR',
                label: locale === 'de' ? 'sprachliche Begleitung' : 'accompagnement bilingue'
              }
            ]}
            artwork={
              <div className="grid gap-3">
                <SurfaceCard tone="contrast" className="p-5">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[var(--accent)]" />
                    <div className="text-sm leading-6 text-[var(--text)]">
                      <p>{contactDetails.street}</p>
                      <p>{contactDetails.careOf}</p>
                      <p>{contactDetails.city}</p>
                    </div>
                  </div>
                </SurfaceCard>
                <SurfaceCard tone="muted" className="p-5">
                  <div className="flex items-center gap-3 text-sm text-[var(--text)]">
                    <Phone className="h-4 w-4 text-[var(--accent)]" />
                    <span>{contactDetails.phone}</span>
                  </div>
                </SurfaceCard>
                <SurfaceCard className="p-5">
                  <div className="flex items-center gap-3 text-sm text-[var(--text)]">
                    <Mail className="h-4 w-4 text-[var(--accent)]" />
                    <a href="mailto:info@ngonda.de" className="hover:text-[var(--accent)]">
                      info@ngonda.de
                    </a>
                  </div>
                </SurfaceCard>
              </div>
            }
          />
        </Reveal>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <SurfaceCard className="p-6 sm:p-8">
              <SectionTitle
                title={locale === 'de' ? 'Direkter Kontakt' : 'Contact direct'}
                description={
                  locale === 'de'
                    ? 'Wir antworten auf Kooperationsanfragen, Teilnahmeanfragen und institutionelle Kontakte.'
                    : 'Nous repondons aux demandes de cooperation, de participation et de contact institutionnel.'
                }
              />
              <div className="mt-5 space-y-4 text-sm">
                <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/25 p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-[var(--accent)]" />
                    <div className="text-[var(--muted)]">
                      <p className="font-semibold text-[var(--text)]">{contactDetails.organization}</p>
                      <p>{contactDetails.street}</p>
                      <p>{contactDetails.careOf}</p>
                      <p>{contactDetails.city}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/25 p-4 text-[var(--muted)]">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[var(--accent)]" />
                    <span>{contactDetails.phone}</span>
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/25 p-4 text-[var(--muted)]">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[var(--accent)]" />
                    <a href="mailto:info@ngonda.de" className="text-[var(--accent)] hover:underline">
                      info@ngonda.de
                    </a>
                  </div>
                </div>
              </div>
            </SurfaceCard>
          </Reveal>

          <Reveal delay={0.06}>
            <SurfaceCard tone="contrast" className="p-6 sm:p-8">
              <SectionTitle
                title={locale === 'de' ? 'Soziale Netzwerke' : 'Reseaux sociaux'}
                description={
                  locale === 'de'
                    ? 'Bleiben Sie ueber Community-Aktivitaeten, Hinweise und Veroeffentlichungen auf dem Laufenden.'
                    : 'Suivez les activites communautaires, les annonces et les publications.'
                }
              />
              <div className="mt-5 space-y-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-[1.3rem] border border-[var(--border)] bg-white/25 px-4 py-3 text-sm font-medium text-[var(--text)] transition hover:bg-white/38"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </SurfaceCard>
          </Reveal>
        </section>
      </div>
    </PageContainer>
  );
}
