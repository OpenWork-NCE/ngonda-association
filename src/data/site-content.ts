import type { AppLocale } from '@/i18n/routing';

export type LocalizedString = Record<AppLocale, string>;

export type SocialLink = {
  id: 'facebook' | 'youtube' | 'instagram';
  label: string;
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  subtitle: string;
};

export type NewsItem = {
  id: string;
  slug: LocalizedString;
  title: LocalizedString;
  excerpt: LocalizedString;
  publishedAt: string;
  featuredImage: {
    src: string;
    alt: LocalizedString;
  };
  gallery: Array<{
    src: string;
    alt: LocalizedString;
  }>;
  body: LocalizedString[];
};

export type ProjectItem = {
  id: string;
  slug: LocalizedString;
  title: LocalizedString;
  featuredImage: {
    src: string;
    alt: LocalizedString;
  };
  gallery: Array<{
    src: string;
    alt: LocalizedString;
  }>;
  body: LocalizedString[];
};

export type ThemeItem = {
  id: string;
  title: LocalizedString;
  body: LocalizedString[];
};

export type LegalBlock = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type FunderItem = {
  id: string;
  name: string;
  logo: string;
};

export type GalleryPhoto = {
  id: string;
  title: LocalizedString;
  caption: LocalizedString;
  src: string;
};

export type GalleryVideo = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  href: string;
  thumbnail: string;
};

export type BrochureItem = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  kind: LocalizedString;
  highlights: LocalizedString[];
  filePath: string;
  fileName: string;
  pageCount: number;
  pageFormat: string;
  fileSizeBytes: number;
  updatedAt: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61552484613409'
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/ngondaev/'
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Ngo Bigda Sylvie',
    role: 'Vorstandsvorsitzende',
    subtitle: 'Übersetzerin und Consulting'
  },
  {
    name: 'Marie Noelle Andela Belinga',
    role: 'Geschäftsführerin',
    subtitle: 'B.A. Internationale Business'
  },
  {
    name: 'Frentzen Cecile',
    role: 'Schatzmeisterin',
    subtitle: 'Gesundheitswesen'
  }
];

export const legalBlocks: LegalBlock[] = [
  {
    id: 'streitschlichtung',
    title: 'Streitschlichtung',
    paragraphs: [
      'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
    ]
  },
  {
    id: 'haftung-inhalte',
    title: 'Haftung für Inhalte',
    paragraphs: [
      'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
      'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.'
    ]
  },
  {
    id: 'haftung-links',
    title: 'Haftung für Links',
    paragraphs: [
      'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
      'Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.'
    ]
  },
  {
    id: 'urheberrecht',
    title: 'Urheberrecht',
    paragraphs: [
      'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
      'Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
      'Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.'
    ]
  }
];

