// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCmZ9-iQYJu8VdxYW7CIp-JT7jWLEiHPI",
  authDomain: "qfuel-c1d1c.firebaseapp.com",
  projectId: "qfuel-c1d1c",
  storageBucket: "qfuel-c1d1c.appspot.com",
  messagingSenderId: "6488750946",
  appId: "1:6488750946:web:6a5c27d548e0eddd5b4a3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
