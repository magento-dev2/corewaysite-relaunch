"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    category: 'AI & Machine Learning',
    title: 'How AI is Transforming Business Process Automation',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way businesses automate their workflows and increase productivity.',
    author: 'Sarah Chen',
    date: 'Nov 10, 2025',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 2,
    category: 'Cloud Solutions',
    title: 'AWS vs Azure: Choosing the Right Cloud Platform',
    excerpt: 'A comprehensive comparison of leading cloud platforms to help you make informed decisions for your infrastructure.',
    author: 'Mike Johnson',
    date: 'Nov 8, 2025',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 3,
    category: 'IoT Development',
    title: 'Building Scalable IoT Solutions for Manufacturing',
    excerpt: 'Learn best practices for developing robust IoT applications that can handle millions of connected devices.',
    author: 'Emma Williams',
    date: 'Nov 5, 2025',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 4,
    category: 'E-commerce',
    title: 'The Future of Digital Commerce in 2025',
    excerpt: 'Explore emerging trends and technologies shaping the future of online shopping experiences.',
    author: 'David Park',
    date: 'Nov 3, 2025',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  }
];

export default function BlogSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const featured = featuredRef.current;
    const cards = cardsRef.current;

    if (!section || !header) return;

    gsap.from(header, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });

    if (featured) {
      gsap.from(featured, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: featured,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });
    }

    cards.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          opacity: 0,
          y: 80,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Latest Insights
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            From Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from our team of experts
          </p>
        </div>

        {featuredPost && (
          <div
            ref={featuredRef}
            className="mb-12 group cursor-pointer"
          >
            <Link href={`/blog/${featuredPost.id}`}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${featuredPost.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
                  </div>

                  <div className="p-10 lg:p-12 flex flex-col justify-center relative z-10">
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold mb-4 w-fit">
                      {featuredPost.category}
                    </span>

                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {featuredPost.title}
                    </h3>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="font-medium text-white">{featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-4 transition-all duration-300">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>

                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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
