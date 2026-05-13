import type { ImageType } from "../../types/type"


export default function Image({ src, alt }: ImageType) {

    return (
        <img src={src} alt={alt} loading="lazy"/>
    )

}