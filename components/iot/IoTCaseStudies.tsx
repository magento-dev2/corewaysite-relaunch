import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface IoTCaseStudiesProps {
  title: string;
  cases: CaseStudy[];
}

export default function IoTCaseStudies({ title, cases }: IoTCaseStudiesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (isVisible) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cases.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isVisible, cases.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const getVisibleCases = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(cases[(currentIndex + i) % cases.length]);
    }
    return visible;
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real-world IoT implementations across industries
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center gap-6">
            <button
              onClick={handlePrev}
              className="hidden lg:flex w-12 h-12 items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-purple-500/20 hover:border-purple-500/50 transition-all z-10 flex-shrink-0"
              aria-label="Previous case study"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
              {getVisibleCases().map((caseStudy, index) => (
                <article
                  key={`${caseStudy.id}-${index}`}
                  className={`group bg-white/5 backdrop-blur-sm border cursor-pointer border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    animation: isVisible ? 'slideIn 0.6s ease-out forwards' : 'none'
                  }}
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
              ))}
            </div>

            <button
              onClick={handleNext}
              className="hidden lg:flex w-12 h-12 items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-purple-500/20 hover:border-purple-500/50 transition-all z-10 flex-shrink-0"
              aria-label="Next case study"
            >
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-purple-500'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
