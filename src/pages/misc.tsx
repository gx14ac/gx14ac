import Header from "./header"
import { fira } from "@utils/font"

export default function Misc() {
    return (
        <Header>
            <p className={`${fira.className} text-xs`}>
                misc<br />
            </p>
        </Header>
    )
}