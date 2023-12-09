import Header from "./header"
import { fira } from "@utils/font"
import Link from "next/link"

export default function Writing() {
    return (
        <Header>
            <div className="mt-24 sm:ml-14 mini:ml-6">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row items-center gap-6 justify-between">
                        <Link href="/writing/udp-hole-punching" className={`${fira.className} text-xl hover:text-gray-500 underline underline-offset-8`} onClick={() => { }}>
                            udp hole punching
                        </Link>
                        <p className={`${fira.className} text-xs text-gray-400`}>
                            nov 25, 2023<br />
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-6 justify-between">
                        <Link href="/writing/udp-hole-punching" className={`${fira.className} text-xl hover:text-gray-500 underline underline-offset-8`} onClick={() => { }}>
                            wireguard
                        </Link>
                        <p className={`${fira.className} text-xs text-gray-400`}>
                            nov 25, 2023<br />
                        </p>
                    </div>
                </div>
            </div>
        </Header>
    )
}