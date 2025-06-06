// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcGB2a1nYzEdSCuZnMgRSlAuACb0E72LI",
  authDomain: "the-dragon-news-ddc3f.firebaseapp.com",
  projectId: "the-dragon-news-ddc3f",
  storageBucket: "the-dragon-news-ddc3f.firebasestorage.app",
  messagingSenderId: "278547443659",
  appId: "1:278547443659:web:7c955a6b4923a0113f504e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;