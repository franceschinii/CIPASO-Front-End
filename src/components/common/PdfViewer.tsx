import { useEffect } from 'react'
import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

interface PdfViewerProps {
  path: string
  title: string
  isFullscreen: boolean
  onClose: () => void
}

export function PdfViewer({ path, title, isFullscreen, onClose }: PdfViewerProps) {
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isFullscreen])

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col">
        <div className="bg-black border-b border-gray-700 px-6 py-4 flex items-center justify-between">
          <h2 className="text-white text-lg font-semibold truncate flex-1">{title}</h2>
          <div className="flex items-center gap-3">
            <a
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Abrir em nova aba"
            >
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </a>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="flex-1 w-full flex items-center justify-center bg-gray-900">
          <embed
            src={path}
            type="application/pdf"
            width="100%"
            height="100%"
            title={title}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-80 rounded-lg border border-border overflow-hidden flex flex-col">
      <embed
        src={path}
        type="application/pdf"
        width="100%"
        height="100%"
        title={title}
      />
    </div>
  )
}
