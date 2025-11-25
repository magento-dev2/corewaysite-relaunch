import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { ArrowRight, Calendar } from 'lucide-react';

export const revalidate = 60; // Revalidate every 60 seconds

async function getBlogs() {
  const blogs = await prisma.blog.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'desc' },
  });
  return blogs;
}

export default async function BlogListing() {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen bg-[#0E0918] text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-6">
            <span className="text-sm font-semibold text-purple-300 tracking-wider uppercase">Our Blog</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Latest <span className="text-purple-500">Insights</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the latest trends in AI, automation, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} className="group">
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                  {blog.coverImage ? (
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                      <span className="text-purple-500 font-bold text-2xl">Coreway</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <Calendar size={14} />
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-1">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 font-medium text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
