import {initializeApp} from "firebase/app";
import {GoogleAuthProvider, 
        getAuth, 
        signInWithPopup,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        sendPasswordResetEmail,
        signOut,
} from "firebase/auth";

import {getFirestore,
        query,
        getDocs,
        collection,
        where,
        addDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiX3FZnP9n3aOUzM2ISG8GpoFAqbjjKXE",
  authDomain: "datosplantilla-46cf4.firebaseapp.com",
  projectId: "datosplantilla-46cf4",
  storageBucket: "datosplantilla-46cf4.appspot.com",
  messagingSenderId: "974112627032",
  appId: "1:974112627032:web:1d88416b4dba252d7f6d2d",
  measurementId: "G-6JWWKHJKYF"
}

        
const app= initializeApp(firebaseConfig)
const auth= getAuth(app)
const db= getFirestore(app)

const googleProvider= new GoogleAuthProvider();


const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (err) {
    return false;
  }
};

const registerWithEmailAndPassword = async ( name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    //console.log("Este es: ",email,password)
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err.message);
    //alert(err.message);
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
};


