"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "next/head";
import Breadcrumb from "@/components/about/Breadcrumb";

gsap.registerPlugin(ScrollTrigger);

export default function TermsOfServicePage() {
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
        <title>Terms of Service | Coreway Solution</title>
        <meta
          name="description"
          content="Terms of Service for Coreway Solution. Review the terms and conditions for using our website and services."
        />
        <meta property="og:title" content="Terms of Service | Coreway Solution" />
        <meta
          property="og:description"
          content="Legal terms and conditions for using Coreway Solution services."
        />
        <link rel="canonical" href={`${siteUrl}/terms-of-service`} />
      </Head>

      <div className="min-h-screen bg-[#0E0918]">
        <header className="pt-20 pb-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Terms of Service" },
              ]}
            />
          </div>
        </header>

        <main className="pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={contentRef} className="bg-gradient-to-br from-white/5 to-gray-900/30 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Terms of Service
              </h1>
              <p className="text-white/60 text-lg mb-12">
                Last Updated: November 20, 2025
              </p>

              <div className="space-y-12">
                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    1. Agreement to Terms
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    These Terms of Service constitute a legally binding agreement between you and Coreway Solution regarding your access to and use of our website and services. By accessing or using our services, you agree to be bound by these terms.
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    If you do not agree with any part of these terms, you must not use our website or services.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    2. Services Description
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Coreway Solution provides software development, consulting, and technology services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-2 ml-4 mb-4">
                    <li>Custom software development</li>
                    <li>Web and mobile application development</li>
                    <li>AI and machine learning solutions</li>
                    <li>Database design and optimization</li>
                    <li>Cloud infrastructure and DevOps</li>
                    <li>IoT and real-time systems</li>
                    <li>Security implementation and consulting</li>
                    <li>Technical consulting and support</li>
                  </ul>
                  <p className="text-white/90 leading-relaxed">
                    Specific services, deliverables, and terms will be defined in individual project agreements or statements of work.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    3. User Obligations
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    By using our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Not use our services for any illegal or unauthorized purpose</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not transmit malicious code or harmful content</li>
                  </ul>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    4. Intellectual Property Rights
                  </h2>

                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                    4.1 Our Intellectual Property
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    All content on our website, including text, graphics, logos, images, software, and design, is the property of Coreway Solution and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                  </p>

                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                    4.2 Client-Owned Work Product
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Upon full payment, clients receive ownership rights to custom-developed code and deliverables as specified in the project agreement. Pre-existing code, frameworks, libraries, and our proprietary tools remain our property.
                  </p>

                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                    4.3 Open Source Components
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Projects may include open-source components subject to their respective licenses. We will identify such components and their licensing terms in project documentation.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    5. Payment Terms
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Payment terms will be specified in individual project agreements. General terms include:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                    <li>Invoices are due within 30 days unless otherwise specified</li>
                    <li>Late payments may incur interest charges</li>
                    <li>Project milestones must be paid before proceeding to next phase</li>
                    <li>We reserve the right to suspend services for non-payment</li>
                    <li>All fees are exclusive of applicable taxes</li>
                    <li>Refunds are subject to the terms in your project agreement</li>
                  </ul>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    6. Project Timelines and Deliverables
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Project timelines and deliverables will be outlined in the statement of work. We make reasonable efforts to meet deadlines, but timelines may be affected by:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-2 ml-4 mb-4">
                    <li>Scope changes or additional feature requests</li>
                    <li>Delays in client feedback or approvals</li>
                    <li>Third-party service dependencies</li>
                    <li>Unforeseen technical challenges</li>
                    <li>Force majeure events</li>
                  </ul>
                  <p className="text-white/90 leading-relaxed">
                    Timeline adjustments will be communicated promptly and agreed upon in writing.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    7. Warranties and Disclaimers
                  </h2>

                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                    7.1 Service Warranty
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    We warrant that services will be performed in a professional and workmanlike manner. We will correct any defects in our work product during the warranty period specified in your project agreement.
                  </p>

                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                    7.2 Disclaimer
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Except as expressly provided, our services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                    <li>Services will be uninterrupted or error-free</li>
                    <li>Results will meet your specific requirements</li>
                    <li>All defects will be corrected</li>
                    <li>Third-party integrations will function perfectly</li>
                  </ul>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    8. Limitation of Liability
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    To the maximum extent permitted by law, Coreway Solution shall not be liable for:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-2 ml-4 mb-4">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>Damages exceeding the fees paid for the specific service</li>
                    <li>Issues arising from third-party services or integrations</li>
                    <li>Client's failure to follow implementation recommendations</li>
                  </ul>
                  <p className="text-white/90 leading-relaxed">
                    Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    9. Confidentiality
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This includes:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-2 ml-4 mb-4">
                    <li>Business strategies and plans</li>
                    <li>Technical specifications and source code</li>
                    <li>Customer data and trade secrets</li>
                    <li>Financial information</li>
                  </ul>
                  <p className="text-white/90 leading-relaxed">
                    Confidentiality obligations survive termination of the agreement. We may showcase completed projects in our portfolio with client permission.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    10. Termination
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Either party may terminate services under the following conditions:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-2 ml-4 mb-4">
                    <li>Written notice as specified in the project agreement</li>
                    <li>Material breach of terms by the other party</li>
                    <li>Mutual agreement to terminate</li>
                  </ul>
                  <p className="text-white/90 leading-relaxed">
                    Upon termination, client is responsible for payment of all work completed up to the termination date. We will deliver all completed work products and provide transition assistance as specified in the agreement.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    11. Indemnification
                  </h2>
                  <p className="text-white/90 leading-relaxed">
                    You agree to indemnify and hold harmless Coreway Solution from any claims, damages, or expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    12. Dispute Resolution
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    In the event of a dispute, both parties agree to:
                  </p>
                  <ul className="list-disc list-inside text-white/90 space-y-2 ml-4 mb-4">
                    <li>First attempt to resolve through good-faith negotiation</li>
                    <li>Pursue mediation if negotiation fails</li>
                    <li>Submit to binding arbitration if mediation is unsuccessful</li>
                  </ul>
                  <p className="text-white/90 leading-relaxed">
                    These terms shall be governed by the laws of the jurisdiction where Coreway Solution operates.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    13. Changes to Terms
                  </h2>
                  <p className="text-white/90 leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified terms. Material changes will be communicated via email to registered users.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    14. Severability
                  </h2>
                  <p className="text-white/90 leading-relaxed">
                    If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    15. Entire Agreement
                  </h2>
                  <p className="text-white/90 leading-relaxed">
                    These terms, together with any project-specific agreements, constitute the entire agreement between you and Coreway Solution regarding the use of our services and supersede all prior agreements and understandings.
                  </p>
                </section>

                <section ref={addToRefs}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    16. Contact Information
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-6">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
                    <p className="text-white font-semibold text-lg mb-3">Coreway Solution</p>
                    <p className="text-white/90 mb-2">Email: legal@corewaysolution.com</p>
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
