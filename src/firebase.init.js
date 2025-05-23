// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzJZ9-J2iNRaI7OMR3fOZAPmHc_-732kA",
  authDomain: "gardening-105ca.firebaseapp.com",
  projectId: "gardening-105ca",
  storageBucket: "gardening-105ca.firebasestorage.app",
  messagingSenderId: "774239475986",
  appId: "1:774239475986:web:07c523a474da2f60f8fbcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);