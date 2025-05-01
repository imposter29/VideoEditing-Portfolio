import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiPlay, FiClock, FiUser, FiTag } from 'react-icons/fi'
import VideoModal from '../components/ui/VideoModal'
import Button from '../components/ui/Button'
import { projects } from '../data/projects'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  
  useEffect(() => {
    // Simulate data fetch with a slight delay
    const timer = setTimeout(() => {
      const foundProject = projects.find(p => p.id === id)
      
      if (foundProject) {
        setProject(foundProject)
      }
      
      setLoading(false)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [id])
  
  // Handle 404 case
  useEffect(() => {
    if (!loading && !project) {
      navigate('/404')
    }
  }, [loading, project, navigate])
  
  if (loading || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <>
      <motion.section
        className="pt-24 pb-12 bg-white dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link 
              to="/portfolio" 
              className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Back to Portfolio
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="relative aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setVideoModalOpen(true)}
              >
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                    <FiPlay className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FiUser className="mr-2" />
                  {project.client}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FiClock className="mr-2" />
                  {project.date}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FiTag className="mr-2" />
                  {project.category}
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Project Overview
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Services Provided
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.testimonial && (
                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <blockquote className="italic text-gray-600 dark:text-gray-300">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <p className="mt-2 font-medium text-gray-900 dark:text-white">
                    {project.testimonial.author}
                  </p>
                </div>
              )}
              
              <div className="mt-8">
                <Button onClick={() => setVideoModalOpen(true)}>
                  Watch Video
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <VideoModal 
        isOpen={videoModalOpen} 
        videoUrl={project.videoUrl} 
        onClose={() => setVideoModalOpen(false)} 
      />
    </>
  )
}

export default ProjectDetail