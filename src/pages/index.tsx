import Sidebar from "./sidebar"
import Header from "./header"
import { fira } from "@utils/font"

export default function Home() {
  return (
    <div>
      <div className="flex justify-start items-center gap-40">
        <Sidebar />
        <Header />
      </div>
      <div>
        <p className={`${fira.className} flex justify-center items-center`}>
          Blog Content
        </p>
      </div>
    </div>
  )
}