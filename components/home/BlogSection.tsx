"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string | null;
  createdAt: string;
  // Add other DB fields if needed, but these seem to be what we have
}

interface UIBlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  slug: string;
}

export default function BlogSection() {
  const { t } = useLanguage();
  const [posts, setPosts] = useState<UIBlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data: BlogPost[] = await response.json();

        // Map DB data to UI data
        const mappedPosts: UIBlogPost[] = data.map((blog, index) => ({
          id: blog.id,
          category: 'Insights', // Default category
          title: blog.title,
          slug: blog.slug,
          excerpt: blog.excerpt || 'No excerpt available',
          author: 'Coreway Team', // Default author
          date: new Date(blog.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          }),
          readTime: '5 min read', // Default read time
          image: blog.coverImage || 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800', // Default image
          featured: index === 0, // First item is featured
        })).slice(0, 4); // Limit to 4 posts

        setPosts(mappedPosts);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Animations
  useEffect(() => {
    if (loading || posts.length === 0) return;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const section = sectionRef.current;
      const header = headerRef.current;
      const featured = featuredRef.current;
      const cards = cardsRef.current;

      if (!section || !header) return;

      // Clear any previous ScrollTriggers to avoid duplicates on re-renders
      ScrollTrigger.getAll().forEach(trigger => {
        // We could be more selective here, but for this component, cleaning all might refer to global ones. 
        // Better to let gsap.context handle cleanup if possible, but existing code used getAll().kill().
        // Let's use gsap.context for safety.
      });

      const ctx = gsap.context(() => {
        gsap.from(header, {
          autoAlpha: 1,
          y: 80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });

        if (featured) {
          gsap.from(featured, {
            autoAlpha: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featured,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          });
        }

        cards.forEach((card, index) => {
          if (card) {
            gsap.from(card, {
              autoAlpha: 1,
              y: 80,
              duration: 0.8,
              delay: index * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }, sectionRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [loading, posts]);


  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  if (loading) {
    // Simple loading state or return null to avoid layout shift if possible, 
    // but a skeleton or height placeholder is better.
    // For now, keeping the section structure to maintain layout.
    return (
      <section className="pb-6 px-6 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03),transparent_70%)] pointer-events-none" />
        <div className="text-white/50 animate-pulse">Loading insights...</div>
      </section>
    )
  }

  // If no posts, hide section or show empty state? 
  // User asked for dynamic set, if empty, maybe hide or show standard empty.
  if (posts.length === 0) {
    return null; // Or return an empty fragment
  }

  return (
    <section ref={sectionRef} className="pb-6 px-6 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative ">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <span className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 rounded-full text-sm font-medium mb-4">
            <div className='flex items-center gap-1'>
              <Sparkles className="text-purple-500" size={16} />

              {t('blog.badge')}
            </div>

          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from our team of experts
          </p>
        </div>

        {featuredPost && (
          <div
            ref={featuredRef}
            className=" mt-24 group cursor-pointer"
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:bg-white/10">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${featuredPost.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent" />
                  </div>

                  <div className=" lg:p-12 flex flex-col justify-center relative z-10">
                    <span className="inline-block px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50 rounded-full text-xs font-semibold mb-4 w-fit">
                      {featuredPost.category}
                    </span>

                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-slate-200 transition-colors duration-300">
                      {featuredPost.title}
                    </h3>

                    <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span className="font-medium text-white">{featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 text-slate-300 font-semibold group-hover:gap-4 transition-all duration-300">
                      Read Article
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8">
          {regularPosts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl  transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:bg-white/10">
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50 rounded-full text-xs font-semibold  w-fit">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-slate-200 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 font-semibold text-sm border border-slate-600">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-300">{post.author}</p>
                          <p className="text-xs text-slate-500">{post.date}</p>
                        </div>
                      </div>

                      <span className="text-xs text-slate-500">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-24 ">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg font-medium"
          >
            View All Articles
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
