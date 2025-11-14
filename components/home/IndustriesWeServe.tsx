"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    icon: '🏥',
    title: 'Healthcare',
    description: 'We develop industry-specific software solutions for healthcare, helping medical institutions tackle unique challenges with custom-built technology and secure platforms.'
  },
  {
    icon: '🛍️',
    title: 'Retail',
    description: 'Scalable e-commerce platforms and retail management systems that drive sales, optimize inventory, and deliver exceptional customer experiences.'
  },
  {
    icon: '🏦',
    title: 'Finance',
    description: 'Secure fintech solutions with advanced encryption, compliance features, and seamless payment integrations for modern financial services.'
  },
  {
    icon: '🎓',
    title: 'Education',
    description: 'Comprehensive learning management systems and educational platforms that enhance student engagement and streamline administrative processes.'
  },
  {
    icon: '🤝',
    title: 'Real-estate',
    description: 'Property management tools and real estate platforms that simplify listings, transactions, and client relationship management.'
  },
  {
    icon: '🏭',
    title: 'Manufacturing',
    description: 'IoT-enabled manufacturing solutions with real-time monitoring, predictive maintenance, and workflow automation for operational excellence.'
  },
  {
    icon: '🚚',
    title: 'Transportation',
    description: 'Logistics optimization platforms with route planning, fleet management, and real-time tracking for efficient supply chain operations.'
  },
  {
    icon: '🎬',
    title: 'Entertainment',
    description: 'Media platforms and content delivery systems that engage audiences with seamless streaming and interactive experiences.'
  },
  {
    icon: '🍽️',
    title: 'Hospitality',
    description: 'Booking and management systems for hotels and restaurants, featuring reservation handling, guest services, and operational efficiency.'
  },
  {
    icon: '✈️',
    title: 'Travel',
    description: 'Travel planning systems with booking engines, itinerary management, and customer support tools for seamless travel experiences.'
  },
  {
    icon: '⚖️',
    title: 'Legal',
    description: 'Case management tools and legal workflow systems that streamline documentation, client communication, and regulatory compliance.'
  },
  {
    icon: '🏗️',
    title: 'Construction',
    description: 'Project management platforms for construction with scheduling, resource allocation, and progress tracking capabilities.'
  }
];

export default function IndustriesWeServe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftSide = leftSideRef.current;
    const rightSide = rightSideRef.current;

    if (!section || !leftSide || !rightSide) return;

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${rightSide.offsetHeight - window.innerHeight + 200}`,
      pin: leftSide,
      pinSpacing: false,
      anticipatePin: 1,
    });

    const cards = rightSide.querySelectorAll(".industry-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div ref={leftSideRef} className="md:sticky md:top-24">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We develop industry-specific software solutions for healthcare, fintech, logistics,
                retail, and more, helping businesses tackle unique challenges with custom-built
                technology.
              </p>

              <div className="pt-6">
                <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors border border-slate-600">
                  View All Industries
                </button>
              </div>
            </div>
          </div>

          <div ref={rightSideRef} className="space-y-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="industry-card group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{industry.icon}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-slate-200 transition-colors">
                      {industry.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
                    {industry.description}
                  </p>

                  <a
                    href="#"
                    className="group/link inline-flex items-center gap-2 text-slate-400 hover:text-slate-300 font-medium transition-all text-sm"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
