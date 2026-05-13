import "./container.css";

type Props = {
    className: string,
    children: React.ReactNode
}

export default function Container({ className, children }:Props){

    const containerClassName = `container ${className && className}`.trim();
    return(
        <div className={containerClassName}>
            { children }
        </div>
    )
}