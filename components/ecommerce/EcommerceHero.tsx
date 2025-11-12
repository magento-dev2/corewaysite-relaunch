import { useEffect, useRef, useState } from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';

interface EcommerceHeroProps {
  title: string;
  subtitle: string;
  buttons: { label: string; link: string }[];
}

export default function EcommerceHero({ title, subtitle, buttons }: EcommerceHeroProps) {
  const [carts, setCarts] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [coins, setCoins] = useState<Array<{ id: number; x: number; delay: number }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const initialCarts = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 10 + (i % 4) * 25,
      y: 15 + Math.floor(i / 4) * 30,
      delay: i * 0.2
    }));
    setCarts(initialCarts);

    const initialCoins = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setCoins(initialCoins);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const drawPriceTag = (x: number, y: number, size: number, opacity: number) => {
          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = '#a855f7';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + size, y);
          ctx.lineTo(x + size, y + size * 0.7);
          ctx.lineTo(x + size * 0.5, y + size);
          ctx.lineTo(x, y + size * 0.7);
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        };

        let frame = 0;
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          for (let i = 0; i < 15; i++) {
            const x = (i * canvas.width / 15 + frame) % canvas.width;
            const y = 100 + Math.sin(frame * 0.01 + i) * 50;
            const size = 20 + Math.sin(frame * 0.02 + i) * 10;
            const opacity = 0.1 + Math.sin(frame * 0.03 + i) * 0.05;
            drawPriceTag(x, y, size, opacity);
          }

          frame += 1;
          requestAnimationFrame(animate);
        };

        animate();
      }
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {carts.map((cart) => (
          <div
            key={cart.id}
            className="absolute animate-cart-bounce"
            style={{
              left: `${cart.x}%`,
              top: `${cart.y}%`,
              animationDelay: `${cart.delay}s`
            }}
          >
            <ShoppingCart className="text-purple-500/30" size={24} />
          </div>
        ))}

        {coins.map((coin) => (
          <div
            key={coin.id}
            className="absolute animate-coin-fall"
            style={{
              left: `${coin.x}%`,
              animationDelay: `${coin.delay}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-violet-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
              $
            </div>
          </div>
        ))}

        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-8 animate-slideDown">
          <ShoppingCart className="text-purple-500 animate-pulse" size={16} />
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
        @keyframes cart-bounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.6;
          }
        }
        .animate-cart-bounce {
          animation: cart-bounce 3s ease-in-out infinite;
        }
        @keyframes coin-fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-coin-fall {
          animation: coin-fall linear infinite;
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
