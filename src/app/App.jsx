import './App.scss'
import Header from "../components/Header/Header.jsx";
import Nav from "../components/Nav/Nav.jsx";
import {useState} from "react";
import Cart from "../components/Cart/Cart.jsx";
import ProductCards from "../components/ProductCard/ProductCards.jsx";
import Footer from "../components/Footer/Footer.jsx";
import cartServer from "../data/cartServer.json"

function App() {
    const [cart, setCart] = useState(cartServer);
    const [navActive, setNavActive] = useState({
        "name": "Бургеры",
        "icon": "burgerIcon",
        "group": "burgers",
        "id": "1"
    });

    const stateCart = {cart, setCart};
    const stateNavActive = {navActive, setNavActive};

    return (
        <>
            <header>
                <Header/>
                <div className='container header_nav'>
                    <Nav stateNavActive={stateNavActive}/>
                </div>
            </header>
            <main className='container main_wrapper'>
                <div className='main'>
                    <Cart stateCart={stateCart}/>
                    <div className='main_content'>
                        <ProductCards navActive = {navActive}/>
                    </div>
                </div>
            </main>
            <footer className='footer'>
                <div className='container'>
                <Footer/>
                </div>
            </footer>
        </>
    )
}

export default App
