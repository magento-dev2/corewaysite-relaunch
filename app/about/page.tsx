import Breadcrumb from "@/components/about/Breadcrumb";
import CompanyOverview from "@/components/about/CompanyOverview";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import OurProcess from "@/components/about/OurProcess";
import PageCTA from "@/components/PageCTA";
import FAQ from "@/components/FAQ";
import aboutUsData from '../../data/aboutUsData.json';
import faqData from '../../data/faq.json';
import AboutHero from '@/components/about/AboutHero';
import PortfolioHighlights from "@/components/about/PortfolioHighlights";
import Testimonials from "@/components/home/Testimonials";


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
   const projectData = [
  {
    id: 1,
    language: "Wordpress",
    images: ["/images/Wordpress/american.png"]
  },
  {
    id: 2,
    language: "Shopify",
    images: ["/images/Shopify/aurus.png"]
  },
  {
    id: 3,
    language: "WooCommerce",
    images: ["/images/WooCommerce/alhine.png"]
  },
  {
    id: 4,
    language: "Android",
    images: ["/images/Android/bapuji-1.png"]
  },
  {
    id: 5,
    language: "Magento",
    images: ["/images/Magento/knir.png"]
  },
  {
    id: 6,
    language: "Laravel",
    images: ["/images/Laravel/delaware.png"]
  }
];


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
              <PortfolioHighlights data={projectData} highlightCount={6} />
<Testimonials/>
        <FAQ
          badge="Frequently Asked Questions"
          title="Everything You Need to Know About Coreway"
          description="Find answers to common questions about our company, services, and approach"
          faqs={faqData}
          // columns={2}
        />
      <PageCTA
  badge="About Us"
  title="Empowering Growth"
  description="we specialize in creating innovative workflow automation solutions that streamline processes, boost efficiency, and drive growth. Our mission is to help businesses harness technology to achieve more, faster, and smarter."
  primaryButtonText="Learn More"
  secondaryButtonText="Why Coreway"
  footerText=" • Innovative solutions • Proven results • Customer-focused"
  primaryButtonlink="/about/company-overview"
  secondaryButtonlink="/about/why-coreway"
/>

      </main>
    </div>
  );
}
