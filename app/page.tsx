"use client";

import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import MagicalNumbers from '../components/home/MagicalNumbers';
import ServicesGSAP from '../components/home/ServicesGSAP';
import Expertise from '../components/home/Expertise';
import Integrations from '../components/home/Integrations';
import Testimonials from '../components/home/Testimonials';
import PageCTA from '../components/PageCTA';
import PortfolioHighlights from '../components/home/PortfolioHighlights';
import { ScrollFadeIn, ScrollScale, ScrollParallax } from '../components/home/ScrollAnimations';
import Expertise2 from '@/components/home/Expertise2';
import IndustriesWeServe from '../components/home/IndustriesWeServe';
import BlogSection from '../components/home/BlogSection';
import CTOSection from '@/components/home/CTO';
import { useLanguage } from '@/contexts/LanguageContext';
import FAQ from '@/components/FAQ';
import sampleFAQs from '@/data/faq.json';


export default function Home() {
  const { t } = useLanguage();

  return (
    <div className='overflow-x-hidden ' >
      <Hero />

      <ScrollFadeIn direction="up">
        <TrustedBy />
      </ScrollFadeIn>

      <ScrollScale>
        <MagicalNumbers />
      </ScrollScale>

      <ServicesGSAP />

      <Expertise />

      <ScrollScale delay={0.2}>
        <PortfolioHighlights />
      </ScrollScale>

      <CTOSection />

      <ScrollFadeIn direction="up" duration={1.5}>
        <Integrations />
      </ScrollFadeIn>



      <Testimonials />

      <IndustriesWeServe />


      <BlogSection />

      <ScrollScale>

        <FAQ
          badge="Help Center"
          title="Common Questions & Answers"
          description="Everything you need to know about our services and how we work"
          faqs={sampleFAQs}
          columns={1}
          showContactCTA={true}
          contactText="Still have questions?"
          contactButtonText="Contact Our Team"
        />
        <PageCTA
          badge={t('cta.badge')}
          title={t('cta.title')}
          description={t('cta.description')}
          primaryButtonText={t('cta.primaryButton')}
          secondaryButtonText={t('cta.secondaryButton')}
          footerText={t('cta.footer')}
        />
      </ScrollScale>
    </div>
  );
}
