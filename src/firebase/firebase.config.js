// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcAzgFGx5g7gPWXQliPS_kpAz0AMj5ZpE",
  authDomain: "cs-learners.firebaseapp.com",
  projectId: "cs-learners",
  storageBucket: "cs-learners.appspot.com",
  messagingSenderId: "1066185874514",
  appId: "1:1066185874514:web:5cccefc02699d8c5d9938b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;