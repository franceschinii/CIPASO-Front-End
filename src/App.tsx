import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-primary/20 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary">Memorial CIPASO</h1>
            <p className="text-lg mt-2">Centro de Investigação Parapsicológica de Sorocaba</p>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <p>Sistema em construção. Estrutura base inicializada.</p>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
