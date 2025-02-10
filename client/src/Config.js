// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJMQuaN20XKEUuc7Qo_A8U5AjfHsqCvUU",
  authDomain: "login-e137b.firebaseapp.com",
  projectId: "login-e137b",
  storageBucket: "login-e137b.firebasestorage.app",
  messagingSenderId: "828859850610",
  appId: "1:828859850610:web:24634ed5c3a879b25687eb",
  measurementId: "G-20SBCSHL12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// HANDLE GOOGLE LOGIN
const handleGoogleLogin = async (setError) => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log('Google Sign-In:', result.user);
        setError('');
    } catch (err) {
        console.log(err);
        setError('Google Sign-In failed');
    }
}

// HANDLE LOGIN USING EMAIL AND PASSWORD
const handleSubmit = async (e, setError) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCred.user);
        setError('');
    } catch (err) {
        console.log(err);
        setError('Invalid email or password');
    }
    e.target.reset();
}

export {auth,googleProvider,handleGoogleLogin,handleSubmit};