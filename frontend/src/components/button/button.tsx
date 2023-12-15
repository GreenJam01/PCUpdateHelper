import React from "react";
import "./button.css"

export function Button<T>(
    {children, className, type = "primary", filling = undefined, clickListener = ()=>{}, onFocus = ()=>{}, onBlur = ()=>{}}: {
        children: React.ReactNode,
        className?: string,
        type?: string,
        filling?: T,
        clickListener?: (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>, t:T) => void,
        onFocus?: ()=>void,
        onBlur?: ()=>void
    }
){
    let buttonType = "button--" + type + " ";
    return(
        <button
            className={"button "+ buttonType + className!}
            onClick={(event)=>{clickListener(event, filling!)}}
            onFocus={()=>{onFocus()}}
            onBlur={()=>{onBlur()}}>

            {children}
        </button>
    )
}
