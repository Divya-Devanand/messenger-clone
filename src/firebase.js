import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBPmiBRYAjUBj8bnNp3anbxf78ar8NNlwk",
  authDomain: "facebook-messenger-clone-2fb8b.firebaseapp.com",
  projectId: "facebook-messenger-clone-2fb8b",
  storageBucket: "facebook-messenger-clone-2fb8b.appspot.com",
  messagingSenderId: "926840298452",
  appId: "1:926840298452:web:5ddfce07e871213d9f1441",
  measurementId: "G-YRTN73YP62"
});

const db = firebaseApp.firestore();

export default db;