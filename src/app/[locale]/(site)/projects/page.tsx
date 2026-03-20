import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {currentProjects, getLocalized, isAppLocale, themes} from '@/data/site-content';
import {Link} from '@/i18n/navigation';
import {ArrowRight} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function ProjectsPage({params}: PageProps<'/[locale]/projects'>) {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const tPages = await getTranslations({locale, namespace: 'pages'});
  const tActions = await getTranslations({locale, namespace: 'actions'});

  return (
    <PageContainer>
      <div className="space-y-10">
        <Reveal>
          <PageHero
            eyebrow={locale === 'de' ? 'Projektportfolio' : 'Portefeuille de projets'}
            title={tPages('projectsTitle')}
            description={
              locale === 'de'
                ? 'Vier kuratierte Programme, die Bildung, Erinnerung, Inklusion und Schutz in eine anspruchsvolle gesellschaftliche Praxis uebersetzen.'
                : 'Quatre programmes curatorises qui traduisent education, memoire, inclusion et protection en actions sociales concretes.'
            }
            metrics={[
              {
                value: `${currentProjects.length}`,
                label: locale === 'de' ? 'laufende Formate' : 'formats en cours'
              },
              {
                value: `${themes.length}`,
                label: locale === 'de' ? 'verbundene Themen' : 'axes relies'
              },
              {
                value: 'DE / FR',
                label: locale === 'de' ? 'mehrsprachige Vermittlung' : 'mediation bilingue'
              }
            ]}
            artwork={
              <div className="grid gap-3">
                {currentProjects.slice(0, 3).map((project, index) => (
                  <SurfaceCard
                    key={project.id}
                    tone={index === 1 ? 'contrast' : 'default'}
                    className="p-4 sm:p-5"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
                      0{index + 1}
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-tight text-[var(--text)]">
                      {getLocalized(project.title, locale)}
                    </p>
                  </SurfaceCard>
                ))}
              </div>
            }
          />
        </Reveal>

        <section className="space-y-6">
          <SectionTitle
            title={locale === 'de' ? 'Projektlandschaft' : 'Cartographie des projets'}
            description={
              locale === 'de'
                ? 'Jedes Projekt besitzt eine eigene Tonalitaet, bleibt aber in einem klaren institutionellen System lesbar.'
                : 'Chaque projet garde sa singularite tout en restant lisible dans une meme grammaire institutionnelle.'
            }
          />
          <div className="grid gap-5 md:grid-cols-2">
            {currentProjects.map((project, index) => (
              <Reveal key={project.id} delay={0.06 * index}>
                <SurfaceCard
                  tone={index % 2 === 0 ? 'default' : 'contrast'}
                  className="h-full p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                      {locale === 'de' ? 'Projekt' : 'Projet'} 0{index + 1}
                    </p>
                    <div className="rounded-full border border-[var(--border)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                      NGONDA
                    </div>
                  </div>

                  <h2 className="mt-4 text-3xl font-semibold text-[var(--text)]">
                    {getLocalized(project.title, locale)}
                  </h2>

                  <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {project.body.slice(0, 2).map((paragraph) => (
                      <p key={paragraph.de}>{getLocalized(paragraph, locale)}</p>
                    ))}
                  </div>

                  <Link
                    href={{
                      pathname: '/projects/[slug]',
                      params: {slug: getLocalized(project.slug, locale)}
                    }}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                  >
                    {tActions('readMore')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
