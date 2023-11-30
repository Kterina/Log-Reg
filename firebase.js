// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAog2yQXRjMa_anjuOEfrT6Q2tTGqfwqdQ",
    authDomain: "login-14b79.firebaseapp.com",
    projectId: "login-14b79",
    storageBucket: "login-14b79.appspot.com",
    messagingSenderId: "366761925906",
    appId: "1:366761925906:web:f12ff156b1f799af1b67cb",
    measurementId: "G-2GH61W4GY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);