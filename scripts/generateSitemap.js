import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const DOMAIN = 'https://cipaso.com'
const PUBLIC_DIR = path.join(__dirname, '../public')
const PDFS_DIR = path.join(PUBLIC_DIR, 'uploads/publicacoes')

function formatDate(date) {
  return date.toISOString().split('T')[0]
}

function getAllPDFsRecursive(dir, baseRelativePath = '') {
  const pdfs = []
  if (!fs.existsSync(dir)) return pdfs

  const items = fs.readdirSync(dir, { withFileTypes: true })

  items.forEach(item => {
    const fullPath = path.join(dir, item.name)
    const relativePath = path.join(baseRelativePath, item.name).replace(/\\/g, '/')

    if (item.isDirectory()) {
      pdfs.push(...getAllPDFsRecursive(fullPath, relativePath))
    } else if (item.isFile() && item.name.toLowerCase().endsWith('.pdf')) {
      try {
        const stats = fs.statSync(fullPath)
        pdfs.push({
          relativePath,
          modifiedDate: formatDate(stats.mtime),
          fileName: item.name
        })
      } catch (err) {
        console.warn(`Erro ao ler ${fullPath}:`, err.message)
      }
    }
  })

  return pdfs
}

function generateSitemapIndex() {
  const now = formatDate(new Date())

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${DOMAIN}/sitemap-pages.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-pdfs.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
</sitemapindex>`

  return xml
}

function generateSitemapPages() {
  const now = formatDate(new Date())

  const pages = [
    { loc: '/', changefreq: 'monthly', priority: '1.0' },
    { loc: '/acervo', changefreq: 'weekly', priority: '0.8' },
    { loc: '/sobre', changefreq: 'monthly', priority: '0.8' },
    { loc: '/blog', changefreq: 'weekly', priority: '0.5' },
    { loc: '/termos', changefreq: 'yearly', priority: '0.3' }
  ]

  const urlEntries = pages
    .map(
      page => `  <url>
    <loc>${DOMAIN}${page.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`

  return xml
}

function generateSitemapPDFs() {
  const pdfs = getAllPDFsRecursive(PDFS_DIR)

  if (pdfs.length === 0) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`
    return xml
  }

  const urlEntries = pdfs
    .map(
      pdf => `  <url>
    <loc>${DOMAIN}/uploads/publicacoes/${pdf.relativePath}</loc>
    <lastmod>${pdf.modifiedDate}</lastmod>
    <changefreq>never</changefreq>
    <priority>0.5</priority>
  </url>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`

  return xml
}

function main() {
  try {
    console.log('[Sitemap] Gerando sitemaps...')

    const sitemapIndex = generateSitemapIndex()
    const sitemapPages = generateSitemapPages()
    const sitemapPDFs = generateSitemapPDFs()

    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-index.xml'), sitemapIndex)
    console.log('[Sitemap] ✓ sitemap-index.xml criado')

    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-pages.xml'), sitemapPages)
    console.log('[Sitemap] ✓ sitemap-pages.xml criado')

    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-pdfs.xml'), sitemapPDFs)
    const pdfCount = getAllPDFsRecursive(PDFS_DIR).length
    console.log(`[Sitemap] ✓ sitemap-pdfs.xml criado (${pdfCount} PDFs)`)

    console.log('[Sitemap] Sucesso! Todos os sitemaps foram gerados.')
  } catch (err) {
    console.error('[Sitemap] Erro ao gerar sitemaps:', err.message)
    process.exit(1)
  }
}

main()
