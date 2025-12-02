import type { Metadata } from "next";

export const metadata = {
  title: "Community | Join Coreway Developer Community",
  description: "Join our developer community to connect, learn, and collaborate with other developers.",
  keywords: "developer community, community, developers, collaboration, networking",
  openGraph: {
    title: "Community | Join Coreway Developer Community",
    description: "Join our developer community to connect, learn, and collaborate with other developers.",
    type: "website",
    url: "https://www.corewaysolution.com/community",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Community | Join Coreway Developer Community",
    description: "Join our developer community to connect, learn, and collaborate with other developers.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/community"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
