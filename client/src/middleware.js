import { NextResponse } from "next/server";

export const config = {
  matcher: "/app",
};

export function middleware(req, event) {
  const cookie = req.cookies.get("__session");

  const isValidToken = validateToken(cookie);

  if (!isValidToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (cookie) {
    const newRequest = new Request(req.nextUrl, {
      headers: new Headers(req.headers),

      Authorization: `Bearer ${cookie}`,
    });
    event.waitUntil(fetch(newRequest));
  }

  return NextResponse.next();
}

function validateToken(token) {
  if (token !== undefined) {
    return true;
  }

  return false;
}
