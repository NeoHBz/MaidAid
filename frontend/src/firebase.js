// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWOE7IRFZz2x_9V0KI3jduH6zaXVaf7UI",
  authDomain: "maidaid-3003d.firebaseapp.com",
  projectId: "maidaid-3003d",
  storageBucket: "maidaid-3003d.appspot.com",
  messagingSenderId: "279092118889",
  appId: "1:279092118889:web:b0204df73c3d84cb30a9f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth, app };
