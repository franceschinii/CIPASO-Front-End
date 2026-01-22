import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { getRandomQuote, type Quote as QuoteType } from '@/data/quotes'

export function DailyQuote() {
  const [quote, setQuote] = useState<QuoteType | null>(null)

  useEffect(() => {
    // Gerar citação aleatória ao carregar
    setQuote(getRandomQuote())
  }, [])

  if (!quote) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-8 shadow-lg overflow-hidden"
    >
      {/* Ícone decorativo */}
      <Quote className="absolute top-4 right-4 h-16 w-16 text-primary/10" />

      {/* Título */}
      <h3 className="text-sm uppercase tracking-wide text-primary font-semibold mb-4">
        Citação do Dia
      </h3>

      {/* Conteúdo da citação */}
      <blockquote className="relative z-10">
        <p className="text-lg md:text-xl leading-relaxed mb-4 italic">
          "{quote.content}"
        </p>
        <cite className="text-sm text-foreground/70 not-italic font-medium">
          — {quote.author}
        </cite>
      </blockquote>

      {/* Decoração de fundo */}
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
    </motion.div>
  )
}
