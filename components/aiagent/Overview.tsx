"use client";

import { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface OverviewProps {
  title: string;
  content: string;
  image: string;
  highlights?: string[];
}

export default function Overview({ title, content, image, highlights }: OverviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const defaultHighlights = [
    'Automate repetitive manual business tasks',
    'Custom AI agents tailored to your workflow',
    'Seamless integration with existing SaaS',
    'Scalable AI infrastructure for growth',
  ];

  const displayHighlights = highlights || defaultHighlights;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {content}
            </p>

            <div className="space-y-4">
              {displayHighlights.map((highlight: string, index: number) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="text-purple-500" size={24} />
                  </div>
                  <span className="text-gray-300 text-lg">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 h-full ${isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-20 rotate-3'
              }`}
          >
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative relative-overview-img h-full md:min-h-[500px]">
                <img
                  src={image}
                  alt="Overview"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
