import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { BlogCard } from '@/components/blog-card'
import { AnimatedSection } from '@/components/animated-section'
import { ScrollTracker } from '@/components/scroll-tracker'

export const metadata: Metadata = {
  title: 'Blog - Colloqate',
  description: 'Insights on transformation, execution, and becoming exceptional.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollTracker />
      <Nav />
      
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-28">
        <AnimatedSection>
          <Link 
            href="/" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            ← Back to Home
          </Link>
          
          <h1 className="font-serif text-4xl md:text-5xl mb-6">
            Insights
          </h1>
          
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            Thoughts on mindset, transformation, and why most paths lead nowhere.
          </p>
        </AnimatedSection>
        
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
              <BlogCard post={post} />
            </AnimatedSection>
          ))}
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
