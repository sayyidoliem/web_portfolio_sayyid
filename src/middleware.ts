import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";
function hasLocale(p: string) {
  return locales.some((l) => p === `/${l}` || p.startsWith(`/${l}/`));
}
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (hasLocale(pathname)) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|site.webmanifest|robots.txt|sitemap.xml).*)",
  ],
};
