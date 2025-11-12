import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface AIIntegrationCaseStudiesProps {
  title: string;
  cases: CaseStudy[];
}

export default function AIIntegrationCaseStudies({ title, cases }: AIIntegrationCaseStudiesProps) {
  const [visibleCases, setVisibleCases] = useState<string[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cases.forEach((caseStudy, index) => {
            setTimeout(() => {
              setVisibleCases((prev) => [...prev, caseStudy.id]);
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
  }, [cases]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918]"
      style={{ perspective: '1500px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real-world AI integrations transforming businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => {
            const isVisible = visibleCases.includes(caseStudy.id);
            const isHovered = hoveredId === caseStudy.id;

            return (
              <article
                key={caseStudy.id}
                onMouseEnter={() => setHoveredId(caseStudy.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-700 cursor-pointer ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  transform: isVisible
                    ? isHovered
                      ? 'translateZ(60px) translateY(-16px) rotateX(8deg)'
                      : 'translateZ(0) translateY(0) rotateX(0deg)'
                    : 'translateZ(-50px) translateY(30px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {isHovered && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-violet-500/30 z-20 animate-pulse"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/40 to-violet-500/40 rounded-2xl blur-xl -z-10"></div>
                  </>
                )}

                <div className="relative h-56 overflow-hidden" style={{ transform: 'translateZ(30px)' }}>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 transition-opacity duration-500 z-10 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></div>
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isHovered ? 'scale-125' : 'group-hover:scale-110'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0918] via-[#0E0918]/50 to-transparent"></div>
                </div>

                <div className="p-6 relative" style={{ transform: 'translateZ(20px)' }}>
                  <h3
                    className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      isHovered ? 'text-purple-300' : 'text-white'
                    }`}
                  >
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {caseStudy.description}
                  </p>
                  <button
                    className={`flex items-center space-x-2 transition-all duration-300 group/btn ${
                      isHovered ? 'text-purple-300' : 'text-purple-400 hover:text-purple-300'
                    }`}
                  >
                    <span className="text-sm font-medium">View Integration</span>
                    <ArrowRight
                      size={16}
                      className={`transition-transform ${isHovered ? 'translate-x-2' : 'group-hover/btn:translate-x-1'}`}
                    />
                  </button>

                  {isHovered && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-violet-600"></div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
