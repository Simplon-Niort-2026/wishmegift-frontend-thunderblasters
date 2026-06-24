import Button from "../buttons/Button";
import ColumnContainer from "../containers/ColumnContainer";
import Text from "../text/Text";
import { db } from "../../services/databaseMocked";
import "./cardInfo.css";
import H1 from "../heading/H1";
import Image from "../images/Image";
import Link from "../links/Link";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

function reserved() {
    alert('afficher le Vous avez réservé.');
}

type Props = { id: number };

export default function CardInfo({ id }: Props) {

    const gift = db.findGiftById(id);

    return (
        <ColumnContainer className="cardInfo">

            <Link href="/" aria-label="retour à la page d'accueil"><FaRegArrowAltCircleLeft size={30} /></Link>
            <H1>{gift.title}</H1>

            <div className="cardLayout">

                <div className="image">
                    <Image src={gift.img.src} alt={gift.img.alt} />
                </div>

                <div className="cardContent">

                    <Text>{gift.description}</Text>

                    <ul>
                        {gift.characteristics.map((c, index) => (
                            <li key={index}>{c}</li>
                        ))}
                    </ul>

                    <div className="bottomRow">
                        <Text>{gift.price}€</Text>

                        <Button onClick={reserved} className="butonReserver">
                            Je réserve
                        </Button>
                    </div>

                </div>

            </div>

        </ColumnContainer>
    );
}