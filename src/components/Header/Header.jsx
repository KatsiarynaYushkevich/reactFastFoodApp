import "./header.scss"
import header_img from "../../assets/header_assets/header_img.png"
import logo from "../../assets/header_assets/logo.svg"
import burger_icon from "../../assets/header_assets/burger_icon.svg"
import snacks_icon from "../../assets/header_assets/snacks_icon.svg"
import hotdog_icon from "../../assets/header_assets/hotdog_icon.svg"
import combo_icon from "../../assets/header_assets/combo_icon.svg"
import burrito_icon from "../../assets/header_assets/burrito_icon.svg"
import pizza_icon from "../../assets/header_assets/pizza_icon.svg"
import noodles_icon from "../../assets/header_assets/noodles_icon.svg"

export default function Header() {
    return (
        <header>
            <div className="header_wrapper">
                <div className='container header_content'>
                    <img src={logo}/>
                    <div className='header_items'>
                        <div className='header_img'>
                            <img src={header_img}/>
                        </div>
                        <div className='header_text'>
                            <h1>Только самые <p className='orange'>сочные бургеры!</p></h1>
                            <p className='delivery_text'>Бесплатная доставка от 599₽</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container header_nav'>
                <a className='nav_item'>
                    <img src={burger_icon}/>
                    <span>Бургеры</span>
                </a>
                <a className='nav_item'>
                    <img src={snacks_icon}/>
                    <span>Закуски</span>
                </a>
                <a className='nav_item'>
                    <img src={hotdog_icon}/>
                    <span>Хот-доги</span>
                </a>
                <a className='nav_item'>
                    <img src={combo_icon}/>
                    <span>Комбо</span>
                </a>
                <a className='nav_item'>
                    <img src={burrito_icon}/>
                    <span>Шаурма</span>
                </a>
                <a className='nav_item'>
                    <img src={pizza_icon}/>
                    <span>Пицца</span>
                </a>
                <a className='nav_item'>
                    <img src={noodles_icon}/>
                    <span>Вок</span>
                </a>
                <a>Десерты</a>
                <a>Соусы</a>
            </div>
        </header>
    )
}