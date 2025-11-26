import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import BusinessValue from "@/components/case-study/BusinessValue"
import CaseStudyStats from "@/components/case-study/CaseStudyStats"
import ClientBackground from "@/components/case-study/ClientBackground"
import ClientTestimonial from "@/components/case-study/ClientTestimonial"
import CoreChallenges from "@/components/case-study/CoreChallenges"
import HeroSection from "@/components/case-study/HeroSection"
import MoreCaseStudies from "@/components/case-study/MoreCaseStudies"
import SolutionScope from "@/components/case-study/SolutionScope"
import TechnologyStack from "@/components/case-study/TechnologyStack"

export const revalidate = 60; // Revalidate every 60 seconds

async function getCaseStudy(slug: string) {
  try {
    const caseStudy = await prisma.caseStudy.findUnique({
      where: { slug },
    });
    return caseStudy;
  } catch (error) {
    console.log('Database not available');
    return null;
  }
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const caseStudy = await getCaseStudy(params.slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: caseStudy.metaTitle || caseStudy.title,
    description: caseStudy.metaDescription || caseStudy.overview,
    keywords: caseStudy.metaKeywords ? caseStudy.metaKeywords.split(',').map(k => k.trim()) : [],
    openGraph: {
      title: caseStudy.metaTitle || caseStudy.title,
      description: caseStudy.metaDescription || caseStudy.overview,
      images: [caseStudy.imageUrl],
    },
  };
}

export default async function CaseStudyPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const dbCaseStudy = await getCaseStudy(params.slug)

  if (!dbCaseStudy) {
    notFound()
  }

  // Transform flat DB structure to nested JSON structure expected by components
  const caseStudy = {
    ...dbCaseStudy,
    clientOverview: {
      title: dbCaseStudy.clientOverviewTitle,
      description: dbCaseStudy.clientOverviewDescription,
    },
    challenge: {
      title: dbCaseStudy.challengeTitle,
      description: dbCaseStudy.challengeDescription,
      points: dbCaseStudy.challengePoints,
      conclusion: dbCaseStudy.challengeConclusion,
      image: dbCaseStudy.challengeImage,
    },
    solution: {
      title: dbCaseStudy.solutionTitle,
      description: dbCaseStudy.solutionDescription,
      steps: dbCaseStudy.solutionSteps,
      image: dbCaseStudy.solutionImage,
    },
    impact: {
      title: dbCaseStudy.impactTitle,
      description: dbCaseStudy.impactDescription,
      points: dbCaseStudy.impactPoints,
      conclusion: dbCaseStudy.impactConclusion,
      image: dbCaseStudy.impactImage,
    },
    testimonial: {
      quote: dbCaseStudy.testimonialQuote,
      author: dbCaseStudy.testimonialAuthor,
      position: dbCaseStudy.testimonialPosition,
      image: dbCaseStudy.testimonialImage,
    },
    quote: {
      text: dbCaseStudy.quoteText,
      author: dbCaseStudy.quoteAuthor,
    }
  };

  return (
    <main className="min-h-screen bg-[#0E0918]">
      <HeroSection data={caseStudy} />
      <CaseStudyStats data={caseStudy} />
      <ClientBackground data={caseStudy} />
      <CoreChallenges data={caseStudy} />
      <SolutionScope data={caseStudy} />
      <TechnologyStack data={caseStudy} />
      <BusinessValue data={caseStudy} />
      <ClientTestimonial data={caseStudy} />
      <MoreCaseStudies currentSlug={params.slug} />
    </main>
  )
}
