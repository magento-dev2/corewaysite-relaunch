import { ArrowLeft, Calendar, User, Clock, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import TableOfContents from "@/components/home/TableOfContents";

const blogPost = {
  title: "How to Perform a Comprehensive E-commerce Audit: Performance, Code, Technical and SEO Audit Steps",
  author: "Sarah Mitchell",
  date: "November 15, 2025",
  readTime: "12 min read",
  category: "E-commerce",
  image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
  content: `
    <p>In today's competitive digital landscape, maintaining a high-performing e-commerce website is crucial for success. A comprehensive audit helps identify issues that may be hindering your site's performance, user experience, and search engine rankings.</p>

    <p>This guide will walk you through the essential steps of conducting a thorough e-commerce audit, covering performance optimization, code quality, technical infrastructure, and SEO best practices.</p>

<h2 id="why-audits-matter">Why E-commerce Audits Matter</h2>

    <p>Regular audits are essential for maintaining a healthy online store. They help you:</p>

    <ul>
      <li>Identify and fix performance bottlenecks that slow down your site</li>
      <li>Discover technical issues affecting user experience</li>
      <li>Uncover SEO opportunities to improve organic traffic</li>
      <li>Ensure code quality and maintainability</li>
      <li>Stay competitive in your industry</li>
    </ul>

<h2 id="performance-audit">1. Performance Audit</h2>

    <p>Site speed directly impacts conversion rates. Studies show that a one-second delay in page load time can result in a 7% reduction in conversions.</p>

    <h3>Key Performance Metrics</h3>

    <p>Focus on these critical metrics when auditing performance:</p>

    <ul>
      <li><strong>First Contentful Paint (FCP)</strong> - Measures when the first content appears on screen</li>
      <li><strong>Largest Contentful Paint (LCP)</strong> - Indicates when the main content has loaded</li>
      <li><strong>Time to Interactive (TTI)</strong> - Measures when the page becomes fully interactive</li>
      <li><strong>Cumulative Layout Shift (CLS)</strong> - Tracks visual stability</li>
      <li><strong>First Input Delay (FID)</strong> - Measures interactivity and responsiveness</li>
    </ul>

    <h3>Performance Optimization Steps</h3>

    <ol>
      <li><strong>Image Optimization:</strong> Compress images without losing quality. Use modern formats like WebP or AVIF.</li>
      <li><strong>Enable Caching:</strong> Implement browser caching and CDN caching to reduce server load.</li>
      <li><strong>Minify Resources:</strong> Compress CSS, JavaScript, and HTML files.</li>
      <li><strong>Lazy Loading:</strong> Load images and content only when they're needed.</li>
      <li><strong>Reduce HTTP Requests:</strong> Combine files and use sprite sheets where possible.</li>
    </ol>

<h2 id="code-quality">2. Code Quality Audit</h2>

    <p>Clean, maintainable code is essential for long-term success. Poor code quality leads to bugs, security vulnerabilities, and difficulty implementing new features.</p>

    <h3>Code Review Checklist</h3>

    <ul>
      <li>Check for deprecated functions and outdated libraries</li>
      <li>Review error handling and logging practices</li>
      <li>Assess code organization and structure</li>
      <li>Verify proper use of design patterns</li>
      <li>Ensure consistent coding standards</li>
    </ul>

<h2 id="technical-infrastructure">3. Technical Infrastructure Audit</h2>

    <p>Your technical infrastructure forms the foundation of your e-commerce site. Issues here can cause serious problems down the line.</p>

    <h3>Critical Technical Elements</h3>

    <ol>
      <li><strong>SSL Certificate:</strong> Ensure HTTPS is properly configured across all pages</li>
      <li><strong>Mobile Responsiveness:</strong> Test on various devices and screen sizes</li>
      <li><strong>Broken Links:</strong> Identify and fix all 404 errors</li>
      <li><strong>XML Sitemap:</strong> Verify sitemap is up-to-date and properly submitted</li>
      <li><strong>Robots.txt:</strong> Check for proper search engine crawling directives</li>
    </ol>

<h2 id="seo-audit">4. SEO Audit</h2>

    <p>Search engine optimization drives organic traffic to your store. A thorough SEO audit reveals opportunities to improve your visibility.</p>

    <h3>On-Page SEO Elements</h3>

    <ul>
      <li><strong>Title Tags:</strong> Unique, descriptive titles for each page (50-60 characters)</li>
      <li><strong>Meta Descriptions:</strong> Compelling descriptions that encourage clicks (150-160 characters)</li>
      <li><strong>Header Tags:</strong> Proper hierarchy using H1, H2, H3 tags</li>
      <li><strong>Image Alt Text:</strong> Descriptive alt attributes for all images</li>
      <li><strong>Internal Linking:</strong> Strategic links between related pages</li>
    </ul>

    <h3>Technical SEO Checklist</h3>

    <ol>
      <li>Check indexation status in Google Search Console</li>
      <li>Verify canonical tags are properly implemented</li>
      <li>Review structured data markup (Schema.org)</li>
      <li>Analyze page load speed on mobile devices</li>
      <li>Ensure proper URL structure and hierarchy</li>
    </ol>

<h2 id="ux-audit">5. User Experience Audit</h2>

    <p>Even with perfect technical implementation, poor user experience will hurt conversions. Evaluate your site from a customer's perspective.</p>

    <h3>UX Elements to Review</h3>

    <ul>
      <li>Navigation clarity and ease of use</li>
      <li>Search functionality and filtering options</li>
      <li>Checkout process simplicity</li>
      <li>Product page information completeness</li>
      <li>Mobile usability and touch targets</li>
      <li>Form design and error handling</li>
    </ul>

    <h2 id="security-audit">6. Security Audit</h2>

    <p>Security breaches can destroy customer trust and result in significant financial losses. Regular security audits are non-negotiable.</p>

    <h3>Security Checklist</h3>

    <ol>
      <li><strong>SSL/TLS Certificate:</strong> Valid and properly configured</li>
      <li><strong>Payment Gateway:</strong> PCI DSS compliant</li>
      <li><strong>Software Updates:</strong> All platforms and plugins up-to-date</li>
      <li><strong>Access Controls:</strong> Proper user permissions and authentication</li>
      <li><strong>Backup System:</strong> Regular automated backups</li>
      <li><strong>Security Headers:</strong> Implement CSP, HSTS, and other security headers</li>
    </ol>

<h2 id="tools">Tools for E-commerce Auditing</h2>

    <p>Leverage these tools to streamline your audit process:</p>

    <ul>
      <li><strong>Google PageSpeed Insights:</strong> Performance and mobile optimization</li>
      <li><strong>GTmetrix:</strong> Detailed performance reports</li>
      <li><strong>Screaming Frog:</strong> Comprehensive site crawling and analysis</li>
      <li><strong>Google Search Console:</strong> SEO insights and indexation status</li>
      <li><strong>Ahrefs or SEMrush:</strong> Backlink analysis and keyword research</li>
      <li><strong>Chrome DevTools:</strong> In-depth code and network analysis</li>
    </ul>

<h2 id="action-plan">Creating an Action Plan</h2>

    <p>After completing your audit, prioritize issues based on:</p>

    <ol>
      <li><strong>Impact:</strong> How significantly does the issue affect performance or conversions?</li>
      <li><strong>Effort:</strong> How much time and resources are needed to fix it?</li>
      <li><strong>Urgency:</strong> Is it a critical security issue or causing immediate problems?</li>
    </ol>

    <h2>Conclusion</h2>

    <p>A comprehensive e-commerce audit is an ongoing process, not a one-time event. Schedule regular audits—quarterly at minimum—to ensure your site remains optimized, secure, and competitive.</p>

    <p>By systematically reviewing performance, code quality, technical infrastructure, SEO, user experience, and security, you'll identify opportunities for improvement and maintain a healthy online store that delivers results.</p>

    <p>Remember: the goal isn't perfection, but continuous improvement. Start with the highest-impact issues and work your way through your audit findings methodically.</p>
  `
};

const tableOfContents = [
  { id: "why-audits-matter", title: "Why E-commerce Audits Matter" },
  { id: "performance-audit", title: "1. Performance Audit" },
  { id: "code-quality", title: "2. Code Quality Audit" },
  { id: "technical-infrastructure", title: "3. Technical Infrastructure Audit" },
  { id: "seo-audit", title: "4. SEO Audit" },
  { id: "ux-audit", title: "5. User Experience Audit" },
  { id: "security-audit", title: "6. Security Audit" },
  { id: "tools", title: "Tools for E-commerce Auditing" },
  { id: "action-plan", title: "Creating an Action Plan" },
];

const relatedPosts = [
  {
    title: "10 Essential SEO Tips for E-commerce Success",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "November 10, 2025",
    slug: "seo-tips-ecommerce"
  },
  {
    title: "Optimizing Checkout Flow: Best Practices",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "November 5, 2025",
    slug: "checkout-optimization"
  },
  {
    title: "Mobile-First Design for Online Stores",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "October 28, 2025",
    slug: "mobile-first-design"
  }
];

export function generateStaticParams() {
  return [
    { slug: 'how-to-perform-a-comprehensive-ecommerce-audit-performance-code-technical-and-seo-audit-steps' },
    { slug: 'ecommerce-audit-guide' },
    { slug: 'seo-tips-ecommerce' },
    { slug: 'checkout-optimization' },
    { slug: 'mobile-first-design' }
  ];
}

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E0918] to-[#1a0f2b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03),transparent_70%)] pointer-events-none" />

      <div className="relative" style={{ minHeight: "650px" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0E0918] z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blogPost.image})` }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center" style={{ minHeight: "650px" }}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg font-medium">Back to Blog</span>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-slate-300 rounded-full text-sm font-semibold mb-6">
              {blogPost.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              {blogPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{blogPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <article className="lg:col-span-8">
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
              <div
                className="prose prose-lg max-w-none text-slate-200"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </div>

            <div className="mt-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Share this article</h3>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-110 flex items-center justify-center text-white transition-all duration-300">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 hover:scale-110 flex items-center justify-center text-white transition-all duration-300">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 hover:scale-110 flex items-center justify-center text-white transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 hover:scale-110 flex items-center justify-center text-white transition-all duration-300">
                    <LinkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border-l-4 border-slate-600 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-slate-300 mb-6">
                Get the latest insights on e-commerce optimization, SEO strategies, and digital marketing tips delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent outline-none backdrop-blur-sm"
                />
                <button className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Table of Contents</h3>
                <TableOfContents tableOfContents={tableOfContents} />
              </div>

              <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="block group"
                    >
                      <div className="relative overflow-hidden rounded-lg mb-3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <h4 className="font-semibold text-white group-hover:text-slate-300 transition-colors mb-2 leading-snug">
                        {post.title}
                      </h4>
                      <p className="text-sm text-slate-400">{post.date}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 text-white border border-slate-600">
                <h3 className="text-xl font-bold mb-3">Need Help?</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Get expert assistance with your e-commerce audit and optimization.
                </p>
                <button className="w-full px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                  Contact Us
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

    </div>
  );
}



