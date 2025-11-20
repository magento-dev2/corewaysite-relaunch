import { MetadataRoute } from 'next';

export async function GET() {
  const baseUrl = 'https://www.corewaysolution.com';
  const currentDate = new Date().toISOString();

  const routes = [
    // Main Pages
    { url: `${baseUrl}/`, priority: 1.0, changeFreq: 'daily' },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFreq: 'monthly' },
    { url: `${baseUrl}/sitemap`, priority: 0.7, changeFreq: 'monthly' },

    // About
    { url: `${baseUrl}/about/company-overview`, priority: 0.8, changeFreq: 'monthly' },
    { url: `${baseUrl}/about/why-coreway`, priority: 0.8, changeFreq: 'monthly' },
    { url: `${baseUrl}/careers`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/partners`, priority: 0.8, changeFreq: 'monthly' },
    { url: `${baseUrl}/press-kit`, priority: 0.7, changeFreq: 'monthly' },

    // Solutions - Digital
    { url: `${baseUrl}/solution/digital-commerce-transformation`, priority: 0.9, changeFreq: 'weekly' },
    { url: `${baseUrl}/solution/product-development-forstartups`, priority: 0.9, changeFreq: 'weekly' },
    { url: `${baseUrl}/solution/ai-powered-application-platforms`, priority: 0.9, changeFreq: 'weekly' },

    // Solutions - Development & Integration
    { url: `${baseUrl}/solution/iot-application-development`, priority: 0.9, changeFreq: 'weekly' },
    { url: `${baseUrl}/solution/saas-infrastructure-devops`, priority: 0.9, changeFreq: 'weekly' },
    { url: `${baseUrl}/solution/business-workflow-automation`, priority: 0.9, changeFreq: 'weekly' },

    // Solutions - AI & Consulting
    { url: `${baseUrl}/solution/ai-consulting`, priority: 0.9, changeFreq: 'weekly' },
    { url: `${baseUrl}/solution/ai-integration-services`, priority: 0.9, changeFreq: 'weekly' },
    { url: `${baseUrl}/solution/replatforming-migration`, priority: 0.9, changeFreq: 'weekly' },
    { url: `${baseUrl}/solution/ugs-ads`, priority: 0.9, changeFreq: 'weekly' },

    // Solutions - Infrastructure & Security
    { url: `${baseUrl}/solution/custom-api-systems-integration`, priority: 0.9, changeFreq: 'weekly' },
    { url: `${baseUrl}/solution/infrastructure-security-ai`, priority: 0.9, changeFreq: 'weekly' },

    // AI & Data Engineering
    { url: `${baseUrl}/ai-data/dataset-management-delivery`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/ai-data/aws-s3-optimization`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/ai-data/metadata-extraction-ai`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/ai-data/gpt-automation`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/ai-data/custom-dashboards`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/ai-data/infrastructure-security-ai`, priority: 0.8, changeFreq: 'weekly' },

    // Industries
    { url: `${baseUrl}/industries/ecommerce-stores`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/industries/automotive`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/industries/manufacturing-iot`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/industries/food-beverage`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/industries/furniture-home-decor`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/industries/fashion-apparel`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/industries/pharmaceuticals-healthcare`, priority: 0.8, changeFreq: 'weekly' },

    // Technologies
    { url: `${baseUrl}/technologies/react`, priority: 0.7, changeFreq: 'monthly' },
    { url: `${baseUrl}/technologies/nodejs`, priority: 0.7, changeFreq: 'monthly' },
    { url: `${baseUrl}/technologies/python`, priority: 0.7, changeFreq: 'monthly' },
    { url: `${baseUrl}/technologies/laravel-php`, priority: 0.7, changeFreq: 'monthly' },
    { url: `${baseUrl}/technologies/databases`, priority: 0.7, changeFreq: 'monthly' },
    { url: `${baseUrl}/technologies/cloud-storage`, priority: 0.7, changeFreq: 'monthly' },
    { url: `${baseUrl}/technologies/iot-protocols`, priority: 0.7, changeFreq: 'monthly' },
    { url: `${baseUrl}/technologies/security-tools`, priority: 0.7, changeFreq: 'monthly' },

    // Legal
    { url: `${baseUrl}/privacy-policy`, priority: 0.5, changeFreq: 'yearly' },
    { url: `${baseUrl}/terms-of-service`, priority: 0.5, changeFreq: 'yearly' },
    { url: `${baseUrl}/cookie-policy`, priority: 0.5, changeFreq: 'yearly' },
    { url: `${baseUrl}/gdpr-compliance`, priority: 0.5, changeFreq: 'yearly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changeFreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
