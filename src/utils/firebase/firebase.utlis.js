// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import firebase Auth
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// setup document

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDStSNG0pm79xr6fnXcZtbaz5hAe80hJbs",
  authDomain: "e-commerce-db-91566.firebaseapp.com",
  projectId: "e-commerce-db-91566",
  storageBucket: "e-commerce-db-91566.appspot.com",
  messagingSenderId: "999537663809",
  appId: "1:999537663809:web:804e9c386a3f4dec7ecbc0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createedAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createedAt });
    } catch (error) {
      console.log("error creating document", error.message);
    }
  }
};
