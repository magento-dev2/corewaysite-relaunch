import { useEffect, useRef, useState } from 'react';
import { Target, Eye } from 'lucide-react';

interface MissionVision {
  title: string;
  content: string;
}

interface CompanyMissionProps {
  title: string;
  mission: MissionVision;
  vision: MissionVision;
}

export default function CompanyMission({ title, mission, vision }: CompanyMissionProps) {
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
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold text-white text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`relative group bg-gradient-to-br from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-10 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-500"></div>

            <div className="relative flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">{mission.title}</h3>
            </div>

            <p className="relative text-gray-300 leading-relaxed text-lg">
              {mission.content}
            </p>
          </div>

          <div className={`relative group bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-10 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-500"></div>

            <div className="relative flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">{vision.title}</h3>
            </div>

            <p className="relative text-gray-300 leading-relaxed text-lg">
              {vision.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
