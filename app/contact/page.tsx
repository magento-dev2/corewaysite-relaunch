"use client";

import { useState } from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactNavbar from "./ContactNavbar";

export default function ContactSection() {
  const [tab, setTab] = useState("business");

  return (
    <>
    <ContactNavbar/>
    <section className="w-full bg-[#0E0918] pt-20 ">

          
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT SECTION – Testimonials + Stats */}
        <div className="space-y-12">

          {/* TESTIMONIALS */}
          <div className="bg-[#1A1325] rounded-3xl p-10 shadow-xl">
            <div className="flex items-start gap-4">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
                className="rounded-full w-24 h-24"
              />
              <div>
                <p className="text-yellow-400 text-xl">★★★★★</p>
                <p className="text-gray-300 mt-2">
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

          <div className="bg-[#1A1325] rounded-3xl p-10 shadow-xl">
            <div className="flex items-start gap-4">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
                className="rounded-full w-24 h-24"
              />
              <div>
                <p className="text-yellow-400 text-xl">★★★★★</p>
                <p className="text-gray-300 mt-2">
                  "They consistently innovate and provide rapid updates."
                </p>
                <p className="text-white mt-4 font-semibold">Linus</p>
                <p className="text-gray-400 text-sm">
                  VP, Publishing Company (USA)
                </p>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-6">
            <div>
              <h3 className="text-4xl font-bold text-purple-400">25+</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-purple-400">3000+</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Satisfied Clients
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-purple-400">97%</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Retention Rate
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-purple-400">4.9★</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Delivery & Quality
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION – CONTACT FORM */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
    </>
  );
}