export const currentProjects: ProjectItem[] = [
  {
    id: 'klima-migration',
    slug: {
      de: 'klima-migration-wege-der-hoffnung',
      fr: 'climat-migration-chemins-espoir'
    },
    title: {
      de: 'Klima & Migration – Wege der Hoffnung',
      fr: 'Climat & migration - chemins de l’espoir'
    },
    featuredImage: {
      src: '/media/projects/klima-migration/featured.jpg',
      alt: {
        de: 'Workshopszene zum Thema Klima und Migration',
        fr: 'Scene d atelier autour du climat et des migrations'
      }
    },
    gallery: [
    ],
    body: [
      {
        de: 'Climate & Migration – Wege der Hoffnung ist ein Bildungs- und Dialogprojekt, das den Menschen helfen soll, die tiefgreifenden Zusammenhänge zwischen Klimawandel, sozialer Ungleichheit und Migration besser zu verstehen. In einer Welt, in der Umweltkrisen und politische Instabilität zunehmen, schafft dieses Projekt einen sinnvollen Raum für Lernen, Reflexion und offene Gespräche.',
        fr: 'Climat et migrations – Chemins d’espoir est un projet éducatif et de dialogue visant à mieux comprendre les liens profonds entre changement climatique, inégalités sociales et migrations. Dans un monde où les crises environnementales et l’instabilité politique s’accentuent, ce projet offre un espace propice à l’apprentissage, à la réflexion et au dialogue ouvert.'
      },
      {
        de: 'Das Projekt zielt darauf ab, die Teilnehmer dabei zu unterstützen, vertieftes Wissen über die ökologischen, politischen und sozialen Ursachen der Migration zu erlangen. Klimawandel, Konflikte, Armut und fehlende Ressourcen zwingen viele Menschen dazu, ihre Heimat auf der Suche nach Sicherheit und besseren Möglichkeiten zu verlassen. In Workshops und Diskussionen erforschen die Teilnehmer diese Ursachen und entwickeln ein besseres Verständnis für die Gründe der Migration.',
        fr: 'Le projet a pour objectif d’aider les participants à approfondir leurs connaissances sur les causes écologiques, politiques et sociales des migrations. Le changement climatique, les conflits, la pauvreté et le manque de ressources contraignent de nombreuses personnes à quitter leur foyer en quête de sécurité et de meilleures perspectives. À travers des ateliers et des discussions, les participants explorent ces causes et développent une compréhension plus fine des raisons qui poussent à migrer.'
      },
      {
        de: 'Ein wichtiges Ziel des Projekts ist es, die Mythen, Vorurteile und Fehlinformationen, die oft die öffentlichen Debatten über Migration beherrschen, zu hinterfragen und zu zerstreuen. Durch den Einsatz von Fakten, Dialog und kritischem Denken lernen die Teilnehmer, Stereotypen zu hinterfragen und ausgewogenere und fundiertere Perspektiven zu entwickeln. Dieser Ansatz fördert das Einfühlungsvermögen und den Respekt für Menschen mit unterschiedlichem Hintergrund.',
        fr: 'Un objectif clé du projet est de remettre en question et de dissiper les mythes, les préjugés et la désinformation qui dominent souvent les débats publics sur les migrations. En s’appuyant sur des faits, le dialogue et l’esprit critique, les participants apprennent à questionner les stéréotypes et à développer des perspectives plus équilibrées et éclairées. Cette approche favorise l’empathie et le respect envers les personnes issues de milieux divers.'
      },
      {
        de: 'Das Projekt betont die Einbeziehung von Menschen mit Migrationserfahrung. Sie werden ermutigt, ihre persönlichen Geschichten, Kämpfe und Hoffnungen zu erzählen. Diese Erfahrungen aus dem wirklichen Leben geben globalen Problemen ein menschliches Gesicht und helfen dabei, große Herausforderungen mit dem Leben des Einzelnen zu verbinden. Indem sie diesen Stimmen zuhören, gewinnen die Teilnehmer einen tieferen Einblick und ein besseres Verständnis.',
        fr: 'Le projet met l’accent sur l’inclusion des personnes ayant une expérience migratoire. Les participants sont encouragés à partager leurs histoires personnelles, leurs difficultés et leurs espoirs. Ces expériences vécues donnent un visage humain aux problèmes mondiaux et permettent de relier les grands défis à la vie de chacun. En écoutant ces voix, ils acquièrent une compréhension plus profonde et une vision plus globale.'
      },
      {
        de: 'Ein weiterer Schwerpunkt ist die Sensibilisierung für die Auswirkungen des Klimawandels in den Regionen des globalen Südens. Die Teilnehmer erfahren, wie sich Dürren, Überschwemmungen und Ressourcenknappheit auf Gemeinschaften auswirken und die Migration verstärken. Dies unterstreicht die globale Verantwortung, die wir bei der Bewältigung von Klimagerechtigkeit und der Unterstützung gefährdeter Bevölkerungsgruppen haben.',
        fr: 'Un autre axe du projet est la sensibilisation aux impacts du changement climatique dans les pays du Sud. Les participants découvrent comment les sécheresses, les inondations et la raréfaction des ressources affectent les communautés et exacerbent les migrations. Cela souligne notre responsabilité mondiale face à la justice climatique et au soutien des populations vulnérables.'
      },
      {
        de: 'Climate & Migration, Wege der Hoffnung" schafft einen Raum, in dem sich globale Herausforderungen und persönliche Erfahrungen treffen. Durch Bildung, Dialog und Geschichtenerzählen fördert das Projekt Verständnis, Solidarität und Hoffnung. Es befähigt den Einzelnen, informierter, mitfühlender und aktiver am Aufbau einer gerechteren und nachhaltigeren Welt mitzuwirken.',
        fr: '« Climat et migrations : Voies d’espoir » crée un espace de rencontre entre les défis mondiaux et les expériences personnelles. Par le biais de l’éducation, du dialogue et du récit, le projet favorise la compréhension, la solidarité et l’espoir. Il permet à chacun d’être mieux informé, plus compatissant et plus actif dans la construction d’un monde plus juste et durable.'
      }
    ]
  },
  {
    id: 'koloniale-gewalt-bassaa',
    slug: {
      de: 'unrecht-im-schatten-bassaa',
      fr: 'violence-coloniale-bassaa'
    },
    title: {
      de: 'Unrecht im Schatten: Koloniale Gewalt an den Bassa’a',
      fr: 'Injustice dans l’ombre : violences coloniales envers les Bassa’a'
    },
    featuredImage: {
      src: '/media/projects/koloniale-gewalt-bassaa/featured.jpg',
      alt: {
        de: 'Architektonische Perspektive fuer Erinnerungsarbeit',
        fr: 'Perspective architecturale pour le travail de memoire'
      }
    },
    gallery: [],
    body: [
      {
        de: 'Unrecht im Schatten: Koloniale Gewalt an den Bassa’a ist ein Erinnerungs- und Bildungsprojekt, das die kolonialen Verbrechen im heutigen Kamerun sichtbar macht und die Perspektive der betroffenen Gemeinschaft in den Mittelpunkt stellt.',
        fr: 'Ce projet de mémoire et d’éducation rend visibles les crimes coloniaux au Cameroun et place la perspective des communautés concernées au centre.'
      },
      {
        de: 'Im Fokus steht die Gewalt während der deutschen Kolonialherrschaft in Kamerun (1884–1916), insbesondere Zwangsarbeit, Enteignung, Repression und kulturelle Zerstörung. Das Projekt verbindet historische Aufarbeitung mit künstlerischer Auseinandersetzung, Dialogformen und Bildungsarbeit.',
        fr: 'Le cœur du travail porte sur la période coloniale allemande (1884-1916) : travail forcé, spoliations, répression et destruction culturelle, avec une articulation entre histoire, création, dialogue et transmission.'
      },
      {
        de: 'Ziel ist es, koloniale Kontinuitäten zu reflektieren, Rassismus- und Machtstrukturen kritisch zu hinterfragen und Räume für Heilung, Erinnerung und Gerechtigkeit zu schaffen.',
        fr: 'L’objectif est d’interroger les continuités coloniales, les rapports de pouvoir et de créer des espaces de réparation, de mémoire et de justice.'
      }
    ]
  },
  {
    id: 'autismus-sensibilisierung',
    slug: {
      de: 'autismus-verstehen',
      fr: 'comprendre-autisme'
    },
    title: {
      de: 'Autismus verstehen: Aufklärung und Sensibilisierung',
      fr: 'Comprendre l’autisme : information et sensibilisation'
    },
    featuredImage: {
      src: '/media/projects/autismus-sensibilisierung/featured.jpg',
      alt: {
        de: 'Begleitformat fuer Familien und Fachkraefte',
        fr: 'Format d accompagnement pour familles et equipes'
      }
    },
    gallery: [],
    body: [
      {
        de: 'Autismus verstehen: Aufklärung und Sensibilisierung ist ein Informations- und Bildungsprojekt, das Wissen über Autismus vermittelt, Vorurteile abbaut und Inklusion stärkt.',
        fr: 'Ce projet d’information et de formation vise à diffuser les connaissances sur l’autisme, réduire les préjugés et renforcer l’inclusion.'
      },
      {
        de: 'Das Projekt richtet sich an Eltern, pädagogische Fachkräfte, Ehrenamtliche und interessierte Bürger*innen. In Workshops, Vorträgen und Dialogformaten werden Grundlagen zu Autismus und Neurodiversität, Kommunikationsstrategien, schulische Teilhabe und Antidiskriminierung behandelt.',
        fr: 'Le programme s’adresse aux parents, éducateurs, bénévoles et citoyennes et citoyens, avec des ateliers et conférences sur la neurodiversité, la communication, la scolarité et la lutte contre la discrimination.'
      },
      {
        de: 'Ziel ist es, Verständnis zu fördern, Barrieren abzubauen und eine inklusive Gesellschaft zu unterstützen, in der Vielfalt als Stärke wahrgenommen wird.',
        fr: 'L’objectif est de favoriser la compréhension, de réduire les barrières et de soutenir une société inclusive où la diversité est reconnue comme une force.'
      }
    ]
  },
  {
    id: 'muto-stimmen-fuer-veraenderung',
    slug: {
      de: 'muto-stimmen-fuer-veraenderung',
      fr: 'muto-voix-pour-le-changement'
    },
    title: {
      de: 'Muto – Stimmen für Veränderung',
      fr: 'Muto - voix pour le changement'
    },
    featuredImage: {
      src: '/media/projects/muto-stimmen-fuer-veraenderung/featured.jpg',
      alt: {
        de: 'Empowerment Format fuer Frauen in Aachen',
        fr: 'Format d empowerment pour les femmes a Aachen'
      }
    },
    gallery: [],
    body: [
      {
        de: 'Gewalt gegen Frauen betrifft besonders Migrantinnen und Frauen mit Behinderungen. In der StädteRegion Aachen sind Frauen aus Subsahara-Afrika häufig mit sprachlichen, kulturellen und strukturellen Barrieren konfrontiert.',
        fr: 'Les violences faites aux femmes touchent particulièrement les migrantes et les femmes en situation de handicap, avec des barrières linguistiques, culturelles et structurelles dans la région d’Aix-la-Chapelle.'
      },
      {
        de: 'Das Projekt stärkt Frauen durch Aufklärung, Empowerment-Workshops und den Aufbau eines unterstützenden Netzwerks. Ziel ist es, Rechte sichtbar zu machen, Gewalt zu enttabuisieren und sichere Lebensbedingungen zu fördern.',
        fr: 'Le projet renforce les femmes par l’information, des ateliers d’empowerment et la mise en réseau afin de rendre les droits visibles et de lutter contre la banalisation des violences.'
      },
      {
        de: 'Gemeinsam mit lokalen Partner*innen sowie durch die Einbindung von Männern und Jugendlichen setzen wir auf nachhaltige Prävention und eine solidarische, gewaltfreie Gemeinschaft.',
        fr: 'Avec des partenaires locaux et l’implication des hommes et des jeunes, l’action vise une prévention durable et une communauté solidaire sans violence.'
      }
    ]
  }
];

export const themes: ThemeItem[] = [
  {
    id: 'frauen-empowerment',
    title: {
      de: 'Frauen-Empowerment',
      fr: 'Empowerment des femmes'
    },
    body: [
      {
        de: 'Mit Women-Empowerment bieten wir den Rahmen und die Möglichkeit für Frauen an, sich unabhängig von Herkunft, Religion und sozialen Unterschieden miteinander zu vernetzen und sich gegenseitig zu stärken.',
        fr: 'Nous créons un cadre permettant aux femmes, au-delà des origines, religions et différences sociales, de se connecter et se renforcer mutuellement.'
      },
      {
        de: 'Darüber hinaus gestalten wir gendergerechte Angebote nach dem Modell der Nachhaltigkeitsziele, damit die Zielgruppe den eigenen Horizont erweitern und die eigenen Expertisen wertschätzen kann.',
        fr: 'Nous développons des offres sensibles au genre en lien avec les objectifs de durabilité pour valoriser les compétences et élargir les perspectives.'
      }
    ]
  },
  {
    id: 'staerkung',
    title: {
      de: 'Stärkung',
      fr: 'Renforcement'
    },
    body: [
      {
        de: 'Die Stärkung von Frauen erfordert die Anerkennung und Beseitigung systemischer Hindernisse wie Geschlechterdiskriminierung, Gewalt, mangelnden Zugang zu Bildung und Gesundheitsfürsorge sowie ungleiche Beschäftigungschancen.',
        fr: 'Le renforcement des femmes suppose d’identifier et de lever les obstacles systémiques : discriminations, violences, accès inégal à l’éducation, à la santé et à l’emploi.'
      },
      {
        de: 'Traditionelle Rollen und Überzeugungen, die Ungleichheit aufrechterhalten, müssen hinterfragt werden, um Wahlmöglichkeiten und Freiheit der Frauen zu erweitern.',
        fr: 'Les rôles traditionnels qui maintiennent les inégalités doivent être questionnés afin d’élargir les choix et la liberté des femmes.'
      }
    ]
  },
  {
    id: 'migration-integration',
    title: {
      de: 'Sensibilisierungsarbeit im Bereich Migration und Integration',
      fr: 'Sensibilisation migration et intégration'
    },
    body: [
      {
        de: 'Armut bedeutet auch das Fehlen von Sicherheit und Teilhabe. Aus diesem Grund geht NGONDA auf Frauen zu und begleitet sie in den unterschiedlichsten Lebenssituationen.',
        fr: 'La précarité implique aussi un manque de sécurité et de participation. NGONDA accompagne les femmes dans des situations de vie variées.'
      },
      {
        de: 'Ob Integrationskurse, Beratungsstellen, Integrationsagenturen oder Sozialberatung für geflüchtete Menschen: Wir kämpfen mit und für Frauen durch den Bürokratiedschungel.',
        fr: 'Cours d’intégration, centres de conseil, agences d’intégration ou accompagnement social : nous avançons avec les femmes dans les démarches administratives complexes.'
      }
    ]
  },
  {
    id: 'sprache-kommunikation',
    title: {
      de: 'Sprach- und Kommunikationstraining',
      fr: 'Formation linguistique et communication'
    },
    body: [
      {
        de: 'Sprache ist der Schlüssel zu gelungener Integration. Wir unterstützen Frauen niedrigschwellig dabei, rechtzeitig die passenden Kommunikationsbedingungen für ihren Alltag aufzubauen.',
        fr: 'La langue est une clé d’intégration. Nous aidons les femmes à construire tôt les conditions de communication utiles à leur quotidien.'
      },
      {
        de: 'Das gelingt über Sprachkurse, Online-Tutorials, Sprachlotsen und Tandem-Patenschaften mit Muttersprachlerinnen.',
        fr: 'Cela passe par des cours de langue, des tutoriels en ligne, du mentorat linguistique et des tandems avec des locutrices natives.'
      }
    ]
  },
  {
    id: 'praevention-gesundheit',
    title: {
      de: 'Prävention und Gesundheit',
      fr: 'Prévention et santé'
    },
    body: [
      {
        de: 'Nach der Covid-19-Pandemie ist klar: Gesundheitsvorsorge muss frühzeitig organisiert werden. Dazu zählen Informationen zu Versicherungsschutz, Patientenverfügung und Pflegeangeboten.',
        fr: 'Après la pandémie de Covid-19, la prévention doit être anticipée, notamment sur l’assurance santé, les directives patients et l’accès aux dispositifs de soins.'
      },
      {
        de: 'Prävention wird mit Empowerment verbunden, damit Frauen informierte Entscheidungen für ihr eigenes Wohlbefinden treffen können.',
        fr: 'La prévention est reliée à l’empowerment pour permettre aux femmes de prendre des décisions éclairées pour leur santé.'
      }
    ]
  }
];

export const archiveProjects: ProjectItem[] = [
  {
    id: 'mi-madre',
    slug: {
      de: 'mi-madre',
      fr: 'mi-madre'
    },
    title: {
      de: 'Mi Madre',
      fr: 'Mi Madre'
    },
    featuredImage: {
      src: '/media/real-assets/media01.jpg',
      alt: {
        de: 'Austauschrunde im Rahmen eines Begleitformats',
        fr: 'Temps d echange dans un format d accompagnement'
      }
    },
    gallery: [],
    body: [
      {
        de: 'Empowerment von Müttern mit Kindern mit Beeinträchtigungen im Alltag. Mütter mit körperlich oder geistig beeinträchtigten Kindern stehen oft unter hohem Druck und fühlen sich isoliert.',
        fr: 'Empowerment de mères ayant des enfants en situation de handicap, souvent confrontées à l’isolement et à de fortes pressions quotidiennes.'
      },
      {
        de: 'Mit diesem Projekt möchten wir die Zielgruppe stützen und durch Sensibilisierungsmaßnahmen mehr Awareness in der Gesellschaft schaffen.',
        fr: 'Ce projet vise à soutenir ces mères et à renforcer la sensibilisation de la société.'
      }
    ]
  },
  {
    id: 'filles',
    slug: {
      de: 'filles',
      fr: 'filles'
    },
    title: {
      de: 'Filles - Jung und engagiert',
      fr: 'Filles - jeunes et engagées'
    },
    featuredImage: {
      src: '/media/real-assets/media15.jpg',
      alt: {
        de: 'Junge Teilnehmerin in einem Engagementformat',
        fr: 'Jeune participante dans un format d engagement'
      }
    },
    gallery: [],
    body: [
      {
        de: 'Austausch, Lernatelier und Kreativ-Workshops für nachhaltiges und gendergerechtes Engagement junger Mädchen zwischen 14 und 27 Jahren.',
        fr: 'Ateliers d’échange, d’apprentissage et de créativité pour l’engagement durable et sensible au genre des jeunes filles de 14 à 27 ans.'
      },
      {
        de: 'Themen des Erwachsenwerdens lassen wenig Raum für Ehrenamt. Das Projekt aktiviert Engagementpotenziale gezielt.',
        fr: 'Le projet aide à libérer un potentiel d’engagement souvent freiné par les défis du passage à l’âge adulte.'
      }
    ]
  },
  {
    id: 'minga',
    slug: {
      de: 'minga',
      fr: 'minga'
    },
    title: {
      de: 'MINGA - Wenn sich Mädchen und Frauen entwicklungspolitisch engagieren',
      fr: 'MINGA - engagement des filles et femmes pour le développement'
    },
    featuredImage: {
      src: '/media/real-assets/media19.jpg',
      alt: {
        de: 'Gruppenbild eines gemeinschaftlichen Engagementformats',
        fr: 'Photo de groupe d un format d engagement communautaire'
      }
    },
    gallery: [],
    body: [
      {
        de: 'Empowerment durch Bildung: Frauen spielen eine zentrale Rolle in der entwicklungspolitischen Bildungsarbeit, die globale Gerechtigkeit und soziale Veränderungen fördert.',
        fr: 'Empowerment par l’éducation : les femmes jouent un rôle central dans l’éducation au développement pour promouvoir justice globale et transformation sociale.'
      },
      {
        de: 'Im Rahmen hybrider Veranstaltungen sollen Aktivistinnen aus dem Bildungsbereich sichtbar werden und ihre Perspektiven einbringen.',
        fr: 'Des événements hybrides donnent la parole à des activistes engagées dans l’éducation et le changement social.'
      }
    ]
  }
];

