import Breadcrumb from "@/components/about/Breadcrumb";
import CompanyOverview from "@/components/about/CompanyOverview";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import OurProcess from "@/components/about/OurProcess";
import PageCTA from "@/components/PageCTA";
import FAQ from "@/components/FAQ";
import aboutUsData from '@/data/aboutUsData.json';
import faqData from '@/data/faq.json';
import AboutHero from '@/components/about/AboutHero';
import WhyHero from "@/components/about/WhyHero";


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
        <WhyHero
          title={aboutUsData.hero.title}
          title2={aboutUsData.hero.title2}
          subtitle={aboutUsData.hero.subtitle}
          buttons={aboutUsData.hero.buttons}
        />
        <CompanyOverview data={aboutUsData.companyOverview} />
        <JourneyTimeline />
        <OurProcess />
        <FAQ
          badge="Frequently Asked Questions"
          title="Why Choose Coreway?"
          description="Discover what makes us different and how we can help transform your business"
          faqs={faqData}
          // columns={2}
        />
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
