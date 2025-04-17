import "./register.scss"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebaseConfig.js"

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordCheck: '',
    });
    const [error, setError] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if (!formData.email) {
            setError('Вы должны ввести email');
            return;
        }
        if (!formData.password) {
            setError('Вы должны ввести пароль');
            return;
        }
        if (!formData.passwordCheck) {
            setError('Нужно подтвердить пароль');
            return;
        }

        if (formData.password !== formData.passwordCheck) {
            setError('Введенные пароли не совпадают');
            return;
        }

        if (!error) {
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredentials) => {
                    const user = userCredentials.user;
                    setFormData({
                        name: '',
                        email: '',
                        password: '',
                        passwordCheck: ''
                    });
                    navigate("/login");
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message();
                    console.log(errorCode, errorMessage);
                    setError(errorMessage);
                });
        }
    }

    return (
        <div className='register_wrapper'>
            <div className='form_wrapper'>
                <form className='register_form' onSubmit={handleSubmit}>
                    <h2>Создайте аккаунт</h2>
                    <input type='email' placeholder='Ваш email'
                           value={formData.email}
                           onChange={() => setFormData({...formData, email: event.target.value})}/>
                    <input type='password' placeholder='Придумайте надежный пароль'
                           value={formData.password}
                           onChange={() => setFormData({...formData, password: event.target.value})}/>
                    <input type='password' placeholder='Повторите пароль'
                           onChange={() => setFormData({...formData, passwordCheck: event.target.value})}/>
                    <button type='submit'>Зарегистрироваться</button>
                    <div className='login_link'>
                        <p>Уже есть аккаунт?</p>
                        <a onClick={() => navigate("/login")}><span>Войти</span></a>
                    </div>
                </form>
            </div>
        </div>
    )
}