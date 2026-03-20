import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {getSiteContent, isAppLocale} from '@/data/site-content';
import {BadgeAlert} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function OnlineServicePage({
  params
}: PageProps<'/[locale]/online-service'>) {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const tPages = await getTranslations({locale, namespace: 'pages'});
  const content = getSiteContent(locale);

  return (
    <PageContainer>
      <div className="space-y-10">
        <Reveal>
          <PageHero
            eyebrow={locale === 'de' ? 'Digitaler Zugang' : 'Acces digital'}
            title={tPages('onlineServiceTitle')}
            description={content.onlineServiceNote}
            metrics={[
              {
                value: '24/7',
                label: locale === 'de' ? 'digitaler Zugang' : 'acces numerique'
              }
            ]}
          />
        </Reveal>

        <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SurfaceCard className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <BadgeAlert className="mt-1 h-6 w-6 text-[var(--accent)]" />
                <div>
                  <SectionTitle
                    title={
                      locale === 'de'
                        ? 'Servicebereich'
                        : 'Espace de service'
                    }
                    description={
                      locale === 'de'
                        ? 'Digitaler Zugang zu Informationen, Kontaktwegen und Unterlagen der Organisation.'
                        : 'Acces numerique aux informations, canaux de contact et documents de l organisation.'
                    }
                  />
                  <p className="mt-5 text-sm leading-8 text-[var(--muted)]">
                    {locale === 'de'
                      ? 'Der Online-Service unterstuetzt Teilnehmende und Partner mit klaren digitalen Kontaktpunkten sowie strukturierten Informationen zu Angeboten und Begleitung.'
                      : 'Le service en ligne accompagne participantes et partenaires avec des points de contact numeriques clairs et des informations structurees sur les services proposes.'}
                  </p>
                </div>
              </div>
            </SurfaceCard>
          </Reveal>

          <Reveal delay={0.06}>
            <SurfaceCard tone="contrast" className="p-6 sm:p-8">
              <SectionTitle
                title={locale === 'de' ? 'Leistungen' : 'Services'}
              />
              <div className="mt-5 space-y-3">
                {[
                  locale === 'de' ? 'Termin- und Kontaktanfragen' : 'Demandes de rendez-vous et de contact',
                  locale === 'de' ? 'Mehrsprachige Informationswege' : 'Parcours d information multilingues',
                  locale === 'de' ? 'Serviceorientierte Weiterleitung zu Projekten und Beratung' : 'Orientation vers les projets et l accompagnement'
                ].map((item) => (
                  <div key={item} className="rounded-[1.2rem] border border-[var(--border)] bg-white/25 px-4 py-3 text-sm text-[var(--text)]">
                    {item}
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
