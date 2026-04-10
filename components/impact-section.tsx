'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './animated-section'

const statements = [
  'Still watching meaningless lectures?',
  'Still pretending this path makes sense?',
  'Still wasting time you\'ll never get back?',
]

export function ImpactSection() {
  return (
    <section className="py-28 bg-card">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8 mb-16">
          {statements.map((statement, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl font-serif text-muted-foreground"
                whileHover={{ color: 'var(--foreground)', x: 10 }}
                transition={{ duration: 0.3 }}
              >
                {statement}
              </motion.p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <p className="text-xl md:text-2xl font-medium text-foreground">
            Don&apos;t waste another hour. Start now.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
