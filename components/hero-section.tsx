'use client'

import { motion } from 'framer-motion'
import { trackButtonClick } from '@/lib/analytics'
import { AnimatedSection } from './animated-section'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30"
          animate={{
            background: [
              'radial-gradient(ellipse at 20% 20%, rgba(30,30,40,0.8) 0%, transparent 50%)',
              'radial-gradient(ellipse at 80% 80%, rgba(30,30,40,0.8) 0%, transparent 50%)',
              'radial-gradient(ellipse at 20% 80%, rgba(30,30,40,0.8) 0%, transparent 50%)',
              'radial-gradient(ellipse at 80% 20%, rgba(30,30,40,0.8) 0%, transparent 50%)',
              'radial-gradient(ellipse at 20% 20%, rgba(30,30,40,0.8) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 text-balance">
            You don&apos;t want success.
            <br />
            <span className="text-muted-foreground">You need it.</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty">
            There&apos;s a reason you&apos;re here. Most people ignore it. That&apos;s why they stay average.
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
