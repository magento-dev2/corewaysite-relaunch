import type { Metadata } from "next";

export const metadata = {
  title: "GDPR Compliance | Data Protection | Coreway Solution",
  description: "Learn about our GDPR compliance measures and commitment to protecting your data privacy.",
  keywords: "GDPR compliance, data protection, GDPR, privacy compliance, data security",
  openGraph: {
    title: "GDPR Compliance | Data Protection | Coreway Solution",
    description: "Learn about our GDPR compliance measures and commitment to protecting your data privacy.",
    type: "website",
    url: "https://www.corewaysolution.com/gdpr-compliance",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "GDPR Compliance | Data Protection | Coreway Solution",
    description: "Learn about our GDPR compliance measures and commitment to protecting your data privacy.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/gdpr-compliance"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
