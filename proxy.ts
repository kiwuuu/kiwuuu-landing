import { NextRequest, NextResponse } from "next/server";

const KNOWN = [
  "dental",
  "saas",
  "restaurant",
  "ecom",
  "realestate",
  "local",
  "agency",
];

export function proxy(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase();
  const subdomain = host.split(":")[0].split(".")[0];
  if (KNOWN.includes(subdomain) && req.nextUrl.pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = `/${subdomain}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
