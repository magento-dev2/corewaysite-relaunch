import type { Metadata } from "next";

export const metadata = {
  title: "Privacy Policy | Coreway Solution",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
  keywords: "privacy policy, data protection, privacy, GDPR, data security",
  openGraph: {
    title: "Privacy Policy | Coreway Solution",
    description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
    type: "website",
    url: "https://www.corewaysolution.com/privacy-policy",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Coreway Solution",
    description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/privacy-policy"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
