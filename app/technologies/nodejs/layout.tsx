import type { Metadata } from "next";

export const metadata = {
  title: "Node.js Development | Scalable JavaScript Applications | Coreway",
  description: "Develop high-performance, scalable applications with Node.js and modern JavaScript frameworks.",
  keywords: "Node.js development, JavaScript backend, Node.js services, scalable Node.js, Node.js apps",
  openGraph: {
    title: "Node.js Development | Scalable JavaScript Applications | Coreway",
    description: "Develop high-performance, scalable applications with Node.js and modern JavaScript frameworks.",
    type: "website",
    url: "https://www.corewaysolution.com/technologies/nodejs",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Node.js Development | Scalable JavaScript Applications | Coreway",
    description: "Develop high-performance, scalable applications with Node.js and modern JavaScript frameworks.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/technologies/nodejs"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
