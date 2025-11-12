import { useEffect, useRef, useState } from 'react';
import { Database, ArrowRight } from 'lucide-react';

interface DatasetHeroProps {
  title: string;
  subtitle: string;
  buttons: { label: string; link: string }[];
}

export default function DatasetHero({ title, subtitle, buttons }: DatasetHeroProps) {
  const [binaryStrings, setBinaryStrings] = useState<Array<{ id: number; value: string; x: number }>>([]);
  const [dataBlocks, setDataBlocks] = useState<Array<{ id: number; active: boolean }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const generateBinary = () => {
      return Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('');
    };

    const strings = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      value: generateBinary(),
      x: Math.random() * 100
    }));
    setBinaryStrings(strings);

    const blocks = Array.from({ length: 20 }, (_, i) => ({ id: i, active: false }));
    setDataBlocks(blocks);

    const binaryInterval = setInterval(() => {
      setBinaryStrings(prev => prev.map(s => ({ ...s, value: generateBinary() })));
    }, 2000);

    const blockInterval = setInterval(() => {
      setDataBlocks(prev => prev.map(block => ({
        ...block,
        active: Math.random() > 0.7
      })));
    }, 500);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const drawDataGrid = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.1)';
          ctx.lineWidth = 1;

          for (let x = 0; x < canvas.width; x += 40) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
          }

          for (let y = 0; y < canvas.height; y += 40) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }

          requestAnimationFrame(drawDataGrid);
        };

        drawDataGrid();
      }
    }

    return () => {
      clearInterval(binaryInterval);
      clearInterval(blockInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {binaryStrings.map((str, idx) => (
          <div
            key={str.id}
            className="absolute text-purple-500/30 font-mono text-xs animate-binary-fall"
            style={{
              left: `${str.x}%`,
              top: '-5%',
              animationDelay: `${idx * 0.3}s`,
              animationDuration: `${8 + idx * 0.5}s`
            }}
          >
            {str.value}
          </div>
        ))}

        <div className="absolute inset-0 grid grid-cols-10 grid-rows-5 gap-4 p-8 opacity-20">
          {dataBlocks.map((block) => (
            <div
              key={block.id}
              className={`bg-purple-500 rounded transition-all duration-300 ${
                block.active ? 'opacity-60 scale-110' : 'opacity-20 scale-100'
              }`}
            />
          ))}
        </div>

        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="dataPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#a855f7" opacity="0.5" />
              <circle cx="25" cy="25" r="1" fill="#8b5cf6" opacity="0.3" />
              <circle cx="75" cy="75" r="1" fill="#8b5cf6" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dataPattern)" className="animate-pattern-move" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-slideDown">
          <Database className="text-purple-500 animate-pulse" size={16} />
          <span className="text-gray-300 text-sm font-mono">{'<Data/>'} Management</span>
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

        <div className="mt-12 inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl px-6 py-4">
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-400 font-mono mb-1">Status</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300 font-mono">ONLINE</span>
            </div>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-400 font-mono mb-1">Processing</span>
            <span className="text-sm text-purple-400 font-mono">10.2 TB/s</span>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-400 font-mono mb-1">Records</span>
            <span className="text-sm text-purple-400 font-mono">1.2B+</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <style>{`
        @keyframes binary-fall {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        .animate-binary-fall {
          animation: binary-fall linear infinite;
        }
        @keyframes pattern-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        .animate-pattern-move {
          animation: pattern-move 20s linear infinite;
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
