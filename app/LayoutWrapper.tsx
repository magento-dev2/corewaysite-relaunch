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

  const hideHeaderFooterRoutes = [
    "/admin",
  ];

  const hideFooter = hideFooterRoutes.includes(pathname);
  const hideHeaderFooter = pathname.startsWith("/admin");

  return (
    <LanguageProvider>
      {!hideHeaderFooter && <Navbar />}
      {children}
      {!hideFooter && !hideHeaderFooter && <Footer />}
    </LanguageProvider>
  );
}
