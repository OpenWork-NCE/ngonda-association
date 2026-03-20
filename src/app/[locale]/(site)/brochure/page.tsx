import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {getSiteContent, isAppLocale} from '@/data/site-content';
import {BookMarked} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function BrochurePage({params}: PageProps<'/[locale]/brochure'>) {
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
            eyebrow="Brochure"
            title={tPages('brochureTitle')}
            description={content.brochureNote}
            metrics={[
              {
                value: 'PDF',
                label: locale === 'de' ? 'Dokumente' : 'documents'
              }
            ]}
          />
        </Reveal>

        <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <SurfaceCard className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <BookMarked className="mt-1 h-6 w-6 text-[var(--accent)]" />
                <div>
                  <SectionTitle
                    title={
                      locale === 'de'
                        ? 'Dokumentenzentrum'
                        : 'Centre documentaire'
                    }
                    description={
                      locale === 'de'
                        ? 'Zentraler Zugriff auf Unterlagen zu Programmen, Partnerschaften und Vereinsarbeit.'
                        : 'Acces centralise aux documents des programmes, partenariats et activites de l association.'
                    }
                  />
                  <p className="mt-5 text-sm leading-8 text-[var(--muted)]">
                    {locale === 'de'
                      ? 'Die Brochure-Seite stellt Informationsdokumente in klarer Struktur bereit und unterstuetzt die Kommunikation mit Teilnehmenden, Partnerinstitutionen und Foerderern.'
                      : 'La page Brochure met a disposition des documents d information dans une structure claire et soutient la communication avec les participantes, partenaires et financeurs.'}
                  </p>
                </div>
              </div>
            </SurfaceCard>
          </Reveal>

          <Reveal delay={0.06}>
            <SurfaceCard tone="contrast" className="p-6 sm:p-8">
              <SectionTitle
                title={locale === 'de' ? 'Inhalte' : 'Contenus'}
                description={
                  locale === 'de'
                    ? 'Auswahl an Dokumenttypen fuer Orientierung, Zusammenarbeit und Projektdurchfuehrung.'
                    : 'Selection de types de documents utiles a l orientation, a la cooperation et a la mise en oeuvre des projets.'
                }
              />
              <div className="mt-5 space-y-3">
                {[
                  locale === 'de'
                    ? 'Programmflyer und Veranstaltungsunterlagen'
                    : 'Brochures programme et documents evenementiels',
                  locale === 'de'
                    ? 'Informationsblaetter zu Rechten, Angeboten und Orientierung'
                    : 'Fiches d information sur les droits, services et reperes',
                  locale === 'de'
                    ? 'Partnerschafts- und Projektdokumente fuer Zusammenarbeit'
                    : 'Documents de partenariat et de projet pour la cooperation'
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
