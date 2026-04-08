"use client";

import { useState } from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactNavbar from "./ContactNavbar";
import { Mail, Phone, MapPin, BarChart2, Briefcase, Users, Repeat, CloudCog, Star } from "lucide-react";

export default function ContactSection() {
  const [tab, setTab] = useState("business");

  return (
    <>
      <ContactNavbar />
      <section className="w-full bg-[#0E0918] pt-20 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8">

          {/* LEFT SECTION – Testimonials + Stats + Contact Info */}
          <div className="space-y-12">

            {/* TESTIMONIALS */}
            <div className="bg-[#1A1325] rounded-3xl p-10 shadow-xl border border-white/5">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center shrink-0 w-20 h-20 rounded-full bg-purple-600/20 text-purple-400 font-bold text-2xl uppercase border border-purple-500/30">
                  DE
                </div>
                <div>
                  <p className="text-yellow-400 text-xl">★★★★★</p>
                  <p className="text-gray-300 mt-2 italic">
                    "They delivered outstanding results and were extremely
                    reliable throughout the project."
                  </p>
                  <p className="text-white mt-4 font-semibold">Deepesh</p>
                  <p className="text-gray-400 text-sm">
                    Director, Jewellery Brand
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1325] rounded-3xl p-10 shadow-xl border border-white/5">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center shrink-0 w-20 h-20 rounded-full bg-blue-600/20 text-blue-400 font-bold text-2xl uppercase border border-blue-500/30">
                  LI
                </div>
                <div>
                  <p className="text-yellow-400 text-xl">★★★★★</p>
                  <p className="text-gray-300 mt-2 italic">
                    "They consistently innovate and provide rapid updates."
                  </p>
                  <p className="text-white mt-4 font-semibold">Linus</p>
                  <p className="text-gray-400 text-sm">
                    VP, Publishing Company (USA)
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT INFO (NAP Consistency) */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">


              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email Us</h4>
                  <p className="text-gray-400 text-sm text-wrap break-all">info@corewaysolution.com</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SECTION – CONTACT FORM */}
          <div className="lg:sticky lg:top-8">
            <ContactForm />
          </div>
        </div>

        {/* FULL WIDTH STATS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-[#1A1325] rounded-3xl p-6 border border-white/5 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-4">
                <BarChart2 size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">13+</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Years in Solution Engineering</p>
            </div>

            <div className="bg-[#1A1325] rounded-3xl p-6 border border-white/5 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">180+</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Projects Delivered Across Multiple Industries</p>
            </div>

            <div className="bg-[#1A1325] rounded-3xl p-6 border border-white/5 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">40+</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Long-Term Clients with Ongoing Development</p>
            </div>

            <div className="bg-[#1A1325] rounded-3xl p-6 border border-white/5 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-4">
                <Repeat size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">85%</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Repeat Business Due to Reliable Support</p>
            </div>

            <div className="bg-[#1A1325] rounded-3xl p-6 border border-white/5 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-4">
                <CloudCog size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">24x7</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Cloud Monitoring for Managed Clients</p>
            </div>

            <div className="bg-[#1A1325] rounded-3xl p-6 border border-white/5 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">9/10</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Average Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
