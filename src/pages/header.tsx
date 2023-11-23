import Image from "next/image"
import { useRouter } from "next/router"
import { routes } from "./routes"
import { fira } from "@utils/font"
import Link from "next/link"

export default function Header() {
    const router = useRouter()
    return (
        <div className="flex justify-start items-start gap-12 mt-16 ml-24">
            <div className="grid gap-2 mt-6">
                <Image
                    src="/assets/artwork.png"
                    className=""
                    alt="logo"
                    width={100}
                    height={100}
                />
                <Link href="/about" className={`${fira.className} mt-4 ml-5 text-black hover:text-blue-600`} onClick={() => router.push(routes.about)}>
                    About
                </Link>
                <Link href="/writing" className={`${fira.className} ml-5 text-black hover:text-blue-600`} onClick={() => router.push(routes.writing)}>
                    Writing
                </Link>
                <Link href="/misc" className={`${fira.className} ml-5 text-black hover:text-blue-600`} onClick={() => router.push(routes.misc)}>
                    Misc
                </Link>
                <Link href="/artwork" className={`${fira.className} ml-5 text-black hover:text-blue-600`} onClick={() => router.push(routes.artwork)}>
                    Artwork
                </Link>
            </div>
            <div className="grid gap-10 mt-8 ml-8">
                <p className={`${fira.className} text-4xl mt-2`}>
                    gx14ac
                </p>
                <p className={`${fira.className} text-xs`}>
                    hi i'm gx14ac,<br />
                    development and CEO of runetale,<br />
                    here i will post my technical articles,<br />
                    i use Go a lot,<br />
                    interest include WASM, Compilier, Database, Machine Learning, and P2P mesh network.<br />
                    i often paint as a personal hobby,<br />
                    and i also play bass guitar and synthesizer,<br />
                    so I may upload some of my compositions.<br />
                </p>
            </div>
        </div>
    )
}

