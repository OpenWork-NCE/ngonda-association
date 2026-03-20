import {BackLink, PageContainer, PageHero, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {galleryVideos, getLocalized, isAppLocale} from '@/data/site-content';
import {ExternalLink, PlayCircle} from 'lucide-react';
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function GalleryVideosPage({
  params
}: PageProps<'/[locale]/gallery/videos'>) {
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
            eyebrow={locale === 'de' ? 'Video Hub' : 'Hub video'}
            title={tPages('videosTitle')}
            description={
              locale === 'de'
                ? 'Sektion fuer Interviews, Projektberichte, Event-Recaps und spaetere Channel-Serien.'
                : 'Section pour interviews, retours de projets, recap d evenements et futures series de chaine.'
            }
            metrics={[
              {
                value: `${galleryVideos.length}`,
                label: locale === 'de' ? 'Video slots' : 'emplacements video'
              }
            ]}
            artwork={false}
          />
        </Reveal>

        <section className="grid gap-5 lg:grid-cols-2">
          {galleryVideos.map((video, index) => (
            <Reveal key={video.id} delay={0.06 * index}>
              <SurfaceCard className="overflow-hidden p-3">
                <div className="relative h-56 overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={video.thumbnail}
                    alt={getLocalized(video.title, locale)}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/18 bg-black/28 px-3 py-1 text-xs font-semibold text-white">
                    <PlayCircle className="h-4 w-4" />
                    YouTube
                  </div>
                </div>
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-2xl font-semibold text-[var(--text)]">
                    {getLocalized(video.title, locale)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {getLocalized(video.description, locale)}
                  </p>
                  <a
                    href={video.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                  >
                    {locale === 'de' ? 'Auf YouTube oeffnen' : 'Ouvrir sur YouTube'}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </SurfaceCard>
            </Reveal>
          ))}
        </section>
      </div>
    </PageContainer>
  );
}
