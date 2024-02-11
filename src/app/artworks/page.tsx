'use client';
import Header from "@components/Header"
import Image from "next/image"
import { fira } from "@utils/font"

export default function Artworks() {
    return (
        <Header>
            <div className="flex justify-center items-center">
                <div className="grid md:grid-cols-2 md:gap-28 mt-16 mr-20 sm:gap-20 sm:ml-7 mini:gap-10 supermini:gap-4">
                    <div>
                        <Image
                            src="/assets/flower-of-heart.jpg"
                            className=""
                            alt="logo"
                            width={800}
                            height={800}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'flower-of-heart', oct 19, 2023<br />
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/singularity.jpg"
                            className=""
                            alt="logo"
                            width={800}
                            height={800}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'singularity', oct 19, 2023<br />
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/under-the-bridge.jpg"
                            className=""
                            alt="logo"
                            width={800}
                            height={800}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'under-the-bridge', oct 13, 2023<br />
                        </p>
                    </div>
                </div>
            </div >
        </Header>
    )
}