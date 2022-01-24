// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsLAPBpY-mivSdwe3tGw1FRIsHc7ZscJo",
  authDomain: "pokemon-app-827df.firebaseapp.com",
  projectId: "pokemon-app-827df",
  storageBucket: "pokemon-app-827df.appspot.com",
  messagingSenderId: "249254241203",
  appId: "1:249254241203:web:0e081ae97bc815343021c6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebook = new firebase.auth.FacebookAuthProvider();
export {
    db,
    googleAuthProvider,
    firebase,
    facebook
}
