'use client';
import Header from "@components/Header"
import Image from "next/image"
import { fira } from "@utils/font"

export default function Photos() {
    return (
        <Header>
            <div className="flex justify-center items-center">
                <div className="grid gap-14 mt-16">
                    <div>
                        <Image
                            src="/assets/ok-computer.jpg"
                            className=""
                            alt="logo"
                            width={700}
                            height={700}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'ok-computer', dec 14, 2023<br />
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/work-in-progress.jpg"
                            className=""
                            alt="logo"
                            width={700}
                            height={700}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'work-in-pr0gress', aug 25, 2023<br />
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/shadow-tree.jpg"
                            className=""
                            alt="logo"
                            width={800}
                            height={800}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'shadow-tree', oct 17, 2023<br />
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/highway-concerto.jpg"
                            className=""
                            alt="logo"
                            width={800}
                            height={800}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'highway-concerto', jul 9, 2022<br />
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/mentei.jpg"
                            className=""
                            alt="logo"
                            width={800}
                            height={800}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'mentei', jul 9, 2022<br />
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/quantum-syuto-highway.jpg"
                            className=""
                            alt="logo"
                            width={800}
                            height={800}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'quantum-syuto-highway', jul 9, 2022<br />
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/quatum-eye.jpg"
                            className=""
                            alt="logo"
                            width={800}
                            height={800}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'quatum-eye', jul 9, 2022<br />
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/assets/syuto-highway.jpg"
                            className=""
                            alt="logo"
                            width={800}
                            height={800}
                        />
                        <p className={`${fira.className} mt-2 text-md text-gray-400  underline underline-offset-8`}>
                            title: 'syuto-highway', jul 9, 2022<br />
                        </p>
                    </div>
                </div>
            </div >
        </Header>
    )
}