// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzWvCn5C2D69pEkIkzNViCAkTuG3GBSb0",
  authDomain: "primegpt-5df01.firebaseapp.com",
  projectId: "primegpt-5df01",
  storageBucket: "primegpt-5df01.firebasestorage.app",
  messagingSenderId: "385278914089",
  appId: "1:385278914089:web:5b1874d7021c761d217638",
  measurementId: "G-HQL79HFYCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();