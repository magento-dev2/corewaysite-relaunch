"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Clock, ArrowUpRight, Flame, Eye, BookOpen } from 'lucide-react';

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
    views: '12.5K'
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
    featured: false,
    views: '8.2K'
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
    featured: false,
    views: '6.8K'
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
    views: '9.1K'
  }
];

export default function BlogSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.blog-card');

    cards.forEach((card, index) => {
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
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-[#0E0918] via-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium mb-6 shadow-lg">
            <BookOpen className="w-4 h-4" />
            Latest Insights
          </div>

          <h2 className="text-6xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            From Our <span className="relative inline-block">
              <span className="relative z-10">Blog</span>
              <motion.div
                className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-slate-600 to-slate-500 -z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, best practices, and insights from our team of experts
          </p>
        </motion.div>

        {featuredPost && (
          <Link href={`/blog/${featuredPost.id}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="blog-card group cursor-pointer mb-20"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 shadow-2xl hover:shadow-slate-900/40 transition-all duration-500">
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xs font-bold shadow-lg">
                    <Flame className="w-4 h-4" />
                    FEATURED
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-96 lg:h-[600px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                      style={{ backgroundImage: `url(${featuredPost.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-transparent" />

                    <div className="absolute inset-0 flex items-end p-8 lg:hidden">
                      <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-5">
                        <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-semibold mb-3 border border-slate-700">
                          {featuredPost.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-2">{featuredPost.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-10 lg:p-12 flex flex-col justify-center relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-slate-600/10 to-transparent rounded-full blur-3xl"></div>

                    <span className="inline-block px-4 py-2 bg-slate-800/80 backdrop-blur-sm text-slate-300 rounded-full text-xs font-semibold mb-6 w-fit border border-slate-700">
                      {featuredPost.category}
                    </span>

                    <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 group-hover:text-slate-200 transition-colors duration-300 leading-tight">
                      {featuredPost.title}
                    </h3>

                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-slate-700/50">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-white font-bold border-2 border-slate-600">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{featuredPost.author}</p>
                          <p className="text-xs text-slate-500">{featuredPost.date}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          <span>{featuredPost.views} views</span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-3 text-slate-300 font-bold text-lg group-hover:gap-5 transition-all duration-300">
                      <span>Read Full Article</span>
                      <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <motion.div
                className="blog-card group cursor-pointer h-full"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="relative h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 shadow-lg hover:shadow-2xl hover:shadow-slate-900/40 transition-all duration-500 flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600/0 to-slate-600/0 group-hover:from-slate-600/10 group-hover:to-slate-700/10 transition-all duration-500" />

                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.image})` }}
                      animate={hoveredCard === index ? { scale: 1.15 } : { scale: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1.5 bg-slate-900/90 backdrop-blur-sm text-slate-300 rounded-lg text-xs font-semibold border border-slate-700">
                        {post.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-700">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col relative z-10">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-slate-200 transition-colors duration-300 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 mb-6 flex-1 line-clamp-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="pt-5 border-t border-slate-700/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center text-white font-bold text-xs border-2 border-slate-600">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-300">{post.author}</p>
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

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600"
                    initial={{ scaleX: 0 }}
                    animate={hoveredCard === index ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
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
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-2xl font-bold text-lg border border-slate-600 hover:border-slate-500 shadow-lg hover:shadow-2xl hover:shadow-slate-700/40 transition-all duration-300"
            >
              <span>Explore All Articles</span>
              <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
