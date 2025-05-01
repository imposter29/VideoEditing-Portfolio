import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

const HeroSection = () => {
  const videoRef = useRef(null)
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])
  
  return (
    <motion.section 
      className="relative h-screen flex items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-32809-large.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Crafting Visual Stories That Captivate
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="mt-4 text-xl text-gray-200 max-w-lg">
              Professional video editing services that bring your creative vision to life with precision and artistry.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button to="/portfolio" size="lg">
              View Portfolio
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection