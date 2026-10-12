import PostBody from "@components/PostBody"
import { posts, postTitle, findPost } from "@content/posts"
import { locales, type Locale } from "@utils/i18n"

type Params = { lang: Locale; slug: string }

export function generateStaticParams() {
    return locales.flatMap((lang) => posts.misc.map((p) => ({ lang, slug: p.slug })))
}

export function generateMetadata({ params }: { params: Params }) {
    const post = findPost("misc", params.slug)
    return { title: post ? postTitle(post, params.lang) : "gx14ac" }
}

export default function Page({ params }: { params: Params }) {
    return <PostBody kind="misc" slug={params.slug} lang={params.lang} />
}
