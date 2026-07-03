"use client";

import React, { useEffect, useRef, useState } from "react";
import { PopupModal } from "react-calendly";
import PageCTA from "@/components/PageCTA";
import FAQ from "@/components/FAQ";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  Ruler,
  Users,
  BarChart3,
  AlertTriangle,
  RefreshCcw,
  Database,
  Bot,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Timer,
  Lock,
  FileBarChart,
  DollarSign,
  Layers,
  FileText,
  BookOpen,
  ListChecks,
  Target,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Design tokens (matches Coreway's existing solution-page language) */
/*  bg      : slate-950 / slate-900                                    */
/*  surface : slate-900/60 with slate-800 hairline borders             */
/*  accent  : indigo-500 -> violet-500 (primary), cyan-400 (human/AI)  */
/*  display : font-sans, tight tracking, bold                          */
/*  data/mono: ui-monospace for scores, model names, stats             */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: FileText,
    title: "Prompt Evaluation",
    desc: "Systematic scoring of prompt variants for clarity, consistency, and output quality across your use cases.",
  },
  {
    icon: FileCheck2,
    title: "Golden Answer Creation",
    desc: "Expert-authored reference answers that define what a correct, production-ready response looks like.",
  },
  {
    icon: Ruler,
    title: "Rubric Design",
    desc: "Structured, weighted scoring criteria tailored to your domain so evaluation stays objective and repeatable.",
  },
  {
    icon: Users,
    title: "Human Evaluation",
    desc: "Trained reviewers grade model outputs for correctness, tone, safety, and helpfulness at scale.",
  },
  {
    icon: BarChart3,
    title: "AI Benchmarking",
    desc: "Head-to-head comparisons across models and providers, scored against your rubrics and golden set.",
  },
  {
    icon: AlertTriangle,
    title: "Hallucination Detection",
    desc: "Automated and human-verified checks that flag fabricated facts, unsupported claims, and citation errors.",
  },
  {
    icon: RefreshCcw,
    title: "Regression Testing",
    desc: "Catch quality drops before they ship with evaluation suites that run on every prompt or model change.",
  },
  {
    icon: Database,
    title: "RAG Evaluation",
    desc: "Retrieval precision, context relevance, and groundedness testing for your retrieval-augmented pipelines.",
  },
  {
    icon: Bot,
    title: "AI Agent Testing",
    desc: "Multi-step task completion, tool-use accuracy, and reasoning trace evaluation for autonomous agents.",
  },
];

const models = [
  { name: "OpenAI", image: "/assets/Ai-icon/openai-dark.png" },
  { name: "Claude", image: "/assets/Ai-icon/claude.png" },
  { name: "Gemini", image: "/assets/Ai-icon/google-gemini.png" },
  { name: "Llama", image: "/assets/Ai-icon/meta-color.png" },
  { name: "DeepSeek", image: "/assets/Ai-icon/deepseek.png" },
  { name: "Qwen", image: "/assets/Ai-icon/qwen.png" },
  { name: "Mistral", image: "/assets/Ai-icon/mistral-ai.png" },
  { name: "Ollama", image: "/assets/Ai-icon/ollama-dark.png" },
];

const process = [
  {
    step: "01",
    title: "Discover",
    desc: "We map your use case, risk areas, and success criteria alongside your team.",
  },
  {
    step: "02",
    title: "Dataset Preparation",
    desc: "Real and synthetic inputs are collected and cleaned to reflect production traffic.",
  },
  {
    step: "03",
    title: "Prompt Library",
    desc: "A structured, versioned set of prompts covering edge cases and core scenarios.",
  },
  {
    step: "04",
    title: "Golden Answers",
    desc: "Domain experts author reference-correct responses for every prompt in the set.",
  },
  {
    step: "05",
    title: "Rubrics",
    desc: "Weighted scoring criteria are defined for accuracy, safety, tone, and format.",
  },
  {
    step: "06",
    title: "Model Evaluation",
    desc: "Automated scoring runs your outputs against golden answers and rubrics.",
  },
  {
    step: "07",
    title: "Human Review",
    desc: "Trained evaluators verify edge cases and grade what automation can't catch.",
  },
  {
    step: "08",
    title: "Benchmark Report",
    desc: "A clear, shareable report with scores, failure patterns, and recommendations.",
  },
];

