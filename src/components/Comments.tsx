'use client';
import { useEffect, useRef } from "react"

// giscus: コメントは gx14ac/gx14ac の GitHub Discussions に保存される
// category / categoryId は https://giscus.app で確認できる
const REPO = "gx14ac/gx14ac"
const REPO_ID = "R_kgDOKdQ6wg"
const CATEGORY = "Announcements"
const CATEGORY_ID = "DIC_kwDOKdQ6ws4DGfRh"

export default function Comments() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el || !CATEGORY_ID || el.hasChildNodes()) return
        const script = document.createElement("script")
        script.src = "https://giscus.app/client.js"
        script.async = true
        script.crossOrigin = "anonymous"
        const attrs: Record<string, string> = {
            "data-repo": REPO,
            "data-repo-id": REPO_ID,
            "data-category": CATEGORY,
            "data-category-id": CATEGORY_ID,
            "data-mapping": "pathname",
            "data-strict": "1",
            "data-reactions-enabled": "1",
            "data-emit-metadata": "0",
            "data-input-position": "top",
            "data-theme": "transparent_dark",
            "data-lang": "en",
            "data-loading": "lazy",
        }
        for (const [k, v] of Object.entries(attrs)) script.setAttribute(k, v)
        el.appendChild(script)
    }, [])

    return <div ref={ref} className="mt-16 max-w-2xl" />
}
