import { motion } from 'framer-motion'
import { SEO } from '@/components/SEO'

export function Legal() {
  return (
    <>
      <SEO
        title="Termos de Uso - Memorial CIPASO"
        description="Termos de uso, política de privacidade e aviso legal do Memorial Digital CIPASO."
        canonical="https://cipaso.com/termos"
        ogImage="https://cipaso.com/favicon.svg"
        ogType="website"
      />
      <div className="min-h-screen bg-bg py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-fg">
            Termos & Legal
          </h1>
          <p className="text-xl text-muted-fg">
            Informações importantes sobre o uso do Memorial Digital CIPASO
          </p>
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-12 text-muted-fg"
        >
          {/* Aviso Legal */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-fg">Aviso Legal</h2>
            <p className="leading-relaxed">
              O Memorial Digital CIPASO é um projeto dedicado à preservação da memória e legado do
              <strong> Prof. Valter Álfredo Franceschini</strong> e do
              <strong> Centro de Investigação Parapsicológica de Sorocaba (CIPASO)</strong>.
            </p>
            <p className="leading-relaxed">
              Este site é mantido com fins educacionais, históricos e informativos. Os materiais, documentos,
              imagens, áudios e vídeos disponibilizados são oferecidos pela Família Franceschini e Amigos com
              o intuito de preservar essa importante parte da história da parapsicologia.
            </p>
          </section>

          {/* Sobre o Conteúdo */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-fg">Sobre o Conteúdo</h2>
            <p className="leading-relaxed">
              Todos os arquivos disponibilizados neste site (textos, imagens, áudios, vídeos, publicações e jornais)
              são oferecidos com o objetivo de possibilitar a melhoria da qualidade de vida e o conhecimento do
              trabalho desenvolvido pelo Prof. Valter Franceschini.
            </p>
            <p className="leading-relaxed">
              Os direitos de propriedade intelectual dos materiais históricos pertencem aos seus respectivos
              proprietários. A reprodução ou distribuição desses materiais sem autorização prévia é proibida,
              exceto para fins educacionais e não comerciais.
            </p>
          </section>

          {/* Direitos Autorais */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-fg">Direitos Autorais & Propriedade Intelectual</h2>
            <p className="leading-relaxed">
              O design e desenvolvimento do Memorial Digital foram realizados por
              <strong> André Franceschini</strong>. O código-fonte e design do site são protegidos por direitos autorais.
            </p>
            <p className="leading-relaxed">
              Os materiais históricos (documentos, fotografias, vídeos, etc.) conservam seus direitos originais.
              Qualquer utilização comercial desses materiais requer autorização prévia da Família Franceschini.
            </p>
          </section>

          {/* Isenção de Responsabilidade */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-fg">Isenção de Responsabilidade</h2>
            <p className="leading-relaxed">
              As informações contidas neste site são fornecidas "como estão", sem garantias de qualquer tipo,
              explícitas ou implícitas. O Memorial Digital CIPASO não se responsabiliza por:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Interrupções ou erros no acesso ao site</li>
              <li>Perda de dados ou danos decorrentes do uso do site</li>
              <li>Links para sites externos ou conteúdo de terceiros</li>
              <li>Imprecisões ou omissões no conteúdo histórico</li>
            </ul>
          </section>

          {/* Privacidade */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-fg">Privacidade</h2>
            <p className="leading-relaxed">
              O Memorial Digital CIPASO respeita sua privacidade. Este site não coleta informações pessoais
              identificáveis sem o seu consentimento explícito. Cookies podem ser utilizados para melhorar
              a experiência de navegação e manter consistência nas seleções de conteúdo diário.
            </p>
            <p className="leading-relaxed">
              O uso de dados de navegação é feito apenas com fins analíticos e não é compartilhado com terceiros.
            </p>
          </section>

          {/* Cookies */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-fg">Cookies e Armazenamento Local</h2>
            <p className="leading-relaxed">
              Este site utiliza cookies e localStorage para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Manter a preferência de tema (claro/escuro)</li>
              <li>Assegurar consistência nas citações e arquivos diários</li>
              <li>Melhorar a experiência de navegação</li>
            </ul>
            <p className="leading-relaxed">
              Você pode desabilitar cookies nas configurações do seu navegador, porém isso pode afetar a
              experiência de uso do site.
            </p>
          </section>

          {/* Uso do Site */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-fg">Condições de Uso</h2>
            <p className="leading-relaxed">
              Ao acessar e utilizar o Memorial Digital CIPASO, você concorda com:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Usar o site apenas para fins lícitos e legais</li>
              <li>Não transmitir conteúdo ofensivo, ilegal ou prejudicial</li>
              <li>Respeitar os direitos de propriedade intelectual de terceiros</li>
              <li>Não tentar contornar medidas de segurança do site</li>
              <li>Não realizar downloads massivos de conteúdo sem autorização</li>
            </ul>
          </section>

          {/* Contato */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-fg">Contribuições e Contato</h2>
            <p className="leading-relaxed">
              Possui materiais, histórias, ou mensagens positivas para contribuir? Entre em contato conosco:
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-2">
              <p>
                <strong className="text-fg">Email:</strong>{' '}
                <a
                  href="mailto:contato@andrefranceschini.com.br"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  contato@andrefranceschini.com.br
                </a>
              </p>
              <p>
                <strong className="text-fg">Telefone:</strong>{' '}
                <a
                  href="tel:+5515997234932"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  +55 (15) 99723-4932
                </a>
              </p>
            </div>
          </section>

          {/* Última Atualização */}
          <section className="space-y-4 pt-8 border-t border-muted">
            <p className="text-sm text-muted-fg italic">
              Última atualização: {new Date().toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </section>
        </motion.div>
      </div>
      </div>
    </>
  )
}
