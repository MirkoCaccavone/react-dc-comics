

// esportiamo la funzione
export default function HeaderNav(props) {
    return (
        <>
            {/* cicliamo con map creando un altro array */}
            <nav>
                <ul>
                    {props.link.map((link) =>
                        <li key={link.id}>
                            <a href={link.url}>
                                <span>{link.text}</span>
                            </a>
                        </li>
                    )}
                </ul>
            </nav>

        </>
    )
}
