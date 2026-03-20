import { PageContainer, PageHero, SectionTitle, SurfaceCard } from '@/components/page-shell';
import { Reveal } from '@/components/reveal';
import { funders, getSiteContent, isAppLocale } from '@/data/site-content';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function FundersPage({ params }: PageProps<'/[locale]/funders'>) {
  const { locale } = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const tPages = await getTranslations({ locale, namespace: 'pages' });
  const content = getSiteContent(locale);

  return (
    <PageContainer>
      <div className="space-y-10">
        <Reveal>
          <PageHero
            eyebrow={locale === 'de' ? 'Partnernetzwerk' : 'Reseau partenaires'}
            title={tPages('fundersTitle')}
            description={content.fundersNote}
            metrics={[
              {
                value: `${funders.length}`,
                label: locale === 'de' ? 'sichtbare logos' : 'logos visibles'
              }
            ]}
          // artwork={
          //   <div className="grid grid-cols-2 gap-3">
          //     {funders.map((funder) => (
          //       <SurfaceCard key={funder.id} className="h-full p-3">
          //         <div className="relative h-20 overflow-hidden rounded-[1rem] bg-white/75">
          //           <Image src={funder.logo} alt={funder.name} fill className="object-contain p-3" sizes="160px" />
          //         </div>
          //       </SurfaceCard>
          //     ))}
          //   </div>
          // }
          />
        </Reveal>

        <section className="space-y-6">
          <SectionTitle
            title={locale === 'de' ? 'Foerderer im Auftritt' : 'Financeurs dans le site'}
            description={
              locale === 'de'
                ? 'Die Logos sind als eigenstaendige, gepflegte Assets eingebunden und koennen jederzeit erweitert werden.'
                : 'Les logos sont integres comme assets a part entiere et peuvent etre etendus facilement.'
            }
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {funders.map((funder, index) => (
              <Reveal key={funder.id} delay={0.05 * index}>
                <SurfaceCard
                  tone={index % 2 === 0 ? 'default' : 'contrast'}
                  className="h-full p-4 sm:p-5"
                >
                  <div className="relative h-28 overflow-hidden rounded-[1.4rem] border border-[var(--border)] bg-white/80">
                    <Image
                      src={funder.logo}
                      alt={funder.name}
                      fill
                      className="object-contain p-3"
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                    />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[var(--text)]">{funder.name}</p>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
