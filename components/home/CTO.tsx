"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function CTOSection() {
  const { t } = useLanguage();
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
    <>
      <section className=" max-w-[1280px] mx-auto px-4 ">
        <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500  ">

          <div className="flex flex-col md:flex-row items-center justify-between w-full">

            {/* Left Side Text + Button */}
            <div className="flex-1 flex flex-col justify-start  mb-8 md:mb-0 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {t('cto.title')}{" "}
                <span className="text-purple-500">{t('cto.titleHighlight')}</span>{" "}
                {t('cto.titleEnd')}
              </h2>
              <div className="text-left">
                <button
                  onClick={() => setOpen(true)}
                  className="px-8 py-3 bg-white text-[#2A2342] rounded-full font-medium shadow hover:shadow-lg cursor-pointer hover:bg-purple-600 hover:text-white transition"
                >
                  {t('cto.button')}
                </button>
              </div>

            </div>

            {/* Right Side Image */}
            <div className="flex-1 flex flex-col gap-4 justify-center md:justify-end mt-8 md:mt-0 ">
              <div className="flex items-center  gap-6 shrink-0">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="CTO"
                  className="h-28 w-28 rounded-full border-4 border-white/80 shadow-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-purple-400">
                    {t('cto.name')}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {t('cto.role')}
                  </p>
                </div>
              </div>

              {/* RIGHT : Content */}
              <div className="flex-1">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {t('cto.description')}
                </p>
                {/* <button
              onClick={() => setOpen(true)}
              className="px-8 py-3 bg-white text-[#2A2342] rounded-full font-medium shadow hover:shadow-lg cursor-pointer hover:bg-purple-600 hover:text-white transition"
            >
              {t('cto.button')}
            </button> */}

              </div>
            </div>

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

    </>
  );
}
