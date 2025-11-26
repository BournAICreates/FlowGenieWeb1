'use client'

import { useEffect } from 'react'

export default function HydrationFix() {
  useEffect(() => {
    // Remove Grammarly attributes that cause hydration warnings
    const removeGrammarlyAttributes = () => {
      const body = document.body
      if (body) {
        body.removeAttribute('data-new-gr-c-s-check-loaded')
        body.removeAttribute('data-gr-ext-installed')
      }
    }

    // Run immediately and after a short delay
    removeGrammarlyAttributes()
    setTimeout(removeGrammarlyAttributes, 100)
    setTimeout(removeGrammarlyAttributes, 500)
  }, [])

  return null
}
