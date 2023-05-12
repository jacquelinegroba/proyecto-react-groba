// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaoWzIJxou8DaZa7_QlR2Hmi9id43FjQQ",
    authDomain: "equipassion-9a700.firebaseapp.com",
    projectId: "equipassion-9a700",
    storageBucket: "equipassion-9a700.appspot.com",
    messagingSenderId: "357907429760",
    appId: "1:357907429760:web:d25ea795bfdcd1fc6b2965"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const productsCollection = collection(db, 'products')