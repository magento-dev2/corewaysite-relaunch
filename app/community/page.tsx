"use client";

import { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, ThumbsUp, Eye, Users, TrendingUp, Award, Calendar, Search, Filter, Hash } from 'lucide-react';

const discussions = [
  {
    id: 'best-practices-nextjs-14',
    title: 'What are the best practices for Next.js 14 App Router?',
    description: 'Looking for recommendations on structuring large Next.js applications with the new App Router. What patterns are you using?',
    author: 'Sarah Chen',
    avatar: 'SC',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Best Practices'],
    replies: 42,
    views: 1234,
    likes: 89,
    timestamp: '2 hours ago',
    featured: true,
    solved: false
  },
  {
    id: 'aws-lambda-performance',
    title: 'Optimizing AWS Lambda Cold Starts',
    description: 'Has anyone found effective ways to reduce Lambda cold start times? Sharing my experience and looking for more insights.',
    author: 'Mike Johnson',
    avatar: 'MJ',
    category: 'Cloud Computing',
    tags: ['AWS', 'Lambda', 'Performance'],
    replies: 28,
    views: 892,
    likes: 56,
    timestamp: '5 hours ago',
    featured: false,
    solved: true
  },
  {
    id: 'iot-security-mqtt',
    title: 'IoT Device Security with MQTT Protocol',
    description: 'Implementing secure MQTT communication for IoT devices. What encryption methods and authentication strategies work best?',
    author: 'Emma Williams',
    avatar: 'EW',
    category: 'IoT',
    tags: ['IoT', 'MQTT', 'Security'],
    replies: 19,
    views: 654,
    likes: 43,
    timestamp: '1 day ago',
    featured: false,
    solved: false
  },
  {
    id: 'machine-learning-deployment',
    title: 'Deploying ML Models to Production',
    description: 'What are your go-to tools and strategies for deploying machine learning models at scale? Looking for production-ready solutions.',
    author: 'David Park',
    avatar: 'DP',
    category: 'AI & ML',
    tags: ['Machine Learning', 'MLOps', 'Deployment'],
    replies: 35,
    views: 1567,
    likes: 102,
    timestamp: '1 day ago',
    featured: false,
    solved: false
  },
  {
    id: 'react-state-management',
    title: 'State Management in React: Redux vs Zustand vs Context',
    description: 'Comparing different state management solutions for React applications. Which one do you prefer and why?',
    author: 'Alex Thompson',
    avatar: 'AT',
    category: 'Web Development',
    tags: ['React', 'State Management', 'Redux'],
    replies: 67,
    views: 2341,
    likes: 145,
    timestamp: '2 days ago',
    featured: false,
    solved: true
  },
  {
    id: 'kubernetes-monitoring',
    title: 'Best Kubernetes Monitoring Tools in 2025',
    description: 'Looking for recommendations on monitoring tools for Kubernetes clusters. What do you use for observability and alerting?',
    author: 'Robert Lee',
    avatar: 'RL',
    category: 'DevOps',
    tags: ['Kubernetes', 'Monitoring', 'DevOps'],
    replies: 31,
    views: 1098,
    likes: 72,
    timestamp: '3 days ago',
    featured: false,
    solved: false
  },
  {
    id: 'graphql-rest-comparison',
    title: 'When to choose GraphQL over REST?',
    description: 'Debating between GraphQL and REST for a new project. What factors should I consider when making this decision?',
    author: 'Jennifer Wu',
    avatar: 'JW',
    category: 'Backend',
    tags: ['GraphQL', 'REST', 'API Design'],
    replies: 48,
    views: 1876,
    likes: 91,
    timestamp: '4 days ago',
    featured: false,
    solved: true
  },
  {
    id: 'zero-trust-architecture',
    title: 'Implementing Zero Trust Security Architecture',
    description: 'Starting a zero trust security implementation. What are the critical first steps and common pitfalls to avoid?',
    author: 'Michael Brown',
    avatar: 'MB',
    category: 'Security',
    tags: ['Security', 'Zero Trust', 'Architecture'],
    replies: 22,
    views: 743,
    likes: 58,
    timestamp: '5 days ago',
    featured: false,
    solved: false
  }
];

const trendingTopics = [
  { name: 'Next.js 14', count: 234 },
  { name: 'AWS Lambda', count: 189 },
  { name: 'React Hooks', count: 156 },
  { name: 'Kubernetes', count: 142 },
  { name: 'TypeScript', count: 128 },
  { name: 'Docker', count: 98 }
];

