import type { Metadata } from "next";

export const metadata = {
  title: "Laravel & PHP Development | Modern Web Applications | Coreway",
  description: "Build robust web applications with Laravel framework and modern PHP development practices.",
  keywords: "Laravel development, PHP development, Laravel framework, PHP web apps, Laravel services",
  openGraph: {
    title: "Laravel & PHP Development | Modern Web Applications | Coreway",
    description: "Build robust web applications with Laravel framework and modern PHP development practices.",
    type: "website",
    url: "https://www.corewaysolution.com/technologies/laravel-php",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Laravel & PHP Development | Modern Web Applications | Coreway",
    description: "Build robust web applications with Laravel framework and modern PHP development practices.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/technologies/laravel-php"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
