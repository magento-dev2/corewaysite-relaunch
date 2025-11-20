"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideFooterRoutes = [
    "/contact",
    "/login",
    "/register",
    "/demo",
  ];

  const hideFooter = hideFooterRoutes.includes(pathname);

  return (
    <LanguageProvider>
      <Navbar />
      {children}
      {!hideFooter && <Footer />}
    </LanguageProvider>
  );
}
