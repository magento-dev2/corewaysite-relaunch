import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ALLOWED_HOSTS = [
  "corewaysolution.com",
  "www.corewaysolution.com",
];

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  /* ======================================================
     1️⃣ GLOBAL SAFETY: BLOCK EXTERNAL REDIRECT / HOST ABUSE
     ====================================================== */
  if (!ALLOWED_HOSTS.includes(url.hostname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  /* ======================================================
     2️⃣ ADMIN AUTH LOGIC (YOUR EXISTING CODE)
     ====================================================== */
  if (pathname.startsWith("/admin")) {
    if (pathname === "/admin/login") {
      return NextResponse.next();
    }

    const adminSession = request.cookies.get("admin_session");
    if (!adminSession) {
      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }
  }

  return NextResponse.next();
}

/* ======================================================
   3️⃣ RUN MIDDLEWARE ON ALL ROUTES (CRITICAL)
   ====================================================== */
export const config = {
  matcher: "/:path*",
};

