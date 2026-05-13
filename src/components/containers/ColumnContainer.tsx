import Container from "./Container"

type Props = {
    className?: string,
    children: React.ReactNode
}

export default function ColumnContainer({className, children}: Props){
    const containerClassName = `column ${className && className}`.trim();
    return(
        <Container className={containerClassName}>
            {children}
        </Container>
    )
}