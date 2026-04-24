import {PageContainer, SectionTitle, SurfaceCard} from '@/components/page-shell';
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
import {
  ArrowRight,
  FolderArchive,
  Newspaper,
  Sparkles
} from 'lucide-react';
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

  const heroTitle =
    locale === 'de'
      ? 'Schutz, Stimme und Zukunft für Migrantinnen in NGONDA e.V.'
      : 'Protection, voix et avenir pour les femmes migrantes à NGONDA e.V.';

  const heroLead =
    locale === 'de'
      ? 'NGONDA e.V. verbindet geschützte Begleitung, Bildung und Community-Nähe zu einem klaren, sichtbaren Angebot.'
      : 'NGONDA e.V. relie accompagnement protégé, éducation et proximité communautaire dans une présence claire et visible.';

  return (
    <div className="space-y-12 lg:space-y-16">
      {/* ── Hero ── */}
      <Reveal>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/media/real-assets/media01.jpg"
              alt="NGONDA e.V."
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(8,8,7,0.88)_0%,rgba(8,8,7,0.64)_33%,rgba(8,8,7,0.18)_60%,rgba(8,8,7,0.62)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(208,101,14,0.22),transparent_26%),radial-gradient(circle_at_82%_22%,rgba(52,162,176,0.24),transparent_24%),linear-gradient(180deg,rgba(8,8,7,0.05)_0%,rgba(8,8,7,0.42)_62%,rgba(8,8,7,0.76)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(8,8,7,0.68))]" />
          </div>

          <div className="relative mx-auto w-full max-w-[96rem] px-4 pb-4 pt-28 sm:px-6 sm:pb-6 sm:pt-32 lg:px-10 lg:pb-8 lg:pt-36">
            <div className="relative aspect-[16/13] overflow-hidden rounded-[2rem] border border-white/12 bg-black/18 shadow-[var(--shadow-hero)] backdrop-blur-[2px] sm:aspect-[16/11] lg:aspect-[16/9]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_34%,rgba(255,255,255,0.10),transparent_24%),radial-gradient(circle_at_26%_74%,rgba(255,255,255,0.08),transparent_22%)]" />
              <div className="absolute left-1/2 top-1/2 h-[72%] w-[62%] -translate-x-[2%] -translate-y-1/2 rounded-full border border-white/16 opacity-70" />
              <div className="absolute left-1/2 top-1/2 h-[54%] w-[46%] -translate-x-[4%] -translate-y-1/2 rounded-full border border-white/12 opacity-55" />
              <div className="absolute left-[54%] top-[21%] h-16 w-16 rounded-full border border-white/12 bg-white/6 blur-sm" />

              <div className="relative z-10 grid h-full items-center gap-10 px-5 py-6 sm:px-7 sm:py-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(24rem,0.92fr)] lg:px-10 lg:py-10">
                <div className="max-w-[34rem] space-y-6 contrast-on-media">
                  <div className="flex flex-wrap items-center gap-3">                  
                    <span className="rounded-full border border-white/16 bg-black/22 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/76 backdrop-blur-md">
                      {content.heroEyebrow}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h1 className="max-w-3xl text-[clamp(2.4rem,5.6vw,5.2rem)] font-semibold leading-[0.92] text-white">
                      {heroTitle}
                    </h1>
                    <p className="max-w-xl text-sm leading-7 text-white/78 sm:text-base sm:leading-8">
                      {heroLead}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link href="/projects" className="btn-primary">
                      {tActions('discover')}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/14"
                    >
                      {tActions('readMore')}
                    </Link>
                  </div>
                </div>

                <div className="relative hidden h-full min-h-[26rem] lg:block [perspective:1800px]">
                  <div
                    className="absolute left-[18%] top-[14%] w-[54%] overflow-hidden rounded-[1.8rem] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.26),rgba(255,255,255,0.08))] p-3 shadow-[0_26px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl"
                    style={{transform: 'rotate(-10deg) translateZ(18px)'}}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                      <Image
                        src="/media/real-assets/media01.jpg"
                        alt="NGONDA e.V."
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 30rem, 100vw"
                      />
                    </div>
                    <div className="space-y-3 px-1 pb-1 pt-4 text-white">
                      <div className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/70">
                        <Sparkles className="h-4 w-4" />
                        {locale === 'de' ? 'Institutioneller Fokus' : 'Focalisation institutionnelle'}
                      </div>
                      <p className="text-lg font-semibold leading-tight">
                        {locale === 'de'
                          ? 'Begleitung, Bildung und sichtbare Community-Arbeit.'
                          : 'Accompagnement, éducation et présence communautaire visible.'}
                      </p>
                    </div>
                  </div>

                  <div
                    className="absolute bottom-[14%] left-[2%] w-[38%] rounded-[1.5rem] border border-white/14 bg-[rgba(255,255,255,0.78)] p-5 text-[var(--text)] shadow-[0_28px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl"
                    style={{transform: 'rotate(-6deg) translateZ(34px)'}}
                  >
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                      {locale === 'de' ? 'Wirkung' : 'Impact'}
                    </p>
                    <p className="mt-2 text-4xl font-semibold leading-none text-[var(--text)]">
                      {currentProjects.length}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {locale === 'de' ? 'aktive Projekte' : 'projets actifs'}
                    </p>
                    <div className="mt-4 h-2 rounded-full bg-[var(--accent-soft)]/55">
                      <div className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-secondary))]" />
                    </div>
                  </div>

                  <div
                    className="absolute right-[4%] top-[24%] w-[44%] rounded-[1.65rem] border border-white/14 bg-[rgba(255,255,255,0.84)] p-5 text-[var(--text)] shadow-[0_32px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl"
                    style={{transform: 'rotate(8deg) translateZ(30px)'}}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                        <Newspaper className="h-4.5 w-4.5" />
                      </span>
                      <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                        {themes.length} {locale === 'de' ? 'Felder' : 'axes'}
                      </span>
                    </div>
                    <p className="mt-4 text-xl font-semibold leading-tight">
                      {locale === 'de' ? 'Neueste Aktualität' : 'Dernière actualité'}
                    </p>
                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--muted)]">
                      {getLocalized(featuredNews.title, locale)}
                    </p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                      {formatDate(featuredNews.publishedAt, locale)}
                    </p>
                  </div>

                  <div className="absolute bottom-[10%] right-[12%] rounded-full border border-white/14 bg-black/34 px-5 py-3 text-white shadow-[0_18px_46px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-white/10">
                        <Sparkles className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/58">
                          {locale === 'de' ? 'Ngonda E.v' : 'Ngonda E.v'}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">SHE FIRST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <PageContainer className="space-y-14 pt-6 sm:pt-8 lg:space-y-[4.75rem] lg:pt-10">
        {/* ── Mission + News ── */}
        <section className="grid gap-6 lg:gap-7 xl:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <SurfaceCard className="p-3 sm:p-4" interactive={false}>
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
                      {locale === 'de' ? 'Community Story' : 'Récit communautaire'}
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
                    <p className="label-xs">
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

          <div className="grid gap-6 lg:gap-7">
            <Reveal delay={0.04}>
              <SurfaceCard tone="contrast" className="p-6 sm:p-7" interactive={false}>
                <SectionTitle
                  title={locale === 'de' ? 'Unsere Vision' : 'Notre vision'}
                  description={content.vision[0]}
                />
                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{content.vision[1]}</p>
              </SurfaceCard>
            </Reveal>

            <Reveal delay={0.08}>
              <SurfaceCard tone="muted" className="p-6 sm:p-7" interactive={false}>
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[1.35rem]">
                  <Image
                    src={featuredNews.featuredImage.src}
                    alt={getLocalized(featuredNews.featuredImage.alt, locale)}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30rem, 100vw"
                  />
                  <div className="media-overlay-strong" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-tint/24 bg-black/24 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.23em] contrast-on-media">
                    <Newspaper className="h-3.5 w-3.5" />
                    {locale === 'de' ? 'Aktuelles' : 'Actualités'}
                  </div>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--text)]">
                  {getLocalized(featuredNews.title, locale)}
                </h3>
                <p className="mt-2 text-xs text-[var(--muted)]">
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

        {/* ── Themes ── */}
        <section className="space-y-7">
          <SectionTitle
            title={locale === 'de' ? 'Unsere Schwerpunkte' : 'Nos axes d\'action'}
            description={
              locale === 'de'
                ? 'Jede Intervention verbindet Schutz, Wissenstransfer und Handlungsmacht.'
                : 'Chaque intervention articule protection, transmission et pouvoir d\'agir.'
            }
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {themes.map((theme, index) => (
              <Reveal key={theme.id} delay={0.04 * index}>
                <SurfaceCard
                  tone={index % 3 === 0 ? 'default' : index % 3 === 1 ? 'contrast' : 'muted'}
                  className="h-full p-5 sm:p-6"
                >
                  {/* Mastra-style index */}
                  <p className="label-xs text-[var(--accent)]">0{index + 1}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">
                    {getLocalized(theme.title, locale)}
                  </h3>
                  <div className="premium-divider my-4" />
                  <p className="text-sm leading-7 text-[var(--muted)]">
                    {getLocalized(theme.body[0], locale)}
                  </p>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="space-y-7">
          <div className="flex items-end justify-between gap-4">
            <SectionTitle
              title={locale === 'de' ? 'Aktuelle Projekte' : 'Projets en cours'}
              description={
                locale === 'de'
                  ? 'Projektlogik, Vermittlung und Community Impact in einer klaren, kuratierten Struktur.'
                  : 'Une lecture claire des projets, de leurs logiques et de leur impact communautaire.'
              }
            />
            <span className="status-indicator status-indicator-green shrink-0">
              {locale === 'de' ? 'Laufend' : 'En cours'}
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {currentProjects.map((project, index) => (
              <Reveal key={project.id} delay={0.05 * index}>
                <SurfaceCard className="h-full overflow-hidden p-3">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.35rem]">
                    <Image
                      src={project.featuredImage.src}
                      alt={getLocalized(project.featuredImage.alt, locale)}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    <div className="media-overlay-strong" />
                    <div className="absolute left-3 top-3 rounded-full border border-tint/24 bg-black/24 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.23em] contrast-on-media">
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

        {/* ── Team ── */}
        <section className="space-y-7">
          <SectionTitle
            title={locale === 'de' ? 'Leitungsteam' : 'Équipe dirigeante'}
            description={
              locale === 'de'
                ? 'Ein interdisziplinäres Team, das Strategie, Begleitung und Netzwerkarbeit in Aachen trägt.'
                : 'Une équipe interdisciplinaire qui porte la stratégie, l\'accompagnement et la dynamique partenariale à Aachen.'
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

        {/* ── Resources ── */}
        <section className="space-y-7">
          <SectionTitle
            title={locale === 'de' ? 'Ressourcen & Zugänge' : 'Ressources & accès'}
            description={
              locale === 'de'
                ? 'Alle Rubriken sind als vollwertige Zugangsräume gestaltet und direkt nutzbar.'
                : 'Chaque rubrique est conçue comme un espace de service complet, accessible immédiatement.'
            }
          />
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal>
              <SurfaceCard tone="contrast" className="h-full p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="section-label">{locale === 'de' ? 'Galerie' : 'Galerie'}</p>
                  <span className="status-indicator">{galleryPhotos.length}+</span>
                </div>
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
                <p className="section-label">{locale === 'de' ? 'Brochüren' : 'Brochures'}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{content.brochureNote}</p>
                <div className="mt-5 space-y-3">
                  {[
                    locale === 'de'
                      ? 'Mehrsprachige Informationsdokumente für Partnerinnen, Partner und Teilnehmende.'
                      : 'Documents d\'information multilingues pour partenaires et participantes.',
                    locale === 'de'
                      ? 'Klare Download-Struktur für Programme, Leitlinien und Projektunterlagen.'
                      : 'Structure de téléchargement claire pour programmes, lignes directrices et dossiers projets.'
                  ].map((item) => (
                    <p
                      key={item}
                      className="rounded-[var(--radius-md)] border border-[var(--border)] bg-tint/25 px-4 py-3 text-sm leading-7 text-[var(--text)]"
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
                <div className="flex items-center justify-between gap-3">
                  <p className="section-label">
                    {locale === 'de' ? 'Partner' : 'Partenaires'}
                  </p>
                  <span className="status-indicator status-indicator-green">
                    {locale === 'de' ? 'Aktiv' : 'Actifs'}
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {funders.map((funder) => (
                    <div
                      key={funder.id}
                      className="relative h-24 overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-tint/8"
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

      </PageContainer>
    </div>
  );
}
