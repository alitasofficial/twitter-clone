// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import { firebase } from "firebase/compat/app";
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgPTib-pOJCbuozXIC_YPhRZoP3rzbWNw",
  authDomain: "twitter-clone-ff3d6.firebaseapp.com",
  projectId: "twitter-clone-ff3d6",
  storageBucket: "twitter-clone-ff3d6.appspot.com",
  messagingSenderId: "818429087543",
  appId: "1:818429087543:web:564ee7e75504f7704e14b2",
  measurementId: "G-LN2362KYJM",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
