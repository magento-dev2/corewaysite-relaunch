"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "@/components/about/Breadcrumb";
import {
  Rocket, Code, CheckCircle, Brain, AlertCircle, HelpCircle,
  Clock, ChevronRight, Search, Mail, MessageCircle, Phone, Users as UsersIcon
} from "lucide-react";
import documentationData from "../../data/documentationData.json";

gsap.registerPlugin(ScrollTrigger);

const iconMap: any = {
  rocket: Rocket,
  code: Code,
  "check-circle": CheckCircle,
  brain: Brain,
  "alert-circle": AlertCircle,
  "help-circle": HelpCircle,
  mail: Mail,
  "message-circle": MessageCircle,
  phone: Phone,
  users: UsersIcon,
};

const difficultyColors: any = {
  Beginner: "bg-green-500/20 border-green-500/30 text-green-300",
  Intermediate: "bg-yellow-500/20 border-yellow-500/30 text-yellow-300",
  Advanced: "bg-red-500/20 border-red-500/30 text-red-300",
};

export default function DocumentationPage() {
  const siteUrl = "https://www.corewaysolution.com";
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

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
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const filteredCategories = documentationData.categories.filter((category) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      category.title.toLowerCase().includes(query) ||
      category.description.toLowerCase().includes(query) ||
      category.articles?.some(
        (article: any) =>
          article.title.toLowerCase().includes(query) ||
          article.description.toLowerCase().includes(query)
      )
    );
  });

  return (
    <>
      <Head>
        <title>Documentation | Coreway Solution</title>
        <meta
          name="description"
          content="Comprehensive documentation, guides, and resources for Coreway Solution services."
        />
        <link rel="canonical" href={`${siteUrl}/documentation`} />
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Documentation" },
              ]}
            />
          </div>
        </header>

        <main className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section ref={contentRef} className="mb-16">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {documentationData.hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-purple-400 mb-4">
                  {documentationData.hero.subtitle}
                </p>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  {documentationData.hero.description}
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
              </div>
            </section>

            {!selectedArticle ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCategories.map((category: any) => {
                  const IconComponent = iconMap[category.icon] || HelpCircle;

                  return (
                    <section
                      key={category.id}
                      ref={addToRefs}
                      className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="w-7 h-7 text-purple-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3">
                        {category.title}
                      </h2>
                      <p className="text-white/70 mb-6">{category.description}</p>

                      {category.articles && (
                        <ul className="space-y-3">
                          {category.articles.slice(0, 3).map((article: any, idx: number) => (
                            <li key={idx}>
                              <button
                                onClick={() => setSelectedArticle(article)}
                                className="group flex items-start gap-2 text-left w-full"
                              >
                                <ChevronRight className="w-4 h-4 text-purple-400 mt-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                <div>
                                  <div className="text-white group-hover:text-purple-400 transition-colors text-sm">
                                    {article.title}
                                  </div>
                                  <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-white/50 flex items-center gap-1">
                                      <Clock className="w-3 h-3" />
                                      {article.readTime}
                                    </span>
                                    <span
                                      className={`text-xs px-2 py-0.5 rounded border ${
                                        difficultyColors[article.difficulty]
                                      }`}
                                    >
                                      {article.difficulty}
                                    </span>
                                  </div>
                                </div>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}

                      {category.questions && (
                        <div className="space-y-3">
                          {category.questions.slice(0, 3).map((faq: any, idx: number) => (
                            <div key={idx} className="text-sm">
                              <div className="text-white/90 font-medium mb-1">
                                {faq.question}
                              </div>
                              <div className="text-white/60 text-xs line-clamp-2">
                                {faq.answer}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {category.articles && category.articles.length > 3 && (
                        <button
                          onClick={() => setSelectedCategory(category.id)}
                          className="text-purple-400 hover:text-purple-300 text-sm font-semibold mt-4 inline-flex items-center gap-1"
                        >
                          View all {category.articles.length} articles
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </section>
                  );
                })}
              </div>
            ) : (
              <div ref={addToRefs}>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-purple-400 hover:text-purple-300 mb-6 inline-flex items-center gap-2"
                >
                  ← Back to Documentation
                </button>

                <div className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-3xl p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs px-3 py-1 rounded border ${
                        difficultyColors[selectedArticle.difficulty]
                      }`}
                    >
                      {selectedArticle.difficulty}
                    </span>
                    <span className="text-sm text-white/50 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedArticle.readTime}
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {selectedArticle.title}
                  </h1>
                  <p className="text-lg text-white/80 mb-8">
                    {selectedArticle.description}
                  </p>

                  {selectedArticle.content && (
                    <div className="space-y-8">
                      {selectedArticle.content.overview && (
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                          <p className="text-white/90 leading-relaxed">
                            {selectedArticle.content.overview}
                          </p>
                        </div>
                      )}

                      {selectedArticle.content.sections?.map((section: any, idx: number) => (
                        <div key={idx}>
                          <h2 className="text-2xl font-bold text-white mb-4">
                            {section.heading}
                          </h2>
                          <p className="text-white/90 leading-relaxed mb-4">
                            {section.text}
                          </p>
                          {section.example && (
                            <div className="bg-black/30 border border-white/10 rounded-lg p-4 font-mono text-sm text-green-400">
                              {section.example}
                            </div>
                          )}
                          {section.items && (
                            <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                              {section.items.map((item: string, i: number) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          )}
                          {section.practices && (
                            <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                              {section.practices.map((practice: string, i: number) => (
                                <li key={i}>{practice}</li>
                              ))}
                            </ul>
                          )}
                          {section.techniques && (
                            <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                              {section.techniques.map((tech: string, i: number) => (
                                <li key={i}>{tech}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}

                      {selectedArticle.content.checklist && (
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-4">Checklist</h2>
                          <ul className="space-y-3">
                            {selectedArticle.content.checklist.map((item: string, idx: number) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 bg-white/5 rounded-lg p-3"
                              >
                                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-white/90">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            <section ref={addToRefs} className="mt-16">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-4 text-center">
                  {documentationData.support.title}
                </h2>
                <p className="text-lg text-white/80 text-center max-w-2xl mx-auto mb-8">
                  {documentationData.support.description}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {documentationData.support.channels.map((channel: any, idx: number) => {
                    const IconComponent = iconMap[channel.icon] || Mail;
                    return (
                      <div
                        key={idx}
                        className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center"
                      >
                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {channel.name}
                        </h3>
                        <p className="text-sm text-white/70 mb-2">
                          {channel.description}
                        </p>
                        <p className="text-sm text-purple-400 font-semibold mb-1">
                          {channel.contact}
                        </p>
                        <p className="text-xs text-white/50">{channel.responseTime}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
