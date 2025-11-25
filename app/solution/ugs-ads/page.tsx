"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Video, Zap, Target, TrendingUp, CheckCircle2, Play, Users, Award, Clock, Star } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import PageCTA from "@/components/PageCTA";
import { gsap } from "gsap";
import SplitType from "split-type";
import WhyCorewaySection from "@/components/WhyCorewaySection";
import FAQ from "@/components/FAQ";
import sampleFAQs from '@/data/faq.json';


const processSteps = [
  {
    number: "01",
    title: "Share Your Product",
    description: "Tell us about your product, brand identity, and target audience. Upload product images and details.",
    icon: Target,
  },
  {
    number: "02",
    title: "Describe Your Vision",
    description: "Specify the type of ad you want - testimonial, unboxing, tutorial, or lifestyle. Share your creative requirements.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "AI-Powered Creation",
    description: "Our advanced AI generates realistic UGC ads with professional models perfectly matched to your brand.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Receive Your Ad",
    description: "Get high-quality, authentic-looking UGC video ads ready to boost your conversions across all platforms.",
    icon: Video,
  },
];

const showcaseVideos = [
  {
    id: 1,
    title: "Skincare Product Launch",
    client: "GlowBeauty Co.",
    category: "Beauty & Wellness",
    views: "2.4M",
    engagement: "8.5%",
    conversions: "+245%",
    thumbnail: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
    adType: "Product Testimonial",
    duration: "30s",
    platform: "Instagram & TikTok"
  },
  {
    id: 2,
    title: "Fitness Supplement Review",
    client: "PowerFuel Nutrition",
    category: "Health & Fitness",
    views: "1.8M",
    engagement: "12.3%",
    conversions: "+189%",
    thumbnail: "https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800",
    adType: "Unboxing Experience",
    duration: "45s",
    platform: "YouTube & Facebook"
  },
  {
    id: 3,
    title: "Tech Gadget Demo",
    client: "SmartLife Tech",
    category: "Technology",
    views: "3.2M",
    engagement: "15.7%",
    conversions: "+312%",
    thumbnail: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
    adType: "Tutorial & Demo",
    duration: "60s",
    platform: "All Platforms"
  },
  {
    id: 4,
    title: "Fashion Haul",
    client: "UrbanStyle Boutique",
    category: "Fashion & Lifestyle",
    views: "4.1M",
    engagement: "18.2%",
    conversions: "+425%",
    thumbnail: "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=800",
    adType: "Lifestyle Showcase",
    duration: "40s",
    platform: "Instagram & TikTok"
  },
  {
    id: 5,
    title: "Home Decor Transform",
    client: "CozyHome Living",
    category: "Home & Decor",
    views: "1.5M",
    engagement: "9.8%",
    conversions: "+178%",
    thumbnail: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
    adType: "Before & After",
    duration: "35s",
    platform: "Pinterest & Instagram"
  },
  {
    id: 6,
    title: "Food Product Review",
    client: "NutriSnack Foods",
    category: "Food & Beverage",
    views: "2.7M",
    engagement: "14.1%",
    conversions: "+267%",
    thumbnail: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    adType: "Taste Test",
    duration: "25s",
    platform: "TikTok & Snapchat"
  },
];

const stats = [
  { value: "500+", label: "UGC Ads Created", icon: Video },
  { value: "98%", label: "Client Satisfaction", icon: Award },
  { value: "24hrs", label: "Average Turnaround", icon: Clock },
  { value: "3.5x", label: "Average ROI Increase", icon: TrendingUp },
];

