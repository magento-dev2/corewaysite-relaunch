"use client";

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send, CheckCircle, ShieldCheck, Lock, X, ArrowLeft } from 'lucide-react';
import { useRecaptcha } from '@/contexts/RecaptchaContext';

export default function ContactForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    designation: '',
    country: '',
    subject: '',
    message: '',
    ndaAccepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailSaved, setEmailSaved] = useState(false);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      if (formData.email) {
        setIsSubmitting(true);
        try {
          await fetch('/api/contact-list', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: formData.email }),
          });
        } catch {
          // Non-blocking
        } finally {
          setIsSubmitting(false);
        }
        setEmailSaved(true);
        setStep(2);
      }
      return;
    }

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
        company: '',
        designation: '',
        country: '',
        subject: '',
        message: '',
        ndaAccepted: false,
      });
      setStep(1);

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
        {/* TABS (removed "Apply for Job") */}
        <div className="flex border-b border-gray-200">
          <button
            type="button"
            className="flex-1 px-8 py-4 font-semibold text-base transition-all relative bg-purple-600 text-white"
            style={{
              borderTopLeftRadius: '1rem',
              borderTopRightRadius: '1rem',
            }}
          >
            Business Inquiry
          </button>
        </div>

        {/* FORM CONTENT */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            How Can We Help You?
          </h2>

          {emailSaved && step === 2 && (
            <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
              <CheckCircle className="text-blue-500 shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-blue-800 font-semibold text-sm">We've received your email!</p>
                <p className="text-blue-700 text-sm mt-0.5">We'll get back to you shortly. Meanwhile, please share a few more details below so we can assist you better.</p>
              </div>
            </div>
          )}

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
            {/* Step 1: Email Only */}
            {step === 1 && (
              <div className="mb-5">
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
                <p className="text-gray-400 text-[10px] mb-5 mt-1">
                  *For faster processing, please use your company email.
                </p>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? 'Saving...' : 'Next Step'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Remaining Fields */}
            {step === 2 && (
              <>
                {/* Step 2 Back Button with context */}
                <div className="mb-4">
                  <button
                    type="button"
                    onClick={() => { setStep(1); setEmailSaved(false); }}
                    className="text-purple-600 hover:text-purple-800 font-semibold text-sm flex items-center gap-1 transition-colors"
                  >
                    <ArrowLeft size={16} /> Back to Email
                  </button>
                </div>

                {/* Display locked email field to show context securely */}
                <div className="mb-5">
                  <p className="text-sm text-gray-500 mb-1">Your Email</p>
                  <p className="font-medium text-gray-900 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                    {formData.email}
                  </p>
                </div>

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

                {/* Message */}
                <div className="mb-5">
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

                {/* NDA Checkbox */}
                <div className="mb-5 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="ndaAccepted"
                    name="ndaAccepted"
                    checked={formData.ndaAccepted}
                    onChange={handleChange}
                    className="mt-1 h-5 w-5 cursor-pointer rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />

                  <label htmlFor="ndaAccepted" className="text-sm text-gray-600 cursor-pointer">
                    All shared details are confidential and protected under NDA.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="mb-5">
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
              </>
            )}
          </form>

          <div className="flex justify-center relative mt-4">
            {/* Trigger Text */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="text-sm cursor-pointer text-purple-600 font-semibold underline hover:text-purple-700 justify-center flex items-center gap-1"
            >
              <Lock size={14} />
              Safe & Confidential
            </button>

            {/* Popup Box (Dropdown Style) */}
            {open && (
              <div
                ref={boxRef}
                className="absolute left-26 bottom-6 w-80 bg-white shadow-xl rounded-xl border border-gray-200 p-4 z-30"
              >
                {/* Close Button */}
                <button
                  type="button"
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
