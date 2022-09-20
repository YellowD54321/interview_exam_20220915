// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhZDXs9V2h6ppVU4fAElPfC0OYnhXrE7k",
  authDomain: "yellowd-exhibit.firebaseapp.com",
  projectId: "yellowd-exhibit",
  storageBucket: "yellowd-exhibit.appspot.com",
  messagingSenderId: "898744245041",
  appId: "1:898744245041:web:1c228647554052392f6e10",
  measurementId: "G-BTRG4CSS2L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
