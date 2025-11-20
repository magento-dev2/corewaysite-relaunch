"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "next/head";
import Breadcrumb from "@/components/about/Breadcrumb";

gsap.registerPlugin(ScrollTrigger);

export default function PrivacyPolicyPage() {
  const siteUrl = "https://www.corewaysolution.com";
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      sectionsRef.current.forEach((section, index) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <>
      <Head>
        <title>Privacy Policy | Coreway Solution</title>
        <meta
          name="description"
          content="Privacy Policy for Coreway Solution. Learn how we collect, use, and protect your personal information."
        />
        <meta property="og:title" content="Privacy Policy | Coreway Solution" />
        <meta
          property="og:description"
          content="Our commitment to protecting your privacy and personal data."
        />
        <link rel="canonical" href={`${siteUrl}/privacy-policy`} />
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20 pb-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Privacy Policy" },
              ]}
            />
          </div>
        </header>

        <main className="pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={contentRef} className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-white/60 text-lg mb-12">
                Last Updated: November 20, 2025
              </p>

              <div className="space-y-12">
                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    1. Introduction
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Welcome to Coreway Solution. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    2. Information We Collect
                  </h2>

                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                    2.1 Personal Information
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-2 mb-4 ml-4">
                    <li>Contact us through our website forms</li>
                    <li>Subscribe to our newsletters or updates</li>
                    <li>Request a consultation or quote</li>
                    <li>Register for an account or service</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  <p className="text-white/90 leading-relaxed mb-4">
                    This information may include:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company name and job title</li>
                    <li>Project requirements and business needs</li>
                    <li>Payment and billing information</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                    2.2 Automatically Collected Information
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    When you visit our website, we automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                    <li>IP address and browser type</li>
                    <li>Operating system and device information</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring URLs and clickstream data</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                    <li>Providing and maintaining our services</li>
                    <li>Responding to your inquiries and support requests</li>
                    <li>Processing transactions and sending confirmations</li>
                    <li>Sending administrative information and updates</li>
                    <li>Personalizing your experience on our website</li>
                    <li>Analyzing usage patterns to improve our services</li>
                    <li>Detecting and preventing fraud or security issues</li>
                    <li>Complying with legal obligations</li>
                    <li>Sending marketing communications (with your consent)</li>
                  </ul>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    4. Information Sharing and Disclosure
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-3 ml-4">
                    <li><strong className="text-white">Service Providers:</strong> With trusted third-party vendors who assist in operating our website and providing services</li>
                    <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong className="text-white">With Your Consent:</strong> When you explicitly authorize us to share information</li>
                  </ul>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    5. Cookies and Tracking Technologies
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                  <p className="text-white/90 leading-relaxed mb-3">
                    Types of cookies we use:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-3 ml-4">
                    <li><strong className="text-white">Essential Cookies:</strong> Required for website functionality</li>
                    <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences</li>
                    <li><strong className="text-white">Marketing Cookies:</strong> Track your browsing activity to deliver relevant ads</li>
                  </ul>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    6. Data Security
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-2 ml-4 mb-4">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Secure servers and data centers</li>
                    <li>Access controls and authentication</li>
                    <li>Regular security audits and updates</li>
                    <li>Employee training on data protection</li>
                  </ul>
                  <p className="text-white/90 leading-relaxed">
                    However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    7. Your Privacy Rights
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-3 ml-4 mb-4">
                    <li><strong className="text-white">Access:</strong> Request access to your personal information</li>
                    <li><strong className="text-white">Correction:</strong> Request correction of inaccurate data</li>
                    <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong className="text-white">Portability:</strong> Request a copy of your data in a portable format</li>
                    <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing communications</li>
                    <li><strong className="text-white">Object:</strong> Object to certain processing activities</li>
                  </ul>
                  <p className="text-white/90 leading-relaxed">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    8. Third-Party Links
                  </h2>
                  <p className="text-white/90 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    9. Children's Privacy
                  </h2>
                  <p className="text-white/90 leading-relaxed">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    10. International Data Transfers
                  </h2>
                  <p className="text-white/90 leading-relaxed">
                    Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction. We take appropriate steps to ensure that your data is treated securely and in accordance with this privacy policy.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    11. Changes to This Privacy Policy
                  </h2>
                  <p className="text-white/90 leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date. You are advised to review this privacy policy periodically for any changes.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    12. Contact Us
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-6">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
                    <p className="text-white font-semibold text-lg mb-3">Coreway Solution</p>
                    <p className="text-white/90 mb-2">Email: privacy@corewaysolution.com</p>
                    <p className="text-white/90">Website: www.corewaysolution.com</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
