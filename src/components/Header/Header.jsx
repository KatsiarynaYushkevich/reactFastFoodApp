import "./header.scss"
import header_img from "../../assets/header_assets/header_img.png"
import logo from "../../assets/header_assets/header_logo.svg"
import {signOut} from "firebase/auth";
import {auth} from "../firebaseConfig.js"
import {useLocation} from "react-router";

export default function Header() {
    {
        const location = useLocation();

        const handleLogout = () => {
            signOut(auth)
                .then(() => {
                    console.log('Успешный выход');
                })
                .catch((error) => {
                    console.error('Не удалось выйти:', error);
                });
        };

        return (
            <div className='header_wrapper'>
                <div className='container header_content'>
                    <div className='header_btns'>
                        <div className='logo_buttons'>
                            <img className='header_logo' src={logo}/>
                            {location.pathname === "/" &&
                                <button className='logout_btn' onClick={handleLogout}>Выйти из аккаунта</button>
                            }

                        </div>
                    </div>
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
}