// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkJG1mOuRJO8FL8c1aKQ2eY5F7mkmkuow",
    authDomain: "ejp-project-7c0c5.firebaseapp.com",
    projectId: "ejp-project-7c0c5",
    storageBucket: "ejp-project-7c0c5.firebasestorage.app",
    messagingSenderId: "492364803156",
    appId: "1:492364803156:web:5da2406d6696babc6e51c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);