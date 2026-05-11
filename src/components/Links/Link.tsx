
type Props = {
    href: string,
    title: string,
    className?: string,
    children: React.ReactNode
}

export default function Link({ href, title, className, children }: Props){

    return(
        <a href={href} title={title} className={className && className}>
            {children}
        </a>
    )
}
