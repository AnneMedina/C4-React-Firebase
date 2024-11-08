# C4-React-Firebase
React application accessing and storing data to Firebase


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATod***BL2VZRM6WvL1GGTA",
  authDomain: "reactfirebase-8c57b.firebaseapp.com",
  projectId: "reactfirebase-8c57b",
  storageBucket: "reactfirebase-8c57b.firebasestorage.app",
  messagingSenderId: "848530---005",
  appId: "1:848530666005:web:105b0a01b0f755c991141c",
  measurementId: "G-E0JGK6SP8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
