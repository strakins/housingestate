// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "strakinsestate.firebaseapp.com",
  projectId: "strakinsestate",
  storageBucket: "strakinsestate.appspot.com",
  messagingSenderId: "323270055928",
  appId: "1:323270055928:web:8459aa0756e1976e9d280d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);