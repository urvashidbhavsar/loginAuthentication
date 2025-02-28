import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbYcYplKkrkFUIqXALZB-fufXdLesEDHQ",
  authDomain: "mydata-47b87.firebaseapp.com",
  projectId: "mydata-47b87",
  storageBucket: "mydata-47b87.firebasestorage.app",
  messagingSenderId: "303609466932",
  appId: "1:303609466932:web:89f96796e97c67fa133a61",
  measurementId: "G-P73E46ZRP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)
export default app