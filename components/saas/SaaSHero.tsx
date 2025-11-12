import { useEffect, useRef } from 'react';
import { Cloud, Server, Sparkles, ArrowRight } from 'lucide-react';

interface SaaSHeroProps {
  title: string;
  subtitle: string;
  buttons: { label: string; link: string }[];
}

export default function SaaSHero({ title, subtitle, buttons }: SaaSHeroProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const icons = canvasRef.current?.querySelectorAll('.floating-icon');
    icons?.forEach((icon, index) => {
      const delay = index * 0.2;
      const duration = 3 + Math.random() * 2;
      (icon as HTMLElement).style.animationDelay = `${delay}s`;
      (icon as HTMLElement).style.animationDuration = `${duration}s`;
    });
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div ref={canvasRef} className="absolute inset-0 overflow-hidden">
        <div className="floating-icon absolute top-20 left-[10%] text-purple-400/20">
          <Cloud size={48} />
        </div>
        <div className="floating-icon absolute top-40 right-[15%] text-violet-400/20">
          <Server size={40} />
        </div>
        <div className="floating-icon absolute bottom-40 left-[20%] text-purple-400/20">
          <Cloud size={56} />
        </div>
        <div className="floating-icon absolute bottom-20 right-[25%] text-violet-400/20">
          <Sparkles size={44} />
        </div>
        <div className="floating-icon absolute top-1/2 left-[5%] text-purple-400/20">
          <Server size={36} />
        </div>
        <div className="floating-icon absolute top-1/3 right-[8%] text-violet-400/20">
          <Cloud size={52} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
          <Sparkles className="text-purple-500" size={16} />
          <span className="text-gray-300 text-sm">SaaS & DevOps Solutions</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.link}
              className={`group px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2 transition-all ${
                index === 0
                  ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50'
              }`}
            >
              <span>{button.label}</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <style>{`
        .floating-icon {
          animation: float infinite ease-in-out;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
}
