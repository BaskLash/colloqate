'use client'

import { motion } from 'framer-motion'
import { trackButtonClick } from '@/lib/analytics'
import { AnimatedSection } from './animated-section'

export function CTASection() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">
            You already know if this is for you.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Stop consuming. Start becoming.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => trackButtonClick('request_access')}
              className="px-10 py-4 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium"
            >
              Request Access
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => trackButtonClick('start_now')}
              className="px-10 py-4 rounded-full border border-border hover:bg-secondary transition-colors font-medium"
            >
              Start Now
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
