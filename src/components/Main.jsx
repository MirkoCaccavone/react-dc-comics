import Banner from "./Banner"

export default function Main() {
    return (
        <main>
            <div className="up-container-main">
                <div className="center-container">
                    <div className="content-main">
                        {">"} Content goes here {"<"}
                    </div>
                </div>
            </div>

            <Banner />
        </main>
    )
}