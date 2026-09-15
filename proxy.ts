import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Enforce HTTPS when running behind a reverse proxy that reports the
// original scheme via x-forwarded-proto (e.g. self-hosted behind nginx).
// No-op on platforms (like Vercel) that already terminate TLS before
// the request reaches the app.
export function proxy(request: NextRequest) {
  if (
    process.env.NODE_ENV === "production" &&
    request.headers.get("x-forwarded-proto") === "http"
  ) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
