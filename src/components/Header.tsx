'use client';
import Image from "next/image"
import { usePathname } from "next/navigation"
import { fira } from "@utils/font"
import Link from "next/link"
import { defaultLocale, isLocale, LOCALE_COOKIE, localePath, locales, stripLocale, type Locale } from "@utils/i18n"

type ComponentProps = {
    children: React.ReactNode
    // 本文側を残り幅いっぱいに広げる (記事ページで中央寄せするため)
    wide?: boolean
}

const nav = [
    { href: "/", label: "About" },
    { href: "/writing", label: "Writing" },
    { href: "/misc", label: "Misc" },
    { href: "/artworks", label: "Artworks" },
    { href: "/photos", label: "Photos" },
    { href: "/improvisation", label: "Impr" },
]

export default function Header({ children, wide }: ComponentProps) {
    const pathname = usePathname()
    const seg = pathname.split("/")[1]
    const lang: Locale = isLocale(seg) ? seg : defaultLocale
    const bare = stripLocale(pathname)
    const linkClass = `${fira.className} ml-5 md:text-lg hover:text-blue-600 mini:text-xs supermini:text-xs`
    return (
        <div className="md:flex md:justify-start md:items-start md:gap-30 md:mt-32 md:ml-18 lg:ml-20 mini:ml-6 mini:gap-2 supermini:gap-2">
            <div className="md:grid md:gap-6 md:mt-6 sm:mt-10 sm:flex sm:items-center sm:justify-evenly sm:mr-40 mini:gap-2 supermini:gap-2">
                <Image
                    src="/assets/artwork.png"
                    className="mini:invisible md:visible sm:visible supermini:invisible"
                    alt="logo"
                    width={100}
                    height={100}
                />
                {nav.map((item) => (
                    <Link key={item.href} href={localePath(item.href, lang)} className={linkClass}>
                        {item.label}
                    </Link>
                ))}
                <p className={`${fira.className} ml-5 md:text-sm mini:text-xs supermini:text-xs text-gray-500`}>
                    {locales.map((l, i) => (
                        <span key={l}>
                            {i > 0 && " / "}
                            {l === lang ? (
                                <span className="text-white">{l.toUpperCase()}</span>
                            ) : (
                                // middleware は cookie を見て振り分けるので、遷移前に選んだ言語を保存する
                                <Link
                                    href={localePath(bare, l)}
                                    prefetch={false}
                                    className="hover:text-blue-600"
                                    onClick={() => { document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000` }}
                                >
                                    {l.toUpperCase()}
                                </Link>
                            )}
                        </span>
                    ))}
                </p>
            </div>
            <div className={`mt-8 mini:mt-16 mini:ml-2 ${wide ? "md:flex-1 md:min-w-0 md:mr-20" : ""}`}>
                {children}
            </div>
        </div >
    )
}
