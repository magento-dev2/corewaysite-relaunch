import type { Metadata } from "next";

export const metadata = {
  title: "React Development | Modern Frontend Applications | Coreway",
  description: "Create dynamic, responsive web applications with React and modern frontend technologies.",
  keywords: "React development, React apps, frontend development, React services, React solutions",
  openGraph: {
    title: "React Development | Modern Frontend Applications | Coreway",
    description: "Create dynamic, responsive web applications with React and modern frontend technologies.",
    type: "website",
    url: "https://www.corewaysolution.com/technologies/react",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "React Development | Modern Frontend Applications | Coreway",
    description: "Create dynamic, responsive web applications with React and modern frontend technologies.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/technologies/react"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
