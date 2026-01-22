import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const postsDir = path.join(__dirname, '../posts')

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function generateSlug(titulo) {
  return slugify(titulo)
}

function scanPosts(dir) {
  const posts = []

  if (!fs.existsSync(dir)) {
    console.warn(`Posts directory not found at ${dir}`)
    return posts
  }

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') || f.endsWith('.json'))

  files.forEach((file, index) => {
    const filePath = path.join(dir, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    if (file.endsWith('.json')) {
      try {
        const post = JSON.parse(fileContent)
        if (post.titulo && post.resumo && post.conteudo) {
          posts.push({
            id: index + 1,
            titulo: post.titulo,
            slug: post.slug || generateSlug(post.titulo),
            resumo: post.resumo,
            conteudo: post.conteudo,
            autor: post.autor || 'Prof. Valter Franceschini',
            data: post.data || new Date().toISOString().split('T')[0],
            categoria: post.categoria || 'desenvolvimento',
            tags: post.tags || []
          })
        }
      } catch (e) {
        console.error(`Error parsing ${file}:`, e.message)
      }
    } else if (file.endsWith('.md')) {
      const lines = fileContent.split('\n')
      const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---/)

      if (frontmatterMatch) {
        const frontmatter = {}
        frontmatterMatch[1].split('\n').forEach(line => {
          const [key, ...valueParts] = line.split(':')
          if (key && valueParts.length > 0) {
            const value = valueParts.join(':').trim().replace(/^['"]|['"]$/g, '')
            frontmatter[key.trim()] = value
          }
        })

        const contentStart = fileContent.indexOf('---', 3) + 3
        const conteudo = fileContent.substring(contentStart).trim()

        if (frontmatter.titulo && frontmatter.resumo) {
          posts.push({
            id: index + 1,
            titulo: frontmatter.titulo,
            slug: frontmatter.slug || generateSlug(frontmatter.titulo),
            resumo: frontmatter.resumo,
            conteudo: conteudo,
            autor: frontmatter.autor || 'Prof. Valter Franceschini',
            data: frontmatter.data || new Date().toISOString().split('T')[0],
            categoria: frontmatter.categoria || 'desenvolvimento',
            tags: frontmatter.tags ? frontmatter.tags.split(',').map(t => t.trim()) : []
          })
        }
      }
    }
  })

  return posts.sort((a, b) => new Date(b.data) - new Date(a.data))
}

try {
  const posts = scanPosts(postsDir)

  if (posts.length === 0) {
    console.warn('No posts found. Make sure to add .md or .json files to the posts/ directory')
  }

  const output = path.join(__dirname, '../src/data/blog.json')
  fs.writeFileSync(output, JSON.stringify(posts, null, 2))

  console.log(`✓ Generated ${posts.length} blog posts in src/data/blog.json`)
  if (posts.length > 0) {
    console.log('Posts:')
    posts.forEach(p => console.log(`  - ${p.titulo} (${p.data})`))
  }
} catch (error) {
  console.error('Error generating blog.json:', error.message)
  process.exit(1)
}
