import { useEffect, useRef, useState } from 'react';

interface AIPlatformsOverviewProps {
  title: string;
  content: string;
  image: string;
}

export default function AIPlatformsOverview({ title, content, image }: AIPlatformsOverviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {content}
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <p className="text-gray-300">
                  Scalable AI infrastructure built on modern cloud platforms
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full mt-2"></div>
                <p className="text-gray-300">
                  Custom ML models trained on your specific business data
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <p className="text-gray-300">
                  Seamless integration with existing enterprise systems
                </p>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="AI Platform Overview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0918]/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
