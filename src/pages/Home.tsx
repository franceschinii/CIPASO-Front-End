import { DailyQuote } from '@/components/home/DailyQuote'
import { FeaturedFile } from '@/components/home/FeaturedFile'
import { FeaturedVideo } from '@/components/home/FeaturedVideo'
import { AboutValter } from '@/components/home/AboutValter'
import { SEO } from '@/components/SEO'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { ArrowRightIcon, BookOpenIcon, UsersIcon, DocumentTextIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { getRecentPosts } from '@/data/blog'

export function Home() {
  const recentPosts = getRecentPosts(3)

  return (
    <>
      <SEO
        title="Memorial CIPASO - Centro de Investigação Parapsicológica de Sorocaba"
        description="Acervo histórico e memorial digital do CIPASO. Parapsicologia científica, reprogramação mental positiva e legado do Prof. Valter Franceschini."
        canonical="https://cipaso.com/"
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
            className="text-center"
          >
            <h1 className="text-2xl md:text-5xl font-bold mb-8 text-fg leading-tight">
              Memorial Digital
              <br />
              <span className="text-7xl md:text-9xl text-primary">CIPASO</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-fg max-w-3xl mx-auto leading-relaxed font-light">
              Centro de Investigação Parapsicológica de Sorocaba — Preservando a história da
              investigação científica, desenvolvimento humano e o legado do Prof. Valter Franceschini
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção de Destaque: Citação + Arquivo + Cards */}
      <section className="py-20 px-4 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Grid de Destaque: Citação + Arquivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <div>
              <DailyQuote />
            </div>
            <div>
              <FeaturedFile />
            </div>
          </motion.div>

          {/* Cards de Destaque */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Card Acervo */}
            <Link
              to="/acervo"
              className="group relative bg-white dark:bg-muted border border-muted rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <BookOpenIcon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-fg">Acervo Digital</h3>
              <p className="text-muted-fg mb-6">
                Explore documentos, imagens, áudios e vídeos históricos
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                Explorar <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>

            {/* Card História */}
            <div className="relative bg-white dark:bg-muted border border-muted rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <UsersIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-fg">Nossa História</h3>
              <p className="text-muted-fg mb-6">
                Fundado em 1989, o CIPASO foi um centro dedicado à pesquisa parapsicológica
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium">
                1989 - Legado Preservado
              </span>
            </div>

            {/* Card Missão */}
            <div className="relative bg-white dark:bg-muted border border-muted rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <Sparkles className="h-12 w-12 text-primary mb-4" fill="currentColor" />
              <h3 className="text-xl font-bold mb-2 text-fg">Nossa Missão</h3>
              <p className="text-muted-fg mb-6">
                Investigação científica de fenômenos PSI e desenvolvimento humano
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium">
                Pesquisa & Humanismo
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Prof. Valter Franceschini */}
      <AboutValter />

      {/* Seção Vídeo em Destaque */}
      <section className="py-20 px-4 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fg">
                Acervo em Vídeo
              </h2>
              <p className="text-lg text-muted-fg">
                Palestras e documentos históricos em formato audiovisual
              </p>
            </div>

            <FeaturedVideo />
          </motion.div>
        </div>
      </section>

      {/* Seção Blog - Posts Recentes */}
      <section className="py-20 px-4 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-fg">
                Posts Recentes
              </h2>
              <p className="text-lg text-muted-fg">
                Investigação, desenvolvimento humano e pesquisa em parapsicologia
              </p>
            </div>

            {/* Cards de Blog */}
            <div className="grid md:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-muted border border-muted rounded-xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <DocumentTextIcon className="h-5 w-5 text-primary" />
                    <span className="text-xs uppercase tracking-wide text-primary font-semibold">
                      {post.categoria}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-fg leading-snug">
                    {post.titulo}
                  </h3>

                  <p className="text-muted-fg mb-4 grow">
                    {post.resumo}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-muted text-sm text-muted-fg">
                    <span>
                      {new Date(post.data).toLocaleDateString('pt-BR', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="text-primary font-medium">Ler mais →</span>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* CTA para Blog Completo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary transition-all hover:gap-3 group"
              >
                Ver Todos os Posts
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Seção Institucional */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-fg">Legado: Ciência e Humanismo</h2>
            <div className="space-y-6 text-lg text-muted-fg leading-relaxed">
              <p>
                O <strong>CIPASO (Centro de Investigação Parapsicológica de Sorocaba)</strong> foi uma instituição dedicada à <strong>ciência experimental</strong> que estudava, identificava e classificava os fenômenos exteriorizados através da paranormalidade — a capacidade humana de percepção hiperestésica e conhecimento extrasensorial não convencional.
              </p>

              <p>
                Fundado em <strong>1989</strong> pelo Prof. Valter Álfredo Franceschini, desenvolveu metodologias para ajudar pessoas a terem uma vida melhor, mais alegre, mais feliz e mais saudável, trabalhando com <strong>cura, orientação e aconselhamento</strong> baseado em princípios científicos rigorosos. Este memorial preserva seu trabalho e permite que seu legado continue inspirando e ajudando pessoas.
              </p>

              <p>
                A base fundamental de sua metodologia repousava nas <strong>5 Ferramentas Mentais</strong>, que operam nos níveis cerebrais beta, alfa, teta e delta, promovendo reprogramação mental positiva e programação consciente da mente.
              </p>

              <div className="bg-white dark:bg-muted border border-primary/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold mb-4 text-fg">A 3ª Lei da Mente</h3>
                <p className="text-base italic text-primary font-medium mb-4">
                  "O seu corpo reage de acordo com como age a sua mente."
                </p>
                <p className="text-base text-muted-fg">
                  Esta é a origem das doenças psicossomáticas. Pensamentos destrutivos e negativos atraem aquilo que não serve e prejudica. Por isso, é imperativo trabalhar conscientemente a programação mental através de exercícios e vivência das Leis da Mente.
                </p>
              </div>

              <div className="bg-white dark:bg-muted border border-primary/30 rounded-lg p-8 mt-8">
                <h3 className="text-2xl font-bold mb-6 text-fg">Valores Fundamentais</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Investigação científica de fenômenos parapsicológicos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Reprogramação mental positiva para segurança emocional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Fortalecimento de vínculos familiares e comunitários</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Educação e divulgação científica acessível</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}
