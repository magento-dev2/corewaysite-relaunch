import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with Coreway Solution",
  description:
    "Contact Coreway Solution for AI development, automation, and digital transformation services. Get expert consultation for your business needs. Reach out to our team today.",
  keywords:
    "contact coreway, business inquiry, AI consultation, software development contact, get quote, contact us",
  openGraph: {
    title: "Contact Us | Coreway Solution",
    description: "Get in touch with our team for AI development and automation services.",
    type: "website",
    url: "https://www.corewaysolution.com/contact",
  },

  // ✅ FIX: canonical goes here
  alternates: {
    canonical: "https://www.corewaysolution.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
