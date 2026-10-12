import Header from "@components/Header"
import { fira } from "@utils/font"
import Link from "next/link"
import { posts, postTitle } from "@content/posts"
import { formatDate, localePath, type Locale } from "@utils/i18n"

export default function Misc({ params }: { params: { lang: Locale } }) {
    const { lang } = params
    return (
        <Header>
            <div className="mt-24 sm:ml-8 mini:ml-6 mini:mr-10">
                <div className="flex flex-col gap-5">
                    {posts.misc.map((post) => (
                        <div key={post.slug} className="flex-row flex items-center gap-6 justify-between">
                            <Link href={localePath(`/misc/${post.slug}`, lang)} className={`${fira.className} text-xl hover:text-gray-500 underline underline-offset-8`}>
                                {postTitle(post, lang)}
                            </Link>
                            <p className={`${fira.className} text-xs text-gray-400`}>
                                {formatDate(post.date, lang)}<br />
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Header>
    )
}
