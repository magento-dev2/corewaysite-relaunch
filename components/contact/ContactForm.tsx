"use client";

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send, CheckCircle, ShieldCheck, Lock, X } from 'lucide-react';
import { useRecaptcha } from '@/contexts/RecaptchaContext';

export default function ContactForm() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'business' | 'job'>('business');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    country: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  // Close if clicked outside
  useEffect(() => {
    function handleClickOutside(e: Event) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);


  const { executeRecaptcha, resetRecaptcha } = useRecaptcha();

  const handleTabChange = (tab: 'business' | 'job') => {
    if (tab === 'job') {
      router.push('/careers');
    } else {
      setActiveTab(tab);
    }
  };

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

    try {
      // Execute reCAPTCHA
      const token = await executeRecaptcha();

      if (!token) {
        throw new Error('reCAPTCHA verification failed. Please try again.');
      }

      // Send form data with reCAPTCHA token to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        designation: '',
        country: '',
        subject: '',
        message: '',
      });

      // Reset reCAPTCHA
      resetRecaptcha();

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
      resetRecaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* TABS */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => handleTabChange('business')}
            className={`flex-1 px-8 py-4 font-semibold text-base transition-all relative ${activeTab === 'business'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            style={{
              borderTopLeftRadius: '1rem',
              // clipPath: activeTab === 'business' ? 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' : 'none'
            }}
          >
            Business Inquiry
          </button>

          <button
            onClick={() => handleTabChange('job')}
            className={`cursor-pointer flex-1 px-8 py-4 font-semibold text-base transition-all flex items-center justify-center gap-2 ${activeTab === 'job'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            style={{
              borderTopRightRadius: '1rem',
            }}
          >
            Apply for Job <span>→</span>
          </button>
        </div>

        {/* FORM CONTENT */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Tell Us About Your Project
          </h2>


          {isSuccess && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
              <CheckCircle className="text-green-600" size={24} />
              <p className="text-green-700">Thank you! Your message has been sent successfully.</p>
            </div>
          )}

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="">
            {/* Row 1: Full Name & Company */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Full Name *"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Company"
                />
              </div>
            </div>

            {/* Row 2: Email & Designation */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Email *"
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"

                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Phone"
                />
              </div>

            </div>
            <p className='text-gray-400 text-[10px] mb-5 mt-1 '>*For faster processing, please use your company email.</p>



            {/* Row 3: Phone & Country */}
            {/* <div className="grid md:grid-cols-2 gap-5">
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Phone *"
                />
              </div>

              <div>
                <select
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                  }}
                >
                  <option value="">Country *</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="IN">India</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div> */}

            {/* Message */}
            <div className='mb-5'>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                placeholder="Brief your Requirement *"
              />
            </div>

            {/* Submit Button */}
            <div className='mb-5'>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-purple-600 flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send to Our Experts'}</span>
                {!isSubmitting && <Send size={20} />}
              </button>
            </div>

            {/* Privacy Policy */}
            <p className="text-gray-600 text-sm text-center">
              By submitting this form, you agree to our{' '}
              <a href="/privacy-policy" className="text-purple-600 font-semibold underline hover:text-purple-700">
                Privacy Policy
              </a>
            </p>


          </form>

          <div className="flex justify-center relative mt-4">
            {/* Trigger Text */}
            <button
              onClick={() => setOpen(!open)}
              className="text-sm cursor-pointer  text-purple-600  font-semibold underline hover:text-purple-700 justify-center flex items-center gap-1"
            >
              <Lock size={14} />
              Safe & Confidential
            </button>

            {/* Popup Box (Dropdown Style) */}
            {open && (
              <div
                ref={boxRef}
                className="absolute left-26 bottom-6 w-80 bg-white shadow-xl rounded-xl border  border-gray-200 p-4 z-30"
              >
                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-2 cursor-pointer right-2 text-gray-500 hover:text-gray-700"
                >
                  <X size={16} />
                </button>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Privacy is our top priority. We will not disclose your personal
                  information to anybody. It will strictly be used to contact you
                  for the specified purpose.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

    </section>
  );
}
