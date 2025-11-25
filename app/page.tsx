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


// const sampleFAQs = [
//   {
//     question: "What services do you offer?",
//     answer: "We offer a comprehensive range of services including AI integration, custom software development, cloud infrastructure, dedicated developers, and digital transformation solutions. Our team specializes in cutting-edge technologies to help businesses scale and innovate."
//   },
//   {
//     question: "How long does a typical project take?",
//     answer: "Project timelines vary based on scope and complexity. Simple integrations can be completed in 2-4 weeks, while comprehensive solutions typically take 3-6 months. We provide detailed project timelines during the discovery phase and maintain transparent communication throughout development."
//   },
//   {
//     question: "Do you provide ongoing support and maintenance?",
//     answer: "Yes! We offer comprehensive support packages including 24/7 monitoring, regular updates, security patches, and performance optimization. Our team ensures your systems run smoothly and efficiently long after launch."
//   },
//   {
//     question: "What is your pricing model?",
//     answer: "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team engagements. Pricing depends on project scope, technology stack, and team size. Contact us for a customized quote tailored to your specific needs."
//   },
//   {
//     question: "Can you work with our existing technology stack?",
//     answer: "Absolutely! Our developers are proficient in 50+ technologies across various platforms. We seamlessly integrate with your existing systems and can work with any technology stack including legacy systems, modern frameworks, and emerging technologies."
//   },
//   {
//     question: "How do you ensure project security and data privacy?",
//     answer: "Security is our top priority. We follow industry best practices including encryption, secure coding standards, regular security audits, and compliance with regulations like GDPR, HIPAA, and SOC 2. All team members sign NDAs and we implement strict access controls."
//   }
// ];


export default function Home() {
  const { t } = useLanguage();

  return (
    <div className='overflow-hidden' >
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

      <CTOSection/>

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
