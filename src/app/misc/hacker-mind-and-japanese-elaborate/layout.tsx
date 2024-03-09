'use client';
import { useRouter } from "next/navigation"
import Header from "@components/Header";
import Image from "next/image";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    return (
        <Header>
            <div className="prose dark:prose-invert text-slate-600 dark:text-slate-400 tracking-wide ml-4 mr-6 mt-10 mb-6" style={{ color: 'white' }}>{children}</div>
            <Image
                src="/assets/first-hike7.png"
                className=""
                alt="logo"
                width={700}
                height={700} />
        </Header>
    )
}