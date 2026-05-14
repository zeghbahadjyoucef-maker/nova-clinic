import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['fr', 'ar'],
  defaultLocale: 'fr',
  localePrefix: 'always'
});

export function middleware(request: NextRequest) {
  try {
    return intlMiddleware(request);
  } catch {
    const { pathname } = request.nextUrl;
    const hasLocale = pathname.startsWith('/fr') || pathname.startsWith('/ar');
    if (!hasLocale) {
      return NextResponse.redirect(new URL('/fr' + pathname, request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
