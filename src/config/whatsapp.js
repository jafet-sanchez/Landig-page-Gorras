// WhatsApp configuration
export const WHATSAPP_CONFIG = {
  phoneNumber: '573018100766',

  // Mensaje predeterminado cuando alguien hace clic en el botón
  defaultMessage: '¡Hola! Estoy interesado en las gorras KROWN. Me gustaría saber más información.',
}

// Función para generar el enlace de WhatsApp
export const getWhatsAppLink = (customMessage = '') => {
  const message = customMessage || WHATSAPP_CONFIG.defaultMessage
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`
}
