import Header from "@components/Header"

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <Header>
            <div className="ml-4 mr-6 mt-10 mb-6">
                <div className="prose dark:prose-invert text-slate-600 dark:text-slate-400 tracking-wide" style={{ color: 'white' }}>{children}</div>
            </div>
        </Header >
    )
}