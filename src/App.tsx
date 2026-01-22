import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-bg text-fg">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/acervo"
              element={
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Acervo Digital</h1>
                  <p className="text-lg text-muted-fg">
                    Em construção. Explore documentos, imagens, áudios e vídeos históricos do CIPASO.
                  </p>
                </div>
              }
            />
            <Route
              path="/blog"
              element={
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
                  <p className="text-lg text-muted-fg">
                    Em construção. Leia sobre parapsicologia, desenvolvimento humano e pesquisa.
                  </p>
                </div>
              }
            />
            <Route
              path="/sobre"
              element={
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre o Memorial</h1>
                  <p className="text-lg text-muted-fg">
                    Informações sobre a criação deste memorial digital.
                  </p>
                </div>
              }
            />
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
