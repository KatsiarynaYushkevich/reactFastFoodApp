import Cart from "../Cart/Cart.jsx";
import ProductCards from "../ProductCard/ProductCards.jsx";
import {useState} from "react";
import ModalContainer from "../../components/ModalContainer/ModalContainer.jsx";
import getModalContent from "../../components/ModalContent/getModalContent.jsx";
import cartServer from "../../data/cartServer.json";

export default function Main({navActive}) {
    const [cart, setCart] = useState(cartServer);

    const stateCart = {cart, setCart};
    // const [modalOpen, setModalOpen] = useState(false);
    const [idShowModal, setIdShowModal] = useState(null);
    // const openModal = () => {
    //     setModalOpen(true);
    // };
    //
    // const closeModal = () => {
    //     setModalOpen(false);
    // };
    return (
        <>
            <Cart stateCart={stateCart} idShowModal={idShowModal} setIdShowModal={setIdShowModal}/>
            <div className='main_content'>
                <ProductCards navActive={navActive} setIdShowModal={setIdShowModal}/>
            </div>
        </>
    )
}