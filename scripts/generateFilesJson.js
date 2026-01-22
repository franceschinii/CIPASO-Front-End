import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const uploadsDir = path.join(__dirname, '../public/uploads')

const categoryMap = {
  documentos: { categoria: 'textos', tipo: 'pdf' },
  imagens: { categoria: 'imagens', tipo: 'imagem' },
  hemeroteca: { categoria: 'jornais', tipo: 'jornal' },
  publicacoes: { categoria: 'livros', tipo: 'livro' },
  audios: { categoria: 'audios', tipo: 'audio' },
  videos: { categoria: 'videos', tipo: 'video' }
}

function sanitizeFilename(filename) {
  return filename.replace(/\.[^/.]+$/, '')
}

function scanDirectory(dir, files = [], currentId = 1) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    const relativePath = path.relative(uploadsDir, fullPath).replace(/\\/g, '/')

    if (entry.isDirectory()) {
      const folderName = entry.name
      const mapping = categoryMap[folderName]

      if (mapping) {
        const folderFiles = fs.readdirSync(fullPath).filter(f => !f.startsWith('.'))

        for (const file of folderFiles) {
          const filePath = path.join(fullPath, file)
          const stat = fs.statSync(filePath)

          const fileRelativePath = `/uploads/${relativePath}/${file}`.replace(/\\/g, '/')
          const titulo = sanitizeFilename(file)
          const descricao = `${mapping.categoria === 'textos' ? 'Documento' : mapping.categoria === 'imagens' ? 'Imagem histórica' : mapping.categoria === 'jornais' ? 'Publicação de jornal' : mapping.categoria === 'livros' ? 'Publicação' : mapping.categoria === 'audios' ? 'Áudio' : 'Vídeo'} - ${titulo}`

          files.push({
            id: currentId++,
            titulo,
            descricao,
            categoria: mapping.categoria,
            data: stat.birthtime.toISOString().split('T')[0],
            path: fileRelativePath,
            tipo: mapping.tipo
          })
        }
      }
    }
  }

  return { files, nextId: currentId }
}

try {
  const { files } = scanDirectory(uploadsDir)

  const output = path.join(__dirname, '../src/data/files.json')
  fs.writeFileSync(output, JSON.stringify(files, null, 2))

  console.log(`✓ Generated ${files.length} file entries in src/data/files.json`)
  console.log('Files mapped:')
  files.forEach(f => console.log(`  - ${f.titulo} (${f.categoria})`))
} catch (error) {
  console.error('Error generating files.json:', error.message)
  process.exit(1)
}
