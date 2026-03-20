import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {getLocalized, isAppLocale, news} from '@/data/site-content';
import {Link} from '@/i18n/navigation';
import {formatDate} from '@/lib/format';
import {ArrowRight} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function NewsPage({params}: PageProps<'/[locale]/news'>) {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const tPages = await getTranslations({locale, namespace: 'pages'});
  const tActions = await getTranslations({locale, namespace: 'actions'});
  const latest = news[0];

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
              <SurfaceCard tone="contrast" className="p-6 sm:p-7">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                  {locale === 'de' ? 'Fokusartikel' : 'article focus'}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">
                  {getLocalized(latest.title, locale)}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {formatDate(latest.publishedAt, locale)}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {getLocalized(latest.excerpt, locale)}
                </p>
              </SurfaceCard>
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
            {news.map((item, index) => (
              <Reveal key={item.id} delay={0.06 * index}>
                <SurfaceCard
                  tone={index === 0 ? 'default' : 'contrast'}
                  className="p-6 sm:p-7"
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                    {formatDate(item.publishedAt, locale)}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-[var(--text)]">
                    {getLocalized(item.title, locale)}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {getLocalized(item.excerpt, locale)}
                  </p>
                  <Link
                    href={{
                      pathname: '/news/[slug]',
                      params: {slug: getLocalized(item.slug, locale)}
                    }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                  >
                    {tActions('readMore')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
