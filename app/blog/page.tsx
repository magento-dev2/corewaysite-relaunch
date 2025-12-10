import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { ArrowRight, Calendar } from 'lucide-react';
import Pagination from '@/components/ui/Pagination';

export const dynamic = 'force-dynamic';


const ITEMS_PER_PAGE = 12;

async function getBlogs(page: number) {
  try {
    const skip = (page - 1) * ITEMS_PER_PAGE;

    const [blogs, totalCount] = await Promise.all([
      prisma.blog.findMany({
        where: { isActive: true },
        orderBy: { createdAt: 'desc' },
        skip: skip,
        take: ITEMS_PER_PAGE,
      }),
      prisma.blog.count({
        where: { isActive: true },
      }),
    ]);

    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

    return { blogs, totalPages };
  } catch (error) {
    console.log('Database not available, returning empty blogs');
    return { blogs: [], totalPages: 0 };
  }
}

export default async function BlogListing(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const { blogs, totalPages } = await getBlogs(currentPage);

  return (
    <div className="min-h-screen bg-[#0E0918] text-white page-content pb-20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export const metadata = {
  title: "Blog | Coreway Solution",
  description: "Explore Blog services and solutions by Coreway Solution. Expert AI development and digital transformation.",
  keywords: "blog, coreway solution, AI development, automation",
  openGraph: {
    title: "Blog | Coreway Solution",
    description: "Explore Blog services and solutions by Coreway Solution. Expert AI development and digital transformation.",
    type: "website",
    url: "https://www.corewaysolution.com/blog/",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Coreway Solution",
    description: "Explore Blog services and solutions by Coreway Solution. Expert AI development and digital transformation.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/blog/"
  }
};