const whyCoreway = [
  {
    icon: Sparkles,
    title: "Human + AI Hybrid",
    desc: "Automated scoring for scale, human judgment for nuance, safety, and edge cases.",
  },
  {
    icon: Database,
    title: "Custom Datasets",
    desc: "Prompt libraries and golden answers built around your product, not generic benchmarks.",
  },
  {
    icon: Timer,
    title: "Fast Turnaround",
    desc: "Structured process and dedicated reviewers keep evaluation cycles measured in days.",
  },
  {
    icon: Lock,
    title: "Secure NDAs",
    desc: "Your prompts, data, and model outputs stay confidential under signed agreements.",
  },
  {
    icon: FileBarChart,
    title: "Enterprise Reports",
    desc: "Executive-ready benchmark reports built for stakeholders, not just engineers.",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    desc: "Identify where cheaper models perform just as well, without sacrificing quality.",
  },
];

const deliverables = [
  { icon: FileBarChart, title: "Benchmark Report", desc: "Model-by-model scores mapped to your rubrics and goals." },
  { icon: ListChecks, title: "Prompt Analysis", desc: "A breakdown of which prompts underperform and why." },
  { icon: AlertTriangle, title: "Hallucination Report", desc: "Flagged fabrications with severity and frequency." },
  { icon: BookOpen, title: "Golden Dataset", desc: "Reusable, versioned reference answers for future testing." },
  { icon: Ruler, title: "Rubrics", desc: "Documented scoring criteria you can apply internally." },
  { icon: Target, title: "Recommendations", desc: "Concrete next steps to close the gaps we found." },
];

const faqs = [
  {
    q: "What is AI evaluation and LLM benchmarking?",
    a: "It's the structured process of testing an AI application's outputs against defined criteria — accuracy, safety, tone, and task completion — using a combination of automated scoring and human review, so you know how it performs before it reaches users.",
  },
  {
    q: "Which AI applications can Coreway evaluate?",
    a: "We evaluate chatbots, RAG applications, AI agents, copilots, and any LLM-powered feature, across single-turn responses and multi-step workflows.",
  },
  {
    q: "Which models do you support?",
    a: "We benchmark across OpenAI, Claude, Gemini, Llama, DeepSeek, Qwen, Mistral, and self-hosted Ollama models, and can add others on request.",
  },
  {
    q: "What's the difference between automated and human evaluation?",
    a: "Automated evaluation scores outputs quickly against rubrics and golden answers at scale. Human evaluation catches nuance, tone, safety issues, and edge cases automation misses. We use both together for reliable results.",
  },
  {
    q: "What is a golden dataset and why do I need one?",
    a: "A golden dataset is a set of prompts paired with expert-verified correct answers. It becomes your ground truth, letting you measure any model or prompt change against a consistent standard over time.",
  },
  {
    q: "How do you detect hallucinations?",
    a: "We cross-check model outputs against source documents and golden answers, flag unsupported claims, and have human reviewers verify borderline cases before they're reported.",
  },
  {
    q: "Can you evaluate our RAG pipeline specifically?",
    a: "Yes. We test retrieval precision, context relevance, and whether generated answers are actually grounded in the retrieved content, not just fluent-sounding.",
  },
  {
    q: "How long does a full evaluation take?",
    a: "A typical benchmark cycle takes 1-3 weeks depending on dataset size and the number of models compared. Regression testing suites, once built, can run continuously.",
  },
  {
    q: "How is our data protected?",
    a: "All engagements start under NDA. Prompts, outputs, and datasets are handled under strict confidentiality and are never reused across clients.",
  },
  {
    q: "Do you help us act on the results, not just report them?",
    a: "Yes. Every benchmark report includes concrete recommendations, and we can help implement prompt fixes, rubric-based guardrails, or regression suites afterward.",
  },
  {
    q: "Can evaluation help reduce our AI costs?",
    a: "Often, yes. Benchmarking frequently reveals that a smaller or cheaper model performs comparably for specific tasks, which can meaningfully cut inference costs.",
  },
  {
    q: "How do we get started?",
    a: "Book a consultation and share your use case. We'll scope a pilot evaluation, usually against a sample dataset, so you can see the process and reporting before committing to a full engagement.",
  },
];

