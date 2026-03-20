import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {TeamMemberWidget} from '@/components/premium-widgets';
import {Reveal} from '@/components/reveal';
import {
  currentProjects,
  funders,
  galleryPhotos,
  getLocalized,
  getSiteContent,
  isAppLocale,
  news,
  teamMembers,
  themes
} from '@/data/site-content';
import {Link} from '@/i18n/navigation';
import {formatDate} from '@/lib/format';
import {ArrowRight, FolderArchive, Newspaper, Sparkles} from 'lucide-react';
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function HomePage({params}: PageProps<'/[locale]'>) {
  const {locale} = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const tActions = await getTranslations({locale, namespace: 'actions'});
  const content = getSiteContent(locale);
  const sortedNews = [...news].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const featuredNews = sortedNews[0];

  const heroMetrics = [
    {
      value: `${currentProjects.length}`,
      label: locale === 'de' ? 'aktive Projekte' : 'projets actifs',
      note:
        locale === 'de'
          ? 'Bildung, Erinnerung, Inklusion und Gewaltschutz.'
          : 'Education, memoire, inclusion et prevention des violences.'
    },
    {
      value: `${themes.length}`,
      label: locale === 'de' ? 'Handlungsfelder' : 'axes d action',
      note:
        locale === 'de'
          ? 'Community-nahe Formate mit echter Verankerung.'
          : 'Des formats utiles, ancrés dans la communaute.'
    },
    {
      value: `${teamMembers.length}`,
      label: locale === 'de' ? 'Leitungsteam' : 'noyau dirigeant',
      note:
        locale === 'de'
          ? 'Zweisprachig, kultursensibel und vor Ort praesent.'
          : 'Bilingue, cultive le lien et agit au plus pres.'
    }
  ];

  return (
    <PageContainer>
      <div className="space-y-10 lg:space-y-12">
        <Reveal>
          <PageHero
            className="lg:py-11"
            eyebrow={content.heroEyebrow}
            title={
              locale === 'de'
                ? 'Raume, in denen Migrantinnen Schutz, Stimme und Zukunft entwerfen.'
                : 'Des espaces ou les femmes migrantes retrouvent protection, voix et avenir.'
            }
            description={content.heroIntro[0]}
            metrics={heroMetrics}
            artwork={
              <div className="relative mx-auto w-full max-w-[27rem]">
                <SurfaceCard className="overflow-hidden p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
                    <Image
                      src="/media/projects/muto-stimmen-fuer-veraenderung/featured.jpg"
                      alt="NGONDA e.V."
                      fill
                      className="object-cover"
                      priority
                      sizes="(min-width: 1024px) 30rem, 100vw"
                    />
                    <div className="media-overlay-strong" />
                    <div className="absolute bottom-5 left-5 right-5 contrast-on-media">
                      <p className="inline-flex rounded-full border border-white/18 bg-black/22 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em]">
                        {locale === 'de' ? 'She first' : 'She first'}
                      </p>
                      <p className="mt-3 max-w-xs text-xl font-semibold leading-tight">
                        {locale === 'de'
                          ? 'Institutionelle Sichtbarkeit mit menschlicher Naehe.'
                          : 'Une presence institutionnelle qui reste humaine et proche.'}
                      </p>
                    </div>
                  </div>
                </SurfaceCard>

                <SurfaceCard tone="contrast" className="absolute -left-4 bottom-4 hidden max-w-[12rem] p-4 sm:block">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                    {locale === 'de' ? 'Aachen base' : 'base Aachen'}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text)]">
                    {locale === 'de'
                      ? 'Begleitung, Orientierung und Empowerment in sicherem Rahmen.'
                      : 'Accompagnement, orientation et empowerment dans un cadre sur.'}
                  </p>
                </SurfaceCard>
              </div>
            }
          >
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-secondary))] px-5 py-3 text-sm font-semibold text-[var(--accent-contrast)] shadow-[0_18px_36px_-24px_rgba(14,29,25,0.58)]"
              >
                {tActions('discover')}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="control-chip inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[var(--text)]"
              >
                {tActions('readMore')}
              </Link>
            </div>
          </PageHero>
        </Reveal>

        <section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <SurfaceCard className="p-3 sm:p-4">
              <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[22rem] overflow-hidden rounded-[1.7rem]">
                  <Image
                    src={galleryPhotos[0].src}
                    alt={getLocalized(galleryPhotos[0].title, locale)}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 42rem, 100vw"
                  />
                  <div className="media-overlay-strong" />
                  <div className="absolute bottom-5 left-5 right-5 space-y-2 contrast-on-media">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] contrast-on-media-muted">
                      {locale === 'de' ? 'Community Story' : 'Recit communautaire'}
                    </p>
                    <h2 className="text-3xl font-semibold leading-tight">
                      {getLocalized(galleryPhotos[0].title, locale)}
                    </h2>
                    <p className="max-w-lg text-sm leading-7 contrast-on-media-muted">
                      {getLocalized(galleryPhotos[0].caption, locale)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-6 p-2 sm:p-3">
                  <div className="space-y-4">
                    <p className="section-label">
                      {locale === 'de' ? 'Mission & Haltung' : 'Mission & posture'}
                    </p>
                    <p className="text-base leading-8 text-[var(--muted)]">{content.heroIntro[1]}</p>
                    <p className="text-base leading-8 text-[var(--muted)]">{content.heroIntro[2]}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="premium-divider" />
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                      {locale === 'de' ? 'Was uns unterscheidet' : 'Ce qui nous distingue'}
                    </p>
                    <p className="text-sm leading-7 text-[var(--muted)]">{content.distinction}</p>
                    <Link
                      href="/gallery"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                    >
                      {locale === 'de' ? 'Galerie ansehen' : 'Voir la galerie'}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </SurfaceCard>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.04}>
              <SurfaceCard tone="contrast" className="p-6 sm:p-7">
                <SectionTitle
                  title={locale === 'de' ? 'Unsere Vision' : 'Notre vision'}
                  description={content.vision[0]}
                />
                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{content.vision[1]}</p>
              </SurfaceCard>
            </Reveal>

            <Reveal delay={0.08}>
              <SurfaceCard tone="muted" className="p-6 sm:p-7">
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[1.35rem]">
                  <Image
                    src={featuredNews.featuredImage.src}
                    alt={getLocalized(featuredNews.featuredImage.alt, locale)}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30rem, 100vw"
                  />
                  <div className="media-overlay-strong" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/24 bg-black/24 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.23em] contrast-on-media">
                    <Newspaper className="h-3.5 w-3.5" />
                    {locale === 'de' ? 'Aktuelles' : 'Actualites'}
                  </div>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--text)]">
                  {getLocalized(featuredNews.title, locale)}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {formatDate(featuredNews.publishedAt, locale)}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {getLocalized(featuredNews.excerpt, locale)}
                </p>
                <Link
                  href={{
                    pathname: '/news/[slug]',
                    params: {slug: getLocalized(featuredNews.slug, locale)}
                  }}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                >
                  {tActions('readMore')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </SurfaceCard>
            </Reveal>
          </div>
        </section>

        <section className="space-y-6">
          <SectionTitle
            title={locale === 'de' ? 'Unsere Schwerpunkte' : 'Nos axes d action'}
            description={
              locale === 'de'
                ? 'Jede Intervention verbindet Schutz, Wissenstransfer und Handlungsmacht.'
                : 'Chaque intervention articule protection, transmission et pouvoir d agir.'
            }
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {themes.map((theme, index) => (
              <Reveal key={theme.id} delay={0.04 * index}>
                <SurfaceCard
                  tone={index % 3 === 0 ? 'default' : index % 3 === 1 ? 'contrast' : 'muted'}
                  className="h-full p-5 sm:p-6"
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">
                    {getLocalized(theme.title, locale)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {getLocalized(theme.body[0], locale)}
                  </p>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionTitle
            title={locale === 'de' ? 'Aktuelle Projekte' : 'Projets en cours'}
            description={
              locale === 'de'
                ? 'Projektlogik, Vermittlung und Community Impact in einer klaren, kuratierten Struktur.'
                : 'Une lecture claire des projets, de leurs logiques et de leur impact communautaire.'
            }
          />
          <div className="grid gap-5 md:grid-cols-2">
            {currentProjects.map((project, index) => (
              <Reveal key={project.id} delay={0.05 * index}>
                <SurfaceCard className="h-full overflow-hidden p-3">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.35rem]">
                    <Image
                      src={project.featuredImage.src}
                      alt={getLocalized(project.featuredImage.alt, locale)}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    <div className="media-overlay-strong" />
                    <div className="absolute left-3 top-3 rounded-full border border-white/24 bg-black/24 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.23em] contrast-on-media">
                      {locale === 'de' ? 'Projekt' : 'Projet'} 0{index + 1}
                    </div>
                  </div>
                  <div className="space-y-3 px-2 pb-2 pt-4">
                    <h3 className="text-2xl font-semibold text-[var(--text)]">
                      {getLocalized(project.title, locale)}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--muted)]">
                      {getLocalized(project.body[0], locale)}
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {project.gallery.slice(0, 3).map((item) => (
                        <div key={item.src} className="relative aspect-square overflow-hidden rounded-[0.95rem]">
                          <Image
                            src={item.src}
                            alt={getLocalized(item.alt, locale)}
                            fill
                            className="object-cover"
                            sizes="100px"
                          />
                        </div>
                      ))}
                    </div>
                    <Link
                      href={{
                        pathname: '/projects/[slug]',
                        params: {slug: getLocalized(project.slug, locale)}
                      }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                    >
                      {tActions('readMore')}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionTitle
            title={locale === 'de' ? 'Leitungsteam' : 'Equipe dirigeante'}
            description={
              locale === 'de'
                ? 'Ein interdisziplinaeres Team, das Strategie, Begleitung und Netzwerkarbeit in Aachen traegt.'
                : 'Une equipe interdisciplinaire qui porte la strategie, l accompagnement et la dynamique partenariale a Aachen.'
            }
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={0.05 * index}>
                <TeamMemberWidget member={member} index={index} locale={locale} className="h-full" />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionTitle
            title={locale === 'de' ? 'Ressourcen & Zugange' : 'Ressources & acces'}
            description={
              locale === 'de'
                ? 'Alle Rubriken sind als vollwertige Zugangsraeume gestaltet und direkt nutzbar.'
                : 'Chaque rubrique est concue comme un espace de service complet, accessible immediatement.'
            }
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <Reveal>
              <SurfaceCard tone="contrast" className="h-full p-6">
                <p className="section-label">{locale === 'de' ? 'Galerie' : 'Galerie'}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{content.galleryNote}</p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {galleryPhotos.slice(0, 3).map((photo) => (
                    <div key={photo.id} className="relative aspect-square overflow-hidden rounded-[1rem]">
                      <Image
                        src={photo.src}
                        alt={getLocalized(photo.title, locale)}
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>
                  ))}
                </div>
                <Link href="/gallery" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                  {tActions('open')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </SurfaceCard>
            </Reveal>

            <Reveal delay={0.05}>
              <SurfaceCard tone="muted" className="h-full p-6">
                <p className="section-label">{locale === 'de' ? 'Brochure' : 'Brochure'}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{content.brochureNote}</p>
                <div className="mt-5 space-y-3">
                  {[
                    locale === 'de'
                      ? 'Mehrsprachige Informationsdokumente fuer Partnerinnen, Partner und Teilnehmende.'
                      : 'Documents d information multilingues pour partenaires et participantes.',
                    locale === 'de'
                      ? 'Klare Download-Struktur fuer Programme, Leitlinien und Projektunterlagen.'
                      : 'Structure de telechargement claire pour programmes, lignes directrices et dossiers projets.'
                  ].map((item) => (
                    <p
                      key={item}
                      className="rounded-[1.2rem] border border-[var(--border)] bg-white/25 px-4 py-3 text-sm leading-7 text-[var(--text)]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <Link
                  href="/brochure"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                >
                  {tActions('open')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </SurfaceCard>
            </Reveal>

            <Reveal delay={0.1}>
              <SurfaceCard className="h-full p-6">
                <p className="section-label">
                  {locale === 'de' ? 'Partner & Foerderer' : 'Partenaires & financeurs'}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {funders.map((funder) => (
                    <div
                      key={funder.id}
                      className="relative h-24 overflow-hidden rounded-[1.2rem] border border-[var(--border)] bg-white/70"
                    >
                      <Image
                        src={funder.logo}
                        alt={funder.name}
                        fill
                        className="object-contain p-3"
                        sizes="180px"
                      />
                    </div>
                  ))}
                </div>
                <Link href="/funders" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                  {tActions('open')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </SurfaceCard>
            </Reveal>
          </div>
        </section>

        <Reveal>
          <SurfaceCard tone="accent" className="px-6 py-7 contrast-on-accent sm:px-8 sm:py-8">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_auto] lg:items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] contrast-on-accent-muted">
                  <Sparkles className="h-4 w-4" />
                  {locale === 'de' ? 'Digitale Services' : 'Services numeriques'}
                </div>
                <h3 className="text-3xl font-semibold">
                  {locale === 'de'
                    ? 'Online-Service und Archiv verstaerken die Begleitung mit klaren, sicheren Zugangsraeumen.'
                    : 'Le service en ligne et les archives renforcent l accompagnement avec des espaces d acces clairs et fiables.'}
                </h3>
                <p className="max-w-3xl text-sm leading-7 contrast-on-accent-muted">
                  {content.onlineServiceNote}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/online-service"
                  className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-5 py-3 text-sm font-semibold contrast-on-accent transition hover:bg-white/18"
                >
                  {locale === 'de' ? 'Online-Service' : 'Service en ligne'}
                </Link>
                <Link
                  href="/archive"
                  className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-5 py-3 text-sm font-semibold contrast-on-accent transition hover:bg-white/18"
                >
                  <FolderArchive className="h-4 w-4" />
                  {locale === 'de' ? 'Archiv' : 'Archives'}
                </Link>
              </div>
            </div>
          </SurfaceCard>
        </Reveal>
      </div>
    </PageContainer>
  );
}
