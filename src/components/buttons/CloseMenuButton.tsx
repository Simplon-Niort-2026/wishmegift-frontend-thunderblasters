import Button from "./Button";


type Props = {
    callback: () => void;
}

export default function CloseMenuButton({callback}: Props) {

    return (
        <Button className="close-menu-btn" onClick={callback}>
            X
        </Button>
    )
}