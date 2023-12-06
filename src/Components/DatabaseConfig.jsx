import {getFirestore} from '@firebase/firestore'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAbSkEax7ctdMTQXVuboi6STT0E_m1bTNc",
  authDomain: "mynewnote-e5a2c.firebaseapp.com",
  projectId: "mynewnote-e5a2c",
  storageBucket: "mynewnote-e5a2c.appspot.com",
  messagingSenderId: "871551962372",
  appId: "1:871551962372:web:3fbfecb3a662de7d48d451",
  measurementId: "G-0K65Y7EXP5"
};
   const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)