import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {funders, getSiteContent, isAppLocale} from '@/data/site-content';
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function FundersPage({params}: PageProps<'/[locale]/funders'>) {
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
            eyebrow={locale === 'de' ? 'Partnernetzwerk' : 'Réseau partenaires'}
            title={tPages('fundersTitle')}
            metrics={[
              {
                value: `${funders.length}`,
                label: locale === 'de' ? 'sichtbare Logos' : 'logos visibles'
              }
            ]}
          />
        </Reveal>

        <section className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <SectionTitle
              title={locale === 'de' ? 'Förderer im Auftritt' : 'Financeurs dans le site'}
              description={
                locale === 'de'
                  ? 'Die Logos sind als eigenständige, gepflegte Assets eingebunden und können jederzeit erweitert werden.'
                  : 'Les logos sont intégrés comme assets à part entière et peuvent être étendus facilement.'
              }
            />
            <span className="status-indicator status-indicator-green shrink-0">
              {locale === 'de' ? 'Aktiv' : 'Actifs'}
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {funders.map((funder, index) => (
              <Reveal key={funder.id} delay={0.05 * index}>
                <SurfaceCard
                  tone={index % 2 === 0 ? 'default' : 'contrast'}
                  className="h-full p-4 sm:p-5"
                >
                  {/* Logo container — Mastra flat approach */}
                  <div className="relative h-28 overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-tint/8">
                    <Image
                      src={funder.logo}
                      alt={funder.name}
                      fill
                      className="object-contain p-4"
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-[var(--text)]">{funder.name}</p>
                    <span className="label-xs">0{index + 1}</span>
                  </div>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Mastra-style info block */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-strong)]">
            <div className="absolute inset-0 bg-[var(--surface-muted)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_100%,var(--glow-secondary),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-[var(--ring-inner)]" />
            <div className="relative px-6 py-7 sm:px-8">
              <p className="label-xs">
                {locale === 'de' ? 'Institutioneller Rahmen' : 'Cadre institutionnel'}
              </p>
              <p className="mt-3 max-w-3xl text-base leading-8 text-[var(--muted)]">
                {locale === 'de'
                  ? 'NGONDA e.V. kooperiert mit institutionellen Akteuren, die die Mission Empowerment, Schutz und Sichtbarkeit für Migrantinnen teilen und aktiv fördern.'
                  : 'NGONDA e.V. coopère avec des acteurs institutionnels qui partagent et soutiennent activement la mission d\'empowerment, de protection et de visibilité pour les femmes migrantes.'}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </PageContainer>
  );
}
