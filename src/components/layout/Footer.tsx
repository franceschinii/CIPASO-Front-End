import { MapPinIcon } from '@heroicons/react/24/solid'
import parametrosLogo from '@/assets/svg/parametros-logo.svg'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-muted bg-bg mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Informações Institucionais */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">CIPASO</h3>
            <p className="text-sm text-muted-fg mb-4">
              Centro de Investigação Parapsicológica de Sorocaba
            </p>
            <div className="space-y-2 text-xs text-muted-fg">
              <p>CNPJ: 58.984.089/0001-58</p>
              <p>Fundação: 1989</p>
              <p className="text-yellow-600 dark:text-yellow-500 font-semibold">Status: Inativo</p>
            </div>
          </div>

          {/* Parâmetros Holísticos */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={parametrosLogo} alt="Parâmetros Logo" className="h-8 w-8 shrink-0" />
              <h3 className="text-lg font-bold">Parâmetros</h3>
            </div>
            <p className="text-sm text-muted-fg mb-4">
              Formação Humana LTDA.
            </p>
            <div className="space-y-2 text-xs text-muted-fg">
              <p>CNPJ: 67.361.410/0001-39</p>
              <p>Fundação: 1989</p>
              <p className="text-yellow-600 dark:text-yellow-500 font-semibold">Status: Inativo</p>
            </div>
          </div>

          {/* Desenvolvimento */}
          <div>
            <h3 className="text-lg font-bold mb-4">Desenvolvimento</h3>
            <p className="text-sm text-muted-fg mb-3">
              Site desenvolvido por
            </p>
            <a
              href="https://www.linkedin.com/in/andrefranceschini/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors font-semibold"
            >
              André Franceschini
            </a>
          </div>

          {/* Localização Histórica */}
          <div>
            <h3 className="text-lg font-bold mb-4">Localização Histórica</h3>
            <div className="space-y-3 text-sm text-muted-fg">
              <div className="flex items-start gap-2">
                <MapPinIcon className="h-4 w-4 mt-0.5 shrink-0" />
                <p>
                  Rua Oswaldo Segamarchi, 15<br />
                  Sorocaba/SP
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Créditos e Copyright */}
        <div className="mt-12 pt-8 border-t border-muted space-y-3 text-center text-xs text-muted-fg">
          <p>
            Memorial Digital desenvolvido por <a href="https://www.linkedin.com/in/andrefranceschini/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors font-semibold">André Franceschini</a>
          </p>
          <p>
            Arquivo oferecido e disponibilizado pela Família Franceschini e Amigos, com intuito de manter preservada a memória do <strong>Prof. Valter Álfredo Franceschini</strong>, parte da história da parapsicologia e de Sorocaba. Oferecendo a todos a possibilidade de melhorar suas vidas e conhecer o trabalho dele.
          </p>
          <p className="pt-4">
            © {currentYear}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
