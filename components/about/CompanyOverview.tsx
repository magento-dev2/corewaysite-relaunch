import { useEffect, useRef, useState } from 'react';
import { Target, Eye } from 'lucide-react';

interface CompanyOverviewData {
  title: string;
  subtitle: string;
  description: string;
  mission: string;
  vision: string;
  imageUrl: string;
}

interface CompanyOverviewProps {
  data: CompanyOverviewData;
}

export default function CompanyOverview({ data }: CompanyOverviewProps) {
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {data.title}
            </h2>
            <p className="text-xl text-purple-400 mb-6">{data.subtitle}</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {data.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {data.mission}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {data.vision}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={data.imageUrl}
                alt="Company overview"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0918]/50 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
