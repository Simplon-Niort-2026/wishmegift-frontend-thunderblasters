import ColumnContainer from "../containers/ColumnContainer";
import H1 from "../heading/H1";
import Link from "../links/Link";
import Text from "../text/Text";
import "./notFound.css";


export default function NotFound(){
    return(
        <ColumnContainer className="not-found">
            <H1>
                page non trouvé
            </H1>
            <Text>
                Erreur <span>404</span>
            </Text>
            <Link href="/" title="aller à la page d'accueil">
                Retourner à la page d'accueil
            </Link>
        </ColumnContainer>
    )
}