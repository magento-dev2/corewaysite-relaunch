import type { Metadata } from "next";

export const metadata = {
  title: "Python Development | AI & Data Science Solutions | Coreway",
  description: "Build AI, machine learning, and data science solutions with Python and modern frameworks.",
  keywords: "Python development, Python AI, Python ML, data science, Python services",
  openGraph: {
    title: "Python Development | AI & Data Science Solutions | Coreway",
    description: "Build AI, machine learning, and data science solutions with Python and modern frameworks.",
    type: "website",
    url: "https://www.corewaysolution.com/technologies/python",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Python Development | AI & Data Science Solutions | Coreway",
    description: "Build AI, machine learning, and data science solutions with Python and modern frameworks.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/technologies/python"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
