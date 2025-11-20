"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Play, Clock, BookOpen, Award, Filter, Search, ArrowRight, Star, Users } from 'lucide-react';

const tutorials = [
  {
    id: 'nextjs-complete-guide',
    title: 'Complete Next.js 14 Tutorial - Build Modern Web Apps',
    description: 'Master Next.js 14 with this comprehensive tutorial covering App Router, Server Components, and advanced features.',
    level: 'Intermediate',
    duration: '4 hours',
    lessons: 32,
    students: 12500,
    rating: 4.9,
    category: 'Web Development',
    thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    tags: ['Next.js', 'React', 'TypeScript'],
    instructor: 'Sarah Chen'
  },
  {
    id: 'aws-cloud-essentials',
    title: 'AWS Cloud Essentials for Developers',
    description: 'Learn to deploy and manage applications on AWS with hands-on examples covering EC2, S3, Lambda, and more.',
    level: 'Beginner',
    duration: '3 hours',
    lessons: 24,
    students: 9800,
    rating: 4.8,
    category: 'Cloud Computing',
    thumbnail: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    tags: ['AWS', 'Cloud', 'DevOps'],
    instructor: 'Mike Johnson'
  },
  {
    id: 'iot-python-raspberry-pi',
    title: 'IoT with Python and Raspberry Pi',
    description: 'Build real-world IoT projects using Python and Raspberry Pi, from basic sensors to complex automation systems.',
    level: 'Beginner',
    duration: '5 hours',
    lessons: 40,
    students: 7200,
    rating: 4.7,
    category: 'IoT',
    thumbnail: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    tags: ['Python', 'IoT', 'Raspberry Pi'],
    instructor: 'Emma Williams'
  },
  {
    id: 'ai-machine-learning-fundamentals',
    title: 'AI & Machine Learning Fundamentals',
    description: 'Start your AI journey with practical examples and understand core concepts of machine learning algorithms.',
    level: 'Beginner',
    duration: '6 hours',
    lessons: 45,
    students: 15300,
    rating: 4.9,
    category: 'AI & ML',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    tags: ['AI', 'Machine Learning', 'Python'],
    instructor: 'David Park'
  },
  {
    id: 'react-advanced-patterns',
    title: 'Advanced React Patterns & Best Practices',
    description: 'Take your React skills to the next level with advanced patterns, performance optimization, and clean architecture.',
    level: 'Advanced',
    duration: '4.5 hours',
    lessons: 28,
    students: 8900,
    rating: 4.8,
    category: 'Web Development',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    tags: ['React', 'JavaScript', 'Performance'],
    instructor: 'Alex Thompson'
  },
  {
    id: 'docker-kubernetes-masterclass',
    title: 'Docker & Kubernetes Masterclass',
    description: 'Master containerization and orchestration with Docker and Kubernetes for modern application deployment.',
    level: 'Intermediate',
    duration: '7 hours',
    lessons: 52,
    students: 11200,
    rating: 4.9,
    category: 'DevOps',
    thumbnail: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    tags: ['Docker', 'Kubernetes', 'DevOps'],
    instructor: 'Robert Lee'
  },
  {
    id: 'api-design-development',
    title: 'RESTful API Design & Development',
    description: 'Learn to design and build scalable RESTful APIs with industry best practices and security considerations.',
    level: 'Intermediate',
    duration: '3.5 hours',
    lessons: 26,
    students: 6700,
    rating: 4.7,
    category: 'Backend',
    thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    tags: ['API', 'REST', 'Node.js'],
    instructor: 'Jennifer Wu'
  },
  {
    id: 'cybersecurity-essentials',
    title: 'Cybersecurity Essentials for Developers',
    description: 'Protect your applications with essential security practices, from secure coding to threat detection.',
    level: 'Intermediate',
    duration: '4 hours',
    lessons: 30,
    students: 9100,
    rating: 4.8,
    category: 'Security',
    thumbnail: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    tags: ['Security', 'OWASP', 'Best Practices'],
    instructor: 'Michael Brown'
  }
];

const categories = ['All', 'Web Development', 'Cloud Computing', 'IoT', 'AI & ML', 'DevOps', 'Backend', 'Security'];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

export default function TutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = selectedCategory === 'All' || tutorial.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All Levels' || tutorial.level === selectedLevel;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const featuredTutorial = filteredTutorials.find(t => t.featured);
  const regularTutorials = filteredTutorials.filter(t => !t.featured);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Intermediate':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Advanced':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E0918] to-[#1a0f2b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03),transparent_70%)] pointer-events-none" />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 rounded-full text-sm font-medium mb-4">
              Learn & Master New Skills
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
              Tutorials
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive video tutorials and hands-on courses to accelerate your development journey
            </p>
          </div>

          <div className="mb-12 space-y-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search tutorials, topics, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-slate-400" />
                <span className="text-slate-400 font-medium">Filter by:</span>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-slate-700 text-white border-2 border-slate-600'
                        : 'bg-slate-800/50 text-slate-300 border border-slate-700 hover:bg-slate-700/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedLevel === level
                        ? 'bg-slate-700 text-white border-2 border-slate-600'
                        : 'bg-slate-800/50 text-slate-300 border border-slate-700 hover:bg-slate-700/50'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {featuredTutorial && (
            <div className="mb-16">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 relative h-80 lg:h-auto overflow-hidden group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${featuredTutorial.thumbnail})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute top-6 left-6">
                      <span className="inline-block px-4 py-2 bg-yellow-500/90 backdrop-blur-sm text-slate-900 rounded-full text-sm font-bold border border-yellow-400">
                        Featured Tutorial
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-3 p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(featuredTutorial.level)}`}>
                        {featuredTutorial.level}
                      </span>
                      <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-semibold border border-slate-600">
                        {featuredTutorial.category}
                      </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      {featuredTutorial.title}
                    </h2>

                    <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                      {featuredTutorial.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Clock className="w-5 h-5" />
                        <span className="text-sm">{featuredTutorial.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <BookOpen className="w-5 h-5" />
                        <span className="text-sm">{featuredTutorial.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Users className="w-5 h-5" />
                        <span className="text-sm">{featuredTutorial.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center gap-2 text-yellow-400">
                        <Star className="w-5 h-5" fill="currentColor" />
                        <span className="text-sm font-semibold">{featuredTutorial.rating}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredTutorial.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-slate-800/50 text-slate-400 rounded-full text-xs border border-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/tutorials/${featuredTutorial.id}`}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 w-fit group"
                    >
                      Start Learning
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {regularTutorials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularTutorials.map((tutorial) => (
                <Link key={tutorial.id} href={`/tutorials/${tutorial.id}`}>
                  <div className="group cursor-pointer h-full">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-500 border border-slate-700/50 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                          style={{ backgroundImage: `url(${tutorial.thumbnail})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                          </div>
                        </div>
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getLevelColor(tutorial.level)}`}>
                            {tutorial.level}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                          <span className="text-xs text-white font-semibold">{tutorial.rating}</span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <span className="text-xs text-slate-500 mb-2">{tutorial.category}</span>

                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-slate-200 transition-colors duration-300 line-clamp-2">
                          {tutorial.title}
                        </h3>

                        <p className="text-slate-400 text-sm mb-4 flex-1 line-clamp-2">
                          {tutorial.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {tutorial.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-slate-800/50 text-slate-400 rounded text-xs border border-slate-700">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-700 text-xs text-slate-400">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{tutorial.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{tutorial.lessons} lessons</span>
                          </div>
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
                <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No tutorials found</h3>
                <p className="text-slate-400">Try adjusting your search or filter criteria</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
