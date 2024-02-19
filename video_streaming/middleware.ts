import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const cookie = request.cookies.get('login')

    if (!cookie) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    const { name, value } = cookie

    if (name === "login" && value === "validated") {
        return NextResponse.rewrite(new URL("/videos", request.url))
    } else {
        return NextResponse.rewrite(new URL("/", request.url))
    }
}
 
export const config = {
  matcher: '/videos/:path*',
}