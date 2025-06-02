// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTy6uH8XocHHzFSZ2YJyFxHu0egcobzvo",
  authDomain: "verbaly-app.firebaseapp.com",
  projectId: "verbaly-app",
  storageBucket: "verbaly-app.firebasestorage.app",
  messagingSenderId: "273748852469",
  appId: "1:273748852469:web:1fe52d05fcad8f537d0fbc",
  measurementId: "G-9X83PWTPGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);