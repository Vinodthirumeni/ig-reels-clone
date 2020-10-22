import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCqc1YBCwropuTOiL9gahuSTYQ4mF6VcM0",
  authDomain: "ig-reels-clone-3e733.firebaseapp.com",
  databaseURL: "https://ig-reels-clone-3e733.firebaseio.com",
  projectId: "ig-reels-clone-3e733",
  storageBucket: "ig-reels-clone-3e733.appspot.com",
  messagingSenderId: "362456377193",
  appId: "1:362456377193:web:2a63398040436ba316bff8",
  measurementId: "G-WEL5LEE6XH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

// If firebase expired
// https://console.firebase.google.com/u/0/project/ig-reels-clone-3e733/firestore/rules
