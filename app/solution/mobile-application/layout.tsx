import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Application Development | iOS & Android App Solutions | Coreway",
  description: "Build cutting-edge mobile applications with native performance, seamless user experience, and enterprise-grade security for iOS and Android platforms.",
  keywords: "mobile app development, iOS apps, Android apps, React Native, Flutter, mobile solutions, app development services",
  openGraph: {
    title: "Mobile Application Development | iOS & Android App Solutions | Coreway",
    description: "Build cutting-edge mobile applications with native performance, seamless user experience, and enterprise-grade security for iOS and Android platforms.",
    type: "website",
    url: "https://www.corewaysolution.com/services/mobile-applications",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution - Mobile App Development"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Application Development | iOS & Android App Solutions | Coreway",
    description: "Build cutting-edge mobile applications with native performance, seamless user experience, and enterprise-grade security for iOS and Android platforms.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/services/mobile-applications"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
