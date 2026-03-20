import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {
  archiveProjects,
  cooperationFrancoAllemande,
  getLocalized,
  getSiteContent,
  isAppLocale
} from '@/data/site-content';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function ArchivePage({params}: PageProps<'/[locale]/archive'>) {
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
            eyebrow={locale === 'de' ? 'Archivraum' : 'Espace archive'}
            title={tPages('archiveTitle')}
            description={content.archiveEditorialNote}
            metrics={[
              {
                value: `${archiveProjects.length}`,
                label: locale === 'de' ? 'archivierte Projekte' : 'projets archives'
              }
            ]}
          />
        </Reveal>

        <section className="space-y-6">
          <SectionTitle
            title={locale === 'de' ? 'Archivprojekte' : 'Projets archives'}
            description={
              locale === 'de'
                ? 'Historische und ergaenzende Programme dokumentieren die Entwicklung und Reichweite der Vereinsarbeit.'
                : 'Les programmes historiques et complementaires documentent l evolution et l etendue des actions de l association.'
            }
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {archiveProjects.map((project, index) => (
              <Reveal key={project.id} delay={0.05 * index}>
                <SurfaceCard
                  tone={index % 2 === 0 ? 'default' : 'contrast'}
                  className="h-full p-5"
                >
                  <h3 className="text-2xl font-semibold text-[var(--text)]">
                    {getLocalized(project.title, locale)}
                  </h3>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                    {project.body.map((paragraph) => (
                      <p key={paragraph.de}>{getLocalized(paragraph, locale)}</p>
                    ))}
                  </div>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <SurfaceCard tone="muted" className="p-6 sm:p-8">
            <SectionTitle
              title={
                locale === 'de'
                  ? 'Franzoesisch-deutsche Kooperation'
                  : 'Cooperation franco-allemande'
              }
            />
            <div className="mt-5 space-y-4 text-sm leading-8 text-[var(--muted)] sm:text-base">
              {cooperationFrancoAllemande.map((paragraph) => (
                <p key={paragraph.de}>{getLocalized(paragraph, locale)}</p>
              ))}
            </div>
          </SurfaceCard>
        </Reveal>

        <Reveal>
          <SurfaceCard tone="warning" className="p-6 sm:p-8">
            <SectionTitle
              title={locale === 'de' ? 'Dokumentierte Perspektiven' : 'Perspectives documentees'}
              description={
                locale === 'de'
                  ? 'Das Archiv verbindet Erinnerungsarbeit, Wissenstransfer und gesellschaftspolitische Einordnung.'
                  : 'Les archives relient travail de memoire, transmission des savoirs et lecture socio-politique.'
              }
            />
          </SurfaceCard>
        </Reveal>
      </div>
    </PageContainer>
  );
}
