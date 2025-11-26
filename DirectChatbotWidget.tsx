'use client'

import { useEffect } from 'react'

export default function DirectChatbotWidget() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Set Chipp Chat configuration
    if (!window.CHIPP_APP_URL) {
      window.CHIPP_APP_URL = "https://flowy-10030118.chipp.ai"
      window.CHIPP_APP_ID = 10030118
    }

    // Load Chipp Chat CSS
    const loadCSS = () => {
      const existingCSS = document.querySelector('link[href*="chipp-chat-widget-assets"]')
      if (existingCSS) return

      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.css'
      document.head.appendChild(link)
    }

    // Load Chipp Chat JS
    const loadJS = () => {
      const existingJS = document.querySelector('script[src*="chipp-chat-widget-assets"]')
      if (existingJS) return

      const script = document.createElement('script')
      script.src = 'https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.js'
      script.defer = true
      script.onload = () => {
        console.log('Chipp Chat widget loaded successfully')
      }
      script.onerror = (error) => {
        console.error('Failed to load Chipp Chat script:', error)
      }
      document.head.appendChild(script)
    }

    // Load both CSS and JS
    loadCSS()
    loadJS()
  }, [])

  return null
}
