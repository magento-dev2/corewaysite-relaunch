import { useEffect, useRef, useState } from 'react';
import { Target, Palette, Code2, Plug, TrendingUp } from 'lucide-react';

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface ProcessDiagramProps {
  title: string;
  description: string;
  steps: ProcessStep[];
}

const stepIcons: Record<string, any> = {
  strategy: Target,
  design: Palette,
  build: Code2,
  integrate: Plug,
  scale: TrendingUp,
};

export default function ProcessDiagram({ title, description, steps }: ProcessDiagramProps) {
  const [visibleSteps, setVisibleSteps] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((step, index) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, step.id]);
            }, index * 300);
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 -translate-y-1/2 opacity-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = stepIcons[step.id] || Target;
              const isVisible = visibleSteps.includes(step.id);

              return (
                <article
                  key={step.id}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all h-full flex flex-col">
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <Icon className="text-white" size={36} />
                        </div>
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-[#0E0918]">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path
                          d="M12 8L20 16L12 24"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#A855F7" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
