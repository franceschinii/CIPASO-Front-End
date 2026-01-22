import axios, { AxiosError } from 'axios'
import type {
  ApiResponse,
  PaginatedResponse,
  ArchiveFile,
  DailyContentResponse,
  AuthResponse,
  Post
} from '@/types'

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

// Interceptor para adicionar token de autenticação
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Interceptor para tratamento de erros
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiResponse<unknown>>) => {
    const message = error.response?.data?.error || 'Erro de conexão com o servidor'

    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token')
      window.location.href = '/admin'
    }

    return Promise.reject(new Error(message))
  }
)

/**
 * Buscar conteúdo diário (citação + arquivo em destaque)
 */
export async function fetchDailyContent(): Promise<DailyContentResponse> {
  const { data } = await api.get<ApiResponse<DailyContentResponse>>('/get_daily_content.php')

  if (!data.success || !data.data) {
    throw new Error('Falha ao carregar conteúdo diário')
  }

  return data.data
}

/**
 * Buscar arquivos do acervo com filtros
 */
export async function fetchArchive(params?: {
  category?: string
  search?: string
  limit?: number
  offset?: number
  featured?: boolean
}): Promise<PaginatedResponse<ArchiveFile>> {
  const { data } = await api.get<PaginatedResponse<ArchiveFile>>('/get_archive.php', { params })

  if (!data.success) {
    throw new Error('Falha ao carregar acervo')
  }

  return data
}

/**
 * Buscar posts do blog
 */
export async function fetchPosts(limit = 10): Promise<Post[]> {
  // Endpoint não existe ainda, mas estrutura está pronta
  const { data } = await api.get<ApiResponse<Post[]>>('/get_posts.php', {
    params: { limit }
  })

  if (!data.success || !data.data) {
    throw new Error('Falha ao carregar posts')
  }

  return data.data
}

/**
 * Login de administrador
 */
export async function login(username: string, password: string): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>('/login.php', {
    username,
    password
  })

  if (data.success && data.data?.token) {
    localStorage.setItem('auth_token', data.data.token)
  }

  return data
}

/**
 * Logout
 */
export function logout(): void {
  localStorage.removeItem('auth_token')
  window.location.href = '/'
}

/**
 * Criar/Atualizar conteúdo (protegido)
 */
export async function updateContent(params: {
  action: 'create' | 'update' | 'delete'
  table: 'posts' | 'daily_quotes' | 'archive_files'
  data: Record<string, unknown>
}): Promise<ApiResponse<{ id: number }>> {
  const { data } = await api.post<ApiResponse<{ id: number }>>('/update_content.php', params)

  if (!data.success) {
    throw new Error(data.error || 'Falha ao atualizar conteúdo')
  }

  return data
}

export default api
