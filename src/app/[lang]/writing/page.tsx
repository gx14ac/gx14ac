import fs from "fs"
import path from "path"
import Header from "@components/Header"
import { fira } from "@utils/font"
import Link from "next/link"
import { contentLang, posts, postTitle, type Post } from "@content/posts"
import { dict, formatDate, localePath, type Locale } from "@utils/i18n"

// mdx の見出し以降、最初の段落を抜粋として取り出す
function excerpt(post: Post, lang: Locale): string {
    const src = fs.readFileSync(path.join(process.cwd(), "src/content/writing", post.slug, `${contentLang(post, lang)}.mdx`), "utf8")
    const paragraph: string[] = []
    for (const line of src.split("\n")) {
        const l = line.trim()
        if (l.startsWith("import ") || l.startsWith("export ") || l.startsWith("#")) continue
        if (l === "") {
            if (paragraph.length > 0) break
            continue
        }
        paragraph.push(l)
    }
    return paragraph
        .join("\n")
        .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
        .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
        .replace(/(\*\*|__|`)/g, "")
}

export default function Writing({ params }: { params: { lang: Locale } }) {
    const { lang } = params
    const sorted = [...posts.writing].sort((a, b) => b.date.localeCompare(a.date))
    return (
        <Header>
            <section className="mt-24 sm:ml-8 mini:ml-6 mini:mr-10 max-w-2xl flex flex-col gap-14">
                {sorted.map((post) => {
                    const href = localePath(`/writing/${post.slug}`, lang)
                    return (
                        <article key={post.slug}>
                            <h2 className="text-2xl font-bold">
                                <Link href={href} className="hover:text-gray-400">
                                    {postTitle(post, lang)}
                                </Link>
                            </h2>
                            <p className={`${fira.className} mt-3 text-xs text-gray-500`}>
                                gx14ac · {formatDate(post.date, lang)}
                            </p>
                            <pre className={`${fira.className} mt-4 ml-5 text-sm leading-7 text-gray-300 whitespace-pre-wrap break-words`}>
                                {excerpt(post, lang)}
                            </pre>
                            <p className={`${fira.className} mt-4 ml-5 text-xs italic`}>
                                <Link href={href} className="text-gray-500 hover:text-gray-300">
                                    {dict[lang].readMore}
                                </Link>
                            </p>
                        </article>
                    )
                })}
            </section>
        </Header>
    )
}
