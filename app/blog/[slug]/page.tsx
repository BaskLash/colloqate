import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { ScrollTracker } from '@/components/scroll-tracker'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Colloqate',
    }
  }

  return {
    title: `${post.title} - Colloqate`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <ScrollTracker />
      <Nav />
      
      <article className="max-w-3xl mx-auto px-6 pt-20 pb-28">
        <AnimatedSection>
          <Link 
            href="/blog" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            ← Back to Blog
          </Link>
          
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-balance">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {post.excerpt}
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-serif prose-headings:font-normal
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-foreground prose-strong:font-medium
              prose-a:text-foreground prose-a:underline prose-a:underline-offset-4
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <div className="mt-16 pt-8 border-t border-border">
            <Link 
              href="/blog"
              className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
            >
              ← Read more insights
            </Link>
          </div>
        </AnimatedSection>
      </article>
      
      <Footer />
    </main>
  )
}
