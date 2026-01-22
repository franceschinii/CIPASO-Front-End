import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filesJsonPath = path.join(__dirname, '../src/data/files.json')

try {
  const filesData = JSON.parse(fs.readFileSync(filesJsonPath, 'utf-8'))

  // Normalizar publicações (livros)
  const publications = filesData.filter(f => f.categoria === 'livros')
  let pubCounter = 1

  // Ordenar por data para manter ordem consistente
  publications.sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime())

  const updatedFiles = filesData.map(file => {
    if (file.categoria === 'livros') {
      const normalized = { ...file, titulo: `Publicação ${pubCounter}` }
      pubCounter++
      return normalized
    }
    return file
  })

  fs.writeFileSync(filesJsonPath, JSON.stringify(updatedFiles, null, 2))
  console.log(`✓ Normalized ${publications.length} publication titles`)
  console.log('Publications renamed to: Publicação 1, 2, 3, ...')
} catch (error) {
  console.error('Error normalizing publication names:', error.message)
  process.exit(1)
}
