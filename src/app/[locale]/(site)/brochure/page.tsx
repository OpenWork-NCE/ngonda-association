import { BrochureActions } from '@/components/brochure-actions';
import { PageContainer, PageHero, SectionTitle, SurfaceCard } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { brochures, getLocalized, getSiteContent, isAppLocale } from '@/data/site-content';
import { cn } from '@/lib/utils';
import { formatDate, formatFileSize } from '@/lib/format';
import { BookMarked, FileStack } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

const BROCHURE_TONES = ['default', 'contrast', 'muted', 'warning'] as const;
const BROCHURE_VISUALS = [
  'from-[rgba(255,219,122,0.96)] via-[rgba(247,196,77,0.95)] to-[rgba(241,132,28,0.96)]',
  'from-[rgba(255,245,214,0.96)] via-[rgba(255,206,120,0.94)] to-[rgba(226,115,38,0.96)]',
  'from-[rgba(255,232,179,0.96)] via-[rgba(255,183,77,0.94)] to-[rgba(240,121,53,0.96)]',
  'from-[rgba(255,238,206,0.96)] via-[rgba(247,196,77,0.92)] to-[rgba(221,104,30,0.96)]'
] as const;

export default async function BrochurePage({ params }: PageProps<'/[locale]/brochure'>) {
  const { locale } = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const tPages = await getTranslations({ locale, namespace: 'pages' });
  const content = getSiteContent(locale);
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
                : 'Une collection éditoriale de brochures, guides et toolkits conçus pour la présentation, la médiation, l’accompagnement et la communication institutionnelle.'
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
            <div className="flex flex-wrap gap-3">
              {[
                locale === 'de' ? 'Institutionelle Unterlagen' : 'Documents institutionnels',
                locale === 'de' ? 'Toolkits & Handbücher' : 'Toolkits & guides',
                locale === 'de' ? 'Download & Druck' : 'Téléchargement & impression'
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]"
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
                : 'Chaque brochure bénéficie d’une présentation claire et soignée, avec un accès direct à l’ouverture, au téléchargement et à l’impression.'
            }
          />

          <div className="grid gap-5 xl:grid-cols-2">
            {brochures.map((brochure, index) => (
              <Reveal key={brochure.id} delay={0.05 * index}>
                <SurfaceCard
                  tone={BROCHURE_TONES[index % BROCHURE_TONES.length]}
                  className="h-full p-5 sm:p-6"
                >
                  <div className="flex h-full flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_210px] lg:items-start">
                    <div className="order-2 flex h-full flex-col lg:order-1">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full border border-[var(--border)] bg-white/35 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                          {getLocalized(brochure.kind, locale)}
                        </span>
                        <span className="rounded-full border border-[var(--border)] bg-white/35 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                          {brochure.pageFormat}
                        </span>
                      </div>

                      <h3 className="mt-4 text-3xl font-semibold text-[var(--text)]">
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
                            className="rounded-[1rem] border border-[var(--border)] bg-white/18 px-4 py-3 text-sm leading-6 text-[var(--text)]"
                          >
                            {getLocalized(item, locale)}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <BrochureActions
                          href={brochure.filePath}
                          fileName={brochure.fileName}
                          labels={labels}
                        />
                      </div>
                    </div>

                    <BrochurePreview brochure={brochure} locale={locale} index={index} />
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

function MetadataPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.2rem] border border-[var(--border)] bg-white/22 px-4 py-3">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-[var(--text)]">{value}</p>
    </div>
  );
}

function BrochurePreview({
  brochure,
  locale,
  index
}: {
  brochure: (typeof brochures)[number];
  locale: 'de' | 'fr';
  index: number;
}) {
  const isLandscape = brochure.pageFormat === 'Landscape';

  return (
    <div className="order-1 mx-auto w-full max-w-[220px] lg:order-2 lg:max-w-[210px]">
      <div className="relative mx-auto w-full">
        <div
          className={cn(
            'absolute left-3 top-4 rounded-[1.6rem] border border-white/16 bg-white/18 shadow-[0_24px_52px_-34px_rgba(14,29,25,0.4)]',
            isLandscape ? 'h-[72%] w-[90%] rotate-[-7deg]' : 'h-[86%] w-[92%] rotate-[-7deg]'
          )}
        />
        <div
          className={cn(
            'absolute right-2 top-6 rounded-[1.6rem] border border-white/16 bg-white/10 shadow-[0_24px_52px_-34px_rgba(14,29,25,0.35)]',
            isLandscape ? 'h-[68%] w-[88%] rotate-[6deg]' : 'h-[82%] w-[90%] rotate-[6deg]'
          )}
        />
        <div
          className={cn(
            `relative overflow-hidden rounded-[1.8rem] border border-white/25 bg-gradient-to-br ${BROCHURE_VISUALS[index % BROCHURE_VISUALS.length]} p-5 shadow-[0_30px_80px_-40px_rgba(14,29,25,0.45)]`,
            isLandscape ? 'aspect-[16/11]' : 'aspect-[4/5]'
          )}
        >
          <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-black/70">
            PDF
          </div>
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-black/55">
                {getLocalized(brochure.kind, locale)}
              </p>
              <h3 className="mt-3 text-[2rem] font-semibold leading-[0.92] text-[#4a2208]">
                {getLocalized(brochure.title, locale)}
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#4a2208]/75">
                <FileStack className="h-4 w-4" />
                {brochure.pageCount} {locale === 'de' ? 'Seiten' : 'pages'}
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-white/36" />
                <div className="h-2 w-4/5 rounded-full bg-white/28" />
                <div className="h-2 w-3/5 rounded-full bg-white/22" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrochureStack({ locale }: { locale: 'de' | 'fr' }) {
  return (
    <div className="relative mx-auto flex aspect-[4/5] w-full max-w-[24rem] items-center justify-center">
      <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(247,196,77,0.28),transparent_62%)] blur-2xl" />
      <div className="absolute left-[12%] top-[12%] h-[72%] w-[58%] rotate-[-8deg] rounded-[1.8rem] border border-white/25 bg-[linear-gradient(160deg,rgba(255,245,214,0.95),rgba(247,196,77,0.82),rgba(241,132,28,0.95))] p-5 shadow-[0_30px_80px_-36px_rgba(14,29,25,0.45)]" />
      <div className="absolute right-[11%] top-[22%] h-[68%] w-[58%] rotate-[6deg] rounded-[1.8rem] border border-white/25 bg-[linear-gradient(160deg,rgba(255,239,204,0.94),rgba(255,183,77,0.88),rgba(226,115,38,0.94))] p-5 shadow-[0_30px_80px_-36px_rgba(14,29,25,0.45)]" />
      <div className="relative z-10 h-[74%] w-[62%] rounded-[2rem] border border-white/30 bg-[linear-gradient(160deg,rgba(255,247,224,0.98),rgba(255,209,91,0.94),rgba(241,132,28,0.98))] p-6 shadow-[0_38px_90px_-42px_rgba(14,29,25,0.5)]">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#5b2b0d]/65">
          {locale === 'de' ? 'PDF Library' : 'PDF Library'}
        </p>
        <h3 className="mt-3 text-3xl font-semibold leading-[0.95] text-[#4a2208]">
          {locale === 'de' ? 'Brochüren' : 'Brochures'}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[#4a2208]/80">
          {locale === 'de'
            ? 'Öffnen, speichern und drucken in einer starken Dokumentensektion.'
            : 'Ouvrir, enregistrer et imprimer dans une section documentaire puissante.'}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2">
          <div className="rounded-[1rem] border border-white/30 bg-white/28 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#4a2208]/75">
            4 PDF
          </div>
          <div className="rounded-[1rem] border border-white/30 bg-white/18 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#4a2208]/75">
            100 {locale === 'de' ? 'Seiten' : 'pages'}
          </div>
        </div>
      </div>
    </div>
  );
}
