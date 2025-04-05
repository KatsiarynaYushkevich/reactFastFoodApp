import cartItemData from "../../data/cartServer.json"
import delivery from "../../assets/delivery.svg"
import "./cart.scss"
import {changeQuantity} from "./helper/helper.js"
import {useState} from "react";

export default function Cart({stateCart}) {
    const {cart, setCart} = stateCart;
    const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const price = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const showDelivery = itemsCount > 7 || price > 2500;

    const [cartVisible, setCartVisible] = useState(true);

    const changeCartVisibility = () => {
        setCartVisible(!cartVisible);
    };
    console.log(cartVisible);


    return (
        <div className='cart_wrapper'>
            <div className={`cart_block`}>
                    <div className='items_counter' onClick={() => changeCartVisibility()}>
                        <span className='cart_name'>Корзина</span>
                        <span className='total_items'>{itemsCount}</span>
                    </div>

                <div className={`cart ${cartVisible === true ? 'visible' : 'hidden'}`}>
                    <div className='cart_items'>
                        {cartItemData.map((item) => (
                            <div className='item' key={item.id}>
                                <div className='item_block'>
                                    <div className='item_img'>
                                        <img src={item.img} alt={item.name}/>
                                    </div>
                                    <div className='item_info'>
                                        <div>
                                            <p>{item.name}</p>
                                            <span id='weight'>{item.weight}г</span>
                                        </div>
                                        <span>{item.price}₽</span>
                                    </div>
                                </div>
                                <div className='buttons'>
                                    <button id='decrease_btn'
                                            onClick={() => changeQuantity(item.id, -1, cart, setCart)}>-
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => changeQuantity(item.id, 1, cart, setCart)}>+</button>
                                </div>
                            </div>))}
                    </div>
                    <div className='final_price'>
                        <span>Итого</span>
                        <span>{price}</span>
                    </div>
                    <button id='order_btn'>Оформить заказ</button>

                    {showDelivery && (
                        <div className='delivery'>
                            <img src={delivery}/>
                            <p>Бесплатная доставка</p>
                        </div>)}
                </div>
            </div>
        </div>
    );
}