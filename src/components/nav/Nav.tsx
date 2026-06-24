import DisconnectButton from "../buttons/DisconnectButton";
import MenuHandler from "../menu/MenuHandler";
import './nav.css';

export default function Nav() {
    return (
        <nav>
            <MenuHandler />
            <DisconnectButton />
        </nav>
    )
}