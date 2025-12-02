import type { Metadata } from "next";

export const metadata = {
  title: "Manufacturing & IoT Solutions | Smart Factory Technology | Coreway",
  description: "Implement Industry 4.0 with IoT sensors, AI analytics, and automation for smart manufacturing.",
  keywords: "manufacturing IoT, smart factory, Industry 4.0, manufacturing automation, IoT sensors",
  openGraph: {
    title: "Manufacturing & IoT Solutions | Smart Factory Technology | Coreway",
    description: "Implement Industry 4.0 with IoT sensors, AI analytics, and automation for smart manufacturing.",
    type: "website",
    url: "https://www.corewaysolution.com/industries/manufacturing-iot",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing & IoT Solutions | Smart Factory Technology | Coreway",
    description: "Implement Industry 4.0 with IoT sensors, AI analytics, and automation for smart manufacturing.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/industries/manufacturing-iot"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
