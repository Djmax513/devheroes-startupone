import { db } from  './firestore'
import { collection, addDoc } from 'firebase/firestore'

export interface User {
  document: number;
  firstName: string;
  lastName: string;
  email?: string;
  dateBirth: string;
  isGoogle: boolean;
  profilePhoto: string;
}

export async function addUser (data: User) {
  addDoc(collection(db, 'user'), data)
    .then(res => console.log('Success!!', res))
    .catch(err => console.error('Failed to send userData', err))
}