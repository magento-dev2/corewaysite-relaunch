import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    const blogs = [
        {
            title: 'The Future of AI in Enterprise Automation',
            slug: 'future-of-ai-enterprise-automation',
            excerpt: 'Discover how Artificial Intelligence is reshaping business workflows and driving efficiency at scale.',
            content: `
        <h2>The AI Revolution is Here</h2>
        <p>Artificial Intelligence is no longer just a buzzword; it's a fundamental driver of business transformation. From predictive analytics to automated customer support, AI is enabling enterprises to operate smarter and faster.</p>
        <h3>Key Benefits</h3>
        <ul>
          <li><strong>Efficiency:</strong> Automate repetitive tasks and free up human talent for strategic work.</li>
          <li><strong>Insights:</strong> Analyze vast amounts of data to uncover actionable business intelligence.</li>
          <li><strong>Scalability:</strong> Scale operations without linear increases in headcount.</li>
        </ul>
        <p>At Coreway, we help businesses harness the power of AI to build future-ready intelligent systems.</p>
      `,
            coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop',
        },
        {
            title: 'Building Scalable Microservices with Node.js',
            slug: 'building-scalable-microservices-nodejs',
            excerpt: 'A deep dive into architectural patterns for building resilient and high-performance microservices.',
            content: `
        <h2>Why Microservices?</h2>
        <p>Monolithic architectures often become bottlenecks as applications grow. Microservices offer a way to decouple components, allowing for independent scaling and deployment.</p>
        <h3>Best Practices</h3>
        <p>When building microservices with Node.js, consider the following:</p>
        <ul>
          <li>Use a robust API gateway.</li>
          <li>Implement circuit breakers for fault tolerance.</li>
          <li>Ensure centralized logging and monitoring.</li>
        </ul>
        <p>Our dedicated developers are experts in crafting scalable microservices architectures.</p>
      `,
            coverImage: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1740&auto=format&fit=crop',
        },
        {
            title: 'Optimizing React Performance for Large Apps',
            slug: 'optimizing-react-performance',
            excerpt: 'Tips and techniques to ensure your React applications remain fast and responsive as they grow.',
            content: `
        <h2>Performance Matters</h2>
        <p>User experience is directly tied to application performance. Slow load times and laggy interactions can drive users away.</p>
        <h3>Optimization Techniques</h3>
        <ul>
          <li><strong>Code Splitting:</strong> Load only the code needed for the current view.</li>
          <li><strong>Memoization:</strong> Use useMemo and useCallback to prevent unnecessary re-renders.</li>
          <li><strong>Virtualization:</strong> Render large lists efficiently.</li>
        </ul>
        <p>Coreway's frontend experts build lightning-fast interfaces that delight users.</p>
      `,
            coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1740&auto=format&fit=crop',
        },
    ];

    for (const blog of blogs) {
        await prisma.blog.upsert({
            where: { slug: blog.slug },
            update: {},
            create: blog,
        });
    }

    console.log('Seed data inserted');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
