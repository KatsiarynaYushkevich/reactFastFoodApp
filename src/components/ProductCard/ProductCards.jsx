import "./product_cards.scss"
import productServer from "../../data/productServer.json"

export default function ProductCards({navActive}) {
    const {title, items} = productServer[navActive.group];

    return (
        <>
            <h2>{title}</h2>
            <div className='products_cards'>
                {items.map(item => (
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

                ))}
            </div>
        </>
    );
}

