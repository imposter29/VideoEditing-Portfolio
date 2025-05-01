import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import VideoCard from '../components/ui/VideoCard'
import { projects } from '../data/projects'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  
  // Extract unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))]
  
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory))
    }
  }, [selectedCategory])
  
  return (
    <>
      <motion.section 
        className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>
            <p className="text-lg text-gray-300">
              Explore my latest video editing projects, from commercials and music videos to documentaries and corporate videos.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map(category => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <VideoCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio