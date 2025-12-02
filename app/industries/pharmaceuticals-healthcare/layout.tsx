import type { Metadata } from "next";

export const metadata = {
  title: "Healthcare & Pharma Solutions | Medical Technology Development | Coreway",
  description: "Develop HIPAA-compliant healthcare solutions with AI diagnostics, patient management, and automation.",
  keywords: "healthcare technology, pharma software, medical AI, HIPAA compliance, healthcare automation",
  openGraph: {
    title: "Healthcare & Pharma Solutions | Medical Technology Development | Coreway",
    description: "Develop HIPAA-compliant healthcare solutions with AI diagnostics, patient management, and automation.",
    type: "website",
    url: "https://www.corewaysolution.com/industries/pharmaceuticals-healthcare",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare & Pharma Solutions | Medical Technology Development | Coreway",
    description: "Develop HIPAA-compliant healthcare solutions with AI diagnostics, patient management, and automation.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/industries/pharmaceuticals-healthcare"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
