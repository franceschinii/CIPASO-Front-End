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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Fotografia */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border-4 border-primary/20">
                <img
                  src={valterPhoto}
                  alt="Prof. Valter Franceschini"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Decoração */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
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
                  "Viver melhor não é ter mais, é ser mais consciente de si mesmo e do mundo ao redor."
                </p>
                <cite className="text-sm text-muted-fg not-italic">
                  — Prof. Valter Franceschini
                </cite>
              </blockquote>

              {/* Legado */}
              <div className="bg-bg border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Legado Acadêmico</h3>
                <ul className="space-y-2 text-muted-fg">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Técnicas de relaxamento e reprogramação mental</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fortalecimento da autoestima e segurança emocional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Métodos de investigação de fenômenos PSI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Formação de terapeutas e pesquisadores</span>
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
