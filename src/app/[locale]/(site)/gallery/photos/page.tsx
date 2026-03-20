import {BackLink, PageContainer, PageHero, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {galleryPhotos, getLocalized, isAppLocale} from '@/data/site-content';
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function GalleryPhotosPage({
  params
}: PageProps<'/[locale]/gallery/photos'>) {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const tPages = await getTranslations({locale, namespace: 'pages'});

  return (
    <PageContainer>
      <div className="space-y-8">
        <BackLink href="/gallery" label={tPages('galleryTitle')} />

        <Reveal>
          <PageHero
            eyebrow={locale === 'de' ? 'Foto Collection' : 'Collection photo'}
            title={tPages('photosTitle')}
            description={
              locale === 'de'
                ? 'Kuratiertes Raster mit einer visuell praezisen, warmen und institutionellen Bildsprache.'
                : 'Une grille curee avec une direction visuelle chaleureuse, precise et institutionnelle.'
            }
            metrics={[
              {
                value: `${galleryPhotos.length}`,
                label: locale === 'de' ? 'bildliche Momente' : 'moments visuels'
              }
            ]}
            artwork={false}
          />
        </Reveal>

        <section className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryPhotos.map((photo, index) => (
            <Reveal key={photo.id} delay={0.03 * index} className="mb-4 break-inside-avoid">
              <SurfaceCard className="overflow-hidden p-3">
                <div className="relative h-64 w-full overflow-hidden rounded-[1.5rem] sm:h-72">
                  <Image
                    src={photo.src}
                    alt={getLocalized(photo.title, locale)}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="space-y-2 px-1 pb-1 pt-4">
                  <p className="text-sm font-semibold text-[var(--text)]">
                    {getLocalized(photo.title, locale)}
                  </p>
                  <p className="text-xs leading-6 text-[var(--muted)]">
                    {getLocalized(photo.caption, locale)}
                  </p>
                </div>
              </SurfaceCard>
            </Reveal>
          ))}
        </section>
      </div>
    </PageContainer>
  );
}
