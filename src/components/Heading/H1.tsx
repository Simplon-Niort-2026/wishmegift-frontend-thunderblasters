type Props = {
    className? : string;
    children: string;
}

export default function H1({className, children}: Props) {

    return (
        <h1 className={className && className}> 
            {children}
        </h1>
    )

}