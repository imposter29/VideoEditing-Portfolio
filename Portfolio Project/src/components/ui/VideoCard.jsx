import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'

const VideoCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden shadow-md dark:shadow-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/portfolio/${project.id}`}>
        <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
          />
          
          <div className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <motion.div
              className="bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 p-3 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiPlay className="text-blue-600 dark:text-blue-400" size={24} />
            </motion.div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.category}</p>
        </div>
      </Link>
    </motion.div>
  )
}

export default VideoCard