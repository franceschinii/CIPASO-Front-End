import { motion } from 'framer-motion'
import { FilmIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { getRandomVideo } from '@/data/files'
import { useEffect, useState } from 'react'
import { type DigitalFile } from '@/data/files'
import { Modal } from '@/components/common/Modal'

export function FeaturedVideo() {
  const [video, setVideo] = useState<DigitalFile | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const randomVideo = getRandomVideo()
    if (randomVideo) {
      setVideo(randomVideo)
    }
  }, [])

  if (!video) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-linear-to-br from-primary/10 to-accent/5 border border-primary/30 rounded-xl overflow-hidden shadow-lg"
    >
      <div className="grid lg:grid-cols-[1fr_380px] gap-8 p-8 lg:p-0">
        {/* Video Container */}
        <div className="relative aspect-video bg-fg/10 overflow-hidden rounded-lg lg:rounded-l-lg lg:rounded-r-none">
          <video
            src={video.path}
            controls
            className="w-full h-full object-cover"
            controlsList="nodownload"
          />
        </div>

        {/* Metadata */}
        <div className="flex flex-col justify-between lg:p-8">
        {/* Label */}
        <div className="flex items-center gap-2 mb-4">
          <FilmIcon className="h-5 w-5 text-primary" />
          <span className="text-sm uppercase tracking-wide text-primary font-semibold">
            Vídeo do Acervo
          </span>
        </div>

        {/* Título */}
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-fg">
          {video.titulo}
        </h3>

        {/* Descrição */}
        <p className="text-muted-fg mb-6 leading-relaxed">
          {video.descricao}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-all hover:gap-3 group"
          >
            Assistir
            <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={video.path}
            download
            className="inline-flex items-center gap-2 bg-primary/20 text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/30 transition-all"
          >
            Baixar
          </a>
        </div>
        </div>
      </div>

      {/* Decoração de fundo */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />

      {/* Modal para assistir em fullscreen */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={video.titulo}
      >
        <div className="w-full aspect-video">
          <video
            src={video.path}
            controls
            autoPlay
            className="w-full h-full rounded-lg"
          />
        </div>
      </Modal>
    </motion.div>
  )
}
