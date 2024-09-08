import { db } from  './firestore'
import { doc, getDocs, setDoc, collection, addDoc } from 'firebase/firestore/lite'

export interface Plant {
  plantName?: string;
  plantDescription: string;
  plantEspecie: string;
  plantImageSrc?: string;
}

export async function addPlant(data: Plant) {
  console.log('@addPlant data', data)

  // await setDoc(doc(db, 'gabrielmacedo', 'plantas'), data)
}