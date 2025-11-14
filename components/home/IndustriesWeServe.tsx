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
  {
    icon: '🚚',
    title: 'Transportation',
    description: 'Logistics optimization'
  },
  {
    icon: '🎬',
    title: 'Entertainment',
    description: 'Media platforms'
  },
  {
    icon: '🍽️',
    title: 'Hospitality',
    description: 'Booking and management'
  },
  {
    icon: '✈️',
    title: 'Travel',
    description: 'Travel planning systems'
  },
  {
    icon: '⚖️',
    title: 'Legal',
    description: 'Case management tools'
  },
  {
    icon: '🏗️',
    title: 'Construction',
    description: 'Project management'
  }
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
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out'
    });

    cards.forEach((card, index) => {
      if (card) {
        tl.from(card, {
          opacity: 0,
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
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
          <div className="industries-header lg:sticky lg:top-32">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
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
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="text-3xl">{industry.icon}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {industry.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
