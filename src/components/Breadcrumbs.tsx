import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

interface BreadcrumbItem {
  name: string
  url: string
}

const routeTitles: Record<string, string> = {
  '/': 'Início',
  '/acervo': 'Acervo Digital',
  '/sobre': 'Sobre',
  '/blog': 'Blog',
  '/termos': 'Termos de Uso'
}

export function Breadcrumbs() {
  const location = useLocation()
  const pathname = location.pathname

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Início', url: '/' }
  ]

  if (pathname !== '/') {
    const routeTitle = routeTitles[pathname] || 'Página'
    breadcrumbs.push({
      name: routeTitle,
      url: pathname
    })
  }

  const schemaOrgBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://cipaso.com${item.url}`
    }))
  }

  if (pathname === '/') return null

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgBreadcrumbs)}
        </script>
      </Helmet>

      <nav
        aria-label="Breadcrumb"
        className="border-b border-muted/30 bg-bg/50 backdrop-blur-sm sticky top-[64px] z-40"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-muted-fg">
            {breadcrumbs.map((item, index) => (
              <li key={item.url} className="flex items-center gap-2">
                {index > 0 && <span className="text-muted-fg/50">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-fg font-medium">{item.name}</span>
                ) : (
                  <a
                    href={item.url}
                    className="text-primary hover:text-secondary transition-colors underline-offset-2 hover:underline"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
