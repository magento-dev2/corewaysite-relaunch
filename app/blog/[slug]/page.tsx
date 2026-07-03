
import { prisma } from '@/lib/prisma';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import BlockRenderer from '@/components/blog/BlockRenderer';
import InlineBlogSummarizer from '@/components/blog/InlineBlogSummarizer';
import CalendlyCTA from '../CalendlyCTA';
import ShareButtons from './ShareButtons';
import { getBlogPostingSchema, getFAQSchema, schemaToJsonLd } from '@/lib/schema';
import { normalizeFAQSchema, parseFAQItems } from '@/lib/faq-schema';
import { formatReadTimeDisplay } from '@/lib/read-time';
import {
  getMissingBlogOptionalFields,
  isMissingBlogOptionalColumn,
  omitBlogOptionalFields,
  withMissingBlogOptionalFields,
} from '@/lib/blog-optional-fields';

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
  readTime?: string | number | null;
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
  showRelatedArticles: boolean | null;
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
  showRelatedArticles: true,
} as const;

type BlogAdjacentNav = {
  previous: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
};

function cleanCtaButtonLabel(text: string | null) {
  if (!text) return '';
  return text.replace(/\s*[→➡➜]+$/u, '').trim();
}

function normalizeDisplayDashes(text: string | null | undefined) {
  if (!text) return text ?? null;
  return text.replace(/(?:—|&mdash;|&#8212;|&#x2014;)/gi, '-');
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

    let missingFields = getMissingBlogOptionalFields(error);

    while (true) {
      try {
        const fallbackBlog = await prisma.blog.findFirst({
          where,
          select: {
            ...omitBlogOptionalFields(blogDetailSelect, missingFields),
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

        blog = withMissingBlogOptionalFields(fallbackBlog, missingFields);
        break;
      } catch (innerError) {
        if (!isMissingBlogOptionalColumn(innerError)) {
          throw innerError;
        }

        const nextMissingFields = Array.from(new Set([
          ...missingFields,
          ...getMissingBlogOptionalFields(innerError),
        ]));

        if (nextMissingFields.length === missingFields.length) {
          throw innerError;
        }

        missingFields = nextMissingFields;
      }
    }
  }

  if (!blog) return null;

  const allRelated = [...(blog.relatedArticles || []), ...(blog.relatedTo || [])];
  const uniqueRelated = Array.from(new Map(allRelated.map(item => [item.id, item])).values());

  return {
    ...blog,
    faqSchema: normalizeFAQSchema(blog.faqSchema),
    relatedArticles: uniqueRelated
  };
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ preview?: string | string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const includeInactive = await isAdminPreviewEnabled(searchParams.preview);
  const blog = await getBlog(params.slug, includeInactive);

  if (!blog) {
    return {
      title: 'Blog Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const metadataDescription = blog.metaDescription ?? blog.excerpt ?? undefined;
  const metadataImage = blog.coverImage ?? undefined;

  return {
    title: blog.metaTitle || blog.title,
    description: metadataDescription,
    keywords: blog.metaKeywords
      ? blog.metaKeywords.split(',').map((k: string) => k.trim())
      : [],

    openGraph: {
      title: blog.metaTitle || blog.title,
      description: metadataDescription,
      images: metadataImage ? [metadataImage] : undefined,
    },
    alternates: {
      canonical: `https://www.corewaysolution.com/blog/${blog.slug}`,
    },
    robots: includeInactive
      ? {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
        },
      }
      : {
        index: true,
        follow: true,
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
  const faqItems = parseFAQItems(blog.faqSchema);
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
                {normalizeDisplayDashes(blog.excerpt)}
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
                <span>{formatReadTimeDisplay(blog.readTime)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16 pt-4">
        <div className={blog.showRelatedArticles !== false ? "grid lg:grid-cols-12 gap-12" : "max-w-7xl mx-auto"}>
          {/* Article Content */}
          <article className={blog.showRelatedArticles !== false ? "lg:col-span-8" : "w-full"}>
            <InlineBlogSummarizer />
            <div className="prose prose-lg max-w-none text-black prose-headings:text-gray-900 prose-a:text-purple-600 hover:prose-a:text-purple-700 prose-strong:text-gray-900">
              <BlockRenderer content={blog.content} />
            </div>

            {/* Dynamic CTA Section */}
            {/*
            {(blog.ctaTitle || blog.ctaButton1Text) && (
              <div className="mt-14 mb-10">
                <div className="relative group overflow-hidden rounded-[2.5rem]">

                  <div className="relative bg-[#0E0918] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -mr-80 -mt-80 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -ml-64 -mb-64" />

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
            */}

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
                        {normalizeDisplayDashes(item.question)}
                        <span className="absolute right-0 top-0 text-purple-600 transition-transform duration-200 group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-gray-700 leading-relaxed">{normalizeDisplayDashes(item.answer)}</p>
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
                    <span className="inline-flex items-center gap-2  text-sm font-medium text-purple-700 mb-2 md:justify-end">
                      <ArrowLeft className="w-4 h-4" />
                      Previous Blog
                    </span>
                    <h4 className="text-sm  font-semibold text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-2">
                      {adjacentBlogs.previous.title}
                    </h4>
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
                    <h4 className="text-sm  font-semibold text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-2">
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

            {/* Bottom Related Articles Section */}
            {blog.showRelatedArticles !== false && relatedBlogs.length > 0 && (
              <section className="mt-16 border-t border-gray-100 pt-16">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Related Articles</h3>
                  <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2 group">
                    View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedBlogs.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group block"
                    >
                      {post.coverImage && (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4">
                          <img
                            src={post.coverImage.startsWith('assets/') ? `/${post.coverImage}` : post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <h4 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 leading-snug mb-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500 italic">
                        {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}


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
          {blog.showRelatedArticles && (
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Related Articles */}
                {blog.showRelatedArticles && relatedBlogs.length > 0 && (
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
          )}
        </div>
      </div>
    </div>
  );
}
