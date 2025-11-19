"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

export default function CTOSection() {
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
    <section className=" max-w-[1280px] mx-auto">
      <div className="bg-[#2A2342] rounded-3xl p-10 md:p-16  gap-12 relative overflow-hidden">

        {/* Background Wave */}
        <img
          src="/waves.svg" 
          alt=""
          className="absolute left-0 top-0 opacity-20 w-full pointer-events-none"
        />

        {/* LEFT CONTENT */}
        <div className=" relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Hire us to lead 
            globally{" "}
            <span className="text-purple-500">fast-growing </span> 
            brands.
          </h2>
        </div>

        {/* RIGHT CONTENT */}
        <div className=" relative z-10">
          <div className="flex items-center gap-6 mb-4">
            <img
              src="/cto.jpg"
              alt="CTO"
              className="h-28 w-28 rounded-full border-4 border-white/80 shadow-lg"
            />
            <div>
              <h3 className="text-xl font-bold text-purple-400">Mr. Alpesh Radadiya</h3>
              <p className="text-white/80 text-sm">(Chief Technology Officer)</p>
            </div>
          </div>

          <p className="text-white/80 leading-relaxed mb-6">
            Mr. Alpesh is a proactive chief technology officer (CTO) with
            10+ years of experience in eCommerce, mobile apps, and web
            development. He is known for taking calculated risks,
            harnessing new technological advancements, and empowering
            global businesses with bespoke digital solutions.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="px-8 py-3 bg-white text-[#2A2342] rounded-full font-medium shadow hover:shadow-lg cursor-pointer hover:bg-purple-600 hover:text-white transition"
          >
            Schedule a Call with Our CTO
          </button>
        </div>
      </div>

      {/* Calendly Popup */}
      {rootEl && (
        <PopupModal
          url="https://calendly.com/YOUR_USERNAME/YOUR_EVENT"
          onModalClose={() => setOpen(false)}
          open={open}
          rootElement={rootEl}
        />
      )}
    </section>
  );
}
