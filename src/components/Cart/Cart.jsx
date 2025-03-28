import cartItemData from "../../data/cartItemsData.json";
import delivery from "../../assets/delivery.svg"
import "./cart.scss"
import {useEffect, useState} from "react";
import CartItem from "../CartItem/CartItem.jsx";

export default function Cart() {
    const [activeCartItem, setActiveCartItem] = useState(null);

    function handleClick(index) {
        setActiveCartItem(index === activeCartItem ? null : index)
    }

    const [totalPrice, setTotalPrice] = useState(911.5); // тут ошибка
    const [totalItems, setTotalItems] = useState(3);

    const changeTotal = (newTotalItems, newTotalPrice) => {
        setTotalItems(newTotalItems);
        setTotalPrice(newTotalPrice);
    };

    useEffect(() =>{
     (totalItems> 7 || totalPrice > 2500) ?
         document.querySelector('.delivery').style.display='flex' :
         document.querySelector('.delivery').style.display='none';
    }, [totalPrice, totalItems])

    return (
        <div className='cart_wrapper'>
            <div className='cart'>
                <div className='items_counter'>
                    <span id='cart'>Корзина</span>
                    <span id='total_items'>{totalItems}</span>
                </div>
                <div className='cart_items'>
                    {cartItemData.map((item) => (
                        <CartItem
                            key={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            weight={item.weight}
                            active={item.id === activeCartItem}
                            onClick={() => handleClick(item.id)}
                            totalItems={totalItems}
                            totalPrice={totalPrice}
                            changeTotalValues={changeTotal}
                        />

                    ))}
                </div>
                <div className='final_price'>
                    <span>Итого</span>
                    <span>{totalPrice}</span>
                </div>
                <button id='order_btn'>Оформить заказ</button>
                <div className='hidden delivery'>
                    <img src={delivery}/>
                    <p>Бесплатная доставка</p>
                </div>
            </div>
        </div>
    );
}