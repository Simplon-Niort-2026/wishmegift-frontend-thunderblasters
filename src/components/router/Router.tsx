import { useEffect, useState, type JSX } from "react";
import WishlistPage from "../pages/WishlistPage";
import GiftPage from "../pages/GiftPage";
import Loading from "../loading/Loading";
import NotFound from "../notFound/NotFound";
import { giftPageRegex, listPageRegex } from "../../configurations/navigation.config";


/**
 * 
 * J'ai créé un router pour que vous puissiez voir comment ça marche.
 * Il y a une bibliothèque React-router-dom pour faire ça mais comme il est plus évolué,
 * c'est plus dur à comprendre.
 * Pour changer de page, on se base sur l'url.
 * dans un site fait avec spring boot, une requete est faite au serveur pour qu'il retourne
 * la page. Mais pas la car c'est une single page application.
 * On affiche un composant en fonction du chemin (pathname) dans l'url
 */

export default function Router(){

    const [pathname] = useState<string | undefined>(window.location.pathname);
    const [page, setPage] = useState<JSX.Element>();
    const [loading, setLoading] = useState(true);
    

    
     /**
      * le useEffect est un hook qui permet ici de modifier la variable 'page' (ligne 22)
      * Si je l'avais modifier en dehors du useEffect, cela n'aurait eu aucun effet car
      * une fois le composant rendu et affiché, il ne se modifie que si on change son état.
      * et pour ça on passe par des hooks.
      */
    useEffect(()=>{
        if(loading){
            switch(pathname){
                case "/":
                    setPage(<WishlistPage />);
                    setLoading(false);
                    break;

                case giftPageRegex.test(pathname!):
                    const id = pathname?.match(giftPageRegex)![1] || "4";
                    setPage(<GiftPage id={Number(id)}/>);
                    setLoading(false);
                    break;
              
                default:
                    setPage(<NotFound />);
                    setLoading(false);
            }
        }
    }, [loading, setPage, setLoading])
    
    
    return (
        loading ? <Loading/> : page
    )

}