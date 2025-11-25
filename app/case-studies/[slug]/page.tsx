'use client'

import { useParams } from 'next/navigation'
import caseStudies from '@/data/caseStudies.json'
import BusinessValue from "@/components/case-study/BusinessValue"
import ClientBackground from "@/components/case-study/ClientBackground"
import ClientTestimonial from "@/components/case-study/ClientTestimonial"
import CoreChallenges from "@/components/case-study/CoreChallenges"
import HeroSection from "@/components/case-study/HeroSection"
import MoreCaseStudies from "@/components/case-study/MoreCaseStudies"
import SolutionScope from "@/components/case-study/SolutionScope"
import TechnologyStack from "@/components/case-study/TechnologyStack"

export default function CaseStudyPage() {
  const params = useParams()
  const slug = params.slug
  const caseStudy = caseStudies.find(c => c.slug === slug)

  if (!caseStudy) {
    return <div className="min-h-screen flex items-center justify-center text-white">Case Study Not Found</div>
  }

  return (
    <main className="min-h-screen bg-[#0E0918]">
      <HeroSection data={caseStudy} />
      <ClientBackground data={caseStudy} />
      <CoreChallenges data={caseStudy} />
      <SolutionScope data={caseStudy} />
      <TechnologyStack data={caseStudy} />
      <BusinessValue data={caseStudy} />
      <ClientTestimonial data={caseStudy} />
      <MoreCaseStudies currentSlug={slug as string} />
    </main>
  )
}
