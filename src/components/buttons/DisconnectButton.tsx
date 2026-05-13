import Button from '../buttons/Button';


export default function DisconnectButton() {
    const disconnect = () => {
        return alert("Deconnexion");
    }
    return (
        <Button className='menu-btn' onClick={disconnect}>
            Se deconnecter
        </Button>
    )
}