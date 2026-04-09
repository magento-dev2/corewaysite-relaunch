
import { prisma } from '@/lib/prisma';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
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
  author: string | null;
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
  author: true,
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

const blogDetailNoAuthorSelect = {
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

type FAQItem = {
  question: string;
  answer: string;
};

type BlogAdjacentNav = {
  previous: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
};

function cleanCtaButtonLabel(text: string | null) {
  if (!text) return '';
  return text.replace(/\s*[→➡➜]+$/u, '').trim();
}

function hasMissingColumn(error: unknown, columnName: string) {
  if (!(error instanceof Error)) {
    return false;
  }

  return error.message.includes(columnName)
    || error.message.includes(`column \`${columnName}\` does not exist`)
    || error.message.includes(`column: '${columnName}'`)
    || error.message.includes(`column: "${columnName}"`);
}

function hasUnknownBlogField(error: unknown, fieldName: string) {
  return error instanceof Error
    && (error.message.includes(`Unknown field \`${fieldName}\``)
      || error.message.includes(`Unknown argument \`${fieldName}\``));
}

function isMissingBlogOptionalColumn(error: unknown) {
  return hasMissingColumn(error, 'Blog.readTime')
    || hasMissingColumn(error, 'Blog.faqSchema')
    || hasMissingColumn(error, 'Blog.author')
    || hasMissingColumn(error, 'readTime')
    || hasMissingColumn(error, 'faqSchema')
    || hasMissingColumn(error, 'author')
    || hasUnknownBlogField(error, 'readTime')
    || hasUnknownBlogField(error, 'faqSchema')
    || hasUnknownBlogField(error, 'author');
}

function parseFAQSchema(faqSchema: unknown): FAQItem[] {
  if (faqSchema === undefined || faqSchema === null || faqSchema === '') {
    return [];
  }

  const toFAQItems = (value: unknown): FAQItem[] => {
    if (!Array.isArray(value)) {
      return [];
    }

    return value.filter((item): item is FAQItem => {
      return typeof item === 'object'
        && item !== null
        && typeof (item as { question?: unknown }).question === 'string'
        && typeof (item as { answer?: unknown }).answer === 'string';
    });
  };

  if (typeof faqSchema === 'string') {
    if (!faqSchema.trim()) {
      return [];
    }

    try {
      const parsed = JSON.parse(faqSchema);
      return toFAQItems(parsed);
    } catch {
      return [];
    }
  }

  return toFAQItems(faqSchema);
}

export const revalidate = 60;

async function isAdminPreviewEnabled(preview?: string | string[]) {
  if (preview !== '1') {
    return false;
  }

  const cookieStore = await cookies();
  return cookieStore.get('admin_session')?.value === 'true';
}

async function getBlog(slug: string, includeInactive = false): Promise<BlogWithRelations | null> {
  const where = includeInactive ? { slug } : { slug, isActive: true };
  let blog: BlogWithRelations | null = null;

  try {
    blog = await prisma.blog.findFirst({
      where,
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

    // First fallback: keep readTime + faqSchema and only skip author selection
    try {
      const noAuthorBlog = await prisma.blog.findFirst({
        where,
        select: {
          ...blogDetailNoAuthorSelect,
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

      if (!noAuthorBlog) {
        return null;
      }

      blog = {
        ...noAuthorBlog,
        author: null,
      };
    } catch (innerError) {
      if (!isMissingBlogOptionalColumn(innerError)) {
        throw innerError;
      }

      const fallbackBlog = await prisma.blog.findFirst({
        where,
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
        author: null,
      };
    }
  }

  if (!blog) return null;

  const allRelated = [...(blog.relatedArticles || []), ...(blog.relatedTo || [])];
  const uniqueRelated = Array.from(new Map(allRelated.map(item => [item.id, item])).values());

  return {
    ...blog,
    relatedArticles: uniqueRelated
  };
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ preview?: string | string[] }>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const includeInactive = await isAdminPreviewEnabled(searchParams.preview);
  const blog = await getBlog(params.slug, includeInactive);

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

async function getPrevNextBlogs(
  currentBlog: Pick<BlogWithRelations, 'slug' | 'createdAt'>,
  includeInactive: boolean
): Promise<BlogAdjacentNav> {
  const baseWhere = includeInactive ? {} : { isActive: true };

  const [previous, next] = await Promise.all([
    prisma.blog.findFirst({
      where: {
        ...baseWhere,
        slug: { not: currentBlog.slug },
        createdAt: { lt: currentBlog.createdAt },
      },
      orderBy: { createdAt: 'desc' },
      select: { slug: true, title: true },
    }),
    prisma.blog.findFirst({
      where: {
        ...baseWhere,
        slug: { not: currentBlog.slug },
        createdAt: { gt: currentBlog.createdAt },
      },
      orderBy: { createdAt: 'asc' },
      select: { slug: true, title: true },
    }),
  ]);

  return { previous, next };
}





export default async function BlogDetail({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ preview?: string | string[] }>;
}) {

  const { slug } = await params;
  const query = await searchParams;
  const includeInactive = await isAdminPreviewEnabled(query.preview);
  const blog = await getBlog(slug, includeInactive);

  if (!blog) {
    notFound();
  }

  const [relatedBlogs, adjacentBlogs] = await Promise.all([
    getRelatedBlogs(slug, blog.relatedArticles),
    getPrevNextBlogs(blog, includeInactive),
  ]);

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
                <User className="w-5 h-5" />
                <span>{blog.author || 'Alpesh'}</span>
              </div>
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

            {/* Dynamic CTA Section */}
            {(blog.ctaTitle || blog.ctaButton1Text) && (
              <div className="mt-14 mb-10">
                <div className="relative group overflow-hidden rounded-[2.5rem]">

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
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                              {blog.ctaTitle}
                            </h2>
                          )}
                          {blog.ctaDescription && (
                            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium">
                              {blog.ctaDescription}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                          {blog.ctaButton1Text && (
                            <Link
                              href={blog.ctaButton1Link || '#'}
                              className="group/btn relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-purple-600 rounded-2xl hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] active:scale-95 min-w-[220px]"
                            >
                              <span className="relative z-10 text-base md:text-lg">{cleanCtaButtonLabel(blog.ctaButton1Text)}</span>
                              {/* <ArrowRight className="w-6 h-6 ml-2 group-hover/btn:translate-x-1.5 transition-transform duration-300" /> */}
                            </Link>
                          )}
                          {blog.ctaButton2Text && (
                            <Link
                              href={blog.ctaButton2Link || '#'}
                              className="group/btn relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 backdrop-blur-md active:scale-95 min-w-[220px] text-base md:text-lg"
                            >
                              {cleanCtaButtonLabel(blog.ctaButton2Text)}
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {faqItems.length > 0 && (
              <section className="mt-14 mb-10 rounded-2xl border border-purple-100 bg-gradient-to-b from-purple-50/70 to-white p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h3>
                  <p className="mt-2 text-gray-600">Quick answers to common questions about this topic.</p>
                </div>

                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <details
                      key={`${item.question}-${index}`}
                      className="group rounded-xl border border-gray-200 bg-white px-5 py-4 open:border-purple-300 open:shadow-sm transition-colors"
                    >
                      <summary className="cursor-pointer list-none font-semibold text-gray-900 pr-8 relative">
                        {item.question}
                        <span className="absolute right-0 top-0 text-purple-600 transition-transform duration-200 group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-gray-700 leading-relaxed">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {(adjacentBlogs.previous || adjacentBlogs.next) && (
              <section className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {adjacentBlogs.previous ? (
                  <Link
                    href={`/blog/${adjacentBlogs.previous.slug}`}
                    className="group rounded-xl border border-gray-200 bg-white p-5 hover:border-purple-300 hover:shadow-sm transition-all"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 mb-2">
                      <ArrowLeft className="w-4 h-4" />
                      Previous Blog
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-2">
                      {adjacentBlogs.previous.title}
                    </h3>
                  </Link>
                ) : (
                  <div className="hidden md:block" />
                )}

                {adjacentBlogs.next ? (
                  <Link
                    href={`/blog/${adjacentBlogs.next.slug}`}
                    className="group rounded-xl border border-gray-200 bg-white p-5 hover:border-purple-300 hover:shadow-sm transition-all md:text-right"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 mb-2 md:justify-end">
                      Next Blog
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <h4 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-2">
                      {adjacentBlogs.next.title}
                    </h4>
                  </Link>
                ) : (
                  <div className="hidden md:block" />
                )}
              </section>
            )}

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
      </div>
    </div>
  );
}
