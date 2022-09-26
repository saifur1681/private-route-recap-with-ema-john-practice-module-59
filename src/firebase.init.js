// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsz91z3_cNVY64LffSDvkArylF9G0xu8g",
    authDomain: "private-route-recap-module-59.firebaseapp.com",
    projectId: "private-route-recap-module-59",
    storageBucket: "private-route-recap-module-59.appspot.com",
    messagingSenderId: "475879109606",
    appId: "1:475879109606:web:020cfaa8aae4b3333e1c27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;