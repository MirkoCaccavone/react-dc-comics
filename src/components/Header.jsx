import HeaderNav from "./HeaderNav";



// Header.jsx

export default function Header(props) {
    return (
        <header>
            <div className="container">
                <figure>
                    <img src="./img/dc-logo.png" alt="Logo" />
                </figure>

                <HeaderNav link={props.link} />

            </div>
        </header>
    );
}