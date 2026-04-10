'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './animated-section'
import { Quote, Users, Trophy, TrendingUp } from 'lucide-react'

const testimonials = [
  {
    quote: 'I thought success was about showing results. I was wrong. It\'s about becoming the person who produces them.',
    name: 'Marcus R.',
    role: 'Former Corporate Strategist',
  },
  {
    quote: 'I wasted years chasing the wrong signals. Colloqate showed me the difference between activity and progress.',
    name: 'Elena K.',
    role: 'Tech Founder',
  },
]

const achievements = [
  {
    icon: Users,
    stat: '700+',
    label: 'LinkedIn followers in less than a month',
  },
  {
    icon: Trophy,
    stat: 'First',
    label: 'marathon within a year',
  },
  {
    icon: TrendingUp,
    stat: '150+',
    label: 'active users in under 2 months',
  },
]

export function TestimonialSection() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-20">
            They stopped waiting. So did their results.
          </h2>
        </AnimatedSection>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="p-8 rounded-2xl border border-border bg-card"
                whileHover={{ borderColor: 'var(--muted-foreground)' }}
              >
                <Quote className="w-8 h-8 text-muted-foreground mb-6" />
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Achievements */}
        <AnimatedSection delay={0.3}>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-secondary/50"
                whileHover={{ y: -4 }}
              >
                <achievement.icon className="w-6 h-6 mx-auto mb-4 text-muted-foreground" />
                <p className="font-serif text-3xl mb-2">{achievement.stat}</p>
                <p className="text-sm text-muted-foreground">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
