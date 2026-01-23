import { useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

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

  // Usar Google PDF Viewer para renderizar PDFs em iframes
  const getPdfViewerUrl = (pdfPath: string): string => {
    const fullUrl = new URL(pdfPath, window.location.origin).href
    return `https://docs.google.com/gviewer?url=${encodeURIComponent(fullUrl)}&embedded=true`
  }

  const viewerUrl = getPdfViewerUrl(path)

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col">
        <div className="bg-black border-b border-gray-700 px-6 py-4 flex items-center justify-between">
          <h2 className="text-white text-lg font-semibold truncate flex-1">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <iframe
          src={viewerUrl}
          className="flex-1 w-full border-0"
          title={title}
        />
      </div>
    )
  }

  return (
    <iframe
      src={viewerUrl}
      className="w-full h-80 rounded-lg border border-border overflow-auto"
      title={title}
    />
  )
}
