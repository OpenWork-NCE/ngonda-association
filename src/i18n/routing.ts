import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'fr'],
  defaultLocale: 'de',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/about': {
      de: '/ueber-uns',
      fr: '/qui-sommes-nous'
    },
    '/news': {
      de: '/aktuelles',
      fr: '/actualites'
    },
    '/news/[slug]': {
      de: '/aktuelles/[slug]',
      fr: '/actualites/[slug]'
    },
    '/projects': {
      de: '/projekte',
      fr: '/projets'
    },
    '/projects/[slug]': {
      de: '/projekte/[slug]',
      fr: '/projets/[slug]'
    },
    '/themes': {
      de: '/schwerpunktthemen',
      fr: '/axes-thematiques'
    },
    '/archive': {
      de: '/archiv',
      fr: '/archives'
    },
    '/gallery': {
      de: '/galerie',
      fr: '/galerie'
    },
    '/gallery/photos': {
      de: '/galerie/fotos',
      fr: '/galerie/photos'
    },
    '/gallery/videos': {
      de: '/galerie/videos',
      fr: '/galerie/videos'
    },
    '/brochure': {
      de: '/brochure',
      fr: '/brochure'
    },
    '/funders': {
      de: '/foerderer',
      fr: '/partenaires'
    },
    '/online-service': {
      de: '/online-service',
      fr: '/service-en-ligne'
    },
    '/impressum': {
      de: '/impressum',
      fr: '/mentions-legales'
    },
    '/contact': {
      de: '/kontakt',
      fr: '/contact'
    }
  }
});

export type AppLocale = (typeof routing.locales)[number];
