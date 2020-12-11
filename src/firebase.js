import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtFRNfG-jDMynog-hZqKN-5Mp5YpR0RXA",
  authDomain: "phoenix-6b2b2.firebaseapp.com",
  projectId: "phoenix-6b2b2",
  storageBucket: "phoenix-6b2b2.appspot.com",
  messagingSenderId: "1000816114458",
  appId: "1:1000816114458:web:e52030fc5fb7bdb996caa3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
