import { Link } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const { isDark, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Início' },
    { to: '/acervo', label: 'Acervo' },
    { to: '/sobre', label: 'Sobre' }
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-muted bg-bg/95 backdrop-blur supports-backdrop-filter:bg-bg/80 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col gap-0.5">
              <span className="text-2xl font-black text-primary tracking-tight leading-none font-display">
                CIPASO
              </span>
              <span className="text-xs text-muted-fg font-medium tracking-wide hidden sm:block">
                Centro de Investigação Parapsicológica de Sorocaba
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-muted-fg hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Alternar tema"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-primary" fill="currentColor" />
              ) : (
                <Moon className="h-5 w-5 text-primary" fill="currentColor" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Alternar tema"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-primary" fill="currentColor" />
              ) : (
                <Moon className="h-5 w-5 text-primary" fill="currentColor" />
              )}
            </button>

            <button
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-fg" fill="currentColor" />
              ) : (
                <Menu className="h-5 w-5 text-fg" fill="currentColor" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-muted bg-bg"
          >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm font-medium py-2 px-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
