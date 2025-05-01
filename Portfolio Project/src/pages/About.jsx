import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '../components/ui/Button'

const About = () => {
  const { ref: bioRef, inView: bioInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const skills = [
    { name: 'Adobe Premiere Pro', level: 95 },
    { name: 'DaVinci Resolve', level: 90 },
    { name: 'After Effects', level: 85 },
    { name: 'Final Cut Pro', level: 80 },
    { name: 'Color Grading', level: 85 },
    { name: 'Sound Design', level: 75 }
  ]
  
  const process = [
    {
      title: 'Discovery',
      description: 'Understanding your vision, goals, and audience to create a tailored editing approach.'
    },
    {
      title: 'Planning',
      description: 'Organizing footage, creating an editing roadmap, and establishing the visual style.'
    },
    {
      title: 'Editing',
      description: 'Crafting the narrative through precise cuts, transitions, and pacing adjustments.'
    },
    {
      title: 'Refinement',
      description: 'Applying color grading, motion graphics, and sound design to enhance the final product.'
    }
  ]
  
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-gray-300">
              A passionate video editor with a keen eye for detail and storytelling.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Bio Section */}
      <motion.section
        ref={bioRef}
        className="py-16 bg-white dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={bioInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={bioInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3379240/pexels-photo-3379240.jpeg" 
                  alt="Video Editor" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={bioInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Crafting Visual Stories That Resonate
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  With over 7 years of experience in video editing and post-production, I've developed a deep understanding of visual storytelling and the technical skills to bring creative visions to life.
                </p>
                <p>
                  My journey began with a passion for filmmaking and has evolved through work with clients ranging from small businesses to major brands. I specialize in creating engaging, emotionally resonant content that captivates audiences.
                </p>
                <p>
                  Whether you need a commercial that converts, a documentary that educates, or a music video that mesmerizes, I bring the technical expertise and creative vision to exceed your expectations.
                </p>
              </div>
              
              <div className="mt-8">
                <Button to="/contact">Get in Touch</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        className="py-16 bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0 }}
        animate={skillsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Proficient in industry-standard software and post-production techniques.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Process Section */}
      <motion.section
        ref={processRef}
        className="py-16 bg-white dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={processInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              My Process
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A structured approach to video editing that ensures quality and client satisfaction.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  {index < process.length - 1 && (
                    <div className="ml-4 flex-grow hidden md:block h-0.5 bg-gray-200 dark:bg-gray-700" />
                  )}
                </div>
                <div className="pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-blue-100 mb-8">
              Let's create something amazing together. Contact me to discuss your video editing needs.
            </p>
            <Button to="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About