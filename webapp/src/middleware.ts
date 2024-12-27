// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0/edge';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { REQUIRED_AUTH_URL } from '@constants/common';

export default createMiddleware(routing);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/_next')) return NextResponse.next();
  
  if (REQUIRED_AUTH_URL.includes(pathname)) {
    const res = new NextResponse();
    const session = await getSession(req, res);

    if (!session) {
      req.nextUrl.pathname = '/api/auth/login';
      return NextResponse.redirect(req.nextUrl);
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(vi|en|ja)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
