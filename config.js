import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyB1T96K1aDG2wTAs5QUQN8HBYwNQATPEv8",
    authDomain: "project-71-66ee0.firebaseapp.com",
    projectId: "project-71-66ee0",
    storageBucket: "project-71-66ee0.appspot.com",
    messagingSenderId: "775888497575",
    appId: "1:775888497575:web:cab0fe66a7006f03f42482",
    measurementId: "G-JQJ1J3YDQM"
  };
  
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
