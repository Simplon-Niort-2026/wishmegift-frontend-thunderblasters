import type { ImageType } from "../../types/type";
import Image from "../images/Image";
import Link from "../links/Link";

type ImageWithLink = ImageType & {id: number};
type Props = {
    className?: string;
    array: string[] | ImageWithLink[];
    
}


export default function List({ className, array }: Props) {
        
    const listItems = array.map(element => {
        return typeof element === "string"? 
        <li key={element}>{element}</li> 
        :
        <li key={element.id}>
            <Link href={`/gift/${element.id}`} title="voir plus de détail">
                <Image src={element.src} alt={element.alt}/>
            </Link>
        </li>
    })
    
    return (
        <ul className={className && className}>{listItems}</ul>
    )
    
}