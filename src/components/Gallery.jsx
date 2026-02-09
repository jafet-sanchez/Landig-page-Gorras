import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useRef, memo, useEffect } from 'react'
import { getWhatsAppLink } from '../config/whatsapp'

// Gorras disponibles de Barbas Hats con todas sus imágenes
const products = [
  {
    id: 1,
    name: 'BARBAS HATS X CT "THREE STARS" G5',
    mainImage: '/images/1.webp',
    images: [
      '/images/1.webp',
      '/images/2.webp',
      '/images/3.webp',
      '/images/4.webp',
      '/images/6.webp',
    ],
    price: '$200.000',
  },
  {
    id: 2,
    name: 'BARBAS HATS X CT "GALAXY CT" G5',
    mainImage: '/images/barbas1.webp',
    images: [
      '/images/barbas1.webp',
      '/images/barbas2.webp',
      '/images/barbas3.webp',
      '/images/barbas4.webp',
      '/images/barbas5.webp',
      '/images/barbas6.webp',
      '/images/barbas7.webp',
      '/images/barbas8.webp',
      '/images/barbas9.jpg',
      '/images/CTGALAXY_--BARBASHATSxCTT.webp',
    ],
    price: '$200.000',
  },
  {
    id: 3,
    name: 'BARBAS HATS X CT "CHROME CT" G5',
    mainImage: '/images/barbascruz.webp',
    images: [
      '/images/barbascruz2.webp',
      '/images/barbascruz3.webp',
      '/images/barbascruz4.webp',
      '/images/barbascruz5.webp',
    ],
    price: '$200.000',
  },
  {
    id: 4,
    name: 'BARBAS HATS X CT "ORIENTAL TUMBADO" G5',
    mainImage: '/images/11.webp',
    images: [
      '/images/12.webp',
      '/images/13.webp',
      '/images/14.webp',
      '/images/15.webp',
      '/images/16.webp',
    ],
    price: '$200.000',
  },
  {
    id: 5,
    name: 'BARBAS HATS X CT Barbas "GRAFFITI" G5',
    mainImage: '/images/BarbasGraffiti (1).webp',
    images: [
      '/images/BarbasGraffiti (1).webp',
      '/images/BarbasGraffiti (2).webp',
      '/images/BarbasGraffiti (3).webp',
      '/images/BarbasGraffiti (4).webp',
      '/images/BarbasGraffiti (5).webp',
      '/images/BarbasGraffiti (6).webp',
    ],
    price: '$185.000',
  },
]

