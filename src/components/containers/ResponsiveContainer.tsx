import Container from "./Container"


/**
 * this container has flex-direction: column for smartphone
 * and flex-direction: row for desktop
 */
type Props = {
    className?: string,
    children: React.ReactNode
}

export default function ResponsiveContainer({className, children}: Props){
    const containerClassName = `responsive ${className && className}`.trim();
    return(
        <Container className={containerClassName}>
            {children}
        </Container>
    )
}