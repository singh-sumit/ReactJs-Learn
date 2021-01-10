import firebase from "firebase/app";
import "firebase/firestore";

// config firebase
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDSRJML_ueEr4G_6n5pvo3s_hkzu_lQOB0",
  authDomain: "todo-guided-1c2b1.firebaseapp.com",
  databaseURL: "https://todo-guided-1c2b1-default-rtdb.firebaseio.com",
  projectId: "todo-guided-1c2b1",
  storageBucket: "todo-guided-1c2b1.appspot.com",
  messagingSenderId: "777324455535",
  appId: "1:777324455535:web:cbecbefe8c96d4e6d90f9a",
  measurementId: "G-CVWWWW4EVM",
});

export { firebaseConfig as firebase };
