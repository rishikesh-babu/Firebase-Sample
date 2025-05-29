// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEo9FnEFp26wi4pqlubgUv28Tj-Z2n9Ac",
    authDomain: "data-form-r390.firebaseapp.com",
    projectId: "data-form-r390",
    storageBucket: "data-form-r390.firebasestorage.app",
    messagingSenderId: "288592968090",
    appId: "1:288592968090:web:a69392de0489e50f8de223"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)