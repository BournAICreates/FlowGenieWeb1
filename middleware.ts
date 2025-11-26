import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Set permissive CSP headers to allow Zapier iframe
  response.headers.set(
    'Content-Security-Policy',
    "frame-src 'self' https: http: data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; connect-src 'self' https:;"
  )

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
