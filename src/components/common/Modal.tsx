import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              className="bg-bg border border-primary/30 rounded-2xl shadow-2xl max-h-[90vh] w-full max-w-4xl overflow-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-bg border-b border-primary/30 px-6 py-4 flex items-center justify-between">
                {title && (
                  <h2 className="text-xl font-bold text-fg">{title}</h2>
                )}
                <button
                  onClick={onClose}
                  className="ml-auto p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  aria-label="Fechar"
                >
                  <X className="h-5 w-5 text-fg" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {children}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
