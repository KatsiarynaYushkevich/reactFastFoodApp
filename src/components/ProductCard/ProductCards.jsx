import "./product_cards.scss"
import {useState} from "react";


export default function ProductCards({stateProductActive}) {
    // console.log(stateProductActive.product.items.map((item) => console.log(item.name)));
    return (
        // <></>
        (stateProductActive.product.items.map((item) => (
            <div className='card_wrapper' key={item.id}>
                <div className='card'>
                    <div className='product_info'>
                        <div className='product_img'>
                            <img src={item.img} alt={item.name}/>
                        </div>
                        <span id='item_price'>{item.price}₽</span>
                        <span id='item_name'>{item.name}</span>
                    </div>
                    <div className='product_btn'>
                        <span>{item.weight}г</span>
                        <button>Добавить</button>
                    </div>
                </div>
            </div>
        )))
    )
}

