import React from "react";
import "./h2.css";
type Props ={
    className? : string;
    children : React.ReactNode;  
}


export default function H2({className, children} :Props ){
    return(
        <h2 className={className && className}>
           {children} 
        </h2>

    )

} 
