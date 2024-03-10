import Header from "@components/Header"
import Image from "next/image"

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <Header>
            <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 tracking-wide" style={{ color: 'white' }}>{children}</div>
        </Header >
    )
}