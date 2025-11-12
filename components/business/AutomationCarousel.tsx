"use client";


import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const automationDemos = [
  {
    id: 1,
    name: 'Lead Qualification Pipeline',
    description: 'Automatically score and route leads based on behavior and firmographics',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    id: 2,
    name: 'Invoice Processing',
    description: 'Extract data from invoices and sync with accounting software instantly',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    name: 'Customer Onboarding',
    description: 'Send welcome emails, create accounts, and schedule check-ins automatically',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    name: 'Social Media Publishing',
    description: 'Schedule and post content across multiple platforms from one workflow',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 5,
    name: 'Data Backup & Sync',
    description: 'Keep your databases synchronized across all systems in real-time',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    id: 6,
    name: 'Support Ticket Routing',
    description: 'Categorize and assign tickets to the right team members instantly',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export default function AutomationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAutoPlaying && isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % automationDemos.length);
      }, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, isVisible]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + automationDemos.length) % automationDemos.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % automationDemos.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] overflow-hidden"
      role="region"
      aria-label="Automation Carousel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Automation Carousel
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore real examples of automation in action
          </p>
        </div>

        <div
          className="relative max-w-5xl mx-auto"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Automation demos carousel"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {automationDemos.map((demo, index) => (
              <div
                key={demo.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0 scale-100'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full scale-95'
                    : 'opacity-0 translate-x-full scale-95'
                }`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${automationDemos.length}`}
                aria-hidden={index !== currentIndex}
              >
                <div className={`w-full h-full bg-gradient-to-br ${demo.gradient} p-1`}>
                  <div className="w-full h-full bg-[#0E0918] rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

                    <div className="relative z-10 text-center p-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 rounded-full mx-auto mb-6 backdrop-blur-sm flex items-center justify-center">
                        <Play className="text-white" size={40} />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{demo.name}</h3>
                      <p className="text-gray-300 text-lg max-w-md mx-auto">{demo.description}</p>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0918]/80 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Previous slide"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Next slide"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-3" role="tablist" aria-label="Slides">
            {automationDemos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => handleDotClick(index)}
                className={`transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  index === currentIndex
                    ? 'bg-purple-500 w-10 h-3'
                    : 'bg-white/30 hover:bg-white/50 w-3 h-3'
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to slide ${index + 1}: ${demo.name}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="text-gray-400 text-sm">
            {isAutoPlaying ? 'Auto-playing' : 'Paused'} • {currentIndex + 1} of {automationDemos.length}
          </p>
        </div>
      </div>
    </section>
  );
}
