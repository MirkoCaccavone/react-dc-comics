export default function FooterLinks(props) {
    return (
        <ul>
            {props.linkCategory.map(link => (
                <li key={link.id}>
                    {link.text}
                </li>
            ))}
        </ul >
    )
}

// poi lo facciamo con i link ma dobbiamo modificare il css


// export default function FooterLinks(props) {
//     return (
//         <ul>
//             {props.linkCategory.map(link => (
//                 <li key={link.id}  >
//                     <a href={link.url}>{link.text}</a>
//                 </li>
//             ))}
//         </ul >
//     )
// }