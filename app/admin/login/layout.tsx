import type { Metadata } from "next";

export const metadata = {
  title: "Admin Login | Coreway Solution",
  description: "Explore Admin Login services and solutions by Coreway Solution. Expert AI development and digital transformation.",
  keywords: "admin login, coreway solution, AI development, automation",
  openGraph: {
    title: "Admin Login | Coreway Solution",
    description: "Explore Admin Login services and solutions by Coreway Solution. Expert AI development and digital transformation.",
    type: "website",
    url: "https://www.corewaysolution.com/admin/login/",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Admin Login | Coreway Solution",
    description: "Explore Admin Login services and solutions by Coreway Solution. Expert AI development and digital transformation.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/admin/login/"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
