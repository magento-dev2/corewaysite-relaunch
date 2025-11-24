"use client";

import { useEffect, useRef, useState } from 'react';

interface TechStackData {
  title: string;
  logos: string[];
}

interface TechStackProps {
  data: TechStackData;
}

const techLogos: Record<string, string> = {
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  aws: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
};

export default function TechStack({ data }: TechStackProps) {
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

  const getTechName = (logoPath: string) => {
    return logoPath.split('/').pop()?.replace('.svg', '') || '';
  };

  const getTechLogo = (logoPath: string) => {
    const techName = getTechName(logoPath);
    return techLogos[techName] || logoPath;
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {data.title}
        </h2>
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {data.logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center group"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img
                src={getTechLogo(logo)}
                alt={getTechName(logo)}
                className="w-16 h-16 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
