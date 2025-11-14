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

export default function Home() {
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
      {/* <Expertise2 /> */}


      <ScrollScale delay={0.2}>
        <PortfolioHighlights />
      </ScrollScale>

      <ScrollFadeIn direction="up" duration={1.5}>
        <Integrations />
      </ScrollFadeIn>

      <ScrollParallax speed={0.2}>
        <ScrollFadeIn direction="left">
          <Testimonials />
        </ScrollFadeIn>
      </ScrollParallax>

      <IndustriesWeServe />

      <BlogSection />

      <ScrollScale>
        <PageCTA
          badge="Start automating today"
          title="Ready to transform your workflows?"
          description="Join thousands of teams using Coreway to automate their work and focus on what matters most. Build powerful automations in minutes, not hours."
          primaryButtonText="Get started for free"
          secondaryButtonText="Talk to sales"
          footerText="No credit card required • Free forever for core features • Cancel anytime"
        />
      </ScrollScale>
    </div>
  );
}