export default function UGCAdsPage() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [visibleVideos, setVisibleVideos] = useState<boolean[]>(new Array(showcaseVideos.length).fill(false));
  const showcaseRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);



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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videos = entry.target.querySelectorAll('.video-card');
            videos.forEach((video, index) => {
              setTimeout(() => {
                setVisibleVideos(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (showcaseRef.current) {
      observer.observe(showcaseRef.current);
    }

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen  text-white">
      {/* <header className="bg-black text-white py-4 px-4 sticky top-0 z-50 border-b border-gray-800 backdrop-blur-sm bg-black/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            YourBrand
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link href="/case-studies" className="hover:text-gray-300 transition-colors">Case Studies</Link>
            <Link href="/ugc-ads" className="text-white font-semibold">UGC Ads</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </nav>
        </div>
      </header> */}

      <section className="relative py-20 overflow-hidden">
        {/* MAIN DARK PURPLE BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#120A1F] via-[#1C0F33] to-[#0B0514]" />

        {/* SOFT GLOW ELEMENTS */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-[#7A3AFF] rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#C084FC] rounded-full blur-[140px] opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(130,70,255,0.25),transparent_60%)]" />
        </div>

        {/* CONTENT */}
        {/* <div className="relative max-w-7xl mx-auto px-4 text-center">
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
      <Sparkles className="w-4 h-4 text-purple-300" />
      <span className="text-sm font-semibold text-purple-100">AI-Powered UGC Ad Creation</span>
    </div>

    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
      Create Authentic UGC Ads <br />
      <span className="bg-gradient-to-r from-purple-200 via-white to-purple-300 bg-clip-text text-transparent">
        That Convert Like Crazy
      </span>
    </h1>

    <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
      Transform your product into compelling user-generated content using AI-powered models.
      Get professional-looking video ads in 24 hours — no filming required.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
      <Link
        href="/contact"
        className="px-8 py-4 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
      >
        Get Started Now
        <ArrowRight className="w-5 h-5" />
      </Link>

      <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2">
        <Play className="w-5 h-5" />
        Watch Demo
      </button>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-3 border border-white/20">
              <Icon className="w-6 h-6 text-purple-300" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {stat.value}
            </div>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        );
      })}
    </div>
  </div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">

            {/* Left Side Text + Button */}
            <div className="flex-1 flex flex-col justify-start items-center text-center mb-8 md:mb-0 space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight" ref={textRef}>

                Powerful UGC for <span className="text-purple-500">Higher ROI</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-md mt-2 leading-relaxed">
                Transform your product into compelling user-generated content using AI-powered models. Get professional-looking video ads in 24 hours — no filming required.            </p>

              <div className="flex justify-center gap-3">
                <button className="cursor-pointer group bg-purple-500 text-white px-6 py-3 rounded-lg text-center hover:bg-purple-600 transition-all font-medium flex items-center space-x-2 shadow-lg shadow-purple-500/30">
                  <span>Get Started Now</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
                <button className="cursor-pointer px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>


            </div>

            {/* Right Side Image */}
            <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0 ">
              <img
                src="/assets/herosection/ugs-Photoroom.png"
                alt="Hero Image"
                className="w-full max-w-4xl rounded-lg shadow-lg"
              />
            </div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mt-8 mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-3 border border-white/20">
                    <Icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      <section className="py-20  bg-gradient-to-b from-[#120A1F] via-[#1C0F33] to-[#0B0514]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From product details to viral UGC ads in just 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-white/30 transition-all hover:bg-white/10">
                    <div className="text-6xl font-bold text-white/10 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {step.number}
                    </div>
                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-white/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32  bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative" ref={showcaseRef}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results from brands who trusted us with their UGC ad campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseVideos.map((video, index) => (
              <div
                key={video.id}
                className={`video-card group cursor-pointer transition-all duration-700 ${visibleVideos[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all hover:transform hover:scale-105">
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-black ml-1" />
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <span className="px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-xs font-semibold border border-white/20">
                        {video.adType}
                      </span>
                      <span className="px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-xs font-semibold border border-white/20">
                        {video.duration}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xs text-gray-400 mb-2">{video.category}</p>
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">{video.client}</p>

                      <div className="grid grid-cols-3 gap-3 mb-3">
                        <div>
                          <div className="text-sm font-bold text-white">{video.views}</div>
                          <div className="text-xs text-gray-500">Views</div>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{video.engagement}</div>
                          <div className="text-xs text-gray-500">Engagement</div>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-green-400">{video.conversions}</div>
                          <div className="text-xs text-gray-500">Conversions</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Users className="w-3 h-3" />
                        {video.platform}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhyCorewaySection
        badge="Why Choose Us"
        title="Why Choose Coreway Solutions"
        subtitle="We're not just another software company. We're your technology partner committed to delivering exceptional results through innovation and expertise."

      />
      <FAQ
        badge="Help Center"
        title="Common Questions & Answers"
        description="Everything you need to know about our services and how we work"
        faqs={sampleFAQs}
        columns={1}
        showContactCTA={true}
        contactText="Still have questions?"
        contactButtonText="Contact Our Team"
      />

      <PageCTA
        badge="  Ready to Create Your UGC Ads?"
        title="  Ready to Create Your UGC Ads?"
        description=" Join 500+ brands creating authentic, high-converting UGC ads with AI.
              Get started today and see results in 24 hours."
        primaryButtonText="Start Your First Campaign"
        secondaryButtonText="Get Assessment"
        footerText="Free migration assessment • Zero downtime • 100% data integrity"
      />





      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
