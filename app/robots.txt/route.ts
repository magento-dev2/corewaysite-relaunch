export async function GET() {
  const robotsTxt = `# robots.txt for Coreway Solution
# https://www.corewaysolution.com

User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.corewaysolution.com/sitemap.xml

# Disallow admin and internal paths (if any in future)
Disallow: /api/
Disallow: /_next/

# Allow search engines to crawl all public pages
Allow: /about/
Allow: /solution/
Allow: /ai-data/
Allow: /industries/
Allow: /technologies/
Allow: /careers
Allow: /partners
Allow: /press-kit
Allow: /contact
Allow: /privacy-policy
Allow: /terms-of-service
Allow: /cookie-policy
Allow: /gdpr-compliance
Allow: /sitemap

# Crawl-delay (optional, adjust if needed)
Crawl-delay: 1
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
