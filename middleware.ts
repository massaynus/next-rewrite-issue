import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith('/proxy')) {
        console.log('REQUEST:', req.url)
        console.warn('PATHNAME:', req.nextUrl.pathname);
        return NextResponse.rewrite(req.nextUrl.pathname.replace('/proxy', 'https://jsonplaceholder.typicode.com/todos'))
    }

    return NextResponse.next()
}