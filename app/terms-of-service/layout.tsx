import type { Metadata } from "next";

export const metadata = {
  title: "Terms of Service | Coreway Solution",
  description: "Read our terms of service to understand the rules and regulations for using our services.",
  keywords: "terms of service, terms and conditions, legal, service agreement",
  openGraph: {
    title: "Terms of Service | Coreway Solution",
    description: "Read our terms of service to understand the rules and regulations for using our services.",
    type: "website",
    url: "https://www.corewaysolution.com/terms-of-service",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Coreway Solution",
    description: "Read our terms of service to understand the rules and regulations for using our services.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/terms-of-service"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
