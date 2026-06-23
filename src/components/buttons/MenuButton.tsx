import Button from '../buttons/Button';


type Props = {
    callback: ()=> void
}

export default function MenuButton({ callback }: Props) {
   
    return (
        <Button className='menu-btn' onClick={callback}>
            Menu
        </Button>
    )
}