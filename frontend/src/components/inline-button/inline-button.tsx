import "./inline-button.css"

export function InlineButton<T>(
    {text, filling = undefined, clickListener = ()=>{}} : {
        text: string,
        filling?: T,
        clickListener?: (a:T | undefined) => void
    },
){
    return(
        <span className={"inline-button"} onClick={() => {clickListener(filling)}}>
            {text}
        </span>
    )
}