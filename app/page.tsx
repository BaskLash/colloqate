import { Nav } from '@/components/nav'
import { HeroSection } from '@/components/hero-section'
import { ImpactSection } from '@/components/impact-section'
import { CourseSection } from '@/components/course-section'
import { CollabSection } from '@/components/collab-section'
import { TestimonialSection } from '@/components/testimonial-section'
import { MindsetSection } from '@/components/mindset-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { ScrollTracker } from '@/components/scroll-tracker'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollTracker />
      <Nav />
      <HeroSection />
      <ImpactSection />
      <CourseSection />
      <CollabSection />
      <TestimonialSection />
      <MindsetSection />
      <CTASection />
      <Footer />
    </main>
  )
}
