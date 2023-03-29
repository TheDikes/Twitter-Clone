import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq8w1NASOIUi8Xd3k0M0ebuaVJKbkjEz0",
  authDomain: "twitter-clone-7e5ac.firebaseapp.com",
  projectId: "twitter-clone-7e5ac",
  storageBucket: "twitter-clone-7e5ac.appspot.com",
  messagingSenderId: "35180636374",
  appId: "1:35180636374:web:849d23d092ad1b4c068177",
  measurementId: "G-0SBKSE0YLX",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
