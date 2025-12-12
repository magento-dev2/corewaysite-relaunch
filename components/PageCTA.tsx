"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { PopupModal } from "react-calendly";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // ✅ add this

interface PageCTAProps {
  badge?: string;
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  footerText?: string;
  primaryButtonlink?: string;
  secondaryButtonlink?: string;
}

export default function PageCTA({
  badge = "Start automating today",
  title,
  description,
  primaryButtonText = "Let’s Connect.",
  secondaryButtonText = "Talk to sales",
  primaryButtonlink = "/contact",
  secondaryButtonlink = "/case-studies",
  footerText = "No credit card required • Free forever for core features • Cancel anytime",
}: PageCTAProps) {
  const pathname = usePathname(); // ✅ detect current page
  const isHomePage = pathname === "/"; // ✅ check homepage

  const [open, setOpen] = useState(false);
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el =
      document.getElementById("__next") ??
      document.getElementById("root") ??
      document.body;

    setRootEl(el);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 hover:bg-white/10 transition-all">
            <Sparkles className="text-purple-500" size={16} />
            <span className="text-gray-300 text-sm">{badge}</span>
          </div>
        )}

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
          {title}
        </h2>

        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* ==============================
            BUTTONS
           ============================== */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button */}
          <Link href={primaryButtonlink}>
            <button className="cursor-pointer group bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium text-lg flex items-center space-x-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105">
              {primaryButtonText}
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
          </Link>

          {/* Secondary Button — Popup on Home Page Only */}
          {isHomePage ? (
            <button
              onClick={() => setOpen(true)}
              className="cursor-pointer group bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all font-medium text-lg"
            >
              {secondaryButtonText}
            </button>
          ) : (
            <Link href={secondaryButtonlink}>
              <button className="cursor-pointer group bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all font-medium text-lg">
                {secondaryButtonText}
              </button>
            </Link>
          )}
        </div>

        {/* FOOTER */}
        {footerText && (
          <p className="text-gray-400 text-sm mt-8 flex items-center justify-center flex-wrap gap-x-3 gap-y-1">
            {footerText.split("•").map((text, index) => (
              <span key={index} className="flex items-center">
                {text.trim()}
                {index < footerText.split("•").length - 1 && (
                  <span className="ml-3 text-purple-500">•</span>
                )}
              </span>
            ))}
          </p>
        )}
      </div>

      {/* Calendly Popup */}
      {rootEl && (
        <PopupModal
    url="https://calendly.com/alpeshr2689/30min"
          onModalClose={() => setOpen(false)}
          open={open}
          rootElement={rootEl}
        />
      )}
    </section>
  );
}
