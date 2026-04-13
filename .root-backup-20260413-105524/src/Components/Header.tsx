import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from './Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-gray-900">Payscribe Partnership</span>
            </Link>
          </div>
          

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:gap-x-12">
            <Link to="/partners" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600">
              Partners
            </Link>
            <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600">
              Contact
            </Link>
            <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600">
              About
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
            <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
              Log in
            </Link>
            <Link to="/signup">
              <Button variant="primary" size="sm">
                Get started
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link to="/partners" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
                Partners
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
                Contact
              </Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
                About
              </Link>
              <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">
                Log in
              </Link>
              <Link to="/signup" className="block px-3 py-2">
                <Button variant="primary" size="lg" className="w-full">
                  Get started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header