import type { Locale } from "@utils/i18n"

// 新しい記事を書いたら src/content/<kind>/<slug>/{en,ja}.mdx を作り、ここに1行追加する。
// 片方の言語しかない場合は、もう片方はある方の言語で表示される。
// 抜粋は mdx の最初の段落から自動で作られる。
export type Kind = "writing" | "misc"

export type Post = {
    slug: string
    title: Partial<Record<Locale, string>> & { en: string }
    date: string // YYYY-MM-DD
    langs: Locale[] // mdx がある言語
}

export const posts: Record<Kind, Post[]> = {
    writing: [
        {
            slug: "hack-it-before-its-hacked",
            title: {
                en: "Hack It Before It's Hacked.",
                ja: "どうせハッキングされるなら、自分たちでハックしよう。",
            },
            date: "2026-10-11",
            langs: ["en", "ja"],
        },
        { slug: "zigos-dev001", title: { en: "Zig OS Dev 001" }, date: "2024-03-10", langs: ["en", "ja"] },
    ],
    misc: [
        { slug: "ajisashi", title: { en: "ajisashi." }, date: "2024-03-10", langs: ["en", "ja"] },
        { slug: "terrible-japan", title: { en: "terrible japan." }, date: "2024-03-10", langs: ["en", "ja"] },
        { slug: "hacker-mind-and-japanese-elaborate", title: { en: "hacker mind and japanese elaborate." }, date: "2024-03-09", langs: ["en", "ja"] },
    ],
}

export function findPost(kind: Kind, slug: string): Post | undefined {
    return posts[kind].find((p) => p.slug === slug)
}

export function postTitle(post: Post, lang: Locale): string {
    return post.title[lang] ?? post.title.en
}

// その言語の mdx がなければ、ある方の言語を使う
export function contentLang(post: Post, lang: Locale): Locale {
    return post.langs.includes(lang) ? lang : post.langs[0]
}
