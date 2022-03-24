// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_XxipM79qdEaL-G7OpWBJadiiFOFhZf0",
  authDomain: "rn-instagram-clone-d5f29.firebaseapp.com",
  projectId: "rn-instagram-clone-d5f29",
  storageBucket: "rn-instagram-clone-d5f29.appspot.com",
  messagingSenderId: "654276423241",
  appId: "1:654276423241:web:251b5a370728ec9b7d1998",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

