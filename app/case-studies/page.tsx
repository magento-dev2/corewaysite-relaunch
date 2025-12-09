import CaseStudiesClient from './CaseStudiesClient';
import { prisma } from '@/lib/prisma';

export const revalidate = 60; // Revalidate every 60 seconds

// async function getCaseStudies() {
//   try {
//     const caseStudies = await prisma.caseStudy.findMany({
//       where: { isActive: true },
//       orderBy: { createdAt: 'desc' },
//     });
//     return caseStudies;
//   } catch (error) {
//     console.log('Database not available, returning empty case studies');
//     return [];
//   }
// }


async function getCaseStudies() {
  try {
    const caseStudies = await prisma.caseStudy.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });

    return caseStudies.map((cs) => ({
      ...cs,
      stats: Array.isArray(cs.stats)
        ? cs.stats
        : typeof cs.stats === "string"
        ? JSON.parse(cs.stats)
        : [], // fallback
      services: Array.isArray(cs.services)
        ? cs.services
        : typeof cs.services === "string"
        ? JSON.parse(cs.services)
        : [], // fallback
    }));
  } catch (error) {
    console.log("Database not available, returning empty case studies");
    return [];
  }
}


export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return <CaseStudiesClient caseStudies={caseStudies} />;
}

export const metadata = {
  title: "Case Studies | Coreway Solution",
  description: "Explore Case Studies services and solutions by Coreway Solution. Expert AI development and digital transformation.",
  keywords: "case studies, coreway solution, AI development, automation",
  openGraph: {
    title: "Case Studies | Coreway Solution",
    description: "Explore Case Studies services and solutions by Coreway Solution. Expert AI development and digital transformation.",
    type: "website",
    url: "https://www.corewaysolution.com/case-studies/",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Coreway Solution",
    description: "Explore Case Studies services and solutions by Coreway Solution. Expert AI development and digital transformation.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/case-studies/"
  }
};

