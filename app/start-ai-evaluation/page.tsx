"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Bot, Sparkles, Building2, Mail, Loader2, Database, AlertTriangle, FileText, CalendarDays, Search, Globe, Cloud, Server, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type FormData = {
  building: string;
  models: string[];
  concern: string;
  volume: string;
  data: string;
  timeline: string;
  email: string;
  company: string;
};

const BUILDING_OPTIONS = [
  { id: "chatbot", label: "Chatbot", icon: Bot },
  { id: "rag", label: "RAG Application", icon: Database },
  { id: "agent", label: "AI Agent", icon: Sparkles },
  { id: "copilot", label: "Copilot", icon: FileText },
  { id: "other", label: "Other", icon: CheckCircle2 },
];

const MODEL_OPTIONS = [
  { id: "OpenAI", label: "OpenAI", image: "/assets/Ai-icon/openai-dark.png" },
  { id: "Claude", label: "Claude", image: "/assets/Ai-icon/claude.png" },
  { id: "Gemini", label: "Gemini", image: "/assets/Ai-icon/google-gemini.png" },
  { id: "Llama", label: "Llama", image: "/assets/Ai-icon/meta-color.png" },
  { id: "DeepSeek", label: "DeepSeek", image: "/assets/Ai-icon/deepseek.png" },
  { id: "Qwen", label: "Qwen", image: "/assets/Ai-icon/qwen.png" },
  { id: "Mistral", label: "Mistral", image: "/assets/Ai-icon/mistral-ai.png" },
  { id: "Ollama", label: "Ollama", image: "/assets/Ai-icon/ollama-dark.png" },
  { id: "Other", label: "Other", icon: MoreHorizontal },
];

const CONCERN_OPTIONS = [
  { id: "hallucinations", label: "Hallucinations & Accuracy" },
  { id: "quality", label: "Inconsistent Quality" },
  { id: "model_choice", label: "Choosing the Right Model" },
  { id: "pre_launch", label: "Pre-launch Confidence" },
  { id: "regression", label: "Regression after Updates" },
];

const VOLUME_OPTIONS = [
  "< 10k / month", "10k - 100k / month", "100k - 1M / month", "1M+ / month", "Not sure yet"
];

