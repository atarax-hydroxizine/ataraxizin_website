import Link from 'next/link'
import { Post } from '@prisma/client'

interface NewsCardProps {
  post: Post
}

export default function NewsCard({ post }: NewsCardProps) {
  return (
    <Link href={`/news/${post.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105 border border-gray-200 hover:shadow-xl">
        {post.image && (
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            {new Date(post.createdAt).toLocaleDateString('ru-RU')}
          </p>
          <p className="text-gray-700 line-clamp-3">
            {post.content.substring(0, 150)}...
          </p>
          <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
            Читать далее →
          </div>
        </div>
      </div>
    </Link>
  )
}