// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAJvvrh9oVcbGHTPrXYyOQfwkrkECrf5o",
  authDomain: "mind-harbour.firebaseapp.com",
  projectId: "mind-harbour",
  storageBucket: "mind-harbour.appspot.com",
  messagingSenderId: "1081316730195",
  appId: "1:1081316730195:web:e0f805cec0c2a8938dada6",
  measurementId: "G-ST97RQBNCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const storage = getStorage(app);