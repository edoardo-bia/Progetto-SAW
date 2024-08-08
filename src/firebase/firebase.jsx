import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "MYKEY",
  authDomain: "MYDOMAIN",
  projectId: "MYPROJECT",
  storageBucket: "MYSTORAGE",
  messagingSenderId: "MYSENDER",
  appId: "MYAPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