export const news: NewsItem[] = [
  {
    id: 'zusammenarbeit-2023',
    slug: {
      de: 'zusammenarbeit-seit-2023',
      fr: 'collaboration-depuis-2023'
    },
    title: {
      de: 'Zusammenarbeit seit 2023',
      fr: 'Collaboration depuis 2023'
    },
    excerpt: {
      de: 'Politische Informationsfahrt nach Berlin auf Einladung des Bundespresseamtes im November 2023.',
      fr: 'Voyage d’information politique à Berlin sur invitation du Bundespresseamt en novembre 2023.'
    },
    publishedAt: '2023-11-21',
    featuredImage: {
      src: '/media/real-assets/media20.jpg',
      alt: {
        de: 'Illustratives Gruppenbild fuer die Meldung zur institutionellen Zusammenarbeit',
        fr: 'Photo de groupe illustrative pour l actualite sur la collaboration institutionnelle'
      }
    },
    gallery: [],
    body: [
      {
        de: 'Auf Einladung des Bundespresseamtes nahmen wir im Rahmen der Trägerschaft von Migrafrika gGmbH (Köln) vom 21. bis 24. November 2023 an einer politischen Informationsfahrt nach Berlin teil.',
        fr: 'Sur invitation du Bundespresseamt et dans le cadre de la coopération avec Migrafrika gGmbH (Cologne), nous avons participé du 21 au 24 novembre 2023 à un voyage d’information politique à Berlin.'
      },
      {
        de: 'Vertreter*innen aus dem zivilgesellschaftlichen Engagement erhielten die Möglichkeit, die Hauptstadt aus politischer, historischer und gesellschaftlicher Perspektive kennenzulernen.',
        fr: 'Des représentantes et représentants de la société civile ont pu découvrir la capitale sous des angles politiques, historiques et sociétaux.'
      },
      {
        de: 'Für das Team aus Aachen (ADNA e.V. und NGONDA e.V.) begann die Reise um 6:00 Uhr am Aachener Hauptbahnhof. Mit der Regionalbahn ging es nach Köln, anschließend mit dem ICE weiter nach Berlin.',
        fr: 'Pour l’équipe d’Aachen (ADNA e.V. et NGONDA e.V.), le départ a eu lieu à 6h00 depuis la gare centrale d’Aachen, puis via Cologne en ICE vers Berlin.'
      },
      {
        de: 'Besonders eindrucksvoll waren der Besuch des Deutschen Bundestages, der Austausch in der Heinrich-Böll-Stiftung und die Entdeckungsreise durch die deutsche Geschichte im Deutschen Historischen Museum.',
        fr: 'Parmi les moments forts : la visite du Bundestag, les échanges à la Fondation Heinrich-Böll et la découverte de l’histoire allemande au Musée historique allemand.'
      },
      {
        de: 'Die Reise war nicht nur eine politische Bildungsfahrt, sondern auch eine wertvolle Gelegenheit zur Vernetzung, Inspiration und Stärkung unseres zivilgesellschaftlichen Engagements vor Ort in Aachen.',
        fr: 'Ce déplacement a été à la fois une expérience d’éducation politique et une occasion précieuse de mise en réseau, d’inspiration et de renforcement de notre engagement local à Aachen.'
      }
    ]
  },
  {
    id: 'atelier-droits-2024',
    slug: {
      de: 'rechte-atelier-aachen-2024',
      fr: 'atelier-droits-aachen-2024'
    },
    title: {
      de: 'Rechteatelier für Frauen in Aachen',
      fr: 'Atelier droits pour les femmes a Aachen'
    },
    excerpt: {
      de: 'Im Juni 2024 wurde ein praxisnahes Atelier zu Schutzrechten, Orientierung und Anlaufstellen organisiert.',
      fr: 'En juin 2024, un atelier pratique a ete organise autour des droits, de la protection et des relais locaux.'
    },
    publishedAt: '2024-06-18',
    featuredImage: {
      src: '/media/real-assets/media02.jpg',
      alt: {
        de: 'Atelier collectif avec prise de parole et echange',
        fr: 'Atelier collectif avec prise de parole et echange'
      }
    },
    gallery: [],
    body: [
      {
        de: 'Das Atelier brachte Teilnehmerinnen, Beratungsakteur*innen und Ehrenamtliche zusammen, um Rechte und Schutzmechanismen im Alltag verständlich aufzubereiten.',
        fr: 'L atelier a reuni participantes, actrices de l accompagnement et benevoles pour rendre accessibles les droits et mecanismes de protection.'
      },
      {
        de: 'Im Mittelpunkt standen konkrete Orientierungspunkte zu Ansprechstellen, Dokumentation, Notfallkontakten und sprachsensibler Begleitung.',
        fr: 'Le coeur du programme portait sur les points de contact, la documentation, les ressources d urgence et l accompagnement linguistique.'
      },
      {
        de: 'Das Format wurde bewusst dialogorientiert gestaltet, damit Fragen direkt geklaert und individuelle Handlungsschritte gemeinsam vorbereitet werden konnten.',
        fr: 'Le format a ete concu de maniere dialogique pour permettre des clarifications immediates et des plans d action individualises.'
      }
    ]
  },
  {
    id: 'forum-communautaire-2025',
    slug: {
      de: 'forum-partnerschaften-2025',
      fr: 'forum-partenariats-2025'
    },
    title: {
      de: 'Forum Partnerschaften und Community-Dialog 2025',
      fr: 'Forum partenariats et dialogue communautaire 2025'
    },
    excerpt: {
      de: 'Im Oktober 2025 wurden lokale Partner, Vereine und Teilnehmende in einem gemeinsamen Dialogforum vernetzt.',
      fr: 'En octobre 2025, partenaires locaux, associations et participantes ont ete reunis dans un forum de dialogue.'
    },
    publishedAt: '2025-10-09',
    featuredImage: {
      src: '/media/real-assets/media21.jpg',
      alt: {
        de: 'Gruppenbild eines Community-Forums',
        fr: 'Photo de groupe d un forum communautaire'
      }
    },
    gallery: [],
    body: [
      {
        de: 'Das Forum schuf einen gemeinsamen Raum, in dem Vereinsakteur*innen, Projektpartner und Teilnehmende aktuelle Bedarfe und Prioritaeten fuer 2026 abgestimmt haben.',
        fr: 'Le forum a permis aux actrices associatives, partenaires et participantes d aligner les besoins prioritaires pour 2026.'
      },
      {
        de: 'Diskutiert wurden insbesondere Zugangsbarrieren, mehrsprachige Informationswege sowie stabile Kooperationen in den Bereichen Beratung, Bildung und Schutz.',
        fr: 'Les echanges ont porte sur les barriers d acces, les parcours d information multilingues et les cooperations en accompagnement, education et protection.'
      },
      {
        de: 'Die Ergebnisse bilden die Grundlage fuer eine abgestimmte Jahresplanung mit klaren Verantwortlichkeiten zwischen den beteiligten Strukturen.',
        fr: 'Les resultats constituent la base d une planification annuelle coordonnee avec des responsabilites claires entre les structures impliquees.'
      }
    ]
  }
];

export const cooperationFrancoAllemande: LocalizedString[] = [
  {
    de: 'Ngonda Projet (FONDS CITOYEN FRANCO-ALLEMAND): Kooperationen wie "Femmes et Emploi" und "Femmes Migrantes et Empowerment" fördern berufliche Integration, Sprachkompetenz, Mentorat und Gleichstellung.',
    fr: 'Ngonda Projet (FONDS CITOYEN FRANCO-ALLEMAND) : des initiatives comme "Femmes et Emploi" et "Femmes Migrantes et Empowerment" soutiennent l’intégration professionnelle, la langue, le mentorat et l’égalité.'
  },
  {
    de: 'Frankreich und Deutschland teilen zentrale sozialpolitische Ziele: Gleichstellung, Bekämpfung von Gewalt gegen Frauen, bessere Vereinbarkeit von Beruf und Familie sowie stärkere Repräsentation von Frauen in Entscheidungsräumen.',
    fr: 'La France et l’Allemagne partagent des priorités communes : égalité, lutte contre les violences, articulation vie professionnelle-vie familiale et meilleure représentation des femmes dans les instances de décision.'
  }
];

export const funders: FunderItem[] = [
  {
    id: 'f1',
    name: 'Förderer 1',
    logo: '/funders/funder-1.jpg'
  },
  {
    id: 'f2',
    name: 'Förderer 2',
    logo: '/funders/funder-2.jpg'
  },
  {
    id: 'f3',
    name: 'Förderer 3',
    logo: '/funders/funder-3.jpg'
  },
  {
    id: 'f4',
    name: 'Förderer 4',
    logo: '/funders/funder-4.jpg'
  }
];