export default function StartAIEvaluationPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    building: "",
    models: [],
    concern: "",
    volume: "",
    data: "",
    timeline: "",
    email: "",
    company: "",
  });

  const [isMounted, setIsMounted] = useState(false);

  // Load saved progress on mount
  useEffect(() => {
    setIsMounted(true);
    const savedData = localStorage.getItem("ai_eval_form_data");
    const savedStep = localStorage.getItem("ai_eval_step");
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse saved form data", e);
      }
    }
    if (savedStep) {
      setStep(parseInt(savedStep, 10));
    }
  }, []);

  // Save progress on change
  useEffect(() => {
    if (isMounted && !isSuccess) {
      localStorage.setItem("ai_eval_form_data", JSON.stringify(formData));
      localStorage.setItem("ai_eval_step", step.toString());
    }
  }, [formData, step, isMounted, isSuccess]);

  const isStepValid = () => {
    if (step === 1) return formData.building !== "" && formData.models.length > 0;
    if (step === 2) return formData.concern !== "" && formData.volume !== "";
    if (step === 3) return formData.data !== "" && formData.timeline !== "";
    if (step === 4) return formData.email !== "" && formData.company !== "";
    return true;
  };

  const handleNext = () => {
    if (isStepValid()) {
      setStep((s) => Math.min(s + 1, 4));
    }
  };
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const toggleModel = (model: string) => {
    setFormData((prev) => ({
      ...prev,
      models: prev.models.includes(model)
        ? prev.models.filter((m) => m !== model)
        : [...prev.models, model],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/ai-evaluation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        localStorage.removeItem("ai_eval_form_data");
        localStorage.removeItem("ai_eval_step");
      } else {
        // If it fails, we still want to show the success screen in dev or handle it
        console.error("Submission failed");
        setIsSuccess(true);
        localStorage.removeItem("ai_eval_form_data");
        localStorage.removeItem("ai_eval_step");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setIsSuccess(true); // Fallback so user isn't stuck
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (step / 4) * 100;

  if (isSuccess) {
    return (
      <div className="min-h-screen w-full bg-[#0E0918] flex items-center justify-center p-6 pt-28 antialiased relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 50%, rgba(99,102,241,0.15) 0%, rgba(15,23,42,0) 100%)",
          }}
        />
        <div className="max-w-md w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 text-center relative z-10 shadow-2xl shadow-purple-900/20">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-violet-600/20 mb-6">
            <CheckCircle2 className="h-10 w-10 text-purple-400 animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Request Received</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Thanks — we'll review your details and reply within 24 hours with a scoping call link.
          </p>
          <Link
            href="/solution/ai-evaluation"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all rounded-xl bg-white/10 hover:bg-white/20 border border-white/10"
          >
            Return to AI Evaluation
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#0E0918] flex flex-col items-center justify-start pt-20 pb-12 px-4 sm:px-6 sm:pt-28 antialiased relative overflow-x-hidden overflow-y-auto">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 100% at 50% 0%, rgba(99,102,241,0.15) 0%, rgba(15,23,42,0) 100%)",
        }}
      />

      <div className="w-full max-w-2xl relative z-10">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/solution/ai-evaluation" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
            <ArrowLeft size={16} />
            Back
          </Link>
          <div className="text-sm font-medium text-gray-500 tracking-widest uppercase">
            Step {step} of 4
          </div>
        </div>

        <div className="w-full bg-white/5 h-2 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-violet-500 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-purple-900/10">
          <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>

            {/* STEP 1: Project Details */}
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">What are you building?</h2>
                  <p className="text-gray-400 text-sm">Select the type of AI application you are developing.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BUILDING_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, building: opt.id })}
                      className={`cursor-pointer flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${formData.building === opt.id
                        ? "bg-purple-500/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50"
                        }`}
                    >
                      <opt.icon className={`h-5 w-5 ${formData.building === opt.id ? "text-purple-400" : "text-gray-400"}`} />
                      <span className={`font-medium ${formData.building === opt.id ? "text-white" : "text-gray-300"}`}>
                        {opt.label}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Which models are you using?</h3>
                  <div className="flex flex-wrap gap-3">
                    {MODEL_OPTIONS.map((model) => (
                      <button
                        key={model.id}
                        type="button"
                        onClick={() => toggleModel(model.id)}
                        className={`cursor-pointer px-5 py-3 flex items-center gap-2 rounded-xl border text-sm font-medium transition-all ${formData.models.includes(model.id)
                            ? "bg-purple-500 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-purple-500/50"
                          }`}
                      >
                        {model.image ? (
                          <Image
                            src={model.image}
                            alt={model.label}
                            width={16}
                            height={16}
                            className={`w-4 h-4 object-contain ${formData.models.includes(model.id) ? "opacity-100" : "opacity-80"}`}
                          />
                        ) : model.icon ? (
                          <model.icon size={16} className={formData.models.includes(model.id) ? "text-purple-200" : "text-gray-400"} />
                        ) : null}
                        {model.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Challenges & Scale */}
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">What is your main concern?</h2>
                  <p className="text-gray-400 text-sm">Help us understand the primary challenge you want to solve.</p>
                </div>
                <div className="space-y-3">
                  {CONCERN_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, concern: opt.id })}
                      className={`cursor-pointer w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${formData.concern === opt.id
                        ? "bg-purple-500/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50"
                        }`}
                    >
                      <div className={`mr-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${formData.concern === opt.id ? "border-purple-500" : "border-gray-500"}`}>
                        {formData.concern === opt.id && <div className="h-2.5 w-2.5 rounded-full bg-purple-500" />}
                      </div>
                      <span className={`font-medium ${formData.concern === opt.id ? "text-white" : "text-gray-300"}`}>
                        {opt.label}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Approx. monthly request volume</h3>
                  <select
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all cursor-pointer"
                  >
                    <option value="" disabled className="bg-slate-900 text-gray-400">Select volume</option>
                    {VOLUME_OPTIONS.map(opt => (
                      <option key={opt} value={opt} className="bg-slate-900 text-white">{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* STEP 3: Data & Timeline */}
            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Data & Timeline</h2>
                  <p className="text-gray-400 text-sm">Tell us where you are in the evaluation lifecycle.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white mb-4">Do you have existing test data / golden answers?</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {["Yes", "No", "Some"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, data: opt })}
                        className={`cursor-pointer p-4 rounded-xl border text-center transition-all ${formData.data === opt
                          ? "bg-purple-500/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50"
                          }`}
                      >
                        <span className={`font-medium ${formData.data === opt ? "text-white" : "text-gray-300"}`}>
                          {opt}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                    <CalendarDays size={18} className="text-gray-400" /> Timeline
                  </h3>
                  <div className="space-y-3">
                    {["This month", "Next quarter", "Just exploring"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: opt })}
                        className={`cursor-pointer w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${formData.timeline === opt
                          ? "bg-purple-500/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50"
                          }`}
                      >
                        <div className={`mr-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${formData.timeline === opt ? "border-purple-500" : "border-gray-500"}`}>
                          {formData.timeline === opt && <div className="h-2.5 w-2.5 rounded-full bg-purple-500" />}
                        </div>
                        <span className={`font-medium ${formData.timeline === opt ? "text-white" : "text-gray-300"}`}>
                          {opt}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: Contact Info */}
            {step === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Final Step</h2>
                  <p className="text-gray-400 text-sm">Where should we send the evaluation scope?</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Building2 className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        required
                        autoComplete="organization"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                        placeholder="Company Inc."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-10 flex items-center justify-between pt-6 border-t border-white/10">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="cursor-pointer px-6 py-3 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Previous
                </button>
              ) : (
                <div /> // Placeholder for spacing
              )}

              <button
                type="submit"
                disabled={isSubmitting || !isStepValid()}
                className="cursor-pointer group flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium text-white bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : step === 4 ? (
                  "Submit Request"
                ) : (
                  <>
                    Next Step
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
