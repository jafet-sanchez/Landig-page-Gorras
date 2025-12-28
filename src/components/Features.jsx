import { motion } from 'framer-motion'

// iconos SVG
const CrownIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15 8L21 9L16.5 13.5L18 20L12 16.5L6 20L7.5 13.5L3 9L9 8L12 2Z"
      fill="url(#crown-gradient)"
      stroke="url(#crown-gradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="crown-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333EA" />
        <stop offset="100%" stopColor="#C084FC" />
      </linearGradient>
    </defs>
  </svg>
)

const PaletteIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C13.1 22 14 21.1 14 20C14 19.5 13.82 19.04 13.53 18.68C13.24 18.32 13.08 17.88 13.08 17.4C13.08 16.3 13.98 15.4 15.08 15.4H17C19.76 15.4 22 13.16 22 10.4C22 5.65 17.51 2 12 2ZM7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12ZM10 8C9.45 8 9 7.55 9 7C9 6.45 9.45 6 10 6C10.55 6 11 6.45 11 7C11 7.55 10.55 8 10 8ZM14 8C13.45 8 13 7.55 13 7C13 6.45 13.45 6 14 6C14.55 6 15 6.45 15 7C15 7.55 14.55 8 14 8ZM17 12C16.45 12 16 11.55 16 11C16 10.45 16.45 10 17 10C17.55 10 18 10.45 18 11C18 11.55 17.55 12 17 12Z"
      fill="url(#palette-gradient)"
    />
    <defs>
      <linearGradient id="palette-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333EA" />
        <stop offset="100%" stopColor="#C084FC" />
      </linearGradient>
    </defs>
  </svg>
)

const BoltIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      fill="url(#bolt-gradient)"
      stroke="url(#bolt-gradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="bolt-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333EA" />
        <stop offset="100%" stopColor="#C084FC" />
      </linearGradient>
    </defs>
  </svg>
)

const SparklesIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 2L11 7L16 8.5L11 10L9.5 15L8 10L3 8.5L8 7L9.5 2Z"
      fill="url(#sparkles-gradient-1)"
      stroke="url(#sparkles-gradient-1)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 9L18.5 12L21.5 13L18.5 14L17.5 17L16.5 14L13.5 13L16.5 12L17.5 9Z"
      fill="url(#sparkles-gradient-2)"
      stroke="url(#sparkles-gradient-2)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="sparkles-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333EA" />
        <stop offset="100%" stopColor="#C084FC" />
      </linearGradient>
      <linearGradient id="sparkles-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9333EA" />
        <stop offset="100%" stopColor="#C084FC" />
      </linearGradient>
    </defs>
  </svg>
)

const features = [
  {
    icon: CrownIcon,
    title: 'Calidad Premium',
    description: 'Materiales de primera calidad seleccionados cuidadosamente para máxima durabilidad',
  },
  {
    icon: PaletteIcon,
    title: 'Diseño Único',
    description: 'Diseños exclusivos que destacan tu personalidad y estilo único',
  },
  {
    icon: BoltIcon,
    title: 'Confort Superior',
    description: 'Ajuste perfecto y comodidad excepcional para uso durante todo el día',
  },
  {
    icon: SparklesIcon,
    title: 'Acabado Impecable',
    description: 'Atención al detalle en cada puntada y terminación',
  },
]

const Features = () => {
  return (
    <section id="Header" className="py-20 bg-dark-800/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            ¿Por qué elegir <span className="gradient-text">KROWN</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada gorra KROWN es una declaración de estilo y calidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-dark-700/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary-500/50 transition-all duration-300"
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
