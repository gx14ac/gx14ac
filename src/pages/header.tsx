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
        <div className="md:flex md:justify-start md:items-start md:gap-36 md:mt-32 md:ml-20 lg:ml-44">
            <div className="md:grid md:gap-6 md:mt-6 sm:mt-10 sm:flex sm:items-center sm:justify-evenly sm:mr-40">
                <Image
                    src="/assets/artwork.png"
                    className="mini:invisible md:visible sm:visible"
                    alt="logo"
                    width={100}
                    height={100}
                />
                <Link href="/" className={`${fira.className} ml-5 text-lg hover:text-blue-600 mini:text-base`} onClick={() => router.push('/')}>
                    About
                </Link>
                <Link href="/writing" className={`${fira.className} ml-5 text-lg hover:text-blue-600 mini:text-base`} onClick={() => router.push('/writing')}>
                    Writing
                </Link>
                <Link href="/misc" className={`${fira.className} ml-5 text-lg hover:text-blue-600 mini:text-base`} onClick={() => router.push('/misc')}>
                    Misc
                </Link>
                <Link href="/artwork" className={`${fira.className} ml-5 text-lg hover:text-blue-600 mini:text-base`} onClick={() => router.push('/artwork')}>
                    Artwork
                </Link>
                <Link href="/improvisation" className={`${fira.className} ml-5 text-lg hover:text-blue-600 mini:text-base`} onClick={() => router.push('improvisation')}>
                    Impr
                </Link>
            </div>
            <div className="mt-8 mini:mt-16">
                {children}
            </div>
        </div >
    )
}

