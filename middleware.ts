import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const currentUser = "abel";    

    if (!currentUser && request.nextUrl.pathname.startsWith("/dashboard")) {
        return Response.redirect(new URL('/', request.url))
    } 

}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}