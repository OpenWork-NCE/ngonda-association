import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {MetricGridWidget, TeamMemberWidget} from '@/components/premium-widgets';
import {Reveal} from '@/components/reveal';
import {getSiteContent, isAppLocale, teamMembers} from '@/data/site-content';
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function AboutPage({params}: PageProps<'/[locale]/about'>) {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const tPages = await getTranslations({locale, namespace: 'pages'});
  const content = getSiteContent(locale);

  const metrics = [
    {
      value: `${teamMembers.length}`,
      label: locale === 'de' ? 'Leitung & Governance' : 'gouvernance'
    },
    {
      value: 'DE / FR',
      label: locale === 'de' ? 'Sprachen im Einsatz' : 'langues mobilisees'
    },
    {
      value: 'Aachen',
      label: locale === 'de' ? 'Verankert vor Ort' : 'ancrage local'
    }
  ];

  return (
    <PageContainer>
      <div className="space-y-12">
        <Reveal>
          <PageHero
            eyebrow="NGONDA e.V."
            title={tPages('aboutTitle')}
            description={content.aboutInstitution[0]}
            metrics={metrics}
            artwork={
              <div className="relative mx-auto w-full max-w-[24rem]">
                <SurfaceCard className="overflow-hidden p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
                    <Image
                      src="/gallery/community-support.avif"
                      alt="NGONDA community"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 26rem, 100vw"
                    />
                    <div className="media-overlay-strong" />
                    <div className="absolute bottom-5 left-5 right-5 contrast-on-media">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] contrast-on-media-muted">
                        {locale === 'de' ? 'Organisation' : 'Organisation'}
                      </p>
                      <p className="mt-2 text-lg font-semibold leading-tight">
                        {locale === 'de'
                          ? 'Eine junge Struktur mit klarer Haltung und verbindlicher Naehe.'
                          : 'Une jeune structure, claire dans sa posture et solide dans sa proximite.'}
                      </p>
                    </div>
                  </div>
                </SurfaceCard>
              </div>
            }
          />
        </Reveal>

        <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <SurfaceCard className="h-full p-6 sm:p-8">
              <SectionTitle
                title={locale === 'de' ? 'Institution & Positionierung' : 'Institution & positionnement'}
                description={content.aboutInstitution[1]}
              />
              <div className="mt-5 space-y-4 text-sm leading-8 text-[var(--muted)] sm:text-base">
                {content.aboutInstitution.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </SurfaceCard>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.05}>
              <SurfaceCard tone="contrast" className="p-6 sm:p-7">
                <SectionTitle
                  title={locale === 'de' ? 'Koordination' : 'Coordination'}
                  description={
                    locale === 'de'
                      ? 'Zivilgesellschaftliche Praxis, Moderation und operative Projektsteuerung.'
                      : 'Pratique de terrain, moderation et pilotage operationnel des projets.'
                  }
                />
                <p className="mt-5 text-sm leading-8 text-[var(--muted)] sm:text-base">
                  {content.coordinatorProfile}
                </p>
              </SurfaceCard>
            </Reveal>

            <Reveal delay={0.1}>
              <MetricGridWidget
                title={locale === 'de' ? 'Leitbild in Signalen' : 'Cap en signaux'}
                metrics={[
                  {
                    value: locale === 'de' ? 'Dialog' : 'Dialogue',
                    label: locale === 'de' ? 'Methode' : 'methode',
                    note: locale === 'de' ? content.vision[0] : content.vision[0]
                  },
                  {
                    value: locale === 'de' ? 'Teilhabe' : 'Participation',
                    label: locale === 'de' ? 'Zielbild' : 'horizon',
                    note: locale === 'de' ? content.vision[1] : content.vision[1]
                  }
                ]}
              />
            </Reveal>
          </div>
        </section>

        <section className="space-y-6">
          <SectionTitle
            title={locale === 'de' ? 'Leitungsteam' : 'Equipe dirigeante'}
            description={
              locale === 'de'
                ? 'Menschen, die Strategie, Organisation und Sichtbarkeit des Vereins tragen.'
                : 'Celles qui portent la strategie, l organisation et la visibilite de l association.'
            }
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={0.05 * index}>
                <TeamMemberWidget
                  member={member}
                  index={index}
                  locale={locale}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
