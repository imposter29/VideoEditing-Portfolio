import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'

// Layouts
import Layout from './components/layout/Layout'

// Pages
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Styles
import './styles/App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-content">
          <div className="loader-logo"></div>
          <div className="loader-bar"></div>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:id" element={<ProjectDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App