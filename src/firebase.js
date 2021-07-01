import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCgLyd9CeVwgCQdjagMG51tbpLcH5h8DIg",
    authDomain: "react-crud-1dc79.firebaseapp.com",
    databaseURL: "https://react-crud-1dc79-default-rtdb.firebaseio.com",
    projectId: "react-crud-1dc79",
    storageBucket: "react-crud-1dc79.appspot.com",
    messagingSenderId: "1030550799308",
    appId: "1:1030550799308:web:74aa28a9d1b941d9439369"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase