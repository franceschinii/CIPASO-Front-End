import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { Sprout, Flower2 } from 'lucide-react'
import { SEO } from '@/components/SEO'
import valterPhoto from '@/assets/png/vaf/Valter Franceschini.jpg'

export function About() {

  return (
    <>
      <SEO
        title="Sobre o CIPASO - História e Metodologias"
        description="Conheça a história do CIPASO, as 5 Ferramentas Mentais, a 3ª Lei da Mente e o legado do Prof. Valter Franceschini."
        canonical="https://cipaso.com/sobre"
        ogImage="https://cipaso.com/favicon.svg"
        ogType="website"
      />
      <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 md:pt-32 md:pb-24 bg-linear-to-b from-primary/5 via-bg to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-2xl md:text-5xl font-bold mb-8 text-fg leading-tight">
              Sobre o Memorial
              <br />
              <span className="text-primary text-7xl md:text-9xl">CIPASO</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-fg max-w-3xl mx-auto leading-relaxed font-light">
              Preservando a história da investigação científica, desenvolvimento humano e o legado do Prof. Valter Franceschini
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção Institucional Completa */}
      <section className="py-20 px-4 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* O que é CIPASO */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-fg">O que foi CIPASO</h2>
              <div className="space-y-6 text-lg text-muted-fg leading-relaxed">
                <p>
                  O <strong>CIPASO (Centro de Investigação Parapsicológica de Sorocaba)</strong> foi uma instituição dedicada à <strong>investigação científica experimental</strong> que estudava, identificava e classificava os fenômenos exteriorizados através da paranormalidade.
                </p>

                <p>
                  <strong>Paranormalidade</strong> é uma capacidade humana de percepção hiperestésica e de conhecimento extrasensorial, não convencional. Trata-se de uma ciência experimental rigorosa que une metodologia científica com desenvolvimento humano integral.
                </p>

                <p>
                  Fundado em <strong>1989</strong> pelo Prof. Valter Álfredo Franceschini, desenvolveu e divulgou metodologias que ajudam pessoas a terem uma vida melhor, mais alegre, mais feliz e mais saudável — através de cura, orientação, aconselhamento e educação baseados em princípios científicos rigorosos. Este memorial preserva seu legado para que continue inspirando e transformando vidas.
                </p>
              </div>
            </div>

            {/* A 3ª Lei da Mente */}
            <div className="bg-primary/5 border border-primary/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-fg">A 3ª Lei da Mente</h3>
              <p className="text-xl italic text-primary font-medium mb-4">
                "O seu corpo reage de acordo com como age a sua mente."
              </p>
              <p className="text-lg text-muted-fg leading-relaxed">
                Esta é a origem das doenças psicossomáticas. <strong>Pensamentos destrutivos e negativos atraem aquilo que não serve e prejudica</strong>. Por isso, é imperativo trabalhar conscientemente a programação mental através de exercícios práticos e vivência das Leis da Mente.
              </p>
              <p className="text-lg text-muted-fg leading-relaxed mt-4">
                A mudança começa na mente. Quando compreendemos esse princípio fundamental, temos o poder de transformar não apenas nosso corpo e saúde, mas toda a nossa realidade pessoal.
              </p>
            </div>

            {/* As 5 Ferramentas Mentais */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-fg">As 5 Ferramentas Mentais</h2>
              <p className="text-lg text-muted-fg leading-relaxed mb-8">
                Metodologia desenvolvida pelo Prof. Valter Franceschini para programação mental consciente nos níveis cerebrais (beta, alfa, teta e delta):
              </p>

              <div className="grid md:grid-cols-1 gap-6">
                {[
                  {
                    title: 'Relaxamento e Meditação Guiada',
                    description: 'Técnicas para acalmar a mente consciente e acessar estados alterados de consciência de forma segura e controlada.'
                  },
                  {
                    title: 'Visualização Criativa e Reprogramação Mental',
                    description: 'Uso da imaginação e visualização para reprogramar padrões mentais limitantes e criar novas realidades internas.'
                  },
                  {
                    title: 'Técnicas de Autocura e Autoconhecimento',
                    description: 'Desenvolvimento de ferramentas para compreender a si mesmo e resolver conflitos internos através da autodescoberta.'
                  },
                  {
                    title: 'Vivência Prática das Leis da Mente',
                    description: 'Aplicação prática dos princípios das Leis da Mente na vida cotidiana, transformando conhecimento em experiência.'
                  },
                  {
                    title: 'Investigação e Desenvolvimento de Fenômenos PSI',
                    description: 'Pesquisa sistemática e científica dos fenômenos parapsicológicos e capacidades extrasensoriais humanas.'
                  }
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-muted border border-primary/20 rounded-lg p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20 text-primary font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-fg mb-2">{tool.title}</h4>
                        <p className="text-muted-fg leading-relaxed">{tool.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Valores Fundamentais */}
            <div className="bg-white dark:bg-muted border border-primary/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-fg">Valores Fundamentais</h2>
              <ul className="space-y-4">
                {[
                  'Investigação científica rigorosa de fenômenos parapsicológicos',
                  'Reprogramação mental positiva para segurança emocional e bem-estar',
                  'Fortalecimento de vínculos familiares e comunitários',
                  'Educação e divulgação científica acessível e democratizada',
                  'Ética e responsabilidade no uso do conhecimento parapsicológico',
                  'Integração de ciência e humanismo no desenvolvimento pessoal'
                ].map((value, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="flex items-center gap-3 text-lg text-muted-fg"
                  >
                    <span className="text-primary font-bold shrink-0">✓</span>
                    <span>{value}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Prof. Valter Franceschini */}
            <div className="bg-primary/5 border border-primary/30 rounded-lg overflow-hidden p-8">
              {/* Título */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold mb-2 text-fg">Prof. Valter Franceschini</h2>
                <p className="text-primary italic font-medium">In Memoriam — Mentor e Visionário</p>
              </motion.div>

              {/* Conteúdo em Grid */}
              <div className="grid md:grid-cols-[350px_1fr] gap-8 items-start">
                {/* Coluna Esquerda: Foto + Datas */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  {/* Foto */}
                  <div className="relative aspect-3/4 overflow-hidden rounded-lg">
                    <img
                      src={valterPhoto}
                      alt="Prof. Valter Franceschini"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Datas com Ícones */}
                  <div className="space-y-2 text-sm text-muted-fg">
                    <div className="flex items-start gap-2">
                      <Sprout className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p><strong>Nascimento:</strong> 02/08/1940</p>
                        <p className="text-xs">Campinas, SP</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Flower2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p><strong>Falecimento:</strong> 18/02/2016</p>
                        <p className="text-xs">Sorocaba, SP (75 anos)</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Conteúdo */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4 text-lg text-muted-fg leading-relaxed"
                >
                  <p>
                    <strong className="text-primary">Escritor, conferencista, parapsicólogo, professor e operador dos fenômenos PSI</strong> — o Prof. Valter Franceschini foi o idealizador e mentor espiritual do CIPASO.
                  </p>

                  <p>
                    Sua visão pioneira de unir <strong>ciência e humanismo</strong> moldou toda a filosofia institucional do Centro. Com mais de 55 anos de magistério, o Prof. Valter transformou inúmeras vidas através de suas metodologias inovadoras e sua dedicação incansável ao desenvolvimento integral do ser humano.
                  </p>

                  <p>
                    Seu trabalho continua vivo através deste memorial digital, das centenas de alunos que formou ao longo de décadas, e do legado duradouro que deixou para as gerações futuras.
                  </p>

                  <blockquote className="border-l-4 border-primary pl-4 py-3 italic">
                    "Sem Deus na vida, nada caminha."
                  </blockquote>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fg">
              Explore o Acervo Digital
            </h2>
            <p className="text-lg text-muted-fg mb-8 leading-relaxed">
              Mergulhe na história, documentos, imagens, vídeos e publicações que compõem nosso acervo de investigação científica e desenvolvimento humano.
            </p>
            <Link
              to="/acervo"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-secondary transition-all hover:gap-3 group text-lg"
            >
              Visitar Acervo Digital
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}
