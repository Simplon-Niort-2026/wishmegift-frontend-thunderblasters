import { useState } from "react";
import MenuButton from "../buttons/MenuButton";
import Menu from "./Menu";



export default function MenuHandler() {
    const [displayMenu, SetDisplayMenu] = useState(false);

    const toggleMenu = () => {
        SetDisplayMenu(!displayMenu);
    }

    return(
        <>
        <MenuButton callback={toggleMenu} />
        { displayMenu && <Menu toggleMenu={toggleMenu}/> }
        </>
    )
} 
