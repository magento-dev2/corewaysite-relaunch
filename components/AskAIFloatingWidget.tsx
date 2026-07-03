"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, X, CheckCircle2 } from "lucide-react";
import { usePathname } from "next/navigation";

const AI_OPTIONS = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "/assets/Ai-icon/openai-dark.png",
    description: "Best for comprehensive answers",
    type: "url",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    icon: "/assets/Ai-icon/perplexity-ai-light.png",
    description: "Best for web-search context",
    type: "url",
  },
  {
    id: "claude",
    name: "Claude",
    icon: "/assets/Ai-icon/claude.png",
    description: "Best for detailed analysis",
    type: "clipboard", // Claude doesn't accept URL params easily, so we copy the prompt to clipboard
    url: "https://claude.ai/new",
  },
  {
    id: "gemini",
    name: "Gemini",
    icon: "/assets/Ai-icon/google-gemini.png",
    description: "Google's AI assistant",
    type: "clipboard",
    url: "https://gemini.google.com/app",
  },
  {
    id: "grok",
    name: "Grok",
    icon: "/assets/Ai-icon/grok-dark.png",
    description: "Real-time insights",
    type: "clipboard",
    url: "https://grok.com",
  },
];

export default function AskAIFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close when clicking outside and handle scroll detection
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      // Check if user has scrolled near the very bottom of the document
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 80;
      setIsAtBottom(bottom);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const generatePrompt = () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    return `Analyze the services and content offered on this page: ${currentUrl}. Based on this, explain what makes Coreway Solution a strong partner for this service, what the main benefits are, and what the next step would be for a business looking to hire them.`;
  };

  const handleAction = async (option: typeof AI_OPTIONS[0]) => {
    const prompt = generatePrompt();

    if (option.type === "url") {
      let finalUrl = "";
      if (option.id === "chatgpt") {
        finalUrl = `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
      } else if (option.id === "perplexity") {
        finalUrl = `https://www.perplexity.ai/search?q=${encodeURIComponent(prompt)}`;
      }
      window.open(finalUrl, "_blank");
      setIsOpen(false);
    } else if (option.type === "clipboard") {
      try {
        await navigator.clipboard.writeText(prompt);
        setCopiedId(option.id);

        // Short delay to show the "Copied!" checkmark before opening tab
        setTimeout(() => {
          setCopiedId(null);
          window.open(option.url, "_blank");
          setIsOpen(false);
        }, 1000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
        // Fallback open anyway
        window.open(option.url, "_blank");
      }
    }
  };

  return (
    <div
      ref={widgetRef}
      className={`fixed right-6 z-[9999] transition-all duration-300 ease-in-out ${isAtBottom ? "bottom-20" : "bottom-4"
        }`}
    >
      {/* The Popup Menu */}
      <div
        style={{ bottom: "56px" }}
        className={`absolute right-0 w-[240px] sm:w-[280px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl border border-white/10 bg-[#120C1C]/95 backdrop-blur-xl shadow-2xl transition-all duration-300 ease-in-out origin-bottom-right ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/5">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <h3 className="text-[11px] font-semibold tracking-widest text-white uppercase">Ask AI</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors p-1 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-3 flex flex-wrap gap-2">
          {AI_OPTIONS.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAction(option)}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-white/5 transition-all cursor-pointer"
            >
              {option.icon ? (
                <Image
                  src={option.icon}
                  alt={option.name}
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 object-contain"
                />
              ) : null}
              <span className="text-[12px] font-medium text-white">{option.name}</span>
              {copiedId === option.id && <CheckCircle2 className="h-3 w-3 text-green-400 ml-1" />}
            </button>
          ))}
        </div>

        <div className="px-4 py-2.5 bg-white/5 border-t border-white/10 text-center">
          <p className="text-[9px] text-gray-400 uppercase tracking-wider">Opens in a new tab • Auto Prompt</p>
        </div>
      </div>

      {/* The Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center h-11 rounded-full bg-[#120C1C] hover:bg-[#1a1325] shadow-xl shadow-black/40 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 px-4 gap-2.5 cursor-pointer"
      >
        <Sparkles className="h-4 w-4 text-white animate-pulse" />
        <span className="font-medium text-sm text-white">Ask AI</span>

        {/* Decorative mini icons representing the models */}
        <div className="hidden sm:flex items-center gap-1.5 ml-1 pl-3 border-l border-white/10">
          {AI_OPTIONS.slice(0, 4).map((opt) => (
            opt.icon ? (
              <Image key={opt.id} src={opt.icon} alt={opt.name} width={14} height={14} className="w-3.5 h-3.5 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
            ) : null
          ))}
        </div>
      </button>
    </div>
  );
}
