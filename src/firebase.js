// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVI5DrDPg2bEPwXArvYHoOzdUxcXAGVUI",
  authDomain: "facebook-clone-crud.firebaseapp.com",
  projectId: "facebook-clone-crud",
  storageBucket: "facebook-clone-crud.appspot.com",
  messagingSenderId: "333779363217",
  appId: "1:333779363217:web:e305ae71bed6662b9d2630",
  measurementId: "G-6R2CYS42LP",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
