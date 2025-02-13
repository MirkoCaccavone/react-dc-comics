import HeaderNav from "./HeaderNav";

// Header.jsx
export default function Header() {
    return (
        <header>
            <div className="container">
                <figure>
                    <img src="./img/dc-logo.png" alt="Logo" />
                </figure>

                <HeaderNav />

            </div>
        </header>
    );
}