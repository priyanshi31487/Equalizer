// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGjhpeTsvAlADaSTdYix65AKKr5P5cJAw",
  authDomain: "anshyati-3004d.firebaseapp.com",
  projectId: "anshyati-3004d",
  storageBucket: "anshyati-3004d.appspot.com",
  messagingSenderId: "283726358207",
  appId: "1:283726358207:web:463e5479836564f617880a",
  measurementId: "G-MY6JPDVSS3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();