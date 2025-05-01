import { Link } from 'react-router-dom'
import { FiInstagram, FiYoutube, FiTwitter, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                FILMCRAFT
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Professional video editing and post-production services.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Color Grading
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Motion Graphics
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Sound Design
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Connect</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <FiInstagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <FiYoutube size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <FiTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            © {currentYear} FILMCRAFT. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer