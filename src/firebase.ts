import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB64iH14IbSn0_qMyebNytZsnxzAauNqjs",
  authDomain: "reactchat-xin.firebaseapp.com",
  projectId: "reactchat-xin",
  storageBucket: "reactchat-xin.appspot.com",
  messagingSenderId: "646403899649",
  appId: "1:646403899649:web:6b00042565fa01e69f5b00"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };


