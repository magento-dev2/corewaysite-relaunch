"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "next/head";
import Breadcrumb from "@/components/about/Breadcrumb";
import {
  Code, Lock, Zap, Copy, Check, ChevronDown, ChevronRight
} from "lucide-react";
import apiData from "../../data/apiReferenceData.json";

gsap.registerPlugin(ScrollTrigger);

const methodColors: any = {
  GET: "bg-blue-500/20 border-blue-500/30 text-blue-300",
  POST: "bg-green-500/20 border-green-500/30 text-green-300",
  PUT: "bg-yellow-500/20 border-yellow-500/30 text-yellow-300",
  DELETE: "bg-red-500/20 border-red-500/30 text-red-300",
  PATCH: "bg-purple-500/20 border-purple-500/30 text-purple-300",
};

export default function APIReferencePage() {
  const siteUrl = "https://www.corewaysolution.com";
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [expandedEndpoint, setExpandedEndpoint] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("endpoints");

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

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <>
      <Head>
        <title>API Reference | Coreway Solution</title>
        <meta
          name="description"
          content="Complete API reference documentation for Coreway Solution services."
        />
        <link rel="canonical" href={`${siteUrl}/api-reference`} />
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "API Reference" },
              ]}
            />
          </div>
        </header>

        <main className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section ref={contentRef} className="mb-16">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Code className="w-12 h-12 text-purple-400" />
                  <h1 className="text-4xl md:text-6xl font-bold text-white">
                    {apiData.hero.title}
                  </h1>
                </div>
                <p className="text-xl md:text-2xl text-purple-400 mb-4">
                  {apiData.hero.subtitle}
                </p>
                <p className="text-lg text-white/80 max-w-3xl mx-auto mb-4">
                  {apiData.hero.description}
                </p>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className="text-white/60">Version: {apiData.hero.version}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60">Base URL: {apiData.hero.baseUrl}</span>
                </div>
              </div>

              <div className="flex justify-center gap-2 mb-8">
                <button
                  onClick={() => setActiveTab("endpoints")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === "endpoints"
                      ? "bg-purple-600 text-white"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  Endpoints
                </button>
                <button
                  onClick={() => setActiveTab("authentication")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === "authentication"
                      ? "bg-purple-600 text-white"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  Authentication
                </button>
                <button
                  onClick={() => setActiveTab("webhooks")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === "webhooks"
                      ? "bg-purple-600 text-white"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  Webhooks
                </button>
                <button
                  onClick={() => setActiveTab("sdks")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === "sdks"
                      ? "bg-purple-600 text-white"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  SDKs
                </button>
              </div>
            </section>

            {activeTab === "authentication" && (
              <section ref={addToRefs}>
                <div className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-3xl p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Lock className="w-8 h-8 text-purple-400" />
                    <h2 className="text-3xl font-bold text-white">
                      {apiData.authentication.title}
                    </h2>
                  </div>
                  <p className="text-white/80 mb-8">
                    {apiData.authentication.description}
                  </p>

                  <div className="space-y-8">
                    {apiData.authentication.methods.map((method: any, idx: number) => (
                      <div
                        key={idx}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6"
                      >
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {method.type}
                        </h3>
                        <p className="text-white/80 mb-6">{method.description}</p>

                        {method.example && (
                          <div className="space-y-4">
                            <div className="relative">
                              <div className="bg-black/40 border border-white/10 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-xs text-white/50">Header</span>
                                  <button
                                    onClick={() =>
                                      copyToClipboard(method.example.header, `auth-${idx}-header`)
                                    }
                                    className="text-white/50 hover:text-white transition-colors"
                                  >
                                    {copiedCode === `auth-${idx}-header` ? (
                                      <Check className="w-4 h-4" />
                                    ) : (
                                      <Copy className="w-4 h-4" />
                                    )}
                                  </button>
                                </div>
                                <code className="text-sm text-green-400 font-mono">
                                  {method.example.header}
                                </code>
                              </div>
                            </div>

                            {method.example.curl && (
                              <div className="relative">
                                <div className="bg-black/40 border border-white/10 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs text-white/50">cURL Example</span>
                                    <button
                                      onClick={() =>
                                        copyToClipboard(method.example.curl, `auth-${idx}-curl`)
                                      }
                                      className="text-white/50 hover:text-white transition-colors"
                                    >
                                      {copiedCode === `auth-${idx}-curl` ? (
                                        <Check className="w-4 h-4" />
                                      ) : (
                                        <Copy className="w-4 h-4" />
                                      )}
                                    </button>
                                  </div>
                                  <code className="text-sm text-green-400 font-mono break-all">
                                    {method.example.curl}
                                  </code>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {method.steps && (
                          <div className="mt-6">
                            <h4 className="text-lg font-semibold text-white mb-3">
                              How to get your API key:
                            </h4>
                            <ol className="list-decimal list-inside space-y-2 text-white/80">
                              {method.steps.map((step: string, sIdx: number) => (
                                <li key={sIdx}>{step}</li>
                              ))}
                            </ol>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-6 h-6 text-blue-400" />
                      <h3 className="text-xl font-bold text-white">Rate Limits</h3>
                    </div>
                    <p className="text-white/80 mb-4">{apiData.rateLimits.description}</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {apiData.rateLimits.limits.map((limit: any, idx: number) => (
                        <div
                          key={idx}
                          className="bg-white/5 rounded-lg p-4 text-center"
                        >
                          <div className="text-lg font-bold text-white mb-1">
                            {limit.plan}
                          </div>
                          <div className="text-sm text-purple-400">{limit.limit}</div>
                          <div className="text-xs text-white/60 mt-1">{limit.burst}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "endpoints" && (
              <div className="space-y-8">
                {apiData.endpoints.map((category: any, catIdx: number) => (
                  <section key={catIdx} ref={addToRefs}>
                    <div className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-3xl p-8">
                      <h2 className="text-3xl font-bold text-white mb-3">
                        {category.category}
                      </h2>
                      <p className="text-white/70 mb-6">{category.description}</p>

                      <div className="space-y-4">
                        {category.endpoints.map((endpoint: any, endIdx: number) => {
                          const endpointId = `${catIdx}-${endIdx}`;
                          const isExpanded = expandedEndpoint === endpointId;

                          return (
                            <div
                              key={endIdx}
                              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                            >
                              <button
                                onClick={() =>
                                  setExpandedEndpoint(isExpanded ? null : endpointId)
                                }
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                              >
                                <div className="flex items-center gap-4 flex-1">
                                  <span
                                    className={`px-3 py-1 rounded text-sm font-bold ${
                                      methodColors[endpoint.method]
                                    }`}
                                  >
                                    {endpoint.method}
                                  </span>
                                  <code className="text-white font-mono text-sm">
                                    {endpoint.path}
                                  </code>
                                  <span className="text-white/70">
                                    {endpoint.name}
                                  </span>
                                </div>
                                {isExpanded ? (
                                  <ChevronDown className="w-5 h-5 text-purple-400" />
                                ) : (
                                  <ChevronRight className="w-5 h-5 text-purple-400" />
                                )}
                              </button>

                              {isExpanded && (
                                <div className="px-6 pb-6 border-t border-white/10 pt-6">
                                  <p className="text-white/80 mb-6">
                                    {endpoint.description}
                                  </p>

                                  {endpoint.parameters && (
                                    <div className="mb-6">
                                      <h4 className="text-lg font-semibold text-white mb-3">
                                        Query Parameters
                                      </h4>
                                      <div className="space-y-3">
                                        {endpoint.parameters.map((param: any, pIdx: number) => (
                                          <div
                                            key={pIdx}
                                            className="bg-black/20 rounded-lg p-4"
                                          >
                                            <div className="flex items-center gap-2 mb-2">
                                              <code className="text-purple-400 font-mono">
                                                {param.name}
                                              </code>
                                              <span className="text-xs text-white/50">
                                                {param.type}
                                              </span>
                                              {param.required && (
                                                <span className="text-xs px-2 py-0.5 bg-red-500/20 border border-red-500/30 text-red-300 rounded">
                                                  required
                                                </span>
                                              )}
                                            </div>
                                            <p className="text-sm text-white/70">
                                              {param.description}
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {endpoint.response && (
                                    <div>
                                      <h4 className="text-lg font-semibold text-white mb-3">
                                        Response
                                      </h4>
                                      <div className="bg-black/40 border border-white/10 rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-3">
                                          <span className="text-sm text-green-400">
                                            {endpoint.response.status} Success
                                          </span>
                                          <button
                                            onClick={() =>
                                              copyToClipboard(
                                                JSON.stringify(endpoint.response.example, null, 2),
                                                `response-${endpointId}`
                                              )
                                            }
                                            className="text-white/50 hover:text-white transition-colors"
                                          >
                                            {copiedCode === `response-${endpointId}` ? (
                                              <Check className="w-4 h-4" />
                                            ) : (
                                              <Copy className="w-4 h-4" />
                                            )}
                                          </button>
                                        </div>
                                        <pre className="text-sm text-green-400 font-mono overflow-x-auto">
                                          {JSON.stringify(endpoint.response.example, null, 2)}
                                        </pre>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            )}

            {activeTab === "webhooks" && (
              <section ref={addToRefs}>
                <div className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-3xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    {apiData.webhookEvents.title}
                  </h2>
                  <p className="text-white/80 mb-8">
                    {apiData.webhookEvents.description}
                  </p>

                  <div className="space-y-6">
                    {apiData.webhookEvents.events.map((event: any, idx: number) => (
                      <div
                        key={idx}
                        className="bg-white/5 border border-white/10 rounded-xl p-6"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <code className="text-lg text-purple-400 font-mono">
                              {event.event}
                            </code>
                            <p className="text-white/70 mt-2">{event.description}</p>
                          </div>
                        </div>

                        <div className="bg-black/40 border border-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-white/50">Payload Example</span>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  JSON.stringify(event.payload, null, 2),
                                  `webhook-${idx}`
                                )
                              }
                              className="text-white/50 hover:text-white transition-colors"
                            >
                              {copiedCode === `webhook-${idx}` ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                          <pre className="text-sm text-green-400 font-mono overflow-x-auto">
                            {JSON.stringify(event.payload, null, 2)}
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {activeTab === "sdks" && (
              <section ref={addToRefs}>
                <div className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-3xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    {apiData.sdks.title}
                  </h2>
                  <p className="text-white/80 mb-8">{apiData.sdks.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {apiData.sdks.libraries.map((sdk: any, idx: number) => (
                      <div
                        key={idx}
                        className="bg-white/5 border border-white/10 rounded-xl p-6"
                      >
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {sdk.language}
                        </h3>

                        <div className="mb-4">
                          <div className="text-sm text-white/70 mb-2">Package:</div>
                          <code className="text-purple-400">{sdk.package}</code>
                        </div>

                        <div className="mb-4">
                          <div className="text-sm text-white/70 mb-2">Installation:</div>
                          <div className="bg-black/40 border border-white/10 rounded-lg p-3">
                            <code className="text-sm text-green-400">{sdk.install}</code>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-sm text-white/70 mb-2">Example:</div>
                          <div className="bg-black/40 border border-white/10 rounded-lg p-3">
                            <pre className="text-xs text-green-400 font-mono overflow-x-auto">
                              {sdk.example}
                            </pre>
                          </div>
                        </div>

                        <a
                          href={sdk.documentation}
                          className="text-purple-400 hover:text-purple-300 text-sm font-semibold inline-flex items-center gap-1"
                        >
                          View Documentation →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
