import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import ReactPlayer from 'react-player/lazy'

const VideoModal = ({ isOpen, videoUrl, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl z-10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full z-20 hover:bg-opacity-70 transition-all"
              onClick={onClose}
              aria-label="Close video"
            >
              <FiX size={20} />
            </button>
            
            <div className="aspect-video bg-black">
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="100%"
                controls
                playing
                config={{
                  youtube: {
                    playerVars: { autoplay: 1 }
                  },
                  vimeo: {
                    playerOptions: { autoplay: true }
                  }
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default VideoModal