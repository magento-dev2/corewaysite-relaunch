import { useEffect, useRef, useState } from 'react';
import { Search, Box, Brain, Link, BarChart } from 'lucide-react';

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface AIPlatformProcessProps {
  title: string;
  description: string;
  steps: Step[];
}

const stepIcons: Record<string, any> = {
  discovery: Search,
  design: Box,
  model: Brain,
  integrate: Link,
  optimize: BarChart,
};

export default function AIPlatformProcess({ title, description, steps }: AIPlatformProcessProps) {
  const [visibleSteps, setVisibleSteps] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((step, index) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, step.id]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [steps]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500/50 via-violet-500/50 to-purple-500/50"></div>

          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = stepIcons[step.id] || Brain;
              const isVisible = visibleSteps.includes(step.id);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-700`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-full lg:w-5/12 ${
                      isEven ? 'lg:text-right lg:pr-16' : 'lg:pl-16'
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                      <div className="flex items-center space-x-4 mb-4 lg:hidden">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                          <Icon className="text-white" size={24} />
                        </div>
                        <span className="text-4xl font-bold text-purple-400">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full items-center justify-center z-10 border-4 border-[#0E0918] shadow-lg shadow-purple-500/50">
                    <Icon className="text-white" size={28} />
                  </div>

                  <div className="hidden lg:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
