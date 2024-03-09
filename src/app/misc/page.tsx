'use client';
import Header from "@components/Header"
import { fira } from "@utils/font"
import Link from "next/link"

export default function Misc() {
    return (
        <Header>
            <div className="mt-24 sm:ml-8 mini:ml-6 mini:mr-10">
                <div className="flex flex-col gap-5">
                    <div className="flex-row flex items-center gap-6 justify-between">
                        <Link href="/misc/hacker-mind-and-japanese-elaborate" className={`${fira.className} text-xl hover:text-gray-500 underline underline-offset-8`} onClick={() => { }}>
                            hacker mind and japanese elaborate
                        </Link>
                        <p className={`${fira.className} text-xs text-gray-400`}>
                            mar 9, 2024<br />
                        </p>
                    </div>
                </div>
            </div>
        </Header>
    )
}