type Props = {
    className? : string;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
    children: React.ReactNode;
}

export default function Button({ className, onClick, children }: Props) {
    return (
        <button className={className && className} onClick={onClick}>
            {children}
        </button>
    )
}