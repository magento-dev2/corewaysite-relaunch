"use client";

import { useEffect, useRef, useState } from "react";
import { Cpu, TrendingUp, Database, Cog, Shield, ChevronDown } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Discovery",
    description: "Align AI with revenue goals, CX gaps & ops bottlenecks",
    icon: <Cpu className="w-12 h-12" />,
  },
  {
    id: 2,
    title: "Use Case Prioritization",
    description: "Validate where AI brings fastest ROI",
    icon: <TrendingUp className="w-12 h-12" />,
  },
  {
    id: 3,
    title: "Data Strategy",
    description: "Audit and align data sources (ERP, CDP, CRM, CMS)",
    icon: <Database className="w-12 h-12" />,
  },
  {
    id: 4,
    title: "POC & Prototyping",
    description: "Low-risk testing of AI applications",
    icon: <Cog className="w-12 h-12" />,
  },
  {
    id: 5,
    title: "AI Governance & Scaling",
    description: "Ensure ethics, privacy, adoption",
    icon: <Shield className="w-12 h-12" />,
  },
];

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ProcessTimeLIne {
  title: string;
  description: string;
  steps: ProcessStep[];
}

export default function ProcessDiagram({ title, description, steps }: ProcessTimeLIne) {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollProgress = -containerRect.top / (containerRect.height - window.innerHeight);
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      const currentStep = Math.floor(clampedProgress * steps.length);

      setActiveStep(Math.min(currentStep, steps.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[300vh] bg-gradient-to-b from-[#0E0918] to-[#1a1325] text-white py-20" ref={containerRef}>
      <div className="sticky top-20 max-w-[95vw] mx-auto px-4">

        <div className="text-center mb-30">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="flex items-center gap-4">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isPassed = activeStep > index;
              const arcGoesUp = index % 2 === 0;

              return (
                <div key={step.id} className="relative flex items-center">
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`absolute ${
                        arcGoesUp ? "-top-16" : "-bottom-16"
                      } text-xs text-gray-400 font-mono whitespace-nowrap`}
                    >
                      Step: {String(step.id).padStart(2, "0")}
                    </div>

                    <div
                      className={`relative p-6 rounded-full border-2 transition-all duration-700 ${
                        isActive
                          ? "border-purple-500 bg-purple-950/30 opacity-100 scale-110 shadow-lg shadow-purple-500/50"
                          : isPassed
                          ? "border-purple-500 bg-purple-950/20 opacity-80 scale-100"
                          : "border-gray-700 bg-gray-900/20 opacity-40 scale-95"
                      }`}
                      style={{
                        width: "200px",
                        height: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <div
                        className={`mb-3 transition-all duration-700 ${
                          isActive || isPassed ? "text-purple-400" : "text-gray-500"
                        }`}
                      >
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-center">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-400 text-center px-3 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className="absolute transition-all duration-700"
                      style={{
                        left: "75%",
                        top: arcGoesUp ? "-96px" : "auto",
                        bottom: arcGoesUp ? "auto" : "-68px",
                        width: "120px",
                        height: "100px",
                        pointerEvents: "none",
                        zIndex: 0,
                      }}
                    >
                      <svg
                        width="120"
                        height="100"
                        viewBox="0 0 320 200"
                        className="overflow-visible"
                      >
                        <defs>
                          <linearGradient
                            id={`gradient-${index}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              stopColor={isPassed ? "#a855f7" : "#6b7280"}
                            />
                            <stop
                              offset="100%"
                              stopColor={isPassed ? "#7c3aed" : "#4b5563"}
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d={
                            arcGoesUp
                              ? "M 20 260 Q 160 20, 300 260"
                              : "M 20 20 Q 160 260, 300 20"
                          }
                          stroke={`url(#gradient-${index})`}
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="8 8"
                          className="transition-all duration-700"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
 