// Posts e Notícias Institucionais
// EDITE AQUI: Adicione novos posts ou modifique existentes

export interface Post {
  id: number
  title: string
  slug: string
  content: string
  excerpt: string
  type: 'blog' | 'noticia'
  date: string
  author: string
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'História do CIPASO - Fundação e Legado',
    slug: 'historia-cipaso-fundacao-legado',
    excerpt: 'A história de fundação do CIPASO e sua missão de investigar fenômenos PSI com rigor científico e humanismo.',
    type: 'noticia',
    date: '1989-03-15',
    author: 'CIPASO',
    content: `
      <h2>Uma Jornada de Investigação Científica</h2>
      <p>O <strong>CIPASO (Centro de Investigação Parapsicológica de Sorocaba)</strong> foi fundado em <strong>1989</strong> (CNPJ 58.984.089/0001-58) com a missão de investigar fenômenos PSI e parapsicologia sob uma abordagem científica e humanística.</p>

      <p>Localizado na histórica <strong>Rua Oswaldo Segamarchi, 15, Jardim Santa Rosália, Sorocaba/SP</strong>, o centro se tornou referência regional em estudos de reprogramação mental positiva e desenvolvimento humano.</p>

      <h3>Parceria Estratégica</h3>
      <p>Em estreita colaboração com a <strong>Parâmetros Holísticos de Formação Humana</strong> (CNPJ 67.361.410/0001-39), o CIPASO expandiu suas atividades para formação de profissionais e pesquisa aplicada.</p>

      <h3>Missão e Valores</h3>
      <ul>
        <li>Investigação científica de fenômenos parapsicológicos</li>
        <li>Reprogramação mental positiva para segurança emocional</li>
        <li>Fortalecimento de vínculos familiares e comunitários</li>
        <li>Educação e divulgação científica acessível</li>
      </ul>
    `
  },
  {
    id: 2,
    title: 'Prof. Valter Franceschini - Mentor e Visionário',
    slug: 'prof-valter-franceschini-mentor',
    excerpt: 'Biografia e legado do Prof. Valter Franceschini, mentor e fundador do CIPASO.',
    type: 'blog',
    date: '2024-01-01',
    author: 'Memorial CIPASO',
    content: `
      <h2>In Memoriam</h2>
      <p>O <strong>Prof. Valter Franceschini</strong> foi o idealizador e mentor espiritual do CIPASO. Sua visão pioneira de unir ciência e humanismo moldou toda a filosofia institucional.</p>

      <blockquote>
        <p>"Viver melhor não é ter mais, é ser mais consciente de si mesmo e do mundo ao redor."</p>
        <cite>— Prof. Valter Franceschini</cite>
      </blockquote>

      <h3>Legado Acadêmico</h3>
      <p>Professor dedicou sua carreira à pesquisa em parapsicologia aplicada, com foco especial em:</p>
      <ul>
        <li>Técnicas de relaxamento e reprogramação mental</li>
        <li>Fortalecimento da autoestima e segurança emocional</li>
        <li>Métodos de investigação de fenômenos PSI</li>
        <li>Formação de terapeutas e pesquisadores</li>
      </ul>

      <p>Seu trabalho continua vivo através deste memorial digital e das centenas de alunos que formou ao longo de décadas de magistério.</p>
    `
  },
  {
    id: 3,
    title: 'Acervo Digital - Preservação da Memória Institucional',
    slug: 'acervo-digital-preservacao-memoria',
    excerpt: 'Conheça o acervo digital completo do CIPASO: documentos, imagens, áudios, vídeos e publicações históricas.',
    type: 'noticia',
    date: '2024-01-01',
    author: 'Memorial CIPASO',
    content: `
      <h2>Um Museu Vivo</h2>
      <p>Este memorial digital reúne o acervo histórico completo do CIPASO, preservado para as futuras gerações.</p>

      <h3>O que você encontra aqui:</h3>

      <h4>📄 Textos e Documentos</h4>
      <p>Artigos científicos, relatórios de pesquisa e documentação institucional.</p>

      <h4>📷 Imagens Históricas</h4>
      <p>Fotografias da sede Santa Rosália, eventos, workshops e atividades.</p>

      <h4>🎧 Fitas de Relaxamento</h4>
      <p>Gravações originais das sessões de reprogramação mental conduzidas pelo Prof. Valter Franceschini.</p>

      <h4>🎬 Filmagens</h4>
      <p>Vídeos de palestras, entrevistas e eventos históricos.</p>

      <h4>📰 Diário de Sorocaba</h4>
      <p>Recortes de jornal (hemeroteca) com menções ao CIPASO na mídia local.</p>

      <h4>📚 Publicações Parâmetros</h4>
      <p>Livros, apostilas e materiais didáticos produzidos pela parceira Parâmetros Holísticos.</p>

      <hr>

      <p><em>Navegue pelo Acervo Digital e redescubra a história do CIPASO.</em></p>
    `
  }
]
