// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
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

const { session: userId } = useSession();

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore()

export const auth = getAuth(app)

export async function signInNewUser(email: string, pwd: string, passUser: any) {
  try {
    await signInWithEmailAndPassword(auth, email, pwd)
    .then(res => passUser(res.user.uid))
    return true
  } catch (err) {
    return 'Falha no envio'
  }
}

export async function getPlants() {
  // busca as infos gerais das plantas
  const docRef = doc(db, "plants", userId);
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




export async function signUp(email: string, password: string, data: any) {
  // cria usuário no firebase
  createUserWithEmailAndPassword(auth, email, password)

  // se der sucesso na criação do usuário, atualiza os dados do usuário no firestore
  updateUserData(data)
}
async function updateUserData(dados: any) {
  // atualizar informações do usuário users/(userId)
}
export async function getUserInfo() {
  // buscar informações do usuário em users/(userId)
}
export async function createNewPlant() {
  // adiciona um novo documento de plantas no caminho plants/(userId)/plant/idDaPlanta
}
export async function getUniquePlant(plantId: number) {
  // busca uma planta no caminho plants/(userId)/plant/idDaPlanta
}
export async function updatePlant(plantId: number) {
  // atualiza as infos de uma planta no caminho plants/(userId)/plant/idDaPlanta
}
export async function deletePlant(plantId: number) {
  // remove uma planta no caminho plants/(userId)/plant/idDaPlanta
}