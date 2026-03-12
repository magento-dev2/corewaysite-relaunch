"use client";

import dynamic from 'next/dynamic';
import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import { ScrollFadeIn, ScrollScale } from '../components/home/ScrollAnimations';
import { useLanguage } from '@/contexts/LanguageContext';
import sampleFAQs from '@/data/faq.json';

// Dynamic imports for below-the-fold components
const MagicalNumbers = dynamic(() => import('../components/home/MagicalNumbers'), { ssr: true });
const ServicesGSAP = dynamic(() => import('../components/home/ServicesGSAP'), { ssr: true });
const Expertise = dynamic(() => import('../components/home/Expertise'), { ssr: true });
const Integrations = dynamic(() => import('../components/home/Integrations'), { ssr: true });
const Testimonials = dynamic(() => import('../components/home/Testimonials'), { ssr: true });
const PageCTA = dynamic(() => import('../components/PageCTA'), { ssr: true });
const PortfolioHighlights = dynamic(() => import('../components/home/PortfolioHighlights'), { ssr: true });
const IndustriesWeServe = dynamic(() => import('../components/home/IndustriesWeServe'), { ssr: true });
const BlogSection = dynamic(() => import('../components/home/BlogSection'), { ssr: true });
const CTOSection = dynamic(() => import('@/components/home/CTO'), { ssr: true });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true });

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className='overflow-x-hidden'>
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
