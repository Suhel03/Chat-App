// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1Yo3b7nAaorGIb-J350w3VdeYvG75sq0",
  authDomain: "chat-app-b1046.firebaseapp.com",
  projectId: "chat-app-b1046",
  storageBucket: "chat-app-b1046.appspot.com",
  messagingSenderId: "720069264710",
  appId: "1:720069264710:web:6a519024822af943ff9147",
  measurementId: "G-V7PPCCMJ6Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()