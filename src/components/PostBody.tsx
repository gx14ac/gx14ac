import { notFound } from "next/navigation"
import Header from "@components/Header"
import Comments from "@components/Comments"
import { contentLang, findPost, type Kind } from "@content/posts"
import type { Locale } from "@utils/i18n"

export default async function PostBody({ kind, slug, lang, comments }: { kind: Kind; slug: string; lang: Locale; comments?: boolean }) {
    const post = findPost(kind, slug)
    if (!post) notFound()
    const { default: Content } = await import(`../content/${kind}/${slug}/${contentLang(post, lang)}.mdx`)
    return (
        <Header>
            <div className="ml-4 mr-6 mt-10 mb-6">
                <div className="prose dark:prose-invert text-slate-600 dark:text-slate-400 tracking-wide" style={{ color: 'white' }}>
                    <Content />
                </div>
                {/* コメントは言語をまたいで同じスレッドを使う */}
                {comments && <Comments term={`${kind}/${slug}`} lang={lang} />}
            </div>
        </Header>
    )
}
