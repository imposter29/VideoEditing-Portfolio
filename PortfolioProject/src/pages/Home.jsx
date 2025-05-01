import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiEdit, FiFilm, FiLayout, FiMusic } from 'react-icons/fi'
import HeroSection from '../components/sections/HeroSection'
import VideoCard from '../components/ui/VideoCard'
import Button from '../components/ui/Button'
import { projects } from '../data/projects'

const Home = () => {
  const { ref: servicesRef, inView: servicesInView } = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  })
  
  const { ref: portfolioRef, inView: portfolioInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const services = [
    {
      icon: <FiEdit className="w-6 h-6" />,
      title: 'Video Editing',
      description: 'Professional video editing with attention to pacing, flow, and storytelling.'
    },
    {
      icon: <FiFilm className="w-6 h-6" />,
      title: 'Color Grading',
      description: 'Enhance the visual appeal of your footage with professional color grading.'
    },
    {
      icon: <FiLayout className="w-6 h-6" />,
      title: 'Motion Graphics',
      description: 'Engaging motion graphics and titles that enhance your video content.'
    },
    {
      icon: <FiMusic className="w-6 h-6" />,
      title: 'Sound Design',
      description: 'Professional audio editing and sound design for immersive experiences.'
    }
  ]
  
  const stats = [
    { value: '100+', label: 'Projects Completed' },
    { value: '25+', label: 'Happy Clients' },
    { value: '7+', label: 'Years Experience' },
    { value: '5', label: 'Industry Awards' }
  ]
  
  return (
    <>
      <HeroSection />
      
      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        className="py-20 bg-white dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={servicesInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Professional Video Editing Services
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Elevate your visual content with expert editing, color grading, and motion graphics.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Portfolio Preview Section */}
      <motion.section
        ref={portfolioRef}
        className="py-20 bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0 }}
        animate={portfolioInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Featured Work
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                A selection of recent video editing projects across various genres.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 md:mt-0"
            >
              <Link 
                to="/portfolio" 
                className="group inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
              >
                View All Projects
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <VideoCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-20 bg-blue-600 dark:bg-blue-700"
        initial={{ opacity: 0 }}
        animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <div className="text-white">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Let's collaborate on your next video project. I'm ready to help you create stunning visual content that captivates your audience.
            </p>
            <Button to="/contact" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home