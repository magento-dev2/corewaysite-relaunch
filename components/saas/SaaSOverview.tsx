import { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface SaaSOverviewProps {
  title: string;
  content: string;
  image: string;
}

export default function SaaSOverview({ title, content, image }: SaaSOverviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const highlights = [
    'Multi-cloud infrastructure management',
    'Automated CI/CD pipelines',
    'Container orchestration with Kubernetes',
    'Infrastructure as Code automation',
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {content}
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="text-purple-500" size={20} />
                  </div>
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={image}
                alt="SaaS Infrastructure"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0918]/70 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
