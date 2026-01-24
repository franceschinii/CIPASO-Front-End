import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Home } from '@/pages/Home'
import { Acervo } from '@/pages/Acervo'
import { About } from '@/pages/About'
import { Blog } from '@/pages/Blog'
import { Legal } from '@/pages/Legal'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-bg text-fg">
        <Header />
        <Breadcrumbs />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acervo" element={<Acervo />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/termos" element={<Legal />} />
            <Route
              path="*"
              element={
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Página não encontrada</h1>
                  <p className="text-lg text-muted-fg">
                    A página que você procura não existe.
                  </p>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
