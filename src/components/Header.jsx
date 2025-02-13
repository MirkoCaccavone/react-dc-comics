import HeaderNav from "./HeaderNav";



// Header.jsx

export default function Header(props) {
    return (
        <header>
            <div className="header-container center-container">

                <img src="./img/dc-logo.png" alt="Logo" />


                <HeaderNav link={props.link} />

            </div>
        </header>
    );
}