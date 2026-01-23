import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PdfViewerProps {
  path: string
  title: string
  isFullscreen: boolean
  onClose: () => void
}

export function PdfViewer({ path, title, isFullscreen, onClose }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setCurrentPage(1)
    setIsLoading(true)
  }, [path])

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setIsLoading(false)
  }

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(1, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage(prev => Math.min(numPages || 1, prev + 1))
  }

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col">
        {/* Header */}
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

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto flex flex-col items-center justify-center bg-black">
          {isLoading && (
            <div className="text-white">Carregando PDF...</div>
          )}
          <Document
            file={path}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className="text-white">Carregando...</div>}
            error={<div className="text-red-400">Erro ao carregar PDF</div>}
          >
            <Page
              pageNumber={currentPage}
              width={window.innerWidth - 40}
              renderAnnotationLayer={true}
              renderTextLayer={true}
            />
          </Document>
        </div>

        {/* Controles */}
        <div className="bg-black border-t border-gray-700 px-6 py-4 flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="p-2 text-gray-400 hover:text-white disabled:opacity-50 transition-colors"
            aria-label="Página anterior"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <div className="text-gray-400 text-sm">
            {isLoading ? '...' : `${currentPage} / ${numPages || '?'}`}
          </div>

          <button
            onClick={handleNext}
            disabled={!numPages || currentPage === numPages}
            className="p-2 text-gray-400 hover:text-white disabled:opacity-50 transition-colors"
            aria-label="Próxima página"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="bg-gray-100 rounded-lg overflow-auto max-h-[60vh] flex flex-col items-center justify-center">
        {isLoading && (
          <div className="text-gray-600">Carregando PDF...</div>
        )}
        <Document
          file={path}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div className="text-gray-600">Carregando...</div>}
          error={<div className="text-red-600">Erro ao carregar PDF</div>}
        >
          <Page
            pageNumber={currentPage}
            width={400}
            renderAnnotationLayer={true}
            renderTextLayer={true}
          />
        </Document>
      </div>

      {numPages && (
        <div className="flex items-center justify-between gap-2 text-sm text-gray-600">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="p-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 rounded transition-colors"
            aria-label="Página anterior"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <div>
            {currentPage} de {numPages} páginas
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === numPages}
            className="p-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 rounded transition-colors"
            aria-label="Próxima página"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}
