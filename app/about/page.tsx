'use client'; // only if you need client-side features

import Breadcrumb from "@/components/about/Breadcrumb";
import CompanyOverview from "@/components/about/CompanyOverview";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import OurProcess from "@/components/about/OurProcess";
import OurTeam from "@/components/about/OurTeam";
import PageCTA from "@/components/PageCTA";
import Head from "next/head";
import aboutUsData from '../../data/aboutUsData.json';

export default function AboutUs() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Coreway Solution',
    url: 'https://www.corewaysolution.com',
    logo: 'https://www.corewaysolution.com/logo.png',
    description: aboutUsData.companyOverview.description,
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  };

  return (
    <>
      <Head>
        <title>About Us | Coreway Solution - Our Story, Team & Mission</title>
        <meta
          name="description"
          content="Learn about Coreway Solution's mission to democratize workflow automation. Meet our team and discover our approach to helping businesses work smarter."
        />
        <meta property="og:title" content="About Us | Coreway Solution" />
        <meta
          property="og:description"
          content="Learn about Coreway Solution's mission to democratize workflow automation. Meet our team and discover our approach to helping businesses work smarter."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.corewaysolution.com/about" />
        <link rel="canonical" href="https://www.corewaysolution.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="bg-gradient-to-b from-[#0E0918] to-[#1a1325] pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: 'About Us' }]} />
            <div className="text-center mt-8">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                About Coreway Solution
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Empowering teams worldwide with intelligent automation solutions
              </p>
            </div>
          </div>
        </header>

        <main>
          <CompanyOverview data={aboutUsData.companyOverview} />
          <JourneyTimeline />
          <OurProcess />
          <OurTeam members={aboutUsData.teamMembers} />
          <PageCTA
            badge="Join our team"
            title="Want to work with us?"
            description="We're always looking for talented people who share our passion for innovation and automation. Join our team and help shape the future of workflow automation."
            primaryButtonText="View open positions"
            secondaryButtonText="Learn about our culture"
            footerText="Remote-friendly • Competitive benefits • Growth opportunities"
          />
        </main>
      </div>
    </>
  );
}
