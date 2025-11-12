import { useEffect, useRef, useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';

interface WhyHeroProps {
  title: string;
  subtitle: string;
  buttons: { label: string; link: string }[];
}

export default function WhyHero({ title, subtitle, buttons }: WhyHeroProps) {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; scale: number }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const initialStars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: 0.5 + Math.random() * 0.5
    }));
    setStars(initialStars);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const drawConnections = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.1)';
          ctx.lineWidth = 1;

          for (let i = 0; i < 20; i++) {
            const startX = Math.random() * canvas.width;
            const startY = Math.random() * canvas.height;
            const endX = startX + (Math.random() - 0.5) * 200;
            const endY = startY + (Math.random() - 0.5) * 200;

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
          }

          requestAnimationFrame(drawConnections);
        };

        drawConnections();
      }
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-20" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute animate-why-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              transform: `scale(${star.scale})`,
              animationDelay: `${star.id * 0.1}s`
            }}
          >
            <Star className="text-purple-500 fill-purple-500" size={20} />
          </div>
        ))}

        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="whyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <circle cx="20%" cy="30%" r="150" fill="url(#whyGradient)" opacity="0.2" />
          <circle cx="80%" cy="70%" r="200" fill="url(#whyGradient)" opacity="0.2" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-8 animate-slideDown">
          <Star className="text-purple-500 fill-purple-500 animate-pulse" size={16} />
          <span className="text-gray-300 text-sm font-medium">Why Choose Us</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
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
        @keyframes why-star {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }
        .animate-why-star {
          animation: why-star 4s ease-in-out infinite;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
