import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <motion.button
      className={`relative p-2 rounded-full ${
        darkMode 
          ? 'bg-gray-800 text-yellow-300' 
          : 'bg-blue-50 text-blue-600'
      }`}
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 0 : 180 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle