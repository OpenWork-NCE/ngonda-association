import {PageContainer, PageHero, SectionTitle, SurfaceCard} from '@/components/page-shell';
import {Reveal} from '@/components/reveal';
import {
  contactDetails,
  isAppLocale,
  legalBlocks,
  socialLinks,
  teamMembers
} from '@/data/site-content';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default async function ImpressumPage({params}: PageProps<'/[locale]/impressum'>) {
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
            eyebrow="Impressum"
            title={tPages('impressumTitle')}
            metrics={[
              {
                value: 'VR-6400',
                label: locale === 'de' ? 'Registereintrag' : 'enregistrement'
              },
              {
                value: `${teamMembers.length}`,
                label: locale === 'de' ? 'benannte Verantwortliche' : 'responsables désignés'
              }
            ]}
          />
        </Reveal>

        {/* ── Signature + Team ── */}
        <section className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <SurfaceCard className="p-6 sm:p-7" interactive={false}>
              <div className="flex items-start justify-between gap-3">
                <SectionTitle
                  title={locale === 'de' ? 'Signatur & Kontaktblock' : 'Signature & bloc contact'}
                  description={
                    locale === 'de'
                      ? 'Institutioneller Signaturblock für E-Mails, Partnerkontakte und rechtliche Referenzen.'
                      : 'Bloc de signature institutionnel pour les e-mails, les partenaires et les références légales.'
                  }
                />
                <span className="status-indicator status-indicator-green shrink-0">
                  {locale === 'de' ? 'Aktuell' : 'À jour'}
                </span>
              </div>
              <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--border)] bg-tint/14 p-5 text-sm leading-7 text-[var(--text)]">
                <p className="font-semibold">NGONDA e.V.</p>
                <p className="text-[var(--muted)]">{contactDetails.street}</p>
                <p className="text-[var(--muted)]">{contactDetails.careOf}</p>
                <p className="text-[var(--muted)]">{contactDetails.city}</p>
                <div className="premium-divider my-4" />
                <p className="text-[var(--muted)]">{contactDetails.vr}</p>
                <p className="text-[var(--muted)]">{contactDetails.ust}</p>
                <div className="premium-divider my-4" />
                <p className="text-[var(--muted)]">Office: {contactDetails.officePhone}</p>
                <p className="text-[var(--muted)]">Tel: {contactDetails.mobilePhone}</p>
                <div className="premium-divider my-4" />
                <p>
                  <a
                    href={contactDetails.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--accent)] hover:underline"
                  >
                    ngonda-ev.com
                  </a>
                </p>
                <div className="premium-divider my-4" />
                <p className="text-[var(--muted)]">IBAN: {contactDetails.iban}</p>
                <p className="text-[var(--muted)]">BIC: {contactDetails.bic}</p>
              </div>
            </SurfaceCard>
          </Reveal>

          <Reveal delay={0.06}>
            <SurfaceCard tone="contrast" className="p-6 sm:p-7" interactive={false}>
              <SectionTitle title={locale === 'de' ? 'Verantwortliche' : 'Équipe responsable'} />
              <ul className="mt-5 space-y-3">
                {teamMembers.map((member, index) => (
                  <li
                    key={member.name}
                    className="rounded-[var(--radius-md)] border border-[var(--border)] bg-tint/14 p-4"
                  >
                    <p className="label-xs text-[var(--accent)]">0{index + 1}</p>
                    <p className="mt-2 font-semibold text-[var(--text)]">{member.name}</p>
                    <p className="text-sm text-[var(--accent)]">{member.role}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{member.subtitle}</p>
                  </li>
                ))}
              </ul>
            </SurfaceCard>
          </Reveal>
        </section>

        {/* ── Legal blocks ── */}
        <section className="space-y-5">
          {legalBlocks.map((block, index) => (
            <Reveal key={block.id} delay={0.03 * index}>
              <SurfaceCard className="p-6 sm:p-7" interactive={false}>
                <h2 className="text-2xl font-semibold text-[var(--text)]">{block.title}</h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </SurfaceCard>
            </Reveal>
          ))}
        </section>

        {/* ── Social links ── */}
        <Reveal>
          <SurfaceCard tone="muted" className="p-6 sm:p-7" interactive={false}>
            <div className="flex items-center justify-between gap-4">
              <SectionTitle title={locale === 'de' ? 'Soziale Links' : 'Liens sociaux'} />
              <span className="status-indicator status-indicator-green shrink-0">
                {locale === 'de' ? 'Live' : 'Live'}
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="control-chip inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[var(--text)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </SurfaceCard>
        </Reveal>
      </div>
    </PageContainer>
  );
}
