import {HEADER_COLOR} from "../../utils/constants"

export default function styles(hover: boolean) {
    const shadow = "0.2em 0.2em " + HEADER_COLOR
    const border = "0.2em solid " + HEADER_COLOR

    return {
        minWidth: "90%",
        width: "90%",
        height: "35vh",
        boxSizing: "border-box",
        padding: "1em",
        boxShadow: hover ? shadow : "none",
        border: hover ? border : "none",
        borderRadius: "0.7em"
    }
}