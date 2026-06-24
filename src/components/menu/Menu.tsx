import CloseMenuButton from "../buttons/CloseMenuButton";
import ColumnContainer from "../containers/ColumnContainer";
import H2 from "../heading/H2";
import Link from "../links/Link";
import "./menu.css";

type Props = {
    toggleMenu: () => void;
}


export default function Menu({toggleMenu}: Props) {

    return (
        <ColumnContainer className="sidebar">
            <H2 className="title">DashBoard</H2>
            <CloseMenuButton callback={toggleMenu} />
            <ColumnContainer className="menu-link">
                <Link className="link" href="#">Acceuil</Link>
                <Link className="link" href="#">Mes listes</Link>
                <Link className="link" href="#">Créer une nouvelle liste</Link>
                <Link className="link" href="#">Mes listes à partager</Link>
            </ColumnContainer>
        </ColumnContainer>
    )

}