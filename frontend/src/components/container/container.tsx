import "./container.css"
import React from "react";

export function Container(
    {children, className = ""} : {
        children: React.ReactNode | React.ReactNode[] | null,
        className?: string
    }
){
    return(
        <div className={"container " + className}>
            {children}
        </div>
    )
}