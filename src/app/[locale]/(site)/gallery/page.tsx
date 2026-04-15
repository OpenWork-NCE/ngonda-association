import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {
  galleryPhotos,
  galleryVideos,
  getLocalized,
  getSiteContent,
  isAppLocale,
  socialLinks
} from '@/data/site-content';
import {Link} from '@/i18n/navigation';
import {ArrowRight, Camera, Film} from 'lucide-react';
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function GalleryPage({params}: PageProps<'/[locale]/gallery'>) {
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
            eyebrow={locale === 'de' ? 'Visuelle Bibliothek' : 'Bibliothèque visuelle'}
            title={tPages('galleryTitle')}
            description={content.galleryNote}
            metrics={[
              {
                value: `${galleryPhotos.length}`,
                label: locale === 'de' ? 'kuratierte Fotos' : 'photos sélectionnées'
              },
              {
                value: `${galleryVideos.length}`,
                label: locale === 'de' ? 'Videobeiträge' : 'vidéos publiées'
              }
            ]}
            artwork={
              <div className="relative mx-auto w-full max-w-[26rem]">
                <SurfaceCard className="overflow-hidden p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
                    <Image
                      src="/media/projects/koloniale-gewalt-bassaa/featured.jpg"
                      alt="NGONDA gallery"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 26rem, 100vw"
                    />
                    <div className="media-overlay-strong" />
                    <div className="absolute bottom-5 left-5 right-5 contrast-on-media">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] contrast-on-media-muted">
                        {locale === 'de' ? 'Medienraum' : 'espace médias'}
                      </p>
                      <p className="mt-2 text-lg font-semibold leading-tight">
                        {locale === 'de'
                          ? 'Fotos und Videos in einer klaren, konsistenten Medienarchitektur.'
                          : 'Photos et vidéos réunies dans une architecture média claire et cohérente.'}
                      </p>
                    </div>
                  </div>
                </SurfaceCard>
              </div>
            }
          >
            <div className="mt-1 flex flex-wrap gap-3">
              <Link
                href="/gallery/photos"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-secondary))] px-5 py-3 text-sm font-semibold text-[var(--accent-contrast)]"
              >
                <Camera className="h-4 w-4" />
                {tPages('photosTitle')}
              </Link>
              <Link
                href="/gallery/videos"
                className="control-chip inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[var(--text)]"
              >
                <Film className="h-4 w-4" />
                {tPages('videosTitle')}
              </Link>
            </div>
          </PageHero>
        </Reveal>

        <section className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <SurfaceCard className="p-6">
              <SectionTitle
                title={tPages('photosTitle')}
                description={
                  locale === 'de'
                    ? 'Mosaikartige Einblicke in Community, Empowerment und Begegnung.'
                    : 'Des aperçus en mosaïque autour de la communauté, de l’empowerment et de la rencontre.'
                }
              />
              <div className="mt-5 grid grid-cols-2 gap-3">
                {galleryPhotos.slice(0, 4).map((photo) => (
                  <div key={photo.id} className="group">
                    <div className="relative h-36 overflow-hidden rounded-[1.25rem]">
                      <Image
                        src={photo.src}
                        alt={getLocalized(photo.title, locale)}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 260px, 46vw"
                      />
                    </div>
                    <p className="mt-2 text-sm font-semibold text-[var(--text)]">
                      {getLocalized(photo.title, locale)}
                    </p>
                  </div>
                ))}
              </div>
              <Link href="/gallery/photos" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                {locale === 'de' ? 'Alle Fotos ansehen' : 'Voir toutes les photos'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </SurfaceCard>
          </Reveal>

          <Reveal delay={0.06}>
            <SurfaceCard tone="contrast" className="p-6">
              <SectionTitle
                title={tPages('videosTitle')}
                description={
                  locale === 'de'
                    ? 'Interviews, Workshops und Event-Recaps mit direkter Verknüpfung zu den Videoquellen.'
                    : 'Interviews, ateliers et récapitulatifs d’événements avec accès direct aux sources vidéo.'
                }
              />
              <div className="mt-5 space-y-3">
                {galleryVideos.map((video) => (
                  <div
                    key={video.id}
                    className="rounded-[1.4rem] border border-[var(--border)] bg-white/25 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-16 w-20 overflow-hidden rounded-[0.95rem]">
                        <Image
                          src={video.thumbnail}
                          alt={getLocalized(video.title, locale)}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--text)]">
                          {getLocalized(video.title, locale)}
                        </p>
                        <p className="text-xs leading-6 text-[var(--muted)]">
                          {getLocalized(video.description, locale)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/gallery/videos" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                {locale === 'de' ? 'Alle Videos ansehen' : 'Voir toutes les videos'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </SurfaceCard>
          </Reveal>
        </section>

        <Reveal>
          <SurfaceCard tone="muted" className="p-6 sm:p-7">
            <SectionTitle
              title={locale === 'de' ? 'Netzwerke & Videos' : 'Réseaux & vidéos'}
              description={
                locale === 'de'
                  ? 'Die Galerie bleibt direkt mit den sozialen Kanälen von NGONDA verbunden.'
                  : 'La galerie reste directement reliée aux réseaux sociaux de NGONDA.'
              }
            />
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/30 px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--border-strong)] hover:text-[var(--accent)]"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </SurfaceCard>
        </Reveal>
      </div>
    </PageContainer>
  );
}
