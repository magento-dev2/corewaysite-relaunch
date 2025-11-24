import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface SaaSCaseStudiesProps {
  title: string;
  cases: CaseStudy[];
}

export default function SaaSCaseStudies({ title, cases }: SaaSCaseStudiesProps) {
  const [visibleCases, setVisibleCases] = useState<string[]>([]);
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
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real-world DevOps transformations and cloud migrations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => {
            const isVisible = visibleCases.includes(caseStudy.id);

            return (
              <article
                key={caseStudy.id}
                className={`group bg-white/5 backdrop-blur-sm border cursor-pointer border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0918] via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {caseStudy.description}
                  </p>
                  <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group/btn">
                    <span className="text-sm font-medium cursor-pointer">View Details</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
