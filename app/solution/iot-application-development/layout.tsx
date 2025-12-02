import type { Metadata } from "next";

export const metadata = {
  title: "IoT Application Development | Connected Device Solutions | Coreway",
  description: "Build scalable IoT applications that connect devices, collect data, and deliver real-time insights.",
  keywords: "IoT development, IoT applications, connected devices, IoT solutions, smart devices",
  openGraph: {
    title: "IoT Application Development | Connected Device Solutions | Coreway",
    description: "Build scalable IoT applications that connect devices, collect data, and deliver real-time insights.",
    type: "website",
    url: "https://www.corewaysolution.com/solution/iot-application-development",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT Application Development | Connected Device Solutions | Coreway",
    description: "Build scalable IoT applications that connect devices, collect data, and deliver real-time insights.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/solution/iot-application-development"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
