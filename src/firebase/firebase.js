import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFWawJerERv3Cq0nAaUTCD7ey_xlyK5vQ",
  authDomain: "ecommerce-e97e3.firebaseapp.com",
  databaseURL: "https://ecommerce-e97e3.firebaseio.com",
  projectId: "ecommerce-e97e3",
  storageBucket: "ecommerce-e97e3.appspot.com",
  messagingSenderId: "824582939514",
  appId: "1:824582939514:web:f12725381af9b86766acc3",
  measurementId: "G-9WQTB9XS6Y",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
