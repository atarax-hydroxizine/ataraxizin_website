import { prisma } from '../lib/prisma'
import NewsList from './components/NewsList'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          ataraxizin - Новости
        </h1>
        <NewsList posts={posts} />
      </div>
    </main>
  )
}