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
    content: 'O seu corpo reage de acordo com como age a sua mente.',
    author: 'Prof. Valter Franceschini'
  },
  {
    id: 2,
    content: 'Parapsicologia é uma ciência experimental que estuda, identifica e classifica os fenômenos exteriorizados através da paranormalidade.',
    author: 'Prof. Valter Franceschini'
  },
  {
    id: 3,
    content: 'Paranormalidade é uma capacidade humana de percepção hiperestésica e de conhecimento extrasensorial, não convencional.',
    author: 'Prof. Valter Franceschini'
  },
  {
    id: 4,
    content: 'Pensamentos destrutivos, pensamentos negativos, eles vão somente atrair aquilo que não serve, aquilo que prejudica.',
    author: 'Prof. Valter Franceschini'
  },
  {
    id: 5,
    content: 'Sem Deus na vida, nada caminha.',
    author: 'Prof. Valter Franceschini'
  },
  {
    id: 6,
    content: 'Não é salutar tornar fantasias negativas e doentias inconscientes como modelos e realidades da vida.',
    author: 'Prof. Valter Franceschini'
  },
  {
    id: 7,
    content: 'A parapsicologia, com a metodologia que nós divulgamos há mais de 55 anos, tem ajudado muitas pessoas a terem uma vida melhor, mais alegre, mais feliz, mais saudável.',
    author: 'Prof. Valter Franceschini'
  },
  {
    id: 8,
    content: 'Você precisa programar a sua mente nos níveis mentais: beta, alfa, teta e delta.',
    author: 'Prof. Valter Franceschini'
  }
]

// Função auxiliar para pegar uma citação aleatória
export function getRandomQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)]
}
