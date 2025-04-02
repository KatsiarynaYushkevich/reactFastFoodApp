import './App.scss'
import Header from "../components/Header/Header.jsx";
import Nav from "../components/Nav/Nav.jsx";
import {useState} from "react";
import Cart from "../components/Cart/Cart.jsx";
import cartServer from "../data/cartServer.json"
// import productServer from "../data/productServer.json"

function App() {
    const [cart, setCart] = useState(cartServer);
    // const [product, setProduct] = useState(productServer);
    const [navActive, setNavActive] = useState({
        "name" : "Бургеры",
        "icon": "burgerIcon",
        "group": "burgers",
        "id": "1"
    });

    const stateCart = {cart, setCart};
    // const stateProduct = {product, setProduct};
    const stateNavActive = {navActive, setNavActive};
    return (
        <>
            <Header/>
            <main className='container main_wrapper'>
                <div className='header_nav'>
                    <Nav stateNavActive={stateNavActive}/>
                </div>
                <div>
                    <Cart stateCart={stateCart}/>
                    <div className='main_content'>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
