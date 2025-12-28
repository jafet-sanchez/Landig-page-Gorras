import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          {/* Animated 404 SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <svg
              className="w-full max-w-md mx-auto"
              viewBox="0 0 400 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Number 4 */}
              <motion.path
                d="M40 50 V110 H100 M100 50 V150"
                stroke="url(#gradient1)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Number 0 */}
              <motion.circle
                cx="200"
                cy="100"
                r="50"
                stroke="url(#gradient2)"
                strokeWidth="8"
                fill="none"
                initial={{ pathLength: 0, rotate: -90 }}
                animate={{ pathLength: 1, rotate: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{ originX: "200px", originY: "100px" }}
              />

              {/* Number 4 */}
              <motion.path
                d="M260 50 V110 H320 M320 50 V150"
                stroke="url(#gradient3)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
              />

              {/* Gradient definitions */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Floating animation for the crown icon */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mb-6"
          >
            <svg
              className="w-16 h-16 mx-auto text-primary-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L15 9L22 9.5L17 14.5L18.5 22L12 18L5.5 22L7 14.5L2 9.5L9 9L12 2Z" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-black mb-4">
              Página{' '}
              <span className="gradient-text">No Encontrada</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/#Header"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 inline-block"
              >
                Volver al Inicio
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/#gallery"
                className="border-2 border-white/30 hover:border-primary-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-block"
              >
                Ver Colección
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
