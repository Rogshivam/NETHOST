const { PrismaClient } = require('../src/generated/prisma')
const { hash } = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  // Create categories
  const categories = [
    { name: 'Action', description: 'Action movies and TV shows' },
    { name: 'Comedy', description: 'Comedy movies and TV shows' },
    { name: 'Drama', description: 'Drama movies and TV shows' },
    { name: 'Sci-Fi', description: 'Science fiction movies and TV shows' },
  ]

  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category.name },
      update: {},
      create: category,
    })
  }

  // Create a test user
  const hashedPassword = await hash('password123', 12)
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
      password: hashedPassword,
    },
  })

  // Create some test videos
  const videos = [
    {
      title: 'The Last Adventure',
      description: 'An epic journey through uncharted territories.',
      url: '/videos/featured-1.mp4',
      thumbnail: '/thumbnails/featured-1.jpg',
      duration: 150,
      isPremium: true,
      categoryName: 'Action',
    },
    {
      title: 'Mystery of the Deep',
      description: 'Dive into the unknown depths of the ocean.',
      url: '/videos/featured-2.mp4',
      thumbnail: '/thumbnails/featured-2.jpg',
      duration: 120,
      isPremium: false,
      categoryName: 'Sci-Fi',
    },
  ]

  for (const video of videos) {
    const category = await prisma.category.findUnique({
      where: { name: video.categoryName },
    })

    if (category) {
      const { categoryName, ...videoData } = video;
      const existingVideo = await prisma.video.findFirst({
        where: { title: video.title },
      })

      if (existingVideo) {
        await prisma.video.update({
          where: { id: existingVideo.id },
          data: {
            ...videoData,
            categoryId: category.id,
          },
        })
      } else {
        await prisma.video.create({
          data: {
            ...videoData,
            categoryId: category.id,
          },
        })
      }
    }
  }

  console.log('Database seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 