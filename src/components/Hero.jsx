import { motion } from 'framer-motion'
import { memo, useCallback } from 'react'
import { getWhatsAppLink } from '../config/whatsapp'
import Antigravity from './Antigravity'

const Hero = () => {
  const handleOrderClick = useCallback(() => {
    window.open(getWhatsAppLink('¡Hola! Quiero ordenar una gorra KROWN'), '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20" />

      <div className="absolute inset-0 pointer-events-none">
        <Antigravity
          color="#ef4444"
          count={120}
          magnetRadius={12}
          ringRadius={8}
          particleSize={1.5}
          autoAnimate={true}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 text-shadow">
              Eleva tu{' '}
              <motion.span
                className="gradient-text inline-block"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ESTILO
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Gorras premium diseñadas para quienes buscan calidad y distinción en cada detalle
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 25px rgba(239, 68, 68, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 40px rgba(239, 68, 68, 0.3)",
                  "0 10px 60px rgba(239, 68, 68, 0.5)",
                  "0 10px 40px rgba(239, 68, 68, 0.3)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              onClick={handleOrderClick}
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-10 py-4 rounded-full font-bold text-lg w-full sm:w-auto"
            >
              Ordenar Ahora
            </motion.button>

            <motion.a
              href="#gallery"
              whileHover={{
                scale: 1.1,
                borderColor: "rgba(239, 68, 68, 1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 hover:border-primary-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 w-full sm:w-auto"
            >
              Ver Colección
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="mt-20"
          >
            <div className="flex justify-center gap-12 text-center">
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-400 mt-2">Calidad Premium</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold gradient-text">100+</div>
                <div className="text-sm text-gray-400 mt-2">Clientes Felices</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-gray-400 mt-2">Atención</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, 15, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <motion.svg
          whileHover={{ scale: 1.2 }}
          className="w-8 h-8 text-white drop-shadow-lg"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </motion.svg>
      </motion.div>
    </section>
  )
}

// Wrap with React.memo to prevent unnecessary re-renders
export default memo(Hero)
