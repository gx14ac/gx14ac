export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-black">
            <article>
                {children}
            </article>
        </div>
    )
}
