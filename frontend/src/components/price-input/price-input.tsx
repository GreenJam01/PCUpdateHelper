import "./input.css"
import React, {useState} from "react";

export function PriceInput(
    {label, type = "text", className}: {
        label: string,
        type?: string,
        className?:string,
    }
){

    const [text, setText] = useState("");
    return(
        <div className={"input"}>
            <span className={"input__label"}>{label}</span>
            <input
                type={type}
                className={"input__field " + className}
                onChange={e => setText(e.target.value.replace(/[^0-9]/g, ""))}
                value={text}
            />
        </div>
    )
}