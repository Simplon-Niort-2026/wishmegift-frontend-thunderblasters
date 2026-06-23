import ColumnContainer from "../containers/ColumnContainer";
import H2 from "../heading/H2";
import Link from "../links/Link";

export default function Menu() {

    return (
        <ColumnContainer className="menu">
            <H2>DashBoard</H2>
            <ColumnContainer>
                <Link href="#">Acceuil</Link>
                <Link href="#">Mes listes</Link>
                <Link href="#">Créer une nouvelle liste</Link>
                <Link href="#">Mes listes à partager</Link>
            </ColumnContainer>
        </ColumnContainer>
    )

}