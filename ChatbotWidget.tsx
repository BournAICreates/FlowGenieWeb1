'use client'

import { useEffect, useState } from 'react'

export default function ChatbotWidget() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    const loadZapierWidget = async () => {
      try {
        // Check if the custom element is already defined
        if (customElements.get('zapier-interfaces-chatbot-embed')) {
          setIsLoaded(true)
          return
        }

        // Load the script
        const script = document.createElement('script')
        script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'
        script.type = 'module'
        script.async = true
        
        script.onload = () => {
          // Wait for custom element to be defined
          const checkElement = () => {
            if (customElements.get('zapier-interfaces-chatbot-embed')) {
              setIsLoaded(true)
            } else {
              setTimeout(checkElement, 100)
            }
          }
          checkElement()
        }

        script.onerror = () => {
          setError('Failed to load Zapier widget script')
        }

        document.head.appendChild(script)
      } catch (err) {
        setError('Error loading Zapier widget')
        console.error('Zapier widget error:', err)
      }
    }

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(loadZapierWidget, 100)
    
    return () => clearTimeout(timer)
  }, [])

  // Don't render anything on server side
  if (typeof window === 'undefined') {
    return null
  }

  if (error) {
    console.error('Zapier widget error:', error)
    return null
  }

  if (!isLoaded) {
    return null
  }

  return (
    <zapier-interfaces-chatbot-embed 
      is-popup='true' 
      chatbot-id='cmh7z95sq0008drsna1r6xd6f'
    />
  )
}
