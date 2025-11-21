"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";
import projects from "../../data/caseStudies.json";

interface Project {
  id: number;
  title: string;
  challenge: string;
  solution: string;
  imageUrl: string;
  slug: string;
  overview?: string;
  process?: string[];
  impact?: string;
  stats: { value: string; label: string; }[];
  gradient: string;
  icon: string;
}

// const projects: Project[] = [
//   {
//     id: 1,
//     slug: "geliyoo-search-engine-revolution-for-turkey",
//     title: "Geliyoo – Search Engine Revolution",
//     overview: "Geliyoo Bilişim is a Turkish multinational corporation specializing in Internet-related services.",
//     challenge: "They needed a team to develop a search engine, a news portal, Geliyoo Maps, and a browser — all together. The founder searched many big companies, but they were very expensive.",
//     solution: "Coreway held detailed discussions with the Geliyoo team, defined a clear scope of work, formed vendor associations, and found the right teams under budget.",
//     process: [
//       "Multiple rounds of requirement gathering",
//       "Technology stack transparency",
//       "Budget estimation",
//       "Vendor identification",
//       "Quality control throughout"
//     ],
//     impact: "Search engine, news portal, maps, and browser are now live.",
//     imageUrl: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920",
//     stats: [
//       { value: "4+", label: "Products Launched" },
//       { value: "50%", label: "Cost Saved" },
//       { value: "100K+", label: "Active Users" },
//       { value: "99.9%", label: "Uptime" }
//     ],
//     gradient: "from-violet-500 to-purple-600",
//     icon: "search"
//   },
//   {
//     id: 2,
//     slug: "orabel-ecommerce-platform-for-beauty-products",
//     title: "Orabel – Beauty E-commerce Pioneer",
//     overview: "Orabel is a leading e-commerce webstore for beauty product lovers in Canada.",
//     challenge: "The webstore was struggling with high traffic, slow loading pages, and a lengthy checkout process causing cart drops and high bounce rates.",
//     solution: "Coreway migrated the platform to Magento 2, optimized brand communication, deployed powerful SEO tactics, and made calculated UI & UX improvements.",
//     process: [
//       "Performance analysis",
//       "Platform migration to Magento 2",
//       "SEO optimization",
//       "UI/UX redesign",
//       "Checkout flow simplification"
//     ],
//     impact: "Reduced bounce rate, improved conversion, and enhanced customer experience.",
//     imageUrl: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920",
//     stats: [
//       { value: "65%", label: "Bounce Rate ↓" },
//       { value: "3x", label: "Page Speed ↑" },
//       { value: "45%", label: "Conversion ↑" },
//       { value: "500K+", label: "Monthly Visits" }
//     ],
//     gradient: "from-pink-500 to-rose-600",
//     icon: "trending"
//   }
// ];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const current = projects[activeIndex];
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -100) handleNext();
    if (info.offset.x > 100) handlePrev();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -45 : 45
    })
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </motion.div>

      {/* Floating particles */}
      {typeof window !== "undefined" && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-8"
      >
        {/* Header Section */}
        {/* <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Case Studies
              
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            <p className="relative text-gray-300 text-lg leading-relaxed bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              We understand the pain of startups and SMEs. Our mission is to deliver cutting-edge solutions for WEB, MOBILE, and ENTERPRISE with next-generation technologies that drive real results.
            </p>
          </motion.div>
        </div> */}

        <div className=" text-center items-center mb-14">

          {/* Left Side: Heading + Text */}
          <motion.div
            // ref={headerRef}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          // className="space-y-6"
          >

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Case Studies
            </h2>

          </motion.div>

          {/* Right Side: Animated Text Lines */}
          <div className=" ">

            <motion.p
              // key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              // transition={{ duration: 0.8, delay: index * 0.3 }}
              className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto"
            >
              We understand the pain of startups and SMEs. Our mission is to deliver cutting-edge solutions for WEB, MOBILE, and ENTERPRISE with next-generation technologies that drive real results.
            </motion.p>

          </div>

        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-[-35px] top-[58%] -translate-y-1/2 z-20 group cursor-pointer hidden lg:block"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-purple-600  text-white p-2 rounded-full backdrop-blur-md shadow-2xl border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.div>
        </button>




        {/* Main Content */}
        <div className="relative" style={{ perspective: "2000px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.6 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="grid lg:grid-cols-2 gap-12 items-start cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >


              {/* Left Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >


                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                    {current.title}
                  </h3>
                </motion.div>

                <motion.div
                  className="grid grid-cols-2 gap-4 mt-2 "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {current.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="relative group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                      <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 group-hover:border-purple-500/50 transition-all">
                        <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="flex justify-center">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl overflow-hidden shadow-2xl cursor-pointer mt-4 "
                  >
                    <Link href={`/case-studies/${current.slug}`} className="relative z-10">
                      <span className="relative z-10 cursor-pointer">View Full Case Study</span>
                    </Link>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div> */}
                  </motion.button>
                </div>

                {/* Stats Grid */}



              </motion.div>

              {/* Right Image */}
              <motion.div
                className="relative h-[500px] rounded-2xl overflow-hidden group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${current.gradient} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`}></div>

                {/* Border glow */}
                <div className="absolute inset-0 rounded-2xl  p-[2px]">
                  <div className="w-full h-full bg-black rounded-2xl overflow-hidden">
                    <motion.img
                      src={current.imageUrl}
                      alt={current.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Floating badge */}
                <motion.div
                  className="absolute top-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                  animate={{ y: isHovered ? -5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white text-sm font-semibold">Featured Project</span>
                </motion.div>
              </motion.div>
            </motion.div>


          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-[-35px] top-[58%] -translate-y-1/2 z-20 group cursor-pointer hidden lg:block"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-purple-600 text-white p-2 rounded-full backdrop-blur-md shadow-2xl border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.div>
        </button>

        {/* Progress Indicators */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {projects.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(i > activeIndex ? 1 : -1);
                setActiveIndex(i);
              }}
              className="relative group"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="h-2 rounded-full overflow-hidden bg-white/10"
                animate={{
                  width: activeIndex === i ? 48 : 32,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: "0%" }}
                  animate={{
                    width: activeIndex === i ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {activeIndex === i && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md"
                />
              )}
            </motion.button>
          ))}
        </motion.div>


      </motion.div>
    </section>
  );
}