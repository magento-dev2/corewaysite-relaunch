
import { prisma } from '@/lib/prisma';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlockRenderer from '@/components/blog/BlockRenderer';
import CalendlyCTA from '../CalendlyCTA';
import ShareButtons from './ShareButtons';
import { getBlogPostingSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';

type RelatedBlog = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  coverImage?: string | null;
  createdAt: Date;
};

type BlogWithRelations = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  coverImage: string | null;
  readTime?: number | null;
  faqSchema?: string | null;
  createdAt: Date;
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string | null;
  ctaTitle: string | null;
  ctaDescription: string | null;
  ctaButton1Text: string | null;
  ctaButton1Link: string | null;
  ctaButton2Text: string | null;
  ctaButton2Link: string | null;
  relatedArticles: RelatedBlog[];
  relatedTo?: RelatedBlog[];
};

const relatedBlogSelect = {
  id: true,
  title: true,
  slug: true,
  excerpt: true,
  coverImage: true,
  createdAt: true,
} as const;

const blogDetailSelect = {
  id: true,
  title: true,
  slug: true,
  content: true,
  excerpt: true,
  coverImage: true,
  readTime: true,
  faqSchema: true,
  createdAt: true,
  metaTitle: true,
  metaDescription: true,
  metaKeywords: true,
  ctaTitle: true,
  ctaDescription: true,
  ctaButton1Text: true,
  ctaButton1Link: true,
  ctaButton2Text: true,
  ctaButton2Link: true,
} as const;

const blogDetailFallbackSelect = {
  id: true,
  title: true,
  slug: true,
  content: true,
  excerpt: true,
  coverImage: true,
  createdAt: true,
  metaTitle: true,
  metaDescription: true,
  metaKeywords: true,
  ctaTitle: true,
  ctaDescription: true,
  ctaButton1Text: true,
  ctaButton1Link: true,
  ctaButton2Text: true,
  ctaButton2Link: true,
} as const;

type FAQItem = {
  question: string;
  answer: string;
};

function hasMissingColumn(error: unknown, columnName: string) {
  return error instanceof Error && error.message.includes(columnName);
}

function isMissingBlogOptionalColumn(error: unknown) {
  return hasMissingColumn(error, 'Blog.readTime') || hasMissingColumn(error, 'Blog.faqSchema');
}

function parseFAQSchema(faqSchema?: string | null): FAQItem[] {
  if (!faqSchema?.trim()) {
    return [];
  }

  try {
    const parsed = JSON.parse(faqSchema);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter((item): item is FAQItem => {
      return typeof item === 'object'
        && item !== null
        && typeof item.question === 'string'
        && typeof item.answer === 'string';
    });
  } catch {
    return [];
  }
}

export const revalidate = 60;

async function getBlog(slug: string): Promise<BlogWithRelations | null> {
  let blog: BlogWithRelations | null = null;

  try {
    blog = await prisma.blog.findFirst({
      where: { slug, isActive: true },
      select: {
        ...blogDetailSelect,
        relatedArticles: {
          where: { isActive: true },
          select: relatedBlogSelect,
        },
        relatedTo: {
          where: { isActive: true },
          select: relatedBlogSelect,
        },
      },
    });
  } catch (error) {
    if (!isMissingBlogOptionalColumn(error)) {
      throw error;
    }

    const fallbackBlog = await prisma.blog.findFirst({
      where: { slug, isActive: true },
      select: {
        ...blogDetailFallbackSelect,
        relatedArticles: {
          where: { isActive: true },
          select: relatedBlogSelect,
        },
        relatedTo: {
          where: { isActive: true },
          select: relatedBlogSelect,
        },
      },
    });

    if (!fallbackBlog) {
      return null;
    }

    blog = {
      ...fallbackBlog,
      readTime: null,
      faqSchema: null,
    };
  }

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
    keywords: blog.metaKeywords
      ? blog.metaKeywords.split(',').map((k: string) => k.trim())
      : [],

    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: [blog.coverImage || ''],
    },
  };
}

async function getRelatedBlogs(
  currentSlug: string,
  selectedRelatedArticles: RelatedBlog[]
): Promise<RelatedBlog[]> {
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
    select: relatedBlogSelect,
  });
  return blogs;
}





export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs: RelatedBlog[] = await getRelatedBlogs(
    slug,
    blog.relatedArticles
  );

  const blogSchema = getBlogPostingSchema({
    title: blog.title,
    excerpt: blog.excerpt ?? undefined,
    coverImage: blog.coverImage ?? undefined,
    createdAt: blog.createdAt,
    slug: slug
  });
  const faqItems = parseFAQSchema(blog.faqSchema);
  const faqSchema = faqItems.length > 0 ? getFAQSchema(faqItems) : null;

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={schemaToJsonLd(blogSchema)}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={schemaToJsonLd(faqSchema)}
        />
      )}
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
                <span>{blog.readTime ?? 9} min read</span>
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
            <ShareButtons slug={slug} title={blog.title} />


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

        {/* Dynamic CTA Section at the Bottom */}
        {(blog.ctaTitle || blog.ctaButton1Text) && (
          <div className="mt-32 mb-20">
            <div className="relative group overflow-hidden">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-[#0E0918] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
                {/* Dynamic Background Patterns */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -mr-80 -mt-80 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -ml-64 -mb-64" />
                
                {/* SVG Decorative Grid */}
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

                <div className="relative z-10 px-8 py-16 md:px-20 md:py-24 text-center max-w-5xl mx-auto flex flex-col items-center">
                  <div className="space-y-10 group/content">
                    <div className="space-y-6">
                      {blog.ctaTitle && (
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                          {blog.ctaTitle}
                        </h2>
                      )}
                      {blog.ctaDescription && (
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium">
                          {blog.ctaDescription}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                      {blog.ctaButton1Text && (
                        <Link
                          href={blog.ctaButton1Link || '#'}
                          className="group/btn relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-purple-600 rounded-2xl hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] active:scale-95 min-w-[240px]"
                        >
                          <span className="relative z-10 text-lg">{blog.ctaButton1Text}</span>
                          <ArrowRight className="w-6 h-6 ml-2 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                        </Link>
                      )}
                      {blog.ctaButton2Text && (
                        <Link
                          href={blog.ctaButton2Link || '#'}
                          className="group/btn relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 backdrop-blur-md active:scale-95 min-w-[240px] text-lg"
                        >
                          {blog.ctaButton2Text}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
