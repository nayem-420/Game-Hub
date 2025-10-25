// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc6CaOrD8qJzR5f0KaML-LTOGHbqmNQAw",
  authDomain: "game-hub-auth-742c8.firebaseapp.com",
  projectId: "game-hub-auth-742c8",
  storageBucket: "game-hub-auth-742c8.firebasestorage.app",
  messagingSenderId: "753236102420",
  appId: "1:753236102420:web:8100c8c37ff056fd9b0601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);