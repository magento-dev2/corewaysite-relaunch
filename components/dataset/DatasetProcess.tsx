import { useEffect, useRef, useState } from 'react';
import { Search, Layers, Workflow, GitMerge, Rocket } from 'lucide-react';

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface DatasetProcessProps {
  title: string;
  description: string;
  steps: Step[];
}

const stepIcons: Record<string, any> = {
  discovery: Search,
  architecture: Layers,
  pipeline: Workflow,
  integration: GitMerge,
  deployment: Rocket,
};

export default function DatasetProcess({ title, description, steps }: DatasetProcessProps) {
  const [visibleSteps, setVisibleSteps] = useState<string[]>([]);
  const [activeStep, setActiveStep] = useState(0);
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
          <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="w-full h-full bg-gradient-to-b from-purple-500/50 via-violet-500/50 to-purple-500/50 animate-pulse"></div>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = stepIcons[step.id] || Search;
              const isVisible = visibleSteps.includes(step.id);
              const isEven = index % 2 === 0;
              const isActive = activeStep === index;

              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`w-full lg:w-5/12 ${
                      isEven ? 'lg:text-right lg:pr-16' : 'lg:pl-16'
                    }`}
                  >
                    <div className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500 group cursor-pointer ${
                      isActive
                        ? 'border-purple-500 bg-gradient-to-br from-purple-500/10 to-violet-500/10 scale-105 shadow-xl shadow-purple-500/20'
                        : 'border-white/10 hover:border-purple-500/50 hover:bg-white/10'
                    }`}>
                      {isActive && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-2xl blur-lg -z-10 animate-pulse"></div>
                      )}

                      <div className="flex items-center space-x-4 mb-4 lg:hidden">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive
                            ? 'bg-gradient-to-br from-purple-500 to-violet-600 scale-110 shadow-lg shadow-purple-500/50'
                            : 'bg-gradient-to-br from-purple-500/50 to-violet-600/50'
                        }`}>
                          <Icon className="text-white" size={24} />
                        </div>
                        <span className={`text-4xl font-bold transition-colors ${
                          isActive ? 'text-purple-400' : 'text-purple-500/50'
                        }`}>
                          {step.number}
                        </span>
                      </div>

                      <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                        isActive ? 'text-purple-300' : 'text-white'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>

                      {isActive && (
                        <div className={`absolute bottom-0 ${isEven ? 'right-0' : 'left-0'} w-1 h-full bg-gradient-to-b from-purple-500 to-violet-600 rounded-full`}></div>
                      )}
                    </div>
                  </div>

                  <div className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full items-center justify-center z-10 border-4 border-[#0E0918] transition-all duration-500 ${
                    isActive
                      ? 'bg-gradient-to-br from-purple-500 to-violet-600 scale-125 shadow-lg shadow-purple-500/50'
                      : 'bg-gradient-to-br from-purple-500/50 to-violet-600/50'
                  }`}>
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
