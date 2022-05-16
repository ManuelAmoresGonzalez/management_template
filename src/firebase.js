import {initializeApp} from "firebase/app";
import firebase from "../node_modules/firebase/compat"; 
import 'firebase/compat/firestore';

import {getAuth, 
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        sendPasswordResetEmail,
        signOut,
        
} from "firebase/auth";

import {getFirestore,
        collection,
        addDoc} from "firebase/firestore";

import { getDatabase } from "firebase/database";


const firebaseConfig = firebase.initializeApp(
  {
  apiKey: "AIzaSyBiX3FZnP9n3aOUzM2ISG8GpoFAqbjjKXE",
  authDomain: "datosplantilla-46cf4.firebaseapp.com",
  projectId: "datosplantilla-46cf4",
  storageBucket: "datosplantilla-46cf4.appspot.com",
  messagingSenderId: "974112627032",
  appId: "1:974112627032:web:1d88416b4dba252d7f6d2d",
  measurementId: "G-6JWWKHJKYF"
  }
)

        

const auth= firebaseConfig.auth();
const db= firebaseConfig.firestore();
const storage= firebaseConfig.storage();


const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (err) {
    return false;
  }
};

function StartFirebase(){
  return getDatabase(firebaseConfig);
}

const registerWithEmailAndPassword = async ( name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err.message);
    alert("A ocurrido un error a la hora de registrarte");
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,  
  StartFirebase,
  storage
  
};


