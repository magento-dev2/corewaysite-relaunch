"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Send, CheckCircle, Star } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const testimonials = [
    {
      name: "Dipesh",
      title: "Director, Luxury Jewellery Company, London",
      review:
        "Radixweb is very solution oriented. They stand out in project management, proactively solve problems and work towards business needs.",
    },
    {
      name: "Linus",
      title: "Vice President, Printing and Publishing Company, USA",
      review:
        "They have superior development skills, and they keep innovating their technology. They give you a solid effort in getting rapid updates.",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1000);
  };

  return (
    <section className="bg-[#f7faff] py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* LEFT SIDE: Testimonials */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          <Swiper spaceBetween={40} slidesPerView={1} loop autoplay>
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg italic mb-6">
                    “{t.review}”
                  </p>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-10 grid grid-cols-3 text-center border-t pt-6">
            <div>
              <h3 className="text-2xl font-bold text-indigo-600">25+</h3>
              <p className="text-gray-600 text-sm">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-indigo-600">3000+</h3>
              <p className="text-gray-600 text-sm">Satisfied Clients</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-indigo-600">97%</h3>
              <p className="text-gray-600 text-sm">Client Retention</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex mb-6 border-b pb-3">
            <button className="bg-purple-500 text-white px-6 py-2 rounded-t-lg font-medium">
              Business Inquiry
            </button>
            {/* <button className="px-6 py-2 border border-gray-200 text-gray-600 rounded-t-lg ml-2 hover:bg-gray-50 transition">
              Apply for Job →
            </button> */}
          </div>

          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Tell Us About Your Project
          </h2>

          {isSuccess && (
            <div className="mb-4 bg-green-50 border border-green-300 rounded-lg p-3 flex items-center gap-2 text-green-700">
              <CheckCircle size={20} />
              <span>Your message has been sent successfully!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <select
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option value="">Select a Subject *</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Project Quote">Project Quote</option>
                <option value="AI Consulting">AI Consulting</option>
                <option value="Partnership">Partnership</option>
                <option value="Support">Support</option>
              </select>
            </div>

            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Brief your requirement *"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Talk to Our Experts"}
              {!isSubmitting && <Send size={18} />}
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-3 text-center">
            By submitting this form, you agree to our{" "}
            <a href="#" className="underline font-medium">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
