import { SEO } from '@/components/SEO'

export function Blog() {
  return (
    <>
      <SEO
        title="Blog - Memorial CIPASO"
        description="Artigos, reflexões e conteúdos sobre parapsicologia, desenvolvimento humano e o legado do CIPASO."
        canonical="https://cipaso.com/blog"
        ogImage="https://cipaso.com/favicon.svg"
        ogType="website"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-fg">
          Em construção. Leia sobre parapsicologia, desenvolvimento humano e pesquisa.
        </p>
      </div>
    </>
  )
}