const Gallery = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const imageRef = useRef(null)
  const rafRef = useRef(null)

  // useCallback to prevent recreating functions on every render
  const handleProductClick = useCallback((product) => {
    setSelectedProduct(product)
    setCurrentImageIndex(0)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null)
    setCurrentImageIndex(0)
  }, [])

  const handleNextImage = useCallback(() => {
    if (selectedProduct) {
      setIsZoomed(false)
      setCurrentImageIndex((prev) =>
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      )
    }
  }, [selectedProduct])

  const handlePrevImage = useCallback(() => {
    if (selectedProduct) {
      setIsZoomed(false)
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      )
    }
  }, [selectedProduct])

  const handleWhatsAppClick = useCallback(() => {
    if (selectedProduct) {
      const message = `¡Hola! Estoy interesado en la ${selectedProduct.name}. ¿Podrías darme más información?`
      window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer')
    }
  }, [selectedProduct])

  // Optimized mouse move handler using requestAnimationFrame and CSS variables
  const handleMouseMove = useCallback((e) => {
    // Capture event values immediately before React recycles the synthetic event
    const currentTarget = e.currentTarget
    const clientX = e.clientX
    const clientY = e.clientY

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = requestAnimationFrame(() => {
      if (imageRef.current && currentTarget) {
        const rect = currentTarget.getBoundingClientRect()
        const x = ((clientX - rect.left) / rect.width) * 100
        const y = ((clientY - rect.top) / rect.height) * 100
        imageRef.current.style.setProperty('--zoom-x', `${x}%`)
        imageRef.current.style.setProperty('--zoom-y', `${y}%`)
      }
    })
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsZoomed(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsZoomed(false)
  }, [])

  // Cleanup animation frame on image change or unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [currentImageIndex])

  return (
    <section id="gallery" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Disponible <span className="gradient-text">Barbas x Ct Natanel Cano</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explora nuestra selección de gorras premium diseñadas Calidad G5
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              {/* Contenedor del producto - sin recuadro */}
              <div className="relative">
                {/* Imagen del producto */}
                <div className="aspect-square relative overflow-hidden mb-4">
                  <motion.img
                    src={product.mainImage}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    style={{
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                    }}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%232a2a2a" width="400" height="400"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EAgrega tu imagen%3C/text%3E%3C/svg%3E'
                    }}
                  />

                  {/* Badge de nuevo - más discreto */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.1 + 0.3
                    }}
                    className="absolute top-2 right-2 bg-primary-500 text-white px-3 py-1 text-xs font-semibold"
                  >
                    NUEVO
                  </motion.div>
                </div>

                {/* Información del producto */}
                <div className="space-y-2">
                  <h3 className="text-base font-medium group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold gradient-text">
                      {product.price}
                    </span>
                    <motion.button
                      whileHover={{
                        scale: 1.05
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 text-sm font-semibold transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleProductClick(product)
                      }}
                    >
                      Ver
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de Galería */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/90"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="relative w-full max-w-6xl bg-dark-800 rounded-2xl overflow-hidden border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Botón cerrar */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-dark-900/80 hover:bg-primary-500 rounded-full text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                <div className="grid md:grid-cols-2 gap-0 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
                  {/* Galería de imágenes */}
                  <div className="relative bg-gradient-to-br from-dark-700 to-dark-800">
                    {/* Imagen principal */}
                    <div
                      className="aspect-square md:aspect-square relative overflow-hidden min-h-[300px] max-h-[50vh] md:max-h-none"
                      style={{ cursor: isZoomed ? 'zoom-out' : 'zoom-in' }}
                      onMouseMove={handleMouseMove}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <AnimatePresence mode="wait">
                        <motion.img
                          ref={imageRef}
                          key={currentImageIndex}
                          src={selectedProduct.images[currentImageIndex]}
                          alt={`${selectedProduct.name} - ${currentImageIndex + 1}`}
                          loading="eager"
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            scale: isZoomed ? 2 : 1
                          }}
                          exit={{ opacity: 0 }}
                          transition={{
                            opacity: { duration: 0.15 },
                            scale: { duration: 0.15, ease: "easeOut" }
                          }}
                          style={{
                            '--zoom-x': '50%',
                            '--zoom-y': '50%',
                            transformOrigin: 'var(--zoom-x) var(--zoom-y)',
                            willChange: isZoomed ? 'transform' : 'auto',
                            transform: 'translateZ(0)'
                          }}
                        />
                      </AnimatePresence>

                      {/* Botones de navegación */}
                      {selectedProduct.images.length > 1 && (
                        <>
                          <motion.button
                            whileHover={{ scale: 1.1, x: -4 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handlePrevImage}
                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-dark-900/80 hover:bg-primary-500 rounded-full text-white transition-colors"
                          >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </motion.button>

                          <motion.button
                            whileHover={{ scale: 1.1, x: 4 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleNextImage}
                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-dark-900/80 hover:bg-primary-500 rounded-full text-white transition-colors"
                          >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.button>
                        </>
                      )}

                      {/* Indicador de imagen */}
                      <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-dark-900/80 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-white text-xs md:text-sm font-semibold">
                        {currentImageIndex + 1} / {selectedProduct.images.length}
                      </div>
                    </div>

                    {/* Miniaturas */}
                    <div className="p-2 md:p-4 flex gap-2 overflow-x-auto scrollbar-hide">
                      {selectedProduct.images.map((image, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                            index === currentImageIndex
                              ? 'border-primary-500'
                              : 'border-white/20 hover:border-white/40'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Miniatura ${index + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Información del producto */}
                  <div className="p-4 md:p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
                        {selectedProduct.name}
                      </h2>

                      <div className="mb-4 md:mb-8">
                        <span className="text-2xl md:text-4xl font-bold gradient-text">
                          {selectedProduct.price}
                        </span>
                      </div>

                      <div className="space-y-3 md:space-y-4 text-gray-300">
                        <p className="text-sm md:text-lg">
                          Gorra premium de edición limitada Barbas Hats x CT.
                        </p>
                        <ul className="space-y-2 text-sm md:text-base">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                            Diseño exclusivo
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                            Materiales de alta calidad
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                            Ajuste perfecto
                          </li>
                        </ul>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleWhatsAppClick}
                      className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-lg shadow-primary-500/30 transition-colors"
                    >
                      Ordenar por WhatsApp
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}


export default memo(Gallery)
