import { XMarkIcon } from '@heroicons/react/24/solid'

interface PdfViewerProps {
  path: string
  title: string
  isFullscreen: boolean
  onClose: () => void
}

export function PdfViewer({ path, title, isFullscreen, onClose }: PdfViewerProps) {
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
          src={path}
          className="flex-1 w-full border-0"
          title={title}
        />
      </div>
    )
  }

  return (
    <iframe
      src={path}
      className="w-full h-80 rounded-lg border border-border overflow-auto"
      title={title}
    />
  )
}
