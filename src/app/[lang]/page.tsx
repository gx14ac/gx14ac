import Header from "@components/Header"
import { fira } from "@utils/font"
import Link from "next/link"
import Image from "next/image"
import { dict, type Locale } from "@utils/i18n"

export default function Home({ params }: { params: { lang: Locale } }) {
  return (
    <>
      <Header>
        <div className="grid gap-10">
          <p className={`${fira.className} text-4xl mt-2`}>
            gx14ac
          </p>
          <p className={`${fira.className} text-md`}>
            {dict[params.lang].bio.map((line) => (
              <span key={line}>{line}<br /></span>
            ))}
          </p>
          <div className="flex justify-start items-start gap-4">
            <Link href="https://github.com/gx14ac">
              <Image
                src="/assets/github-mark-white.png"
                alt="logo"
                className=""
                width={20}
                height={20}
              />
            </Link>
            <Link href="https://twitter.com/shintaoku">
              <Image
                src="/assets/x-logo.png"
                alt="logo"
                className=""
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </Header>
    </>
  )
}