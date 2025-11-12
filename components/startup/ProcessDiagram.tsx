"use client";

import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Palette, Code, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';

interface ProcessData {
  title: string;
  steps: string[];
  diagram: string;
}

interface ProcessDiagramProps {
  data: ProcessData;
}

const stepIcons = [Lightbulb, Palette, Code, CheckCircle, TrendingUp];

export default function ProcessDiagram({ data }: ProcessDiagramProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % data.steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible, data.steps.length]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          {data.title}
        </h2>

        <div className="hidden lg:flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-violet-500 transition-all duration-1000 ease-out"
              style={{
                width: `${((activeStep + 1) / data.steps.length) * 100}%`,
              }}
            ></div>
          </div>

          {data.steps.map((step, index) => {
            const Icon = stepIcons[index];
            const isActive = index <= activeStep;

            return (
              <div key={index} className="flex flex-col items-center z-10 relative">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${
                    isActive
                      ? 'bg-gradient-to-br from-purple-500 to-violet-600 scale-110 shadow-lg shadow-purple-500/50'
                      : 'bg-white/10 backdrop-blur-sm'
                  } ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Icon size={28} className={isActive ? 'text-white' : 'text-gray-400'} />
                </div>
                <span
                  className={`text-sm font-semibold transition-all duration-500 ${
                    isActive ? 'text-white' : 'text-gray-500'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 150 + 100}ms` }}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>

        <div className="lg:hidden space-y-4">
          {data.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div
                key={index}
                className={`flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-lg font-semibold text-white">{step}</span>
                </div>
                {index < data.steps.length - 1 && (
                  <ArrowRight size={20} className="text-gray-400" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
