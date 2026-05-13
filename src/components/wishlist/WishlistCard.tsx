import { db } from "../../services/databaseMocked"
import ColumnContainer from "../containers/ColumnContainer";
import H2 from "../heading/H2";
import List from "../lists/List";
import "./wishlistcard.css"


export default function WishListCard() {
    const wishlist = db.findList();
    const giftList = wishlist.gifts;
    const giftImg = giftList.map(gift => gift.img)
    return (
        
        <ColumnContainer className="listCard bg-light column">
            <H2 className="content">{wishlist.title}</H2>
            <p className="content">{wishlist.author}</p>
            <p className="content">{wishlist.createAt}</p>
            <ColumnContainer className="description-container bg-lighter ">
                <p className="content description">{wishlist.description}</p>
                <List className="giftList" array={giftImg}/>
            </ColumnContainer>
        </ColumnContainer>
        
    )
}