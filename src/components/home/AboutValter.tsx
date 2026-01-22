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
          <div className="space-y-12">
            {/* Foto + Biografia */}
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
              {/* Biografia */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
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

                <p className="text-sm text-muted-fg italic pt-4">
                  Seu trabalho continua vivo através deste memorial digital e das centenas de
                  alunos que formou ao longo de décadas de magistério.
                </p>
              </motion.div>

              {/* Fotografia */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="w-full rounded-lg overflow-hidden shadow-2xl border-4 border-primary/20">
                  <img
                    src={valterPhoto}
                    alt="Prof. Valter Franceschini"
                    className="w-full h-auto grayscale object-contain hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Decoração */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10 hidden sm:block" />
              </motion.div>
            </div>

            {/* 5 Ferramentas Mentais em Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-fg">5 Ferramentas Mentais</h3>
                <p className="text-muted-fg">
                  Metodologia desenvolvida pelo Prof. Valter para programação mental nos níveis cerebrais (beta, alfa, teta e delta):
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  'Relaxamento e meditação guiada',
                  'Visualização criativa e reprogramação mental',
                  'Técnicas de autocura e autoconhecimento',
                  'Vivência prática das Leis da Mente',
                  'Investigação e desenvolvimento de fenômenos PSI'
                ].map((ferramenta, index) => (
                  <div key={index} className="bg-bg border border-primary/20 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 text-primary font-bold mx-auto mb-3">
                      {index + 1}
                    </div>
                    <p className="text-sm font-medium text-fg">{ferramenta}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
