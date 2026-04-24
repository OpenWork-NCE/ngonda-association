import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {getSiteContent, isAppLocale} from '@/data/site-content';
import {CheckCircle2} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function OnlineServicePage({params}: PageProps<'/[locale]/online-service'>) {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const tPages = await getTranslations({locale, namespace: 'pages'});
  const content = getSiteContent(locale);

  const services = [
    locale === 'de' ? 'Termin- und Kontaktanfragen' : 'Demandes de rendez-vous et de contact',
    locale === 'de' ? 'Mehrsprachige Informationswege' : 'Parcours d\'information multilingues',
    locale === 'de'
      ? 'Serviceorientierte Weiterleitung zu Projekten und Beratung'
      : 'Orientation vers les projets et l\'accompagnement'
  ];

  return (
    <PageContainer>
      <div className="space-y-10">
        <Reveal>
          <PageHero
            eyebrow={locale === 'de' ? 'Digitaler Zugang' : 'Accès digital'}
            title={tPages('onlineServiceTitle')}
            description={content.onlineServiceNote}
            metrics={[
              {
                value: '24/7',
                label: locale === 'de' ? 'digitaler Zugang' : 'accès numérique'
              }
            ]}
          >
            <div className="flex flex-wrap gap-3">
              <span className="status-indicator status-indicator-green">
                {locale === 'de' ? 'Online' : 'En ligne'}
              </span>
              <span className="status-indicator">
                DE / FR
              </span>
            </div>
          </PageHero>
        </Reveal>

        <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ── Service area ── */}
          <Reveal>
            <SurfaceCard className="p-6 sm:p-8" interactive={false}>
              <SectionTitle
                title={locale === 'de' ? 'Servicebereich' : 'Espace de service'}
                description={
                  locale === 'de'
                    ? 'Digitaler Zugang zu Informationen, Kontaktwegen und Unterlagen der Organisation.'
                    : 'Accès numérique aux informations, canaux de contact et documents de l\'organisation.'
                }
              />
              <p className="mt-5 text-sm leading-8 text-[var(--muted)]">
                {locale === 'de'
                  ? 'Der Online-Service unterstützt Teilnehmende und Partner mit klaren digitalen Kontaktpunkten sowie strukturierten Informationen zu Angeboten und Begleitung.'
                  : 'Le service en ligne accompagne participantes et partenaires avec des points de contact numériques clairs et des informations structurées sur les services proposés.'}
              </p>

              {/* Mastra-style info blocks */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    label: locale === 'de' ? 'Sprachen' : 'Langues',
                    value: 'DE / FR'
                  },
                  {
                    label: locale === 'de' ? 'Verfügbarkeit' : 'Disponibilité',
                    value: '24 / 7'
                  }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[var(--radius-md)] border border-[var(--border)] bg-tint/14 px-4 py-3"
                  >
                    <p className="label-xs">{item.label}</p>
                    <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </Reveal>

          {/* ── Services list ── */}
          <Reveal delay={0.06}>
            <SurfaceCard tone="contrast" className="p-6 sm:p-8" interactive={false}>
              <div className="flex items-start justify-between gap-3">
                <SectionTitle title={locale === 'de' ? 'Leistungen' : 'Services'} />
                <span className="status-indicator status-indicator-green shrink-0">
                  {locale === 'de' ? 'Aktiv' : 'Actifs'}
                </span>
              </div>
              <div className="mt-6 space-y-3">
                {services.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-tint/14 px-4 py-3.5 text-sm text-[var(--text)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                    <span className="leading-6">{item}</span>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </Reveal>
        </section>
      </div>
    </PageContainer>
  );
}
