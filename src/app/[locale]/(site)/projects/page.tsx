import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {currentProjects, getLocalized, isAppLocale, themes} from '@/data/site-content';
import {Link} from '@/i18n/navigation';
import {ArrowRight} from 'lucide-react';
import Image from 'next/image';
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
                ? 'Vier kuratierte Programme, die Bildung, Erinnerung, Inklusion und Schutz in eine anspruchsvolle gesellschaftliche Praxis übersetzen.'
                : 'Quatre programmes curatorisés qui traduisent éducation, mémoire, inclusion et protection en actions sociales concrètes.'
            }
            metrics={[
              {
                value: `${currentProjects.length}`,
                label: locale === 'de' ? 'laufende Formate' : 'formats en cours'
              },
              {
                value: `${themes.length}`,
                label: locale === 'de' ? 'verbundene Themen' : 'axes reliés'
              },
              {
                value: 'DE / FR',
                label: locale === 'de' ? 'mehrsprachige Vermittlung' : 'médiation bilingue'
              }
            ]}
            artwork={
              <div className="relative mx-auto w-full max-w-[26rem]">
                <SurfaceCard className="overflow-hidden p-3" interactive={false}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem]">
                    <Image
                      src={currentProjects[0].featuredImage.src}
                      alt={getLocalized(currentProjects[0].featuredImage.alt, locale)}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 26rem, 100vw"
                    />
                    <div className="media-overlay-strong" />
                    {/* Mastra-style status */}
                    <div className="absolute left-4 top-4">
                      <span className="status-indicator status-indicator-green">
                        {locale === 'de' ? 'Laufend' : 'En cours'}
                      </span>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 space-y-3 contrast-on-media">
                      <h3 className="text-2xl font-semibold leading-tight">
                        {getLocalized(currentProjects[0].title, locale)}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {currentProjects.slice(1, 4).map((project) => (
                          <span
                            key={project.id}
                            className="rounded-full border border-tint/25 bg-black/26 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] contrast-on-media-muted"
                          >
                            {getLocalized(project.title, locale)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SurfaceCard>
              </div>
            }
          />
        </Reveal>

        <section className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <SectionTitle
              title={locale === 'de' ? 'Projektlandschaft' : 'Cartographie des projets'}
              description={
                locale === 'de'
                  ? 'Jedes Projekt besitzt eine eigene Tonalität, bleibt aber in einem klaren institutionellen System lesbar.'
                  : 'Chaque projet garde sa singularité tout en restant lisible dans une même grammaire institutionnelle.'
              }
            />
            <span className="status-indicator status-indicator-green shrink-0">
              {`${currentProjects.length} ${locale === 'de' ? 'Aktiv' : 'Actifs'}`}
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {currentProjects.map((project, index) => (
              <Reveal key={project.id} delay={0.06 * index}>
                <SurfaceCard
                  tone={index % 2 === 0 ? 'default' : 'contrast'}
                  className="h-full overflow-hidden p-3"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)]">
                    <Image
                      src={project.featuredImage.src}
                      alt={getLocalized(project.featuredImage.alt, locale)}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      sizes="(min-width: 1280px) 44rem, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="media-overlay-strong" />
                    <div className="absolute left-4 top-4 rounded-full border border-tint/24 bg-black/25 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.25em] contrast-on-media">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="space-y-4 px-3 pb-4 pt-5 sm:px-4 sm:pb-5">
                    <h2 className="text-3xl font-semibold text-[var(--text)]">
                      {getLocalized(project.title, locale)}
                    </h2>

                    <div className="space-y-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                      {project.body.slice(0, 2).map((paragraph) => (
                        <p key={paragraph.de}>{getLocalized(paragraph, locale)}</p>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {project.gallery.slice(0, 3).map((item) => (
                        <div key={item.src} className="relative aspect-square overflow-hidden rounded-[var(--radius-sm)]">
                          <Image
                            src={item.src}
                            alt={getLocalized(item.alt, locale)}
                            fill
                            className="object-cover"
                            sizes="120px"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <Link
                        href={{
                          pathname: '/projects/[slug]',
                          params: {slug: getLocalized(project.slug, locale)}
                        }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                      >
                        {tActions('readMore')}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <span className="status-indicator status-indicator-green">
                        {locale === 'de' ? 'Aktiv' : 'Actif'}
                      </span>
                    </div>
                  </div>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
