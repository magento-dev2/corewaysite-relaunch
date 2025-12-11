"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import SplitType from "split-type";

interface CustomAPIHeroProps {
  title: string;
  subtitle: string;
  buttons: { label: string; link: string }[];
  title2: string;
 
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export default function WhyHero({
  title,
  subtitle,
  buttons,
  title2,
 
}: CustomAPIHeroProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  // ⭐ CREATE PARTICLES ONLY ONCE
  useEffect(() => {
    const initialParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 3,
    }));

    setParticles(initialParticles);

    // ⭐ GSAP DRIFT ANIMATION
    setTimeout(() => {
      initialParticles.forEach((p) => {
        gsap.to(`#dot-${p.id}`, {
          x: gsap.utils.random(-80, 80),
          y: gsap.utils.random(-80, 80),
          duration: gsap.utils.random(4, 7),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, 100);
  }, []);

  // ⭐ WAVE CANVAS BACKGROUND
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(168, 85, 247, 0.15)";
      ctx.lineWidth = 2;

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y =
            canvas.height / 2 +
            Math.sin((x + time + i * 100) / 50) * 30 * (i + 1);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      time += 2;
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  // ⭐ TEXT ANIMATION
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

      {/* CANVAS WAVES */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />

      {/* ⭐ DOT PARTICLES ⭐ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            id={`dot-${p.id}`}
            className="absolute rounded-full bg-purple-400/70 backdrop-blur-sm"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          ></div>
        ))}
      </div>

      {/* OTHER BG ELEMENTS */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* GRID */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <pattern id="gridPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="none" stroke="#a855f7" strokeWidth="1" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="#a855f7" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridPattern)" />
      </svg>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">

          {/* LEFT */}
          <div className="flex-1 text-center space-y-6">
            <h1 ref={textRef} className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Why <span className="text-purple-500">{title2}</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-md mx-auto">{subtitle}</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {buttons.map((b, i) => (
                <a
                  key={i}
                  href="/solutions"
                  className={`group px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2 transition-all ${
                    i === 0
                      ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:scale-105"
                      : "bg-white/5 text-white border border-white/10 hover:border-purple-500/50"
                  }`}
                >
                  <span>{b.label}</span>
                  <ArrowRight className="group-hover:translate-x-1" size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
           <img
  src="/assets/images/whycoreway.png"
  className="rounded-lg shadow-lg"
 
/>

          </div>
        </div>
      </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </section>
  );
}
