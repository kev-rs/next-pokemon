import { type NextRequest, NextResponse } from "next/server";


export async function middleware(req: NextRequest) {
  // if()
  // return NextResponse.rewrite(new URL('/', req.url));
}

export const config = {
  matcher: ['/api/hello']
}