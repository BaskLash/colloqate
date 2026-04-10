'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './animated-section'
import { Zap, Target, Rocket } from 'lucide-react'

const tracks = [
  {
    name: 'Fast-Track Learner',
    icon: Zap,
    hoverMessage: 'Build skills so sharp people start noticing you instantly.',
    gradient: 'from-amber-900/20 to-background',
  },
  {
    name: 'Smart-Track Learner',
    icon: Target,
    hoverMessage: 'Create results that make others question their own progress.',
    gradient: 'from-emerald-900/20 to-background',
  },
  {
    name: 'Quick-Step Integrator',
    icon: Rocket,
    hoverMessage: 'Become someone who actually executes, not just consumes.',
    gradient: 'from-sky-900/20 to-background',
  },
]

export function CourseSection() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-20">
            Choose Your Path
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <AnimatedSection key={track.name} delay={index * 0.1}>
              <motion.div
                className={`relative h-80 rounded-2xl overflow-hidden bg-gradient-to-t ${track.gradient} border border-border group cursor-pointer`}
                whileHover={{ y: -8, borderColor: 'var(--foreground)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <track.icon className="w-12 h-12 mb-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <h3 className="font-serif text-xl mb-4">{track.name}</h3>
                  
                  {/* Default state - hidden on hover */}
                  <div className="absolute bottom-8 left-0 right-0 px-8 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="h-0.5 w-12 bg-border mx-auto" />
                  </div>

                  {/* Hover state - shown on hover */}
                  <motion.p
                    className="text-muted-foreground text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-8 left-8 right-8"
                    initial={{ y: 10 }}
                  >
                    {track.hoverMessage}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
