import { motion } from 'framer-motion'
import { getWhatsAppLink } from '../config/whatsapp'

const Hero = () => {
  const handleOrderClick = () => {
    window.open(getWhatsAppLink('¡Hola! Quiero ordenar una gorra KROWN'), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20" />

      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 text-shadow">
              Eleva tu{' '}
              <span className="gradient-text">ESTILO</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Gorras premium diseñadas para quienes buscan calidad y distinción en cada detalle
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOrderClick}
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 w-full sm:w-auto"
            >
              Ordenar Ahora
            </motion.button>

            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 hover:border-primary-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 w-full sm:w-auto"
            >
              Ver Colección
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20"
          >
            <div className="flex justify-center gap-12 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-400 mt-2">Calidad Premium</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">100+</div>
                <div className="text-sm text-gray-400 mt-2">Clientes Felices</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-gray-400 mt-2">Atención</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero
