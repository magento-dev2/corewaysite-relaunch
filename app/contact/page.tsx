"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ContactHero from "@/components/contact/ContactHero";
import FAQSection from "@/components/contact/FAQSection";
import PageCTA from "@/components/PageCTA";
import ContactSection from "@/components/contact/Contactsectio";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [
      { ref: heroRef, y: 50 },
      { ref: faqRef, y: 50 },
      { ref: ctaRef, y: 30 },
    ];

    sections.forEach(({ ref, y }) => {
      if (!ref.current) return;

      const children = Array.from(ref.current.children);

      children.forEach((child) => {
        gsap.fromTo(
          child,
          { opacity: 0, y: y, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: child,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play reverse play reverse", // triggers every scroll
            },
          }
        );
      });
    });

    // Optional: smooth background parallax effect
    gsap.to(heroRef.current, {
      yPercent: 5,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true, // continuous scroll effect
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0918]">
      {/* Contact Hero */}
      <div ref={heroRef}>
        <ContactHero />
      </div>

      {/* FAQ Section */}
      <div ref={faqRef}>
        <FAQSection />
      </div>

      <ContactSection/>

      {/* CTA Section */}
      <div ref={ctaRef}>
        <PageCTA
          badge="Ready to start?"
          title="Let's build something amazing together"
          description="Schedule a free consultation to discuss your project and see how we can help bring your vision to life."
          primaryButtonText="Schedule a call"
          secondaryButtonText="View our portfolio"
          footerText="Free consultation • No obligation • Quick response time"
        />
      </div>
    </div>
  );
}
