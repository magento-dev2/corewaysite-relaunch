"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <>
      <Navbar />
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
