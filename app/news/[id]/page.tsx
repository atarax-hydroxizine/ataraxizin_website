import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

interface NewsPageProps {
  params: Promise<{ id: string }>
}

export const dynamic = 'force-dynamic'

export default async function NewsPage(props: NewsPageProps) {
  // В Next.js 14+ params является Promise, нужно его дождаться
  const params = await props.params
  const { id } = params

  if (!id) {
    notFound()
  }

  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  })

  if (!post) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        {post.image && (
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        )}
        <div className="p-6 md:p-8">
          <div className="mb-4">
            <span className="text-gray-500 text-sm">
              {new Date(post.createdAt).toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {post.title}
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}