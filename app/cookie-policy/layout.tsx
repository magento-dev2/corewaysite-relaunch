import type { Metadata } from "next";

export const metadata = {
  title: "Cookie Policy | Coreway Solution",
  description: "Learn about our cookie policy and how we use cookies to improve your browsing experience.",
  keywords: "cookie policy, cookies, website cookies, tracking, privacy",
  openGraph: {
    title: "Cookie Policy | Coreway Solution",
    description: "Learn about our cookie policy and how we use cookies to improve your browsing experience.",
    type: "website",
    url: "https://www.corewaysolution.com/cookie-policy",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Coreway Solution",
    description: "Learn about our cookie policy and how we use cookies to improve your browsing experience.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/cookie-policy"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
