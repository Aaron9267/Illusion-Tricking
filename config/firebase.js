import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAvMbtVZnNLMfYjm9vOIB6ZJ6zF9fQO2Vs",
  authDomain: "tricktionary-fbaaa.firebaseapp.com",
  projectId: "tricktionary-fbaaa",
  storageBucket: "tricktionary-fbaaa.appspot.com",
  messagingSenderId: "773934813972",
  appId: "1:773934813972:web:c42b6e7f25090ced3b6801"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)