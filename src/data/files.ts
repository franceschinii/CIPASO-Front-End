import filesData from './files.json'

export type FileCategory = 'textos' | 'imagens' | 'audios' | 'videos' | 'jornais' | 'livros'
export type FileType = 'pdf' | 'imagem' | 'audio' | 'video' | 'jornal' | 'livro'

export interface DigitalFile {
  id: number
  titulo: string
  descricao: string
  categoria: FileCategory
  data: string
  path: string
  tipo: FileType
}

export function getRandomFile(excludeAudio = false): DigitalFile {
  let availableFiles = filesData as DigitalFile[]
  if (excludeAudio) {
    availableFiles = availableFiles.filter(file => file.categoria !== 'audios')
  }
  const randomIndex = Math.floor(Math.random() * availableFiles.length)
  return availableFiles[randomIndex]
}

export function getFilesByCategory(category: FileCategory): DigitalFile[] {
  return (filesData as DigitalFile[]).filter(file => file.categoria === category)
}

export function getFileById(id: number): DigitalFile | undefined {
  return (filesData as DigitalFile[]).find(file => file.id === id)
}

export function getAllFiles(): DigitalFile[] {
  return filesData as DigitalFile[]
}

export function searchFiles(query: string): DigitalFile[] {
  const lowerQuery = query.toLowerCase()
  return (filesData as DigitalFile[]).filter(file =>
    file.titulo.toLowerCase().includes(lowerQuery) ||
    file.descricao.toLowerCase().includes(lowerQuery)
  )
}

export function getRandomVideo(): DigitalFile | undefined {
  const videos = (filesData as DigitalFile[]).filter(file => file.categoria === 'videos')
  if (videos.length === 0) return undefined
  const randomIndex = Math.floor(Math.random() * videos.length)
  return videos[randomIndex]
}
