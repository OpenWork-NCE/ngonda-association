import {BackLink, PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {getLocalized, getNewsBySlug, isAppLocale, news} from '@/data/site-content';
import {formatDate} from '@/lib/format';
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function NewsDetailPage({
  params
}: PageProps<'/[locale]/news/[slug]'>) {
  const {locale, slug} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const article = getNewsBySlug(locale, slug);

  if (!article) {
    notFound();
  }

  const tPages = await getTranslations({locale, namespace: 'pages'});
  const sortedNews = [...news].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const articleIndex = sortedNews.findIndex((item) => item.id === article.id);

  return (
    <PageContainer>
      <div className="space-y-8">
        <BackLink href="/news" label={tPages('newsTitle')} />

        <Reveal>
          <PageHero
            eyebrow={formatDate(article.publishedAt, locale)}
            title={getLocalized(article.title, locale)}
            description={getLocalized(article.excerpt, locale)}
            metrics={[
              {
                value: `0${articleIndex + 1}`,
                label: locale === 'de' ? 'Beitrag im Feed' : 'position dans le flux'
              },
              {
                value: `${article.body.length}`,
                label: locale === 'de' ? 'Abschnitte' : 'sections'
              }
            ]}
            artwork={
              <SurfaceCard className="overflow-hidden p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem]">
                  <Image
                    src={article.featuredImage.src}
                    alt={getLocalized(article.featuredImage.alt, locale)}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 24rem, 100vw"
                    priority
                  />
                  <div className="media-overlay-strong" />
                  <div className="absolute inset-x-4 bottom-4 space-y-1.5 contrast-on-media">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] contrast-on-media-muted">
                      {formatDate(article.publishedAt, locale)}
                    </p>
                    <p className="text-xl font-semibold leading-tight">
                      {getLocalized(article.title, locale)}
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
              {article.body.map((paragraph) => (
                <p key={paragraph.de}>{getLocalized(paragraph, locale)}</p>
              ))}
            </article>
          </SurfaceCard>
        </Reveal>

        <section className="space-y-6">
          <SectionTitle
            title={locale === 'de' ? 'Bildgalerie' : 'Galerie visuelle'}
            description={
              locale === 'de'
                ? 'Eindruecke aus dem Kontext der Meldung.'
                : 'Apercus visuels en lien avec cette actualite.'
            }
          />
          <div className="grid gap-4 md:grid-cols-3">
            {article.gallery.map((item, index) => (
              <Reveal key={item.src} delay={0.05 * index}>
                <SurfaceCard className="overflow-hidden p-2.5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem]">
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
