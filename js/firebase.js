// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ714ZIdowxrA-R7TG7n6yD5nNsY9BUI4",
  authDomain: "doantnngoctoan.firebaseapp.com",
  databaseURL: "https://doantnngoctoan-default-rtdb.firebaseio.com",
  projectId: "doantnngoctoan",
  storageBucket: "doantnngoctoan.firebasestorage.app",
  messagingSenderId: "828323790307",
  appId: "1:828323790307:web:e678e2d0a628d1bedc34d6",
  measurementId: "G-J4S1DV1QVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);