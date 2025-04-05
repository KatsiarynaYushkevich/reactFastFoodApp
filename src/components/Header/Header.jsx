import "./header.scss"
import header_img from "../../assets/header_assets/header_img.png"
import logo from "../../assets/header_assets/logo.svg"

export default function Header() {
    return (
        <div className='header_wrapper'>
            <div className='container header_content'>
                <img className='header_logo' src={logo}/>
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
    )
}