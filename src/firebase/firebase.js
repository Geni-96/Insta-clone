import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB3F4a0m3FbISfmRT--Y_VC-a_paoh6O-U",
  authDomain: "insta-clone-c8a4c.firebaseapp.com",
  projectId: "insta-clone-c8a4c",
  storageBucket: "insta-clone-c8a4c.appspot.com",
  messagingSenderId: "416512692594",
  appId: "1:416512692594:web:955c75b5eac60c8b324deb",
  measurementId: "G-S66YRLZGCQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage}