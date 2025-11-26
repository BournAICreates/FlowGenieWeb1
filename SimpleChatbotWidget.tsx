'use client'

import { useEffect } from 'react'

export default function SimpleChatbotWidget() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Create and inject the script
    const script = document.createElement('script')
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'
    script.type = 'module'
    script.async = true
    document.head.appendChild(script)

    // Create the chatbot element after script loads
    script.onload = () => {
      // Wait a bit for the custom element to be defined
      setTimeout(() => {
        const chatbotElement = document.createElement('zapier-interfaces-chatbot-embed')
        chatbotElement.setAttribute('is-popup', 'true')
        chatbotElement.setAttribute('chatbot-id', 'cmh7z95sq0008drsna1r6xd6f')
        document.body.appendChild(chatbotElement)
      }, 1000)
    }

    // Cleanup function
    return () => {
      const existingWidget = document.querySelector('zapier-interfaces-chatbot-embed')
      if (existingWidget) {
        existingWidget.remove()
      }
    }
  }, [])

  return null
}
