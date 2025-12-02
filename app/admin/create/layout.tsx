import type { Metadata } from "next";

export const metadata = {
  title: "Admin Create | Coreway Solution",
  description: "Explore Admin Create services and solutions by Coreway Solution. Expert AI development and digital transformation.",
  keywords: "admin create, coreway solution, AI development, automation",
  openGraph: {
    title: "Admin Create | Coreway Solution",
    description: "Explore Admin Create services and solutions by Coreway Solution. Expert AI development and digital transformation.",
    type: "website",
    url: "https://www.corewaysolution.com/admin/create/",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Admin Create | Coreway Solution",
    description: "Explore Admin Create services and solutions by Coreway Solution. Expert AI development and digital transformation.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/admin/create/"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
