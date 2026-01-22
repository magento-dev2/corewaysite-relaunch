const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Configuration
const BASE_URL = 'https://www.corewaysolution.com';
const API_KEY_FILE = path.join(__dirname, '../public/indexnow-key.txt');
const INDEXNOW_ENDPOINT = 'api.indexnow.org';

// All 71 URLs from your sitemap
const ALL_URLS = [
    // Main Pages
    `${BASE_URL}/`,
    `${BASE_URL}/contact`,
    `${BASE_URL}/sitemap`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/case-studies`,
    `${BASE_URL}/portfolio`,
    `${BASE_URL}/community`,
    `${BASE_URL}/insights`,
    `${BASE_URL}/tutorials`,

    // About
    `${BASE_URL}/about`,
    `${BASE_URL}/about/company-overview`,
    `${BASE_URL}/about/why-coreway`,
    `${BASE_URL}/careers`,
    `${BASE_URL}/partners`,
    `${BASE_URL}/press-kit`,

    // Developer Resources
    `${BASE_URL}/dedicated-developers`,
    `${BASE_URL}/dedicated-developers/hire-developers`,
    `${BASE_URL}/documentation`,
    `${BASE_URL}/api-reference`,

    // Solutions
    `${BASE_URL}/solutions`,
    `${BASE_URL}/solution/digital-commerce-transformation`,
    `${BASE_URL}/solution/product-development-forstartups`,
    `${BASE_URL}/solution/ai-powered-application-platforms`,
    `${BASE_URL}/solution/iot-application-development`,
    `${BASE_URL}/solution/saas-infrastructure-devops`,
    `${BASE_URL}/solution/business-workflow-automation`,
    `${BASE_URL}/solution/mobile-application`,
    `${BASE_URL}/solution/erp-solutions`,
    `${BASE_URL}/solution/ai-consulting`,
    `${BASE_URL}/solution/ai-integration-services`,
    `${BASE_URL}/solution/ai-agent`,
    `${BASE_URL}/solution/ai-agent/rag-chatbot-pdf`,
    `${BASE_URL}/solution/ai-chat-with-pdf`,
    `${BASE_URL}/solution/rag-chatbot`,
    `${BASE_URL}/solution/dbdashbot`,
    `${BASE_URL}/solution/replatforming-migration`,
    `${BASE_URL}/solution/ugs-ads`,
    `${BASE_URL}/solution/analytics`,
    `${BASE_URL}/solution/custom-api-systems-integration`,
    `${BASE_URL}/solution/infrastructure-security-ai`,
    `${BASE_URL}/solution/image-reorganization-tool`,

    // AI & Data Engineering
    `${BASE_URL}/ai-data`,
    `${BASE_URL}/ai-data/dataset-management-delivery`,
    `${BASE_URL}/ai-data/aws-s3-optimization`,
    `${BASE_URL}/ai-data/metadata-extraction-ai`,
    `${BASE_URL}/ai-data/gpt-automation`,
    `${BASE_URL}/ai-data/custom-dashboards`,
    `${BASE_URL}/ai-data/infrastructure-security-ai`,

    // Industries
    `${BASE_URL}/industries`,
    `${BASE_URL}/industries/ecommerce-stores`,
    `${BASE_URL}/industries/automotive`,
    `${BASE_URL}/industries/manufacturing-iot`,
    `${BASE_URL}/industries/food-beverage`,
    `${BASE_URL}/industries/furniture-home-decor`,
    `${BASE_URL}/industries/fashion-apparel`,
    `${BASE_URL}/industries/pharmaceuticals-healthcare`,

    // Technologies
    `${BASE_URL}/technologies`,
    `${BASE_URL}/technologies/react`,
    `${BASE_URL}/technologies/nodejs`,
    `${BASE_URL}/technologies/python`,
    `${BASE_URL}/technologies/laravel-php`,
    `${BASE_URL}/technologies/databases`,
    `${BASE_URL}/technologies/cloud-storage`,
    `${BASE_URL}/technologies/s3-process`,
    `${BASE_URL}/technologies/iot-protocols`,
    `${BASE_URL}/technologies/security-tools`,

    // Legal
    `${BASE_URL}/privacy-policy`,
    `${BASE_URL}/terms-of-service`,
    `${BASE_URL}/cookie-policy`,
    `${BASE_URL}/gdpr-compliance`,
    `${BASE_URL}/refund-policy`,
];

/**
 * Generate or load existing API key
 */
function getOrCreateApiKey() {
    // Check if API key file already exists
    if (fs.existsSync(API_KEY_FILE)) {
        const existingKey = fs.readFileSync(API_KEY_FILE, 'utf8').trim();
        console.log('✓ Using existing API key:', existingKey);
        return existingKey;
    }

    // Generate new API key (UUID format)
    const apiKey = crypto.randomUUID();

    // Create public directory if it doesn't exist
    const publicDir = path.dirname(API_KEY_FILE);
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    // Save API key to file
    fs.writeFileSync(API_KEY_FILE, apiKey);
    console.log('✓ Generated new API key:', apiKey);
    console.log(`✓ Saved to: ${API_KEY_FILE}`);

    return apiKey;
}

/**
 * Submit URLs to IndexNow
 */
function submitToIndexNow(apiKey) {
    return new Promise((resolve, reject) => {
        const requestBody = JSON.stringify({
            host: 'www.corewaysolution.com',
            key: apiKey,
            keyLocation: `${BASE_URL}/indexnow-key.txt`,
            urlList: ALL_URLS
        });

        const options = {
            hostname: INDEXNOW_ENDPOINT,
            path: '/indexnow',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(requestBody)
            }
        };

        console.log('\n📤 Submitting URLs to IndexNow...');
        console.log(`   Total URLs: ${ALL_URLS.length}`);

        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                if (res.statusCode === 200 || res.statusCode === 202) {
                    console.log('\n✅ SUCCESS! All URLs submitted to search engines');
                    console.log(`   Status Code: ${res.statusCode}`);
                    console.log('\n🎉 IndexNow has notified:');
                    console.log('   • Google');
                    console.log('   • Bing');
                    console.log('   • Yandex');
                    console.log('   • And other participating search engines');
                    resolve({ success: true, statusCode: res.statusCode, data });
                } else {
                    console.error(`\n❌ Error: Received status code ${res.statusCode}`);
                    console.error('Response:', data);
                    reject(new Error(`HTTP ${res.statusCode}: ${data}`));
                }
            });
        });

        req.on('error', (error) => {
            console.error('\n❌ Request failed:', error.message);
            reject(error);
        });

        req.write(requestBody);
        req.end();
    });
}

/**
 * Main execution
 */
async function main() {
    console.log('='.repeat(60));
    console.log('IndexNow Bulk URL Submission Script');
    console.log('='.repeat(60));
    console.log(`\nWebsite: ${BASE_URL}`);
    console.log(`Total Pages: ${ALL_URLS.length}\n`);

    try {
        // Step 1: Get or create API key
        const apiKey = getOrCreateApiKey();

        // Step 2: Create verification file with same name as API key
        const verificationFile = path.join(__dirname, '../public', `${apiKey}.txt`);
        if (!fs.existsSync(verificationFile)) {
            fs.writeFileSync(verificationFile, apiKey);
            console.log(`✓ Created verification file: ${apiKey}.txt`);
        }

        // Step 3: Submit to IndexNow
        await submitToIndexNow(apiKey);

        // Step 4: Next steps
        console.log('\n' + '='.repeat(60));
        console.log('📋 NEXT STEPS:');
        console.log('='.repeat(60));
        console.log('\n1. Deploy these files to your production server:');
        console.log(`   • public/indexnow-key.txt`);
        console.log(`   • public/${apiKey}.txt`);
        console.log('\n2. Verify the API key file is accessible:');
        console.log(`   Visit: ${BASE_URL}/${apiKey}.txt`);
        console.log(`   Should display: ${apiKey}`);
        console.log('\n3. Wait 24-48 hours for search engines to process');
        console.log('\n4. Check Google Search Console for indexing improvements');
        console.log('\n5. For immediate priority pages, use Google Search Console');
        console.log('   URL Inspection tool to request indexing manually');
        console.log('\n' + '='.repeat(60));

    } catch (error) {
        console.error('\n❌ FAILED:', error.message);
        process.exit(1);
    }
}

// Run the script
main();
