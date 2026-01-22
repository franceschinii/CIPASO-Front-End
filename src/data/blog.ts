import blogData from './blog.json'

export type BlogPostCategory = 'pesquisa' | 'desenvolvimento' | 'institucional'

export interface BlogPost {
  id: number
  titulo: string
  slug: string
  resumo: string
  conteudo: string
  autor: string
  data: string
  categoria: BlogPostCategory
  tags: string[]
}

export function getAllPosts(): BlogPost[] {
  return (blogData as BlogPost[]).sort(
    (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return (blogData as BlogPost[]).find(post => post.slug === slug)
}

export function getRecentPosts(limit: number = 5): BlogPost[] {
  return getAllPosts().slice(0, limit)
}

export function getPostsByCategory(
  category: BlogPostCategory
): BlogPost[] {
  return (blogData as BlogPost[]).filter(post => post.categoria === category)
}

export function searchPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase()
  return (blogData as BlogPost[]).filter(post =>
    post.titulo.toLowerCase().includes(lowerQuery) ||
    post.resumo.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}
