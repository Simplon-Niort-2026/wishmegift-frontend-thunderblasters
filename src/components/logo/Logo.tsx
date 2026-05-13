import Image from "../images/Image";
import Link from "../links/Link";


export default function Logo() {
    return (
        <Link href="/" title="logo">
            <Image
                src="/images/logo.webp" 
                alt="logo de l'application"
            />
        </Link>
    )
}