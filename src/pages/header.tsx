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
        <div className="md:flex md:justify-start md:items-start md:gap-40 md:mt-16 md:ml-36 mini:ml-4">
            <div className="md:grid md:gap-4 md:mt-6 sm:mt-10 sm:flex sm:items-center sm:justify-evenly">
                <Image
                    src="/assets/artwork.png"
                    className="mini:invisible md:visible sm:visible"
                    alt="logo"
                    width={100}
                    height={100}
                />
                <Link href="/" className={`${fira.className} ml-5 hover:text-blue-600`} onClick={() => router.push('/')}>
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
            <div className="mt-8">
                {children}
            </div>
        </div >
    )
}

