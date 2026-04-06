import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, host } = request.nextUrl;

  // 1. URL Canonicalization: Redirect non-www to www
  if (host === 'corewaysolution.com') {
    const url = request.nextUrl.clone();
    url.host = 'www.corewaysolution.com';
    return NextResponse.redirect(url, 301);
  }

  // Set x-pathname header to be accessible in layout
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // 2. Security Headers
  // HSTS (HTTP Strict Transport Security)
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );

  // Content Security Policy
 response.headers.set(
  'Content-Security-Policy',
  `
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval'
  https://www.googletagmanager.com
  https://www.google-analytics.com
  https://cdn.jsdelivr.net
  https://app.infracaptain.com
  https://www.clarity.ms
  https://scripts.clarity.ms
  https://www.google.com
  https://www.gstatic.com
  https://www.recaptcha.net;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
img-src 'self' data: blob: https:;
font-src 'self' data: https://fonts.gstatic.com;
connect-src 'self'
  https://www.google-analytics.com
  https://www.googletagmanager.com
  https://app.infracaptain.com
  https://www.clarity.ms
  https://b.clarity.ms
  https://c.clarity.ms
  https://www.google.com
  https://www.gstatic.com
  https://www.recaptcha.net;
frame-src 'self'
  https://www.google.com
  https://www.gstatic.com
  https://recaptcha.google.com
  https://www.recaptcha.net;
object-src 'none';
base-uri 'self';
form-action 'self';
  `.replace(/\n/g, '')
);

  // X-Frame-Options
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');

  // X-Content-Type-Options
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // Referrer Policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions Policy
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );

  // 3. Admin Authentication Check
  if (pathname.startsWith('/admin')) {
    // Allow access to login page
    if (pathname === '/admin/login') {
      return response;
    }

    // Check for admin_session cookie
    const adminSession = request.cookies.get('admin_session');
    if (!adminSession) {
      // Redirect to login if no session
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2)$).*)',
  ],
};
