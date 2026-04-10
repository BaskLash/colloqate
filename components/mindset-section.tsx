'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './animated-section'

const statements = [
  'Mindset is not motivation. It\'s direction.',
  'If you think you\'re on the wrong path — you\'re right.',
  'Stay average. Or prove you\'re not.',
]

export function MindsetSection() {
  return (
    <section className="py-28 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-12">
          {statements.map((statement, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                className="relative"
                whileHover={{ x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-foreground group-hover:h-full transition-all duration-300" />
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground pl-6 border-l-2 border-border hover:border-foreground transition-colors">
                  {statement}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
