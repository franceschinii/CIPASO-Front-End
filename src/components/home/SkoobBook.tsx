import { motion } from 'framer-motion'
import { BookOpenIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

interface BookMetadata {
  titulo: string
  autor: string
  isbn?: string
  paginas?: number
  ano?: number
  descricao?: string
  coverUrl?: string
  skoobUrl: string
}

interface SkoobBookProps {
  book: BookMetadata
  index?: number
}

export function SkoobBook({ book, index = 0 }: SkoobBookProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative bg-white dark:bg-muted border border-muted rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Book Cover */}
      {book.coverUrl && (
        <div className="relative w-full aspect-[3/4] bg-gradient-to-b from-primary/20 to-accent/20 overflow-hidden">
          <img
            src={book.coverUrl}
            alt={book.titulo}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Book Info */}
      <div className="p-6">
        {/* Icon and Category */}
        <div className="flex items-center gap-2 mb-4">
          <BookOpenIcon className="h-5 w-5 text-primary" />
          <span className="text-xs uppercase tracking-wide text-primary font-semibold">
            Publicação
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2 text-fg leading-snug">
          {book.titulo}
        </h3>

        {/* Author */}
        <p className="text-sm text-muted-fg mb-3 font-medium">
          por <span className="text-primary">{book.autor}</span>
        </p>

        {/* Metadata */}
        <div className="space-y-2 mb-4 text-xs text-muted-fg">
          {book.ano && (
            <p>
              <span className="font-medium">Ano:</span> {book.ano}
            </p>
          )}
          {book.paginas && (
            <p>
              <span className="font-medium">Páginas:</span> {book.paginas}
            </p>
          )}
          {book.isbn && (
            <p>
              <span className="font-medium">ISBN:</span> {book.isbn}
            </p>
          )}
        </div>

        {/* Description */}
        {book.descricao && (
          <p className="text-sm text-muted-fg mb-6 line-clamp-3">
            {book.descricao}
          </p>
        )}

        {/* CTA Button */}
        <a
          href={book.skoobUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-full justify-center bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-secondary transition-all hover:gap-3"
        >
          Ver no Skoob
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>

      {/* Decoração */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
    </motion.div>
  )
}
