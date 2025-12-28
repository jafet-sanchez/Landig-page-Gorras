import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getWhatsAppLink } from '../config/whatsapp'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleContactClick = () => {
    window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-display font-bold cursor-pointer"
          >
            <span className="gradient-text">KROWN</span>
          </motion.div>
        </Link>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContactClick}
          className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
        >
          Contactar
        </motion.button>
      </nav>
    </motion.header>
  )
}

export default Header
