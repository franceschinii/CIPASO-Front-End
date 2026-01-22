import { useState } from 'react'
import { motion } from 'framer-motion'
import { DocumentTextIcon, PhotoIcon, MusicalNoteIcon, FilmIcon, NewspaperIcon, BookOpenIcon } from '@heroicons/react/24/solid'
import { getAllFiles, type FileCategory } from '@/data/files'
import { Modal } from '@/components/common/Modal'

const categoryLabels: Record<string, string> = {
  textos: 'Documentos',
  imagens: 'Imagens Históricas',
  audios: 'Áudios',
  videos: 'Vídeos',
  jornais: 'Jornais',
  livros: 'Publicações'
}

const categoryIcons: Record<string, React.ReactNode> = {
  textos: <DocumentTextIcon className="h-6 w-6" />,
  imagens: <PhotoIcon className="h-6 w-6" />,
  audios: <MusicalNoteIcon className="h-6 w-6" />,
  videos: <FilmIcon className="h-6 w-6" />,
  jornais: <NewspaperIcon className="h-6 w-6" />,
  livros: <BookOpenIcon className="h-6 w-6" />
}

export function Acervo() {
  const allFiles = getAllFiles()
  const [selectedCategory, setSelectedCategory] = useState<FileCategory | null>(null)
  const [selectedFile, setSelectedFile] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = Array.from(new Set(allFiles.map(f => f.categoria))) as FileCategory[]
  const filteredFiles = selectedCategory
    ? allFiles.filter(f => f.categoria === selectedCategory)
    : allFiles

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const openModal = (file: any) => {
    setSelectedFile(file)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-bg py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-fg">
            Acervo Digital
          </h1>
          <p className="text-xl text-muted-fg">
            Explore documentos, imagens, áudios, vídeos e publicações históricas do CIPASO
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-primary text-white'
                  : 'bg-muted text-fg hover:border-primary border border-muted'
              }`}
            >
              Todos ({allFiles.length})
            </button>

            {categories.map(category => {
              const count = allFiles.filter(f => f.categoria === category).length
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-muted text-fg hover:border-primary border border-muted'
                  }`}
                >
                  {categoryIcons[category]}
                  {categoryLabels[category]} ({count})
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Grid de Arquivos */}
        {filteredFiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFiles.map((file, index) => (
              <motion.div
                key={file.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white dark:bg-muted border border-muted rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                {/* Ícone Categoria */}
                <div className="h-32 bg-linear-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/20 transition-all">
                  <div className="text-primary/40 group-hover:text-primary/60 transition-colors">
                    <div className="h-16 w-16 flex items-center justify-center">
                      {categoryIcons[file.categoria]}
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs uppercase tracking-wide text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
                      {categoryLabels[file.categoria]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-fg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {file.titulo}
                  </h3>

                  <p className="text-sm text-muted-fg mb-4 flex-grow line-clamp-2">
                    {file.descricao}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-muted text-xs text-muted-fg mb-4">
                    <span>{formatDate(file.data)}</span>
                    <span className="font-medium">{file.tipo.toUpperCase()}</span>
                  </div>

                  <button
                    onClick={() => openModal(file)}
                    className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-secondary transition-all"
                  >
                    Visualizar
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-fg">
              Nenhum arquivo encontrado nesta categoria.
            </p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedFile?.titulo}
      >
        {selectedFile && (
          <>
            {selectedFile.categoria === 'imagens' ? (
              <div className="flex flex-col items-center gap-6">
                <img
                  src={selectedFile.path}
                  alt={selectedFile.titulo}
                  className="max-w-full max-h-[60vh] rounded-lg shadow-lg"
                />
                <div className="w-full">
                  <p className="text-muted-fg text-sm mb-4">{selectedFile.descricao}</p>
                  <a
                    href={selectedFile.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-primary text-white py-3 rounded-lg font-medium hover:bg-secondary transition-all"
                  >
                    Abrir em Nova Aba
                  </a>
                </div>
              </div>
            ) : selectedFile.categoria === 'videos' ? (
              <div className="w-full">
                <div className="w-full aspect-video mb-6">
                  <video
                    src={selectedFile.path}
                    controls
                    autoPlay
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <p className="text-muted-fg text-sm mb-4">{selectedFile.descricao}</p>
                <div className="flex gap-3">
                  <a
                    href={selectedFile.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-primary text-white py-3 rounded-lg font-medium hover:bg-secondary transition-all"
                  >
                    Abrir em Tela Cheia
                  </a>
                  <a
                    href={selectedFile.path}
                    download
                    className="flex-1 text-center bg-primary/20 text-primary py-3 rounded-lg font-medium hover:bg-primary/30 transition-all"
                  >
                    Baixar
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-muted-fg">{selectedFile.descricao}</p>
                <div className="grid grid-cols-2 gap-3 text-sm text-muted-fg">
                  <div>
                    <span className="font-medium text-fg">Data:</span>
                    <p>{formatDate(selectedFile.data)}</p>
                  </div>
                  <div>
                    <span className="font-medium text-fg">Tipo:</span>
                    <p>{selectedFile.tipo.toUpperCase()}</p>
                  </div>
                </div>
                <a
                  href={selectedFile.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-primary text-white py-3 rounded-lg font-medium hover:bg-secondary transition-all"
                >
                  Abrir Arquivo
                </a>
              </div>
            )}
          </>
        )}
      </Modal>
    </div>
  )
}
