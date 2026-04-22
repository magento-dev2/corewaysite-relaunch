"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigationLoader from "@/components/NavigationLoader";
import CookieConsent from "@/components/CookieConsent";
import AuditReportModal from "@/components/blog/AuditReportModal";
import { LanguageProvider } from "@/contexts/LanguageContext";

import { RecaptchaProvider } from "@/contexts/RecaptchaContext";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideFooterRoutes: string[] = [];

  const hideHeaderFooterRoutes: string[] = [];

  const hideFooter = hideFooterRoutes.includes(pathname);
  const hideHeaderFooter =
    pathname.startsWith("/admin") ||
    hideHeaderFooterRoutes.includes(pathname);

  return (
    <LanguageProvider>
      <RecaptchaProvider>
        <NavigationLoader />
        {!hideHeaderFooter && <Navbar />}
        {children}
        {!hideFooter && !hideHeaderFooter && <Footer />}
        <CookieConsent />
        <AuditReportModal />
      </RecaptchaProvider>
    </LanguageProvider>
  );
}
