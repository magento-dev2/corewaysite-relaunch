"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Brain, ShoppingCart, Workflow, Smartphone, BarChart3, Cloud } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const { t } = useLanguage();

  const expertiseAreas = [
    {
      icon: Brain,
      title: t('expertise.areas.ai.title'),
      description: t('expertise.areas.ai.description'),
      link: "#",
      linkText: t('expertise.areas.ai.link'),
    },
    {
      icon: ShoppingCart,
      title: t('expertise.areas.commerce.title'),
      description: t('expertise.areas.commerce.description'),
      link: "#",
      linkText: t('expertise.areas.commerce.link'),
    },
    {
      icon: Workflow,
      title: t('expertise.areas.automation.title'),
      description: t('expertise.areas.automation.description'),
      link: "#",
      linkText: t('expertise.areas.automation.link'),
    },
    {
      icon: Smartphone,
      title: t('expertise.areas.mobile.title'),
      description: t('expertise.areas.mobile.description'),
      link: "#",
      linkText: t('expertise.areas.mobile.link'),
    },
    {
      icon: BarChart3,
      title: t('expertise.areas.analytics.title'),
      description: t('expertise.areas.analytics.description'),
      link: "#",
      linkText: t('expertise.areas.analytics.link'),
    },
    {
      icon: Cloud,
      title: t('expertise.areas.cloud.title'),
      description: t('expertise.areas.cloud.description'),
      link: "#",
      linkText: t('expertise.areas.cloud.link'),
    },
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const section = sectionRef.current;
  const leftSide = leftSideRef.current;
  const rightSide = rightSideRef.current;

  if (!section || !leftSide || !rightSide) return;

  const mm = gsap.matchMedia();

  // ✅ DESKTOP ONLY (Pin + animation)
  mm.add("(min-width: 768px)", () => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${rightSide.offsetHeight - window.innerHeight + 200}`,
      pin: leftSide,
      pinSpacing: false,
      anticipatePin: 1,
    });

    const cards = rightSide.querySelectorAll(".expertise-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  });

  // ✅ MOBILE ONLY (No pin, natural flow)
  mm.add("(max-width: 767px)", () => {
    leftSide.style.position = "relative";
  });

  return () => mm.revert();
}, []);


  return (
    <section
      ref={sectionRef}
      className="relative  bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE - PINNED */}
          <div ref={leftSideRef} className="md:sticky md:top-24">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('expertise.title')}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('expertise.description')}
              </p>
              
              {/* Optional CTA or additional content */}
              <div className="pt-6">
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
                  View All Services
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - SCROLLING CONTENT */}
          <div ref={rightSideRef} className="space-y-12">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="expertise-card group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {area.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
                      {area.description}
                    </p>
                    
                    <a
                      href={area.link}
                      className="group/link inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-all text-sm"
                    >
                      <span>{area.linkText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
