import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore"
import { getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "firechat-4f61f.firebaseapp.com",
  projectId: "firechat-4f61f",
  storageBucket: "firechat-4f61f.appspot.com",
  messagingSenderId: "674115218801",
  appId: "1:674115218801:web:9f2c103e24ea3116e41ad0"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db =getFirestore()
export const storage =getStorage()
