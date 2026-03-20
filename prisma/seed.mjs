import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.siteSettings.upsert({
    where: {id: 1},
    update: {
      organization: 'NGONDA e.V.',
      slogan: 'She first',
      phone: '+49 241 47594351',
      street: 'Jülicher Str.293',
      city: '52070 Aachen',
      vrNumber: 'VR-6400',
      ustNumber: '201/5914/5135',
      iban: 'DE55 3905 0000 1077 3506 58',
      bic: 'AACSDE33XXX'
    },
    create: {
      id: 1,
      organization: 'NGONDA e.V.',
      slogan: 'She first',
      defaultLocale: 'de',
      secondaryLocale: 'fr',
      phone: '+49 241 47594351',
      street: 'Jülicher Str.293',
      city: '52070 Aachen',
      vrNumber: 'VR-6400',
      ustNumber: '201/5914/5135',
      iban: 'DE55 3905 0000 1077 3506 58',
      bic: 'AACSDE33XXX'
    }
  });

  const socialLinks = [
    {
      network: 'facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61552484613409',
      order: 1
    },
    {
      network: 'youtube',
      label: 'je vous dis tout... Prenez place ! (youtube.com)',
      url: 'https://www.youtube.com/',
      order: 2
    },
    {
      network: 'instagram',
      label: 'NGONDA e.V (@ngondaev)',
      url: 'https://www.instagram.com/ngondaev/',
      order: 3
    }
  ];

  await prisma.socialLink.deleteMany({where: {settingsId: 1}});
  await prisma.socialLink.createMany({
    data: socialLinks.map((link) => ({...link, settingsId: 1}))
  });

  const news = await prisma.news.upsert({
    where: {slug: 'zusammenarbeit-seit-2023'},
    update: {publishedAt: new Date('2023-11-21')},
    create: {
      slug: 'zusammenarbeit-seit-2023',
      publishedAt: new Date('2023-11-21')
    }
  });

  await prisma.newsLocale.deleteMany({where: {newsId: news.id}});
  await prisma.newsLocale.createMany({
    data: [
      {
        locale: 'de',
        newsId: news.id,
        title: 'Zusammenarbeit seit 2023',
        excerpt:
          'Politische Informationsfahrt nach Berlin auf Einladung des Bundespresseamtes im November 2023.',
        body: 'Initial seed content from specification: Berlin / Bundespresseamt / November 2023.'
      },
      {
        locale: 'fr',
        newsId: news.id,
        title: 'Collaboration depuis 2023',
        excerpt:
          'Voyage d’information politique à Berlin sur invitation du Bundespresseamt en novembre 2023.',
        body: 'Contenu initial seed issu de la spécification.'
      }
    ]
  });

  console.log('Prisma seed completed.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
