import type { Metadata } from "next";

export const metadata = {
  title: "IoT Protocols & Communication | Connected Device Standards | Coreway",
  description: "Implement IoT protocols including MQTT, CoAP, and LoRaWAN for reliable device communication.",
  keywords: "IoT protocols, MQTT, CoAP, LoRaWAN, IoT communication",
  openGraph: {
    title: "IoT Protocols & Communication | Connected Device Standards | Coreway",
    description: "Implement IoT protocols including MQTT, CoAP, and LoRaWAN for reliable device communication.",
    type: "website",
    url: "https://www.corewaysolution.com/technologies/iot-protocols",
    images: [{
      url: "https://www.corewaysolution.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coreway Solution"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT Protocols & Communication | Connected Device Standards | Coreway",
    description: "Implement IoT protocols including MQTT, CoAP, and LoRaWAN for reliable device communication.",
    images: ["https://www.corewaysolution.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.corewaysolution.com/technologies/iot-protocols"
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
