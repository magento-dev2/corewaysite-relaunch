"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "next/head";
import Breadcrumb from "@/components/about/Breadcrumb";
import {
  Code, Briefcase, ShoppingCart, Users, TrendingUp, DollarSign,
  Award, Megaphone, Headphones, Network, FileText, Search,
  Phone, CheckCircle, BookOpen, Rocket
} from "lucide-react";
import partnersData from "../../data/partnersData.json";

gsap.registerPlugin(ScrollTrigger);

const iconMap: any = {
  code: Code,
  briefcase: Briefcase,
  "shopping-cart": ShoppingCart,
  users: Users,
  "trending-up": TrendingUp,
  "dollar-sign": DollarSign,
  award: Award,
  megaphone: Megaphone,
  headphones: Headphones,
  network: Network,
  "file-text": FileText,
  search: Search,
  phone: Phone,
  "check-circle": CheckCircle,
  "book-open": BookOpen,
  rocket: Rocket,
};

export default function PartnersPage() {
  const siteUrl = "https://www.corewaysolution.com";
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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

  return (
    <>
      <Head>
        <title>Partners | Coreway Solution</title>
        <meta
          name="description"
          content="Join our partner ecosystem and unlock new opportunities for growth and success with Coreway Solution."
        />
        <link rel="canonical" href={`${siteUrl}/partners`} />
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Partners" },
              ]}
            />
          </div>
        </header>

        <main className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section ref={contentRef} className="mb-20">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {partnersData.hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-purple-400 mb-6">
                  {partnersData.hero.subtitle}
                </p>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  {partnersData.hero.description}
                </p>
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {partnersData.partnerTypes.title}
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  {partnersData.partnerTypes.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {partnersData.partnerTypes.types.map((type, idx) => {
                  const IconComponent = iconMap[type.icon] || Briefcase;
                  return (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="w-7 h-7 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {type.type}
                      </h3>
                      <p className="text-white/80 mb-4">{type.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white/70 mb-2">Benefits:</h4>
                        <ul className="space-y-2">
                          {type.benefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="text-white/80 text-sm flex items-start gap-2">
                              <span className="text-purple-400 mt-1">•</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <p className="text-sm text-white/60">
                          <span className="font-semibold">Ideal for:</span> {type.idealFor}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {partnersData.benefits.title}
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  {partnersData.benefits.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnersData.benefits.items.map((item, idx) => {
                  const IconComponent = iconMap[item.icon] || Award;
                  return (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6"
                    >
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {partnersData.currentPartners.title}
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  {partnersData.currentPartners.description}
                </p>
              </div>

              <div className="space-y-8">
                {partnersData.currentPartners.categories.map((category, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {category.category}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {category.partners.map((partner, pIdx) => (
                        <div
                          key={pIdx}
                          className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 text-center"
                        >
                          <div className="w-16 h-16 bg-purple-500/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl font-bold text-purple-400">
                              {partner.name.charAt(0)}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            {partner.name}
                          </h4>
                          <p className="text-sm text-white/70">{partner.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {partnersData.process.title}
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  {partnersData.process.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnersData.process.steps.map((step, idx) => {
                  const IconComponent = iconMap[step.icon] || CheckCircle;
                  return (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 relative"
                    >
                      <div className="absolute -top-4 left-6 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 mt-2">
                        <IconComponent className="w-6 h-6 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/80">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  What Our Partners Say
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {partnersData.testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6"
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center mb-3">
                        <span className="text-xl font-bold text-purple-300">
                          {testimonial.company.charAt(0)}
                        </span>
                      </div>
                      <p className="text-white/90 italic mb-4">"{testimonial.quote}"</p>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-white/70">{testimonial.role}</p>
                      <p className="text-sm text-purple-400">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section ref={addToRefs} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {partnersData.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
                  >
                    <button
                      className="w-full p-6 text-left flex items-start justify-between"
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">
                        {item.question}
                      </h3>
                      <span className="text-purple-400 flex-shrink-0">
                        {expandedFaq === idx ? "−" : "+"}
                      </span>
                    </button>
                    {expandedFaq === idx && (
                      <div className="px-6 pb-6 text-white/80">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section ref={addToRefs}>
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {partnersData.cta.title}
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                  {partnersData.cta.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300">
                    {partnersData.cta.primaryButton.text}
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300">
                    {partnersData.cta.secondaryButton.text}
                  </button>
                </div>
                <div className="mt-6 space-y-2">
                  <p className="text-sm text-white/60">
                    Email: <a href={`mailto:${partnersData.cta.contact.email}`} className="text-purple-400 hover:text-purple-300">{partnersData.cta.contact.email}</a>
                  </p>
                  <p className="text-sm text-white/60">
                    Phone: <a href={`tel:${partnersData.cta.contact.phone}`} className="text-purple-400 hover:text-purple-300">{partnersData.cta.contact.phone}</a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
