import {useNavigate} from "react-router-dom";
import {useState} from "react";
import "./forgot.scss"

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    return (
        <div className='login_wrapper'>
            <div className='forgot_form_wrapper'>
                <form className='login_form'>
                    <h2>Сбросить пароль</h2>
                    <input type='email' placeholder='Ваш email'
                           value={email} onChange={()=>setEmail(event.target.value)}/>
                    <button type='submit'>Войти</button>
                    <div className='reg_link'>
                        <a onClick={() => navigate("/login")}><p>На страницу входа</p></a>
                    </div>
                </form>
            </div>
        </div>
    )
}