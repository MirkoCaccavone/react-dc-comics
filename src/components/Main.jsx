import Banner from "./Banner"
import ProductsList from "./cards/ProductsList"
// import ProductsList from "./cards/ProductsList"
import Jumbotron from "./Jumbotron"

export default function Main() {
    return (
        <main>
            <Jumbotron />

            <div className="up-container-main">
                <div className="center-container content-main">

                    <div className="current-series">
                        <a href="">CURRENT SERIES</a>
                    </div>


                    <ProductsList />

                    <div className="load-more">
                        <a href="">LOAD MORE</a>
                    </div>

                </div>
            </div>

            <Banner />
        </main>
    )
}