export const brochures: BrochureItem[] = [
  {
    id: 'ngonda-brochure',
    title: {
      de: 'NGONDA Broschüre',
      fr: 'Brochure NGONDA'
    },
    description: {
      de: 'Kompakte institutionelle Broschüre mit dem Profil von NGONDA, den zentralen Handlungsfeldern und einer klaren Einstiegsübersicht für Partner, Förderer und Interessierte.',
      fr: 'Brochure institutionnelle concise présentant le profil de NGONDA, ses axes d’action et une vue d’ensemble claire pour les partenaires, les bailleurs et le public.'
    },
    kind: {
      de: 'Institutionelle Präsentation',
      fr: 'Présentation institutionnelle'
    },
    highlights: [
      {
        de: 'Kurzformat für eine schnelle Einführung',
        fr: 'Format court pour une découverte rapide'
      },
      {
        de: 'Geeignet für Präsentationen und Erstkontakte',
        fr: 'Adaptée aux présentations et aux premiers contacts'
      },
      {
        de: 'Direkt teilbar als PDF',
        fr: 'Facile à partager en PDF'
      }
    ],
    filePath: '/Brochure/Ngonda Brochure.pdf',
    fileName: 'Ngonda Brochure.pdf',
    pageCount: 3,
    pageFormat: 'Landscape',
    fileSizeBytes: 414178,
    updatedAt: '2026-04-15'
  },
  {
    id: 'toolkit-ngonda',
    title: {
      de: 'Toolkit NGONDA',
      fr: 'Toolkit NGONDA'
    },
    description: {
      de: 'Umfangreiches Toolkit für vertiefte Arbeit, strukturierte Vermittlung und den Einsatz in Workshops, Gruppenformaten oder begleitenden Bildungssettings.',
      fr: 'Toolkit approfondi pour la transmission structurée et l’utilisation dans des ateliers, des formats de groupe ou des dispositifs d’accompagnement.'
    },
    kind: {
      de: 'Praxis-Toolkit',
      fr: 'Toolkit pratique'
    },
    highlights: [
      {
        de: 'Ausführlicher Dokumentumfang',
        fr: 'Contenu détaillé et structuré'
      },
      {
        de: 'Für Moderation und Begleitung geeignet',
        fr: 'Pensé pour l’animation et l’accompagnement'
      },
      {
        de: 'Print-ready im A4-Format',
        fr: 'Prêt à imprimer au format A4'
      }
    ],
    filePath: '/Brochure/Toolkit Ngonda.pdf',
    fileName: 'Toolkit Ngonda.pdf',
    pageCount: 36,
    pageFormat: 'A4',
    fileSizeBytes: 2015229,
    updatedAt: '2026-04-15'
  },
  {
    id: 'mi-madre-handbook',
    title: {
      de: 'Mi Madre Handbook',
      fr: 'Guide Mi Madre'
    },
    description: {
      de: 'Handbuch im A4-Format für thematische Orientierung, begleitende Nutzung und eine ruhige, gut lesbare Vermittlung im Kontext von Mi Madre.',
      fr: 'Guide au format A4 pensé pour l’orientation thématique, l’accompagnement et une lecture claire autour de Mi Madre.'
    },
    kind: {
      de: 'Handbuch',
      fr: 'Guide'
    },
    highlights: [
      {
        de: 'Klar gegliedertes Handbuch',
        fr: 'Guide clairement structuré'
      },
      {
        de: 'Gut lesbar für Einzel- und Gruppennutzung',
        fr: 'Lisible en usage individuel ou collectif'
      },
      {
        de: 'Direkt druck- und downloadfähig',
        fr: 'Téléchargeable et imprimable immédiatement'
      }
    ],
    filePath: '/Brochure/Mi Madre handbook ok.pdf',
    fileName: 'Mi Madre handbook ok.pdf',
    pageCount: 16,
    pageFormat: 'A4',
    fileSizeBytes: 1725965,
    updatedAt: '2026-04-15'
  },
  {
    id: 'ndog-bidi-booklet',
    title: {
      de: 'Ndog bidi Booklet',
      fr: 'Livret Ndog bidi'
    },
    description: {
      de: 'Längeres Booklet im kompakten Format, geeignet für sequentielle Lektüre, Weitergabe im Feld und den Einsatz in kulturellen oder gemeinschaftlichen Kontexten.',
      fr: 'Livret plus long au format compact, adapté à une lecture séquentielle, à la diffusion sur le terrain et à des contextes culturels ou communautaires.'
    },
    kind: {
      de: 'Booklet / Heft',
      fr: 'Livret'
    },
    highlights: [
      {
        de: 'Kompaktes Heftformat',
        fr: 'Format livret compact'
      },
      {
        de: 'Ideal für Auslage und Verteilung',
        fr: 'Idéal pour la diffusion et la mise à disposition'
      },
      {
        de: 'Umfangreicher Inhalt auf kleinerem Format',
        fr: 'Contenu dense dans un format réduit'
      }
    ],
    filePath: '/Brochure/Ndog bidi (booklet).pdf',
    fileName: 'Ndog bidi (booklet).pdf',
    pageCount: 45,
    pageFormat: 'A6',
    fileSizeBytes: 2149275,
    updatedAt: '2026-04-15'
  }
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: {
      de: 'Table ronde',
      fr: 'Table ronde'
    },
    caption: {
      de: 'Gemeinsamer Auftakt einer dialogorientierten Sitzung.',
      fr: 'Ouverture collective d une session orientee vers le dialogue.'
    },
    src: '/media/real-assets/media01.jpg'
  },
  {
    id: 'photo-2',
    title: {
      de: 'Moderation',
      fr: 'Moderation'
    },
    caption: {
      de: 'Prise de parole et facilitation au coeur du format.',
      fr: 'Prise de parole et facilitation au coeur du format.'
    },
    src: '/media/real-assets/media02.jpg'
  },
  {
    id: 'photo-3',
    title: {
      de: 'Jeunes voix',
      fr: 'Jeunes voix'
    },
    caption: {
      de: 'Des jeunes participantes attentives dans un temps d echange.',
      fr: 'De jeunes participantes attentives pendant le temps d echange.'
    },
    src: '/media/real-assets/media03.jpg'
  },
  {
    id: 'photo-4',
    title: {
      de: 'Écoute active',
      fr: 'Écoute active'
    },
    caption: {
      de: 'Moments d attention et d apprentissage partages.',
      fr: 'Moments d attention et d apprentissage partages.'
    },
    src: '/media/real-assets/media04.jpg'
  },
  {
    id: 'photo-5',
    title: {
      de: 'Participants',
      fr: 'Participants'
    },
    caption: {
      de: 'Regards croises pendant une session communautaire.',
      fr: 'Regards croises pendant une session communautaire.'
    },
    src: '/media/real-assets/media05.jpg'
  },
  {
    id: 'photo-6',
    title: {
      de: 'Beobachtung',
      fr: 'Observation'
    },
    caption: {
      de: 'Un moment calme au coeur du groupe.',
      fr: 'Un moment calme au coeur du groupe.'
    },
    src: '/media/real-assets/media06.jpg'
  },
  {
    id: 'photo-7',
    title: {
      de: 'Présence',
      fr: 'Présence'
    },
    caption: {
      de: 'Portrait d une participante pendant les echanges.',
      fr: 'Portrait d une participante pendant les echanges.'
    },
    src: '/media/real-assets/media07.jpg'
  },
  {
    id: 'photo-8',
    title: {
      de: 'Parole partagée',
      fr: 'Parole partagée'
    },
    caption: {
      de: 'Une intervention qui structure la discussion.',
      fr: 'Une intervention qui structure la discussion.'
    },
    src: '/media/real-assets/media08.jpg'
  },
  {
    id: 'photo-9',
    title: {
      de: 'Coordination',
      fr: 'Coordination'
    },
    caption: {
      de: 'Présences et attention autour de la moderation.',
      fr: 'Presences et attention autour de la moderation.'
    },
    src: '/media/real-assets/media09.jpg'
  },
  {
    id: 'photo-10',
    title: {
      de: 'Animation',
      fr: 'Animation'
    },
    caption: {
      de: 'Une prise de parole dans un cadre accompagne.',
      fr: 'Une prise de parole dans un cadre accompagne.'
    },
    src: '/media/real-assets/media10.jpg'
  },
  {
    id: 'photo-11',
    title: {
      de: 'Attention',
      fr: 'Attention'
    },
    caption: {
      de: 'Temps d ecoute et de concentration.',
      fr: 'Temps d ecoute et de concentration.'
    },
    src: '/media/real-assets/media11.jpg'
  },
  {
    id: 'photo-12',
    title: {
      de: 'Transmission',
      fr: 'Transmission'
    },
    caption: {
      de: 'L information circule de maniere simple et directe.',
      fr: 'L information circule de maniere simple et directe.'
    },
    src: '/media/real-assets/media12.jpg'
  },
  {
    id: 'photo-13',
    title: {
      de: 'Focus',
      fr: 'Focus'
    },
    caption: {
      de: 'Plan rapproche sur l attention individuelle.',
      fr: 'Plan rapproche sur l attention individuelle.'
    },
    src: '/media/real-assets/media13.jpg'
  },
  {
    id: 'photo-14',
    title: {
      de: 'Participation',
      fr: 'Participation'
    },
    caption: {
      de: 'Une participante engagee dans la discussion.',
      fr: 'Une participante engagee dans la discussion.'
    },
    src: '/media/real-assets/media14.jpg'
  },
  {
    id: 'photo-15',
    title: {
      de: 'Jeunesse engagée',
      fr: 'Jeunesse engagee'
    },
    caption: {
      de: 'Des jeunes au coeur des echanges communautaires.',
      fr: 'Des jeunes au coeur des echanges communautaires.'
    },
    src: '/media/real-assets/media15.jpg'
  },
  {
    id: 'photo-16',
    title: {
      de: 'Échange',
      fr: 'Échange'
    },
    caption: {
      de: 'Conversation laterale et lien social.',
      fr: 'Conversation laterale et lien social.'
    },
    src: '/media/real-assets/media16.jpg'
  },
  {
    id: 'photo-17',
    title: {
      de: 'Dialogue',
      fr: 'Dialogue'
    },
    caption: {
      de: 'Des jeunes voix visibles dans la salle.',
      fr: 'Des jeunes voix visibles dans la salle.'
    },
    src: '/media/real-assets/media17.jpg'
  },
  {
    id: 'photo-18',
    title: {
      de: 'Accueil',
      fr: 'Accueil'
    },
    caption: {
      de: 'Un moment d entree et de rencontre.',
      fr: 'Un moment d entree et de rencontre.'
    },
    src: '/media/real-assets/media18.jpg'
  },
  {
    id: 'photo-19',
    title: {
      de: 'Photo de groupe',
      fr: 'Photo de groupe'
    },
    caption: {
      de: 'Le collectif reuni a l issue de la rencontre.',
      fr: 'Le collectif reuni a l issue de la rencontre.'
    },
    src: '/media/real-assets/media19.jpg'
  },
  {
    id: 'photo-20',
    title: {
      de: 'Clôture',
      fr: 'Cloture'
    },
    caption: {
      de: 'Image de fin pour un moment partage.',
      fr: 'Image de fin pour un moment partage.'
    },
    src: '/media/real-assets/media20.jpg'
  },
  {
    id: 'photo-21',
    title: {
      de: 'Communauté réunie',
      fr: 'Communaute reunie'
    },
    caption: {
      de: 'Presence collective et visibilite du groupe.',
      fr: 'Presence collective et visibilite du groupe.'
    },
    src: '/media/real-assets/media21.jpg'
  }
];

