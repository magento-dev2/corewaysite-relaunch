import Breadcrumb from "@/components/about/Breadcrumb";
import CompanyOverview from "@/components/about/CompanyOverview";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import OurProcess from "@/components/about/OurProcess";
import OurTeam from "@/components/about/OurTeam";
import PageCTA from "@/components/PageCTA";
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
  );
}
