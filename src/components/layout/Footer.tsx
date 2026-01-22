import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
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
            <div className="space-y-2 text-sm text-muted-fg">
              <p>CNPJ: 58.984.089/0001-58</p>
              <p>Fundação: 1989</p>
            </div>
          </div>

          {/* Parâmetros Holísticos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Parâmetros Holísticos</h3>
            <img src={parametrosLogo} alt="Parâmetros Logo" className="h-12 w-12 mb-4" />
            <p className="text-sm text-muted-fg mb-4">
              Formação Humana LTDA.
            </p>
            <div className="space-y-2 text-sm text-muted-fg">
              <p>CNPJ: 67.361.410/0001-39</p>
              <p>Parceira institucional desde 1989</p>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-muted-fg">
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="h-4 w-4 shrink-0" />
                <a href="mailto:contato@andrefranceschini.com.br" className="hover:text-primary transition-colors break-all">
                  contato@andrefranceschini.com.br
                </a>
              </div>

              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 shrink-0" />
                <a href="tel:+5515997234932" className="hover:text-primary transition-colors">
                  +55 (15) 99723-4932
                </a>
              </div>
            </div>
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
        <div className="mt-12 pt-8 border-t border-muted text-center text-sm text-muted-fg">
          <p className="mb-2">
            Memorial Digital desenvolvido com respeito à memória do Prof. Valter Franceschini
          </p>
          <p>
            © {currentYear} CIPASO. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
