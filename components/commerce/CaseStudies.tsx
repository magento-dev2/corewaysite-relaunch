import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Lenis from '@studio-freight/lenis';

interface CaseStudy {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface CaseStudiesProps {
  title: string;
  cases: CaseStudy[];
}

export default function CaseStudies({ title, cases }: CaseStudiesProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

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
    if (!isVisible || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.case-card');

    const handleScroll = () => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const cardCenter = rect.top + rect.height / 2;
        const windowCenter = windowHeight / 2;

        const distance = Math.abs(cardCenter - windowCenter);
        const maxDistance = windowHeight / 2;
        const scale = Math.max(0.85, 1 - (distance / maxDistance) * 0.15);
        const opacity = Math.max(0.5, 1 - (distance / maxDistance) * 0.5);

        (card as HTMLElement).style.transform = `scale(${scale})`;
        (card as HTMLElement).style.opacity = `${opacity}`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real-world solutions delivering measurable results
          </p>
        </div>

        <div ref={cardsRef} className="space-y-12 lg:space-y-4">
          {cases.map((caseStudy, index) => (
            <article
              key={caseStudy.id}
              data-scroll
              data-scroll-speed={0.5 + index * 0.1}
              className={`case-card group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 max-w-4xl mx-auto ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                willChange: 'transform, opacity'
              }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0E0918]/80 via-[#0E0918]/40 to-transparent lg:from-transparent lg:to-[#0E0918]/80"></div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-3 py-1 mb-4 w-fit">
                    <span className="text-purple-400 text-xs font-medium">Case Study {index + 1}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-300 text-base mb-6 leading-relaxed">
                    {caseStudy.description}
                  </p>

                  <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-all group/btn w-fit">
                    <span className="text-sm font-medium">View Full Case Study</span>
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-2 transition-transform duration-300"
                    />
                  </button>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {['E-commerce', 'Headless', 'React'].map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
