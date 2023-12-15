import {Button} from "../button/button";
import {useNavigate} from "react-router-dom";

export function LinkButton<T>(
    {children, className, type = "primary", href = "/"}: {
        children: string,
        className?: string,
        type?: string,
        href?: string
    }
){
    const navigate = useNavigate();

    return(
        <Button className={className} type={type} clickListener={()=>{navigate(href)} }>{children}</Button>
    )
}