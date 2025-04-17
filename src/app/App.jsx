import './App.scss'
import Header from "../components/Header/Header.jsx";
import Nav from "../components/Nav/Nav.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Register from "../components/Register/Register.jsx";
import Main from "../components/Main/Main.jsx";
import Login from "../components/Login/Login.jsx";
import {useEffect, useState} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import ForgotPassword from "../components/ForgotPassword/ForgotPassword.jsx";
import {getAuth, onAuthStateChanged} from "firebase/auth";

function App() {
    const [navActive, setNavActive] = useState({
        "name": "Бургеры",
        "icon": "burgerIcon",
        "group": "burgers",
        "id": "1"
    });
    const stateNavActive = {navActive, setNavActive};
    const auth = getAuth();
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
           if (user) {
               setUser(user);
               navigate("/");
           }
           else{
               setUser(null);
               navigate("/login");
           }
        })
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <header>
                <Header/>
                <div className='container header_nav'>
                    <Nav stateNavActive={stateNavActive}/>
                </div>
            </header>
            <main className='container main_wrapper'>
                <div className='main'>
                    <Routes>
                        <Route path="/" element={<Main navActive={navActive}/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/forgot_password" element={<ForgotPassword/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                </div>
            </main>
            <footer className='footer'>
                <div className='container'>
                    <Footer/>
                </div>
            </footer>
            {/*{idShowModal && <ModalContainer>{getModalContent(idShowModal, setIdShowModal)}</ModalContainer>}*/}
        </>
    )
}

export default App
