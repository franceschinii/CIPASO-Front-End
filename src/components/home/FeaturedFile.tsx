import { motion } from 'framer-motion'
import { DocumentTextIcon, PhotoIcon, MusicalNoteIcon, FilmIcon, NewspaperIcon, BookOpenIcon } from '@heroicons/react/24/solid'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { getRandomFile, type DigitalFile } from '@/data/files'
import { useEffect, useState } from 'react'
import { Modal } from '@/components/common/Modal'

const categoryIcons: Record<string, React.ReactNode> = {
  textos: <DocumentTextIcon className="h-6 w-6" />,
  imagens: <PhotoIcon className="h-6 w-6" />,
  audios: <MusicalNoteIcon className="h-6 w-6" />,
  videos: <FilmIcon className="h-6 w-6" />,
  jornais: <NewspaperIcon className="h-6 w-6" />,
  livros: <BookOpenIcon className="h-6 w-6" />
}

const categoryLabels: Record<string, string> = {
  textos: 'Documento',
  imagens: 'Imagem Histórica',
  audios: 'Áudio',
  videos: 'Vídeo',
  jornais: 'Jornal',
  livros: 'Publicação'
}

export function FeaturedFile() {
  const [file, setFile] = useState<DigitalFile | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setFile(getRandomFile(true))
  }, [])

  if (!file) {
    return null
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-linear-to-br from-primary/10 to-accent/5 border border-primary/30 rounded-xl p-8 shadow-lg overflow-hidden"
    >
      {/* Ícone decorativo */}
      <div className="absolute top-4 right-4 h-16 w-16 text-primary/10">
        {categoryIcons[file.categoria]}
      </div>

      {/* Conteúdo */}
      <div className="relative z-10">
        {/* Label de categoria */}
        <div className="flex items-center gap-2 mb-4">
          <div className="text-primary">
            {categoryIcons[file.categoria]}
          </div>
          <span className="text-sm uppercase tracking-wide text-primary font-semibold">
            {categoryLabels[file.categoria]} do Dia
          </span>
        </div>

        {/* Título */}
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-fg">
          {file.titulo}
        </h3>

        {/* Descrição */}
        <p className="text-muted-fg mb-4 leading-relaxed">
          {file.descricao}
        </p>

        {/* Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-muted-fg mb-6">
          <div>
            <span className="font-medium">Data:</span> {formatDate(file.data)}
          </div>
          <div>
            <span className="font-medium">Tipo:</span> {file.tipo.toUpperCase()}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-all hover:gap-3 group"
        >
          Visualizar
          <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Decoração de fundo */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />

      {/* Modal para visualizar arquivo */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={file.titulo}
      >
        {file.categoria === 'imagens' ? (
          <div className="flex flex-col items-center gap-4">
            <img
              src={file.path}
              alt={file.titulo}
              className="max-w-full max-h-[60vh] rounded-lg"
            />
            <a
              href={file.path}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-secondary transition-all"
            >
              Abrir em nova aba
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-muted-fg">{file.descricao}</p>
            <a
              href={file.path}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-all"
            >
              Abrir arquivo
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        )}
      </Modal>
    </motion.div>
  )
}
