'use client';
import { useRouter } from "next/navigation"
import Header from "@components/Header";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    return (
        <Header>
            <div className="prose dark:prose-invert text-slate-600 dark:text-slate-400 tracking-wide ml-6 mr-6 mt-10 mb-6" style={{ color: 'white' }}>{children}</div>
        </Header>
    )
}