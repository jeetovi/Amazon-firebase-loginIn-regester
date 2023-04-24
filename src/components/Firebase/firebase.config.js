// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIRj-DgCOV29EBfz3vuTk0zwEY4TpEAd0",
  authDomain: "ema-auth-firebase.firebaseapp.com",
  projectId: "ema-auth-firebase",
  storageBucket: "ema-auth-firebase.appspot.com",
  messagingSenderId: "388619248898",
  appId: "1:388619248898:web:5262b670d3fbf538d48e1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;