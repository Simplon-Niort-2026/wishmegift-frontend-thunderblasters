import Button from "./Button"
import { IoMenu } from "react-icons/io5"
import './burgerMenu.css';

export default function BurgerMenu() {
    const displayMenu = () => {
        alert('afficher le menu')
    } 
    return (
        <Button className='burger-menu' onClick={displayMenu}>
            <IoMenu size={30} />
        </Button>
    )
}