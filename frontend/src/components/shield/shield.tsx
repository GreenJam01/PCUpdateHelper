import React from "react";
import "./shield.css"

export function Shield(
    {children, className}:{
        children: React.ReactNode,
        className?: string
    }
){
    return(
        <div className={"shield " + className}>
            {children}
        </div>
    )
}