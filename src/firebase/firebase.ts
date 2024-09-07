// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvW7ZZmA99LrN-HZWj2qe_0ifhUHkZ3JE",
    authDomain: "muse-hub.firebaseapp.com",
    projectId: "muse-hub",
    storageBucket: "muse-hub.appspot.com",
    messagingSenderId: "747567228840",
    appId: "1:747567228840:web:5eac804c4d3c8a2e519f9d",
    measurementId: "G-HB636L79CD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
export const db = getFirestore();