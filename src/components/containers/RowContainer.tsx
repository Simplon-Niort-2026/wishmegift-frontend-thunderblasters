import Container from "./Container"

type Props = {
    className?: string,
    children: React.ReactNode
}

export default function RowContainer({className, children}: Props){
    const containerClassName = `row ${className && className}`.trim();
    return(
        <Container className={containerClassName}>
            {children}
        </Container>
    )
}