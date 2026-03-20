import {BackLink, PageContainer, PageHero, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {currentProjects, getLocalized, getProjectBySlug, isAppLocale} from '@/data/site-content';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function ProjectDetailPage({
  params
}: PageProps<'/[locale]/projects/[slug]'>) {
  const {locale, slug} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const project = getProjectBySlug(locale, slug);

  if (!project) {
    notFound();
  }

  const tPages = await getTranslations({locale, namespace: 'pages'});
  const projectIndex = currentProjects.findIndex((item) => item.id === project.id);

  return (
    <PageContainer>
      <div className="space-y-8">
        <BackLink href="/projects" label={tPages('projectsTitle')} />

        <Reveal>
          <PageHero
            eyebrow={locale === 'de' ? 'Projektprofil' : 'Profil projet'}
            title={getLocalized(project.title, locale)}
            description={getLocalized(project.body[0], locale)}
            metrics={[
              {
                value: `0${projectIndex + 1}`,
                label: locale === 'de' ? 'Position im Portfolio' : 'position dans le portefeuille'
              },
              {
                value: `${project.body.length}`,
                label: locale === 'de' ? 'inhaltliche Ebenen' : 'niveaux de contenu'
              }
            ]}
            artwork={
              <SurfaceCard tone="contrast" className="p-6 sm:p-7">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                  {locale === 'de' ? 'Projektkern' : 'noyau du projet'}
                </p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                  {project.body.slice(1).map((paragraph) => (
                    <p key={paragraph.de}>{getLocalized(paragraph, locale)}</p>
                  ))}
                </div>
              </SurfaceCard>
            }
          />
        </Reveal>

        <Reveal>
          <SurfaceCard className="p-6 sm:p-10">
            <article className="prose prose-zinc max-w-none dark:prose-invert prose-p:leading-8">
              {project.body.map((paragraph) => (
                <p key={paragraph.de}>{getLocalized(paragraph, locale)}</p>
              ))}
            </article>
          </SurfaceCard>
        </Reveal>
      </div>
    </PageContainer>
  );
}
