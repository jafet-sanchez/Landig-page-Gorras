import { useEffect, useRef, useState } from 'react'

/**
 * FuzzyText - Animated text component with fuzzy/glitch effect
 * Inspired by React Bits fuzzy-text animation
 *
 * @param {string} text - The text to display
 * @param {number} baseIntensity - Base fuzzy intensity (0-1, default: 0.05)
 * @param {number} hoverIntensity - Hover fuzzy intensity (0-1, default: 0.15)
 * @param {string} className - Additional CSS classes
 * @param {string} fontSize - Font size (default: '4rem')
 * @param {string} fontWeight - Font weight (default: '700')
 * @param {string} color - Text color (default: '#ffffff')
 */
const FuzzyText = ({
  text = 'Error 404',
  baseIntensity = 0.05,
  hoverIntensity = 0.15,
  className = '',
  fontSize = '4rem',
  fontWeight = '700',
  color = '#ffffff'
}) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    // Configurar el tamaño del canvas
    const setupCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    setupCanvas()

    // Función para aplicar el efecto fuzzy
    const applyFuzzyEffect = (imageData, intensity) => {
      const { data, width, height } = imageData
      const sliceHeight = 1 // Altura de cada slice horizontal

      for (let y = 0; y < height; y += sliceHeight) {
        // Desplazamiento aleatorio horizontal para cada slice
        const offset = Math.floor((Math.random() - 0.5) * width * intensity)

        if (offset !== 0) {
          const row = y * width * 4
          const tempRow = new Uint8ClampedArray(width * 4)

          // Copiar la fila actual
          for (let x = 0; x < width * 4; x++) {
            tempRow[x] = data[row + x]
          }

          // Aplicar el desplazamiento
          for (let x = 0; x < width; x++) {
            const sourceX = (x - offset + width) % width
            const targetPos = row + x * 4
            const sourcePos = row + sourceX * 4

            data[targetPos] = tempRow[sourcePos]
            data[targetPos + 1] = tempRow[sourcePos + 1]
            data[targetPos + 2] = tempRow[sourcePos + 2]
            data[targetPos + 3] = tempRow[sourcePos + 3]
          }
        }
      }

      return imageData
    }

    // Función de renderizado
    const render = () => {
      const rect = canvas.getBoundingClientRect()
      const displayWidth = rect.width
      const displayHeight = rect.height

      // Limpiar canvas
      ctx.clearRect(0, 0, displayWidth, displayHeight)

      // Configurar texto
      ctx.font = `${fontWeight} ${fontSize} Arial, sans-serif`
      ctx.fillStyle = color
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      // Dibujar texto base
      ctx.fillText(text, displayWidth / 2, displayHeight / 2)

      // Obtener imagen del canvas
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

      // Aplicar efecto fuzzy
      const currentIntensity = isHovered ? hoverIntensity : baseIntensity
      const fuzziedData = applyFuzzyEffect(imageData, currentIntensity)

      // Redibujar con efecto
      ctx.clearRect(0, 0, displayWidth, displayHeight)
      ctx.putImageData(fuzziedData, 0, 0)

      // Continuar animación
      animationRef.current = requestAnimationFrame(render)
    }

    // Iniciar animación
    render()

    // Manejar redimensionamiento
    const handleResize = () => {
      setupCanvas()
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [text, baseIntensity, hoverIntensity, isHovered, fontSize, fontWeight, color])

  return (
    <canvas
      ref={canvasRef}
      className={`fuzzy-text ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        height: '200px',
        cursor: 'pointer',
      }}
    />
  )
}

export default FuzzyText
