import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image RecognitionTool - AI-Powered Image Management | Coreway",
  description: "Automatically organize, categorize, and manage thousands of images with our AI-powered image Recognitiontool. Save hours of manual work with intelligent automation.",
  keywords: "image organization, AI image management, photo organizer, bulk image processing, automated categorization",
};

export default function ImageReorganizationToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
