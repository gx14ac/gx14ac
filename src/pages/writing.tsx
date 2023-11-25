import Header from "./header"
import { fira } from "@utils/font"

export default function Writing() {
    return (
        <Header>
            <p className={`${fira.className} text-xs`}>
                writing<br />
            </p>
        </Header>
    )
}