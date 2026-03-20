import type {AppLocale} from '@/i18n/routing';

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
      {
        src: '/media/projects/klima-migration/gallery-1.jpg',
        alt: {
          de: 'Dialogrunde in einem Bildungsformat',
          fr: 'Session de dialogue dans un format educatif'
        }
      },
      {
        src: '/media/projects/klima-migration/gallery-2.jpg',
        alt: {
          de: 'Community Austausch in einer Seminarreihe',
          fr: 'Echange communautaire lors d un seminaire'
        }
      },
      {
        src: '/media/projects/klima-migration/gallery-3.jpg',
        alt: {
          de: 'Visuelles Motiv zu Mobilitaet und Zukunft',
          fr: 'Motif visuel autour de la mobilite et de l avenir'
        }
      }
    ],
    body: [
      {
        de: 'Klima & Migration – Wege der Hoffnung ist eine Bildungs- und Dialogreihe, die globale Zusammenhänge zwischen Klimawandel und Migration erfahrbar macht.',
        fr: 'Klima & Migration – Wege der Hoffnung est une série éducative et de dialogue qui rend visibles les liens entre changement climatique et migration.'
      },
      {
        de: 'Das Projekt beleuchtet Ursachen, klimabedingte Flucht, soziale Ungleichheiten sowie Perspektiven aus dem Globalen Süden. In interaktiven Workshops, Dialogformen und kreativen Methoden werden Migrationserfahrungen sichtbar gemacht und Lösungsansätze für mehr globale Gerechtigkeit entwickelt.',
        fr: 'Le projet aborde les causes, les déplacements liés au climat, les inégalités sociales et les perspectives du Sud global à travers des ateliers interactifs, des formats de dialogue et des approches créatives.'
      },
      {
        de: 'Ziel ist es, Bewusstsein zu stärken, Vorurteile abzubauen und gemeinsames Handeln für eine solidarische und nachhaltige Zukunft zu fördern.',
        fr: 'L’objectif est de renforcer la conscience collective, de réduire les préjugés et de favoriser des actions communes vers un avenir solidaire et durable.'
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
    gallery: [
      {
        src: '/media/projects/koloniale-gewalt-bassaa/gallery-1.jpg',
        alt: {
          de: 'Historischer Ort fuer Bildungsarbeit',
          fr: 'Lieu historique mobilise pour la transmission'
        }
      },
      {
        src: '/media/projects/koloniale-gewalt-bassaa/gallery-2.jpg',
        alt: {
          de: 'Dokumentationsmoment im Rahmen des Projekts',
          fr: 'Moment de documentation dans le cadre du projet'
        }
      },
      {
        src: '/media/projects/koloniale-gewalt-bassaa/gallery-3.jpg',
        alt: {
          de: 'Bildraum fuer Erinnerung und Analyse',
          fr: 'Espace visuel de memoire et d analyse'
        }
      }
    ],
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
    gallery: [
      {
        src: '/media/projects/autismus-sensibilisierung/gallery-1.jpg',
        alt: {
          de: 'Workshop Sequenz zum Thema Neurodiversitaet',
          fr: 'Sequence d atelier sur la neurodiversite'
        }
      },
      {
        src: '/media/projects/autismus-sensibilisierung/gallery-2.jpg',
        alt: {
          de: 'Lernraum fuer inklusive Kommunikation',
          fr: 'Espace de formation pour une communication inclusive'
        }
      },
      {
        src: '/media/projects/autismus-sensibilisierung/gallery-3.jpg',
        alt: {
          de: 'Community Unterstuetzung in geschuetztem Rahmen',
          fr: 'Soutien communautaire dans un cadre securise'
        }
      }
    ],
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
    gallery: [
      {
        src: '/media/projects/muto-stimmen-fuer-veraenderung/gallery-1.jpg',
        alt: {
          de: 'Begleitende Gruppenarbeit im Projekt Muto',
          fr: 'Travail de groupe dans le projet Muto'
        }
      },
      {
        src: '/media/projects/muto-stimmen-fuer-veraenderung/gallery-2.jpg',
        alt: {
          de: 'Workshop zu Schutz, Rechten und Handlungsraeumen',
          fr: 'Atelier autour de la protection, des droits et des recours'
        }
      },
      {
        src: '/media/projects/muto-stimmen-fuer-veraenderung/gallery-3.jpg',
        alt: {
          de: 'Visuelle Szene fuer Solidaritaet und Gemeinschaft',
          fr: 'Scene visuelle de solidarite et de communaute'
        }
      }
    ],
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
      src: '/gallery/woman-support.jpg',
      alt: {
        de: 'Archivprojekt Mi Madre',
        fr: 'Projet archive Mi Madre'
      }
    },
    gallery: [
      {
        src: '/gallery/woman-support.jpg',
        alt: {
          de: 'Begleitung von Muettern im Alltag',
          fr: 'Accompagnement de meres au quotidien'
        }
      },
      {
        src: '/gallery/community-support.avif',
        alt: {
          de: 'Solidarischer Austausch in der Community',
          fr: 'Echange solidaire au sein de la communaute'
        }
      }
    ],
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
      src: '/media/news/atelier-droits-2024/featured.jpg',
      alt: {
        de: 'Archivprojekt Filles',
        fr: 'Projet archive Filles'
      }
    },
    gallery: [
      {
        src: '/media/news/atelier-droits-2024/gallery-1.jpg',
        alt: {
          de: 'Junge Frauen in einem Engagementformat',
          fr: 'Jeunes femmes dans un format d engagement'
        }
      },
      {
        src: '/media/projects/klima-migration/gallery-1.jpg',
        alt: {
          de: 'Lern- und Austauschmoment des Projekts',
          fr: 'Moment d apprentissage et d echange du projet'
        }
      }
    ],
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
      src: '/media/projects/koloniale-gewalt-bassaa/featured.jpg',
      alt: {
        de: 'Archivprojekt MINGA',
        fr: 'Projet archive MINGA'
      }
    },
    gallery: [
      {
        src: '/media/projects/koloniale-gewalt-bassaa/gallery-3.jpg',
        alt: {
          de: 'Kontextbild fuer Bildungs- und Engagementarbeit',
          fr: 'Visuel de contexte pour le travail educatif'
        }
      },
      {
        src: '/gallery/community-support.avif',
        alt: {
          de: 'Community Szene als Projektumfeld',
          fr: 'Scene communautaire liee au projet'
        }
      }
    ],
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
      src: '/media/news/zusammenarbeit-2023/featured.jpg',
      alt: {
        de: 'Gruppenaufnahme waehrend der Informationsfahrt in Berlin',
        fr: 'Photo de groupe durant le voyage d information a Berlin'
      }
    },
    gallery: [
      {
        src: '/media/news/zusammenarbeit-2023/gallery-1.jpg',
        alt: {
          de: 'Programmpunkt mit zivilgesellschaftlichen Akteurinnen und Akteuren',
          fr: 'Sequence de programme avec des actrices et acteurs associatifs'
        }
      },
      {
        src: '/media/news/zusammenarbeit-2023/gallery-2.jpg',
        alt: {
          de: 'Institutioneller Besuch im Rahmen der Berlinreise',
          fr: 'Visite institutionnelle dans le cadre du deplacement a Berlin'
        }
      },
      {
        src: '/media/news/zusammenarbeit-2023/gallery-3.jpg',
        alt: {
          de: 'Vernetzungsmoment des Teams aus Aachen',
          fr: 'Moment de mise en reseau de l equipe d Aachen'
        }
      }
    ],
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
      src: '/media/news/atelier-droits-2024/featured.jpg',
      alt: {
        de: 'Gruppenatelier zu Rechten und Schutz',
        fr: 'Atelier collectif sur les droits et la protection'
      }
    },
    gallery: [
      {
        src: '/media/news/atelier-droits-2024/gallery-1.jpg',
        alt: {
          de: 'Austausch waehrend einer moderierten Sitzung',
          fr: 'Echange pendant une session moderee'
        }
      },
      {
        src: '/media/news/atelier-droits-2024/gallery-2.jpg',
        alt: {
          de: 'Arbeitssequenz mit Fokus auf Handlungswege',
          fr: 'Sequence de travail orientee vers les recours concrets'
        }
      },
      {
        src: '/media/news/atelier-droits-2024/gallery-3.jpg',
        alt: {
          de: 'Begleitende Informationsphase mit Teilnehmenden',
          fr: 'Phase d information accompagnee avec les participantes'
        }
      }
    ],
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
      src: '/media/news/forum-communautaire-2025/featured.jpg',
      alt: {
        de: 'Forumsszene mit Partnerinstitutionen und Community',
        fr: 'Scene de forum avec institutions partenaires et communaute'
      }
    },
    gallery: [
      {
        src: '/media/news/forum-communautaire-2025/gallery-1.jpg',
        alt: {
          de: 'Austauschsession in einem offenen Dialogformat',
          fr: 'Session d echange dans un format de dialogue ouvert'
        }
      },
      {
        src: '/media/news/forum-communautaire-2025/gallery-2.jpg',
        alt: {
          de: 'Kooperationsgespraech zwischen Vereinen und Netzwerkpartnern',
          fr: 'Discussion de cooperation entre associations et partenaires'
        }
      },
      {
        src: '/media/news/forum-communautaire-2025/gallery-3.jpg',
        alt: {
          de: 'Sichtbarer Abschlussmoment des Community-Forums',
          fr: 'Moment de cloture du forum communautaire'
        }
      }
    ],
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

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: {
      de: 'Community Support',
      fr: 'Soutien communautaire'
    },
    caption: {
      de: 'Empowerment und Begleitung von Frauen in sicheren Räumen.',
      fr: 'Empowerment et accompagnement des femmes dans des espaces sûrs.'
    },
    src: '/gallery/community-support.avif'
  },
  {
    id: 'photo-2',
    title: {
      de: 'Austausch & Dialog',
      fr: 'Échange et dialogue'
    },
    caption: {
      de: 'Dialogorientierte Arbeit als Kern der NGONDA-Methode.',
      fr: 'Le dialogue est au coeur de la méthode NGONDA.'
    },
    src: '/gallery/woman-support.jpg'
  },
  {
    id: 'photo-3',
    title: {
      de: 'Netzwerk & Perspektiven',
      fr: 'Réseau et perspectives'
    },
    caption: {
      de: 'Stärkung sozialer und beruflicher Perspektiven.',
      fr: 'Renforcement des perspectives sociales et professionnelles.'
    },
    src: '/media/projects/klima-migration/gallery-2.jpg'
  },
  {
    id: 'photo-4',
    title: {
      de: 'Gemeinschaft',
      fr: 'Communauté'
    },
    caption: {
      de: 'Zusammenhalt, Sichtbarkeit und Teilhabe.',
      fr: 'Solidarité, visibilité et participation.'
    },
    src: '/media/projects/muto-stimmen-fuer-veraenderung/gallery-3.jpg'
  },
  {
    id: 'photo-5',
    title: {
      de: 'Visuelle Atmosphäre',
      fr: 'Atmosphère visuelle'
    },
    caption: {
      de: 'Bildsprache für eine menschliche und professionelle Präsenz.',
      fr: 'Une direction visuelle humaine et professionnelle.'
    },
    src: '/media/news/forum-communautaire-2025/featured.jpg'
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
    thumbnail: '/media/news/zusammenarbeit-2023/featured.jpg'
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
    thumbnail: '/media/news/forum-communautaire-2025/gallery-1.jpg'
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
      'Die Galerie zeigt kuratierte Eindruecke aus Projekten, Begegnungen und Community-Aktivitaeten.',
    brochureNote:
      'Die Brochure sammelt Informationsunterlagen zu Programmen, Partnerschaften und Vereinsarbeit.',
    fundersNote:
      'Foerderer werden als sichtbare Partner in einer eigenen, klar strukturierten Sektion praesentiert.',
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
      'La galerie presente des moments choisis issus des projets, des rencontres et des actions communautaires.',
    brochureNote:
      'La rubrique Brochure rassemble les documents d information sur les programmes, partenariats et activites de l association.',
    fundersNote:
      'La rubrique Partenaires/Financeurs est structurée et extensible (logos, noms, liens).',
    onlineServiceNote:
      'Le service en ligne propose des parcours de contact numeriques, des informations utiles et des points d orientation.'
  }
} as const;

export const contactDetails = {
  organization: 'NGONDA e.V.',
  street: 'Jülicher Str.293',
  careOf: 'S/O ADNA e.V.',
  city: '52070 Aachen',
  phone: '+49 241 47594351',
  vr: 'VR-6400',
  ust: 'UST-Nr: 201/5914/5135',
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
