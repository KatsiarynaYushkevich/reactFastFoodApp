import "./login.scss"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebaseConfig.js";

export default function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const LoginUser = (event) => {
        event.preventDefault();

        if (!formData.email) {
            setError('Вы должны ввести email');
            return;
        }
        if (!formData.password) {
            setError('Вы должны ввести пароль');
            return;
        }

        setError('');

        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                if (user) {
                    setFormData({
                        email: '',
                        password: '',
                    });
                    navigate('/');
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
                setError(errorMessage);
            });
    };

    return (
        <div className='login_wrapper'>
            <div className='login_form_wrapper'>
                <form className='login_form' onSubmit={LoginUser}>
                    <h2>Вход</h2>
                    {error && <p className="error-message">{error}</p>}
                    <input
                        type='email'
                        placeholder='Ваш email'
                        value={formData.email}
                        onChange={(event) => setFormData({...formData, email: event.target.value})}
                    />
                    <input
                        type='password'
                        placeholder='Пароль'
                        value={formData.password}
                        onChange={(event) => setFormData({...formData, password: event.target.value})}
                    />
                    <button type='submit'>Войти</button>
                    <div className='reg_link'>
                        <p>Нет аккаунта?</p>
                        <a onClick={() => navigate('/register')}>
                            <span>Зарегистрироваться</span>
                        </a>
                    </div>
                    <div className='reg_link'>
                        <a onClick={() => navigate('/forgot_password')}>
                            <p>Забыли пароль?</p>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}