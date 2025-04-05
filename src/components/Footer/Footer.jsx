import "./footer.scss"
import logo from "../../assets/footer_assets/footer_logo.svg"
import phone_icon from "../../assets/footer_assets/phone_icon.svg"
import vk_icon from "../../assets/footer_assets/vk_icon.svg"
import telegram_icon from "../../assets/footer_assets/telegram_icon.svg"


export default function Footer() {
    return (
        <div className='footer_wrapper'>
            <div className=''>
                <div className='footer_info'>
                    <div className='footer_logo'>
                    <img src={logo}/>
                </div>
                <div className='contacts'>
                    <div className='contacts_info'>
                        <p className='contact_header'>Номер для заказа</p>
                        <div className='phone'>
                            <img src={phone_icon}/>
                            <p><a href="tel:+7(930)833-38-11">+7(930)833-38-11</a></p>
                        </div>
                    </div>
                    <div className='contacts_info'>
                        <p className='contact_header'>Мы в соцсетях</p>
                        <div className='footer_icons'>
                            <a>
                                <img src={vk_icon}/>
                            </a>
                            <a>
                                <img src={telegram_icon}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='copyrights'>
                <p>&copy; YouMeal, 2022</p>
                <p>Design: Anastasia Ilina</p>
            </div>
        </div>

    )
}