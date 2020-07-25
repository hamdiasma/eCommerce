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

export const createUserProfile = async (userAuth, aditionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (snapShot.exists) {
    const dateCreate = new Date();
    try {
      await userRef.set({
        displayName: userAuth.displayName,
        email: userAuth.email,
        dateCreate,
        photoURL: userAuth.photoURL,
        ...aditionalData,
      });
    } catch (error) {
      console.log("user not created ", error.message);
    }
  }
  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
