import type { ImageType } from "../../types/type";
import Image from "../images/Image";

type Props = {
    array: string[] | ImageType[];
    
}


export default function List({ array }: Props) {
        
    const listItems = array.map(element => {
        return typeof element === "string"? 
        <li>{element}</li> 
        : <li><Image src={element.src} alt={element.alt}/></li>
    })
    
    return (
        <ul>{listItems}</ul>
    )
    
}