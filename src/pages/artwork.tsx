import Header from "./header"
import { fira } from "@utils/font"

export default function Artwork() {
    return (
        <Header>
            <p className={`${fira.className} text-xs`}>
                artwork<br />
            </p>
        </Header>
    )
}