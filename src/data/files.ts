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

function getDayOfYear(date: Date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date.getTime() - start.getTime()
  const oneDay = 1000 * 60 * 60 * 24
  return Math.floor(diff / oneDay)
}

export function getFileForDay(excludeAudio = false, dayOfYear?: number): DigitalFile | undefined {
  let availableFiles = filesData as DigitalFile[]
  if (excludeAudio) {
    availableFiles = availableFiles.filter(file => file.categoria !== 'audios')
  }
  if (availableFiles.length === 0) return undefined

  const day = dayOfYear ?? getDayOfYear()
  const index = day % availableFiles.length
  return availableFiles[index]
}
