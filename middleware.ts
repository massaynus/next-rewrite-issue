import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith('/proxy')) {
        console.log('REQUEST:', req.url)
        console.warn('PATHNAME:', req.nextUrl.pathname);

        const url = req.nextUrl.pathname.replace('/proxy', 'https://jsonplaceholder.typicode.com/todos');

        console.log('REWRITTEN TO: ', url)

        return NextResponse.rewrite(url)
    }

    return NextResponse.next()
}