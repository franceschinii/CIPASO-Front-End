import { DailyQuote } from '@/components/home/DailyQuote'
import { AboutValter } from '@/components/home/AboutValter'
import { motion } from 'framer-motion'
import { ArrowRight, Library, Users, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Memorial Digital CIPASO
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Centro de Investigação Parapsicológica de Sorocaba — Preservando a história da
              parapsicologia científica e do desenvolvimento humano
            </p>
          </motion.div>

          {/* Citação do Dia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <DailyQuote />
          </motion.div>

          {/* Cards de Destaque */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Card Acervo */}
            <Link
              to="/acervo"
              className="group relative bg-background border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <Library className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Acervo Digital</h3>
              <p className="text-foreground/70 mb-4">
                Explore documentos, imagens, áudios e vídeos históricos
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                Explorar <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* Card História */}
            <div className="relative bg-background border border-primary/20 rounded-xl p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Nossa História</h3>
              <p className="text-foreground/70 mb-4">
                Fundado em 1989, o CIPASO é referência em pesquisa parapsicológica
              </p>
              <span className="inline-flex items-center gap-2 text-foreground/50 font-medium">
                Desde 1989
              </span>
            </div>

            {/* Card Missão */}
            <div className="relative bg-background border border-primary/20 rounded-xl p-6">
              <Sparkles className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Nossa Missão</h3>
              <p className="text-foreground/70 mb-4">
                Investigação científica de fenômenos PSI e desenvolvimento humano
              </p>
              <span className="inline-flex items-center gap-2 text-foreground/50 font-medium">
                Pesquisa & Humanismo
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Prof. Valter Franceschini */}
      <AboutValter />

      {/* Seção Institucional */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Sobre o CIPASO</h2>
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="mb-4">
                O <strong>CIPASO (Centro de Investigação Parapsicológica de Sorocaba)</strong> foi
                fundado em <strong>1989</strong> (CNPJ 58.984.089/0001-58) com a missão de
                investigar fenômenos PSI e parapsicologia sob uma abordagem científica e
                humanística.
              </p>

              <p className="mb-4">
                Localizado na histórica <strong>Rua Oswaldo Segamarchi, 15, Jardim Santa Rosália,
                Sorocaba/SP</strong>, o centro se tornou referência regional em estudos de
                reprogramação mental positiva e desenvolvimento humano.
              </p>

              <p className="mb-6">
                Em estreita colaboração com a <strong>Parâmetros Holísticos de Formação
                Humana</strong> (CNPJ 67.361.410/0001-39), o CIPASO expandiu suas atividades para
                formação de profissionais e pesquisa aplicada.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Valores Fundamentais</h3>
                <ul className="text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Investigação científica de fenômenos parapsicológicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Reprogramação mental positiva para segurança emocional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Fortalecimento de vínculos familiares e comunitários</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Educação e divulgação científica acessível</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
