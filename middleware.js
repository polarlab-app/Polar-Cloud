'use server';

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request) {
    const cookie = cookies().get('cloudToken');

    if (!cookie) {
        return NextResponse.redirect(new URL('/', request.nextUrl.origin).toString());
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/home/:path*'],
};
