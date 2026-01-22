import { motion } from 'framer-motion'
import valterPhoto from '@/assets/png/vaf/VAF-1.jpg'

export function AboutValter() {
  return (
    <section className="py-20 bg-linear-to-b from-bg to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Título da Seção */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Prof. Valter Franceschini
            </h2>
            <p className="text-xl text-muted-fg italic">
              In Memoriam — Mentor e Visionário
            </p>
          </div>

          {/* Conteúdo Principal */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start lg:items-center">
            {/* Fotografia */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <div className="w-full max-w-sm mx-auto lg:max-w-none aspect-[2.5/3.5] sm:aspect-3/4 rounded-lg overflow-hidden shadow-2xl border-4 border-primary/20">
                <img
                  src={valterPhoto}
                  alt="Prof. Valter Franceschini"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Decoração */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10 hidden sm:block" />
            </motion.div>

            {/* Biografia */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed">
                <strong className="text-primary">Escritor, conferencista, parapsicólogo,</strong>{' '}
                professor e operador dos fenômenos PSI. O Prof. Valter Franceschini foi o
                idealizador e mentor espiritual do CIPASO.
              </p>

              <p className="text-lg leading-relaxed">
                Sua visão pioneira de unir <strong>ciência e humanismo</strong> moldou toda a
                filosofia institucional do Centro de Investigação Parapsicológica de Sorocaba.
              </p>

              {/* Citação Destaque */}
              <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg my-8">
                <p className="text-lg italic mb-2">
                  "O seu corpo reage de acordo com como age a sua mente."
                </p>
                <cite className="text-sm text-muted-fg not-italic">
                  — Prof. Valter Franceschini
                </cite>
              </blockquote>

              {/* 5 Ferramentas Mentais */}
              <div className="bg-bg border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">5 Ferramentas Mentais</h3>
                <p className="text-sm text-muted-fg mb-3">
                  Metodologia desenvolvida pelo Prof. Valter para programação mental nos níveis cerebrais (beta, alfa, teta e delta):
                </p>
                <ul className="space-y-2 text-muted-fg text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Relaxamento e meditação guiada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Visualização criativa e reprogramação mental</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Técnicas de autocura e autoconhecimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Vivência prática das Leis da Mente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Investigação e desenvolvimento de fenômenos PSI</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm text-muted-fg italic pt-4">
                Seu trabalho continua vivo através deste memorial digital e das centenas de
                alunos que formou ao longo de décadas de magistério.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
