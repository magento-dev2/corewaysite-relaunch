'use client'

import BusinessValue from "@/components/case-study/BusinessValue"
import ClientBackground from "@/components/case-study/ClientBackground"
import CoreChallenges from "@/components/case-study/CoreChallenges"
import HeroSection from "@/components/case-study/HeroSection"
import MoreCaseStudies from "@/components/case-study/MoreCaseStudies"
import ProjectBrief from "@/components/case-study/ProjectBrief"
import QnASection from "@/components/case-study/QnASection"
import SolutionScope from "@/components/case-study/SolutionScope"
import TechnologyStack from "@/components/case-study/TechnologyStack"

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen ">
      <HeroSection/>
      <ClientBackground/>
      <ProjectBrief/>
      <CoreChallenges/>
      <SolutionScope/>
      <QnASection/>
      <TechnologyStack/>
      <BusinessValue/>
      <MoreCaseStudies/>
      {/* <CTASection /> */}
    </main>
  )
}
