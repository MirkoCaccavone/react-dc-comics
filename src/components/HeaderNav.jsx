

// esportiamo la funzione
export default function HeaderNav(props) {
    return (
        <>
            {/* cicliamo con map creando un altro array */}
            <nav>
                <ul>
                    {props.links.map((link) =>
                        <li><a href={link.url}><span>{link.text}</span></a></li>
                    )}
                </ul>
            </nav>

        </>
    )
}
