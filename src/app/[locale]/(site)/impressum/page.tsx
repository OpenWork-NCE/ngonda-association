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

export default async function ImpressumPage({
  params
}: PageProps<'/[locale]/impressum'>) {
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
            description={
              locale === 'de'
                ? 'Institutionelle Angaben, Verantwortlichkeiten und rechtliche Hinweise in einer strukturierten Premium-Darstellung.'
                : 'Informations institutionnelles, responsabilités et mentions juridiques dans une présentation premium structurée.'
            }
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

        <section className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <SurfaceCard className="p-6 sm:p-7">
              <SectionTitle
                title={locale === 'de' ? 'Signatur & Kontaktblock' : 'Signature & bloc contact'}
                description={
                  locale === 'de'
                    ? 'Institutioneller Signaturblock für E-Mails, Partnerkontakte und rechtliche Referenzen.'
                    : 'Bloc de signature institutionnel pour les e-mails, les partenaires et les références légales.'
                }
              />
              <div className="mt-5 rounded-[1.4rem] border border-[var(--border)] bg-white/25 p-5 text-sm leading-7 text-[var(--text)]">
                <p className="font-semibold">NGONDA e.V.</p>
                <p>{contactDetails.street}</p>
                <p>{contactDetails.careOf}</p>
                <p>{contactDetails.city}</p>
                <p>{contactDetails.vr}</p>
                <p>{contactDetails.ust}</p>
                <p>Office:{contactDetails.officePhone}</p>
                <p>Tel:{contactDetails.mobilePhone}</p>
                <p>
                  Ngonda e.V (
                  <a
                    href={contactDetails.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--accent)] hover:underline"
                  >
                    ngonda-ev.com
                  </a>
                  )
                </p>
                <p>IBAN: {contactDetails.iban}</p>
                <p>BIC: {contactDetails.bic}</p>
              </div>
            </SurfaceCard>
          </Reveal>

          <Reveal delay={0.06}>
            <SurfaceCard tone="contrast" className="p-6 sm:p-7">
              <SectionTitle title={locale === 'de' ? 'Verantwortliche' : 'Équipe responsable'} />
              <ul className="mt-5 space-y-3">
                {teamMembers.map((member, index) => (
                  <li
                    key={member.name}
                    className="rounded-[1.3rem] border border-[var(--border)] bg-white/25 p-4"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                      0{index + 1}
                    </p>
                    <p className="mt-2 font-semibold text-[var(--text)]">{member.name}</p>
                    <p className="text-sm text-[var(--accent)]">{member.role}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{member.subtitle}</p>
                  </li>
                ))}
              </ul>
            </SurfaceCard>
          </Reveal>
        </section>

        <section className="space-y-5">
          {legalBlocks.map((block, index) => (
            <Reveal key={block.id} delay={0.03 * index}>
              <SurfaceCard className="p-6 sm:p-7">
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

        <Reveal>
          <SurfaceCard tone="muted" className="p-6 sm:p-7">
            <SectionTitle title={locale === 'de' ? 'Soziale Links' : 'Liens sociaux'} />
            <ul className="mt-5 space-y-3 text-sm">
              {socialLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.href} target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </SurfaceCard>
        </Reveal>
      </div>
    </PageContainer>
  );
}
