import { MapPin, Mail, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/20 bg-background mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações Institucionais */}
          <div>
            <h3 className="text-lg font-bold mb-4">CIPASO</h3>
            <p className="text-sm text-foreground/80 mb-4">
              Centro de Investigação Parapsicológica de Sorocaba
            </p>
            <div className="space-y-2 text-sm text-foreground/70">
              <p>CNPJ: 58.984.089/0001-58</p>
              <p>Fundação: 1989</p>
            </div>
          </div>

          {/* Parâmetros Holísticos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Parâmetros Holísticos</h3>
            <p className="text-sm text-foreground/80 mb-4">
              Formação Humana LTDA.
            </p>
            <div className="space-y-2 text-sm text-foreground/70">
              <p>CNPJ: 67.361.410/0001-39</p>
              <p>Parceira institucional desde 1989</p>
            </div>
          </div>

          {/* Localização Histórica */}
          <div>
            <h3 className="text-lg font-bold mb-4">Localização Histórica</h3>
            <div className="space-y-3 text-sm text-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <p>
                  Rua Oswaldo Segamarchi, 15<br />
                  Jardim Santa Rosália<br />
                  Sorocaba/SP - CEP 18090-050
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <p>(15) 231.0958 / 231.7750</p>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <p>franceschini.psi@uol.com.br</p>
              </div>
            </div>
          </div>
        </div>

        {/* Créditos e Copyright */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-sm text-foreground/60">
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
