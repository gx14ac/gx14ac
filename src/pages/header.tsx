import Image from "next/image"
import { useRouter } from "next/router"
import { fira } from "@utils/font"
import Link from "next/link"

type ComponentProps = {
    children: React.ReactNode
}

export default function Header({ children }: ComponentProps) {
    const router = useRouter()
    return (
        <div className="md:flex md:justify-start md:items-start md:gap-40 md:mt-16 md:ml-32 sm:flex-row">
            <div className="md:grid md:gap-2 md:mt-6">
                <Image
                    src="/assets/artwork.png"
                    className=""
                    alt="logo"
                    width={100}
                    height={100}
                />
                <Link href="/" className={`${fira.className} mt-4 ml-5 hover:text-blue-600`} onClick={() => router.push('/')}>
                    About
                </Link>
                <Link href="/writing" className={`${fira.className} ml-5 hover:text-blue-600`} onClick={() => router.push('/writing')}>
                    Writing
                </Link>
                <Link href="/misc" className={`${fira.className} ml-5 hover:text-blue-600`} onClick={() => router.push('/misc')}>
                    Misc
                </Link>
                <Link href="/artwork" className={`${fira.className} ml-5 hover:text-blue-600`} onClick={() => router.push('/artwork')}>
                    Artwork
                </Link>
                <Link href="/improvisation" className={`${fira.className} ml-5 hover:text-blue-600`} onClick={() => router.push('improvisation')}>
                    Improvisation
                </Link>
            </div>
            <div className="grid gap-10 mt-8">
                {children}
            </div>
        </div >
    )
}

