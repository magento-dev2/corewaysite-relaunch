import type { Metadata } from "next";
import CaseStudyHero from "@/components/casestudy/CaseStudyHero";
import CaseStudyOverview from "@/components/casestudy/CaseStudyOverview";
import CaseStudyChallenge from "@/components/casestudy/CaseStudyChallenge";
import CaseStudySolution from "@/components/casestudy/CaseStudySolution";
import CaseStudyProcess from "@/components/casestudy/CaseStudyProcess";
import CaseStudyImpact from "@/components/casestudy/CaseStudyImpact";
import CaseStudyStats from "@/components/casestudy/CaseStudyStats";
import CaseStudyDetails from "@/components/casestudy/CaseStudyDetails";

interface PageProps {
  params: Promise<{ slug: string }>;
}

import productsData from "../../../data/caseStudies.json";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase()
  );

  return {
    title: product
      ? `${product.title} | Case Study`
      : "Case Study Not Found | Coreway Solution",
    description: product
      ? `Explore how Coreway Solution helped with ${product.title}.`
      : "Case study not found.",
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  const product = productsData.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!product)
    return (
      <div className="pt-40 text-center text-red-500 min-h-screen">
        Product not found
      </div>
    );

  return (
    <div className="bg-[#0A0A0A]">
      <CaseStudyHero
        title={product.title}
        subtitle={product.subtitle}
        bannerImage={product.bannerImage}
        client={product.client}
        industry={product.industry}
        location={product.location}
        services={product.services}
        duration={product.duration}
        teamSize={product.teamSize}
        gradient={product.gradient}
      />



      <CaseStudyOverview overview={product.overview} />
      <div className="bg-gradient-to-b from-[#0A0014] to-[#120020]" >


        <div className="max-w-7xl mx-auto px-6 py-20 ">
          <div className="grid lg:grid-cols-2 gap-16">
            <CaseStudyChallenge challenge={product.challenge} />
            <CaseStudySolution solution={product.solution} />
          </div>
        </div>
      </div>

      <CaseStudyProcess process={product.process} />

      <CaseStudyDetails
        technologies={product.technologies}
        results={product.results}
      />

      {/* <CaseStudyStats stats={product.stats} gradient={product.gradient} /> */}

      {/* <CaseStudyImpact
        impact={product.impact}
        testimonial={product.testimonial}
      /> */}
    </div>
  );
}
