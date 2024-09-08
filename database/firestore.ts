// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

import { useSession } from '../ctx'

export const firebaseConfig = {
  apiKey: "AIzaSyDmxpaUdpMpwfhwP9h0BFZ_Uw0Xx0iAu3M",
  authDomain: "devheroes-startup.firebaseapp.com",
  projectId: "devheroes-startup",
  storageBucket: "devheroes-startup.appspot.com",
  messagingSenderId: "314825777364",
  appId: "1:314825777364:web:78841b3732efa4e75d1b41",
  measurementId: "G-T3535DH5W0"
};

export interface Plant {
  plantName?: string;
  plantDescription: string;
  plantEspecie: string;
  plantImageSrc?: string;
}

const { session } = useSession();

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore()

export const auth = getAuth(app)

export async function signUpNewUser(email: string, pwd: string, passUser: any) {
  try {
    await signInWithEmailAndPassword(auth, email, pwd)
    .then(res => passUser(res.user.uid))
    return true
  } catch (err) {
    return 'Falha no envio'
  }
}

export async function getPlants() {
  const docRef = doc(db, "plants", session);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return null
  }
}