const categories = ['All', 'Web Development', 'Cloud Computing', 'IoT', 'AI & ML', 'DevOps', 'Backend', 'Security'];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesCategory = selectedCategory === 'All' || discussion.category === selectedCategory;
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    if (sortBy === 'popular') return b.views - a.views;
    if (sortBy === 'trending') return b.likes - a.likes;
    return 0;
  });

  const featuredDiscussion = sortedDiscussions.find(d => d.featured);
  const regularDiscussions = sortedDiscussions.filter(d => !d.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E0918] to-[#1a0f2b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03),transparent_70%)] pointer-events-none" />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 rounded-full text-sm font-medium mb-4">
              Join the Conversation
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
              Community
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Connect with developers, share knowledge, and get help from our vibrant community
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
              <Users className="w-10 h-10 text-blue-400 mb-3" />
              <div className="text-3xl font-bold text-white mb-1">12.5K+</div>
              <div className="text-slate-400 text-sm">Active Members</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
              <MessageSquare className="w-10 h-10 text-green-400 mb-3" />
              <div className="text-3xl font-bold text-white mb-1">3.2K+</div>
              <div className="text-slate-400 text-sm">Discussions</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <Award className="w-10 h-10 text-purple-400 mb-3" />
              <div className="text-3xl font-bold text-white mb-1">8.9K+</div>
              <div className="text-slate-400 text-sm">Solutions</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20">
              <TrendingUp className="w-10 h-10 text-orange-400 mb-3" />
              <div className="text-3xl font-bold text-white mb-1">1.5K+</div>
              <div className="text-slate-400 text-sm">Topics</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search discussions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-slate-700 text-white'
                            : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                    <Filter className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-400 text-sm">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-slate-800/50 text-slate-300 px-3 py-1 rounded-lg border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-slate-600"
                    >
                      <option value="recent">Recent</option>
                      <option value="popular">Most Viewed</option>
                      <option value="trending">Trending</option>
                    </select>
                  </div>
                </div>
              </div>

              {featuredDiscussion && (
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-yellow-500/30 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-yellow-500/20 backdrop-blur-sm text-yellow-400 rounded-full text-xs font-bold border border-yellow-500/30">
                      Featured
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {featuredDiscussion.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-white font-semibold">{featuredDiscussion.author}</span>
                        <span className="text-slate-500 text-sm">•</span>
                        <span className="text-slate-500 text-sm">{featuredDiscussion.timestamp}</span>
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded text-xs border border-slate-600">
                          {featuredDiscussion.category}
                        </span>
                      </div>

                      <Link href={`/community/${featuredDiscussion.id}`}>
                        <h3 className="text-2xl font-bold text-white mb-3 hover:text-slate-300 transition-colors">
                          {featuredDiscussion.title}
                        </h3>
                      </Link>

                      <p className="text-slate-400 mb-4">
                        {featuredDiscussion.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {featuredDiscussion.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-slate-800/50 text-slate-400 rounded-full text-xs border border-slate-700">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-6 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-5 h-5" />
                          <span>{featuredDiscussion.replies} replies</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-5 h-5" />
                          <span>{featuredDiscussion.views} views</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ThumbsUp className="w-5 h-5" />
                          <span>{featuredDiscussion.likes} likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {regularDiscussions.map((discussion) => (
                  <div
                    key={discussion.id}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {discussion.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-white font-medium text-sm">{discussion.author}</span>
                          <span className="text-slate-500 text-sm">•</span>
                          <span className="text-slate-500 text-sm">{discussion.timestamp}</span>
                          <span className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded text-xs border border-slate-600">
                            {discussion.category}
                          </span>
                          {discussion.solved && (
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs border border-green-500/30 font-semibold">
                              Solved
                            </span>
                          )}
                        </div>

                        <Link href={`/community/${discussion.id}`}>
                          <h3 className="text-lg font-bold text-white mb-2 hover:text-slate-300 transition-colors">
                            {discussion.title}
                          </h3>
                        </Link>

                        <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                          {discussion.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {discussion.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-slate-800/50 text-slate-400 rounded text-xs border border-slate-700">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{discussion.replies}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{discussion.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{discussion.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Trending Topics
                </h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div
                      key={topic.name}
                      className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-700/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-slate-500 font-bold text-sm">#{index + 1}</span>
                        <div className="flex items-center gap-2">
                          <Hash className="w-4 h-4 text-slate-400" />
                          <span className="text-white font-medium text-sm">{topic.name}</span>
                        </div>
                      </div>
                      <span className="text-slate-400 text-xs">{topic.count} posts</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 text-white border border-slate-600">
                <h3 className="text-xl font-bold mb-3">Start a Discussion</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Have a question or want to share your knowledge? Join the conversation!
                </p>
                <button className="w-full px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                  New Discussion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
