import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0yzq2Coem2oZXfUAQrP9xYNzANUn8hQc",
  authDomain: "clone-664c8.firebaseapp.com",
  projectId: "clone-664c8",
  storageBucket: "clone-664c8.appspot.com",
  messagingSenderId: "216676385499",
  appId: "1:216676385499:web:7cc86fc732516a014442fe",
  measurementId: "G-0TSK45S1YK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
