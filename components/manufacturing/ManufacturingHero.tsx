import { useEffect, useRef, useState } from 'react';
import { Factory, ArrowRight } from 'lucide-react';

interface ManufacturingHeroProps {
  title: string;
  subtitle: string;
  buttons: { label: string; link: string }[];
}

export default function ManufacturingHero({ title, subtitle, buttons }: ManufacturingHeroProps) {
  const [gears, setGears] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>([]);
  const [conveyorItems, setConveyorItems] = useState<Array<{ id: number; x: number }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const initialGears = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 10 + (i % 4) * 28,
      y: 20 + Math.floor(i / 4) * 35,
      size: 40 + Math.random() * 20,
      speed: 0.02 + Math.random() * 0.03
    }));
    setGears(initialGears);

    const initialItems = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: i * 15
    }));
    setConveyorItems(initialItems);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let rotation = 0;
        const drawGears = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.15)';
          ctx.lineWidth = 2;

          for (let i = 0; i < 5; i++) {
            const x = 150 + i * 250;
            const y = canvas.height / 2 + Math.sin(i * 2) * 100;
            const radius = 40 + i * 10;
            const teeth = 12;

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation * (i % 2 === 0 ? 1 : -1));

            for (let j = 0; j < teeth; j++) {
              const angle = (j / teeth) * Math.PI * 2;
              const innerRadius = radius * 0.8;
              const outerRadius = radius * 1.1;

              ctx.beginPath();
              ctx.moveTo(Math.cos(angle) * innerRadius, Math.sin(angle) * innerRadius);
              ctx.lineTo(Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius);
              ctx.arc(x, y, radius, angle, angle + Math.PI / teeth / 2, false);
              ctx.stroke();
            }

            ctx.beginPath();
            ctx.arc(0, 0, radius * 0.8, 0, Math.PI * 2);
            ctx.stroke();

            ctx.restore();
          }

          rotation += 0.01;
          requestAnimationFrame(drawGears);
        };

        drawGears();
      }
    }

    const itemInterval = setInterval(() => {
      setConveyorItems(prev => prev.map(item => ({
        ...item,
        x: (item.x + 1) % 110
      })));
    }, 50);

    return () => clearInterval(itemInterval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-20" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {gears.map((gear, index) => (
          <div
            key={gear.id}
            className="absolute animate-gear-spin"
            style={{
              left: `${gear.x}%`,
              top: `${gear.y}%`,
              animationDuration: `${10 + index * 2}s`,
              animationDirection: index % 2 === 0 ? 'normal' : 'reverse'
            }}
          >
            <svg width={gear.size} height={gear.size} viewBox="0 0 100 100" className="text-purple-500/20">
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="3" />
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * 360;
                return (
                  <rect
                    key={i}
                    x="47"
                    y="15"
                    width="6"
                    height="15"
                    fill="currentColor"
                    transform={`rotate(${angle} 50 50)`}
                  />
                );
              })}
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
          </div>
        ))}

        <div className="absolute bottom-24 left-0 right-0 h-2 bg-purple-500/10">
          {conveyorItems.map((item) => (
            <div
              key={item.id}
              className="absolute w-8 h-8 bg-purple-500/30 rounded border-2 border-purple-500/50 transform -translate-y-4"
              style={{ left: `${item.x}%` }}
            />
          ))}
        </div>

        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-8 animate-slideDown">
          <Factory className="text-purple-500 animate-pulse" size={16} />
          <span className="text-gray-300 text-sm font-medium">Industries</span>
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
        @keyframes gear-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-gear-spin {
          animation: gear-spin linear infinite;
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
