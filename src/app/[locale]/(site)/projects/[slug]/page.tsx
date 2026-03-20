import {BackLink, PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {currentProjects, getLocalized, getProjectBySlug, isAppLocale} from '@/data/site-content';
import Image from 'next/image';
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
              <SurfaceCard className="overflow-hidden p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem]">
                  <Image
                    src={project.featuredImage.src}
                    alt={getLocalized(project.featuredImage.alt, locale)}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 24rem, 100vw"
                    priority
                  />
                  <div className="media-overlay-strong" />
                  <div className="absolute bottom-4 left-4 right-4 contrast-on-media">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.27em] contrast-on-media-muted">
                      {locale === 'de' ? 'Projektprofil' : 'profil projet'}
                    </p>
                    <p className="mt-2 text-xl font-semibold leading-tight">
                      {getLocalized(project.title, locale)}
                    </p>
                  </div>
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

        <section className="space-y-6">
          <SectionTitle
            title={locale === 'de' ? 'Projektgalerie' : 'Galerie du projet'}
            description={
              locale === 'de'
                ? 'Visuelle Eindruecke aus Umsetzung, Dialog und Community-Arbeit.'
                : 'Apercus visuels de la mise en oeuvre, du dialogue et du travail communautaire.'
            }
          />
          <div className="grid gap-4 md:grid-cols-3">
            {project.gallery.map((item, index) => (
              <Reveal key={item.src} delay={0.05 * index}>
                <SurfaceCard className="overflow-hidden p-2.5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                    <Image
                      src={item.src}
                      alt={getLocalized(item.alt, locale)}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
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
