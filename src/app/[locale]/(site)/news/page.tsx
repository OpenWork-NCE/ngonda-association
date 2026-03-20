import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {getLocalized, isAppLocale, news} from '@/data/site-content';
import {Link} from '@/i18n/navigation';
import {formatDate} from '@/lib/format';
import {ArrowRight} from 'lucide-react';
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function NewsPage({params}: PageProps<'/[locale]/news'>) {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const tPages = await getTranslations({locale, namespace: 'pages'});
  const tActions = await getTranslations({locale, namespace: 'actions'});
  const sortedNews = [...news].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const latest = sortedNews[0];

  return (
    <PageContainer>
      <div className="space-y-10">
        <Reveal>
          <PageHero
            eyebrow="NGONDA e.V."
            title={tPages('newsTitle')}
            description={
              locale === 'de'
                ? 'Meldungen und Rueckblicke, die die Entwicklung der Organisation transparent und nachvollziehbar dokumentieren.'
                : 'Actualites et retrospectives qui documentent de facon claire l evolution de l organisation.'
            }
            metrics={[
              {
                value: `${news.length}`,
                label: locale === 'de' ? 'veroeffentlichte Updates' : 'mises a jour'
              },
              {
                value: latest ? formatDate(latest.publishedAt, locale) : '--',
                label: locale === 'de' ? 'letzte Meldung' : 'dernier signal'
              }
            ]}
            artwork={
              latest ? (
                <SurfaceCard className="overflow-hidden p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem]">
                    <Image
                      src={latest.featuredImage.src}
                      alt={getLocalized(latest.featuredImage.alt, locale)}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 24rem, 100vw"
                    />
                    <div className="media-overlay-strong" />
                    <div className="absolute inset-x-4 bottom-4 space-y-2 contrast-on-media">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] contrast-on-media-muted">
                        {formatDate(latest.publishedAt, locale)}
                      </p>
                      <h3 className="text-2xl font-semibold leading-tight">
                        {getLocalized(latest.title, locale)}
                      </h3>
                    </div>
                  </div>
                </SurfaceCard>
              ) : null
            }
          />
        </Reveal>

        <section className="space-y-6">
          <SectionTitle
            title={locale === 'de' ? 'Aktuelle Meldungen' : 'Actualites'}
            description={
              locale === 'de'
                ? 'Kuratiert, klar datiert und auf Lesbarkeit in einem institutionellen Rahmen ausgerichtet.'
                : 'Curate, clairement date et pense pour une lecture institutionnelle fluide.'
            }
          />
          <div className="grid gap-5">
            {sortedNews.map((item, index) => (
              <Reveal key={item.id} delay={0.06 * index}>
                <SurfaceCard
                  tone={index === 0 ? 'default' : 'contrast'}
                  className="overflow-hidden p-3 sm:p-3"
                >
                  <div className="grid gap-4 md:grid-cols-[280px_1fr]">
                    <div className="relative aspect-[16/11] overflow-hidden rounded-[1.3rem] md:aspect-auto md:h-full">
                      <Image
                        src={item.featuredImage.src}
                        alt={getLocalized(item.featuredImage.alt, locale)}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 280px, 100vw"
                      />
                      <div className="media-overlay-strong" />
                      <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/24 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.23em] contrast-on-media">
                        {formatDate(item.publishedAt, locale)}
                      </div>
                    </div>

                    <div className="space-y-4 px-1 pb-2 pt-1 sm:px-2">
                      <h2 className="text-3xl font-semibold text-[var(--text)]">
                        {getLocalized(item.title, locale)}
                      </h2>
                      <p className="max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                        {getLocalized(item.excerpt, locale)}
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {item.gallery.slice(0, 3).map((media) => (
                          <div key={media.src} className="relative aspect-square overflow-hidden rounded-[0.9rem]">
                            <Image
                              src={media.src}
                              alt={getLocalized(media.alt, locale)}
                              fill
                              className="object-cover"
                              sizes="96px"
                            />
                          </div>
                        ))}
                      </div>
                      <Link
                        href={{
                          pathname: '/news/[slug]',
                          params: {slug: getLocalized(item.slug, locale)}
                        }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                      >
                        {tActions('readMore')}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
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
