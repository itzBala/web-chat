// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Xn-aLX8D0oF4gRzbSLG-5beeeWVcT9c",
  authDomain: "web-chat-247e6.firebaseapp.com",
  projectId: "web-chat-247e6",
  storageBucket: "web-chat-247e6.appspot.com",
  messagingSenderId: "184239669322",
  appId: "1:184239669322:web:cd3b74d2ea3f67b64066b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();