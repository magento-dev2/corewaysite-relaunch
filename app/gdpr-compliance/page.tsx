"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "next/head";
import Breadcrumb from "@/components/about/Breadcrumb";
import { Shield, Eye, Edit, Trash, Download, X, AlertCircle, Pause } from "lucide-react";
import gdprData from "../../data/gdprComplianceData.json";

gsap.registerPlugin(ScrollTrigger);

const iconMap: any = {
  eye: Eye,
  edit: Edit,
  trash: Trash,
  pause: Pause,
  download: Download,
  x: X,
  shield: Shield,
  "alert-circle": AlertCircle,
};

export default function GDPRCompliancePage() {
  const siteUrl = "https://www.corewaysolution.com";
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

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
        <title>GDPR Compliance | Coreway Solution</title>
        <meta
          name="description"
          content="GDPR Compliance information for Coreway Solution. Learn about our commitment to data protection."
        />
        <meta property="og:title" content="GDPR Compliance | Coreway Solution" />
        <link rel="canonical" href={`${siteUrl}/gdpr-compliance`} />
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20 pb-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "GDPR Compliance" },
              ]}
            />
          </div>
        </header>

        <main className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={contentRef}
              className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-2">
                <Shield className="w-12 h-12 text-green-400" />
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {gdprData.title}
                </h1>
              </div>
              <p className="text-green-400 text-xl mb-4">{gdprData.subtitle}</p>
              <p className="text-white/60 text-lg mb-12">
                Last Updated: {gdprData.lastUpdated}
              </p>

              <div className="space-y-12">
                {gdprData.sections.map((section: any) => (
                  <section key={section.id} ref={addToRefs}>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {section.title}
                    </h2>

                    {section.content && section.content.map((paragraph: string, idx: number) => (
                      <p key={idx} className="text-white/90 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}

                    {section.list && (
                      <ul className="list-disc list-inside text-white/90 space-y-2 ml-4 mb-4">
                        {section.list.map((item: string, idx: number) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.legalBases && (
                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        {section.legalBases.map((basis: any, idx: number) => (
                          <div
                            key={idx}
                            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6"
                          >
                            <h3 className="text-xl font-bold text-white mb-2">{basis.basis}</h3>
                            <p className="text-white/90 mb-3 text-sm">{basis.description}</p>
                            <div className="space-y-1">
                              <p className="text-xs text-white/70 mb-1">Examples:</p>
                              {basis.examples.map((example: string, exIdx: number) => (
                                <span
                                  key={exIdx}
                                  className="inline-block px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300 mr-2 mb-2"
                                >
                                  {example}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.rights && (
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        {section.rights.map((right: any, idx: number) => {
                          const IconComponent = iconMap[right.icon] || Shield;
                          return (
                            <div
                              key={idx}
                              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6"
                            >
                              <div className="flex items-start gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <IconComponent className="w-5 h-5 text-green-400" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-lg font-bold text-white mb-2">
                                    {right.right}
                                  </h3>
                                  <p className="text-white/90 text-sm mb-3">{right.description}</p>
                                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                                    <p className="text-xs text-green-300 mb-1">How to exercise:</p>
                                    <p className="text-sm text-white/90">{right.howToExercise}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {section.securityMeasures && (
                      <div className="space-y-4 mt-6">
                        {section.securityMeasures.map((category: any, idx: number) => (
                          <div
                            key={idx}
                            className="bg-white/5 border border-white/10 rounded-xl p-5"
                          >
                            <h3 className="text-lg font-semibold text-white mb-3">
                              {category.category}
                            </h3>
                            <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                              {category.measures.map((measure: string, mIdx: number) => (
                                <li key={mIdx} className="text-sm">{measure}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.retentionPeriods && (
                      <div className="overflow-x-auto mt-6">
                        <table className="w-full border border-white/10 rounded-lg overflow-hidden">
                          <thead className="bg-purple-500/20">
                            <tr>
                              <th className="px-4 py-3 text-left text-white font-semibold">Data Type</th>
                              <th className="px-4 py-3 text-left text-white font-semibold">Retention Period</th>
                              <th className="px-4 py-3 text-left text-white font-semibold">Reason</th>
                            </tr>
                          </thead>
                          <tbody>
                            {section.retentionPeriods.map((period: any, idx: number) => (
                              <tr
                                key={idx}
                                className="border-t border-white/10 hover:bg-white/5 transition-colors"
                              >
                                <td className="px-4 py-3 text-white/90">{period.dataType}</td>
                                <td className="px-4 py-3 text-white/90">{period.period}</td>
                                <td className="px-4 py-3 text-white/80 text-sm">{period.reason}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {section.safeguards && (
                      <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                        {section.safeguards.map((safeguard: string, idx: number) => (
                          <li key={idx}>{safeguard}</li>
                        ))}
                      </ul>
                    )}

                    {section.additionalContent && section.additionalContent.map((paragraph: string, idx: number) => (
                      <p key={idx} className="text-white/90 leading-relaxed mt-4">
                        {paragraph}
                      </p>
                    ))}

                    {section.dpo && (
                      <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-6 mt-6">
                        <h3 className="text-xl font-bold text-white mb-3">{section.dpo.role}</h3>
                        <p className="text-white/90 mb-3">Email: {section.dpo.email}</p>
                        <div className="space-y-2">
                          <p className="text-sm text-white/80 mb-2">Responsibilities:</p>
                          {section.dpo.responsibilities.map((resp: string, rIdx: number) => (
                            <div key={rIdx} className="flex items-start gap-2">
                              <Shield className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                              <span className="text-sm text-white/90">{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {section.contact && (
                      <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-6 mt-6">
                        <p className="text-white font-semibold text-lg mb-3">
                          {section.contact.company}
                        </p>
                        {section.contact.dpo && (
                          <p className="text-white/90 mb-2">DPO: {section.contact.dpo}</p>
                        )}
                        {section.contact.privacy && (
                          <p className="text-white/90 mb-2">Privacy: {section.contact.privacy}</p>
                        )}
                        <p className="text-white/90">Website: {section.contact.website}</p>
                      </div>
                    )}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
