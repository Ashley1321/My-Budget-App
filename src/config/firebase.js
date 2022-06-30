// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0PZV00z-jBArDZO42z_bHhNrS9nLGVko",
  authDomain: "budget-app-40454.firebaseapp.com",
  projectId: "budget-app-40454",
  storageBucket: "budget-app-40454.appspot.com",
  messagingSenderId: "235048502216",
  appId: "1:235048502216:web:3ebd45be5d9defc981b6fd",
  measurementId: "G-7YPBJMHZ4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {auth} ;