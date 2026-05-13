import type { ImageType } from "../../types/type";
import Image from "../images/Image";

type Props = {
    className?: string;
    array: string[] | ImageType[];
    
}


export default function List({ className, array }: Props) {
        
    const listItems = array.map(element => {
        return typeof element === "string"? 
        <li>{element}</li> 
        :
        <li>
            <Image src={element.src} alt={element.alt}/>
        </li>
    })
    
    return (
        <ul className={className && className}>{listItems}</ul>
    )
    
}