import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {getLocalized, isAppLocale, themes} from '@/data/site-content';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function ThemesPage({params}: PageProps<'/[locale]/themes'>) {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const tPages = await getTranslations({locale, namespace: 'pages'});

  return (
    <PageContainer>
      <div className="space-y-10">
        <Reveal>
          <PageHero
            eyebrow={locale === 'de' ? 'Themenarchitektur' : 'Architecture thematique'}
            title={tPages('themesTitle')}
            description={
              locale === 'de'
                ? 'Die Schwerpunktthemen strukturieren die Arbeit von NGONDA entlang von Empowerment, Teilhabe und sozialer Wirkung.'
                : 'Les axes thematiques structurent l action de NGONDA autour de l empowerment, de la participation et de l impact social.'
            }
            metrics={[
              {
                value: `${themes.length}`,
                label: locale === 'de' ? 'sichtbare Bloecke' : 'blocs visibles'
              }
            ]}
          />
        </Reveal>

        <section className="space-y-6">
          <SectionTitle title={tPages('themesTitle')} />
          <div className="grid gap-5 md:grid-cols-2">
            {themes.map((theme, index) => (
              <Reveal key={theme.id} delay={0.05 * index}>
                <SurfaceCard
                  tone={index % 2 === 0 ? 'default' : 'contrast'}
                  className="h-full p-6"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[var(--text)]">
                    {getLocalized(theme.title, locale)}
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
                    {theme.body.map((paragraph) => (
                      <p key={paragraph.de}>{getLocalized(paragraph, locale)}</p>
                    ))}
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
