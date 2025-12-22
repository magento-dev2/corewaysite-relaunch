"use client"

import { useState } from 'react';
import { Code2, Mail, Phone, MapPin, Upload, X, Menu } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    websiteUrl: '',
    startDate: '',
    requestingAs: '',
    file: null as File | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('websiteUrl', formData.websiteUrl);
      formDataToSend.append('startDate', formData.startDate);
      formDataToSend.append('requestingAs', formData.requestingAs);

      if (formData.file) {
        formDataToSend.append('file', formData.file);
      }

      const response = await fetch('/api/hire-developers', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you! Our experts will get in touch soon.',
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          websiteUrl: '',
          startDate: '',
          requestingAs: '',
          file: null
        });
        setFileName('');
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit. Please try again.',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file });
      setFileName(file.name);
    }
  };

  return (
    <div className="min-h-screen   text-white">


      {/* Hero Section */}
      <section className=" px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hire Dedicated Web & Mobile <span className="text-purple-400">Developers</span>
          </h1>
          <p className="text-xl text-purple-200 mb-12">
            Please fill the form and provide your project requirements. Our experts will get in touch soon.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20  shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information Section */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-purple-200">Basic Information</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-purple-200">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/50 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors text-white placeholder-gray-400"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-purple-200">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/50 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors text-white placeholder-gray-400"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-purple-200">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/50 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors text-white placeholder-gray-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* About Your Project Section */}
              <div className="pt-6 border-t border-purple-700/30">
                <h2 className="text-2xl font-bold mb-6 text-purple-200">About Your Project</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-purple-200">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/50 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors text-white placeholder-gray-400 resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-purple-200">
                      Attach File
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="file"
                        className="flex items-center justify-center gap-2 w-full px-4 py-8 bg-white/5 border-2 border-dashed border-white/50 rounded-lg hover:border-purple-400 transition-colors cursor-pointer"
                      >
                        <Upload className="w-6 h-6 text-purple-400" />
                        <span className="text-purple-300">
                          {fileName || 'Click to upload or drag and drop'}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional Recommendations Section */}
              <div className="pt-6 border-t border-purple-700/30">
                <h2 className="text-2xl font-bold mb-6 text-purple-200">Optional Recommendations</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="websiteUrl" className="block text-sm font-medium mb-2 text-purple-200">
                      Website / LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      id="websiteUrl"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/50 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors text-white placeholder-gray-400"
                      placeholder="https://"
                    />
                  </div>

                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium mb-2 text-purple-200">
                      Project Start Date
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/50 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="requestingAs" className="block text-sm font-medium mb-2 text-purple-200 ">
                      Requesting Quote as
                    </label>
                    <select
                      id="requestingAs"
                      name="requestingAs"
                      value={formData.requestingAs}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/50 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors text-purple-500"
                    >
                      <option value="">Select</option>
                      <option value="company">Company Representative</option>
                      <option value="individual">Individual</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-purple-700/30">
                <div className="flex items-start gap-3 mb-6">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1 w-4 h-4 accent-purple-600"
                  />
                  <label htmlFor="privacy" className="text-sm text-purple-300">
                    I agree to the{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Privacy Statement
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Terms of Use
                    </a>
                    . I understand that my information will be used to process my request.
                  </label>

                </div>

                {/* Success/Error Message */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${submitStatus.type === 'success'
                        ? 'bg-green-500/20 border border-green-500/50 text-green-200'
                        : 'bg-red-500/20 border border-red-500/50 text-red-200'
                      }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-purple-500 px-8 py-4 rounded-lg font-bold text-lg transition-all ${isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:shadow-2xl hover:shadow-purple-500/50'
                    }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>


    </div>
  );
}
