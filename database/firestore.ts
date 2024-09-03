// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, setPersistence, inMemoryPersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDmxpaUdpMpwfhwP9h0BFZ_Uw0Xx0iAu3M",
  authDomain: "devheroes-startup.firebaseapp.com",
  projectId: "devheroes-startup",
  storageBucket: "devheroes-startup.appspot.com",
  messagingSenderId: "314825777364",
  appId: "1:314825777364:web:78841b3732efa4e75d1b41",
  measurementId: "G-T3535DH5W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);

export const db = getFirestore()
const auth = getAuth(app)

export interface Plant {
  plantName?: string;
  plantDescription: string;
  plantEspecie: string;
  plantImageSrc?: string;
}

export function signUpNewUser(email: string, pwd: string) {
  createUserWithEmailAndPassword(auth, email, pwd).then(res=> console.log(res))
}

export function authenticateUSer(email: string, pwd: string) {
  setPersistence(auth, inMemoryPersistence).then(() => {
    signInWithEmailAndPassword(auth, email, pwd)
      .then(res=> console.log(res))
      .catch(err => console.error('Failed to create User', err))
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Erro ao salvar dados', errorCode, errorMessage)
  })
}