import { useEffect, useRef, useState } from 'react';
import { Search, FileText, Code, Rocket, Headphones } from 'lucide-react';

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface AIIntegrationProcessProps {
  title: string;
  description: string;
  steps: Step[];
}

const stepIcons: Record<string, any> = {
  analysis: Search,
  planning: FileText,
  development: Code,
  deployment: Rocket,
  support: Headphones,
};

export default function AIIntegrationProcess({ title, description, steps }: AIIntegrationProcessProps) {
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
      style={{ perspective: '2000px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="w-full h-full bg-gradient-to-b from-purple-500/50 via-violet-500/50 to-purple-500/50 animate-pulse"></div>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = stepIcons[step.id] || Search;
              const isVisible = visibleSteps.includes(step.id);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-700`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    transform: isVisible ? 'translateZ(0)' : 'translateZ(-100px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div
                    className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right lg:pr-16' : 'lg:pl-16'}`}
                  >
                    <div
                      className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 group cursor-pointer"
                      style={{
                        transform: 'translateZ(50px)',
                        transformStyle: 'preserve-3d'
                      }}
                      onMouseEnter={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateZ(80px) rotateY(5deg)';
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateZ(50px) rotateY(0deg)';
                      }}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-violet-500/0 group-hover:from-purple-500/10 group-hover:to-violet-500/10 transition-all duration-500"></div>

                      <div className="flex items-center space-x-4 mb-4 lg:hidden">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="text-white" size={24} />
                        </div>
                        <span className="text-4xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                          {step.number}
                        </span>
                      </div>

                      <h3
                        className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors"
                        style={{ transform: 'translateZ(20px)' }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-gray-300 leading-relaxed"
                        style={{ transform: 'translateZ(10px)' }}
                      >
                        {step.description}
                      </p>

                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/0 to-violet-500/0 group-hover:from-purple-500/20 group-hover:to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    </div>
                  </div>

                  <div
                    className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full items-center justify-center z-10 border-4 border-[#0E0918] shadow-lg shadow-purple-500/50 hover:scale-125 transition-transform duration-300"
                    style={{
                      transform: 'translateX(-50%) translateZ(100px)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
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
