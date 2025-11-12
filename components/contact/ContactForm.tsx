"use client";

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    setTimeout(() => {
      console.log('Contact Form Submission:', formData);
      console.log('-----------------------------------');
      console.log('Name:', formData.name);
      console.log('Email:', formData.email);
      console.log('Phone:', formData.phone);
      console.log('Company:', formData.company);
      console.log('Subject:', formData.subject);
      console.log('Message:', formData.message);
      console.log('-----------------------------------');

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });

      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section className=" ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-300">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {isSuccess && (
            <div className="mb-6 bg-green-500/10 border border-green-500/50 rounded-lg p-4 flex items-center space-x-3">
              <CheckCircle className="text-green-500" size={24} />
              <p className="text-green-400">Thank you! Your message has been sent successfully.</p>
            </div>
          )}

          {error && (
            <div className="mb-6 bg-red-500/10 border border-red-500/50 rounded-lg p-4">
              <p className="text-red-400">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="+1 (234) 567-890"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              >
                <option value="" className="bg-[#1a1325]">Select a subject</option>
                <option value="General Inquiry" className="bg-[#1a1325]">General Inquiry</option>
                <option value="Project Quote" className="bg-[#1a1325]">Project Quote</option>
                <option value="AI Consulting" className="bg-[#1a1325]">AI Consulting</option>
                <option value="Product Development" className="bg-[#1a1325]">Product Development</option>
                <option value="Partnership" className="bg-[#1a1325]">Partnership</option>
                <option value="Support" className="bg-[#1a1325]">Support</option>
                <option value="Other" className="bg-[#1a1325]">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium text-lg flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mx-auto"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <Send className="group-hover:translate-x-1 transition-transform" size={20} />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
