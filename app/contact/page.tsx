"use client";

import { useState } from "react";

export default function ContactSection() {
  const [tab, setTab] = useState("business");

  return (
    <section className="w-full bg-[#0E0918] py-20 px-4">
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
                  “They delivered outstanding results and were extremely
                  reliable throughout the project.”
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
                  “They consistently innovate and provide rapid updates.”
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
        <div className="bg-[#1A1325] rounded-3xl p-10 shadow-2xl relative">

          {/* TABS */}
          <div className="flex mb-8 border-b border-white/10">
            <button
              onClick={() => setTab("business")}
              className={`px-6 py-3 font-semibold rounded-t-xl transition ${
                tab === "business"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400"
              }`}
            >
              Business Inquiry
            </button>

            <button
              onClick={() => setTab("job")}
              className={`px-6 py-3 font-semibold rounded-t-xl transition ${
                tab === "job"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400"
              }`}
            >
              Apply for Job →
            </button>
          </div>

          {/* TITLE */}
          <h2 className="text-3xl font-bold text-white mb-6">
            Tell Us About Your Project
          </h2>

          {/* FORM */}
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="bg-[#261C35] text-white p-3 rounded-lg border border-white/10"
              />
              <input
                type="text"
                placeholder="Company"
                className="bg-[#261C35] text-white p-3 rounded-lg border border-white/10"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email *"
                className="bg-[#261C35] text-white p-3 rounded-lg border border-white/10"
              />
              <input
                type="text"
                placeholder="Designation"
                className="bg-[#261C35] text-white p-3 rounded-lg border border-white/10"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone *"
                className="bg-[#261C35] text-white p-3 rounded-lg border border-white/10"
              />
              <select className="bg-[#261C35] text-white p-3 rounded-lg border border-white/10">
                <option>Country *</option>
              </select>
            </div>

            <textarea
              rows={4}
              placeholder="Brief your Requirement *"
              className="bg-[#261C35] text-white p-3 rounded-lg border border-white/10 w-full"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-3 rounded-full font-semibold"
            >
              Talk to Our Experts
            </button>

            <p className="text-gray-400 text-sm pt-2">
              By submitting this form, you agree to our{" "}
              <span className="text-purple-400 underline cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
