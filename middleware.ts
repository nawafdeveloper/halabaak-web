import { NextResponse, NextRequest } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export function middleware(request: NextRequest) {
    const { cf } = getCloudflareContext();

    const response = NextResponse.next();

    response.headers.set(
        "Content-Security-Policy",
        [
            "default-src 'self'",
            "script-src 'self'",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: blob:",
            "media-src 'self' blob:",
            "connect-src 'self' https://api.yourdomain.com wss:",
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self'",
        ].join("; ")
    );

    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    response.headers.set(
        "Permissions-Policy",
        "camera=(), microphone=(), geolocation=(), payment=()"
    );
    response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");

    if (cf) {
        response.headers.set("X-CF-Country", cf.country ?? "unknown");
        response.headers.set("X-CF-Region", cf.region ?? "unknown");
        response.headers.set("X-CF-ASN", cf.asn?.toString() ?? "unknown");
    }

    const isMobile = request.headers.get("sec-ch-ua-mobile") ?? "?0";
    response.headers.set("X-Is-Mobile", isMobile);

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}