// Arquivos do Acervo Digital
// EDITE AQUI: Adicione novos arquivos ao acervo
// IMPORTANTE: Coloque os arquivos reais na pasta public/uploads/<categoria>/

export type ArchiveCategory = 'documentos' | 'imagens' | 'audios' | 'videos' | 'hemeroteca' | 'publicacoes'

export interface ArchiveFile {
  id: number
  title: string
  description: string
  filePath: string // Caminho relativo: /uploads/<categoria>/arquivo.ext
  category: ArchiveCategory
  fileType: string // Extensão: pdf, jpg, mp3, mp4, etc
  publicationDate: string
  featured: boolean
  tags: string[]
}

export const CATEGORIES: Record<ArchiveCategory, string> = {
  documentos: 'Textos & Documentos',
  imagens: 'Imagens Históricas',
  audios: 'Fitas de Relaxamento',
  videos: 'Filmagens',
  hemeroteca: 'Diário de Sorocaba',
  publicacoes: 'Publicações Parâmetros Holísticos'
}

export const archiveFiles: ArchiveFile[] = [
  {
    id: 1,
    title: 'Estatuto Social do CIPASO - 1989',
    description: 'Documento original de fundação do Centro de Investigação Parapsicológica de Sorocaba, registrado em cartório em 1989.',
    filePath: '/uploads/documentos/estatuto-cipaso-1989.pdf',
    category: 'documentos',
    fileType: 'pdf',
    publicationDate: '1989-03-15',
    featured: true,
    tags: ['estatuto', 'fundação', 'documentação oficial', '1989']
  },
  {
    id: 2,
    title: 'Sede Santa Rosália - Fachada Externa (1995)',
    description: 'Fotografia histórica da fachada da sede do CIPASO na Rua Oswaldo Segamarchi, 15, Jardim Santa Rosália.',
    filePath: '/uploads/imagens/sede-santa-rosalia-1995.jpg',
    category: 'imagens',
    fileType: 'jpg',
    publicationDate: '1995-08-20',
    featured: true,
    tags: ['sede', 'santa rosália', 'sorocaba', 'fotografia histórica']
  },
  {
    id: 3,
    title: 'Fita de Relaxamento - Reprogramação Positiva Vol. 1',
    description: 'Sessão guiada pelo Prof. Valter Franceschini focada em reprogramação mental para segurança emocional e autoestima. Gravação original de 1992.',
    filePath: '/uploads/audios/relaxamento-reprogramacao-vol1.mp3',
    category: 'audios',
    fileType: 'mp3',
    publicationDate: '1992-05-10',
    featured: true,
    tags: ['relaxamento', 'reprogramação mental', 'valter franceschini', 'áudio']
  },
  {
    id: 4,
    title: 'Palestra: Fenômenos PSI e Consciência (2005)',
    description: 'Palestra completa ministrada pelo Prof. Valter Franceschini sobre investigação de fenômenos parapsicológicos. Evento realizado na sede do CIPASO.',
    filePath: '/uploads/videos/palestra-fenomenos-psi-2005.mp4',
    category: 'videos',
    fileType: 'mp4',
    publicationDate: '2005-11-12',
    featured: false,
    tags: ['palestra', 'fenômenos psi', 'parapsicologia', 'vídeo']
  },
  {
    id: 5,
    title: 'Diário de Sorocaba - Matéria sobre Workshop de Parapsicologia',
    description: 'Recorte do jornal Diário de Sorocaba cobrindo workshop sobre parapsicologia científica realizado pelo CIPASO em parceria com a Parâmetros Holísticos.',
    filePath: '/uploads/hemeroteca/diario-sorocaba-workshop-1998.jpg',
    category: 'hemeroteca',
    fileType: 'jpg',
    publicationDate: '1998-09-25',
    featured: false,
    tags: ['jornal', 'diário de sorocaba', 'imprensa', 'workshop', '1998']
  },
  {
    id: 6,
    title: 'Apostila: Introdução à Parapsicologia - Parâmetros Holísticos',
    description: 'Material didático oficial produzido pela Parâmetros Holísticos para cursos de formação em parapsicologia aplicada.',
    filePath: '/uploads/publicacoes/apostila-introducao-parapsicologia.pdf',
    category: 'publicacoes',
    fileType: 'pdf',
    publicationDate: '2000-03-01',
    featured: false,
    tags: ['apostila', 'parâmetros holísticos', 'curso', 'educação']
  }
]

// Função para filtrar arquivos por categoria
export function getFilesByCategory(category?: ArchiveCategory): ArchiveFile[] {
  if (!category) return archiveFiles
  return archiveFiles.filter(file => file.category === category)
}

// Função para buscar arquivos
export function searchFiles(query: string): ArchiveFile[] {
  const lowerQuery = query.toLowerCase()
  return archiveFiles.filter(file =>
    file.title.toLowerCase().includes(lowerQuery) ||
    file.description.toLowerCase().includes(lowerQuery) ||
    file.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}

// Função para pegar arquivo em destaque aleatório
export function getFeaturedFile(): ArchiveFile {
  const featured = archiveFiles.filter(file => file.featured)
  return featured[Math.floor(Math.random() * featured.length)] || archiveFiles[0]
}
