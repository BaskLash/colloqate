'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './animated-section'
import { Clock } from 'lucide-react'

export function CollabSection() {
  return (
    <section className="py-28 bg-card">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-8">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Limited Availability</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Convoy <span className="text-muted-foreground">X</span> Colloqate
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Temporary. Intensive. Closing soon.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <motion.div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl border border-border bg-secondary/50"
            whileHover={{ borderColor: 'var(--accent)' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">Spots remaining</span>
            </div>
            <span className="font-serif text-2xl">12</span>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
