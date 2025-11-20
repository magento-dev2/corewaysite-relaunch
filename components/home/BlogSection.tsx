"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t } = useLanguage();
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
    autoAlpha: 1,   // FIXED
    y: 80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(featured, {
    autoAlpha: 1,   // FIXED
    // x: 80,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: featured,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  cards.forEach((card, index) => {
    gsap.from(card, {
      autoAlpha: 1,   // FIXED
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
  });

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);


  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section ref={sectionRef} className="pb-6 px-6 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative ">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <span className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 rounded-full text-sm font-medium mb-4">
            {t('blog.badge')}
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
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
            <Link href={`/blog/${featuredPost.id}`}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 shadow-2xl shadow-slate-900/20">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${featuredPost.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent" />
                  </div>

                  <div className="p-10 lg:p-12 flex flex-col justify-center relative z-10">
                    <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-semibold mb-4 w-fit border border-slate-600">
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
              <Link href={`/blog/${post.id}`}>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-500 border border-slate-700/50 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-slate-800/90 backdrop-blur-sm text-slate-300 rounded-full text-xs font-semibold border border-slate-700">
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-full font-semibold border border-slate-700 hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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
