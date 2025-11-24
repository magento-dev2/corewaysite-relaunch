"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, Award, Zap, Filter, Search } from "lucide-react";
import Lenis from '@studio-freight/lenis';
import PageCTA from "@/components/PageCTA";

const caseStudies = [
  {
    id: "gpt-chatbot-ats-crm",
    slug: "boddess",
    title: "GPT Chatbot Integration for ATS & CRM",
    client: "TalentFlow Solutions",
    industry: "HR Tech & Recruitment",
    description: "AI-powered recruitment automation that transformed hiring operations, automating 70% of tasks and tripling submission speed.",
    image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: [
      { label: "Tasks Automated", value: "70%" },
      { label: "Faster Submissions", value: "3x" },
      { label: "Time Saved", value: "60%" }
    ],
    tags: ["AI/ML", "Automation", "SaaS"],
    featured: true
  },
  {
    id: "ecommerce-platform",
    slug: "techcorp-saas-platform",
    title: "Premium Fashion E-commerce Platform",
    client: "Boddess Fashion",
    industry: "Fashion & Retail",
    description: "Complete digital transformation delivering a cutting-edge shopping experience with 156% increase in conversions.",
    image: "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: [
      { label: "Conversion Increase", value: "156%" },
      { label: "Page Load Time", value: "2.8s" },
      { label: "Mobile Growth", value: "68%" }
    ],
    tags: ["E-commerce", "Web Development", "UX/UI"],
    featured: true
  },
  {
    id: "fintech-dashboard",
    slug: "fintech-dashboard",
    title: "Real-time Financial Analytics Dashboard",
    client: "FinanceHub Pro",
    industry: "Fintech",
    description: "Comprehensive financial dashboard with real-time data visualization and predictive analytics for informed decision-making.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: [
      { label: "Processing Speed", value: "10x" },
      { label: "Data Accuracy", value: "99.9%" },
      { label: "User Adoption", value: "94%" }
    ],
    tags: ["Fintech", "Dashboard", "Analytics"],
    featured: false
  },
  {
    id: "health-app",
    slug: "healthplus-mobile-app",
    title: "AI-Powered Health & Wellness App",
    client: "HealthPlus",
    industry: "Healthcare",
    description: "Mobile health application with AI-powered diagnosis assistance, appointment scheduling, and telemedicine capabilities.",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: [
      { label: "Active Users", value: "50K+" },
      { label: "App Rating", value: "4.8★" },
      { label: "Consultations", value: "15K+" }
    ],
    tags: ["Healthcare", "Mobile App", "AI/ML"],
    featured: false
  },
  {
    id: "saas-platform",
    slug: "techcorp-saas-platform",
    title: "Enterprise SaaS Project Management",
    client: "TechCorp Solutions",
    industry: "SaaS & Enterprise",
    description: "Scalable project management platform serving 10,000+ teams with advanced collaboration and automation features.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: [
      { label: "Teams Served", value: "10K+" },
      { label: "Uptime", value: "99.99%" },
      { label: "Productivity Boost", value: "45%" }
    ],
    tags: ["SaaS", "Enterprise", "Productivity"],
    featured: false
  },
  {
    id: "ai-content-platform",
    slug: "boddess",
    title: "AI Content Generation Platform",
    client: "ContentPro AI",
    industry: "MarTech",
    description: "Revolutionary content creation platform using GPT-4 to generate high-quality marketing content at scale.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
    metrics: [
      { label: "Content Generated", value: "1M+" },
      { label: "Time Saved", value: "80%" },
      { label: "Client ROI", value: "320%" }
    ],
    tags: ["AI/ML", "MarTech", "Content"],
    featured: false
  }
];

const industries = ["All", "HR Tech", "Fashion & Retail", "Fintech", "Healthcare", "SaaS", "MarTech"];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(caseStudies.length).fill(false));

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
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.case-study-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, [selectedIndustry, searchQuery]);

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === "All" || study.industry.includes(selectedIndustry);
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  const featuredStudies = filteredCaseStudies.filter(study => study.featured);
  const regularStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* <header className="bg-black/80 backdrop-blur-md text-white py-4 px-4 sticky top-0 z-50 border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            YourBrand
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <Link href="/case-studies" className="text-purple-400 font-semibold">Case Studies</Link>
            <Link href="/ugc-ads" className="hover:text-purple-400 transition-colors">UGC Ads</Link>
            <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
          </nav>
        </div>
      </header> */}

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-800 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300">Our Work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Case Studies
          </h1>

          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore how we've helped businesses transform their digital presence and achieve remarkable results through innovative solutions.
          </p>

          <div className="max-w-2xl mx-auto space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-purple-950/30 backdrop-blur-sm border border-purple-800/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
              />
            </div>

            <div className="flex items-center gap-3 flex-wrap justify-center">
              <Filter className="w-5 h-5 text-purple-400" />
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedIndustry === industry
                      ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white'
                      : 'bg-purple-950/30 text-gray-400 hover:bg-purple-900/40 border border-purple-800/30'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {featuredStudies.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-black to-purple-950/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <Award className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Featured Projects
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredStudies.map((study, index) => (
                <Link
                  key={study.id}
                  href={`/case-studies/${study.slug}`}
                  className={`case-study-card group block transition-all duration-700 ${
                    visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  data-index={index}
                >
                  <div className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-800/30 rounded-3xl overflow-hidden hover:border-purple-600/50 transition-all hover:scale-105">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <p className="text-sm text-purple-400 mb-2">{study.industry}</p>
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {study.title}
                      </h3>
                      <p className="text-gray-400 mb-6">{study.description}</p>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {study.metrics.map((metric, i) => (
                          <div key={i}>
                            <div className="text-2xl font-bold text-purple-400 mb-1">{metric.value}</div>
                            <div className="text-xs text-gray-500">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-4 transition-all">
                        <span>View Case Study</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          {regularStudies.length > 0 && featuredStudies.length > 0 && (
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
              All Projects
            </h2>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStudies.map((study, index) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className={`case-study-card group block transition-all duration-700 ${
                  visibleCards[featuredStudies.length + index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                data-index={featuredStudies.length + index}
              >
                <div className="bg-purple-950/30 backdrop-blur-sm border border-purple-800/30 rounded-2xl overflow-hidden hover:border-purple-600/50 transition-all hover:scale-105 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-purple-400 mb-2">{study.industry}</p>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{study.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-900/40 border border-purple-700/30 text-purple-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400 mb-4">No case studies found</p>
              <p className="text-gray-500">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>

  <PageCTA
            badge="Automate Everything"
            title=" Ready to Start Your Project?"
            description="Let's create something extraordinary together. Get in touch to discuss how we can help transform your business."
            primaryButtonText="Start Your Project"
            secondaryButtonText=" Explore UGC Ads"
            footerText="Free workflow consultation • API integration • Custom automation"
          />
      

      {/* <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-purple-900 via-purple-950 to-black rounded-3xl p-12 border border-purple-700/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-700 rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <Zap className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. Get in touch to discuss how we can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/ugc-ads"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-purple-500/50 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                >
                  Explore UGC Ads
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <footer className="bg-black text-white py-12 border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 YourBrand. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}
