import fs from "fs"
import path from "path"
import Header from "@components/Header"
import { fira } from "@utils/font"
import Link from "next/link"
import { posts } from "./posts"

// page.mdx の見出し以降、最初の段落を抜粋として取り出す
function excerpt(slug: string): string {
    const src = fs.readFileSync(path.join(process.cwd(), "src/app/writing", slug, "page.mdx"), "utf8")
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

function formatDate(date: string): string {
    return new Date(date)
        .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })
        .toLowerCase()
}

export default function Writing() {
    const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date))
    return (
        <Header>
            <section className="mt-24 sm:ml-8 mini:ml-6 mini:mr-10 max-w-2xl flex flex-col gap-14">
                {sorted.map((post) => (
                    <article key={post.slug}>
                        <h2 className="text-2xl font-bold">
                            <Link href={`/writing/${post.slug}`} className="hover:text-gray-400">
                                {post.title}
                            </Link>
                        </h2>
                        <p className={`${fira.className} mt-3 text-xs text-gray-500`}>
                            gx14ac · {formatDate(post.date)}
                        </p>
                        <pre className={`${fira.className} mt-4 ml-5 text-sm leading-7 text-gray-300 whitespace-pre-wrap break-words`}>
                            {excerpt(post.slug)}
                        </pre>
                        <p className={`${fira.className} mt-4 ml-5 text-xs italic`}>
                            <Link href={`/writing/${post.slug}`} className="text-gray-500 hover:text-gray-300">
                                read the full post →
                            </Link>
                        </p>
                    </article>
                ))}
            </section>
        </Header>
    )
}
