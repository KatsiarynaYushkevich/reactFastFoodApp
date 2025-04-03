import './App.scss'
import Header from "../components/Header/Header.jsx";
import Nav from "../components/Nav/Nav.jsx";
import {useEffect, useState} from "react";
import Cart from "../components/Cart/Cart.jsx";
import cartServer from "../data/cartServer.json"
import productServer from "../data/productServer.json"
import ProductCards from "../components/ProductCard/ProductCards.jsx";

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

    const [product, setProduct] = useState(productServer[navActive.group]);
    const stateProductActive = {product, setProduct};

    useEffect(() => {
        const foundProduct = productServer[navActive.group];
        setProduct(foundProduct);
    }, [navActive]);

    return (
        <>
            <Header/>
            <main className='container main_wrapper'>
                <div className='header_nav'>
                    <Nav stateNavActive={stateNavActive}/>
                </div>
                <div className='main'>
                    <Cart stateCart={stateCart}/>
                    <div className='main_content'>
                        <h2>{stateProductActive.product.title}</h2>
                        <div className='products_cards'>
                            <ProductCards stateProductActive={stateProductActive}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
