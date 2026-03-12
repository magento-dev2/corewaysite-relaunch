"use client";

import { useState } from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactNavbar from "./ContactNavbar";
import { Mail, Phone, MapPin } from "lucide-react";

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
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  className="rounded-full w-20 h-20 object-cover"
                />
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
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  className="rounded-full w-20 h-20 object-cover"
                />
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

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border-t border-white/10 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-white">25+</h3>
                <p className="text-gray-400 mt-2 text-xs uppercase tracking-wider">Years</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">3000+</h3>
                <p className="text-gray-400 mt-2 text-xs uppercase tracking-wider">Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">97%</h3>
                <p className="text-gray-400 mt-2 text-xs uppercase tracking-wider">Retention</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">4.9★</h3>
                <p className="text-gray-400 mt-2 text-xs uppercase tracking-wider">Quality</p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION – CONTACT FORM */}
          <div className="lg:sticky lg:top-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
