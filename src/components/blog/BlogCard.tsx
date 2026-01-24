import { Link } from 'react-router-dom'
import type { BlogPost } from '@/data/blog'

interface BlogCardProps {
  post: BlogPost
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  pesquisa: { bg: 'bg-blue-100', text: 'text-blue-800' },
  desenvolvimento: { bg: 'bg-green-100', text: 'text-green-800' },
  institucional: { bg: 'bg-purple-100', text: 'text-purple-800' }
}

export function BlogCard({ post }: BlogCardProps) {
  const { bg, text } = categoryColors[post.categoria] || { bg: 'bg-gray-100', text: 'text-gray-800' }

  return (
    <article className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`${bg} ${text} px-3 py-1 rounded-full text-sm font-medium capitalize`}>
            {post.categoria}
          </span>
          <time className="text-sm text-muted-fg">{new Date(post.data).toLocaleDateString('pt-BR')}</time>
        </div>

        <h3 className="text-xl font-bold mb-2 text-fg hover:text-accent transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.titulo}</Link>
        </h3>

        <p className="text-muted-fg mb-4">{post.resumo}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs bg-bg px-2 py-1 rounded text-muted-fg">
              #{tag}
            </span>
          ))}
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-200"
        >
          Ler artigo
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
