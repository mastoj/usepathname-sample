import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.indexOf(".") !== -1) {
    return NextResponse.next();
  }
  const someRandomJson = {
    message: "This is a random JSON object",
    random: "randomtext",
  };
  const base64Encoded = Buffer.from(JSON.stringify(someRandomJson)).toString(
    "base64"
  );
  const newUrl = new URL(
    `/${base64Encoded}/${request.nextUrl.pathname}?${request.nextUrl.search}`,
    request.nextUrl.origin
  );
  return NextResponse.rewrite(newUrl);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
