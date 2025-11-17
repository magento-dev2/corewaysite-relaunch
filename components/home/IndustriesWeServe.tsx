"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    icon: '🏥',
    title: 'Healthcare',
    description: 'Custom healthcare solutions'
  },
  {
    icon: '🛍️',
    title: 'Retail',
    description: 'E-commerce platforms'
  },
  {
    icon: '🏦',
    title: 'Finance',
    description: 'Secure fintech solutions'
  },
  {
    icon: '🎓',
    title: 'Education',
    description: 'Learning management systems'
  },
  {
    icon: '🤝',
    title: 'Real-estate',
    description: 'Property management tools'
  },
  {
    icon: '🏭',
    title: 'Manufacturing',
    description: 'IoT and automation'
  },
  // {
  //   icon: '🚚',
  //   title: 'Transportation',
  //   description: 'Logistics optimization'
  // },
  // {
  //   icon: '🎬',
  //   title: 'Entertainment',
  //   description: 'Media platforms'
  // },
  // {
  //   icon: '🍽️',
  //   title: 'Hospitality',
  //   description: 'Booking and management'
  // },
  // {
  //   icon: '✈️',
  //   title: 'Travel',
  //   description: 'Travel planning systems'
  // },
  // {
  //   icon: '⚖️',
  //   title: 'Legal',
  //   description: 'Case management tools'
  // },
  // {
  //   icon: '🏗️',
  //   title: 'Construction',
  //   description: 'Project management'
  // }
];

export default function IndustriesWeServe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.from('.industries-header', {
      opacity: 1,
      y: 50,
      duration: 0.8,
      ease: 'power3.out'
    });

    cards.forEach((card, index) => {
      if (card) {
        tl.from(card, {
          opacity: 1,
          y: 60,
          scale: 0.8,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }, index * 0.08);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-[#0E0918] via-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
          <div className="industries-header lg:sticky lg:top-32">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Industries We Serve
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We develop industry-specific software solutions for healthcare, fintech, logistics,
              retail, and more, helping businesses tackle unique challenges with custom-built
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-5 border border-slate-700 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-slate-700 transition-all duration-500">
                    <span className="text-3xl">{industry.icon}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-slate-200 transition-colors duration-300">
                    {industry.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slate-500 to-slate-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
