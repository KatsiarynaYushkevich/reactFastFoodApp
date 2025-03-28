import "./cart_item.scss"
import {useState} from "react"
import burger_img from "../../assets/burger_img.png"
// import hotdog_img from "../../assets/hotdog_img.png"
// import french_fries_img from "../../assets/french_fries_img.png"

export default function CartItem(props) {
    const [itemsNumber, setItemsNumber] = useState(1);
    const [price, setPrice] = useState(props.price);
    const [weight, setWeight] = useState(props.weight);
    const increaseItemsNumber = () => {
        let newItemsNumber = itemsNumber;
        let newPrice = +price;
        let newWeight = +weight;
        setItemsNumber(newItemsNumber + 1);
        setPrice(newPrice + +props.price);
        setWeight(newWeight + +props.weight);

        props.changeTotalValues(props.totalItems + 1, props.totalPrice + +props.price);
    };
    const decreaseItemsNumber = () => {
        let newItemsNumber = itemsNumber;
        let newPrice = +price;
        let newWeight = +weight;
        if (newItemsNumber > 1) {
            setItemsNumber(newItemsNumber - 1);
            setPrice(newPrice - +props.price);
            setWeight(newWeight - +props.weight);

            props.changeTotalValues(props.totalItems - 1, props.totalPrice - +props.price);
        }
    };

    return (
        <div className='item' key={props.id}>
            <div className='item_block'>
            <div className='item_img'>
                <img src={burger_img} alt={props.name}/>
            </div>
            <div className='item_info'>
                <div>
                    <p>{props.name}</p>
                    <span id='weight'>{weight}г</span>
                </div>
                <span>{price}₽</span>
            </div>
            </div>
            <div className='buttons'>
                <button id='decrease_btn' onClick={() => decreaseItemsNumber()}>-</button>
                <span>{itemsNumber}</span>
                <button onClick={() => increaseItemsNumber()}>+</button>
            </div>
        </div>
    )
}

