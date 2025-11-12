import { useEffect, useRef, useState } from 'react';
import { Search, Lightbulb, Rocket, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: 'Discover',
    description: 'We analyze your workflows and identify automation opportunities',
    icon: Search,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Plan',
    description: 'Design a custom automation strategy tailored to your needs',
    icon: Lightbulb,
    color: 'from-purple-500 to-violet-500',
  },
  {
    id: 3,
    title: 'Execute',
    description: 'Implement and integrate seamless automation workflows',
    icon: Rocket,
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 4,
    title: 'Deliver',
    description: 'Launch, monitor, and optimize for continuous improvement',
    icon: CheckCircle,
    color: 'from-green-500 to-emerald-500',
  },
];

export default function OurProcess() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          processSteps.forEach((step, index) => {
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A clear 4-step approach that defines how we deliver success
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-green-500 -translate-y-1/2 opacity-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative transition-all duration-700 ${
                  visibleSteps.includes(step.id)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all hover:scale-105 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <step.icon className="text-white" size={36} />
                    </div>

                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-[#1a1325]">
                      {step.id}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <svg
            className="mx-auto w-full max-w-4xl h-auto opacity-10"
            viewBox="0 0 800 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 100 Q 150 50, 250 100 T 450 100 T 650 100 T 750 100"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
