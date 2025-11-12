"use client";

import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface AcceleratorData {
  title: string;
  description: string;
  video: string;
}

interface AcceleratorSectionProps {
  data: AcceleratorData;
}

export default function AcceleratorSection({ data }: AcceleratorSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{data.title}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{data.description}</p>
          </div>
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-[#0E0918] to-[#1a1325] aspect-video flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10"></div>
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Play size={32} className="text-purple-600 ml-1" />
                </div>
                <p className="text-white text-sm font-medium">Watch Demo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
