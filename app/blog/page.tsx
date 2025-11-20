"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, Search, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 'how-to-perform-a-comprehensive-ecommerce-audit-performance-code-technical-and-seo-audit-steps',
    category: 'E-commerce',
    title: 'How to Perform a Comprehensive E-commerce Audit: Performance, Code, Technical and SEO Audit Steps',
    excerpt: 'In today\'s competitive digital landscape, maintaining a high-performing e-commerce website is crucial for success. A comprehensive audit helps identify issues that may be hindering your site\'s performance.',
    author: 'Sarah Mitchell',
    date: 'November 15, 2025',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true
  },
  {
    id: 'ai-transforming-business-automation',
    category: 'AI & Machine Learning',
    title: 'How AI is Transforming Business Process Automation',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way businesses automate their workflows and increase productivity across all departments.',
    author: 'Sarah Chen',
    date: 'November 10, 2025',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 'aws-vs-azure-cloud-platform',
    category: 'Cloud Solutions',
    title: 'AWS vs Azure: Choosing the Right Cloud Platform',
    excerpt: 'A comprehensive comparison of leading cloud platforms to help you make informed decisions for your infrastructure and development needs.',
    author: 'Mike Johnson',
    date: 'November 8, 2025',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 'scalable-iot-manufacturing',
    category: 'IoT Development',
    title: 'Building Scalable IoT Solutions for Manufacturing',
    excerpt: 'Learn best practices for developing robust IoT applications that can handle millions of connected devices in industrial environments.',
    author: 'Emma Williams',
    date: 'November 5, 2025',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 'digital-commerce-2025',
    category: 'E-commerce',
    title: 'The Future of Digital Commerce in 2025',
    excerpt: 'Explore emerging trends and technologies shaping the future of online shopping experiences and customer engagement.',
    author: 'David Park',
    date: 'November 3, 2025',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 'microservices-architecture-guide',
    category: 'Software Architecture',
    title: 'Microservices Architecture: A Complete Guide',
    excerpt: 'Understanding how to design, implement, and manage microservices architecture for scalable enterprise applications.',
    author: 'Robert Lee',
    date: 'October 28, 2025',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 'api-security-best-practices',
    category: 'Security',
    title: 'API Security Best Practices for 2025',
    excerpt: 'Essential security measures to protect your APIs from common vulnerabilities and emerging threats in the modern web.',
    author: 'Jennifer Wu',
    date: 'October 25, 2025',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 'react-performance-optimization',
    category: 'Web Development',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Advanced strategies to improve your React application performance and deliver better user experiences.',
    author: 'Alex Thompson',
    date: 'October 20, 2025',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 'database-optimization-tips',
    category: 'Database',
    title: 'Database Optimization Tips for High-Traffic Applications',
    excerpt: 'Learn how to optimize your database queries and structure for applications handling millions of requests.',
    author: 'Michael Brown',
    date: 'October 15, 2025',
    readTime: '11 min read',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  }
];

const categories = ['All', 'AI & Machine Learning', 'Cloud Solutions', 'E-commerce', 'IoT Development', 'Security', 'Web Development', 'Database', 'Software Architecture'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E0918] to-[#1a0f2b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03),transparent_70%)] pointer-events-none" />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 rounded-full text-sm font-medium mb-4">
              Latest Insights & Articles
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
              Our Blog
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Stay updated with the latest trends, best practices, and insights from our team of experts
            </p>
          </div>

          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-slate-700 text-white border-2 border-slate-600'
                      : 'bg-slate-800/50 text-slate-300 border border-slate-700 hover:bg-slate-700/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {featuredPost && (
            <div className="mb-16">
              <Link href={`/blog/${featuredPost.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative h-80 lg:h-auto overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                          style={{ backgroundImage: `url(${featuredPost.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent" />
                        <div className="absolute top-6 left-6">
                          <span className="inline-block px-4 py-2 bg-slate-800/90 backdrop-blur-sm text-slate-300 rounded-full text-sm font-semibold border border-slate-700">
                            Featured Post
                          </span>
                        </div>
                      </div>

                      <div className="p-10 lg:p-12 flex flex-col justify-center relative z-10">
                        <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-semibold mb-4 w-fit border border-slate-600">
                          {featuredPost.category}
                        </span>

                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-slate-200 transition-colors duration-300">
                          {featuredPost.title}
                        </h2>

                        <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span className="font-medium text-white">{featuredPost.author}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{featuredPost.date}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-2 text-slate-300 font-semibold group-hover:gap-4 transition-all duration-300">
                          Read Article
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <div className="group cursor-pointer h-full">
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
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 max-w-md mx-auto">
                <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-slate-400">Try adjusting your search or filter criteria</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
