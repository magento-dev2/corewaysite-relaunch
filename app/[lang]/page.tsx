'use client';

import HomeHero from '@/components/home/HomeHero';
import TrustedBy from '@/components/home/TrustedBy';
import MagicalNumbers from '@/components/home/MagicalNumbers';
import ServicesGSAP from '@/components/home/ServicesGSAP';
import Expertise from '@/components/home/Expertise';
import Integrations from '@/components/home/Integrations';
import Testimonials from '@/components/home/Testimonials';
import PageCTA from '@/components/PageCTA';
import PortfolioHighlights from '@/components/home/PortfolioHighlights';
import { ScrollFadeIn, ScrollScale, ScrollParallax } from '@/components/home/ScrollAnimations';
import { Locale } from '@/lib/i18n/config';
import { useEffect, useState } from 'react';

async function loadTranslations(locale: Locale) {
  const translations = await import(`@/locales/${locale}/home.json`);
  return translations.default;
}

interface HomeProps {
  params: Promise<{ lang: Locale }>;
}

export default function Home({ params }: HomeProps) {
  const [lang, setLang] = useState<Locale>('en');
  const [t, setT] = useState<any>(null);

  useEffect(() => {
    async function init() {
      const { lang: locale } = await params;
      setLang(locale);
      const translations = await loadTranslations(locale);
      setT(translations);
    }
    init();
  }, [params]);

  if (!t) {
    return <div className="min-h-screen bg-[#0E0918]" />;
  }

  return (
    <div className='overflow-hidden'>
      <HomeHero t={t.hero} />

      <ScrollFadeIn direction="up">
        <TrustedBy t={t.trustedBy} />
      </ScrollFadeIn>

      <ScrollScale>
        <MagicalNumbers t={t.companyOverview} />
      </ScrollScale>

      <ServicesGSAP t={t.services} />

      <Expertise t={t.expertise} />

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

      <ScrollScale>
        <PageCTA
          badge={t.cta.badge}
          title={t.cta.title}
          description={t.cta.description}
          primaryButtonText={t.cta.primaryButton}
          secondaryButtonText={t.cta.secondaryButton}
          footerText={t.cta.footer}
        />
      </ScrollScale>
    </div>
  );
}
