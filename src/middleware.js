import { NextResponse } from 'next/server';

export async function middleware(request) {
  // const { pathname } = request.nextUrl;
  // const protectedRoutes = ['/profile', '/tours', '/booking'];
  // const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // if (!isProtectedRoute) {
  //   return NextResponse.next();
  // }

  // const authToken = request.cookies.get('phone_verification_token')?.value;

  // if (!authToken) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }

  return NextResponse.next();
}

export const config = {
  // matcher: ['/profile/:path*', '/tours/:path*', '/booking/:path*'],
};
