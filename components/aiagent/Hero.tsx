"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  title: string;
  title2: string;
  subtitle: string;
  buttons: { label: string; link: string }[];
  img?: string;
  variant?: "saas" | "workflow" | "document" | "default";
}

export default function Hero({ title, title2, subtitle, buttons, img, variant = "default" }: HeroProps) {
  const { t } = useLanguage();
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);


  useEffect(() => {
    const initialParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 3
    }));
    setParticles(initialParticles);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let time = 0;
        const draw = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.15)';
          ctx.lineWidth = 1;

          if (variant === "workflow") {
            // Workflow: Geometric Grid/Nodes
            const spacing = 100;
            for (let x = 0; x < canvas.width; x += spacing) {
              for (let y = 0; y < canvas.height; y += spacing) {
                ctx.beginPath();
                ctx.arc(x + Math.sin((time + y) / 100) * 10, y + Math.cos((time + x) / 100) * 10, 1, 0, Math.PI * 2);
                ctx.stroke();
                if (x + spacing < canvas.width) {
                  ctx.beginPath();
                  ctx.moveTo(x + Math.sin((time + y) / 100) * 10, y + Math.cos((time + x) / 100) * 10);
                  ctx.lineTo(x + spacing + Math.sin((time + y) / 100) * 10, y + Math.cos((time + x + spacing) / 100) * 10);
                  ctx.stroke();
                }
              }
            }
          } else if (variant === "document") {
            // Document: Scanning/Matrix style (Vertical falling bits)
            const cols = Math.floor(canvas.width / 40);
            for (let i = 0; i < cols; i++) {
              const x = i * 40;
              const y = (time * (2 + (i % 3)) + (i * 100)) % (canvas.height + 200);
              ctx.strokeRect(x, y - 50, 2, 40);
              ctx.strokeRect(x, y - 100, 1, 20);

              if (i === 0) {
                const barY = (time * 5) % canvas.height;
                ctx.beginPath();
                ctx.moveTo(0, barY);
                ctx.lineTo(canvas.width, barY);
                ctx.stroke();
              }
            }
          } else if (variant === "saas") {
            // SaaS: Orbitals / Concentric circles
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            for (let i = 1; i <= 5; i++) {
              ctx.beginPath();
              ctx.arc(centerX, centerY, i * 100 + Math.sin(time / 20) * 20, 0, Math.PI * 2);
              ctx.stroke();

              const angle = (time / (20 * i)) + (i * 2);
              const nx = centerX + Math.cos(angle) * (i * 100 + Math.sin(time / 20) * 20);
              const ny = centerY + Math.sin(angle) * (i * 100 + Math.sin(time / 20) * 20);
              ctx.beginPath();
              ctx.arc(nx, ny, 4, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(168, 85, 247, 0.2)';
              ctx.fill();
              ctx.stroke();
            }
          } else {
            // Default: Waves
            for (let i = 0; i < 3; i++) {
              ctx.beginPath();
              for (let x = 0; x < canvas.width; x += 5) {
                const y = canvas.height / 2 + Math.sin((x + time + i * 100) / 50) * 30 * (i + 1);
                if (x === 0) {
                  ctx.moveTo(x, y);
                } else {
                  ctx.lineTo(x, y);
                }
              }
              ctx.stroke();
            }
          }

          time += 1;
          requestAnimationFrame(draw);
        };

        draw();
      }
    }
  }, [variant]);




  useEffect(() => {
    if (!textRef.current) return;
    // 🌀 Split text into individual characters
    const split = new SplitType(textRef.current, { types: "chars,words" });

    // ✨ Intro animation
    gsap.from(split.chars, {
      opacity: 0,
      y: 40,
      rotateX: 90,
      stagger: 0.04,
      duration: 1.2,
      ease: "power4.out",
    });

    // 🎯 Cursor-based motion effect
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // rotate limit
      const y = (e.clientY / innerHeight - 0.5) * 20;

      gsap.to(textRef.current, {
        rotationY: x,
        rotationX: -y,
        transformPerspective: 800,
        ease: "power2.out",
        duration: 0.6,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      split.revert(); // cleanup
    };
  }, []);

  // const buttonRef = useRef(null);
  // const rightRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

  //   // Animate image landing
  //   tl.fromTo(
  //     rightRef.current,
  //     { opacity: 0, x: 200, scale: 0.8 },
  //     { opacity: 1, x: 0, scale: 1, duration: 1, delay: 2 }
  //   );

  //   // Animate button to move right after image lands
  //   tl.to(
  //     buttonRef.current,
  //     { x: 200, opacity: 1, duration: 1 },
  //     "-=0.5"
  //   );
  // }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] ">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-purple-500 animate-company-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <pattern id="companyGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="100" height="100" fill="none" stroke="#a855f7" strokeWidth="1" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="#a855f7" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#companyGrid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">

          {/* Left Side Text + Button */}
          <div className="flex-1 flex flex-col justify-start items-center text-center mb-8 md:mb-0 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight" ref={textRef}>
              <span className="block mb-2">{title}</span>
              <span className="text-purple-500 block">{title2}</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-md mt-2 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {buttons?.map((button, index) => (
                <a
                  key={index}
                  href={button.link}
                  className={`group px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2 transition-all ${index === 0
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

          {/* Right Side Image */}
          <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0 ">
            <img
              src={img || "/assets/home/coreway-ai.png"}
              alt="Hero Image"
              className="w-full max-w-4xl rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
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
        .animate-company-float {
          animation: company-float ease-in-out infinite;
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
