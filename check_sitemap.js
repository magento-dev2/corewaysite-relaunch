const fs = require('fs');

// All pages from the app directory
const allPages = [
    '/',
    '/about',
    '/about/company-overview',
    '/about/why-coreway',
    '/admin',
    '/admin/case-studies',
    '/admin/case-studies/create',
    '/admin/case-studies/edit/[id]',
    '/admin/create',
    '/admin/edit/[id]',
    '/admin/login',
    '/admin/positions',
    '/admin/positions/create',
    '/admin/positions/edit/[id]',
    '/ai-data',
    '/ai-data/aws-s3-optimization',
    '/ai-data/custom-dashboards',
    '/ai-data/dataset-management-delivery',
    '/ai-data/gpt-automation',
    '/ai-data/infrastructure-security-ai',
    '/ai-data/metadata-extraction-ai',
    '/api-reference',
    '/blog',
    '/blog/[slug]',
    '/careers',
    '/case-studies',
    '/case-studies/[slug]',
    '/community',
    '/contact',
    '/cookie-policy',
    '/dedicated-developers',
    '/dedicated-developers/hire-developers',
    '/documentation',
    '/faq-example',
    '/gdpr-compliance',
    '/industries',
    '/industries/automotive',
    '/industries/ecommerce-stores',
    '/industries/fashion-apparel',
    '/industries/food-beverage',
    '/industries/furniture-home-decor',
    '/industries/manufacturing-iot',
    '/industries/pharmaceuticals-healthcare',
    '/insights',
    '/partners',
    '/portfolio',
    '/press-kit',
    '/privacy-policy',
    '/refund-policy',
    '/sitemap',
    '/solution/ai-agent',
    '/solution/ai-agent/[slug]',
    '/solution/ai-agent/rag-chatbot-pdf',
    '/solution/ai-chat-with-pdf',
    '/solution/ai-consulting',
    '/solution/ai-integration-services',
    '/solution/ai-powered-application-platforms',
    '/solution/analytics',
    '/solution/business-workflow-automation',
    '/solution/custom-api-systems-integration',
    '/solution/dbdashbot',
    '/solution/digital-commerce-transformation',
    '/solution/erp-solutions',
    '/solution/image-reorganization-tool',
    '/solution/infrastructure-security-ai',
    '/solution/iot-application-development',
    '/solution/mobile-application',
    '/solution/product-development-forstartups',
    '/solution/rag-chatbot',
    '/solution/replatforming-migration',
    '/solution/saas-infrastructure-devops',
    '/solution/ugs-ads',
    '/solutions',
    '/technologies',
    '/technologies/cloud-storage',
    '/technologies/databases',
    '/technologies/iot-protocols',
    '/technologies/laravel-php',
    '/technologies/nodejs',
    '/technologies/python',
    '/technologies/react',
    '/technologies/s3-process',
    '/technologies/security-tools',
    '/terms-of-service',
    '/tutorials',
];

// Current sitemap URLs (from sitemap.xml/route.ts)
const sitemapUrls = [
    '/',
    '/contact',
    '/sitemap',
    '/blog',
    '/case-studies',
    '/portfolio',
    '/community',
    '/insights',
    '/tutorials',
    '/about',
    '/about/company-overview',
    '/about/why-coreway',
    '/careers',
    '/partners',
    '/press-kit',
    '/dedicated-developers',
    '/dedicated-developers/hire-developers',
    '/documentation',
    '/api-reference',
    '/solutions',
    '/solution/digital-commerce-transformation',
    '/solution/product-development-forstartups',
    '/solution/ai-powered-application-platforms',
    '/solution/iot-application-development',
    '/solution/saas-infrastructure-devops',
    '/solution/business-workflow-automation',
    '/solution/mobile-application',
    '/solution/erp-solutions',
    '/solution/ai-consulting',
    '/solution/ai-integration-services',
    '/solution/ai-agent',
    '/solution/ai-agent/rag-chatbot-pdf',
    '/solution/ai-chat-with-pdf',
    '/solution/rag-chatbot',
    '/solution/dbdashbot',
    '/solution/replatforming-migration',
    '/solution/ugs-ads',
    '/solution/analytics',
    '/solution/custom-api-systems-integration',
    '/solution/infrastructure-security-ai',
    '/solution/image-reorganization-tool',
    '/ai-data',
    '/ai-data/dataset-management-delivery',
    '/ai-data/aws-s3-optimization',
    '/ai-data/metadata-extraction-ai',
    '/ai-data/gpt-automation',
    '/ai-data/custom-dashboards',
    '/ai-data/infrastructure-security-ai',
    '/industries',
    '/industries/ecommerce-stores',
    '/industries/automotive',
    '/industries/manufacturing-iot',
    '/industries/food-beverage',
    '/industries/furniture-home-decor',
    '/industries/fashion-apparel',
    '/industries/pharmaceuticals-healthcare',
    '/technologies',
    '/technologies/react',
    '/technologies/nodejs',
    '/technologies/python',
    '/technologies/laravel-php',
    '/technologies/databases',
    '/technologies/cloud-storage',
    '/technologies/s3-process',
    '/technologies/iot-protocols',
    '/technologies/security-tools',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
    '/gdpr-compliance',
    '/refund-policy',
];

// Pages to exclude from sitemap (admin pages, dynamic routes, etc.)
const excludePages = [
    '/admin',
    '/admin/case-studies',
    '/admin/case-studies/create',
    '/admin/case-studies/edit/[id]',
    '/admin/create',
    '/admin/edit/[id]',
    '/admin/login',
    '/admin/positions',
    '/admin/positions/create',
    '/admin/positions/edit/[id]',
    '/blog/[slug]',
    '/case-studies/[slug]',
    '/solution/ai-agent/[slug]',
    '/faq-example', // example page
];

// Filter out excluded pages
const publicPages = allPages.filter(page => !excludePages.includes(page));

// Find missing pages
const missingPages = publicPages.filter(page => !sitemapUrls.includes(page));

console.log('=== SITEMAP ANALYSIS ===\n');
console.log(`Total pages in app directory: ${allPages.length}`);
console.log(`Pages excluded (admin/dynamic/examples): ${excludePages.length}`);
console.log(`Public pages that should be in sitemap: ${publicPages.length}`);
console.log(`Current pages in sitemap: ${sitemapUrls.length}`);
console.log(`Missing pages from sitemap: ${missingPages.length}\n`);

if (missingPages.length > 0) {
    console.log('=== MISSING PAGES ===');
    missingPages.forEach((page, index) => {
        console.log(`${index + 1}. ${page}`);
    });
} else {
    console.log('✓ All public pages are in the sitemap!');
}

// Save report
const report = {
    totalPages: allPages.length,
    excludedPages: excludePages.length,
    publicPages: publicPages.length,
    currentSitemapPages: sitemapUrls.length,
    missingPages: missingPages.length,
    missingPagesList: missingPages
};

fs.writeFileSync('sitemap_analysis.json', JSON.stringify(report, null, 2));
console.log('\n✓ Report saved to sitemap_analysis.json');
