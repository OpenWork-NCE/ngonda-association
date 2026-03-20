import {BackLink, PageContainer, PageHero, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {getLocalized, getNewsBySlug, isAppLocale, news} from '@/data/site-content';
import {formatDate} from '@/lib/format';
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
  const articleIndex = news.findIndex((item) => item.id === article.id);

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
            artwork={false}
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
      </div>
    </PageContainer>
  );
}
