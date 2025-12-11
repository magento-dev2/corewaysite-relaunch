
import { prisma } from '@/lib/prisma';
import { ArrowLeft, Calendar, User, Clock, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlockRenderer from '@/components/blog/BlockRenderer';
import CalendlyCTA from '../CalendlyCTA';



export const revalidate = 60;

async function getBlog(slug: string) {
  const blog = await prisma.blog.findUnique({
    where: { slug, isActive: true },
    include: {
      relatedArticles: {
        where: { isActive: true },
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          coverImage: true,
          createdAt: true,
        },
      },
      relatedTo: {
        where: { isActive: true },
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          coverImage: true,
          createdAt: true,
        },
      },
    },
  });

  if (!blog) return null;

  const allRelated = [...(blog.relatedArticles || []), ...(blog.relatedTo || [])];
  const uniqueRelated = Array.from(new Map(allRelated.map(item => [item.id, item])).values());

  return {
    ...blog,
    relatedArticles: uniqueRelated
  };
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const blog = await getBlog(params.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    keywords: blog.metaKeywords ? blog.metaKeywords.split(',').map(k => k.trim()) : [],
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: [blog.coverImage || ''],
    },
  };
}

async function getRelatedBlogs(currentSlug: string, selectedRelatedArticles: any[]) {
  // If there are selected related articles, return them (up to 3)
  if (selectedRelatedArticles && selectedRelatedArticles.length > 0) {
    return selectedRelatedArticles.slice(0, 3);
  }

  // Otherwise, fall back to latest blogs
  const blogs = await prisma.blog.findMany({
    where: {
      slug: { not: currentSlug },
      isActive: true,
    },
    take: 3,
    orderBy: { createdAt: 'desc' },
  });
  return blogs;
}



 

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = await getRelatedBlogs(slug, blog.relatedArticles || []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Cover Image */}
      <div className="relative bg-black text-white" style={{ minHeight: "650px" }}>
        <div className="absolute inset-0 bg-black/60 z-10" />
        {blog.coverImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${blog.coverImage.startsWith('assets/') ? `/${blog.coverImage}` : blog.coverImage})`
            }}
          />
        )}
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 flex flex-col justify-center" style={{ minHeight: "650px" }}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-white hover:text-purple-500 transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg">Back to Blog</span>
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>
            {blog.excerpt && (
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {blog.excerpt}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Article Content */}
          <article className="lg:col-span-8">
            <div className="prose prose-lg max-w-none text-black prose-headings:text-gray-900 prose-a:text-purple-600 hover:prose-a:text-purple-700 prose-strong:text-gray-900">
              <BlockRenderer content={blog.content} />
            </div>

            {/* Share Buttons */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Share this article</h3>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-900 flex items-center justify-center text-white transition-colors">
                    <LinkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-16 bg-orange-50 border-l-4 border-purple-600 p-8 rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-700 mb-6">
                  Get expert assistance with your project and technology needs.
                </p>
                <Link href="/contact" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                  Contact Us
                </Link>
              
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Related Articles */}
              {relatedBlogs.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedBlogs.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="block group"
                      >
                        {post.coverImage && (
                          <div className="relative overflow-hidden rounded-lg mb-3">
                            <img
                              src={post.coverImage.startsWith('assets/') ? `/${post.coverImage}` : post.coverImage}
                              alt={post.title}
                              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}

                        <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2 leading-snug">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Card */}
              <CalendlyCTA />


            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
