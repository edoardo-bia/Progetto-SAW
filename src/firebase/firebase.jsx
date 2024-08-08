// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiIb5OFVB0K7Q32H8EAmF2WcWef4jzb3Y",
  authDomain: "progetto-saw-6e446.firebaseapp.com",
  projectId: "progetto-saw-6e446",
  storageBucket: "progetto-saw-6e446.appspot.com",
  messagingSenderId: "715633570916",
  appId: "1:715633570916:web:ff22cf1cf6514e0f8a9b71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };