// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYTyyti-BajvnTR-y0emalrmrh0hsbBDA",
  authDomain: "react-course-ee41d.firebaseapp.com",
  projectId: "react-course-ee41d",
  storageBucket: "react-course-ee41d.appspot.com",
  messagingSenderId: "470299166158",
  appId: "1:470299166158:web:c5d5ae6a5ac65cce1a979f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);