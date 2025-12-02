import type { Metadata } from "next";

export const metadata = {
  title: "Dedicated Developers | Hire Expert Development Teams | Coreway",
  description: "Hire dedicated developers for your projects. Expert teams in AI, web, mobile, and cloud development.",
  keywords: "dedicated developers, hire developers, development team, remote developers, tech talent",
  openGraph: {
    title: "Dedicated Developers | Hire Expert Development Teams | Coreway",
    description: "Hire dedicated developers for your projects. Expert teams in AI, web, mobile, and cloud development.",
    type: "website",
    url: "https://www.corewaysolution.com/dedicated-developers",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dedicated Developers | Hire Expert Development Teams | Coreway",
    description: "Hire dedicated developers for your projects. Expert teams in AI, web, mobile, and cloud development.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/dedicated-developers"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
