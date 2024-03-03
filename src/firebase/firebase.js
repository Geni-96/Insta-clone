import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDloHhQJYbwDnGFK3PUPVqTXWHSX_I5ePM",
  authDomain: "insta-clone-69132.firebaseapp.com",
  projectId: "insta-clone-69132",
  storageBucket: "insta-clone-69132.appspot.com",
  messagingSenderId: "351555821993",
  appId: "1:351555821993:web:4297b6c5070568730c24b8",
  measurementId: "G-X68H3540SP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage}