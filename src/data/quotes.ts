// Citações do Prof. Valter Franceschini
// EDITE AQUI: Adicione, remova ou modifique citações

export interface Quote {
  id: number
  content: string
  author: string
}

export const quotes: Quote[] = [
  {
    id: 1,
    content: 'A verdadeira transformação começa quando paramos de buscar validação externa e encontramos segurança dentro de nós mesmos.',
    author: 'Prof. Valter Franceschini'
  },
  {
    id: 2,
    content: 'Viver melhor não é acumular bens materiais, mas cultivar consciência, autoconhecimento e conexões humanas genuínas.',
    author: 'Prof. Valter Franceschini'
  },
  {
    id: 3,
    content: 'A investigação parapsicológica séria não nega a ciência, mas expande suas fronteiras com rigor e ética.',
    author: 'Prof. Valter Franceschini'
  },
  {
    id: 4,
    content: 'O relaxamento profundo não é escapismo, é o portal para a reprogramação consciente de padrões mentais limitantes.',
    author: 'Prof. Valter Franceschini'
  },
  {
    id: 5,
    content: 'Família fortalecida não é aquela sem conflitos, mas aquela que aprende a dialogar com respeito e empatia autênticos.',
    author: 'Prof. Valter Franceschini'
  },
  {
    id: 6,
    content: 'A mente humana é um universo inexplorado. Cada pesquisa em parapsicologia é uma jornada de descoberta interior.',
    author: 'Prof. Valter Franceschini'
  },
  {
    id: 7,
    content: 'Segurança emocional não vem de controlar tudo ao redor, mas de confiar na própria capacidade de adaptação e crescimento.',
    author: 'Prof. Valter Franceschini'
  },
  {
    id: 8,
    content: 'O propósito do CIPASO sempre foi democratizar o acesso ao autoconhecimento e à investigação séria dos fenômenos da consciência.',
    author: 'Prof. Valter Franceschini'
  }
]

// Função auxiliar para pegar uma citação aleatória
export function getRandomQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)]
}
