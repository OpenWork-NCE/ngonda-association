import {BrochureActions} from '@/components/brochure-actions';
import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {brochures, getLocalized, isAppLocale} from '@/data/site-content';
import {formatDate, formatFileSize} from '@/lib/format';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

const BROCHURE_TONES = ['default', 'contrast', 'muted', 'warning'] as const;

export default async function BrochurePage({params}: PageProps<'/[locale]/brochure'>) {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const tPages = await getTranslations({locale, namespace: 'pages'});
  const totalPages = brochures.reduce((sum, item) => sum + item.pageCount, 0);
  const totalSizeBytes = brochures.reduce((sum, item) => sum + item.fileSizeBytes, 0);

  const labels = {
    open: locale === 'de' ? 'Öffnen' : 'Ouvrir',
    download: locale === 'de' ? 'Herunterladen' : 'Télécharger',
    print: locale === 'de' ? 'Drucken' : 'Imprimer'
  };

  return (
    <PageContainer>
      <div className="space-y-10">
        <Reveal>
          <PageHero
            eyebrow={locale === 'de' ? 'Dokumenten-Hub' : 'Hub documentaire'}
            title={tPages('brochureTitle')}
            description={
              locale === 'de'
                ? 'Eine kuratierte Sammlung von Broschüren, Handbüchern und Toolkits für Präsentation, Vermittlung, Begleitung und institutionelle Kommunikation.'
                : 'Une collection éditoriale de brochures, guides et toolkits conçus pour la présentation, la médiation, l\'accompagnement et la communication institutionnelle.'
            }
            metrics={[
              {
                value: `${brochures.length}`,
                label: locale === 'de' ? 'verfügbare Broschüren' : 'brochures disponibles'
              },
              {
                value: `${totalPages}`,
                label: locale === 'de' ? 'Seiten in der Sammlung' : 'pages dans la collection'
              },
              {
                value: formatFileSize(totalSizeBytes, locale),
                label: locale === 'de' ? 'gesamtes Download-Volumen' : 'volume total à télécharger'
              }
            ]}
            artwork={<BrochureStack locale={locale} />}
          >
            <div className="flex flex-wrap gap-2">
              {[
                locale === 'de' ? 'Institutionelle Unterlagen' : 'Documents institutionnels',
                locale === 'de' ? 'Toolkits & Handbücher' : 'Toolkits & guides',
                locale === 'de' ? 'Download & Druck' : 'Téléchargement & impression'
              ].map((item) => (
                <span
                  key={item}
                  className="status-indicator"
                >
                  {item}
                </span>
              ))}
            </div>
          </PageHero>
        </Reveal>

        <section className="space-y-6">
          <SectionTitle
            title={locale === 'de' ? 'Verfügbare Broschüren' : 'Brochures disponibles'}
            description={
              locale === 'de'
                ? 'Jede Broschüre erhält eine klare, lesbare Darstellung mit direktem Zugriff auf Öffnen, Download und Ausdruck.'
                : 'Chaque brochure bénéficie d\'une présentation claire et soignée, avec un accès direct à l\'ouverture, au téléchargement et à l\'impression.'
            }
          />

          <div className="grid gap-5 xl:grid-cols-2">
            {brochures.map((brochure, index) => (
              <Reveal key={brochure.id} delay={0.05 * index}>
                <SurfaceCard
                  tone={BROCHURE_TONES[index % BROCHURE_TONES.length]}
                  className="h-full p-5 sm:p-6"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        <span className="badge">
                          {getLocalized(brochure.kind, locale)}
                        </span>
                        <span className="badge">{brochure.pageFormat}</span>
                      </div>
                      <span className="status-indicator status-indicator-green">
                        {locale === 'de' ? 'Verfügbar' : 'Disponible'}
                      </span>
                    </div>

                    <h3 className="mt-5 text-3xl font-semibold text-[var(--text)]">
                      {getLocalized(brochure.title, locale)}
                    </h3>

                    <p className="mt-3 text-sm leading-8 text-[var(--muted)] sm:text-base">
                      {getLocalized(brochure.description, locale)}
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <MetadataPill
                        label={locale === 'de' ? 'Seitenzahl' : 'Pagination'}
                        value={`${brochure.pageCount} ${locale === 'de' ? 'Seiten' : 'pages'}`}
                      />
                      <MetadataPill
                        label={locale === 'de' ? 'Dateigröße' : 'Taille du fichier'}
                        value={formatFileSize(brochure.fileSizeBytes, locale)}
                      />
                      <MetadataPill
                        label={locale === 'de' ? 'Format' : 'Format'}
                        value={brochure.pageFormat}
                      />
                      <MetadataPill
                        label={locale === 'de' ? 'Aktualisiert' : 'Mis à jour'}
                        value={formatDate(brochure.updatedAt, locale)}
                      />
                    </div>

                    <div className="mt-5 grid gap-2">
                      {brochure.highlights.map((item) => (
                        <div
                          key={item.de}
                          className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-tint/14 px-4 py-3 text-sm leading-6 text-[var(--text)]"
                        >
                          {getLocalized(item, locale)}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-6">
                      <BrochureActions
                        href={brochure.filePath}
                        fileName={brochure.fileName}
                        labels={labels}
                      />
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

function MetadataPill({label, value}: {label: string; value: string}) {
  return (
    <div className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-tint/14 px-4 py-3">
      <p className="label-xs">{label}</p>
      <p className="mt-2 text-sm font-semibold text-[var(--text)]">{value}</p>
    </div>
  );
}

function BrochureStack({locale}: {locale: 'de' | 'fr'}) {
  return (
    <div className="relative mx-auto flex aspect-[4/5] w-full max-w-[24rem] items-center justify-center">
      {/* Ambient glow — uses CSS variable */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,var(--glow-primary),transparent_60%)] blur-2xl" />

      {/* Back card */}
      <div className="absolute left-[12%] top-[12%] h-[72%] w-[58%] rotate-[-8deg] rounded-[1.8rem] border border-[var(--border-strong)] bg-[var(--surface-contrast)] p-5 shadow-[var(--shadow-card)]" />

      {/* Middle card */}
      <div className="absolute right-[11%] top-[22%] h-[68%] w-[58%] rotate-[6deg] rounded-[1.8rem] border border-[var(--border-strong)] bg-[var(--surface-strong)] p-5 shadow-[var(--shadow-card)]" />

      {/* Front card — accent-tinted */}
      <div className="relative z-10 h-[74%] w-[62%] rounded-[2rem] border border-[var(--border-strong)] bg-gradient-to-br from-[var(--accent-soft)] via-[var(--surface-strong)] to-[var(--accent-secondary-soft)] p-6 shadow-[var(--shadow-hero)]">
        {/* Inner ring */}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-[var(--ring-inner)]" />

        <p className="label-xs text-[var(--accent)]">
          {locale === 'de' ? 'PDF Library' : 'PDF Library'}
        </p>
        <h3 className="mt-3 text-3xl font-semibold leading-[0.95] text-[var(--text)]">
          {locale === 'de' ? 'Broschüren' : 'Brochures'}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          {locale === 'de'
            ? 'Öffnen, speichern und drucken in einer starken Dokumentensektion.'
            : 'Ouvrir, enregistrer et imprimer dans une section documentaire puissante.'}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2">
          <div className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-tint/20 px-3 py-2">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">PDFs</p>
            <p className="mt-1 text-base font-semibold text-[var(--text)]">4</p>
          </div>
          <div className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-tint/14 px-3 py-2">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              {locale === 'de' ? 'Seiten' : 'Pages'}
            </p>
            <p className="mt-1 text-base font-semibold text-[var(--text)]">100</p>
          </div>
        </div>

        {/* Accent glow dot */}
        <div
          className="absolute bottom-6 right-6 h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_4px_var(--glow-primary)]"
          style={{animation: 'glow-pulse 2.4s ease-in-out infinite'}}
        />
      </div>
    </div>
  );
}
