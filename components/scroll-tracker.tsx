'use client'

import { useEffect, useRef } from 'react'
import { trackScrollDepth } from '@/lib/analytics'

export function ScrollTracker() {
  const tracked = useRef<Set<number>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const scrollPercentage = Math.round((scrollPosition / scrollHeight) * 100)

      const thresholds = [25, 50, 75, 100]
      
      thresholds.forEach(threshold => {
        if (scrollPercentage >= threshold && !tracked.current.has(threshold)) {
          tracked.current.add(threshold)
          trackScrollDepth(threshold)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}
