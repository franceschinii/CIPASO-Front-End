// Tipos TypeScript - Memorial CIPASO

export interface ArchiveFile {
  id: number
  title: string
  description: string | null
  file_path: string
  file_size: number | null
  category: 'documentos' | 'imagens' | 'audios' | 'videos' | 'hemeroteca' | 'publicacoes'
  file_type: string
  publication_date: string | null
  featured: boolean
  tags: string | null
  uploaded_at: string
  views: number
}

export interface Post {
  id: number
  title: string
  slug: string
  content_html: string
  excerpt: string | null
  type: 'blog' | 'noticia'
  status: 'draft' | 'published' | 'archived'
  date_created: string
  date_updated: string
  views: number
}

export interface DailyQuote {
  id: number
  content: string
  author: string
  active: boolean
}

export interface User {
  id: number
  username: string
  email: string
}

export interface AuthResponse {
  success: boolean
  data?: {
    token: string
    user: User
    expires_in: number
  }
  error?: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export interface PaginatedResponse<T> {
  success: boolean
  data: T[]
  pagination: {
    total: number
    limit: number
    offset: number
    hasMore: boolean
  }
}

export interface DailyContentResponse {
  quote: DailyQuote
  featured_file: ArchiveFile | null
  generated_at: string
}

export type ArchiveCategory = ArchiveFile['category']

export const ARCHIVE_CATEGORIES: Record<ArchiveCategory, string> = {
  documentos: 'Textos & Documentos',
  imagens: 'Imagens Históricas',
  audios: 'Fitas de Relaxamento',
  videos: 'Filmagens',
  hemeroteca: 'Diário de Sorocaba',
  publicacoes: 'Publicações Parâmetros'
}
