import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // Очищаем существующие данные
  await prisma.post.deleteMany()

  const posts = [
    {
      title: 'Первая новость',
      content: 'Это содержание первой новости. Здесь может быть подробное описание события.',
      image: 'https://ratanews.ru/i/editor_upload/images/foto_yaponiya(45).jpg',
      createdAt: new Date('2024-01-15'),
    },
    {
      title: 'Технологические инновации',
      content: 'Новые технологии меняют мир. Узнайте о последних достижениях в области IT.',
      image: 'https://ratanews.ru/i/editor_upload/images/foto_yaponiya(45).jpg',
      createdAt: new Date('2024-01-14'),
    },
    {
      title: 'Спортивные достижения',
      content: 'Местная команда побеждает в чемпионате. Подробности матча и интервью с игроками.',
      createdAt: new Date('2024-01-13'),
    },
    {
      title: 'Культурные события недели',
      content: 'Обзор самых интересных мероприятий: выставки, концерты и театральные постановки.',
      image: 'https://ratanews.ru/i/editor_upload/images/foto_yaponiya(45).jpg',
      createdAt: new Date('2024-01-12'),
    },
  ]

  for (const post of posts) {
    await prisma.post.create({
      data: post,
    })
  }

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })