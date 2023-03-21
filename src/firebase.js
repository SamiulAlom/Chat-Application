import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDAT3lDUAuDbhDwivNV_IcDiTYjH0A954",
  authDomain: "chatapp-7bbb5.firebaseapp.com",
  projectId: "chatapp-7bbb5",
  storageBucket: "chatapp-7bbb5.appspot.com",
  messagingSenderId: "765842824400",
  appId: "1:765842824400:web:5637dd3730d4a7a40012d5",
  measurementId: "G-ZCWFRY34FP",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
