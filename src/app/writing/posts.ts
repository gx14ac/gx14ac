// 新しい記事を書いたら src/app/writing/<slug>/page.mdx を作り、ここに1行追加する。
// 抜粋は page.mdx の最初の段落から自動で作られる。
export type Post = {
    slug: string
    title: string
    date: string // YYYY-MM-DD
}

export const posts: Post[] = [
    { slug: "zigos-dev001", title: "Zig OS Dev 001", date: "2024-03-10" },
]
