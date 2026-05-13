import DisconnectButton from "../buttons/DisconnectButton";
import MenuButton from "../buttons/MenuButton";
import './nav.css';

export default function Nav() {
    return (
        <nav>
            <MenuButton />
            <DisconnectButton />
        </nav>
    )
}