// GKC: 01JPKNE8A7Z8AFWC717C0GBAA5
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  // Get the pathname of the request
  const { pathname, search, hash } = request.nextUrl;

  // Define static asset paths that should always be accessible without authentication
  const skipMiddlewarePaths = [
    "/_next", // Next.js internal routes
    "/favicon.ico", // Favicon
    "/images", // Public images
    "/icons", // Public icons
    "/fonts", // Fonts
    "/assets", // Other assets
    "/api", // API routes
  ];

  // Only collect logs when accessing internal urls

  // Check if the current path is a static asset path
  const isSkipMiddlewarePath = skipMiddlewarePaths.some(
    (path) => pathname === path || pathname.startsWith(path),
  );

  // Allow static assets to pass through without authentication
  if (isSkipMiddlewarePath) {
    return NextResponse.next();
  }

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token");

  if (pathname === "/checkin" && !accessToken) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    console.log(request.nextUrl);
    const searchParams = new URLSearchParams(search);
    const companyId = searchParams.get("COMPANY_ID");

    response.cookies.set("NEXT_URL", pathname + search + hash);

    if (companyId) {
      response.cookies.set("COMPANY_ID", companyId);
    }
    return response;
  }
}

// Configure which paths this middleware will run on
export const config = {
  // Match all routes except static files, specific asset routes, and .json files
  matcher: ["/((?!_next/static|_next/image|assets|favicon.ico|.*\\.json$).*)"],
};
