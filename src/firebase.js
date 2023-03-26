// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLJrKJu_vBePOOy-z1z9NsmMQfwnZsjvE",
  authDomain: "movieapp001-29fba.firebaseapp.com",
  projectId: "movieapp001-29fba",
  storageBucket: "movieapp001-29fba.appspot.com",
  messagingSenderId: "286993039570",
  appId: "1:286993039570:web:6b99883fc533911c952d0b",
  measurementId: "G-61XL2YRR0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


export {app, auth}