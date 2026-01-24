import { Helmet } from 'react-helmet-async'

interface ArticleMetadata {
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

interface SEOProps {
  title: string
  description: string
  canonical: string
  ogImage?: string
  ogType?: 'website' | 'article'
  article?: ArticleMetadata
}

export function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://cipaso.com/favicon.svg',
  ogType = 'website',
  article
}: SEOProps) {
  const domain = 'https://cipaso.com'

  const schemaOrgWebPage = {
    '@context': 'https://schema.org',
    '@type': ogType === 'article' ? 'Article' : 'WebPage',
    name: title,
    description,
    url: canonical,
    image: ogImage,
    ...(ogType === 'article' && {
      author: {
        '@type': 'Person',
        name: article?.author || 'Memorial CIPASO'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Memorial CIPASO',
        logo: {
          '@type': 'ImageObject',
          url: `${domain}/favicon.svg`
        }
      },
      datePublished: article?.publishedTime || new Date().toISOString(),
      dateModified: article?.modifiedTime || new Date().toISOString()
    })
  }

  const schemaOrgOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Centro de Investigação Parapsicológica de Sorocaba',
    alternateName: 'CIPASO',
    url: domain,
    logo: `${domain}/favicon.svg`,
    description: 'Centro de investigação parapsicológica fundado em 1989 em Sorocaba/SP',
    foundingDate: '1989',
    dissolutionDate: '2016',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Oswaldo Segamarchi, 15',
      addressLocality: 'Sorocaba',
      addressRegion: 'SP',
      postalCode: '',
      addressCountry: 'BR'
    },
    founder: {
      '@type': 'Person',
      name: 'Valter Álfredo Franceschini',
      birthDate: '1940-08-02',
      deathDate: '2016-02-18'
    }
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Memorial CIPASO" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {/* <meta name="twitter:creator" content={twitterHandle} /> */}

      {/* Additional SEO */}
      <meta name="language" content="pt-BR" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Memorial CIPASO" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>
      <script type="application/ld+json">{JSON.stringify(schemaOrgOrganization)}</script>
    </Helmet>
  )
}