function StatCard({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="stat-card rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-4 sm:px-6 sm:py-5">
      <div className="font-mono text-2xl font-semibold text-white sm:text-3xl">{value}</div>
      <div className="mt-1 text-sm text-gray-400">{label}</div>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="service-card group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-colors duration-200 hover:bg-white/10 hover:border-purple-500/50">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600">
        <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-400">{desc}</p>
    </div>
  );
}

function ModelChip({ name, image }: { name: string; image?: string }) {
  return (
    <div className="model-chip flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3.5 transition-colors duration-200 hover:bg-white/10 hover:border-purple-500/50">
      {image ? (
        <Image src={image} alt={name} width={16} height={16} className="w-4 h-4 object-contain" />
      ) : (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
      )}
      <span className="font-mono text-sm text-gray-300">{name}</span>
    </div>
  );
}

function ProcessStep({ step, title, desc, isLast }: { step: string | number; title: string; desc: string; isLast?: boolean }) {
  return (
    <div className="process-step relative flex gap-5 sm:gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-500 bg-white/5 backdrop-blur-sm font-mono text-xs font-semibold text-white">
          {step}
        </div>
        {!isLast && <div className="mt-1 w-px flex-1 bg-gradient-to-b from-slate-700 to-slate-800" />}
      </div>
      <div className="pb-10">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-1.5 max-w-md text-sm leading-relaxed text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

function WhyCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="why-card rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600">
        <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
      </div>
      <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-400">{desc}</p>
    </div>
  );
}

function DeliverableCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="deliverable-card flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-violet-600">
        <Icon className="h-4.5 w-4.5 text-white" strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

