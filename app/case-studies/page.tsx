import CaseStudiesClient from './CaseStudiesClient';
import { prisma } from '@/lib/prisma';

export const revalidate = 60; // Revalidate every 60 seconds

async function getCaseStudies() {
  try {
    const caseStudies = await prisma.caseStudy.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
    return caseStudies;
  } catch (error) {
    console.log('Database not available, returning empty case studies');
    return [];
  }
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return <CaseStudiesClient caseStudies={caseStudies} />;
}
