
  "use client";

  import { useEffect, useRef, useState } from "react";
  import { ArrowRight } from "lucide-react";
  import { gsap } from "gsap";
  import SplitType from "split-type";

  interface WhyHeroProps {
    title: string;
    title2: string;
    subtitle: string;
    buttons: { label: string; link: string }[];
  }

  export default function WhyHero({
    title,
    title2,
    subtitle,
    buttons,
  }: WhyHeroProps) {
    const [particles, setParticles] = useState<
      Array<{ id: number; x: number; y: number; size: number; delay: number }>
    >([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    // 🎨 Background Waves
    useEffect(() => {
      const initialParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 3,
      }));
      setParticles(initialParticles);

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          let time = 0;
          const drawWaves = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "rgba(168, 85, 247, 0.15)";
            ctx.lineWidth = 2;

            for (let i = 0; i < 3; i++) {
              ctx.beginPath();
              for (let x = 0; x < canvas.width; x += 5) {
                const y =
                  canvas.height / 2 +
                  Math.sin((x + time + i * 100) / 50) * 30 * (i + 1);
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
              }
              ctx.stroke();
            }

            time += 2;
            requestAnimationFrame(drawWaves);
          };

          drawWaves();
        }
      }
    }, []);

    // ⭐ TEXT ANIMATION (GSAP)
    useEffect(() => {
      if (!textRef.current) return;

      const split = new SplitType(textRef.current, { types: "chars,words" });

      gsap.from(split.chars, {
        opacity: 0,
        y: 40,
        rotateX: 90,
        stagger: 0.04,
        duration: 1.2,
        ease: "power4.out",
      });

      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        gsap.to(textRef.current, {
          rotationY: x,
          rotationX: -y,
          transformPerspective: 800,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]">
        {/* Waves Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none opacity-30"
        />

        {/* Floating Dots + Blur Lights + Grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-purple-500 animate-company-float"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${5 + Math.random() * 3}s`,
              }}
            />
          ))}

          {/* Blur Glows */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Grid Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-5">
            <defs>
              <pattern
                id="companyGrid"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="1"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#companyGrid)" />
          </svg>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            {/* LEFT TEXT */}
            <div className="flex-1 text-center space-y-6">
              <h1
                ref={textRef}
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                {title}{" "}
                 <span className="text-purple-500">{title2}</span>
              </h1>

              <p className="text-lg text-gray-300 max-w-md mx-auto">
                {subtitle}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp">
                {buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.link}
                    className={`group px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2 transition-all ${
                      index === 0
                        ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:scale-105"
                        : "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50"
                    }`}
                  >
                    <span>{button.label}</span>
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
              <img
                src="/assets/herosection/startup.png"
                className="w-full max-w-4xl rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Bottom Line Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

        {/* Animations */}
        <style>{`
          @keyframes company-float {
            0%, 100% {
              transform: translateY(0) translateX(0);
              opacity: 0.3;
            }
            50% {
              transform: translateY(-30px) translateX(20px);
              opacity: 0.8;
            }
          }
          .animate-company-float { animation: company-float ease-in-out infinite; }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; opacity: 0; }
        `}</style>
      </section>
    );
  }
