// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjtD9qr8MiFhIuafEdMn_tpaAZst_9X9I",
  authDomain: "local-eats-discovery.firebaseapp.com",
  projectId: "local-eats-discovery",
  storageBucket: "local-eats-discovery.appspot.com",
  messagingSenderId: "397680618198",
  appId: "1:397680618198:web:cfb9c9f8235811ac02f777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app