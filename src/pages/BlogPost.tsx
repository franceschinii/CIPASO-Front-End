import { useParams, Link } from 'react-router-dom'
import { getPostBySlug } from '@/data/blog'
import { SEO } from '@/components/SEO'
import { useMemo } from 'react'

function formatMarkdownToHtml(markdown: string): string {
  let html = markdown
    .replace(/^### (.*?)$/gm, '<h3 class="text-lg font-bold mt-6 mb-3">$1</h3>')
    .replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/^- (.*?)$/gm, '<li class="ml-6 mb-2">$1</li>')
    .replace(/(?<!\w)<li(.*?)<\/li>(?!\w)/s, '<ul class="list-disc mb-4">$&</ul>')
    .replace(/^(\d+)\. (.*?)$/gm, '<li class="ml-6 mb-2">$2</li>')
    .replace(/(?<!\w)<li(.*?)<\/li>(?!\w)/s, '<ol class="list-decimal mb-4">$&</ol>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/^(?!<[h|u|o|l])(.+)$/gm, (match) => {
      if (match.startsWith('<')) return match
      return `<p class="mb-4">${match}</p>`
    })

  return `<div class="prose prose-invert max-w-none">${html}</div>`
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = useMemo(() => slug ? getPostBySlug(slug) : undefined, [slug])

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Artigo não encontrado</h1>
        <p className="text-lg text-muted-fg mb-8">
          O artigo que você procura não existe ou foi removido.
        </p>
        <Link to="/blog" className="text-accent font-semibold hover:underline">
          ← Voltar ao Blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={`${post.titulo} - Memorial CIPASO`}
        description={post.resumo}
        canonical={`https://cipaso.com/blog/${post.slug}`}
        ogImage="https://cipaso.com/favicon.svg"
        ogType="article"
      />
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="mb-12 max-w-3xl">
          <Link to="/blog" className="text-accent font-semibold hover:underline mb-6 inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar ao Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.titulo}</h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-fg mb-6">
            <time>{new Date(post.data).toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</time>
            <span className="capitalize px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
              {post.categoria}
            </span>
            <span>Por {post.autor}</span>
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-sm bg-bg px-3 py-1 rounded text-muted-fg">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-invert max-w-none text-fg leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.conteudo
                .replace(/^### (.*?)$/gm, '<h3 class="text-xl font-bold mt-6 mb-3 text-fg">$1</h3>')
                .replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 text-fg">$1</h2>')
                .split('\n\n')
                .map(para => {
                  if (para.startsWith('#')) return para
                  if (para.startsWith('-')) {
                    const items = para.split('\n').filter(Boolean)
                    return `<ul class="list-disc list-inside mb-4 space-y-2">${items.map(item =>
                      `<li class="text-fg">${item.replace(/^- /, '')}</li>`
                    ).join('')}</ul>`
                  }
                  if (/^\d+\./.test(para)) {
                    const items = para.split('\n').filter(Boolean)
                    return `<ol class="list-decimal list-inside mb-4 space-y-2">${items.map(item =>
                      `<li class="text-fg">${item.replace(/^\d+\.\s*/, '')}</li>`
                    ).join('')}</ol>`
                  }
                  return `<p class="mb-4 text-fg">${para}</p>`
                })
                .join('')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
            }}
          />
        </div>

        <footer className="mt-16 pt-8 border-t border-border max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-accent font-bold">CI</span>
            </div>
            <div>
              <p className="font-semibold text-fg">{post.autor}</p>
              <p className="text-sm text-muted-fg">Baseado nos ensinamentos do Prof. Valter Franceschini</p>
            </div>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-fg rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            ← Mais artigos
          </Link>
        </footer>
      </article>
    </>
  )
}