export default function AIEvaluationLandingPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLElement>(null);

  const [open, setOpen] = useState(false);
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el =
      document.getElementById("__next") ??
      document.getElementById("root") ??
      document.body;

    setRootEl(el);
  }, []);
  const modelsRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);
  const deliverablesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      if (heroRef.current) {
        gsap.fromTo(heroRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
        );
      }

      // Stats
      const statCards = gsap.utils.toArray<HTMLElement>('.stat-card');
      if (statCards.length) {
        gsap.fromTo(statCards,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: '.stat-grid', start: "top 85%" } }
        );
      }

      // Services
      const serviceCards = gsap.utils.toArray<HTMLElement>('.service-card');
      if (serviceCards.length && servicesRef.current) {
        gsap.fromTo(serviceCards,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: servicesRef.current, start: "top 80%" } }
        );
      }

      // Models
      const modelChips = gsap.utils.toArray<HTMLElement>('.model-chip');
      if (modelChips.length && modelsRef.current) {
        gsap.fromTo(modelChips,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: "back.out(1.5)", scrollTrigger: { trigger: modelsRef.current, start: "top 85%" } }
        );
      }

      // Process
      const steps = gsap.utils.toArray<HTMLElement>('.process-step');
      steps.forEach((step) => {
        gsap.fromTo(step,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: step, start: "top 85%", toggleActions: "play none none reverse" } }
        );
      });

      // Generic Section Headers
      const sectionHeaders = gsap.utils.toArray<HTMLElement>('.section-header');
      sectionHeaders.forEach((header) => {
        if (header.children.length > 0) {
          gsap.fromTo(header.children,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: header, start: "top 85%" } }
          );
        }
      });

      // Why Coreway
      const whyCards = gsap.utils.toArray<HTMLElement>('.why-card');
      if (whyCards.length && whyRef.current) {
        gsap.fromTo(whyCards,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: whyRef.current, start: "top 80%" } }
        );
      }

      // Deliverables
      const deliverableCards = gsap.utils.toArray<HTMLElement>('.deliverable-card');
      if (deliverableCards.length && deliverablesRef.current) {
        gsap.fromTo(deliverableCards,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: deliverablesRef.current, start: "top 80%" } }
        );
      }

    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen w-full bg-[#0E0918] text-white antialiased">
      {/* ---------------------------------------------------------- */}
      {/* 1. HERO                                                    */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(99,102,241,0.16) 0%, rgba(15,23,42,0) 70%)",
          }}
        />
        <div ref={heroRef} className="relative mx-auto max-w-5xl px-6 pb-20 pt-24 text-center sm:pb-24 sm:pt-32">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm font-medium text-gray-300">
            <Sparkles className="text-purple-500 animate-pulse" size={16} />
            <span>AI Quality & Evaluation Services</span>
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
            AI Evaluation &amp;{" "}
            <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
              LLM Benchmarking
            </span>{" "}
            Services
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Ensure your AI applications deliver accurate, reliable, and production-ready
            responses through automated and human evaluation.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/start-ai-evaluation"
              className="group px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2 transition-all bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105"
            >
              <span>Start AI Evaluation</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="cursor-pointer group px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2 transition-all bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50"
            >
              <span>Book Consultation</span>
            </button>
          </div>

          <div className="stat-grid mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard value="500K+" label="Responses Evaluated" />
            <StatCard value="Human + AI" label="Review Process" />
            <StatCard value="99%" label="Evaluation Accuracy" />
            <StatCard value="8+" label="Model Support" />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 2. SERVICES                                                */}
      {/* ---------------------------------------------------------- */}
      <section ref={servicesRef} className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="section-header mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            End-to-end AI evaluation coverage
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            From prompt-level scoring to full agent testing, we cover every layer where AI
            quality can break down.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 3. SUPPORTED MODELS                                        */}
      {/* ---------------------------------------------------------- */}
      <section ref={modelsRef} className="border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="section-header mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
              Supported Models
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Benchmark across every major model
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-400">
              We evaluate and compare outputs across proprietary and open-source models, so
              you can choose with evidence, not guesswork.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {models.map((m) => (
              <ModelChip key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 4. EVALUATION PROCESS                                      */}
      {/* ---------------------------------------------------------- */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="section-header mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
            Our Process
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A repeatable evaluation pipeline
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            Every engagement follows the same rigorous eight-stage process, so results stay
            consistent and comparable over time.
          </p>
        </div>

        <div ref={processRef} className="mx-auto mt-14 max-w-xl">
          {process.map((p, i) => (
            <ProcessStep key={p.step} {...p} isLast={i === process.length - 1} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 5. WHY COREWAY                                             */}
      {/* ---------------------------------------------------------- */}
      <section ref={whyRef} className="border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="section-header mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
              Why Coreway
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for teams shipping AI to production
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyCoreway.map((w) => (
              <WhyCard key={w.title} {...w} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 6. DELIVERABLES                                            */}
      {/* ---------------------------------------------------------- */}
      <section ref={deliverablesRef} className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="section-header mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
            Deliverables
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What you walk away with
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            Every engagement ends with concrete, reusable artifacts your team can act on
            immediately.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((d) => (
            <DeliverableCard key={d.title} {...d} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 7. FAQ                                                     */}
      {/* ---------------------------------------------------------- */}
      <FAQ
        badge="Help Center"
        title="Common questions & answers"
        description="Everything you need to know about our AI evaluation and benchmarking services."
        faqs={faqs.map(f => ({ question: f.q, answer: f.a }))}
      />

      {/* ---------------------------------------------------------- */}
      {/* 8. CTA                                                     */}
      {/* ---------------------------------------------------------- */}
      <PageCTA
        badge="Ready to innovate?"
        title="Ready to improve your AI?"
        description="Let's benchmark your AI application before it reaches production."
        primaryButtonText="Start AI Evaluation"
        secondaryButtonText="Book Consultation"
        primaryButtonlink="/start-ai-evaluation"
      />

      {rootEl && (
        <PopupModal
          url="https://calendly.com/alpeshr2689/30min"
          onModalClose={() => setOpen(false)}
          open={open}
          rootElement={rootEl}
        />
      )}
    </div>
  );
}
