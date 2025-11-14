"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Clock, ArrowUpRight, TrendingUp } from 'lucide-react';

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
    featured: true,
    trending: true
  },
  {
    id: 2,
    category: 'Cloud Solutions',
    title: 'AWS vs Azure: Choosing the Right Cloud Platform',
    excerpt: 'A comprehensive comparison of leading cloud platforms to help you make informed decisions.',
    author: 'Mike Johnson',
    date: 'Nov 8, 2025',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    trending: false
  },
  {
    id: 3,
    category: 'IoT Development',
    title: 'Building Scalable IoT Solutions for Manufacturing',
    excerpt: 'Learn best practices for developing robust IoT applications that handle millions of devices.',
    author: 'Emma Williams',
    date: 'Nov 5, 2025',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    trending: true
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
    featured: false,
    trending: false
  }
];

export default function BlogSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI & Machine Learning', 'Cloud Solutions', 'IoT Development', 'E-commerce'];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.blog-card');

    cards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredPosts]);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-[#0E0918] via-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Latest Insights
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Insights & Innovations
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Expert perspectives on technology, innovation, and digital transformation
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-blue-500/50 hover:text-blue-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {featuredPost && (
          <Link href={`/blog/${featuredPost.id}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="blog-card group cursor-pointer mb-16"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-3 relative h-96 lg:h-auto overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${featuredPost.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />

                    {featuredPost.trending && (
                      <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xs font-bold shadow-lg">
                        <TrendingUp className="w-3.5 h-3.5" />
                        TRENDING
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-2 p-10 lg:p-12 flex flex-col justify-center relative z-10">
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 rounded-full text-xs font-semibold mb-6 w-fit border border-blue-500/30">
                      {featuredPost.category}
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                      {featuredPost.title}
                    </h3>

                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-8 pb-8 border-b border-slate-700/50">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-medium text-white">{featuredPost.author}</span>
                      </div>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-4 transition-all duration-300">
                      Read Full Article
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="blog-card group cursor-pointer h-full">
                <div className="relative h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/30 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />

                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="inline-block px-3 py-1 bg-slate-900/90 backdrop-blur-sm text-slate-300 rounded-full text-xs font-semibold border border-slate-700">
                        {post.category}
                      </span>
                      {post.trending && (
                        <div className="flex items-center gap-1 px-2.5 py-1 bg-orange-500/90 backdrop-blur-sm text-white rounded-full text-xs font-bold">
                          <TrendingUp className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 mb-6 flex-1 line-clamp-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-300">{post.author}</p>
                          <p className="text-xs text-slate-500">{post.date}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          >
            Explore All Articles
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
