import { NextRequest, NextResponse } from "next/server"
import { defaultLocale, isLocale, LOCALE_COOKIE, localePath, locales, stripLocale } from "@utils/i18n"

export function middleware(req: NextRequest) {
    const { pathname, search } = req.nextUrl
    const seg = pathname.split("/")[1]

    // /en/... は正規 URL (プレフィックスなし) にまとめる
    if (seg === defaultLocale) {
        return NextResponse.redirect(new URL(stripLocale(pathname) + search, req.url), 308)
    }

    const bare = stripLocale(pathname)

    // 英語の URL でも、日本語を選んでいる (cookie) か、初回訪問で日本語ブラウザなら /ja に案内する
    if (!isLocale(seg) && preferredLocale(req) === "ja") {
        const res = NextResponse.redirect(new URL(localePath(bare, "ja") + search, req.url))
        res.cookies.set(LOCALE_COOKIE, "ja", { path: "/", maxAge: 60 * 60 * 24 * 365 })
        return res
    }

    const res = isLocale(seg)
        ? NextResponse.next()
        : NextResponse.rewrite(new URL(`/${defaultLocale}${pathname === "/" ? "" : pathname}${search}`, req.url))

    // 検索エンジン向けに各言語版の URL を伝える
    const origin = req.nextUrl.origin
    const alternates = locales.map((l) => `<${origin}${localePath(bare, l)}>; rel="alternate"; hreflang="${l}"`)
    alternates.push(`<${origin}${bare}>; rel="alternate"; hreflang="x-default"`)
    res.headers.set("Link", alternates.join(", "))
    return res
}

function preferredLocale(req: NextRequest): string {
    const cookie = req.cookies.get(LOCALE_COOKIE)?.value
    if (isLocale(cookie)) return cookie
    const first = req.headers.get("accept-language")?.split(",")[0]?.trim().toLowerCase() ?? ""
    return first.startsWith("ja") ? "ja" : defaultLocale
}

export const config = {
    // _next, api, 拡張子付きのファイル (画像や音声など) は対象外
    matcher: ["/((?!_next|api|.*\\..*).*)"],
}
