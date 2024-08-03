// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpcFmnQOjJfe4cpaXAltIxNZfEGTUvCOU",
  authDomain: "fiap-f47ba.firebaseapp.com",
  projectId: "fiap-f47ba",
  storageBucket: "fiap-f47ba.appspot.com",
  messagingSenderId: "653904670574",
  appId: "1:653904670574:web:057a2aa963d1f886c2db7f",
  measurementId: "G-0MJRW5CL1W"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);