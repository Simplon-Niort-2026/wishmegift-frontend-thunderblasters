import H1 from "../heading/H1";
import GiftList from "../lists/GiftList";

type Props = {
    id: number
}

export default function GiftPage({id}: Props){

    return (
        <>
            <H1>WISHMEGIFT PAGE CADEAU</H1>
            <GiftList />
        </>
    )
}