export const galleryVideos: GalleryVideo[] = [
  {
    id: 'video-1',
    title: {
      de: 'NGONDA YouTube Präsenz',
      fr: 'Présence YouTube NGONDA'
    },
    description: {
      de: 'Offizieller Zugang zu Interviews, Community-Beiträgen und Projektvideos.',
      fr: 'Acces officiel aux interviews, contenus communautaires et videos projets.'
    },
    href: 'https://www.youtube.com/',
    thumbnail: '/media/real-assets/media20.jpg'
  },
  {
    id: 'video-2',
    title: {
      de: 'Event- und Projektvideos',
      fr: 'Vidéos événements et projets'
    },
    description: {
      de: 'Interviews, Workshops und Projekt-Dokumentation aus der Community-Arbeit.',
      fr: 'Interviews, ateliers et documentation des projets communautaires.'
    },
    href: 'https://www.youtube.com/',
    thumbnail: '/media/real-assets/media21.jpg'
  }
];

export const siteContent = {
  de: {
    localeLabel: 'Deutsch',
    title: 'NGONDA e.V. - She first',
    description:
      'NGONDA e.V. begleitet, berät und stärkt Migrantinnen in Aachen mit Fokus auf Empowerment, Bildung, Prävention und gesellschaftliche Teilhabe.',
    heroEyebrow: 'NGONDA e.V. | Solidarisch, kultursensibel, wirksam',
    heroIntro: [
      'NGONDA versteht sich als verlässliche Wegbegleiterin für Migrantinnen, die in Deutschland Zuflucht suchen oder bereits gefunden haben.',
      'Wir unterstützen, beraten und stärken Frauen in herausfordernden Lebenssituationen – individuell, ressourcenorientiert und empowernd. Unser Ziel ist es, Perspektiven zu eröffnen und die gesellschaftliche Teilhabe nachhaltig zu fördern.',
      'Dabei begegnen wir unseren Teilnehmerinnen auf Augenhöhe. Dialog, Vertrauen und gegenseitiger Respekt bilden die Grundlage unserer Arbeit. Gemeinsam gestalten wir eine vielfältige, solidarische und zukunftsfähige Gesellschaft.'
    ],
    distinction:
      'Wir arbeiten kultursensibel, niedrigschwellig und dialogorientiert. Vertrauen, Respekt und Partizipation bilden die Grundlage unserer Arbeit. Jede Frau bringt eigene Erfahrungen, Kompetenzen und Stärken mit – diese sichtbar zu machen und weiterzuentwickeln, steht im Mittelpunkt unseres Handelns.',
    vision: [
      'Wir glauben an eine Gesellschaft, in der Vielfalt als Stärke verstanden wird und Frauen unabhängig von Herkunft, Sprache oder Lebensgeschichte gleichberechtigt teilhaben können.',
      'NGONDA steht für Mut, Selbstbestimmung und Zusammenhalt – gemeinsam gestalten wir die Zukunft.'
    ],
    aboutInstitution: [
      'NGONDA versteht sich als Wegbegleiter für Migrantinnen, die Zuflucht in Deutschland suchen oder gefunden haben. Darüber hinaus begleiten und beraten wir Frauen in schwierigen Lebenslagen.',
      'Gemeinsam streben wir eine nachhaltige und vielfältige Gesellschaft an. Dialog und Austausch auf Augenhöhe sind dabei zentral.',
      'Ngonda ist eine junge Organisation mit kleinen Händen, die Migrantinnen eine Chance geben will, sich insgesamt zu entwickeln, sich zu integrieren und offen über Probleme zu sprechen, die Frauen betreffen.'
    ],
    coordinatorProfile:
      'Aus dem Bereich der Zivilgesellschaft, Organisation und Soziales arbeite ich als Gruppenleiterin und Moderatorin für Projektarbeit. Als Geschäftsführerin von NGONDA e.V. koordiniere ich den Vereinsalltag und Bildungsmaßnahmen zur Stärkung migrantischer Frauen in Aachen.',
    archiveEditorialNote:
      'Archive und ergänzende Programme bleiben sichtbar, aber getrennt von aktuellen Projekten. So werden historische und konzeptionelle Inhalte nicht mit laufenden Projekten vermischt.',
    galleryNote:
      'Die Galerie zeigt kuratierte Eindrücke aus Projekten, Begegnungen und Community-Aktivitäten.',
    brochureNote:
      'Die Broschüre bündelt Informationsunterlagen zu Programmen, Partnerschaften und Vereinsarbeit.',
    fundersNote:
      'Förderer werden als sichtbare Partner in einer eigenen, klar strukturierten Sektion präsentiert.',
    onlineServiceNote:
      'Der Online-Service bietet digitale Kontaktwege, Orientierung und direkten Zugang zu relevanten Informationen.'
  },
  fr: {
    localeLabel: 'Français',
    title: 'NGONDA e.V. - She first',
    description:
      'NGONDA e.V. accompagne, conseille et renforce les femmes migrantes à Aachen, avec une approche sociale, éducative et préventive.',
    heroEyebrow: 'NGONDA e.V. | Accompagnement, prévention, empowerment',
    heroIntro: [
      'NGONDA se positionne comme accompagnatrice de confiance pour les femmes migrantes qui cherchent refuge en Allemagne ou qui y vivent déjà.',
      'Nous soutenons, conseillons et renforçons les femmes confrontées à des situations de vie complexes, de manière individualisée, orientée ressources et empowerment.',
      'Notre méthode repose sur le dialogue, la confiance, le respect mutuel et la participation sociale durable.'
    ],
    distinction:
      'Nous travaillons avec une posture interculturelle, accessible et dialogique. Chaque femme possède des compétences et des forces à valoriser et à développer.',
    vision: [
      'Nous croyons en une société où la diversité est une force et où les femmes participent à égalité, indépendamment de leur origine, langue ou trajectoire de vie.',
      'NGONDA défend le courage, l’autodétermination et la solidarité pour construire l’avenir ensemble.'
    ],
    aboutInstitution: [
      'NGONDA accompagne les femmes migrantes en recherche de refuge ou déjà installées en Allemagne. Nous proposons aussi un accompagnement dans les situations de vie difficiles.',
      'Notre objectif est de contribuer à une société durable, plurielle et inclusive, en maintenant une relation d’égalité, de dialogue et d’échange avec notre public cible.',
      'NGONDA est une jeune organisation qui souhaite donner des opportunités d’intégration, de développement personnel et de parole libre sur les problématiques qui touchent les femmes.'
    ],
    coordinatorProfile:
      'Issue de la société civile, de l’organisation et du social, je coordonne des projets de groupe et de modération. En tant que directrice de NGONDA e.V., je pilote le quotidien de l’association et les actions éducatives au service des femmes migrantes à Aachen.',
    archiveEditorialNote:
      'Les archives et programmes complémentaires restent visibles mais distincts des projets en cours pour préserver la lisibilité éditoriale.',
    galleryNote:
      'La galerie présente des moments choisis issus des projets, des rencontres et des actions communautaires.',
    brochureNote:
      'La rubrique Brochure rassemble les documents d’information sur les programmes, les partenariats et les activités de l’association.',
    fundersNote:
      'La rubrique Partenaires/Financeurs est structurée et extensible (logos, noms, liens).',
    onlineServiceNote:
      'Le service en ligne propose des parcours de contact numériques, des informations utiles et des points d’orientation.'
  }
} as const;

export const contactDetails = {
  organization: 'NGONDA e.V.',
  street: 'Jülicher Str.293',
  careOf: 'S/O ADNA e.V.',
  city: '52070 Aachen',
  phone: '0241 47594351',
  officePhone: '0241 47594351',
  mobilePhone: '01743993509',
  website: 'https://ngonda-ev.com',
  vr: 'VR-6400',
  ust: 'UST- Nr:201/5914/5135',
  iban: 'DE55 3905 0000 1077 3506 58',
  bic: 'AACSDE33XXX'
};

export function isAppLocale(locale: string): locale is AppLocale {
  return locale === 'de' || locale === 'fr';
}

export function getLocalized<T>(value: Record<AppLocale, T>, locale: AppLocale): T {
  return value[locale];
}

export function getSiteContent(locale: AppLocale) {
  return siteContent[locale];
}

export function getNewsBySlug(locale: AppLocale, slug: string) {
  return news.find((item) => item.slug[locale] === slug);
}

export function getProjectBySlug(locale: AppLocale, slug: string) {
  return currentProjects.find((item) => item.slug[locale] === slug);
}
