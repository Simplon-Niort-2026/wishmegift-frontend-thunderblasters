import React from "react";
type prop ={
    className? : String;
    children : React.ReactNode;  
}


export default function H2({className, children} :prop ){
    return(
        <H2 className={className && className}>
           {children} 
        </H2>

    )

} 
