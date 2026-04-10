'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BlogPost } from '@/lib/blog'
import { trackBlogClick } from '@/lib/analytics'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      onClick={() => trackBlogClick(post.slug, post.title)}
    >
      <motion.article
        className="group p-6 rounded-2xl border border-border hover:border-muted-foreground transition-colors bg-card"
        whileHover={{ x: 8 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
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
            
            <h2 className="font-serif text-xl md:text-2xl mb-3 group-hover:text-foreground transition-colors">
              {post.title}
            </h2>
            
            <p className="text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>
          </div>
          
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors mt-1 flex-shrink-0" />
        </div>
      </motion.article>
    </Link>
  )
}
