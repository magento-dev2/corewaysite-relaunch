"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  challenges: string;
  solutions: string;
  stats: { value: string; label: string }[];
  imageUrl: string;
  imageAlt: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Headless eCommerce Migration",
    slug: "headless-ecommerce-migration",
    challenges:
      "Patients struggled with fragmented care journeys due to disconnected systems and records.",
    solutions:
      "Developed a unified platform integrating telehealth and EHR workflows for more connected services.",
    stats: [
      { value: "500+", label: "Hours Freed from Manual Work" },
      { value: "~1200", label: "In-Person Visits Avoided" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt: "Telehealth Dashboard",
  },
  {
    id: 2,
    title: "AI Dataset Delivery Platform for Enterprises",
    slug: "ai-dataset-delivery-platform-for-enterprises",
    challenges:
      "Data teams faced long delays in preparing large-scale AI datasets securely across regions.",
    solutions:
      "Built a multi-cloud data delivery platform with GPT-based metadata extraction and secure access.",
    stats: [
      { value: "70%", label: "Faster Data Delivery" },
      { value: "35%", label: "Lower Storage Cost" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt: "AI Data Delivery Dashboard",
  },
  {
    id: 3,
    slug: "smart-iot-lighting-dashboard",
    title: "Smart IoT Lighting Dashboard",
    challenges:
      "City operators lacked unified control and insights for thousands of connected lighting devices.",
    solutions:
      "Developed an IoT dashboard with MQTT integration, predictive maintenance, and group control.",
    stats: [
      { value: "1,000+", label: "Devices Monitored Live" },
      { value: "80%", label: "Manual Work Saved" },
    ],
    imageUrl:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imageAlt: "IoT Lighting System",
  },
];
export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = projects[activeIndex];
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -100) handleNext();
    if (info.offset.x > 100) handlePrev();
  };

  return (
    <section className="relative bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]  overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        <button
          onClick={handlePrev}
          className="absolute left-[-40] top-1/2 -translate-y-1/2 cursor-pointer bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Case Studies
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Discover how we deliver measurable results for our clients
          </p>
        </motion.div>

        {/* Main content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            ref={containerRef}
            className="grid lg:grid-cols-2 gap-10 items-center cursor-grab active:cursor-grabbing"
          >
            {/* Left content */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                {current.title}
              </h3>

              <div className="border-l border-purple-500/50 pl-4 space-y-8">
                <div>
                  <p className="text-sm italic text-purple-400 mb-1">Challenges</p>
                  <p className="text-gray-300 leading-relaxed">{current.challenges}</p>
                </div>
                <div>
                  <p className="text-sm italic text-purple-400 mb-1">Solutions</p>
                  <p className="text-gray-300 leading-relaxed">{current.solutions}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                {current.stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-3xl font-bold text-purple-400">{stat.value}</p>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg">
                View the Case Study
                <ArrowRight className="w-4 h-4" />
              </button> */}
              <Link href={`/case-studies/${current.slug}`}>
                <button className="mt-8 cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg">
                  View the Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Right image + buttons */}
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={current.imageUrl}
                alt={current.imageAlt}
                className="w-full h-full object-cover"
              />





            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handleNext}
          className="absolute right-[-40] top-1/2 -translate-y-1/2 cursor-pointer bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        {/* Progress line */}
        {/* segmented progress line */}
        <div className="mt-10 mb-10 flex items-center justify-center gap-3">
          {projects.map((_, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                backgroundColor: activeIndex === i ? "rgb(168,85,247)" : "rgba(107,114,128,0.6)", // purple-500 or gray-500
                scale: activeIndex === i ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="h-1 w-10 rounded-full cursor-pointer"
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}





// "use client";

// import { useState, useEffect, useRef } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// interface Stat {
//   label: string;
//   value: string | number;
// }

// interface Project {
//   documentId: any;
//   id: number;
//   title: string;
//   slug: string;
//   imageUrl?: string;
//   imageAlt?: string;
//   challenges?: string | null;
//   solutions?: string | null;
//   stats: Stat[];
//   body?: string | null;
// }

// export default function CaseStudies() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const fetchProjects = async () => {
//     try {
//       const res = await fetch("http://localhost:1337/api/articles/"); // Replace with your Strapi API
//       const json = await res.json();

//       // Map API data to match Project type
//       const mappedProjects: Project[] = json.data.map((item: any) => ({
//         id: item.id,
//         title: item.title,
//         slug: item.slug,
//         challenges: item.challenges ?? "No challenges provided",
//         solutions: item.solutions ?? "No solutions provided",
//         imageUrl: "https://via.placeholder.com/800x400", // Default image, replace if API has image field
//         imageAlt: item.title,
//         stats: [
//           { label: "Users", value: Math.floor(Math.random() * 1000) },
//           { label: "Projects", value: Math.floor(Math.random() * 100) },
//         ],
//         body: item.body,
//         documentId:item.documentId
//       }));

//       setProjects(mappedProjects);
//     } catch (err) {
//       console.error("Failed to fetch projects", err);
//     }
//   };

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev + 1) % projects.length);
//   };

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   const handleDragEnd = (_: any, info: any) => {
//     if (info.offset.x < -100) handleNext();
//     if (info.offset.x > 100) handlePrev();
//   };

//   if (projects.length === 0) return <p className="text-center text-white mt-20">Loading...</p>;

//   const current = projects[activeIndex];

//   return (
//     <section className="relative bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] overflow-hidden">
//       {/* Background glow */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
//         <button
//           onClick={handlePrev}
//           className="absolute left-[-40] top-1/2 -translate-y-1/2 cursor-pointer bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>

//         {/* Section title */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
//             Case Studies
//           </h2>
//           <p className="text-base text-gray-400 max-w-2xl mx-auto">
//             Discover how we deliver measurable results for our clients
//           </p>
//         </motion.div>

//         {/* Main content */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current.id}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragEnd={handleDragEnd}
//             initial={{ opacity: 0, x: 80 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -80 }}
//             transition={{ duration: 0.6 }}
//             ref={containerRef}
//             className="grid lg:grid-cols-2 gap-10 items-center cursor-grab active:cursor-grabbing"
//           >
//             {/* Left content */}
//             <div>
//               <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
//                 {current.title}
//               </h3>

//               <div className="border-l border-purple-500/50 pl-4 space-y-8">
               
//                 <div>
//                   <p className="text-sm italic text-purple-400 mb-1">Challenges</p>
//                   <p className="text-gray-300 leading-relaxed">{current.challenges}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm italic text-purple-400 mb-1">Solutions</p>
//                   <p className="text-gray-300 leading-relaxed">{current.solutions}</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-6 mt-10">
//                 {current.stats.map((stat, idx) => (
//                   <div key={idx}>
//                     <p className="text-3xl font-bold text-purple-400">{stat.value}</p>
//                     <p className="text-sm text-gray-300">{stat.label}</p>
//                   </div>
//                 ))}
//               </div>

//               <Link href={`/case-studies/${current.documentId}`}>
//                 <button className="mt-8 cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg">
//                   View the Case Study
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </Link>

//             </div>

//             {/* Right image */}
//             <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
//               <img
//                 src={current.imageUrl}
//                 alt={current.imageAlt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         <button
//           onClick={handleNext}
//           className="absolute right-[-40] top-1/2 -translate-y-1/2 cursor-pointer bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>

//         {/* Progress indicators */}
//         <div className="mt-10 mb-10 flex items-center justify-center gap-3">
//           {projects.map((_, i) => (
//             <motion.div
//               key={i}
//               initial={false}
//               animate={{
//                 backgroundColor: activeIndex === i ? "rgb(168,85,247)" : "rgba(107,114,128,0.6)",
//                 scale: activeIndex === i ? 1.1 : 1,
//               }}
//               transition={{ type: "spring", stiffness: 300, damping: 25 }}
//               className="h-1 w-10 rounded-full cursor-pointer"
//               onClick={() => setActiveIndex(i)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
