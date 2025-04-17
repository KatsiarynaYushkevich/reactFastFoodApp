// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAMiyJ_2b2wc07iZ5bPp2Sfsx3LNXarXZg",
    authDomain: "burgers-app-bd215.firebaseapp.com",
    projectId: "burgers-app-bd215",
    storageBucket: "burgers-app-bd215.firebasestorage.app",
    messagingSenderId: "166979641792",
    appId: "1:166979641792:web:186c92c50682d4bbbc2825",
    measurementId: "G-YSVXQF0R5W"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
