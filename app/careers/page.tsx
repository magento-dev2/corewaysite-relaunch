// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Breadcrumb from "@/components/about/Breadcrumb";
// import {
//   Lightbulb, Users, Book, Heart, Globe, Target,
//   MapPin, Clock, Briefcase, ChevronDown, ChevronUp
// } from "lucide-react";
// import careersData from "../../data/careersData.json";

// gsap.registerPlugin(ScrollTrigger);

// const iconMap: any = {
//   lightbulb: Lightbulb,
//   users: Users,
//   book: Book,
//   heart: Heart,
//   globe: Globe,
//   target: Target,
// };

// export default function CareersPage() {
//   const siteUrl = "https://www.corewaysolution.com";
//   const contentRef = useRef<HTMLDivElement>(null);
//   const sectionsRef = useRef<HTMLElement[]>([]);
//   const [expandedJob, setExpandedJob] = useState<number | null>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         contentRef.current,
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
//       );

//       sectionsRef.current.forEach((section, index) => {
//         gsap.fromTo(
//           section,
//           { opacity: 0, y: 20 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.6,
//             delay: index * 0.05,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: section,
//               start: "top 85%",
//             },
//           }
//         );
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   const addToRefs = (el: HTMLElement | null) => {
//     if (el && !sectionsRef.current.includes(el)) {
//       sectionsRef.current.push(el);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0E0918]">
//         <header className="page-content pb-8">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <Breadcrumb
//               items={[
//                 { label: "Careers" },
//               ]}
//             />
//           </div>
//         </header>

//         <main className="pb-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <section ref={contentRef} className="mb-20">
//               <div className="text-center mb-12">
//                 <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//                   {careersData.hero.title}
//                 </h1>
//                 <p className="text-xl md:text-2xl text-purple-400 mb-6">
//                   {careersData.hero.subtitle}
//                 </p>
//                 <p className="text-lg text-white/80 max-w-3xl mx-auto">
//                   {careersData.hero.description}
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
//                 {careersData.hero.stats.map((stat, idx) => (
//                   <div
//                     key={idx}
//                     className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6 text-center"
//                   >
//                     <div className="text-3xl md:text-4xl font-bold text-white mb-2">
//                       {stat.value}
//                     </div>
//                     <div className="text-sm text-white/70">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             <section ref={addToRefs} className="mb-20">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
//                   {careersData.culture.title}
//                 </h2>
//                 <p className="text-lg text-white/80 max-w-3xl mx-auto">
//                   {careersData.culture.description}
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {careersData.culture.values.map((value, idx) => {
//                   const IconComponent = iconMap[value.icon] || Target;
//                   return (
//                     <div
//                       key={idx}
//                       className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
//                     >
//                       <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
//                         <IconComponent className="w-6 h-6 text-purple-400" />
//                       </div>
//                       <h3 className="text-xl font-bold text-white mb-3">
//                         {value.title}
//                       </h3>
//                       <p className="text-white/80">{value.description}</p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </section>

//             <section ref={addToRefs} className="mb-20">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
//                   {careersData.benefits.title}
//                 </h2>
//                 <p className="text-lg text-white/80 max-w-3xl mx-auto">
//                   {careersData.benefits.description}
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {careersData.benefits.items.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6"
//                   >
//                     <h3 className="text-xl font-bold text-white mb-4">
//                       {item.category}
//                     </h3>
//                     <ul className="space-y-2">
//                       {item.benefits.map((benefit, bIdx) => (
//                         <li
//                           key={bIdx}
//                           className="text-white/80 text-sm flex items-start gap-2"
//                         >
//                           <span className="text-blue-400 mt-1">•</span>
//                           <span>{benefit}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             <section ref={addToRefs} className="mb-20">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
//                   Open Positions
//                 </h2>
//                 <p className="text-lg text-white/80 max-w-3xl mx-auto">
//                   Join our team and work on exciting projects that make a real impact.
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 {careersData.openPositions.map((job) => (
//                   <div
//                     key={job.id}
//                     className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
//                   >
//                     <div
//                       className="p-6 cursor-pointer"
//                       onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
//                     >
//                       <div className="flex items-start justify-between">
//                         <div className="flex-1">
//                           <h3 className="text-2xl font-bold text-white mb-3">
//                             {job.title}
//                           </h3>
//                           <div className="flex flex-wrap gap-3 mb-3">
//                             <span className="flex items-center gap-1 text-sm text-white/70">
//                               <Briefcase className="w-4 h-4" />
//                               {job.department}
//                             </span>
//                             <span className="flex items-center gap-1 text-sm text-white/70">
//                               <MapPin className="w-4 h-4" />
//                               {job.location}
//                             </span>
//                             <span className="flex items-center gap-1 text-sm text-white/70">
//                               <Clock className="w-4 h-4" />
//                               {job.type}
//                             </span>
//                             <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-lg text-xs text-purple-300">
//                               {job.experience}
//                             </span>
//                           </div>
//                           <p className="text-white/80">{job.description}</p>
//                         </div>
//                         <button className="ml-4 text-purple-400 hover:text-purple-300">
//                           {expandedJob === job.id ? (
//                             <ChevronUp className="w-6 h-6" />
//                           ) : (
//                             <ChevronDown className="w-6 h-6" />
//                           )}
//                         </button>
//                       </div>
//                     </div>

//                     {expandedJob === job.id && (
//                       <div className="px-6 pb-6 border-t border-white/10 pt-6">
//                         <div className="space-y-6">
//                           <div>
//                             <h4 className="text-lg font-semibold text-white mb-3">
//                               Responsibilities
//                             </h4>
//                             <ul className="space-y-2">
//                               {job.responsibilities.map((resp, idx) => (
//                                 <li key={idx} className="text-white/80 flex items-start gap-2">
//                                   <span className="text-purple-400 mt-1">•</span>
//                                   <span>{resp}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>

//                           <div>
//                             <h4 className="text-lg font-semibold text-white mb-3">
//                               Requirements
//                             </h4>
//                             <ul className="space-y-2">
//                               {job.requirements.map((req, idx) => (
//                                 <li key={idx} className="text-white/80 flex items-start gap-2">
//                                   <span className="text-purple-400 mt-1">•</span>
//                                   <span>{req}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>

//                           <div>
//                             <h4 className="text-lg font-semibold text-white mb-3">
//                               Nice to Have
//                             </h4>
//                             <ul className="space-y-2">
//                               {job.niceToHave.map((item, idx) => (
//                                 <li key={idx} className="text-white/80 flex items-start gap-2">
//                                   <span className="text-blue-400 mt-1">•</span>
//                                   <span>{item}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>

//                           <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
//                             Apply for this position
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </section>

//             <section ref={addToRefs} className="mb-20">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
//                   {careersData.hiringProcess.title}
//                 </h2>
//                 <p className="text-lg text-white/80 max-w-3xl mx-auto">
//                   {careersData.hiringProcess.description}
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {careersData.hiringProcess.steps.map((step, idx) => (
//                   <div
//                     key={idx}
//                     className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 relative"
//                   >
//                     <div className="absolute -top-4 left-6 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
//                       {step.step}
//                     </div>
//                     <h3 className="text-xl font-bold text-white mb-2 mt-2">
//                       {step.title}
//                     </h3>
//                     <p className="text-white/80 mb-3">{step.description}</p>
//                     <span className="text-sm text-green-400">{step.duration}</span>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             <section ref={addToRefs} className="mb-20">
//               <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                   {careersData.cta.title}
//                 </h2>
//                 <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
//                   {careersData.cta.description}
//                 </p>
//                 <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300">
//                   {careersData.cta.buttonText}
//                 </button>
//                 <p className="text-sm text-white/60 mt-4">
//                   Email us at{" "}
//                   <a href={`mailto:${careersData.cta.email}`} className="text-purple-400 hover:text-purple-300">
//                     {careersData.cta.email}
//                   </a>
//                 </p>
//               </div>
//             </section>
//           </div>
//         </main>
//       </div>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Breadcrumb from "@/components/about/Breadcrumb";
import { ArrowRight, Lightbulb, Users, Book, Heart, Globe, Target, MapPin, Clock, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import careersData from "../../data/careersData.json";
import SplitType from "split-type";
import ApplicationModal from "@/components/careers/ApplicationModal";

gsap.registerPlugin(ScrollTrigger);

const iconMap: any = {
  lightbulb: Lightbulb,
  users: Users,
  book: Book,
  heart: Heart,
  globe: Globe,
  target: Target,
};

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

/* ------------------- HERO SECTION ------------------- */
interface CareerHeroProps {
  title: string;
  title2: string;
  subtitle: string;
  buttons: { label: string; link: string }[];
}

function CareerHero({ title, title2, subtitle, buttons }: CareerHeroProps) {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number }>
  >([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  // Background Waves
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
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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
          const y = canvas.height / 2 + Math.sin((x + time + i * 100) / 50) * 30 * (i + 1);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      time += 2;
      requestAnimationFrame(drawWaves);
    };
    drawWaves();
  }, []);

  // Text Animation
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
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918] mb-5">
      {/* Waves Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />

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
            <pattern id="companyGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="100" height="100" fill="none" stroke="#a855f7" strokeWidth="1" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="#a855f7" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#companyGrid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex-1 text-center space-y-6">
            <h1 ref={textRef} className="text-5xl md:text-6xl font-bold text-white leading-tight">
              {title} <span className="text-purple-500">{title2}</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-md mx-auto">{careersData.hero.description}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.link}
                  className={`group px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2 transition-all ${index === 0
                    ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:scale-105"
                    : "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50"
                    }`}
                >
                  <span>{button.label}</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
            <img src="/assets/images/careers.png" className="  rounded-lg shadow-lg" style={{
              width: "auto",
              height: "auto",
              maxWidth: "100%", // prevents overflow on small screens
            }} />
          </div>
        </div>
      </div>

      {/* Bottom Line Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      {/* Animations */}
      <style>{`
          @keyframes company-float {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
            50% { transform: translateY(-30px) translateX(20px); opacity: 0.8; }
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

/* ------------------- CAREERS PAGE ------------------- */
export default function CareersPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [positions, setPositions] = useState<JobPosition[]>([]);
  const [loadingPositions, setLoadingPositions] = useState(true);
  const [selectedJob, setSelectedJob] = useState<{ id: string; title: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    try {
      const res = await fetch("/api/careers/positions");
      const data = await res.json();
      setPositions(data);
    } catch (error) {
      console.error("Error fetching positions:", error);
    } finally {
      setLoadingPositions(false);
    }
  };

  const handleApply = (jobId: any, jobTitle: string) => {
    setSelectedJob({ id: jobId, title: jobTitle });
    setIsModalOpen(true);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      sectionsRef.current.forEach((section, index) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.05,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 85%" },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };



  return (
    <div className="min-h-screen bg-[#0E0918]">
      <header className="page-content ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Careers" }]} />
        </div>
      </header>

      <main className="pb-20">
        {/* HERO SECTION */}
        <CareerHero
          title={careersData.hero.title}
          title2={careersData.hero.title2}
          subtitle={careersData.hero.subtitle}
          buttons={careersData.hero.buttons}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section ref={contentRef} className="mb-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {careersData.hero.title}{careersData.hero.title2}
              </h1>
              <p className="text-xl md:text-2xl text-purple-400 mb-6">
                {careersData.hero.subtitle}
              </p>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                {careersData.hero.description}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {careersData.hero.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section ref={addToRefs} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {careersData.culture.title}
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                {careersData.culture.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careersData.culture.values.map((value, idx) => {

                const IconComponent = iconMap[value.icon] || Target;
                return (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-white/80">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section ref={addToRefs} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {careersData.benefits.title}
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                {careersData.benefits.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careersData.benefits.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.category}
                  </h3>
                  <ul className="space-y-2">
                    {item.benefits.map((benefit, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-white/80 text-sm flex items-start gap-2"
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Show message when no positions available with option to submit resume */}
          {!loadingPositions && positions.length === 0 && (
            <section ref={addToRefs} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Join Our Team
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  We're always looking for talented individuals to join our team.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 md:p-12 text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-8 h-8 text-purple-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    No Positions Currently Open
                  </h3>

                  <p className="text-white/80 mb-6 leading-relaxed">
                    While we don't have any specific openings at the moment, we're always interested in connecting with talented professionals.
                    Send us your resume and we'll keep you in mind for future opportunities that match your skills and experience.
                  </p>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6 text-left">
                    <h4 className="text-lg font-semibold text-white mb-3">Why Submit Your Resume?</h4>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">✓</span>
                        <span>Be the first to know about new openings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">✓</span>
                        <span>Get matched with positions that fit your profile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">✓</span>
                        <span>Join our talent pool for future opportunities</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => handleApply(0, "General Application")}
                    className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    Submit Your Resume
                  </button>

                  <p className="text-white/50 text-sm mt-4">
                    We'll review your application and reach out when relevant opportunities arise
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Only show Open Positions section if there are positions */}
          {!loadingPositions && positions.length > 0 && (



            <section ref={addToRefs} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Open Positions
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  Join our team and work on exciting projects that make a real impact.
                </p>
              </div>

              <div className="space-y-4">
                {positions.map((job) => {
                  const hasExpandableContent =
                    (job.responsibilities && job.responsibilities.length > 0) ||
                    (job.requirements && job.requirements.length > 0) ||
                    (job.niceToHave && job.niceToHave.length > 0);

                  return (
                    <div
                      key={job.id}
                      className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
                    >
                      <div
                        className="p-6 cursor-pointer"
                        onClick={() => {
                          if (!hasExpandableContent) return;
                          setExpandedJob(expandedJob === job.id ? null : job.id);
                        }}
                      >

                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="text-2xl font-bold text-white mb-3">
                                {job.title}
                              </h3>

                              <button
                                onClick={() => handleApply(job.id, job.title)}
                                className="w-fit bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                              >
                                Apply for this position
                              </button>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-3">
                              <span className="flex items-center gap-1 text-sm text-white/70">
                                <Briefcase className="w-4 h-4" />
                                {job.department}
                              </span>
                              <span className="flex items-center gap-1 text-sm text-white/70">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1 text-sm text-white/70">
                                <Clock className="w-4 h-4" />
                                {job.type}
                              </span>
                              <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-lg text-xs text-purple-300">
                                {job.experience}
                              </span>
                            </div>
                            <p className="text-white/80">{job.description}</p>
                          </div>

                          {hasExpandableContent && (
                            <button className="ml-4 text-purple-400 hover:text-purple-300">
                              {expandedJob === job.id ? (
                                <ChevronUp className="w-6 h-6" />
                              ) : (
                                <ChevronDown className="w-6 h-6" />
                              )}
                            </button>
                          )}
                        </div>
                      </div>

                      {expandedJob === job.id && (
                        <div className="px-6 pb-6 border-t border-white/10 pt-6">
                          <div className="space-y-6">
                            {job.responsibilities && job.responsibilities.length > 0 && (
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3">
                                  Responsibilities
                                </h4>
                                <ul className="space-y-2">
                                  {job.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="text-white/80 flex items-start gap-2">
                                      <span className="text-purple-400 mt-1">•</span>
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {job.requirements && job.requirements.length > 0 && (
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3">
                                  Requirements
                                </h4>
                                <ul className="space-y-2">
                                  {job.requirements.map((req, idx) => (
                                    <li key={idx} className="text-white/80 flex items-start gap-2">
                                      <span className="text-purple-400 mt-1">•</span>
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {job.niceToHave.length > 0 && (
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3">
                                  Nice to Have
                                </h4>
                                <ul className="space-y-2">
                                  {job.niceToHave.map((item, idx) => (
                                    <li key={idx} className="text-white/80 flex items-start gap-2">
                                      <span className="text-blue-400 mt-1">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* <button
                            onClick={() => handleApply(job.id, job.title)}
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                          >
                            Apply for this position
                          </button> */}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          <section ref={addToRefs} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {careersData.hiringProcess.title}
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                {careersData.hiringProcess.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careersData.hiringProcess.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-white/5 relative to-gray-900/30 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-white/80 mb-3">{step.description}</p>
                  <span className="text-sm text-purple-400">{step.duration}</span>
                </div>
              ))}
            </div>
          </section>

          {/* <section ref={addToRefs} className="mb-20">
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {careersData.cta.title}
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
                {careersData.cta.description}
              </p>
              <a
                href={`mailto:${careersData.cta.email}`}
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300"
              >
                {careersData.cta.buttonText}
              </a>
              <p className="text-sm text-white/60 mt-4">
                Email us at{" "}
                <a href={`mailto:${careersData.cta.email}`} className="text-purple-400 hover:text-purple-300">
                  {careersData.cta.email}
                </a>
              </p>
            </div>
          </section> */}
        </div>
      </main>

      {/* Application Modal */}
      {selectedJob && (
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedJob(null);
          }}
          jobTitle={selectedJob.title}
          jobId={parseInt(selectedJob.id)}
        />
      )}
    </div>
  );
}



