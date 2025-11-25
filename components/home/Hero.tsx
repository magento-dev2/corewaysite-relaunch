"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { useLanguage } from "@/contexts/LanguageContext";
import heroData from "@/locales/en/home.json";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}


export default function Hero() {
  const heroItems = heroData.hero.items;
  const [heroIndex] = useState(() => {
    if (typeof window === "undefined") return 0;
    const storedIndex = localStorage.getItem("heroIndex");
    const nextIndex = storedIndex ? (parseInt(storedIndex) + 1) % heroItems.length : 0;
    localStorage.setItem("heroIndex", nextIndex.toString());
    return nextIndex;
  });
  const { t } = useLanguage();
  const [particles, setParticles] = useState<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const heroItem = heroItems[heroIndex];

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

  // 🔹 Text animation + cursor motion
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
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
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
      split.revert();
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
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
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          />
        ))}

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

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
            <h1 ref={textRef} className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {heroItem.title} <span className="text-purple-500">{heroItem.titleHighlight}</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-md mt-2 leading-relaxed">{heroItem.description}</p>

            <button className="group cursor-pointer bg-purple-500 text-white px-6 py-3 rounded-lg text-center hover:bg-purple-600 transition-all font-medium flex items-center space-x-2 shadow-lg shadow-purple-500/30">
              <span>{heroItem.button}</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>

           {/* Right Side Image */}
          <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src={heroItem.image}
              alt={heroItem.title}
              className="w-full max-w-4xl rounded-lg shadow-lg" />
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
            opacity: 1;             transform: translateY(0);
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
          animation: slideDown 0.8s ease-out forwards;         }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
