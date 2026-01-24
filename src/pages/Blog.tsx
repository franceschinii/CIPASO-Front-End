import { useState, useMemo } from 'react'
import { SEO } from '@/components/SEO'
import { BlogCard } from '@/components/blog/BlogCard'
import { getAllPosts, getPostsByCategory, type BlogPostCategory } from '@/data/blog'

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<BlogPostCategory | 'todos'>('todos')
  const [searchQuery, setSearchQuery] = useState('')

  const allPosts = getAllPosts()

  const filteredPosts = useMemo(() => {
    let posts = selectedCategory === 'todos'
      ? allPosts
      : getPostsByCategory(selectedCategory)

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      posts = posts.filter(post =>
        post.titulo.toLowerCase().includes(query) ||
        post.resumo.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    return posts
  }, [selectedCategory, searchQuery])

  const categories: Array<{ value: BlogPostCategory | 'todos'; label: string }> = [
    { value: 'todos', label: 'Todos' },
    { value: 'pesquisa', label: 'Pesquisa' },
    { value: 'desenvolvimento', label: 'Desenvolvimento' },
    { value: 'institucional', label: 'Institucional' }
  ]

  return (
    <>
      <SEO
        title="Blog - Memorial CIPASO"
        description="Artigos, reflexões e conteúdos sobre parapsicologia, desenvolvimento humano e o legado do CIPASO."
        canonical="https://cipaso.com/blog"
        ogImage="https://cipaso.com/favicon.svg"
        ogType="website"
      />

      <div className="bg-accent/5 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-fg max-w-2xl">
            Artigos, reflexões e conteúdos sobre parapsicologia, desenvolvimento humano e pesquisa baseados nos ensinamentos do Prof. Valter Franceschini.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-fg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-bg border border-border rounded-lg text-fg placeholder-muted-fg focus:outline-none focus:border-accent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value as BlogPostCategory | 'todos')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-accent text-accent-fg'
                      : 'bg-bg border border-border text-fg hover:border-accent'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <>
              <div className="text-sm text-muted-fg">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'artigo' : 'artigos'} encontrado(s)
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-fg text-lg mb-4">
                {searchQuery ? 'Nenhum artigo encontrado com essa busca.' : 'Nenhum artigo disponível nessa categoria.'}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-accent font-semibold hover:underline"
                >
                  Limpar busca
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
