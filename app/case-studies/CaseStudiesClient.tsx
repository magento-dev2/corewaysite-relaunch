"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Filter, Search, MapPin, Briefcase } from "lucide-react";
import PageCTA from "@/components/PageCTA";

interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    client: string;
    industry: string;
    location: string;
    overview: string;
    services: string[];
    imageUrl: string;
    stats: { value: string; label: string }[];
}

export default function CaseStudiesClient({ caseStudies }: { caseStudies: CaseStudy[] }) {
    const [selectedIndustry, setSelectedIndustry] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Extract unique industries
    const industries = ["All", ...Array.from(new Set(caseStudies.map(cs => cs.industry))).sort()];

    const filteredCaseStudies = caseStudies.filter(study => {
        const matchesIndustry = selectedIndustry === "All" || study.industry === selectedIndustry;
        const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
            study.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
            study.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesIndustry && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#0E0918] text-white">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#0E0918] to-[#0E0918]" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-600 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-semibold text-purple-300">Our Success Stories</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Case Studies
                        </span>
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
                                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                            />
                        </div>

                        <div className="flex items-center gap-3 flex-wrap justify-center">
                            <Filter className="w-5 h-5 text-purple-400" />
                            {industries.map((industry) => (
                                <button
                                    key={industry}
                                    onClick={() => setSelectedIndustry(industry)}
                                    className={`px-4 py-2 rounded-full font-semibold transition-all ${selectedIndustry === industry
                                            ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30'
                                            : 'bg-white/5 backdrop-blur-xl text-gray-400 hover:bg-white/10 border border-white/10'
                                        }`}
                                >
                                    {industry}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-20 bg-gradient-to-b from-[#0E0918] to-[#1a1325]">
                <div className="max-w-7xl mx-auto px-6">
                    {filteredCaseStudies.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredCaseStudies.map((study) => (
                                <Link
                                    key={study.id}
                                    href={`/case-studies/${study.slug}`}
                                    className="group block transition-all duration-700 opacity-100 translate-y-0"
                                >
                                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all hover:scale-105 h-full flex flex-col">
                                        <div className="relative aspect-video overflow-hidden">
                                            <img
                                                src={study.imageUrl}
                                                alt={study.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                            <div className="absolute top-4 left-4">
                                                <span className="px-4 py-2 bg-purple-500/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full shadow-lg">
                                                    {study.industry}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                                                <div className="flex items-center gap-1">
                                                    <Briefcase className="w-4 h-4" />
                                                    <span>{study.client}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{study.location}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                                                {study.title}
                                            </h3>

                                            <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                                                {study.overview}
                                            </p>

                                            {/* Stats */}
                                            {study.stats && study.stats.length > 0 && (
                                                <div className="grid grid-cols-2 gap-3 mb-4">
                                                    {study.stats.slice(0, 2).map((stat, i) => (
                                                        <div key={i} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                                                            <div className="text-lg font-bold text-purple-400">{stat.value}</div>
                                                            <div className="text-xs text-gray-500">{stat.label}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Services Tags */}
                                            {study.services && study.services.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {study.services.slice(0, 2).map((service, i) => (
                                                        <span key={i} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs rounded-full">
                                                            {service}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
                                                <span>View Case Study</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-2xl text-gray-400 mb-4">No case studies found</p>
                            <p className="text-gray-500">Try adjusting your filters or search query</p>
                        </div>
                    )}
                </div>
            </section>

            <PageCTA
                badge="Transform Your Business"
                title="Ready to Start Your Project?"
                description="Let's create something extraordinary together. Get in touch to discuss how we can help transform your business."
                primaryButtonText="Start Your Project"
                secondaryButtonText="View Our Services"
                footerText="Free consultation • Proven expertise • Measurable results"
            />
        </div>
    );
}
