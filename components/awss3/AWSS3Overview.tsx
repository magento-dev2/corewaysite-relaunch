import { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface AWSS3OverviewProps {
  title: string;
  content: string;
  image: string;
}

export default function AWSS3Overview({ title, content, image }: AWSS3OverviewProps) {
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
    'Up to 70% cost reduction through optimization',
    'Petabyte-scale storage architecture',
    'CloudFront CDN integration for performance',
    'Enterprise security and compliance',
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="cloudPattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <path
                d="M 30,60 Q 30,40 50,40 Q 50,30 60,30 Q 70,30 70,40 Q 90,40 90,60 Q 90,70 80,70 L 40,70 Q 30,70 30,60 Z"
                fill="none"
                stroke="#a855f7"
                strokeWidth="1"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cloudPattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
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
                  className={`flex items-start space-x-3 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={20} />
                    </div>
                  </div>
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-20 rotate-3'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              <div className="absolute inset-0 z-10">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-cloud-drift"
                    style={{
                      left: `${10 + i * 15}%`,
                      top: `${20 + (i % 3) * 25}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${8 + i}s`
                    }}
                  >
                    <Cloud className="text-purple-500/30" size={30 + i * 5} />
                  </div>
                ))}
              </div>

              <img
                src={image}
                alt="AWS S3"
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0918]/70 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cloud-drift {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(30px);
          }
        }
        .animate-cloud-drift {
          animation: cloud-drift ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

function Cloud({ className, size }: { className?: string; size: number }) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 100 70"
      className={className}
      fill="currentColor"
    >
      <path d="M 30,50 Q 30,35 45,35 Q 45,25 55,25 Q 65,25 65,35 Q 80,35 80,50 Q 80,60 70,60 L 40,60 Q 30,60 30,50 Z" />
    </svg>
  );
}
