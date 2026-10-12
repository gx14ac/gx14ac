// 英語はプレフィックスなし (/writing)、日本語は /ja 配下 (/ja/writing)。
// middleware がプレフィックスなしのパスを内部で /en に rewrite する。
export const locales = ["en", "ja"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"
export const LOCALE_COOKIE = "NEXT_LOCALE"

export function isLocale(s: string | undefined): s is Locale {
    return locales.includes(s as Locale)
}

// "/writing" -> "/ja/writing" のように、言語に合わせたパスを返す
export function localePath(path: string, lang: Locale): string {
    if (lang === defaultLocale) return path
    return path === "/" ? `/${lang}` : `/${lang}${path}`
}

// "/ja/writing" -> "/writing"
export function stripLocale(pathname: string): string {
    const seg = pathname.split("/")[1]
    if (!isLocale(seg)) return pathname
    return pathname.slice(seg.length + 1) || "/"
}

export function formatDate(date: string, lang: Locale): string {
    const d = new Date(date)
    if (lang === "ja") {
        return d.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
    }
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).toLowerCase()
}

export const dict = {
    en: {
        readMore: "read the full post →",
        bio: [
            "i'm shintaro okumura, also known as gx14ac,",
            "a programmer.",
            "i build runetale, a p2p mesh network,",
            "and write most things from scratch in zig.",
            "i also paint and play bass and guitar.",
            "pragmatic, not dogmatic.",
        ],
    },
    ja: {
        readMore: "続きを読む →",
        bio: [
            "奥村晋太郎、gx14ac としても活動している",
            "プログラマー。",
            "p2p メッシュネットワークの runetale をつくっていて、",
            "たいていのものは zig でゼロから書く。",
            "絵を描いたり、ベースやギターを弾いたりもする。",
            "pragmatic, not dogmatic.",
        ],
    },
} satisfies Record<Locale, unknown>
