import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white dark:bg-gray-900 py-16">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">404</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>
        
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button to="/" size="lg">
            Return Home
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound