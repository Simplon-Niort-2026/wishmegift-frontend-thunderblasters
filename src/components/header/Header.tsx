import './header.css';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';
import BurgerMenu from '../buttons/BurgerMenu';
import GiftList from '../lists/GiftList';

export default function() {
    
    return (
        <header>
            <Logo />
            <BurgerMenu />
            <Nav />
        </header>
    )
}