import { NextResponse } from 'next/server';

export function middleware(request) {
    console.log('Middleware ran');

    return NextResponse.next();
}

export const config = {
    matcher: ['/home/:path*'],
};
