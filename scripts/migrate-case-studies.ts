const { PrismaClient } = require('@prisma/client');
const caseStudiesData = require('../data/caseStudies.json');

const prisma = new PrismaClient();

async function main() {
  console.log('Starting case studies migration...');

  // Handle both array directly or object with caseStudies property
  const studies = Array.isArray(caseStudiesData) ? caseStudiesData : caseStudiesData.caseStudies || [];

  for (const caseStudy of studies) {
    console.log(`Migrating: ${caseStudy.title}`);

    // Check if already exists
    const existing = await prisma.caseStudy.findUnique({
      where: { slug: caseStudy.slug }
    });

    if (existing) {
      console.log(`Skipping ${caseStudy.title} - already exists`);
      continue;
    }

    await prisma.caseStudy.create({
      data: {
        slug: caseStudy.slug,
        title: caseStudy.title,
        subtitle: caseStudy.subtitle,
        client: caseStudy.client,
        industry: caseStudy.industry,
        location: caseStudy.location,
        overview: caseStudy.overview,
        services: caseStudy.services,
        technologies: caseStudy.technologies,
        duration: caseStudy.duration,
        teamSize: caseStudy.teamSize,
        imageUrl: caseStudy.imageUrl,
        bannerImage: caseStudy.bannerImage || caseStudy.imageUrl, // Fallback if missing

        // Client Overview
        clientOverviewTitle: caseStudy.clientOverview?.title || null,
        clientOverviewDescription: caseStudy.clientOverview?.description || null,

        // Challenge
        challengeTitle: caseStudy.challenge?.title || null,
        challengeDescription: caseStudy.challenge?.description || null,
        challengePoints: caseStudy.challenge?.points || [],
        challengeConclusion: caseStudy.challenge?.conclusion || null,
        challengeImage: caseStudy.challenge?.image || null,

        // Solution
        solutionTitle: caseStudy.solution?.title || null,
        solutionDescription: caseStudy.solution?.description || null,
        solutionSteps: caseStudy.solution?.steps || null,
        solutionImage: caseStudy.solution?.image || null,

        // Impact
        impactTitle: caseStudy.impact?.title || null,
        impactDescription: caseStudy.impact?.description || null,
        impactPoints: caseStudy.impact?.points || [],
        impactConclusion: caseStudy.impact?.conclusion || null,
        impactImage: caseStudy.impact?.image || null,

        // Stats
        stats: caseStudy.stats,

        // Testimonial
        testimonialQuote: caseStudy.testimonial?.quote || null,
        testimonialAuthor: caseStudy.testimonial?.author || null,
        testimonialPosition: caseStudy.testimonial?.position || null,
        testimonialImage: caseStudy.testimonial?.image || null,

        // Quote
        quoteText: caseStudy.quote?.text || null,
        quoteAuthor: caseStudy.quote?.author || null,

        // UI Styling
        gradient: caseStudy.gradient || null,
        icon: caseStudy.icon || null,

        // Status
        isActive: true,
        publishedAt: new Date(),
      },
    });

    console.log(`✓ Migrated: ${caseStudy.title}`);
  }

  console.log('\nMigration completed successfully!');
}

main()
  .catch((e) => {
    console.error('Migration failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
