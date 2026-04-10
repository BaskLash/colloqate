'use client'

import Link from 'next/link'
import { trackButtonClick } from '@/lib/analytics'
import { AnimatedSection } from './animated-section'

export function Nav() {
  return (
    <AnimatedSection>
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="font-serif text-xl tracking-wide">
          Colloqate
        </Link>
        <div className="flex items-center gap-4">
          <Link 
            href="/blog" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <button 
            onClick={() => trackButtonClick('request_access')}
            className="border border-border px-5 py-2 rounded-full hover:bg-secondary transition-colors text-sm"
          >
            Request Access
          </button>
        </div>
      </nav>
    </AnimatedSection>
  )
}
