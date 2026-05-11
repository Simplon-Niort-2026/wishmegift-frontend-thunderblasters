

type Props = {
    className: string,
    children: React.ReactNode
}

export default function Text({ className, children }: Props){

    return(
        <p className={className && className}>
            {children}
        </p>
    )
}