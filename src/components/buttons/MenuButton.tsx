import Button from '../buttons/Button';


export default function MenuButton() {
    const displayMenu = () => {
        return alert("Afficher le menu");
    }
    return (
        <Button className='menu-btn' onClick={displayMenu}>
            Menu
        </Button>
    )
}