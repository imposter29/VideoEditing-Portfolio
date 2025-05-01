import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import ThemeToggle from '../ui/ThemeToggle'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
]

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { darkMode } = useTheme()
  const location = useLocation()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link 
            to="/" 
            className="text-xl font-bold tracking-tighter"
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
              FILMCRAFT
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `text-sm font-medium tracking-wide transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 relative ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-200'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                        layoutId="navbar-indicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button
              className="flex md:hidden items-center text-gray-800 dark:text-gray-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-16 inset-x-0 bg-white dark:bg-gray-900 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `block py-3 px-4 text-base font-medium transition-colors rounded-lg ${
                      isActive 
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800' 
                        : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar