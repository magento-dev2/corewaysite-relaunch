import Breadcrumb from "@/components/about/Breadcrumb";
import CompanyOverview from "@/components/about/CompanyOverview";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import OurProcess from "@/components/about/OurProcess";
import OurTeam from "@/components/about/OurTeam";
import PageCTA from "@/components/PageCTA";
import aboutUsData from '../../data/aboutUsData.json';
import AboutHero from '@/components/about/AboutHero';


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
        


      <main>
        <AboutHero
          title={aboutUsData.hero.title}
          title2={aboutUsData.hero.title2}
          subtitle={aboutUsData.hero.subtitle}
          buttons={aboutUsData.hero.buttons}
        />
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
